//If, Else, dan Nested If
var nilai = 85;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
  
  if (nilai < 60) {
    console.log("Anda perlu belajar lebih keras!");
  }
}

//Switch Case
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari ini adalah hari biasa.");
}

//For Statement
for (var i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

//while dan do while
var angka = 1;

console.log("Menggunakan While:");
while (angka <= 5) {
  console.log(angka);
  angka++;
}

console.log("Menggunakan Do While:");
do {
  console.log(angka);
  angka--;
} while (angka >= 1);


//Function
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(3, 5);
console.log("Hasil penambahan: " + hasil);
