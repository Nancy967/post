import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostsList from "../components/PostsList";
import Pagination from "../components/Pagination";

function PostsPage() {
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  let limit = 4;

  useEffect(() => {
    const offset = ((pageNumber ? pageNumber : 1) - 1) * limit;

    const getPosts = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_PATH}/posts?offset=${offset}&limit=${limit}`
      );
      const data = await res.json();
      const dataTotal = data.total;
      setTotal(dataTotal);
      setItems(data.results);
      setLoading(false);
    };

    getPosts();
  }, [limit, pageNumber]);

  const fetchPosts = async (currentPage) => {
    const offset = (currentPage - 1) * limit;
    const res = await fetch(
      `${process.env.REACT_APP_API_PATH}/posts?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    return data.results;
  };

  const handlePageClick = async (data) => {
    const postsFormServer = await fetchPosts(data);
    setItems(postsFormServer);
    setLoading(false);

    // scroll to the top
    window.scrollTo(0, 0);

    navigate(`/posts/page/${data}`);
  };

  return (
    <>
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {!loading && (
        <>
          <PostsList posts={items} />
          <Pagination
            postsPerPage={limit}
            totalPosts={total}
            paginate={handlePageClick}
            currentPage={pageNumber ? pageNumber : 1}
          />
        </>
      )}
    </>
  );
}

export default PostsPage;
