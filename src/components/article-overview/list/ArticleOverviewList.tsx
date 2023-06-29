import React from "react";

interface ArticleOverviewList {
  children : React.ReactNode
}

/**
 * An overview of highlighted articles in different manifestations. See [here](https://randstad.design/components/examples/overviews/article-overview/)
 *
 */
const ArticleOverviewList = ({ children }: ArticleOverviewList) => {
  return (
    <div className="blog-overview blog-overview--list " data-rs-carousel-wrapper="">
      <ul className="blog-overview__list" data-rs-carousel="blog-overview--list">
        {children}
      </ul>
    </div>
  );
};

export default ArticleOverviewList;
