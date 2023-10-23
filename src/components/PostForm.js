import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./PostForm.module.css";

function PostForm({ method, post }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={post ? post.title : ""}
        />
      </p>
      <p>
        <label htmlFor="imageUrl">Image</label>
        <input
          id="imageUrl"
          type="url"
          name="imageUrl"
          defaultValue={post ? post.imageUrl : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="10"
          required
          defaultValue={post ? post.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </Form>
  );
}

export default PostForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const postData = {
    title: data.get("title"),
    imageUrl: data.get("imageUrl"),
    description: data.get("description"),
  };

  let url = `${process.env.REACT_APP_API_PATH}/posts`;

  if (method === "PUT") {
    const postId = params.postId;
    url = `${process.env.REACT_APP_API_PATH}/posts/` + postId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save post." }, { status: 500 });
  }

  return redirect("/posts/page/1");
}
