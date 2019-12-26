export const dateFormat = (fromDate) => {
  const [month, date, year] = new Date(fromDate).toDateString().split(' ').slice(1);
  const dateSuffix = [
    {num: 1, suffix: 'st'},
    {num: 2, suffix: 'nd'},
    {num: 3, suffix: 'rd'},
  ];
  const dateSuffixIndex = dateSuffix.findIndex(ds => parseInt(date, 10) === ds.num);

  return `${date}${dateSuffixIndex > 0 ? dateSuffix[dateSuffixIndex].suffix: 'th'} ${month} ${year}`;
}
