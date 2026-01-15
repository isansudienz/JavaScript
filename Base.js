// // variable
// let     nama = "isansudienz"; // bisa diganti
// const   umur = 20;          // tidak bisa diganti
// var     kota = "Malang";      // tidak direkomendasikan

// console.log(nama, umur, kota);

// // tipe data
// let     angka   = 132 ;         //Num
// let     teks    = "pharaoh";    //String
// let     benar   = true;         //Boolean
// let     kosong  = null;         //Null
// let     belumTerdefinisi;       //Undefined
// let     array = [1, 2, 3, 4, 5];//Array
// let     object = {              //Object
//     nama:"yesus",
//     umur: 2500};

// console.log(angka, teks, benar, kosong, belumTerdefinisi, array, object);

// //Operasi
// let a = 20;
// let b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);             //sisa bagi
// console.log(a ** b);            //pangkat

// //kondisi
// nilai = 80;

// if (nilai >= 90) {
//     console.log("A");
// } else if (nilai >= 80) {
//     console.log("B");
// } else if (nilai >= 70) {
//     console.log("C");
// } else {
//     console.log("E");
// }

// //perulangan
// for (let i = 0; i < 10; i++) {  //forLoop
//     console.log(i);
// }

// let counter = 0 
// while (counter < 10 ) {         //
//     console.log(counter);
//     counter++;
// }

// //functions
// function perjumlahan(a, b) {
//     return a + b;
// }
// console.log(perjumlahan(10, 20));

// //array
// let city = ["A, B, C, D"];
// city.push("E");
// console.log(city);
// city.pop();
// console.log(city);

//deklarasi variabel dan fungsi
let name = "isansudienz";
const age = 19;
let country = "Indonesia";
let city = "Malang";
let hobby = ["coding", "drink coffee"];
function dataProfil() {
    console.log("===== Data Profil =====");
    console.log("name   : ", name);
    console.log("age    : ", age);
    console.log("country: ", country);
    console.log("city   : ", city);
    console.log("hobby  : ", hobby[0],", ", hobby[1]);
    console.log("=======================");
}
function greet() {
    return "Hello, my name is " + name + ", I'm " + age + " years old from " + city + ", " + country + ". My hobbies are " + hobby[0] + " and " + hobby[1] + ".";
}
dataProfil();
console.log(greet());