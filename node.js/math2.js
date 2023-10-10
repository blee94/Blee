let i = 2;
let j = 1;
function mult(n1, n2) {
  return n1 * n2;
}
while (i < 10) {
  while (j < 10) {
    let k = mult(i, j);
    console.log(i + "x" + j + "=" + k);
    j++;
  }
  j = 1;
  i++;
}

module.exports = mult;
