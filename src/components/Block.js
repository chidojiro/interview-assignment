import React from "react";
import t from "prop-types";

/**
 * Global element used in most components. See [here](https://randstad.design/getting-started/developers/block-header-content/).
 */
const Block = ({ children, beforeContent, afterContent, type, contentSize, align, title }) => {
  const classes = ["block"];
  const contentClasses = ["block__content"];

  if (type == "filter") {
    classes.push("block--filter");
  }

  if (contentSize) {
    contentClasses.push(`block__content--${contentSize}`);
  }

  if (align) {
    contentClasses.push(`block__content--align-${align}`);
  }

  return (
    <div className={classes.join(" ")}>
      <div className="block__wrapper wrapper">
        {title && (
          <div className="block__header">
            <h2 className="block__title">{title}</h2>
          </div>
        )}
        {beforeContent}
        <div className={contentClasses.join(" ")}>{children}</div>
        {afterContent}
      </div>
    </div>
  );
};

Block.propTypes = {
  /** Rendered inside block_content */
  children: t.any,
  /** Rendered before block_content */
  beforeContent: t.any,
  /** Rendered after block_content */
  afterContent: t.any,
  type: t.oneOf(["filter"]),
  contentSize: t.oneOf(["s"]),
  align: t.oneOf(["left", "right"]),
  title: t.string,
};

export default Block;
