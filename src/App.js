import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditPostPage from "./pages/EditPost";
import ErrorPage from "./pages/Error";
import PostDetailPage, {
  loader as postDetailLoader,
  action as deletePostAction,
} from "./pages/PostDetail";
import PostsPage from "./pages/Posts";
import PostsRootLayout from "./pages/PostsRoot";
import HomePage from "./pages/Home";
import NewPostPage from "./pages/NewPost";
import RootLayout from "./pages/Root";
import { action as manipulatePostAction } from "./components/PostForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "posts",
        element: <PostsRootLayout />,
        children: [
          { index: true, element: <PostsPage /> },
          {
            path: "page/:pageNumber",
            children: [
              {
                index: true,
                element: <PostsPage />,
              },
              {
                path: "post/:postId",
                id: "post-detail",
                loader: postDetailLoader,
                children: [
                  {
                    index: true,
                    element: <PostDetailPage />,
                    action: deletePostAction,
                  },
                  {
                    path: "edit",
                    element: <EditPostPage />,
                    action: manipulatePostAction,
                  },
                ],
              },
            ],
          },
          {
            path: "new",
            element: <NewPostPage />,
            action: manipulatePostAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
