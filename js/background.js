const images = ["01.jpg", '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg']
const randomBgi = Math.floor(Math.random()*images.length) + 1

function randomImg () {
    const styles = document.createElement('style')
    const htmls = `
        body {
        background-image : url("js/img/0${randomBgi}.jpg");
        background-size : cover;
        overflow: hidden;}`
    document.head.appendChild(styles)
    styles.innerHTML= htmls
}

randomImg()