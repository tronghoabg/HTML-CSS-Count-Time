var question = document.getElementById('numberQuestion');
var time = document.getElementById('numberTime');
var numberTime = document.getElementById('time-start');
var numberQuestion = document.getElementById('question-start');
var btnStart = document.getElementById('btn-start');
var btnPause = document.getElementById('btn-pause');
var btnReset = document.getElementById('btn-reset');
var timeStart = Math.round(parseInt(time.value) / parseInt(question.value) * 60);
var timer
numberTime.innerHTML = timeStart + 's'
question.addEventListener('change', _onChange)
time.addEventListener('change', _onChange)
btnStart.addEventListener('click', _start)
btnReset.addEventListener('click', _reset)

function _onChange() {
    timeStart = Math.round(parseInt(time.value) / parseInt(question.value) * 60);
    numberTime.innerHTML = timeStart + 's'
}

function _start() {
   let time = timeStart
   let question = parseInt(numberQuestion.textContent)
   timer = setInterval(function() {
        time--;
        numberTime.textContent = time + 's';
        if(time === -1) {
            numberTime.textContent = timeStart + 's';
           question++
           numberQuestion.textContent = question;
            if(question === question.value) {
                clearInterval(timer)
            }
           clearInterval(timer)
           time = time;
           _start()
        }
    }, 1000)
    btnStart.disabled = true;
}

function _reset() {
    clearInterval(timer)
    numberTime.innerHTML = timeStart + 's'
    numberQuestion.innerHTML = 1;
    btnStart.disabled = false;
}