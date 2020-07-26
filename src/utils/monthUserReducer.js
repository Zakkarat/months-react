import { months } from "../libs/months.json";

const reducer = (users) => {
  const res = users.reduce((acc, curr) => {
    const month = new Date(curr.dob).getMonth();
    acc[month].value = acc[month].value + 1;
    return acc;
  }, months);
  return reduceColors(res);
};

const reduceColors = (res) => {
  Object.keys(res).map((code) => {
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
    return elem;
  });

  return Object.values(res);
};

export default reducer;
