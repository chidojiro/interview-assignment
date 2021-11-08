import React from "react";
import t from "prop-types";

/**
 * An overview of highlighted articles in different manifestations. See [here](https://randstad.design/components/examples/overviews/article-overview/)
 *
 */
const ArticleOverviewList = ({ children }) => {
  return (
    <div className="blog-overview blog-overview--list " data-rs-carousel-wrapper="">
      <ul className="blog-overview__list" data-rs-carousel="blog-overview--list">
        {children}
      </ul>
    </div>
  );
};

ArticleOverviewList.propTypes = {
  children: t.any,
};

export default ArticleOverviewList;
