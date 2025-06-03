homeScore = document.getElementById('home-score')
guestScore = document.getElementById('guest-score')


let score = 0
homePlusOne = () => {
    score += 1
    homeScore.innerText = score
}

homePlusTwo = () => {
    score += 2
    homeScore.innerText = score
}

homePlusThree = () => {
    score += 3
    homeScore.innerText = score
}

let score2 = 0
guestPlusOne = () => {
    score2 += 1
    guestScore.innerText = score2
}

guestPlusTwo = () => {
    score2 += 2
    guestScore.innerText = score2
}

guestPlusThree = () => {
    score2 += 3
    guestScore.innerText = score2
}

reset = () => {
    score = 0
    score2 = 0
    homeScore.innerText = score
    guestScore.innerText = score2
}
