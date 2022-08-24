const cards1 = [
  {
    image:
      "https://www.dipmoda.com/UserFiles/Product/list/Yesil-yeni-sezon-cepli-salvar-pantolon-1-.jpg",
    urunad: "Salaş elbise",
    fiyat: "150",
    catagry: "kadın",
  },
  {
    image:
      "https://productimages.hepsiburada.net/l/44/600-800/10798890549298.jpg",
    urunad: "Kısa etek",
    fiyat: "650",
    catagry: "kadın",
  },
  {
    image:
      "https://i0.wp.com/seyhanevintage.com/wp-content/uploads/vintage-giyim-kadin-67-1-scaled.jpg?resize=510%2C612&ssl=1",
    urunad: "Kadın kazak",
    fiyat: "100",
    catagry: "kadın",
  },
  {
    image:
      "https://vakko.akinoncdn.com/products/2020/02/18/506678/614d152e-70fe-46b8-ba14-d004482ca609_size470x940_quality100.jpg",
    urunad: "Kadın kazak",
    fiyat: "10",
    catagry: "erkek",
  },
  {
    image:
      "https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg",
    urunad: "Kadın kazak",
    fiyat: "20",
    catagry: "erkek",
  },
  {
    image:
      "https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg",
    urunad: "Kadın kazak",
    fiyat: "20",
    catagry: "erkek",
  },
  {
    image:
      "https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg",
    urunad: "Kadın kazak",
    fiyat: "20",
    catagry: "erkek",
  },
  {
    image:
      "https://i.pinimg.com/736x/23/f4/de/23f4de3b38b1f0dc63426f410c22e0eb.jpg",
    urunad: "Kadın kazak",
    fiyat: "20",
    catagry: "erkek",
  },
  {
    image:
      "https://cdn.beymen.com/mnresize/404/562/productimages/45ztbxtv.mjh_IMG_01_2110083586402.jpg",
    urunad: "Kadın kazak",
    fiyat: "175",
    catagry: "kadın",
  },
  {
    image:
      "https://cdn.sorsware.com/jimmykey/ContentImages/Product/2022kis/22K08GINA/bol-kesim-arkasi-uzun-100-pamuk-basic-gomlek_22k08gina_acik-sari-206-sari_1_614x805.jpg",
    urunad: "Kadın kazak",
    fiyat: "75",
    catagry: "kadın",
  },
];

const newCata = [
  {
    catagoy: "kadın",
  },

  {
    catagoy: "erkek",
  },
];

newcard(newCata[0].catagoy);

newcardd();

function newcardd() {
  const banner = document.querySelector("#card-contener2");

  for (i = 0; i < cards1.length; i++) {
    if (cards1[i].catagry === "erkek") {
      const html = `
            <div class="card-content">
           
                <div class="card-img-contner">
           
                <img  class="card-img" src="${cards1[i].image}" alt="">
            </div>
           
                <div class="card-titile">
                    <h2 class="urun-ad">${cards1[i].urunad}</h2>
                    <div class="rating-bar">***** </div>
                    <div class="card-fiyat"> Fiyat <span class='card-urun-fiyat' >${cards1[i].fiyat} </span></div>
                </div>
           
                
                <button class="btn-ekle">Sepete ekle</button>
           
           
           </div>`;
      banner.innerHTML += html;
    }
  }
}

function newcard(k) {
  const banner = document.querySelector(".card-contener");

  for (i = 0; i < cards1.length; i++) {
    if (cards1[i].catagry === k) {
      const html = `
                <div class="card-content">
               
                    <div class="card-img-contner">
               
                    <img  class="card-img" src="${cards1[i].image}" alt="">
                </div>
               
                    <div class="card-titile">
                        <h2 class="urun-ad">${cards1[i].urunad}</h2>
                        <div class="rating-bar">***** </div>
                        <div class="card-fiyat"> Fiyat <span class='card-urun-fiyat' >${cards1[i].fiyat} </span></div>
                    </div>
               
                    
                    <button class="btn-ekle">Sepete ekle</button>
               
               
               </div>`;
      banner.innerHTML += html;
    }
  }
}
class Shopping {
  constructor(cardimg, urunBaslik, fiyat) {
    this.cardimg = cardimg;
    this.urunBaslik = urunBaslik;
    this.fiyat = fiyat;
  }
}
const sepetNew = document.querySelector(".list-item");

class UI {
  addCard(shopping) {
    console.log(sepetNew.length);

    sepetNew.innerHTML += `
            <div class="sepet-content-1">
        <div class="sepet-content-img">
        <img class="sepet-img" src="${shopping.cardimg}" alt="">
    </div>
        <div class="urunad-fiyat-content">
            <h2 class="sepet-urunad">${shopping.urunBaslik}</h2>
            <h3 class="urunfiyats">${shopping.fiyat}</h2>
        </div>
        <div class="toplamm">${shopping.fiyat}   </div>
        <div class="urun-adet">
            <div class="eksi">-</div>
            <div class="number">1</div>
            <div class="artı">+</div>
    </div>
    </div>
            
       
            `;
  }
}

