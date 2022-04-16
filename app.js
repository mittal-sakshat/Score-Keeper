const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const resetbutton = document.querySelector('#reset');
const playtoscore = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningscore = 3;
let winner = 0;


p1button.addEventListener('click',function(){
    if(winner === 0){
    if(p1score !== winningscore){
    p1score+=1;
p1display.textContent = p1score
}
if(p1score === winningscore)
{
    winner = 1;
    p1display.classList.add('winner');
    p2display.classList.add('loser');
    p1button.disabled = true;
    p2button.disabled = true;

}
}
}) 

p2button.addEventListener('click',function(){
if(winner === 0){
    if( p2score !== winningscore){
    p2score+=1;
    p2display.textContent = p2score
    }
    if(p2score === winningscore)
 {
    winner = 2;
    p2display.classList.add('winner');
    p1display.classList.add('loser');
    p1button.disabled = true;
    p2button.disabled = true;


}
}
})

playtoscore.addEventListener('change', function(){
    winningscore = parseInt(this.value)
    reset();
    
})


resetbutton.addEventListener('click',reset)


function reset() {
    p1score=0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    winner = 0;
    p1display.classList.remove('winner','loser')
    p2display.classList.remove('winner','loser')
    p1button.disabled = false;
    p2button.disabled = false;


}