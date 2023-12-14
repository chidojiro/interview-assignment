import React from 'react';
import { ContentTableProps } from './ContentTable.types';
import Accordion from '../../accordion/Accordion';
import AccordionItem from '../../accordion/AccordionItem';

function ContentTable({
  title, description, th, tableData,
}: ContentTableProps) {

  return (
    <div className="block content-table">
      <div className='block__wrapper block__wrapper--stacked wrapper'>

        {/* Header content */}
        {(title || description) && (
          <div className='block__header block__header--l block__header--split'>
            {title && <h2 className='block__title'>{title}</h2>}
            {description && <p className='block__description block__description--s'>{description}</p>}
          </div>
        )}

        {/* Block content */}
        <div className='block__content'>
        {/* <!-- mobile data --> */}
        <div className='data-table__accordion hidden--from-l'>
        <Accordion>
            {tableData && tableData.map((row, rowIndex) => (
              <AccordionItem
                key={rowIndex}
                title={row.title}
                subtitle=""
                expanded={false}
                bodyCopy={false}
              >
                {/* Render content inside AccordionItem */}
                <ul>
                  {th && th.map((header, cellIndex) => (
                    <li key={cellIndex}>
                      <span className="text--alternative">{header}</span>
                      <span className="body-copy">{row.data[cellIndex]}</span>
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
         {/* <!-- desctop data --> */}
        <table className='w-full hidden--until-l'>
          <caption></caption>
          <thead>
            <tr className='grid grid-cols-5 gap-0'>
              <th></th>
              {th && th.map((item, index) => (
                <th key={index} scope="col" className="bg-variant-brand-primary text-title-xxs"><span>{item}</span></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className='grid grid-cols-5 gap-0 divider'>
                <th scope="row" className="bg-variant-brand-tertiary text-title-xxs">
                  {row.title}
                </th>
                {row.data.map((cell, cellIndex) => (
                  <td key={cellIndex} className="text-body-m body-copy">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default ContentTable;
