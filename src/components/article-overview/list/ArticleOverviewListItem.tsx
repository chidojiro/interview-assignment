import React from "react";
import { BgColor, getBackground } from "@utils/getBackground";

interface Tags {
  text: string,
  url: string
}

interface Base {
  date?: string,
  /** title supports html */
  title: string,
  /** img attributes spread in `<img>` tag. Like data-attributes. */
  img?: React.ComponentPropsWithoutRef<"img">,
  tags?: Tags[],
  url: string,
  /** Used in placeholder image classes to determend background color. */
  bgColor?: any,
  /** Used to add divider class to component and display line bellow. */
  divider?: boolean,
}

interface WithPlaceholder extends Base {
  /** Add classes required for placeholder image */
  placeholder: true,
  bgColor: BgColor['bgColor'],
}

interface WithoutPlaceholder extends Base {
  /** Add classes required for placeholder image */
  placeholder?: false | undefined,
}

type ArticleOverviewListItem = WithPlaceholder | WithoutPlaceholder

/**
 * An overview of highlighted articles in different manifestations. See [here](https://randstad.design/components/examples/overviews/article-overview/)
 *
 */
const ArticleOverviewListItem = ({
  date,
  title,
  img,
  tags,
  url,
  placeholder,
  bgColor,
  divider = true,
}: ArticleOverviewListItem) => {
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

export default ArticleOverviewListItem