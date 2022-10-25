import React from "react";
import t from "prop-types";

import replaceJsx from "@utils/replaceJsx";

const ListItemMark = ({ children, inputValue = "" }) => {
  const regexSafeValue = inputValue.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");

  // if item matches, add mark to matched part to create highlighted text
  let regex = new RegExp(regexSafeValue, "gi");

  const response = () => replaceJsx(children, regex, (match, i) => <mark key={i}>{match}</mark>);

  return <>{response()}</>;
};

ListItemMark.propTypes = {
  children: t.any,
  inputValue: t.string,
};

export default ListItemMark;
