```jsx
import { ArticleOverviewList, ArticleOverviewListItem } from "@ffw/randstad-shared-components";

<ArticleOverviewList>
  <ArticleOverviewListItem
    date="26 July 2019"
    title="staying on track: 3 ways to keep women in the rail industry."
    img={{
      src: "https://randstad.design/humanforward/dist/assets/image/components/blogs/articles/woman-1.jpg",
    }}
    tags={[
      { text: "awards", url: "#" },
      { text: "workforce360", url: "#" },
    ]}
  />
</ArticleOverviewList>;
```

With placeholder

```jsx
import { ArticleOverviewList, ArticleOverviewListItem } from "@ffw/randstad-shared-components";

<ArticleOverviewList>
  <ArticleOverviewListItem
    date="26 July 2019"
    title="staying on track: 3 ways to keep women in the rail industry."
    placeholder
    bgColor="yellow"
    img={{
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    }}
    tags={[
      { text: "awards", url: "#" },
      { text: "workforce360", url: "#" },
    ]}
  />
</ArticleOverviewList>;
```
