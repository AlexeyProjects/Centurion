let datepicker_label = document.getElementById('datepicker')
let calendarGallery = document.querySelector('.calendar-gallery')
let arrChoosed = []
let arrChoosedTime = []
let timesbuttons = document.querySelectorAll('.calendar-time-list__item')

let timesbuttonsEnabled = []

const closeTime = 18 

var simple = $('.calendar-gallery');

let nowdate = new Date()

let nowYear = nowdate.getFullYear();


let todayNowDay = nowdate.getDate()

let nowHour = nowdate.getHours();
let todayNowMonth = nowdate.getMonth()
var daysForGallery = []

let dateFullToday = `${todayNowDay}/${todayNowMonth+1}/${nowYear}`
console.log(dateFullToday)

getDaysInMonthUTC(todayNowMonth, nowYear,todayNowDay)

let monthNames = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];



datepicker_label.value = `${todayNowDay} ${monthNames[todayNowMonth]}`

function getDaysInMonthUTC(month, year) {

  var today = new Date()
  console.log(today)
  
  // Проверка на сегодняшнюю дату 
  if ( month === today.getMonth() ) {
    var day = today.getDate()
  }
  else {
    var day = 1
  }
  var date = new Date(year, month, day);

  var days = [];
  
  while (date.getMonth() === month) {
    
    let newDate = new Date(date)
    let todayDay = today.getDate();
    let todayMonth = today.getMonth();
    let todayFullDate = `${todayDay}:${todayMonth}`



    let newdateday = date.getDate();
    let month = date.getMonth();
    let newdateYear = date.getFullYear();
    let newdayFullDate = `${newdateday}:${month}`



    let hours = date.getHours();


    let fullMonth = ''

    let dayOfWeek = date.getDay()

    switch(month) {
        case 0: 
            fullMonth = 'Января'
            break; 
        case 1: 
            fullMonth = 'Февраля'
            break; 
        case 2: 
            fullMonth = 'Марта'
            break; 
        case 3: 
            fullMonth = 'Апреля'
            break; 
        case 4: 
            fullMonth = 'Мая'
            break; 
        case 5: 
            fullMonth = 'Июня'
            break; 
        case 6: 
            fullMonth = 'Июля'
            break; 
        case 7: 
            fullMonth = 'Августа'
            break; 
        case 8: 
            fullMonth = 'Сентября'
            break; 
        case 9: 
            fullMonth = 'Октября'
            break; 
        case 10: 
            fullMonth = 'Ноября'
            break; 
        case 11: 
            fullMonth = 'Декабря'
            break; 
    }

    console.log(newdayFullDate === todayFullDate)
    let arrOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    if (  newdayFullDate === todayFullDate  ) {
          console.log('сегодняшний день')
          if ( nowHour >= closeTime ) {
              date.setUTCDate(date.getUTCDate() + 1);
          }
          else {
            console.log(' Не поздно')
            let newObj = {}
            newObj.day = newdateday;
            newObj.month = fullMonth;
            newObj.dayOfWeek = arrOfWeek[dayOfWeek]
            newObj.numbDayOfWeek = dayOfWeek
            newObj.fullDate = `${newdateday}/${month +1}/${newdateYear}`
            if ( !(dayOfWeek != 6 && dayOfWeek != 0 ) ) {
              
              newObj.weekend = true
            }
            else {
              newObj.weekend = false
            }
            
            days.push(newObj);
          }

        // if ( nowHour < 17 ) {
          
        // }
          
        // else {
          // console.log('поздно')
          // return
        // }
    }
    else  {
        console.log('Идет не сегодняшний день')
        
          let newObj = {}
          newObj.day = newdateday;
          newObj.month = fullMonth;
          newObj.dayOfWeek = arrOfWeek[dayOfWeek]
          newObj.numbDayOfWeek = dayOfWeek
          newObj.fullDate = `${newdateday}/${month +1}/${newdateYear}`
          if ( !(dayOfWeek != 6 && dayOfWeek != 0 ) ) {
            
            newObj.weekend = true
          }
          else {
            newObj.weekend = false
          }
          
          days.push(newObj);
        

    }

    // days.push(newDate);
    date.setUTCDate(date.getUTCDate() + 1);
  }
  daysForGallery = days

  drawItemsForGallery(daysForGallery)
  console.log(daysForGallery)
  return days;
  
}


function drawItemsForGallery(items) {

  calendarGallery.innerHTML = ''
  for (var i = 0; i < items.length; i++) {
    let numb = items[i].day
    let dayWeek = items[i].dayOfWeek
    let fullDateTemplate = items[i].fullDate


    

    let classWeekend = (items[i].numbDayOfWeek === 0) || (items[i].numbDayOfWeek === 6) ? 'weekend' : 'no-weekend'
    let template = `
      <div class="calendar-gallery__item ${classWeekend}" data-value="${fullDateTemplate}">
        <div class="calendar-gallery__item__day">
          ${numb}
        </div>
        <div class="calendar-gallery__item__month">
          ${dayWeek}
        </div>
      </div>
      `
    calendarGallery.insertAdjacentHTML('beforeend', template);

  }
  let itemsInGallery = document.querySelectorAll('.calendar-gallery__item.no-weekend');

  itemsInGallery.forEach((item) => {
    item.addEventListener('click', (e) => {
      choseDate(item)
    })
  })
}





