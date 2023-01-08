const clock = document.querySelector(".header--info__time")

Ticking ();
setInterval(Ticking, 1000)

function Ticking () {
    const date = new Date()
    let month = date.getUTCMonth();
    let day = date.getDate();
    const hour = String(date.getHours()).padStart(2,'0');
    const minute = String(date.getMinutes()).padStart(2,'0');
    const second = String(date.getSeconds()).padStart(2,'0');
    monthChange ()
    function monthChange () {
        if (month === 0) {
            month = 'Jan'
        }
        else if (month === 1) {
            month = 'Feb'
        }
        else if (month === 2) {
            month = 'Mar'
        }
        else if (month === 3) {
            month = 'Apr'
        }
        else if (month === 4) {
            month = 'May'
        }
        else if (month === 5) {
            month = 'Jun'
        }
        else if (month === 6) {
            month = 'Jul'
        }
        else if (month === 7) {
            month = 'Aug'
        }
        else if (month === 8) {
            month = 'Sep'
        }
        else if (month === 9) {
            month = 'Oct'
        }
        else if (month === 10) {
            month = 'Nov'
        }
        else {
            month = 'Dec'
        }
    }
    dayChange ()
    function dayChange () {
        if (day === 1) {
            day = `1st`
        }
        else if (day===2) {
            day = `2nd`
        }
        else if (day===3) {
            day = `3rd`
        }
        else {
            day = `${day}st`
        }
    }
    clock.innerText = `${month}.${day} ${hour}:${minute}:${second}`

}
