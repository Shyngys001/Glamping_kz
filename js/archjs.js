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
let slide_info_1 = document.getElementById("slide-title-info-1");
let slide_info_2 = document.getElementById("slide-title-info-2");
let slide_info_3 = document.getElementById("slide-title-info-3");
let carousel_title_1 = document.getElementById("carousel-title-1");
let carousel_title_2 = document.getElementById("carousel-title-2");
let inter_info = document.getElementById("interier-info");
let small = document.getElementById("small");

let slide_title_11 = document.getElementById("slide-title-11");
let slide_title_21 = document.getElementById("slide-title-21");
let slide_title_31 = document.getElementById("slide-title-31");
let slide_info_12 = document.getElementById("slide-title-info-11");
let slide_info_22 = document.getElementById("slide-title-info-22");
let slide_info_32 = document.getElementById("slide-title-info-32");
let small1 = document.getElementById("small1");

let slide_title_111 = document.getElementById("slide-title-111");
let slide_title_211 = document.getElementById("slide-title-211");
let slide_title_311 = document.getElementById("slide-title-311");
let slide_info_121 = document.getElementById("slide-title-info-111");
let slide_info_221 = document.getElementById("slide-title-info-221");
let slide_info_321 = document.getElementById("slide-title-info-321");
let small11 = document.getElementById("small11");


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
  slide_title_2.textContent = "ҚЫМЫЗ ХАНА КИІЗ ҮЙ";
  slide_title_3.textContent = "жазғы терраса";
  slide_info_1.textContent = "Бөлмелер сізге қажет нәрсенің бәрімен жабдықталған";
  slide_info_2.textContent = "Біздің ҚЫМЫЗ ХАНА КИІЗ ҮЙ-де ұлттық тағамдардан дәм татуға болады";
  slide_info_3.textContent = "Жазғы терраса ас үй гриль алаңымен жабдықталған";
  carousel_title_1.textContent = "біздің интерьерлер, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЖАЗҒЫ КАФЕ «SHAMSI»,";
  carousel_title_2.textContent = "  біздің интерьерлер, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЖАЗҒЫ КАФЕ «SHAMSI», ";
  inter_info.textContent = "Бөлменің ауданы 38 м2.\n Төрт қонаққа арналған әр глампингтің сыйымдылығы және балаларға арналған қосымша орын.";
  small.textContent = "гардероб, тегін Wi-Fi, климатты басқару жүйесі";

  slide_title_21.textContent = "Ойын алаңы";
  slide_title_31.textContent = "Балалар";
  slide_info_12.textContent = "O ' mir glamping балаларға арналған ойын алаңын ұсынады.";
  slide_info_22.textContent = "Балалар клубының киіз үйінде балалар оқи алады әртүрлі білім беру ойындары мен әрекеттерінде, мысалы сурет салу, мүсіндеу, жобалау және т.б.";
  slide_info_32.textContent = "Біз сіздің демалысыңыздың жайлы болуын қамтамасыз етеміз және бүкіл отбасы үшін жағымды, сондықтан біз көп нәрсені ұсынамыз балаларға бір нәрсе жасау мүмкіндігі қызықты және пайдалы.";
  small1.textContent = "Балалар ойын бөлмесі-бұл маңызды аспект және ең жақсы кіші баланың дамуындағы нұсқа, себебі балаға қажет энергияңызды бір жерге бағыттау үшін.";
  
  slide_title_111.textContent = "СКАНДИНАВИЯ МОНШАЛАРЫ"
  slide_info_121.textContent = "Скандинавия моншасында сіз қалпына келтіруге және қосымша қуат алуға көмектесетін бал қосылған хош иісті шөп шайынан ләззат ала аласыз."
  small11.textContent = "күндізгі уақыт 12:00-ден 19:00-ге дейін кешкі уақыт 20:00-ден 03: 00-ге дейін"
  slide_title_211.textContent = "Қазіргі әлемнің қарбаласында кідіріп, жан мен денені демалу өте маңызды."
  slide_info_221.textContent = "Біз сізге демалуға және денсаулығыңызды күтуге көмектесетін скандинавиялық ваннадан ләззат алудың бірегей мүмкіндігін ұсынамыз."
  slide_title_311 = "ләззат алыңыз"

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
  slide_title_2.textContent = "ҚЫМЫЗ ХАНА КИІЗ ҮЙ";
  slide_title_3.textContent = "летняя терраса";
  slide_info_1.textContent = "Номера оборудованы всем необходимым";
  slide_info_2.textContent = "В нашем ҚЫМЫЗ ХАНА КИІЗ ҮЙ вы сможете насладиться национальной кухней";
  slide_info_3.textContent = "На летней террасе оборудована кухня с гриль-зоной";
  carousel_title_1.textContent = "наши интерьеры, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЛЕТНЕЕ КАФЕ «SHAMSI», ";
  carousel_title_2.textContent = "  наши интерьеры, ҚЫМЫЗ ХАНА КИІЗ ҮЙ, ЛЕТНЕЕ КАФЕ «SHAMSI», ";
  inter_info.textContent = "Площадь номера 38 м2.\n Вместимость каждого глэмпинга для четырех гостей и дополнительного места для детей";
  small.textContent = "гардероб, бесплатный Wi-Fi, система климат-контроля";

  slide_title_111. textContent = "скандинавские бани"
  slide_info_121. textContent = " в скандинавской бане вы можете насладиться ароматным травяным чаем с медом, который поможет вам восстановиться и получить дополнительную энергию."
  small11. textContent = "дневное время с 12:00 до 19:00 вечернее время с 20:00 до 03: 00"
  slide_title_211. textContent = " очень важно остановиться и отдохнуть душой и телом в суете современного мира."
  slide_info_221. textContent = " мы предлагаем вам уникальную возможность насладиться скандинавской ванной, которая поможет вам расслабиться и позаботиться о своем здоровье."
  slide_title_311 = "наслаждайтесь"

