import React from 'react';
interface TableProps {
  columns: {
    caption: string;
    render(row: any): React.ReactNode;
  }[];
  rows: any[];
  getRowKey(row: any): string;
}
export declare const TableRenderer: ({
  classes,
  columns,
  rows,
  getRowKey,
}: TableProps & {
  classes: any;
}) => JSX.Element;
declare const _default: any;
export default _default;
