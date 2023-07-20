function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  
  return result;
}

function setUpCarousel(carousel) {
  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    carousel.style.setProperty('--current-slide', slideNumber);
  }

  const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
  const buttonNext = carousel.querySelector('[data-carousel-button-next]');
  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

  let currentSlide = 0;
  const numSlides = slidesContainer.children.length;

  buttonPrevious.addEventListener('click', handlePrevious);
  buttonNext.addEventListener('click', handleNext);
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);


let btn_kz = document.getElementById("lang-kz");
let btn_ru = document.getElementById("lang-ru");
let btn_en = document.getElementById("lang-en");

let slide_title_1 = document.getElementById("slide-title-1");
let slide_title_2 = document.getElementById("slide-title-2");
let slide_title_3 = document.getElementById("slide-title-3");
let slide_title_4 = document.getElementById("slide-title-4");
let slide_info_1 = document.getElementById("slide-title-info-1");
let slide_info_3 = document.getElementById("slide-title-info-3");
let carousel_title_1 = document.getElementById("carousel-title-1");
let carousel_title_2 = document.getElementById("carousel-title-2");
let inter_info = document.getElementById("interier-info");

let kitchen = document.getElementById("room-kitchen");
let fridge = document.getElementById("fridge");
let microwave = document.getElementById("microwave");
let kettle = document.getElementById("kettle");
let coffe = document.getElementById("coffee");
let stove = document.getElementById("stove");

let shower = document.getElementById("room-shower");
let dryer = document.getElementById("dryer");
let under = document.getElementById("underwear");
let slipper = document.getElementById("slipper");
let bath = document.getElementById("bathroom");
let cabin = document.getElementById("cabin");

let terrace_title = document.getElementById("terrace-title");
let terrace_info = document.getElementById("terrace-info");

let circled = document.getElementById("circled-text");
let yurt_info = document.getElementById("yurt-info");

let shamsi_title = document.getElementById("shamsi-title");
let shamsi_info = document.getElementById("shamsi-text");

let goHome = document.getElementById("gohome");

btn_kz.addEventListener("click", function() {
  console.log("kz");
  slide_title_1.textContent = "жайлылық";
  slide_title_2.textContent = "жуынатын бөлме";
  slide_title_3.textContent = "қосымша";
  slide_title_4.textContent = "шағын ас үй";
  slide_info_1.textContent = "Бөлмелер сізге қажет нәрсенің бәрімен жабдықталған";
  slide_info_3.textContent = "гардероб, тегін Wi-Fi, климатты басқару жүйесі";
  carousel_title_1.textContent = "біздің интерьерлер, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЖАЗҒЫ КАФЕ «SHAMSI»,";
  carousel_title_2.textContent = "  біздің интерьерлер, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЖАЗҒЫ КАФЕ «SHAMSI», ";
  inter_info.textContent = "Бөлменің ауданы 38 м2.\n Төрт қонаққа арналған әр глампингтің сыйымдылығы және балаларға арналған қосымша орын.";

  kitchen.textContent = "ас үй: ";
  fridge.textContent = "тоңазытқыш";
  microwave.textContent = "микротолқынды пеш";
  kettle.textContent = "электр шәйнек";
  coffe.textContent = "кофе машинасы";
  stove.textContent = "электр пеші";
  
  shower.textContent = "душ: ";
  dryer.textContent = "шаш кептіргіш";
  under.textContent = "іш киім";
  slipper.textContent = "тәпішке";
  bath.textContent = "жуынатын бөлме";
  cabin.textContent = "душ кабинасы";

  terrace_title.textContent = "ЖАЗҒЫ ТЕРРАСА";
  terrace_info.textContent = "Жазғы террассада ас үй гриль алаңы бар, сонымен қатар кітап оқумен тамаша демалыс өткізуге болатын гамак бар. Жазғы террассада достарыңызбен көңіл көтеруге болады.";

  circled.textContent = "Қонақтарымызды әдемі киіз үй қарсы алады.";
  yurt_info.textContent = "Киіз үй қабылдауының дизайны заманауи технология мен жайлылықпен тамаша үйлесетін ұлттық киіз үйден жасалған. Қабылдау бөлмесінде сіз ұлттық нақыштағы элементтерді таба аласыз, олар қазақ мәдениетінің бастауларын шынайы түрде көрсетеді.";

  shamsi_title.textContent = "«SHAMSI» кафесі";
  shamsi_info.textContent = "«SHAMSI» жазғы дәмханасы – бұл кең дүние жүзіндегі шығыс қонақжайлылығының шағын порталы. Сіздерді біздің тағамдардан дәм татып, теңіз жағалауындағы ерекше атмосфераны сезінуге шақырамыз. Кәсіби аспаздар командасымен, тамаша шығыс асханасының шеберлерімен бірге біз нағыз гурмандарға арналған дәмді тағамдар мәзірін жасадық. Біздің аспаздық шедеврлер сізді шығыс сүйкімділігі мен қонақжайлылық атмосферасына апарады. Жаздың ыстық күндерінде бар сусындарының үлкен таңдауы сізді бей-жай қалдырмайды. «SHAMSI» 150 орынға арналған және таңғы ас кіреді.";
  goHome.textContent = "Үйге";
});

