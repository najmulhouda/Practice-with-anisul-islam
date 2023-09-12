var playersInfo = [
    ["Ashrafull", 30],
    ["Najmul", 25],
    ["houda", 25],
    ["Na", 250],
]

function highestRunScore(playersInfo){
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for(var i = 0; i < playersInfo.length; i++){
        if(playersInfo[i][1] > highestScore){
            highestScore = playersInfo[i][1];
            highestScorer = playersInfo[i][0];
        }
    }
    return highestScorer;

}

// for(var i = 0; i < playersInfo.length; i++){
//     if
// }

var  name =    highestRunScore(playersInfo);

console.log(name);