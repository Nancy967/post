import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import PostItem from "../components/PostItem";

function PostDetailPage() {
  const {
    post
  } = useRouteLoaderData("post-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={post}>
          {(loadedPost) => <PostItem post={loadedPost} />}
        </Await>
      </Suspense>
    </>
  );
}

export default PostDetailPage;

async function loadPost(id) {
  const response = await fetch(`${process.env.REACT_APP_API_PATH}/posts/` + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected post." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function loadPosts() {
  const response = await fetch(`${process.env.REACT_APP_API_PATH}/posts`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch posts." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.results;
  }
}

export async function loader({ request, params }) {
  const id = params.postId;

  return defer({
    post: await loadPost(id),
    posts: loadPosts(),
  });
}

export async function action({ params, request }) {
  const postId = params.postId;
  const response = await fetch(
    `${process.env.REACT_APP_API_PATH}/posts/` + postId,
    {
      method: request.method,
    }
  );

  if (!response.ok) {
    throw json(
      { message: "Could not delete post." },
      {
        status: 500,
      }
    );
  }
  return redirect("/posts");
}
