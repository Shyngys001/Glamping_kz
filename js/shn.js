let btn_kz = document.getElementById("lang-kz");
let btn_ru = document.getElementById("lang-ru");
let btn_en = document.getElementById("lang-en");


let nasha_istoria = document.getElementById("nasha_istoria");
let s_chego = document.getElementById("s_chego_nachinaetsa");
let my_rady = document.getElementById("my_rady");

btn_kz.addEventListener("click", function() {
  console.log("kz");

  nasha_istoria.textContent = "біздің тарих";
  s_chego.textContent = "'өмір' неден басталады? Махаббат пен жаңа нәрсе жасауға деген желыласпен. O 'mir атауының идеясы Каспий теңізінің жағасындағы осы әдемі эко-қонақүйдің негізін қалаушыға келді. Әдемі табиғаттан, толқындардың дыбысынан және теңіз самалынан шабыттанған 'өмір' - О 'мир";  my_rady.textContent = " o ' mir глампинг өзінің дамуын 2022 жылдың 1 маусымында бастады. осы кезеңде біз көп жұмыс жасадық және нәтижені сіздермен бөлісуге дайынбыз. Біздің глампинг-бұл сіз өзіңіздің жайлылығыңыздан бас тартпай-ақ табиғаттың сұлулығынан ләззат алатын ерекше орын. Демалудың жаңа деңгейін ашу және жайлы табиғат атмосферасына ену үшін бізге қосылыңыз!";
  
});

btn_ru.addEventListener("click", function() {
  console.log("ru");

  nasha_istoria.textContent = "НАША ИСТОРИЯ";
  s_chego.textContent = "С чего начинается “Жизнь”? С любви и желания создавать что-то новое. Идея названия O’mir (с казахского переводится как “жизнь”) пришла основательнице этого прекрасного эко-отеля на берегу Каспийского моря. Вдохновленная красивой природой, звуком волн и морским бризом в голове прозвучало слово “Жизнь” - O’mir";
  my_rady.textContent = "O'mir глэмпинг начал свое развитие 1 июня 2022 г. За этот период мы проделали большую работу и наконецто готовы поделиться с вами результатом. Наш глэмпинг - это уникальное место, где вы можете наслаждаться красотой природы, не отказывая себе в комфорте. Присоединяйтесь к нам, чтобы открыть для себя новый уровень отдыха и погрузиться в уютную атмосферу природы!";

});

btn_en.addEventListener("click", function() {
  console.log("en");
  
  nasha_istoria.textContent = "OUR HISTORY";
  s_chego.textContent = "Where does “Life” begin? With love and the desire to create something new. The idea of the name O'mir (translated from Kazakh as 'life') came to the founder of this beautiful eco-hotel on the shores of the Caspian Sea. Inspired by the beautiful nature, the sound of waves and the sea breeze, the word “Life” sounded in my head - O'mir";
  my_rady.textContent = "O'mir glamping began its development on June 1, 2022. During this period, we have done a lot of work and are finally ready to share the result with you. Our glamping is a unique place where you can enjoy the beauty of nature without denying yourself comfort. Join us to discover a new level of relaxation and immerse yourself in the cozy atmosphere of nature!";
});
