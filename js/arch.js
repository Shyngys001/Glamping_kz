let header = document.getElementById("header");
let headerLogoBlock = document.getElementById("header-logo-block");
let headerNav = document.getElementById("header-nav");
let changeLanguage = document.getElementById("dropdown");
let burgerMenu = document.getElementById("burger-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--transparent");
    headerLogoBlock.style.width = "100px";
    headerNav.style.marginTop = "0px";
    changeLanguage.style.marginTop = "0px";
  } else {
    header.classList.remove("header--transparent");
    headerLogoBlock.style.width = "150px";
    headerNav.style.marginTop = "-20px";
    changeLanguage.style.marginTop = "0px";
  }
});


let openTour1 = document.getElementById("link-tour");
let openTour2 = document.getElementById("link-tour-1");
let openTour3 = document.getElementById("link-tour-2");
let openHome = document.getElementById("switch-home-button");
let switchBlock = document.getElementById("switch-block")
let tourPage = document.getElementById("tour-section");
let body = document.getElementById("body");
let switchPrice = document.getElementById("switch-price-link");


openTour1.addEventListener("click", switchTourSections);
openTour2.addEventListener("click", switchTourSections);
openTour3.addEventListener("click", switchTourSections);
openHome.addEventListener("click", switchHomeSections);
switchPrice.addEventListener("click", switchHomeSections);

function switchTourSections() {
  switchBlock.classList.remove("switch-block-animate-2");
  switchBlock.classList.add("switch-block-animate-1");

  setTimeout(function() {
    tourPage.style.display = "initial";
  }, 500);

  setTimeout(function() {
    body.classList.add("body-style");
  }, 2000);

  setTimeout(function() {
    switchBlock.classList.remove("switch-block-animate");
  }, 4000);
}

function switchHomeSections() {
  switchBlock.classList.remove("switch-block-animate-1");
  switchBlock.classList.add("switch-block-animate-2");

  setTimeout(function() {
    body.classList.remove("body-style");
    tourPage.style.display = "none";
  }, 2000);

  setTimeout(function() {
    switchBlock.classList.remove("switch-block-animate-2");
  }, 4000);
}


function toggleMenu() {
  const burgerContainer = document.querySelector('#burger-container');
  const menu = document.querySelector('.menu');
  
  burgerContainer.classList.toggle('open');
  menu.classList.toggle('open');
}


let tour_txt_1 = document.getElementById("text-activities");
let tour_txt_2 = document.getElementById("text-yachting");
let tour_txt_3 = document.getElementById("text-diving");
let tour_txt_4 = document.getElementById("text-hydrocycle");
let tour_txt_5 = document.getElementById("text-hunting");
let tour_txt_6 = document.getElementById("text-kayaking");
let tour_txt_7 = document.getElementById("text-serfing");
let tour_txt_8 = document.getElementById("text-parachute");
let tour_txt_9 = document.getElementById("text-beach");
let tour_txt_10 = document.getElementById("text-volleyball");
let tour_txt_11 = document.getElementById("text-kino");
let tour_txt_12 = document.getElementById("text-playground");
let tour_txt_13 = document.getElementById("text-yoga");
let tour_txt_14 = document.getElementById("text-pool");
let tour_txt_15 = document.getElementById("text-bbq");
let tour_txt_16 = document.getElementById("text-sauna");
let tour_txt_17 = document.getElementById("text-price");

let header_text_1 = document.getElementById("link-home");
let header_text_2 = document.getElementById("link-book");
let header_text_3 = document.getElementById("link-tour");
let header_text_4 = document.getElementById("link-price");
let header_text_5 = document.getElementById("link-contact");

let burger_text_1 = document.getElementById("link-home-1");
let burger_text_2 = document.getElementById("link-book-1");
let burger_text_3 = document.getElementById("link-tour-1");
let burger_text_4 = document.getElementById("link-price-1");
let burger_text_5 = document.getElementById("link-contact-1");

let card_text_1 = document.getElementById("info-card-text-1");
let card_text_2 = document.getElementById("info-card-text-2");
let card_text_3 = document.getElementById("info-card-text-3");

let service_text_1 = document.getElementById("service-text-1");
let service_text_2 = document.getElementById("service-text-2");
let service_text_3 = document.getElementById("service-text-3");
let service_text_4 = document.getElementById("service-text-4");
let service_text_5 = document.getElementById("service-text-5");

