let min = document.querySelector('.m'),
  hour = document.querySelector('.h'),
  sec = document.querySelector('.s'),
  hourClock = document.querySelector('.hours'),
  minClock = document.querySelector('.minutes');

function clock() {
  let time = new Date()
  let seconds = time.getSeconds() * 6
  let minutes = time.getMinutes() * 6
  let hours = time.getHours() * 30

  sec.style = `transform: rotate(${seconds}deg)`
  min.style = `transform: rotate(${minutes}deg)`
  hour.style = `transform: rotate(${hours}deg)`

  hourClock.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  minClock.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

  setTimeout(() => clock(), 1000)

}

clock()


// setTimeout(() => {
//   console.log('hello');
// },2000)


// рекурсия это когда функция вызывает саму себя


// let i = 0;

// function rek() {
//   console.log(i);
//   if(i < 100) {
//     i++
//     rek()
//   }
// }
// rek()



let links = document.querySelectorAll('.tabsItem');
let tabs = document.querySelectorAll('.tabsContentItem');


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault()
    for (let x = 0; x < links.length; x++) {
      links[x].classList.remove('active')
      tabs[x].classList.remove('active')
    }
    links[i].classList.add('active')
    tabs[i].classList.add('active')
  })
}

let newSec = document.querySelector('.stopwatch__seconds'),
  newMin = document.querySelector('.stopwatch__minutes'),
  newH = document.querySelector('.stopwatch__hours'),
  span = document.querySelector('.tabsLink__span'),
  stopwatchBtn = document.querySelector('.stopwatch__btn');

stopwatchBtn.addEventListener("click", () => {
  if (stopwatchBtn.innerHTML == 'start') {
    stopwatchBtn.innerHTML = 'stop';
    span.classList.add("active");
    stopwatch();
  } else if (stopwatchBtn.innerHTML == 'stop') {
    stopwatchBtn.innerHTML = 'clear';
    span.classList.remove("active");
    span.classList.add("active_clear");
  } else if (stopwatchBtn.innerHTML == 'clear') {
    stopwatchBtn.innerHTML = 'start';
    span.classList.remove("active_clear");
    newSec.innerHTML = 0;
    newMin.innerHTML = 0;
    newH.innerHTML = 0;
    
  }
})

function stopwatch() {
  if (stopwatchBtn.innerHTML == 'stop') {
    newSec.innerHTML++
    setTimeout(() => {
      if (newSec.innerHTML >= 59) {
        newSec.innerHTML = 0;
        newMin.innerHTML++;
      }
      else if(newMin.innerHTML >= 59){
        newMin.innerHTML = 0;
        newH.innerHTML++;
      }
      stopwatch();
    }, 1000);
  }
}