import React, { useState } from "react";
import { styles } from "react-styleguidist/lib/client/rsg-components/Table/TableRenderer";
// @ts-ignore.
import Styled from 'rsg-components/Styled';

interface TableProps {
  columns: {
    caption: string;
    render(row: any): React.ReactNode;
  }[];
  rows: any[];
  getRowKey(row: any): string;
}

export const TableRenderer = ({
  classes,
  columns,
  rows,
  getRowKey,
}: TableProps & { classes: any }) => {

  const [showInherit, setShowInherit] = useState(false)

  const componentPropsRows = rows.filter(r => r.parent.fileName.includes('src/'))
  const inheritPropsRows = rows.filter(r => !r.parent.fileName.includes('src/'))

  const RowHeader = () => (
    <>
      <tr style={{ height: "50px" }}></tr>
      <tr style={{ borderTop: "1px solid #333", borderBottom: "1px solid #333", textAlign: "center" }}><td style={{ padding: "10px", color: "#333", textTransform: "capitalize" }} colSpan={4}>Inherit react props</td></tr>
      <tr style={{ height: "50px" }}></tr>
    </>
  )

  return (
    <>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            {columns.map(({ caption }: any) => (
              <th key={caption} className={classes.cellHeading}>
                {caption}
              </th>
            ))}
            {inheritPropsRows.length > 0 && <th><input type="checkbox" checked={showInherit} title="show inherit react props" onChange={() => setShowInherit(s => !s)} /></th>}
          </tr>
        </thead>
        <tbody>
          {componentPropsRows.map(row => (
            <tr key={getRowKey(row)}>
              {columns.map(({ render }, index) => (
                <td key={index} className={classes.cell}>
                  {render(row)}
                </td>
              ))}
            </tr>
          ))}
          {showInherit && <>
            <RowHeader />
            {inheritPropsRows.map(row => (
              <tr key={getRowKey(row)}>
                {columns.map(({ render }, index) => (
                  <td key={index} className={classes.cell}>
                    {render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </>}
        </tbody>
      </table>
    </>
  );
};

export default Styled<TableProps>(styles)(TableRenderer);
