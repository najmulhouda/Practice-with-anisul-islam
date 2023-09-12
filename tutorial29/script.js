
function highestScore(scores){
    var max = scores[0];
    for(var i = 0; i < scores.length; i++){
        if(scores[i] > max){
            max = scores[i];
        }
    }
    return max;

}

var scores = [10, 20, 30, 40, 50];
highestScore(scores);
console.log(highestScore(scores));

