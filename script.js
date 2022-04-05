var mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
for (let i = 0; i < mass.length; i++) {
  mass[i] = mass[mass.length - i - 1];
}
console.log(mass);
