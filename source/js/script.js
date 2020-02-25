(function () {
  var heightScroll = 220;

  if (window.matchMedia("screen and (min-width:1004px)").matches) {
    heightScroll = 100;
  }

  if (window.matchMedia("screen and (min-width:768px)").matches) {
    heightScroll = 180;
  }

  $("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - heightScroll
    }, 800);
    var elements = document.querySelectorAll('.menu__link');

    if (elements) {
      for ( var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('menu__link--active');
      }
    }
    $(this).addClass('menu__link--active');
  });
})();

(function () {
  var previewDoc = document.querySelectorAll('.licenses__doc img');
  var modalDoc = document.querySelector('.licenses__modal');
  var modalImg = modalDoc.querySelector('img');
  var modalClose = modalDoc.querySelector('.licenses__modal-close');

  previewDoc.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      modalDoc.classList.add('licenses__modal--show');
      modalImg.src = evt.target.dataset.src;
      modalClose.addEventListener('click', function () {
        modalDoc.classList.remove('licenses__modal--show');
      })
    })
  })
})();