btn_ru.addEventListener("click", function() {
  console.log("ru");
  slide_title_1.textContent = "комфорт";
  slide_title_2.textContent = "ванная комната";
  slide_title_3.textContent = "дополнительно";
  slide_title_4.textContent = "мини кухня";
  slide_info_1.textContent = "Номера оборудованы всем необходимым";
  slide_info_3.textContent = "гардероб, бесплатный Wi-Fi, система климат-контроля";
  carousel_title_1.textContent = "наши интерьеры, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЛЕТНЕЕ КАФЕ «SHAMSI», ";
  carousel_title_2.textContent = "  наши интерьеры, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЛЕТНЕЕ КАФЕ «SHAMSI», ";
  inter_info.textContent = "Площадь номера 38 м2.\n Вместимость каждого глэмпинга для четырех гостей и дополнительного места для детей";

  kitchen.textContent = "кухня:";
  fridge.textContent = "холодильник";
  microwave.textContent = "микроволновка";
  kettle.textContent = "электрический чайник";
  coffe.textContent = "кофе-машина";
  stove.textContent = "электрическая плита";
  
  shower.textContent = "душ: ";
  dryer.textContent = "фен";
  under.textContent = "белье";
  slipper.textContent = "тапочки";
  bath.textContent = "ванная";
  cabin.textContent = "душевая кабина";

  terrace_title.textContent = "ЛЕТНЯЯ ТЕРРАСА";
  terrace_info.textContent = "На летней террасе оборудована кухня с гриль-зоной, а также есть гамак, где можно прекрасно провести досуг за чтением книги. На летней террасе можно весело провести время с друзьями.";

  circled.textContent = "Наших гостей встречают три красивых юрты.";
  yurt_info.textContent = "Дизайн юртового ресепшена выполнен в стиле национальной юрты, что идеально сочетается с современными технологиями и комфортом. Внутри ресепшн вы также найдете элементы в национальном стиле, что создает неповторимую атмосферу и уносит вас к истинным истокам казахской культуры.";

  shamsi_title.textContent = "кафе «SHAMSI»";
  shamsi_info.textContent = "Летнее кафе «SHAMSI» — это маленький портал в огромный мир восточного гостеприимства. Приглашаем отведать наши блюда и ощутить необыкновенную атмосферу на берегу моря. Вместе с командой профессиональных поваров, мастеров изысканной восточной кухни мы составили меню изысканных блюд для настоящих гурманов. Наши кулинарные шедевры перенесут вас в атмосферу восточного очарования и гостеприимства. Огромный выбор барных напитков не оставит вас равнодушным в эти жаркие летние дни. «SHAMSI» рассчитан на 150 мест и включает завтрак.";
  goHome.textContent = "домой";
});

btn_en.addEventListener("click", function() {
  console.log("en");
  slide_title_1.textContent = "comfort";
  slide_title_2.textContent = "bathroom";
  slide_title_3.textContent = "extra";
  slide_title_4.textContent = "mini kitchen";
  slide_info_1.textContent = "The rooms are equipped everything you need";
  slide_info_3.textContent = "wardrobe, free Wi-Fi, climate control system";
  carousel_title_1.textContent = "our interiors, kimyz hana, yurt, SUMMER CAFE «SHAMSI», ";
  carousel_title_2.textContent = "  our interiors, kimyz hana, yurt, SUMMER CAFE «SHAMSI», ";
  inter_info.textContent = "Room area is 38 m2.\n The capacity of each glamping for four guests and additions place for children";

  kitchen.textContent = "kitchen: ";
  fridge.textContent = "fridge";
  microwave.textContent = "microwave";
  kettle.textContent = "electric kettle";
  coffe.textContent = "coffee machine";
  stove.textContent = "electric stove";
  
  shower.textContent = "shower: ";
  dryer.textContent = "hair dryer";
  under.textContent = "underwear";
  slipper.textContent = "slippers";
  bath.textContent = "bathroom";
  cabin.textContent = "shower cabin";

  terrace_title.textContent = "SUMMER TERRACE";
  terrace_info.textContent = "The summer terrace is equipped with a kitchen grill area, there is also a hammock where you you can enjoy the wonderful leisure reading a book. On the summer terrace you can friends have fun.";

  circled.textContent = "Our guests are greeted by three beautiful yurts.";
  yurt_info.textContent = "The design of the yurt reception is made from the national yurt, which blends perfectly with modern technology and comfort. Inside the reception you also find elements in the national style, which creates unique atmosphere and takes you real the origins of Kazakh culture.";

  shamsi_title.textContent = "cafe «shamsi»";
  shamsi_info.textContent = "Summer cafe «SHAMSI» is a small portal to the vast world Eastern hospitality. We invite you to taste our dishes and feel the extraordinary atmosphere on the shore seas. Together with a team of professional chefs, masters of fine oriental cuisine, we have compiled a menu of gourmet dishes for real gourmets. Our culinary masterpieces will take you to the atmosphere of oriental charm and hospitality. A huge selection of bar drinks will not leave you indifferent in these hot summer days. «Shamsi» is designed for 150 seats and includes breakfast.";
  goHome.textContent = "go home";
});
