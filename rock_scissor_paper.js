const player='scissor';
console.log(player)

let paper=false;
let scissor=false;
let rock=false;

let comp=Math.floor(Math.random()*3);
     
if (comp===1) {
    rock=true;
    console.log('Computer chose rock')
} else if(comp===2){
    paper=true;
    console.log('Computer chose paper')
}else if(comp===0)
{
    scissor=true;
    console.log('Computer chose scissor')
}

if (rock) {
    if(player==='scissor'){
        console.log('Player lost!!')
    }else if(player==='rock'){
        console.log('Tie')
    }else if(player==='paper'){
        console.log('Player won!! ')
    }else{
        console.log('Choose between rock, paper, scissor')
    }
} else if(paper) {
    if(player==='scissor'){
        console.log('Player Won!!')
    }else if(player==='rock'){
        console.log('Player lost!!')
    }else if(player==='paper'){
        console.log('Tie ')
    }else{
        console.log('Choose between rock, paper, scissor')
    }
}else if(scissor){
    if(player==='scissor'){
        console.log('Tie!!')
    }else if(player==='rock'){
        console.log('Player won!!')
    }else if(player==='paper'){
        console.log('Player lost!! ')
    }else{
        console.log('Choose between rock, paper, scissor')
    }

}