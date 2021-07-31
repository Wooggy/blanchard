document.addEventListener('DOMContentLoaded', function () {


// Drop-down menu

function setMenuListener () {
  const btnClassName = 'header__item-btn';
  const activeClassName = 'is-active';

  document.body.addEventListener('click', (evt) => {
    const activeElements = document.querySelectorAll(`.${activeClassName}`);
    
    if (activeElements.length && !evt.target.closest(`.${activeClassName}`)) {
      activeElements.forEach((current) => {
        current.classList.remove(activeClassName);
      });
    }

    if (evt.target.closest(`.${btnClassName}`)) {
      const btn = evt.target.closest(`.${btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);
        
      btn.classList.toggle(activeClassName);
      drop.classList.toggle(activeClassName);
    }
})}

setMenuListener();

// Select Choices

const element = document.querySelector('#selectCustom');
        const choices = new Choices(element, {
            searchEnabled: false,
            shouldSort: false,
            itemSelectText: '',
            position: 'select-one'
        });

// SWIPER

const heroSwiper = new Swiper('.hero-swiper', {
  speed: 4000, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 6000,
  },

});

const eventsSwiper = new Swiper('.events-swiper', {
    slidesPerView: 1,
    speed: 4000,
    autoHeight: false,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination-tm',
        type: 'bullets',
        clickable:true
    },





});

const gallerySwiper = new Swiper('.gallery-swiper', {
    spaceBetween: 50,
    autoHeight: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },

  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev'
  },
    breakpoints: {
       1201: {
            slidesPerGroup: 1,
            slidesPerColumn: 2,
            slidesPerColumnFill: "row",
            spaceBetween: 50,
            slidesPerView: 3

        },
        481: {
            slidesPerGroup: 1,
            slidesPerColumn: 2,
            spaceBetween: 34,
            slidesPerColumnFill: "row",
            slidesPerView: 2

        },
        320: {
            slidesPerGroup: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "row",
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});

const editionsSwiper = new Swiper('.editions-swiper', {
  slidesPerView: 3,
  spaceBetween: 50,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: '.editions__button-next',
    prevEl: '.editions__button-prev',
  },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            spaceBetween: 50,
            slidesPerView: 2

        },
        // when window width is >= 640px
        1201: {
            spaceBetween: 50,
            slidesPerView: 3

        }
    }


});

const projectsSwiper = new Swiper('.projects-swiper', {
  slidesPerView: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev'
  },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            spaceBetween: 50,
            slidesPerView: 2

        },
        // when window width is >= 640px
        1201: {
            spaceBetween: 50,
            slidesPerView: 3

        }
    }

});
  
// Tabs


$( ".js-tabs" ).tabs({
  show: { effect: "fadeIn", duration: 400 },
  hide: { effect: "fadeOut", duration: 300 },
  active: 2
});

function catalogArtistTab() {
  document.querySelector('.catalog__artist-tab').addEventListener('click', function () {
    document.querySelector('.catalog__artist-tab').classList.toggle('.is-active-tab')
  })
}

catalogArtistTab()

// Custom Tab


function setCustomTabs () {
  const customTabName = "js-custom-tab";
  const tabs = Array.from(document.querySelectorAll(`.${customTabName}[data-path]`));
  const content = Array.from(document.querySelectorAll(`.${customTabName}[data-target]`));
  
  content.forEach(function (el, i) {
    if (i !== 1) {
      el.classList.add('is-hidden');
    }
  });
  
  tabs.forEach(function (el) {
    el.addEventListener('click', function () {
      const path = this.dataset.path;
      
      content.forEach(function (el) {
        if (path !== el.dataset.target) {
          el.classList.add('is-hidden');
        } else {
          el.classList.remove('is-hidden');
        }
      });
    });
  });
}

setCustomTabs();


// Accordion


$(".accordion").accordion({
  icons: {"activeHeader": "questions__plus-icon-active"},
  heightStyle: "content",
  collapsible: true
});

// Tooltip

tippy('#myTooltip', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'acid',
  animation: 'rotate',
});

tippy('#myTooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'acid',
  animation: 'rotate',
});

tippy('#myTooltip-3', {
  content: 'В стремлении повысить качество',
  theme: 'acid',
  animation: 'rotate',
});

// Yandex Map

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.757534, 37.6162109],
        zoom: 15,
        controls: []
    },
    {
      suppressMapOpenBlock: true
    });
    var myPlacemark = new ymaps.Placemark([55.757534, 37.6162109], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-point.png',
        iconImageSize: [20, 20]
    });

    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
        top: '100px',
        right: '20px',
      }
    });

    myMap.controls.add('geolocationControl', {
      size: 'large',
      float: 'none',
      position: {
        top: '180px',
        right: '20px',
      }
    });

    myMap.geoObjects.add(myPlacemark)
}

// Events


function setHiddenCards(quantity) {
  const hidden = "events__is-hidden";
  const openAnimation = "events__fade-in";
  const closeAnimation = "events__fade-out";
  let isOpened = false;
  const showText = "Все события";
  const hideText = "Скрыть";
  const btn = document.querySelector(".events__btn");
  const cards = Array.from(document.querySelectorAll(".events__card"));

  cards.forEach((el, i) => {
    if (i >= quantity) {
      el.classList.add(hidden);
      el.addEventListener("animationend", function () {
        if (!isOpened) {
          this.classList.add(hidden);
        }
      });
    }
  });

  btn.addEventListener("click", function (event) {
    isOpened = !isOpened;

    if (isOpened) {
      btn.textContent = hideText;

      cards.forEach((el, i) => {
        el.classList.remove(hidden, closeAnimation);
        el.classList.add(openAnimation);
      });

      cards[quantity].scrollIntoView({ block: "start", behavior: "smooth" });
    } else {
      btn.textContent = showText;

      cards.forEach((el, i) => {
        if (i >= quantity) {
          el.classList.remove(openAnimation);
          el.classList.add(closeAnimation);
        }
      });

      cards[0].scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

    if ($(window).width() < 1024) {
        setHiddenCards(2);
    }
    else {
        setHiddenCards(3);
    }

});


$('.menu-toggler').click(function () {
    $(".header__bottom-nav").toggleClass("active");
    $(this).toggleClass("active");
    $("body").toggleClass("active");

});

if ($(window).width() < 1201) {
    $('.header__bottom-search .header__bottom-button').click(function () {
        $(".header__bottom-search .header__bottom-search-input").toggleClass("active");
        return false;

    });


}

    $('.h3-toggler').click(function () {
        $(".editions__checkbox-container").toggle();
        $(this).toggleClass("active");

    });
