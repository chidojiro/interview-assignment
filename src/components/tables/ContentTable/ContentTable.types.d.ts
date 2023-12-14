// ContentTable.types.ts
export interface ContentTableProps {
  title?: string;
  description?: string;
  th?: string[];
  tableData?: TableRow[];
}

interface TableRow {
  title: string;
  data: string[];
}
