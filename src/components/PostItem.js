import { Link, useSubmit, useParams } from "react-router-dom";

import classes from "./PostItem.module.css";
import Modal from "./UI/Modal";
import { useState } from "react";

function PostItem({ post }) {
const { pageNumber } = useParams();

  const submit = useSubmit();
  const [showModal, setShowModal] = useState(false);

  function deleteHandler(){
    submit(null, { method: "delete" });
  }

  return (
    <>
      <article className={classes.post}>
        <Link to={`/posts/page/${pageNumber}`}>← Go back</Link>
        <h1>{post.title}</h1>
        <time>Last modified date: {post.lastModifiedDate}</time>
        <p>{post.description}</p>
        {post.imageUrl && (
            <img src={post.imageUrl} alt={post.title} />
        )}
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className={classes.deleteBtn}
          >
            Delete
          </button>
        </menu>
      </article>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>Are you sure you want to delete "{post.title}"?</p>
          <menu className={classes.actions}>
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button onClick={deleteHandler} className={classes.deleteBtn}>
              Delete
            </button>
          </menu>
        </Modal>
      )}
    </>
  );
}

export default PostItem;
