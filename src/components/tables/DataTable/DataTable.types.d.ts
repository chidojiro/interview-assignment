// DataTable.types.ts
export interface DataTableProps {
  th?: string[];
  tableData?: TableRow[];
  bgVariantBrand?: string;
  /** to remove the sort icon foe th's */
  sortBy?: boolean;
  /** you can use "data-table--spacious" or data-table--compact for different styles of the table. */
  tableStyle?: string;
}

interface TableRow {
  data: string[];
}
