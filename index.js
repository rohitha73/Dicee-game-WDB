
var dice = Math.random();
dice = dice *6;
dice = Math.floor(dice) + 1;

var dice2 = Math.random();
dice2 = dice2 *6;
dice2 = Math.floor(dice2) + 1;

if(dice === 1){
    document.querySelector('.img1').setAttribute('src','./images/dice1.png');
}
else if(dice === 2){
    document.querySelector('.img1').setAttribute('src','./images/dice2.png');
}
else if(dice === 3){
    document.querySelector('.img1').setAttribute('src','./images/dice3.png');
}
else if(dice === 4){
    document.querySelector('.img1').setAttribute('src','./images/dice4.png');
}
else if(dice === 5){
    document.querySelector('.img1').setAttribute('src','./images/dice5.png');
}
else if(dice === 6){
    document.querySelector('.img1').setAttribute('src','./images/dice6.png');
}
else{
    console.log('Error');
}

if(dice2 === 1){
    document.querySelector('.img2').setAttribute('src','./images/dice1.png');
}
else if(dice2 === 2){
    document.querySelector('.img2').setAttribute('src','./images/dice2.png');
}
else if(dice2 === 3){
    document.querySelector('.img2').setAttribute('src','./images/dice3.png');
}
else if(dice2 === 4){
    document.querySelector('.img2').setAttribute('src','./images/dice4.png');
}
else if(dice2 === 5){
    document.querySelector('.img2').setAttribute('src','./images/dice5.png');
}
else if(dice2 === 6){
    document.querySelector('.img2').setAttribute('src','./images/dice6.png');
}
else{
    console.log('Error');
}

if(dice > dice2){
    document.querySelector('h1').textContent = 'Player 1 Wins!';
}
else if(dice < dice2){
    document.querySelector('h1').textContent = 'Player 2 Wins!';
}
else{
    document.querySelector('h1').textContent = 'Draw!';
}
