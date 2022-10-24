const stringSanitize = function () {
  // Strip all special character without ().
  const keepSpaceAndBrackets = (str) => {
    var str2 = str.replace(/[`~!@#$%^&*_|+\-=?;:'",.<>{}[\]\\/]/gi, "");
    return str2.replace(/ /g, " ");
  };

  return {
    keepSpaceAndBrackets,
  };
};

export default stringSanitize;