slide_title_21.textContent = "игровая площадка";
  slide_title_31.textContent = "дочерние элементы";
  slide_info_12.textContent = "В O'mir glamping обустроена игровая площадка для детей";
  slide_info_22.textContent = "в юрте детского клуба дети могут заниматься различными развивающими играми и мероприятиями, такими как рисование, лепка, конструирование и т.д.";
  slide_info_32.textContent = "мы заботимся о том, чтобы ваш отдых был комфортным и приятным для всей семьи, поэтому мы предлагаем множеству детей возможность заняться чем-то интересным и полезным";
  small1.textContent = "детская игровая комната - важный аспект и лучший вариант в развитии младшего ребенка, потому что ребенку нужно куда-то направлять свою энергию";

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
  slide_title_2.textContent = "kimys hana kiiz ùi";
  slide_title_3.textContent = "summer terrace";
  slide_info_1.textContent = "The rooms are equipped everything you need";
  slide_info_2.textContent = "In our Kimys hana kiiz ùi, you can enjoy the national cuisine";
  slide_info_3.textContent = "The summer terrace is equipped with a kitchen grill area";
  carousel_title_1.textContent = "our interiors, kimyz hana, yurt, SUMMER CAFE «SHAMSI», ";
  carousel_title_2.textContent = "  our interiors, kimyz hana, yurt, SUMMER CAFE «SHAMSI», ";
  inter_info.textContent = "Room area is 38 m2.\n The capacity of each glamping for four guests and additions place for children";
  small.textContent = "wardrobe, free Wi-Fi, climate control system";

  slide_title_21. textContent = "playground";
  slide_title_31. textContent = "children";
  slide_info_12.textContent = "O'mir glamping offers a playground for children.";
  slide_info_22.textContent = "in the yurt of the children's Club, children can study in various educational games and activities, such as drawing, sculpting, designing, etc.";
  slide_info_32.textContent = "we ensure that your vacation is comfortable and pleasant for the whole family, so we offer a lot of children the opportunity to do something interesting and useful.";
  small1.textContent = " the children's playroom is an important aspect and the best option in the development of a younger child, because the child needs to direct your energy somewhere.";

  slide_title_111. textContent = "Scandinavian baths"
  slide_info_121.textContent = "in the Scandinavian bath you can enjoy aromatic herbal tea with honey, which will help you recover and gain additional energy."
  small11. textContent = "daylight saving time from 12:00 to 19:00 pm from 20:00 to 03: 00 pm"
  slide_title_211.textContent = "in the hustle and bustle of the modern world, it is very important to pause and relax the soul and body."
  slide_info_221.textContent = "we offer you a unique opportunity to enjoy a Scandinavian bath that will help you relax and take care of your health."
  slide_title_311 = "enjoy"

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
