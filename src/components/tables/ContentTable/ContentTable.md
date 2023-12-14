```jsx
import { ContentTable } from "@ffw/randstad-shared-components";

<ContentTable
  title="section title"
  description="A short description introducing the content of this section."
  th={['first column header on more than one row', 'second column header', 'third column header on more than one row', 'fourth column header']}
  tableData={[
    {
      title: 'here comes the first row title, could potentially be a long sentence',
      data: [
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit. Fusce dapibus Cursus commodo Mauris condimentum nibh ut fermentum massa justo'
        ],
    },
    {
      title: 'second short title',
      data: [
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit. Fusce dapibus Cursus commodo Mauris condimentum nibh ut fermentum massa justo'
        ],
    },
    {
      title: 'third row title, could potentially be a long sentence',
      data: [
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit:', 
        'Maecenas sed diam eget risus varius blandit. Fusce dapibus Cursus commodo Mauris condimentum nibh ut fermentum massa justo'
        ],
    },
  ]}
/>;
```