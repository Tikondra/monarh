function menu() {
  var btn = document.querySelector('.navigation__btn');
  var menu = document.querySelector('.navigation__list');

  btn.addEventListener('click', function() {

    if (btn.classList.contains('navigation__btn--active')) {
      btn.classList.remove('navigation__btn--active');
      menu.classList.add('PushRight');
      menu.classList.remove('PullRight');

    } else {

      btn.classList.add('navigation__btn--active');
      menu.classList.add('PullRight');
      menu.classList.add('navigation__list--active');
    }
  });
}

menu()

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true
  });
});

if (document.querySelector('.recommend__list')) {
  var list = document.querySelector('.recommend__list');
  if (window.matchMedia("(min-width: 768px)").matches) {
    list.classList.remove('owl-carousel');
  }
}

$("a.scroll-to").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 120
  }, 800);
  var elements = document.querySelectorAll('.menu__link');

  if (elements) {
    for ( var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('menu__link--active');
    }
  }
  $(this).addClass('menu__link--active');
});

$(document).ready(function(){
  $('.form__input--js').inputmask("+7 (999) 999-99-99");
});

function validationForm (form) {
  var submitBtn = form.querySelector('.form__btn');
  var phone = form.querySelector('.form__input--js');

  var postForm = function () {
    form.reset();
    creatSuccess();
  };
  var creatSuccess = function () {
    submitBtn.textContent = 'Сообщение отправлено';
    setTimeout(function () {
      submitBtn.textContent = 'Отправить';
      if (document.querySelector('.modal')) {
        document.querySelector('.modal').classList.remove('modal--show');
      }
    }, 2000);

  };
  var save = function (data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'call.php');
    xhr.send(data);
  };
  var onValidationForm = function (evt) {
    var regExp = /^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/;
    var tel = evt.target.value;
    var valid = regExp.test(tel);
    if (!valid) {
      evt.target.setCustomValidity('Некоректный номер');
    } else {
      evt.target.setCustomValidity('');
    }
  };

  phone.addEventListener('blur', onValidationForm);
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    save(new FormData(form));
    postForm();
  });
}

function modal () {
  var cardBtn = document.querySelectorAll('.card__btn');
  var openBtn = document.querySelector('.bbq__btn');
  var modal = document.querySelector('.modal');
  var form = modal.querySelector('.modal__form');
  var close = modal.querySelector('.modal__close');
  cardBtn.forEach(function(item) {
    item.addEventListener('click', function () {
      modal.classList.add('modal--show');
    });
  });
  openBtn.addEventListener('click', function () {
    modal.classList.add('modal--show');
  })
  close.addEventListener('click', function () {
    modal.classList.remove('modal--show');
  });
  validationForm(form);
};


if (document.querySelector('.form')) {
  validationForm(document.querySelector('.form'));
}
if (document.querySelector('.modal')) {
  modal();
}
