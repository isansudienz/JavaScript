// variable
let     nama = "archangel"; // bisa diganti
const   umur = 20;          // tidak bisa diganti
var     kota = "Malang";      // tidak direkomendasikan

console.log(nama, umur, kota);

// tipe data
let     angka   = 132 ;         //Num
let     teks    = "pharaoh";    //String
let     benar   = true;         //Boolean
let     kosong  = null;         //Null
let     belumTerdefinisi;       //Undefined
let     array = [1, 2, 3, 4, 5];//Array
let     object = {              //Object
    nama:"yesus",
    umur: 2500};

console.log(angka, teks, benar, kosong, belumTerdefinisi, array, object);

//Operasi
let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);             //sisa bagi
console.log(a ** b);            //pangkat

//kondisi
nilai = 80;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else {
    console.log("E");
}

//perulangan
for (let i = 0; i < 10; i++) {  //forLoop
    console.log( ji);
}

let counter = 0 
while (counter < 10 ) {         //
    console.log(counter);
    counter++;
}

//functions
function perjumlahan(a, b) {
    return a + b;
}
console.log(perjumlahan(10, 20));

//array
let arr = [1, 2, 3, 4, 5];
arr.push(6);                  //menambah elemen
console.log(arr);