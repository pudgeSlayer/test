var mass = [2, 4, -5, 0, -7, 1];
mass.forEach((i) => {
  var b = "";
  if (i > 0) {
    for (let f = 0; f < i; f++) {
      b = b + "a";
    }
  } else if (i < 0) {
    for (let f = 0; f < -i; f++) {
      b = b + "b";
    }
  }
  if (i != 0) {
    console.log(b);
  }
});
