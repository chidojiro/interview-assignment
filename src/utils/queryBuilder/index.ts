function queryBuilder(queryParams: { [key: string]: number | string }) {
  let finalQuery = '';
  // Ignore rule to wrap for in body in if statement.
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in queryParams) {
    finalQuery += `&${key}=${queryParams[key]}`;
  }

  return finalQuery;
}

export default queryBuilder;
