let popup = document.querySelector('.popup');
let result_items = document.querySelectorAll('.results-list__item')
let popup_video = popup.querySelector('.popup-body-content__video')
let popup_close = popup.querySelector('.popup-body-header__close')
let popup_body = popup.querySelector('.popup-body')
let cases = document.querySelectorAll('.collective-cases-list__item')
let popup_image = popup.querySelector('.popup-body-content__image')
let rigthBtn = document.querySelector('.header-panel__rigthbtn')
let navbarrigth = document.querySelector('.nav-list')
let navbarrigth_close = navbarrigth.querySelector('.nav-list__close')


cases.forEach((item) => {
  let name = ''
  item.addEventListener('click', (e) => {
    name = item.dataset.value
    console.log(name)
    showPopup('case',name)
  })
})

result_items.forEach((item) => {
  let name = ''
  item.addEventListener('click', (e) => {
    name = item.dataset.value
    console.log(name)
    showPopup('video',name)
  })
})

rigthBtn.addEventListener('click', (e) => {
  navbarrigth.style.right = 0
  navbarrigth_close.addEventListener('click', (e) => {
    navbarrigth.style.right = "-100%"
  })
})





function showPopup(type, ctx) {
  if ( type === 'video' ) {
    popup_body.classList.add('video')
    showVideo(ctx)
    popup_close.addEventListener('click', (e) => {
      hidePopup('video')
    })
  }

  if ( type === 'case' ) {
    popup_body.classList.add('case')
    popup_image.src = `static/images/collective/cases/${ctx}.png`
    popup_close.addEventListener('click', (e) => {
      hidePopup('case')
    })
  }

  popup.classList.remove('hidden')
  document.body.classList.add('no-scroll')
  
}

function showVideo(video) {
  popup_video.style.display = 'block'
  popup_video.src = `static/videos/${video}.mp4`
}

function hidePopup(ctx) {
  popup.classList.add('hidden')
  document.body.classList.remove('no-scroll')
  if (ctx === 'video') {
    popup_body.classList.remove('video')
    popup_video.style.display = 'none'
  }

  if (ctx === 'case') {
    popup_body.classList.remove('case')
    popup_video.style.display = 'none'
  }
}

$(document).ready(function(){
  var owl = $(".collective-list").owlCarousel({

        items : 4,
        loop: true,
        stagePadding: 50,
        margin: 100,
        responsive: {
          320: {
            items: 1,
            margin: 0,
            stagePadding: 0,
          },
          768: {
            items: 2,
            margin: 250
          },
          1280: {
            items: 4
          }
        }

    });
});



$( "#plus1month" ).click(function() {
  $( ".expenses-list__item-content-droper" ).slideToggle( "300", function() {
    // Animation complete.
  });
});

