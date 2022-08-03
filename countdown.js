const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')
const initialValue = document.getElementById('start-value')



startBtn.addEventListener('click', () => {

    document.getElementById("timer").innerHTML = initialValue.value + ":" + "00" + " minutes "

    let minute = parseInt(initialValue.value) - 1;
    let sec = 59;
    let oneSecInterval = setInterval(function () {
        if (sec < 10) {
            document.getElementById("timer").innerHTML = minute + ":0" + sec + " minutes ";
        }
        else {
            document.getElementById("timer").innerHTML = minute + ":" + sec + " minutes ";
        }
        sec--;

        if (sec == 00) {
            minute--;
            sec = 59;
            if (minute < 0) {
                alert('Timer finished')
                clearInterval(oneSecInterval)
            }
        }

        resetBtn.addEventListener('click', () => {
            minute = 0
            sec = 00
            document.getElementById("timer").innerHTML = minute + ":0" + sec + " minutes ";
            clearInterval(oneSecInterval)
        })


    }, 1000);
})