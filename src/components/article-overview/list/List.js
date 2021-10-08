import React from "react";
import t from "prop-types";

const List = ({ children }) => {
  return (
    <div className="blog-overview blog-overview--list " data-rs-carousel-wrapper="">
      <ul className="blog-overview__list" data-rs-carousel="blog-overview--list">
        {children}
      </ul>
    </div>
  );
};

List.propTypes = {
  children: t.any,
};

export default List;
