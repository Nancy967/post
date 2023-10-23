import { Link } from "react-router-dom";
import classes from "./PostsList.module.css";

function PostsList({ posts }) {
  return (
    <div className={classes.posts}>
      <ul className={classes.list}>
        {posts && posts.map((post) => (
          <li key={post.postId} className={classes.item}>
            <Link to={`post/${post.postId}`}>
              <div className={classes.content}>
                <h2>{post.title}</h2>
                <time>{post.createdDate}</time>
                <p>
                  {post.description.slice(0, 50)}
                  {post.description.length > 50 ? "..." : ""}
                </p>
              </div>
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
