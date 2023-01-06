import React from "react";

interface Block {
  /** Rendered inside block_content */
  children: React.ReactNode,
  /** Rendered before block_content */
  beforeContent?: React.ReactNode,
  /** Rendered after block_content */
  afterContent?: React.ReactNode,
  type?: "filter",
  contentSize?: "s"
  align?: "left" | "right",
  title?: string
}

/**
 * Global element used in most components. See [here](https://randstad.design/getting-started/developers/block-header-content/).
 */
const Block = ({ children, beforeContent, afterContent, type, contentSize, align, title }: Block) => {
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

export default Block;
