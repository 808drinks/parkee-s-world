const quote = document.querySelector('.header--info__quote')

const quotes = [
    "Don't worry be happy",
    "love family and friends",
    "Choose a job you love",
    "It's plearue to study",
    "Not the shell Be real",
    "No pain No gain",
    "Just Focus",
    "Life is long enough",
    "First weigh the considerations",
    "Be a best friend you like"
]

const random = Math.floor(Math.random() * quotes.length)

quote.innerText = quotes[random]

