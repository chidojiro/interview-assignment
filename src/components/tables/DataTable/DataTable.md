```jsx
import { DataTable } from "@ffw/randstad-shared-components";

<DataTable
  tableStyle='' // you can use "data-table--spacious" or data-table--compact for different styles of the table.
  sortBy={false}
  th={['data-type', 'purpose of use', 'retention period', 'filling method', 'sanctions']}
  tableData={[
    {
      data: ['All Email correspondence', 'Board', '7 years after drafting/receipt', 'REASE', 'Company liability Government enforcement'],
    },
    {
      data: ['Application (CV, diplomas certificates)', 'HR shared service center', '1 year after termination of employment', 'In digital and/or paper archive', 'Company liability'],
    },
    {
      data: ['Certificates', 'Board', '7 years after end date of validity of certificate', 'In digital and/or paper archive', 'Company liability'],
    },
    {
      data: ['Copy ID', 'HR shared service center', '7 years after termination of employment', 'WorkDay', 'Additional tax assessment, interest & penalty Penalty Wav'],
    },
    {
      data: ['Signed employment agreement', 'HR shared service center', '7 years after termination of employment', 'WorkDay', 'Company liability'],
    }
  ]}
/>;
```