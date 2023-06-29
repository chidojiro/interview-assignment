function FormatFileSize(bytes: number, sizes: string[], decimals = 0) {
  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

export default FormatFileSize;
