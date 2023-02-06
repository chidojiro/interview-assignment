import { BgColor } from '../utils/getBackground';
interface Breadcrumbs extends BgColor {
  /** `active` is used to highlight the item */
  items?:
    | [
        {
          title: string;
          url: string;
          active?: boolean;
        },
      ]
    | [];
  mobileItem?: {
    title: string;
    url: string;
  };
  /** This property is used for adding specific class `navigation--app` only for the apps. Since the navigation markup there is different from Orbit. */
  app?: boolean;
}
/**
 * The top-level navigation of the website and shown on each page. See [here](https://randstad.design/components/core/navigation/)
 *
 */
declare const Breadcrumbs: ({ items, mobileItem, bgColor, app }: Breadcrumbs) => JSX.Element;
export default Breadcrumbs;