const btnEkle = document.getElementsByClassName("btn-ekle");
const cardContent = document.getElementsByClassName("card-content");

for (let i = 0; i < cardContent.length; i++) {
  btnEkle[i].addEventListener("click", function () {
    let cardimg = cardContent[i].getElementsByClassName("card-img")[0].src;
    let urunBaslik =
      cardContent[i].getElementsByClassName("urun-ad")[0].textContent;
    let fiyat =
      cardContent[i].getElementsByClassName("card-urun-fiyat")[0].textContent;

    let shopping = new Shopping(cardimg, urunBaslik, fiyat);
    let ui = new UI();
    ui.addCard(shopping);

    cartCount();
    btnEkle[i].disabled = true;
    btnEkle[i].style.background = "black";
  });
}

function urunSayısı() {}

function cartCount() {
  let tmp1 = 0;
  let tmp2 = 0;
  let tmp3 = 0;
  let tmp4 = 0;
  let tmp5 = 0;

  let cartListItem = document.querySelectorAll(".sepet-content-1");
  let itemCount = document.querySelector(".sepet-sayi");
  let numara = document.querySelectorAll(".number");
  let urunadet = document.querySelectorAll(".urun-adet");
  console.log(cartListItem.length);
  itemCount.textContent = cartListItem.length;

  const arti = document.querySelectorAll(".artı");
  const eksi = document.querySelectorAll(".eksi");
  const sepetToplam = document.querySelector(".sepet-toplam");
  const urunfiyats = document.querySelectorAll(".urunfiyats");

  const toplam = document.querySelectorAll(".toplamm");

  let urunDegistir1=1,urunDegistir2 = 1; 
  let urunDegistir3 = 1;
  let urunDegistir4 = 1;
  let urunDegistir5 = 1;

  for (let i = 0; i < cartListItem.length; i++) {
    numara[i].classList.add("card" + i);

    if (itemCount.textContent === "5") {
      btnEkle[i].disabled = true;
    }

    arti[i].addEventListener("click", (e) => {
      if (numara[i].classList.contains("card0")) {
        urunDegistir1++;
        numara[i].textContent = urunDegistir1;
        tmp1 = urunDegistir1 * urunfiyats[i].textContent;
      } else if (numara[i].classList.contains("card1")) {
        urunDegistir2++;
        numara[i].textContent = urunDegistir2;

        tmp2 = urunDegistir2 * urunfiyats[i].textContent;
      } else if (numara[i].classList.contains("card2")) {
        urunDegistir3++;
        numara[i].textContent = urunDegistir3;

        tmp3 = urunDegistir3 * urunfiyats[i].textContent;
      } else if (numara[i].classList.contains("card3")) {
        urunDegistir4++;
        numara[i].textContent = urunDegistir4;
        tmp4 = urunDegistir4 * urunfiyats[i].textContent;
      } else if (numara[i].classList.contains("card4")) {
        urunDegistir5++;
        numara[i].textContent = urunDegistir5;
        tmp5 = urunDegistir5 * urunfiyats[i].textContent;
      }

      sepetToplam.textContent = tmp1 + tmp2 + tmp3 + tmp4 + tmp5;
    });

    eksi[i].addEventListener("click", (e) => {
      if (numara[i].classList.contains("card0")) {
        urunDegistir1--;
        if (urunDegistir1 <= 1) {
          urunDegistir1 = 1;
        }
        numara[i].textContent = urunDegistir1;

        tmp1 = toplam[i].textContent =
          urunDegistir1 * urunfiyats[i].textContent;

        console.log(tmp1.textContent);
      } else if (numara[i].classList.contains("card1")) {
        urunDegistir2--;
        if (urunDegistir2 <= 1) {
          urunDegistir2 = 1;
        }
        numara[i].textContent = urunDegistir2;

        tmp2 = toplam[i].textContent =
          urunDegistir2 * urunfiyats[i].textContent;
      } else if (numara[i].classList.contains("card2")) {
        urunDegistir3--;
        if (urunDegistir3 <= 1) {
          urunDegistir3 = 1;
        }
        numara[i].textContent = urunDegistir3;

        tmp3 = toplam[i].textContent =
          urunDegistir3 * urunfiyats[i].textContent;
      } else if (numara[i].classList.contains("card3")) {
        urunDegistir4--;
        numara[i].textContent = urunDegistir4;
        tmp4 = toplam[i].textContent =
          urunDegistir4 * urunfiyats[i].textContent;

        if (urunDegistir4 <= 1) {
          urunDegistir4 = 1;
        }
      } else if (numara[i].classList.contains("card4")) {
        urunDegistir5--;
        if (urunDegistir5 <= 1) {
          urunDegistir5 = 1;
        }
        numara[i].textContent = urunDegistir5;
        tmp5 = toplam[i].textContent =
          urunDegistir5 * urunfiyats[i].textContent;
      }
    });
  }
}




///login 
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