let flip_card_text_1 = document.getElementById("flip-back-text-1");
let flip_card_text_2 = document.getElementById("flip-back-text-2");
let flip_card_text_3 = document.getElementById("flip-back-text-3");
let flip_card_text_4 = document.getElementById("flip-back-text-4");
let flip_card_text_5 = document.getElementById("flip-back-text-5");
let flip_card_text_6 = document.getElementById("flip-back-text-6");
let flip_card_text_7 = document.getElementById("flip-back-text-7");

let footer_link_1 = document.getElementById("link-home-2");
let footer_link_2 = document.getElementById("link-book-2");
let footer_link_3 = document.getElementById("link-tour-2");
let footer_link_4 = document.getElementById("link-price-2");

let additional_service = document.getElementById("additional-services");
let follow_us_text = document.getElementById("follow-us-text");
let make_holiday_text = document.getElementById("section-1-header-text");
let including_text = document.getElementById("including");
let flip_card_contact = document.getElementById("flip-back-button");
let from120 = document.getElementById("hover-the-card");
let footer_text_1 = document.getElementById("footer-location-info");
let gampling_standart = document.getElementById("section-2-content-title-text")
let four_seats = document.getElementById("section-2-content-title-text-1");
let a2_c2 = document.getElementById("section-2-content-title-text-2");

let flip_back_including = document.getElementById("flip-back-including");
let including = document.getElementById('including');

