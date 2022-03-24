# Alphabet Board
## Objectives
- Mengerti cara menggunakan while/ for
## Directions
Terdapat sebuah function yang akan menghasilkan sebuah multidimensional array dengan jumlah baris dan kolom yang diminta oleh user.
Setiap elemennya akan diisi dengan huruf alphabet berurutan dari 'a' hingga 'z'.
Pengisian huruf dimulai dari baris pertama dari kiri ke kanan. Ketika baris pertama sudah terisi dengan huruf huruf alfabet,
maka pengisian dilanjutkan pada baris berikutnya dari kiri ke kanan, dan seterusnya.
Ketika pengisian huruf sudah sampai 'z', maka elemen selanjutnya akan diisi oleh huruf 'a' lagi dan seterusnya.

## Constraint
- Dilarang menggunakan built-in function kecuali .push()

OUTPUT:
--------
```js
console.log(boxOfAlphabet(2, 2));
// output
// [
//   ['a', 'b'],
//   ['c', 'd']
// ]
console.log(boxOfAlphabet(3, 4));
// output
// [
//   ['a', 'b', 'c', 'd'],
//   ['e', 'f', 'g', 'h'],
//   ['i', 'j', 'k', 'l']
// ]
console.log(boxOfAlphabet(6, 5));
// output 
// [
//   ['a', 'b', 'c', 'd', 'e'],
//   ['f', 'g', 'h', 'i', 'j'],
//   ['k', 'l', 'm', 'n', 'o'],
//   ['p', 'q', 'r', 's', 't'],
//   ['u', 'v', 'w', 'x', 'y'],
//   ['z', 'a', 'b', 'c', 'd']
// ]
```
