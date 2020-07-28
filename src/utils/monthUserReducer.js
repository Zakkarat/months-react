const reducer = (users, months) => {
  Object.keys(months).forEach((elem) => {
    months[elem].value = 0;
  });
  const res = users.reduce((acc, curr) => {
    const month = new Date(curr.dob).getMonth();
    acc[month].value = acc[month].value + 1;
    return acc;
  }, months);
  return reduceColors(res);
};

const reduceColors = (res) => {
  Object.keys(res).forEach((code) => {
    const elem = res[code];
    switch (true) {
      case elem.value <= 2:
        elem.color = "grey";
        break;
      case elem.value <= 6:
        elem.color = "blue";
        break;
      case elem.value <= 10:
        elem.color = "green";
        break;
      default:
        elem.color = "red";
    }
  });
  return Object.values(res);
};

export default reducer;
