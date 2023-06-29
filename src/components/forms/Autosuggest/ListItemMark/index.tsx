import React from 'react';
import replaceJsx from '../../../../utils/replaceJsx';
import { ListItemMarkProps } from './ListItemMark.types';

function ListItemMark({ children, inputValue } : ListItemMarkProps) {
  const regexSafeValue = inputValue.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
  // If item matches, add mark to matched part to create highlighted text.
  const regex = new RegExp(regexSafeValue, 'gi');
  return (
    <>
      {replaceJsx(children, regex, (match: string, i: number) => <mark key={i}>{match}</mark>)}
    </>
  );
}

export default ListItemMark;
