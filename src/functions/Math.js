const functions = {
  sugar: function (qty) {
    return qty * 9;
  },
  water: function (qty) {
    return qty * 3;
  },
  lts: function (qty) {
    return 50 - (qty * 50) / 110;
  },
};

export default functions;
