import React from 'react';
import { BgColor } from '../../../utils/getBackground';
interface Tags {
  text: string;
  url: string;
}
interface Base {
  date?: string;
  /** title supports html */
  title: string;
  /** img attributes spread in `<img>` tag. Like data-attributes. */
  img?: React.ComponentPropsWithoutRef<'img'>;
  tags?: Tags[];
  url: string;
  /** Used in placeholder image classes to determend background color. */
  bgColor?: any;
  /** Used to add divider class to component and display line bellow. */
  divider?: boolean;
}
interface WithPlaceholder extends Base {
  /** Add classes required for placeholder image */
  placeholder: true;
  bgColor: BgColor['bgColor'];
}
interface WithoutPlaceholder extends Base {
  /** Add classes required for placeholder image */
  placeholder?: false | undefined;
}
type ArticleOverviewListItem = WithPlaceholder | WithoutPlaceholder;
/**
 * An overview of highlighted articles in different manifestations. See [here](https://randstad.design/components/examples/overviews/article-overview/)
 *
 */
declare const ArticleOverviewListItem: ({
  date,
  title,
  img,
  tags,
  url,
  placeholder,
  bgColor,
  divider,
}: ArticleOverviewListItem) => JSX.Element;
export default ArticleOverviewListItem;