var dateToday = new Date();
    var dates = $("#datepicker").datepicker({
        defaultDate: "",
        beforeShowDay: $.datepicker.noWeekends,
        changeMonth: true,
        dateFormat: "dd mm yy",
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        minDate: dateToday,
        onSelect: function(selectedDate) {
            simple.owlCarousel('destroy');

            var option = this.id == "from" ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
            dates.not(this).datepicker("option", option, date);
            let monthNames = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
            let formatedDate = selectedDate.split(' ')

            let month = +formatedDate[1]

            datepicker_label.value = `${formatedDate[0]} ${ monthNames[+month-1]   }`;
            let dateForComputed = selectedDate.split(' ')
    
            console.log(new Date(dateForComputed[2], dateForComputed[1]-1, dateForComputed[0]))
            getDaysInMonthUTC(dateForComputed[1]-1, dateForComputed[2], dateForComputed[0])
            
            let valueForStartPosition = null
            let numChoosedItem = null


            if ( dateForComputed[1]-1 === todayNowMonth ) {
              valueForStartPosition = (dateForComputed[0] - todayNowDay)
              numChoosedItem = (dateForComputed[0] - todayNowDay)
              if ( nowHour >= closeTime ) {
                valueForStartPosition -= 2
                numChoosedItem -= 2
              }
            }
            else {
              valueForStartPosition = dateForComputed[0]-1
              numChoosedItem = dateForComputed[0]-1
            }


            simple.owlCarousel({
              startPosition: valueForStartPosition,
              items: 4
            });
            console.log(dateForComputed[0]-1)

            
            console.log(numChoosedItem)
            let chosedItemList = document.querySelectorAll('.calendar-gallery__item')
            let chosedItem = document.querySelector('.owl-item.active .calendar-gallery__item')
            console.log(chosedItemList[numChoosedItem])
            choseDate(chosedItemList[numChoosedItem])
        }
});




function choseDate(item) {
    if ( arrChoosed.includes(item) ) {

        arrChoosed[0].classList.remove('choosed')
        let num = arrChoosed.indexOf(item)
        arrChoosed.splice(num,1)
    }
    else if ( arrChoosed[0] != item ) {

      if (arrChoosed[0]) {
        arrChoosed[0].classList.remove('choosed')
      }
      arrChoosed.splice(0,1)
      arrChoosed.push(item)
    }

    if ( arrChoosed.includes(item) ) {
      item.classList.add('choosed')
    }

    console.log(item.dataset.value)
    if ( item.dataset.value === dateFullToday ) {
      timesbuttonsEnabled = []
      console.log('Совпадает')
      console.log('Сегодня')
      console.log(timesbuttons)
      timesbuttons.forEach((item) => {
        let textHour = item.dataset.value.split(':')
        if ( textHour[0] <= nowHour ) {
          console.log(item)
          item.classList.add('disabled')
          item.classList.remove('enabled')
          item.classList.remove('choosed')
          console.log('xyu')
        }
      })

    }
    else { 
      timesbuttons.forEach((item) => {
        item.classList.add('enabled')
        item.classList.remove('disabled')
      })

    }
    // timesbuttonsEnabled.forEach((item) => {
    //   item.addEventListener('click', (e) => {
    //     if ( item.classList.contains('enabled') ) {
    //         chooseTime(item)
    //     }
    //     else {
    //       return
    //     }
    //   })
    // })
    // console.log(timesbuttonsEnabled)
}

function chooseTime(item) {
  // Проверка на наличие выбранного и если выбрано - удалить
  if ( arrChoosedTime.includes(item) ) {

      arrChoosedTime[0].classList.remove('choosed')
      let num = arrChoosedTime.indexOf(item)
      arrChoosedTime.splice(num,1)
  }
  // Проверка на отсутствие в массиве и замена если есть,
  else if ( arrChoosedTime[0] != item ) {
    if ( !item.classList.contains('disabled') ) {
      if (arrChoosedTime[0]) {
        arrChoosedTime[0].classList.remove('choosed')
      }
      arrChoosedTime.splice(0,1)
      arrChoosedTime.push(item)
      item.classList.add('choosed')
    }
    
  }
  console.log(arrChoosedTime)
}

timesbuttons.forEach((item) => {
  item.addEventListener('click',(e) => {
    chooseTime(item)
  })
})

$(document).ready(function(){
  var owl = $(".calendar-gallery").owlCarousel({

        items : 4,
        dots: false,
        responsive: {
          0: {
            items: 2,
            margin: 40
          },
          1280: {
            items: 4
          }
        }
        
        

    });
});


let chosedItemList = document.querySelectorAll('.calendar-gallery__item.no-weekend')
choseDate(chosedItemList[0])