function setLanguage(language) {
    document.getElementById('dropdown-button').innerText = language;
    
    if (language === 'KZ') {
      flip_back_including.textContent = "ІШІНДЕ";
      including.textContent = "ІШІНДЕ 🡲";

      tour_txt_1.textContent = "ДЕМАЛЫС ІС-ШАРАЛАРЫ";
      tour_txt_2.textContent = "Яхтинг";
      tour_txt_3.textContent = "Сүңгу";
      tour_txt_4.textContent = "Гидроцикл/Квадроцикл";
      tour_txt_5.textContent = "Су асты аңшылығы";
      tour_txt_6.textContent = "Каякинг";
      tour_txt_7.textContent = "Аспандағы серфинг";
      tour_txt_8.textContent = "Парашют";
      tour_txt_9.textContent = "ЖАҒАЖАЙ";
      tour_txt_10.textContent = "Волейбол алаңы";
      tour_txt_11.textContent = "Ашық аспан кинотеатр";
      tour_txt_12.textContent = "Ойын алаңы";
      tour_txt_13.textContent = "Йога";
      tour_txt_14.textContent = "БАССЕЙН АЛАҢЫ";
      tour_txt_15.textContent = "ГРИЛЬ ЖӘНЕ БАРБЕКЮ АЙМАҒЫ";
      tour_txt_16.textContent = "СКАНДИНАВИЯ МОНШАСЫ";
      tour_txt_17.textContent = "БАҒАСЫ";

      header_text_1.textContent = "Басты";
      header_text_2.textContent = "Броньдау";
      header_text_3.textContent = "Турлар";
      header_text_4.textContent = "Бағалар";
      header_text_5.textContent = "Байланысу";

      burger_text_1.textContent = "Басты";
      burger_text_2.textContent = "Броньдау";
      burger_text_3.textContent = "Турлар";
      burger_text_4.textContent = "Бағалар";
      burger_text_5.textContent = "Байланысу";

      card_text_1.textContent = "Бұл оңаша орындар табиғаттың қақ ортасында, қаланың қарбаласынан алыс орналасқан.";
      card_text_2.textContent = "Біз сізге күнделікті уайымдарды ұмытып, толық демалуға болатын жайлы баспана ұсынамыз.";
      card_text_3.textContent = "Медитация, стрессті жеңілдету, табиғатқа ену және құстардың әнін тыңдау үшін тамаша орын...";

      service_text_1.textContent = "ересектерге — 6000₸";
      service_text_2.textContent = "6-дан 12 жасқа дейінгі балаларға — 3000₸";
      service_text_3.textContent = "6 жасқа дейінгі балаларға — тегін";
      service_text_4.textContent = "глампинг қонақтарына арналған монша — 15000₸";
      service_text_5.textContent = "глампингсіз қонақтарға арналған монша — 120000₸";

      flip_card_text_1.textContent = "таңғы ас";
      flip_card_text_2.textContent = "ванна және сұлулық керек-жарақтары";
      flip_card_text_3.textContent = "3 ересек бассейн және 1 балалар";
      flip_card_text_4.textContent = "йога аймағы, жағажай, автотұрақ, шезлонгтар";
      flip_card_text_5.textContent = "Террассадағы Гриль аймағы, гамак";
      flip_card_text_6.textContent = "шай ыдыстары";
      flip_card_text_7.textContent = "Wi-Fi";

      footer_link_1.textContent = "Басты";
      footer_link_2.textContent = 'Броньдау';
      openTour3.textContent = 'Турлар'
      footer_link_4.textContent = 'Бағалар'



      additional_service.textContent = "қосымша қызметтер";
      gampling_standart.textContent = "Глампинг стандарты";
      four_seats.textContent = "4 x орын";
      a2_c2.textContent = "2 ересек | 2 бала";
      follow_us_text.textContent = "Бізбен болыңыз";
      make_holiday_text.textContent = "демалысыңызды ұмытылмастай етіңіз";
      including_text = "Қамтылады";
      flip_card_contact.textContent = "Байланысу";
      from120.textContent = "120.000₸ бастап";
      footer_text_1.textContent = "Қазақстан Республикасы Маңғыстау облысы, Мұнайлы ауданы, Қызылқұм жері, 2/27 учаскесі";
        
    } else if (language === 'EN') {
      flip_back_including.textContent = "INCLUDING";
      including.textContent = "INCLUDING 🡲";
      
      tour_txt_1.textContent = "ACTIVITIES";
      tour_txt_2.textContent = "Yachting";
      tour_txt_3.textContent = "Diving";
      tour_txt_4.textContent = "Jet ski/Quad bike";
      tour_txt_5.textContent = "Spearfishing";
      tour_txt_6.textContent = "Kayaking";
      tour_txt_7.textContent = "Sky surfing";
      tour_txt_8.textContent = "Parachute";
      tour_txt_9.textContent = "BEACH";
      tour_txt_10.textContent = "Volleyball court";
      tour_txt_11.textContent = "Cinema under the sky";
      tour_txt_12.textContent = "Playground";
      tour_txt_13.textContent = "Yoga";
      tour_txt_14.textContent = "POOL ZONE";
      tour_txt_15.textContent = "GRILL AND BBQ AREA";
      tour_txt_16.textContent = "SCANDINAVIAN SAUNA";
      tour_txt_17.textContent = "PRICE";

      header_text_1.textContent = "Home";
      header_text_2.textContent = "Book";
      header_text_3.textContent = "Tour";
      header_text_4.textContent = "Price";
      header_text_5.textContent = "Contacts";

      burger_text_1.textContent = "Home";
      burger_text_2.textContent = "Book";
      burger_text_3.textContent = "Tour";
      burger_text_4.textContent = "Price";
      burger_text_5.textContent = "Contacts";

      openTour3.textContent = 'Tour'
      footer_link_4.textContent = 'Price'

      card_text_1.textContent = "These secluded corners are located far from the city noise and hustle, in the heart of nature.";
      card_text_2.textContent = "We offer you a cozy sanctuary where you can forget about everyday worries and fully relax.";
      card_text_3.textContent = "An ideal place for meditation, stress relief, immersing yourself in nature, and listening to the singing of birds...";

      service_text_1.textContent = "Entrance for adults — 6000₸";
      service_text_2.textContent = "For children from 6 to 12 years old — 3000₸";
      service_text_3.textContent = "Entrance for children under 6 years — Free";
      service_text_4.textContent = "Sauna for glamping guests — 15000₸";
      service_text_5.textContent = "Sauna for guests without glamping — 120000₸";

      flip_card_text_1.textContent = "Breakfast";
      flip_card_text_2.textContent = "Bath and cosmetic accessories";
      flip_card_text_3.textContent = "3 adult pools and 1 children's pool";
      flip_card_text_4.textContent = "Yoga area, beach, parking, sun loungers";
      flip_card_text_5.textContent = "Grill area on the terrace, hammock";
      flip_card_text_6.textContent = "Tea accessories";
      flip_card_text_7.textContent = "Wi-Fi";

      footer_link_1.textContent = "Home";
      

      footer_link_2.textContent = 'Book';


      additional_service.textContent = "Additional services";
      gampling_standart.textContent = "glamping standart";
      four_seats.textContent = "4 x seats";
      a2_c2.textContent = "2 adults | 2 children";
      follow_us_text.textContent = "follow us";
      make_holiday_text.textContent = "make your holiday unforgettable";
      including_text = "including";
      flip_card_contact.textContent = "Contacts";
      from120.textContent = "from 120,000₸";
      footer_text_1.textContent = "Republic of Kazakhstan Mangystau region, Munailinsky district, Kyzylkum locality, plot 2/27";
        
    } else if (language === 'RU') {
      flip_back_including.textContent = "ВХОДИТ";
      including.textContent = "ВХОДИТ 🡲";
      
      tour_txt_1.textContent = "АКТИВНЫЙ ОТДЫХ";
      tour_txt_2.textContent = "Яхтинг";
      tour_txt_3.textContent = "Дайвинг";
      tour_txt_4.textContent = "Гидроцикл/Квадроцикл";
      tour_txt_5.textContent = "Подводная охота";
      tour_txt_6.textContent = "Каякинг";
      tour_txt_7.textContent = "Скайсерфинг";
      tour_txt_8.textContent = "Парашют";
      tour_txt_9.textContent = "ПЛЯЖ";
      tour_txt_10.textContent = "Волейбольная площадка";
      tour_txt_11.textContent = "Кинотеатр под открытым небом";
      tour_txt_12.textContent = "Детская площадка";
      tour_txt_13.textContent = "Йога";
      tour_txt_14.textContent = "ЗОНА БАССЕЙНА";
      tour_txt_15.textContent = "ГРИЛЬ И BBQ ЗОНА";
      tour_txt_16.textContent = "СКАНДИНАВСКИЕ БАНИ";
      tour_txt_17.textContent = "Цены";

      header_text_1.textContent = "Главное";
      header_text_2.textContent = "Бронировать";
      header_text_3.textContent = "Туры";
      header_text_4.textContent = "Цены";
      header_text_5.textContent = "Связаться";

      openTour3.textContent = 'Туры'
      footer_link_4.textContent = 'Цены'

      burger_text_1.textContent = "Главное";
      burger_text_2.textContent = "Бронировать";
      burger_text_3.textContent = "Туры";
      burger_text_4.textContent = "Цены";
      burger_text_5.textContent = "Связаться";

      card_text_1.textContent = "Эти уединенные уголки находятся вдали от городского шума и суеты, в самом сердце природы.";
      card_text_2.textContent = "Предлагаем вам уютное убежище, где вы сможете забыть о повседневных заботах и полностью расслабиться.";
      card_text_3.textContent = "Идеальное место для медитации, снять стресс, расствориться в природе, слушать пение птиц...";

      service_text_1.textContent = "Вход взрослым — 6000₸";
      service_text_2.textContent = "Для детей от 6 до 12 лет — 3000₸";
      service_text_3.textContent = "Вход детям до 6 лет — Бесплатно";
      service_text_4.textContent = "Баня для гостей глэмпинга — 15000₸";
      service_text_5.textContent = "Баня для гостей без глэмпинга — 120000₸";

      flip_card_text_1.textContent = "Завтрак";
      flip_card_text_2.textContent = "Банные и косметические принадлежности";
      flip_card_text_3.textContent = "3 взрослых бассейна и 1 детский";
      flip_card_text_4.textContent = "Зона для йоги, пляж, парковка, шезлонги";
      flip_card_text_5.textContent = "Гриль зона на террасе, гамак";
      flip_card_text_6.textContent = "Чайные принадлежности";
      flip_card_text_7.textContent = "Wi-Fi";

      footer_link_1.textContent = "Главное";


      footer_link_2.textContent = 'Бронировать';


      additional_service.textContent = "Дополнительные услуги";
      gampling_standart.textContent = "Глэмпинг стандарт";
      four_seats.textContent = "4-х местный";
      a2_c2.textContent = "2 взрослых | 2 детей";
      follow_us_text.textContent = "Будьте с нами";
      make_holiday_text.textContent = "сделайте ваш отдых незабываемым";
      including_text = "Входит";
      flip_card_contact.textContent = "Связаться";
      from120.textContent = "от 120.000₸";
      footer_text_1.textContent = "Республика Казахстан Мангистауская область, Мунайлинский район, местность Кызылкум, участок 2/27";
    }
}
