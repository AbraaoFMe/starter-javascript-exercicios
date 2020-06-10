function pares(x, y) {
  x = (x % 2 === 0)? x:x + 1

  for (var i = x; i <= y; i += 2) {
     console.log(i);
  }
}

pares(32, 321);
