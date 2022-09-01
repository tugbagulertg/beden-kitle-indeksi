const boy = document.querySelector("#boy");
const kilo = document.querySelector("#kilo");
const hesapla = document.querySelector("#btnHesapla");
const gender = document.querySelector("#gender");
const sonuc = document.querySelector("#sonuc");

hesapla.addEventListener("click", bkiHesapla);

function bkiHesapla() {
  if (boy.value == "" && kilo.value == "") {
    if (gender.value == "") {
      alert("Bilgileri eksiksiz girmelisiniz!");
    }
  } else {
    b = boy.value;
    k = kilo.value;
    let bki = (k * 10000) / (b * b);
    sonuc.style.opacity = 1;
    if (bki < 18.5) {
      let zayif = `Beden kitle indeksiniz ${bki.toFixed(
        2
      )} ve <br> bu ölçüme göre zayıfsınız.`;
      sonuc.innerHTML = zayif;
      sonuc.classList.remove("danger");
      sonuc.classList.remove("warning");
    } else if (bki >= 18.5 && bki < 25) {
      let normal = `Beden kitle indeksiniz ${bki.toFixed(
        2
      )} ve <br> bu ölçüme göre kilonuz normal.`;
      sonuc.innerHTML = normal;
      sonuc.classList.remove("danger");
      sonuc.classList.remove("warning");
    } else if (bki >= 25 && bki < 30) {
      let kilolu = `Beden kitle indeksiniz ${bki.toFixed(
        2
      )} ve <br> bu ölçüme göre kilolusunuz.`;
      sonuc.innerHTML = kilolu;
      sonuc.classList.remove("danger");
      sonuc.classList.add("warning");
    } else if (bki >= 30 && bki < 35) {
      let obez = `Beden kitle indeksiniz ${bki.toFixed(
        2
      )} ve <br> bu ölçüme göre obezsiniz.`;
      sonuc.innerHTML = obez;
      sonuc.classList.add("danger");
      sonuc.classList.remove("warning");
    } else if (bki >= 35) {
      let morbid = `Beden kitle indeksiniz ${bki.toFixed(
        2
      )} ve <br> bu ölçüme göre morbid obezsiniz.`;
      sonuc.innerHTML = morbid;
      sonuc.classList.add("danger");
      sonuc.classList.remove("warning");
    } else {
      console.log("Verilen bilgiler hatalı.");
    }
  }
  boy.value = "";
  kilo.value = "";
  gender.value = "";
}
