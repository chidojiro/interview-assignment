// @TODO We add only base functionality for now. We need to implemtn other functonalities like sorting ect. 
import React from 'react';
import { DataTableProps } from './DataTable.types';
import Accordion from '../../accordion/Accordion';
import AccordionItem from '../../accordion/AccordionItem';

function DataTable({
  th,
  tableData,
  bgVariantBrand,
  sortBy,
  tableStyle='', // you can use "data-table--spacious" or data-table--compact for different styles of the table.
}: DataTableProps) {

  return (
    <div className={`block data-table ${tableStyle} ${bgVariantBrand || ''}`}>
      <div className='block__wrapper wrapper'>
        {/* <!-- mobile data --> */}
        <div className='data-table__accordion hidden--from-l'>
        <Accordion>
          {tableData && tableData.map((row, rowIndex) => (
            <AccordionItem
              key={rowIndex}
              title={row.data[0]}
              expanded={false}
              bodyCopy={false}
            >
              <ul className='data-table__content'>
                {th && th.map((header, cellIndex) => (
                  <li key={cellIndex}>
                    <span className="text--alternative">{header}</span>
                    <span>{row.data[cellIndex]}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}
        </Accordion>
        </div>
         {/* <!-- desctop data --> */}
        <table className='data-table__table hidden--until-l '>
          <caption></caption>
          <thead>
            <tr className='divider'>
              {th && th.map((item, index) => (
                <th key={index}><span className={`${sortBy ? 'sort-by' : 'text--alternative'}`} tabIndex={0}>{item}</span></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className='divider'>
                {row.data.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
