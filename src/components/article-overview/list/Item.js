import React from "react";
import t from "prop-types";
import { getBackground } from "../../../utils/getBackground";

const Item = ({ date, title, img, tags, url, placeholder, bgColor, divider = true }) => {
  const imgClasses = ["blog-overview__media", "aspect-ratio", "aspect-ratio--3-2"];

  // CSS classes for placeholder image.
  if (placeholder) {
    imgClasses.push("blog-overview__media--border-radius");
    imgClasses.push("blog-overview__media--s");
    imgClasses.push(getBackground(bgColor, true));
  } else {
    imgClasses.push("media-block--center");
  }

  return (
    <li className={`blog-overview__item ${divider ? "divider" : ""}`}>
      <article className="blog-overview__article">
        {img && (
          <a href={url} className={imgClasses.join(" ")}>
            <img {...img} />
          </a>
        )}
        <div className="blog-overview__content">
          <a href={url} className="blog-overview__link">
            {date && <span className="blog-overview__date">{date}</span>}
            <span className="blog-overview__title" dangerouslySetInnerHTML={{ __html: title }} />
          </a>
          {tags && (
            <div className="link-tags hidden--until-l text-ellipsis">
              <ul className="link-tags__list ">
                {tags.map(({ text, url }, i) => (
                  <li key={i} className="link-tags__item">
                    <a href={url}>{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </li>
  );
};

Item.propTypes = {
  date: t.string,
  /** title supports html */
  title: t.any,
  /** img attributes spread in <img> tag. Like data-attributes. */
  img: t.object,
  tags: t.arrayOf(
    t.shape({
      text: t.string,
      url: t.string,
    }),
  ),
  url: t.string,
  placeholder: t.bool,
  /** Used in placeholder image classes to determend background color. */
  bgColor: t.string,
  /** Used to add divider class to component and display line bellow. */
  divider: t.bool,
};

Item.defaultProps = {
  divider: true,
};

export default Item;
