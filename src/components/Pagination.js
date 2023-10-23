import React from "react";
import { Link } from "react-router-dom";
import classes from "./Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={classes.nav}>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.item}>
            <Link
              to={`/posts/page/${number}`}
              onClick={() => paginate(number)}
              className={`${classes.link} ${
                number === parseInt(currentPage, 10) ? classes.active : ""
              }`}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
