let hold_button = document.querySelector('.btn--hold')
let roll_button = document.querySelector('.btn--roll')
let reset_button = document.querySelector('.btn--new')
let score_player1 = document.querySelector('#score--0')
let score_player2 = document.querySelector('#score--1')
let side_of_player1 = document.querySelector('.player--0')
let side_of_player2 = document.querySelector('.player--1')
let score_tag_player1 = document.querySelector('#current--0')
let score_tag_player2 = document.querySelector('#current--1')
let dice = document.querySelector('.dice')
let player_1_name = document.querySelector('#name--0')
let player_2_name = document.querySelector('#name--1')
let scores = [];
let current_score;
let active_player;
let playing = true

hold_button.addEventListener('click', () => {


    if(playing){

        scores[active_player] += current_score
        document.querySelector(`#score--${active_player}`).textContent = scores[active_player]
        if (scores[active_player] >= 100    ) {
            document.querySelector(`.player--${active_player}`).classList.add('player--winner')
            document.querySelector(`#name--${active_player}`).textContent = '🎉Winner🎉'
            playing = false
            
        }
        else {
            switch_Player()
        }

    }

   

})

function switch_Player() {

    document.querySelector(`#current--${active_player}`).textContent = 0
    current_score = 0
    if (active_player == 0) {
        active_player = 1
    }
    else {
        active_player = 0
    }
    document.querySelector(`.player--1`).classList.toggle('player--active')
    document.querySelector(`.player--0`).classList.toggle('player--active')

}

reset()

reset_button.addEventListener('click', () => {

    reset()

})

function reset() {
    player_1_name.textContent = 'Player 1'
    player_2_name.textContent = 'Player 2'
    console.log("reset called . . .")
    dice.style.display = 'none'
    score_player1.textContent = 0
    score_player2.textContent = 0
    scores = [0, 0]
    current_score = 0
    score_tag_player1.textContent = 0
    score_tag_player2.textContent = 0
    active_player = 0
    playing = true
    document.querySelector(`.player--1`).classList.remove('player--winner')
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--0`).classList.add('player--active')
    document.querySelector(`.player--1`).classList.remove('player--active')
    
}

let random_number = Math.floor(Math.random() * 6) + 1


roll_button.addEventListener('click', () => {

    if(playing){

    random_number = Math.floor(Math.random() * 6) + 1
    console.log(random_number)
    dice.style.display = 'block'
    dice.src = `dice-${random_number}.png`
    if (random_number != 1) {
        current_score += random_number
        document.querySelector(`#current--${active_player}`).textContent = current_score
    }
    else {

        switch_Player()

    }


    }

    

})

