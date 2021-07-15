function calcularValor(){
    const inputValue = document.getElementById('input').value;
    const score = document.getElementById('score')
    const level = document.getElementById('level')
    
    if (inputValue == 30){
        score.innerHTML = '190'
        level.innerHTML = 'Level C1'
    } else if (inputValue == 29) {
        score.innerHTML = '187'
        level.innerHTML = 'Level C1'
    } else if (inputValue == 28) {
        score.innerHTML = '183'
        level.innerHTML = 'Level C1'
    } else if (inputValue == 27) {
        score.innerHTML = '180'
        level.innerHTML = 'Level C1'
    } else if (inputValue == 26) {
        score.innerHTML = '178'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 25) {
        score.innerHTML = '176'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 24) {
        score.innerHTML = '173'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 23) {
        score.innerHTML = '171'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 22) {
        score.innerHTML = '169'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 21) {
        score.innerHTML = '167'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 20) {
        score.innerHTML = '164'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 19) {
        score.innerHTML = '162'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 18) {
        score.innerHTML = '160'
        level.innerHTML = 'Level B2'
    } else if (inputValue == 17) {
        score.innerHTML = '157'
        level.innerHTML = 'Level B1'
    } else if (inputValue == 16) {
        score.innerHTML = '153'
        level.innerHTML = 'Level B1'
    } else if (inputValue == 15) {
        score.innerHTML = '150'
        level.innerHTML = 'Level B1'
    } else if (inputValue == 14) {
        score.innerHTML = '147'
        level.innerHTML = 'Level B1'
    } else if (inputValue == 13) {
        score.innerHTML = '143'
        level.innerHTML = 'Level B1'
    } else if (inputValue == 12) {
        score.innerHTML = '140'
        level.innerHTML = 'Level B1'
    } else if (inputValue == 11) {
        score.innerHTML = '136'
        level.innerHTML = '----'
    } else if (inputValue == 10) {
        score.innerHTML = '131'
        level.innerHTML = '----'
    } else if (inputValue == 9) {
        score.innerHTML = '127'
        level.innerHTML = '----'
    } else if (inputValue > 30 || inputValue <= 0) {
        score.innerHTML = 'error'
        level.innerHTML = 'error'
    } else {
        score.innerHTML = '122*'
        level.innerHTML = '----'
    }
}

///////////////////////////////////////////

