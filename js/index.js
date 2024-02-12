const counterParticipantsCurrent = document.querySelector('.slider_counter-current');
const counterParticipantsAll = document.querySelector('.slider_counter-all');
const ParticipantsAll = Array.from(document.querySelectorAll('.participants_list-item'));
if (ParticipantsAll.length === 0) {
  const participantsSection = document.querySelector('.participants');
  participantsSection.classList.add('hidden');
} else {
  counterParticipantsAll.innerHTML = ParticipantsAll.length;
  const swiperParticipants = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        counterParticipantsCurrent.innerHTML = ParticipantsAll.length > 0 ? this.realIndex + 1 : '';
      },
    },
    navigation: {
      nextEl: '.participants-next',
      prevEl: '.participants-prev',
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

var swiper = new Swiper();
var init = false;
function swiperMode() {
  let laptop = window.matchMedia('(max-width: 1025px)');

  // Enable (for mobile)
  if (laptop.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper-stages', {
        slidesPerView: 1,
        spaceBetween: 20,
        direction: 'horizontal',
        navigation: {
          nextEl: '.nextStage',
          prevEl: '.prevStage',
        },
        pagination: {
          el: '.stages-pagination',
        },

        breakpoints: {
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
    }
  } else {
    swiper.destroy();
    init = false;
  }
}

window.addEventListener('load', function () {
  swiperMode();
});

window.addEventListener('resize', function () {
  swiperMode();
});
