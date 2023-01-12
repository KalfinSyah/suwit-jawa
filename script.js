const enemy = document.querySelector('.enemy');
const enemy_img = enemy.querySelector('img');
const result_displayer = document.querySelector('.result_displayer');
const h1_result_displayer = result_displayer.querySelector('h1');
const enemy_score_h1 = document.querySelector('.enemy_score h1');
const player_score_h1 = document.querySelector('.player_score h1');
const player = document.querySelector('.player');
const player_thumb = document.querySelector('.thumb');
const player_indexFinger = document.querySelector('.indexFinger');
const player_pinky = document.querySelector('.pinky');
const item_suit = ['thumb', 'indexFinger', 'pinky'];

let your_choice;
let bot_choice;
let counting_player_score = 0;
let counting_enemy_score = 0;

const choice = document.querySelectorAll('.player img');

choice.forEach(function(choice){
    choice.addEventListener('click', function(){     
        your_choice = choice.className;
    
        // replace old image enemy with new iamge logic
        enemy_img.setAttribute('src', Math.round(Math.random()*2) + '.png');
 
        if(enemy_img.getAttribute('src') == '0.png'){
            bot_choice = 'thumb';
        } else if (enemy_img.getAttribute('src') == '1.png'){
            bot_choice = 'indexFinger';
        } else {
            bot_choice = 'pinky';
        }
    
        // game logic
        if (your_choice == bot_choice) {
            h1_result_displayer.innerHTML = 'Draw';
        } else {
            // if i elephant, bot human, i win, else lose
            if(your_choice == item_suit[0]) {
                h1_result_displayer.innerHTML = (bot_choice == item_suit[1]) ? 'You win' : 'You lose';
        
                if(h1_result_displayer.innerHTML == 'You win'){
                    counting_player_score += 1;
                    player_score_h1.innerHTML = counting_player_score;
                } else {
                    counting_enemy_score += 1;
                    enemy_score_h1.innerHTML = counting_enemy_score;
                }
            } else if(your_choice == item_suit[1]) {
                // if i human, bot ant, i win, else lose
                h1_result_displayer.innerHTML = (bot_choice  == item_suit[2]) ? 'You win' : 'You lose';
                
                if(h1_result_displayer.innerHTML == 'You win'){
                    counting_player_score += 1;
                    player_score_h1.innerHTML = counting_player_score;
                } else {
                    counting_enemy_score += 1;
                    enemy_score_h1.innerHTML = counting_enemy_score;
                }
            } else {
                h1_result_displayer.innerHTML = (bot_choice  == item_suit[1]) ? 'You lose' : 'You win';
                
                if(h1_result_displayer.innerHTML == 'You win'){
                    counting_player_score += 1;
                    player_score_h1.innerHTML = counting_player_score;
                } else {
                    counting_enemy_score += 1;
                    enemy_score_h1.innerHTML = counting_enemy_score;
                }
            }
        }
    });
});

player_thumb.addEventListener('click', function(){
    player_thumb.classList.add('cover_up');
    player_indexFinger.classList.remove('cover_up');
    player_pinky.classList.remove('cover_up');
});

player_indexFinger.addEventListener('click', function(){
    player_thumb.classList.remove('cover_up');
    player_indexFinger.classList.add('cover_up');
    player_pinky.classList.remove('cover_up');
});

player_pinky.addEventListener('click', function(){
    player_thumb.classList.remove('cover_up');
    player_indexFinger.classList.remove('cover_up');
    player_pinky.classList.add('cover_up');
});