function pressEnter(e){
    if (e.key == "Enter"){
        const inputValue = document.getElementById('input').value;
        const score = document.getElementById('score')
        const level = document.getElementById('level')
        
        if (inputValue == 30){
            score.innerHTML = '190'
            level.innerHTML = 'Level C1'
        } else if (inputValue == 29) {
            score.innerHTML = '187'
            level.innerHTML = 'Level C1'
        } else if (inputValue == 28) {
            score.innerHTML = '183'
            level.innerHTML = 'Level C1'
        } else if (inputValue == 27) {
            score.innerHTML = '180'
            level.innerHTML = 'Level C1'
        } else if (inputValue == 26) {
            score.innerHTML = '178'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 25) {
            score.innerHTML = '176'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 24) {
            score.innerHTML = '173'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 23) {
            score.innerHTML = '171'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 22) {
            score.innerHTML = '169'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 21) {
            score.innerHTML = '167'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 20) {
            score.innerHTML = '164'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 19) {
            score.innerHTML = '162'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 18) {
            score.innerHTML = '160'
            level.innerHTML = 'Level B2'
        } else if (inputValue == 17) {
            score.innerHTML = '157'
            level.innerHTML = 'Level B1'
        } else if (inputValue == 16) {
            score.innerHTML = '153'
            level.innerHTML = 'Level B1'
        } else if (inputValue == 15) {
            score.innerHTML = '150'
            level.innerHTML = 'Level B1'
        } else if (inputValue == 14) {
            score.innerHTML = '147'
            level.innerHTML = 'Level B1'
        } else if (inputValue == 13) {
            score.innerHTML = '143'
            level.innerHTML = 'Level B1'
        } else if (inputValue == 12) {
            score.innerHTML = '140'
            level.innerHTML = 'Level B1'
        } else if (inputValue == 11) {
            score.innerHTML = '136'
            level.innerHTML = '----'
        } else if (inputValue == 10) {
            score.innerHTML = '131'
            level.innerHTML = '----'
        } else if (inputValue == 9) {
            score.innerHTML = '127'
            level.innerHTML = '----'
        } else if (inputValue > 30 || inputValue <= 0) {
            score.innerHTML = 'error'
            level.innerHTML = 'error'
        } else {
            score.innerHTML = '122*'
            level.innerHTML = '----'
        }
    }
}

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function calcularValorDos() {
    const n = document.getElementById('inputDos').value;
    const scoreDos = document.getElementById('scoreDos')
    const levelDos = document.getElementById('levelDos')

    if (n == 28) {
        scoreDos.innerHTML = '190'
        levelDos.innerHTML = 'Level C1'
    } else if (n == 27 || n == 26 || n == 25 ) {
        scoreDos.innerHTML = Math.round(((n -24)*2.5) + 180);
        levelDos.innerHTML = "Level C1";
    } else if (n == 24) {
        scoreDos.innerHTML = '180'
        levelDos.innerHTML = 'Level C1'
    } else if (n == 23 || n == 22 || n == 21 || n == 20 || n == 19) {
        scoreDos.innerHTML = Math.round(((n - 18)* 3.333333333333333) + 160);
        levelDos.innerHTML = "Level B2";
    } else if (n == 18) {
        scoreDos.innerHTML = '160'
        levelDos.innerHTML = 'Level B2'
    } else if (n == 17 || n == 16 || n == 15 || n == 14 || n == 13 || n == 12) {
        scoreDos.innerHTML = Math.round(((n - 11)* 2.857142857142857) + 140);
        levelDos.innerHTML = "Level B1";
    } else if (n == 11) {
        scoreDos.innerHTML = '140'
        levelDos.innerHTML = 'Level B1'
    } else if (n == 10 || n == 9 || n == 8 ) {
        scoreDos.innerHTML = Math.round(((n - 7)* 4.5) + 122);
        levelDos.innerHTML = "----";
    } else if (n == 7 || n == 6 || n == 5 || n == 4 || n == 3 || n == 2 || n == 1) {
        scoreDos.innerHTML = '122*';
        levelDos.innerHTML = "----";
    } else {
        scoreDos.innerHTML = 'erorr';
        levelDos.innerHTML = "error";
    } 
}

//////////////////////////////////////////////////////////////

function pressEnterDos(e) {
    if (e.key == "Enter"){
        const n = document.getElementById('inputDos').value;
        const scoreDos = document.getElementById('scoreDos')
        const levelDos = document.getElementById('levelDos')

        if (n == 28) {
            scoreDos.innerHTML = '190'
            levelDos.innerHTML = 'Level C1'
        } else if (n == 27 || n == 26 || n == 25 ) {
            scoreDos.innerHTML = Math.round(((n -24)*2.5) + 180);
            levelDos.innerHTML = "Level C1";
        } else if (n == 24) {
            scoreDos.innerHTML = '180'
            levelDos.innerHTML = 'Level C1'
        } else if (n == 23 || n == 22 || n == 21 || n == 20 || n == 19) {
            scoreDos.innerHTML = Math.round(((n - 18)* 3.333333333333333) + 160);
            levelDos.innerHTML = "Level B2";
        } else if (n == 18) {
            scoreDos.innerHTML = '160'
            levelDos.innerHTML = 'Level B2'
        } else if (n == 17 || n == 16 || n == 15 || n == 14 || n == 13 || n == 12) {
            scoreDos.innerHTML = Math.round(((n - 11)* 2.857142857142857) + 140);
            levelDos.innerHTML = "Level B1";
        } else if (n == 11) {
            scoreDos.innerHTML = '140'
            levelDos.innerHTML = 'Level B1'
        } else if (n == 10 || n == 9 || n == 8 ) {
            scoreDos.innerHTML = Math.round(((n - 7)* 4.5) + 122);
            levelDos.innerHTML = "----";
        } else if (n == 7 || n == 6 || n == 5 || n == 4 || n == 3 || n == 2 || n == 1) {
            scoreDos.innerHTML = '122*';
            levelDos.innerHTML = "----";
        } else {
            scoreDos.innerHTML = 'erorr';
            levelDos.innerHTML = "error";
        } 
    }
}
