var sayi = document.querySelector(".box  p");
var deger = 0;
var btn = document.querySelector(".box .count1 a");

btn.addEventListener("click", function(e) {
    deger++;
    sayi.textContent = deger;
    e.preventDefault();
});

var sayi = document.querySelector(".box  p");
var deger = 0;
var btn = document.querySelector(".box .count2 a");

btn.addEventListener("click", function(e) {
    deger--;
    sayi.textContent = deger;
    e.preventDefault();
});

var sayi = document.querySelector(".box  p");
var deger = 0;
var btn = document.querySelector(".box .count0 a");

btn.addEventListener("click", function(e) {
    deger = 0;
    sayi.textContent = deger;
    e.preventDefault();
});