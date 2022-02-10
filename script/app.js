// LEVEL BREEZY   --------------------------------------->
// THIS CREATES THE BOARD
const startGameLevelOne = () => {
  // everything in the header
  let headerContainer = document.createElement('div');
  let h1Header = document.createElement('h1');

  h1Header.setAttribute('id', 'header');
  h1Header.innerText = 'Crossword Countdown • Breezy Level';
  headerContainer.setAttribute('id', 'header-container');

  document.body.appendChild(headerContainer);
  headerContainer.appendChild(h1Header);
  // main container
  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  document.body.appendChild(mainContainer);
  // container A
  let containerA = document.createElement('div');
  containerA.setAttribute('id', 'container-aLevelOne');
  mainContainer.appendChild(containerA);
  // container B
  let containerB = document.createElement('div');
  containerB.setAttribute('id', 'container-b');
  mainContainer.appendChild(containerB);
  // container B // timer-box
  let timerBox = document.createElement('div');
  timerBox.setAttribute('id', 'timer-box');
  containerB.appendChild(timerBox);
  // container B // timer-box // h1(time remaining)
  let timeRemaining = document.createElement('h1');
  timeRemaining.innerText = 'Time remaining:';
  timerBox.appendChild(timeRemaining);
  // container B // timer-box // h1(timer)
  let timer = document.createElement('h1');
  timer.setAttribute('id', 'timer');
  timer.innerText = 'GO!';
  timerBox.appendChild(timer);
  // container B // word-box
  let wordBox = document.createElement('div');
  wordBox.setAttribute('id', 'word-box');
  containerB.appendChild(wordBox);
  // container B // return-box
  let returnBox = document.createElement('div');
  returnBox.setAttribute('id', 'return-box');
  containerB.appendChild(returnBox);
  // container B // word-box // APPLE
  let appleText = document.createElement('p');
  appleText.setAttribute('id', 'sail');
  appleText.setAttribute('class', 'biggerFont');
  appleText.innerText = 'SAIL';
  wordBox.appendChild(appleText);
  // container B // word-box // ORANGE
  let orangeText = document.createElement('p');
  orangeText.setAttribute('id', 'anchor');
  orangeText.setAttribute('class', 'biggerFont');
  orangeText.innerText = 'ANCHOR';
  wordBox.appendChild(orangeText);
  // container B // word-box // BANANA
  let bananaText = document.createElement('p');
  bananaText.setAttribute('id', 'paddle');
  bananaText.setAttribute('class', 'biggerFont');
  bananaText.innerText = 'PADDLE';
  wordBox.appendChild(bananaText);
  // container B // word-box // GRAPE
  let grapeText = document.createElement('p');
  grapeText.setAttribute('id', 'tide');
  grapeText.setAttribute('class', 'biggerFont');
  grapeText.innerText = 'TIDE';
  wordBox.appendChild(grapeText);
  // container B // word-box // PLAY AGAIN

  let returntoMainButton = document.createElement('button');
  returntoMainButton.setAttribute('id', 'returntoMainButton');
  returntoMainButton.setAttribute('class', 'button-invisible');
  returntoMainButton.innerText = 'RETURN TO MAIN MENU';
  document.getElementById("rules-text").innerText ="Just in case you forgot, here are the rules:"
  returnBox.appendChild(returntoMainButton);

  // RETURN TO MAIN MENU
  document
    .getElementById('returntoMainButton')
    .addEventListener('click', () => {
      document.querySelector('#button-div').style.removeProperty('display');
      document.querySelector('#header-div').style.removeProperty('display');
      document.getElementById('returntoMainButton').remove();

      document.getElementById('header-container').remove();
      document.getElementById('main-container').remove();
      if (document.querySelector('#breezy-status').innerText === "complete!" && document.querySelector('#tricky-status').innerText === "complete!" && document.querySelector('#tough-status').innerText === "complete!"){
        document.querySelector("#rules-box").remove();
        document.createElement("div").setAttribute("id", "#rules-box")
        let catPhoto = document.createElement("img").setAttribute("id", "somaPhoto")
        catPhoto.setAttribute("src", "https://placekitten.com/350/350")
        let newRulesBox = document.querySelector("#rules-box")
        newRulesBox.appendChild(catPhoto)
        let catText = document.createElement("p").setAttribute("class", "rules-text").innerText = "Great job, you win!"
        newRulesBox.appendChild(catText)
      }

      // CHANGE TEXT AT MAIN MENU DEPENDING ON COLOR
    });
  // GENERATE BOARD
  let alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  let alphabetArray = alphabet.split(' ');

  for (let i = 0; i < 64; i++) {
    let numberGen = Math.floor(Math.random() * 26);

    let singleBlock = document.createElement('div');
    singleBlock.classList.add('singleBlockLevelOne');
    singleBlock.innerText = alphabetArray[numberGen];
    singleBlock.setAttribute('id', i);
    containerA.appendChild(singleBlock);
  }

  // TIMER

  let countdownStart = 46;
  let timerMinusOne = () => {
    countdownStart--;
    timer.innerText = countdownStart + 'sec';

    if (countdownStart === 0) {
      clearInterval(oneMinTimer);
      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '😢You lost!😢';
      document.querySelector('#startLevel1').style.backgroundColor = 'yellow';
      document.querySelector('#breezy-status').innerText = "try again"
    }

    if (document.querySelectorAll('.biggerFontandStrikethrough').length === 4) {
      clearInterval(oneMinTimer);

      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '🏆You won!🏆';
      document.querySelector('#startLevel1').style.backgroundColor =
        'lightgreen';
        document.querySelector('#breezy-status').innerText = "complete!"
    }
  };

  let oneMinTimer = setInterval(timerMinusOne, 1000);
};

// GENERATE LETTERS ON BOARD
let generateNamesOne = () => {
  //APPLE SETUP
  let sailS = document.getElementById('2');
  sailS.className = 'singleBlockTestLevelOne';
  sailS.innerText = 'S';
  let sailA = document.getElementById('11');
  sailA.className = 'singleBlockTestLevelOne';
  sailA.innerText = 'A';
  let sailI = document.getElementById('20');
  sailI.className = 'singleBlockTestLevelOne';
  sailI.innerText = 'I';
  let sailL = document.getElementById('29');
  sailL.className = 'singleBlockTestLevelOne';
  sailL.innerText = 'L';
  // ANCHOR SETUP
  let anchorA = document.getElementById('56');
  anchorA.className = 'singleBlockTestLevelOne';
  anchorA.innerText = 'A';
  let anchorN = document.getElementById('57');
  anchorN.className = 'singleBlockTestLevelOne';
  anchorN.innerText = 'N';
  let anchorC = document.getElementById('58');
  anchorC.className = 'singleBlockTestLevelOne';
  anchorC.innerText = 'C';
  let anchorH = document.getElementById('59');
  anchorH.className = 'singleBlockTestLevelOne';
  anchorH.innerText = 'H';
  let anchorO = document.getElementById('60');
  anchorO.className = 'singleBlockTestLevelOne';
  anchorO.innerText = 'O';
  let anchorR = document.getElementById('61');
  anchorR.className = 'singleBlockTestLevelOne';
  anchorR.innerText = 'R';
  //  PADDLE
  let paddleP = document.getElementById('9');
  paddleP.className = 'singleBlockTestLevelOne';
  paddleP.innerText = 'P';
  let paddleA = document.getElementById('17');
  paddleA.className = 'singleBlockTestLevelOne';
  paddleA.innerText = 'A';
  let paddleD1 = document.getElementById('25');
  paddleD1.className = 'singleBlockTestLevelOne';
  paddleD1.innerText = 'D';
  let paddleD2 = document.getElementById('33');
  paddleD2.className = 'singleBlockTestLevelOne';
  paddleD2.innerText = 'D';
  let paddleL = document.getElementById('41');
  paddleL.className = 'singleBlockTestLevelOne';
  paddleL.innerText = 'L';
  let paddleE = document.getElementById('49');
  paddleE.className = 'singleBlockTestLevelOne';
  paddleE.innerText = 'E';
  // TIDE SETUP
  let tideT = document.getElementById('31');
  tideT.className = 'singleBlockTestLevelOne';
  tideT.innerText = 'T';
  let tideI = document.getElementById('38');
  tideI.className = 'singleBlockTestLevelOne';
  tideI.innerText = 'I';
  let tideD = document.getElementById('45');
  tideD.className = 'singleBlockTestLevelOne';
  tideD.innerText = 'D';
  let tideE = document.getElementById('52');
  tideE.className = 'singleBlockTestLevelOne';
  tideE.innerText = 'E';

  // SAIL
  //S
  sailS.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      sailS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sailS.style.backgroundColor = 'lightgreen';
      sailA.style.backgroundColor = 'lightgreen';
      sailI.style.backgroundColor = 'lightgreen';
      sailL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  //A
  sailA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      sailS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sailS.style.backgroundColor = 'lightgreen';
      sailA.style.backgroundColor = 'lightgreen';
      sailI.style.backgroundColor = 'lightgreen';
      sailL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  sailI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      sailS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sailS.style.backgroundColor = 'lightgreen';
      sailA.style.backgroundColor = 'lightgreen';
      sailI.style.backgroundColor = 'lightgreen';
      sailL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  sailL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      sailS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sailL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sailS.style.backgroundColor = 'lightgreen';
      sailA.style.backgroundColor = 'lightgreen';
      sailI.style.backgroundColor = 'lightgreen';
      sailL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // ANCHOR
  // A
  anchorA.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    console.log(anchorA.style.backgroundColor)
    if (
      anchorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorH.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorR.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      anchorA.style.backgroundColor = 'lightgreen';
      anchorN.style.backgroundColor = 'lightgreen';
      anchorC.style.backgroundColor = 'lightgreen';
      anchorH.style.backgroundColor = 'lightgreen';
      anchorO.style.backgroundColor = 'lightgreen';
      anchorR.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  anchorN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      anchorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorH.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorR.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      anchorA.style.backgroundColor = 'lightgreen';
      anchorN.style.backgroundColor = 'lightgreen';
      anchorC.style.backgroundColor = 'lightgreen';
      anchorH.style.backgroundColor = 'lightgreen';
      anchorO.style.backgroundColor = 'lightgreen';
      anchorR.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // C
  anchorC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      anchorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorH.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorR.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      anchorA.style.backgroundColor = 'lightgreen';
      anchorN.style.backgroundColor = 'lightgreen';
      anchorC.style.backgroundColor = 'lightgreen';
      anchorH.style.backgroundColor = 'lightgreen';
      anchorO.style.backgroundColor = 'lightgreen';
      anchorR.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // H
  anchorH.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      anchorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorH.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorR.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      anchorA.style.backgroundColor = 'lightgreen';
      anchorN.style.backgroundColor = 'lightgreen';
      anchorC.style.backgroundColor = 'lightgreen';
      anchorH.style.backgroundColor = 'lightgreen';
      anchorO.style.backgroundColor = 'lightgreen';
      anchorR.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  anchorO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      anchorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorH.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorR.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      anchorA.style.backgroundColor = 'lightgreen';
      anchorN.style.backgroundColor = 'lightgreen';
      anchorC.style.backgroundColor = 'lightgreen';
      anchorH.style.backgroundColor = 'lightgreen';
      anchorO.style.backgroundColor = 'lightgreen';
      anchorR.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  anchorR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = '#ffd6ba';
    if (
      anchorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorH.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      anchorR.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      anchorA.style.backgroundColor = 'lightgreen';
      anchorN.style.backgroundColor = 'lightgreen';
      anchorC.style.backgroundColor = 'lightgreen';
      anchorH.style.backgroundColor = 'lightgreen';
      anchorO.style.backgroundColor = 'lightgreen';
      anchorR.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });

  // PADDLE
  // P
  paddleP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      paddleP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      paddleP.style.backgroundColor = 'lightgreen';
      paddleA.style.backgroundColor = 'lightgreen';
      paddleD1.style.backgroundColor = 'lightgreen';
      paddleD2.style.backgroundColor = 'lightgreen';
      paddleL.style.backgroundColor = 'lightgreen';
      paddleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  paddleA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      paddleP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      paddleP.style.backgroundColor = 'lightgreen';
      paddleA.style.backgroundColor = 'lightgreen';
      paddleD1.style.backgroundColor = 'lightgreen';
      paddleD2.style.backgroundColor = 'lightgreen';
      paddleL.style.backgroundColor = 'lightgreen';
      paddleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // D
  paddleD1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      paddleP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      paddleP.style.backgroundColor = 'lightgreen';
      paddleA.style.backgroundColor = 'lightgreen';
      paddleD1.style.backgroundColor = 'lightgreen';
      paddleD2.style.backgroundColor = 'lightgreen';
      paddleL.style.backgroundColor = 'lightgreen';
      paddleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // D
  paddleD2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      paddleP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      paddleP.style.backgroundColor = 'lightgreen';
      paddleA.style.backgroundColor = 'lightgreen';
      paddleD1.style.backgroundColor = 'lightgreen';
      paddleD2.style.backgroundColor = 'lightgreen';
      paddleL.style.backgroundColor = 'lightgreen';
      paddleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  paddleL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      paddleP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      paddleP.style.backgroundColor = 'lightgreen';
      paddleA.style.backgroundColor = 'lightgreen';
      paddleD1.style.backgroundColor = 'lightgreen';
      paddleD2.style.backgroundColor = 'lightgreen';
      paddleL.style.backgroundColor = 'lightgreen';
      paddleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  paddleE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      paddleP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleD2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      paddleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      paddleP.style.backgroundColor = 'lightgreen';
      paddleA.style.backgroundColor = 'lightgreen';
      paddleD1.style.backgroundColor = 'lightgreen';
      paddleD2.style.backgroundColor = 'lightgreen';
      paddleL.style.backgroundColor = 'lightgreen';
      paddleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });

  // TIDE
  // T
  tideT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tideT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tideT.style.backgroundColor = 'lightgreen';
      tideI.style.backgroundColor = 'lightgreen';
      tideD.style.backgroundColor = 'lightgreen';
      tideE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tide');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  tideI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tideT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tideT.style.backgroundColor = 'lightgreen';
      tideI.style.backgroundColor = 'lightgreen';
      tideD.style.backgroundColor = 'lightgreen';
      tideE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tide');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // D
  tideD.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tideT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tideT.style.backgroundColor = 'lightgreen';
      tideI.style.backgroundColor = 'lightgreen';
      tideD.style.backgroundColor = 'lightgreen';
      tideE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tide');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  tideE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tideT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tideE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tideT.style.backgroundColor = 'lightgreen';
      tideI.style.backgroundColor = 'lightgreen';
      tideD.style.backgroundColor = 'lightgreen';
      tideE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tide');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
};
// LEVEL BREEZY   --------------------------------------->

// LEVEL TRICKY   --------------------------------------->
// THIS CREATES THE BOARD
const startGameLevelTwo = () => {
  // everything in the header
  let headerContainer = document.createElement('div');
  let h1Header = document.createElement('h1');

  h1Header.setAttribute('id', 'header');
  h1Header.innerText = 'Crossword Countdown • Tricky Level';
  headerContainer.setAttribute('id', 'header-container');

  document.body.appendChild(headerContainer);
  headerContainer.appendChild(h1Header);
  // main container
  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  document.body.appendChild(mainContainer);
  // container A
  let containerA = document.createElement('div');
  containerA.setAttribute('id', 'container-aLevelTwo');
  mainContainer.appendChild(containerA);
  // container B
  let containerB = document.createElement('div');
  containerB.setAttribute('id', 'container-b');
  mainContainer.appendChild(containerB);
  // container B // timer-box
  let timerBox = document.createElement('div');
  timerBox.setAttribute('id', 'timer-box');
  containerB.appendChild(timerBox);
  // container B // timer-box // h1(time remaining)
  let timeRemaining = document.createElement('h1');
  timeRemaining.innerText = 'Time remaining:';
  timerBox.appendChild(timeRemaining);
  // container B // timer-box // h1(timer)
  let timer = document.createElement('h1');
  timer.setAttribute('id', 'timer');
  timer.innerText = 'GO!';
  timerBox.appendChild(timer);
  // container B // word-box
  let wordBox = document.createElement('div');
  wordBox.setAttribute('id', 'word-box');
  containerB.appendChild(wordBox);
  // container B // return-box
  let returnBox = document.createElement('div');
  returnBox.setAttribute('id', 'return-box');
  containerB.appendChild(returnBox);
  // container B // word-box // APPLE
  let appleText = document.createElement('p');
  appleText.setAttribute('id', 'apple');
  appleText.setAttribute('class', 'biggerFont');
  appleText.innerText = 'APPLE';
  wordBox.appendChild(appleText);
  // container B // word-box // ORANGE
  let orangeText = document.createElement('p');
  orangeText.setAttribute('id', 'orange');
  orangeText.setAttribute('class', 'biggerFont');
  orangeText.innerText = 'ORANGE';
  wordBox.appendChild(orangeText);
  // container B // word-box // BANANA
  let bananaText = document.createElement('p');
  bananaText.setAttribute('id', 'banana');
  bananaText.setAttribute('class', 'biggerFont');
  bananaText.innerText = 'BANANA';
  wordBox.appendChild(bananaText);
  // container B // word-box // GRAPE
  let grapeText = document.createElement('p');
  grapeText.setAttribute('id', 'grape');
  grapeText.setAttribute('class', 'biggerFont');
  grapeText.innerText = 'GRAPE';
  wordBox.appendChild(grapeText);
  // container B // word-box // NECTARINE
  let nectarineText = document.createElement('p');
  nectarineText.setAttribute('id', 'nectarine');
  nectarineText.setAttribute('class', 'biggerFont');
  nectarineText.innerText = 'NECTARINE';
  wordBox.appendChild(nectarineText);
  // container B // word-box // TANGERINE
  let tangerineText = document.createElement('p');
  tangerineText.setAttribute('id', 'tangerine');
  tangerineText.setAttribute('class', 'biggerFont');
  tangerineText.innerText = 'TANGERINE';
  wordBox.appendChild(tangerineText);
  // container B // word-box // LIME
  let limeText = document.createElement('p');
  limeText.setAttribute('id', 'lime');
  limeText.setAttribute('class', 'biggerFont');
  limeText.innerText = 'LIME';
  wordBox.appendChild(limeText);
  // container B // word-box // MANGO
  let mangoText = document.createElement('p');
  mangoText.setAttribute('id', 'mango');
  mangoText.setAttribute('class', 'biggerFont');
  mangoText.innerText = 'MANGO';
  wordBox.appendChild(mangoText);
  // container B // word-box // PEACH
  let peachText = document.createElement('p');
  peachText.setAttribute('id', 'peach');
  peachText.setAttribute('class', 'biggerFont');
  peachText.innerText = 'PEACH';
  wordBox.appendChild(peachText);
  // container B // word-box // PLAY AGAIN

  let returntoMainButton = document.createElement('button');
  returntoMainButton.setAttribute('id', 'returntoMainButton');
  returntoMainButton.setAttribute('class', 'button-invisible');
  returntoMainButton.innerText = 'RETURN TO MAIN MENU';
  document.getElementById("rules-text").innerText ="Just in case you forgot, here are the rules:"

  returnBox.appendChild(returntoMainButton);

  // RETURN TO MAIN MENU
  document
    .getElementById('returntoMainButton')
    .addEventListener('click', () => {
      document.querySelector('#button-div').style.removeProperty('display');
      document.querySelector('#header-div').style.removeProperty('display');
      document.getElementById('returntoMainButton').remove();

      document.getElementById('header-container').remove();
      document.getElementById('main-container').remove();

      // CHANGE TEXT AT MAIN MENU DEPENDING ON COLOR
    });
  // GENERATE BOARD
  let alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  let alphabetArray = alphabet.split(' ');

  for (let i = 0; i < 300; i++) {
    let numberGen = Math.floor(Math.random() * 26);

    let singleBlock = document.createElement('div');
    singleBlock.classList.add('singleBlockLevelTwo');
    singleBlock.innerText = alphabetArray[numberGen];
    singleBlock.setAttribute('id', i);
    containerA.appendChild(singleBlock);
  }

  // TIMER

  let countdownStart = 121;
  let timerMinusOne = () => {
    countdownStart--;
    timer.innerText = countdownStart + 'sec';

    if (countdownStart === 0) {
      clearInterval(oneMinTimer);
      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '😢You lost!😢';
      document.querySelector('#startLevel2').style.backgroundColor = 'yellow';
      document.querySelector('#tricky-status').innerText = "try again"
    }

    if (document.querySelectorAll('.biggerFontandStrikethrough').length === 9) {
      clearInterval(oneMinTimer);

      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '🏆You won!🏆';
      document.querySelector('#startLevel2').style.backgroundColor =
        'lightgreen';
        document.querySelector('#tricky-status').innerText = "complete!"
    }
  };

  let oneMinTimer = setInterval(timerMinusOne, 1000);
};

// GENERATE LETTERS ON BOARD
let generateNamesTwo = () => {
  //APPLE SETUP
  let appleA = document.getElementById('105');
  appleA.className = 'singleBlockTestLevelTwo';
  appleA.innerText = 'A';
  let appleP1 = document.getElementById('120');
  appleP1.className = 'singleBlockTestLevelTwo';
  appleP1.innerText = 'P';
  let appleP2 = document.getElementById('135');
  appleP2.className = 'singleBlockTestLevelTwo';
  appleP2.innerText = 'P';
  let appleL = document.getElementById('150');
  appleL.className = 'singleBlockTestLevelTwo';
  appleL.innerText = 'L';
  let appleE = document.getElementById('165');
  appleE.className = 'singleBlockTestLevelTwo';
  appleE.innerText = 'E';
  // ORANGE SETUP
  let orangeO = document.getElementById('155');
  orangeO.className = 'singleBlockTestLevelTwo';
  orangeO.innerText = 'O';
  let orangeR = document.getElementById('171');
  orangeR.className = 'singleBlockTestLevelTwo';
  orangeR.innerText = 'R';
  let orangeA = document.getElementById('187');
  orangeA.className = 'singleBlockTestLevelTwo';
  orangeA.innerText = 'A';
  let orangeN = document.getElementById('203');
  orangeN.className = 'singleBlockTestLevelTwo';
  orangeN.innerText = 'N';
  let orangeG = document.getElementById('219');
  orangeG.className = 'singleBlockTestLevelTwo';
  orangeG.innerText = 'G';
  let orangeE = document.getElementById('235');
  orangeE.className = 'singleBlockTestLevelTwo';
  orangeE.innerText = 'E';
  //BANANA SETUP
  let bananaB = document.getElementById('240');
  bananaB.className = 'singleBlockTestLevelTwo';
  bananaB.innerText = 'B';
  let bananaA1 = document.getElementById('241');
  bananaA1.className = 'singleBlockTestLevelTwo';
  bananaA1.innerText = 'A';
  let bananaN1 = document.getElementById('242');
  bananaN1.className = 'singleBlockTestLevelTwo';
  bananaN1.innerText = 'N';
  let bananaA2 = document.getElementById('243');
  bananaA2.className = 'singleBlockTestLevelTwo';
  bananaA2.innerText = 'A';
  let bananaN2 = document.getElementById('244');
  bananaN2.className = 'singleBlockTestLevelTwo';
  bananaN2.innerText = 'N';
  let bananaA3 = document.getElementById('245');
  bananaA3.className = 'singleBlockTestLevelTwo';
  bananaA3.innerText = 'A';
  //GRAPE SETUP
  let grapeG = document.getElementById('22');
  grapeG.className = 'singleBlockTestLevelTwo';
  grapeG.innerText = 'G';
  let grapeR = document.getElementById('36');
  grapeR.className = 'singleBlockTestLevelTwo';
  grapeR.innerText = 'R';
  let grapeA = document.getElementById('50');
  grapeA.className = 'singleBlockTestLevelTwo';
  grapeA.innerText = 'A';
  let grapeP = document.getElementById('64');
  grapeP.className = 'singleBlockTestLevelTwo';
  grapeP.innerText = 'P';
  let grapeE = document.getElementById('78');
  grapeE.className = 'singleBlockTestLevelTwo';
  grapeE.innerText = 'E';
  //NECTARINE SETUP
  let nectarineN1 = document.getElementById('167');
  nectarineN1.className = 'singleBlockTestLevelTwo';
  nectarineN1.innerText = 'N';
  let nectarineE1 = document.getElementById('183');
  nectarineE1.className = 'singleBlockTestLevelTwo';
  nectarineE1.innerText = 'E';
  let nectarineC = document.getElementById('199');
  nectarineC.className = 'singleBlockTestLevelTwo';
  nectarineC.innerText = 'C';
  let nectarineT = document.getElementById('215');
  nectarineT.className = 'singleBlockTestLevelTwo';
  nectarineT.innerText = 'T';
  let nectarineA = document.getElementById('231');
  nectarineA.className = 'singleBlockTestLevelTwo';
  nectarineA.innerText = 'A';
  let nectarineR = document.getElementById('247');
  nectarineR.className = 'singleBlockTestLevelTwo';
  nectarineR.innerText = 'R';
  let nectarineI = document.getElementById('263');
  nectarineI.className = 'singleBlockTestLevelTwo';
  nectarineI.innerText = 'I';
  let nectarineN2 = document.getElementById('279');
  nectarineN2.className = 'singleBlockTestLevelTwo';
  nectarineN2.innerText = 'N';
  let nectarineE2 = document.getElementById('295');
  nectarineE2.className = 'singleBlockTestLevelTwo';
  nectarineE2.innerText = 'E';
  //TANGERINE SETUP
  let tangerineT = document.getElementById('100');
  tangerineT.className = 'singleBlockTestLevelTwo';
  tangerineT.innerText = 'T';
  let tangerineA = document.getElementById('115');
  tangerineA.className = 'singleBlockTestLevelTwo';
  tangerineA.innerText = 'A';
  let tangerineN1 = document.getElementById('130');
  tangerineN1.className = 'singleBlockTestLevelTwo';
  tangerineN1.innerText = 'N';
  let tangerineG = document.getElementById('145');
  tangerineG.className = 'singleBlockTestLevelTwo';
  tangerineG.innerText = 'G';
  let tangerineE1 = document.getElementById('160');
  tangerineE1.className = 'singleBlockTestLevelTwo';
  tangerineE1.innerText = 'E';
  let tangerineR = document.getElementById('175');
  tangerineR.className = 'singleBlockTestLevelTwo';
  tangerineR.innerText = 'R';
  let tangerineI = document.getElementById('190');
  tangerineI.className = 'singleBlockTestLevelTwo';
  tangerineI.innerText = 'I';
  let tangerineN2 = document.getElementById('205');
  tangerineN2.className = 'singleBlockTestLevelTwo';
  tangerineN2.innerText = 'N';
  let tangerineE2 = document.getElementById('220');
  tangerineE2.className = 'singleBlockTestLevelTwo';
  tangerineE2.innerText = 'E';
  //LIME SETUP
  let limeL = document.getElementById('25');
  limeL.className = 'singleBlockTestLevelTwo';
  limeL.innerText = 'L';
  let limeI = document.getElementById('41');
  limeI.className = 'singleBlockTestLevelTwo';
  limeI.innerText = 'I';
  let limeM = document.getElementById('57');
  limeM.className = 'singleBlockTestLevelTwo';
  limeM.innerText = 'M';
  let limeE = document.getElementById('73');
  limeE.className = 'singleBlockTestLevelTwo';
  limeE.innerText = 'E';
  //MANGO SETUP
  let mangoM = document.getElementById('76');
  mangoM.className = 'singleBlockTestLevelTwo';
  mangoM.innerText = 'M';
  let mangoA = document.getElementById('61');
  mangoA.className = 'singleBlockTestLevelTwo';
  mangoA.innerText = 'A';
  let mangoN = document.getElementById('46');
  mangoN.className = 'singleBlockTestLevelTwo';
  mangoN.innerText = 'N';
  let mangoG = document.getElementById('31');
  mangoG.className = 'singleBlockTestLevelTwo';
  mangoG.innerText = 'G';
  let mangoO = document.getElementById('16');
  mangoO.className = 'singleBlockTestLevelTwo';
  mangoO.innerText = 'O';
  //PEACH SETUP
  let peachP = document.getElementById('265');
  peachP.className = 'singleBlockTestLevelTwo';
  peachP.innerText = 'P';
  let peachE = document.getElementById('251');
  peachE.className = 'singleBlockTestLevelTwo';
  peachE.innerText = 'E';
  let peachA = document.getElementById('237');
  peachA.className = 'singleBlockTestLevelTwo';
  peachA.innerText = 'A';
  let peachC = document.getElementById('223');
  peachC.className = 'singleBlockTestLevelTwo';
  peachC.innerText = 'C';
  let peachH = document.getElementById('209');
  peachH.className = 'singleBlockTestLevelTwo';
  peachH.innerText = 'H';

  appleA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      appleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      appleA.style.backgroundColor = 'lightgreen';
      appleP1.style.backgroundColor = 'lightgreen';
      appleP2.style.backgroundColor = 'lightgreen';
      appleL.style.backgroundColor = 'lightgreen';
      appleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  appleP1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      appleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      appleA.style.backgroundColor = 'lightgreen';
      appleP1.style.backgroundColor = 'lightgreen';
      appleP2.style.backgroundColor = 'lightgreen';
      appleL.style.backgroundColor = 'lightgreen';
      appleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // P
  appleP2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      appleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      appleA.style.backgroundColor = 'lightgreen';
      appleP1.style.backgroundColor = 'lightgreen';
      appleP2.style.backgroundColor = 'lightgreen';
      appleL.style.backgroundColor = 'lightgreen';
      appleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  appleL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      appleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      appleA.style.backgroundColor = 'lightgreen';
      appleP1.style.backgroundColor = 'lightgreen';
      appleP2.style.backgroundColor = 'lightgreen';
      appleL.style.backgroundColor = 'lightgreen';
      appleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  appleE.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      appleA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleP2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      appleE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      appleA.style.backgroundColor = 'lightgreen';
      appleP1.style.backgroundColor = 'lightgreen';
      appleP2.style.backgroundColor = 'lightgreen';
      appleL.style.backgroundColor = 'lightgreen';
      appleE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // ORANGE
  // O
  orangeO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      orangeO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      orangeO.style.backgroundColor = 'lightgreen';
      orangeR.style.backgroundColor = 'lightgreen';
      orangeA.style.backgroundColor = 'lightgreen';
      orangeN.style.backgroundColor = 'lightgreen';
      orangeG.style.backgroundColor = 'lightgreen';
      orangeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  orangeR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      orangeO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      orangeO.style.backgroundColor = 'lightgreen';
      orangeR.style.backgroundColor = 'lightgreen';
      orangeA.style.backgroundColor = 'lightgreen';
      orangeN.style.backgroundColor = 'lightgreen';
      orangeG.style.backgroundColor = 'lightgreen';
      orangeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  orangeA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      orangeO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      orangeO.style.backgroundColor = 'lightgreen';
      orangeR.style.backgroundColor = 'lightgreen';
      orangeA.style.backgroundColor = 'lightgreen';
      orangeN.style.backgroundColor = 'lightgreen';
      orangeG.style.backgroundColor = 'lightgreen';
      orangeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  orangeN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      orangeO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      orangeO.style.backgroundColor = 'lightgreen';
      orangeR.style.backgroundColor = 'lightgreen';
      orangeA.style.backgroundColor = 'lightgreen';
      orangeN.style.backgroundColor = 'lightgreen';
      orangeG.style.backgroundColor = 'lightgreen';
      orangeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // G
  orangeG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      orangeO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      orangeO.style.backgroundColor = 'lightgreen';
      orangeR.style.backgroundColor = 'lightgreen';
      orangeA.style.backgroundColor = 'lightgreen';
      orangeN.style.backgroundColor = 'lightgreen';
      orangeG.style.backgroundColor = 'lightgreen';
      orangeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  orangeE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      orangeO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      orangeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      orangeO.style.backgroundColor = 'lightgreen';
      orangeR.style.backgroundColor = 'lightgreen';
      orangeA.style.backgroundColor = 'lightgreen';
      orangeN.style.backgroundColor = 'lightgreen';
      orangeG.style.backgroundColor = 'lightgreen';
      orangeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // BANANA
  // B
  bananaB.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      bananaB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      bananaB.style.backgroundColor = 'lightgreen';
      bananaA1.style.backgroundColor = 'lightgreen';
      bananaN1.style.backgroundColor = 'lightgreen';
      bananaA2.style.backgroundColor = 'lightgreen';
      bananaN2.style.backgroundColor = 'lightgreen';
      bananaA3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#banana');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  bananaA1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      bananaB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      bananaB.style.backgroundColor = 'lightgreen';
      bananaA1.style.backgroundColor = 'lightgreen';
      bananaN1.style.backgroundColor = 'lightgreen';
      bananaA2.style.backgroundColor = 'lightgreen';
      bananaN2.style.backgroundColor = 'lightgreen';
      bananaA3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#banana');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  bananaN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      bananaB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      bananaB.style.backgroundColor = 'lightgreen';
      bananaA1.style.backgroundColor = 'lightgreen';
      bananaN1.style.backgroundColor = 'lightgreen';
      bananaA2.style.backgroundColor = 'lightgreen';
      bananaN2.style.backgroundColor = 'lightgreen';
      bananaA3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#banana');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  bananaA2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      bananaB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      bananaB.style.backgroundColor = 'lightgreen';
      bananaA1.style.backgroundColor = 'lightgreen';
      bananaN1.style.backgroundColor = 'lightgreen';
      bananaA2.style.backgroundColor = 'lightgreen';
      bananaN2.style.backgroundColor = 'lightgreen';
      bananaA3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#banana');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  bananaN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      bananaB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      bananaB.style.backgroundColor = 'lightgreen';
      bananaA1.style.backgroundColor = 'lightgreen';
      bananaN1.style.backgroundColor = 'lightgreen';
      bananaA2.style.backgroundColor = 'lightgreen';
      bananaN2.style.backgroundColor = 'lightgreen';
      bananaA3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#banana');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  bananaA3.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      bananaB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      bananaA3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      bananaB.style.backgroundColor = 'lightgreen';
      bananaA1.style.backgroundColor = 'lightgreen';
      bananaN1.style.backgroundColor = 'lightgreen';
      bananaA2.style.backgroundColor = 'lightgreen';
      bananaN2.style.backgroundColor = 'lightgreen';
      bananaA3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#banana');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // GRAPE
  // G
  grapeG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      grapeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      grapeG.style.backgroundColor = 'lightgreen';
      grapeR.style.backgroundColor = 'lightgreen';
      grapeA.style.backgroundColor = 'lightgreen';
      grapeP.style.backgroundColor = 'lightgreen';
      grapeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#grape');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  grapeR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      grapeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      grapeG.style.backgroundColor = 'lightgreen';
      grapeR.style.backgroundColor = 'lightgreen';
      grapeA.style.backgroundColor = 'lightgreen';
      grapeP.style.backgroundColor = 'lightgreen';
      grapeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#grape');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  grapeA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      grapeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      grapeG.style.backgroundColor = 'lightgreen';
      grapeR.style.backgroundColor = 'lightgreen';
      grapeA.style.backgroundColor = 'lightgreen';
      grapeP.style.backgroundColor = 'lightgreen';
      grapeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#grape');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // P
  grapeP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      grapeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      grapeG.style.backgroundColor = 'lightgreen';
      grapeR.style.backgroundColor = 'lightgreen';
      grapeA.style.backgroundColor = 'lightgreen';
      grapeP.style.backgroundColor = 'lightgreen';
      grapeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#grape');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  grapeE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      grapeG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      grapeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      grapeG.style.backgroundColor = 'lightgreen';
      grapeR.style.backgroundColor = 'lightgreen';
      grapeA.style.backgroundColor = 'lightgreen';
      grapeP.style.backgroundColor = 'lightgreen';
      grapeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#grape');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // NECTARINE
  // N
  nectarineN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  nectarineE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // C
  nectarineC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // T
  nectarineT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  nectarineA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  nectarineR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  nectarineI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  nectarineN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  nectarineE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      nectarineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      nectarineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      nectarineN1.style.backgroundColor = 'lightgreen';
      nectarineE1.style.backgroundColor = 'lightgreen';
      nectarineC.style.backgroundColor = 'lightgreen';
      nectarineT.style.backgroundColor = 'lightgreen';
      nectarineA.style.backgroundColor = 'lightgreen';
      nectarineR.style.backgroundColor = 'lightgreen';
      nectarineI.style.backgroundColor = 'lightgreen';
      nectarineN2.style.backgroundColor = 'lightgreen';
      nectarineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#nectarine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // TANGERINE
  // T
  tangerineT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  tangerineA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  tangerineN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // G
  tangerineG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  tangerineE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  tangerineR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  tangerineI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  tangerineN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  tangerineE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      tangerineT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      tangerineE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      tangerineT.style.backgroundColor = 'lightgreen';
      tangerineA.style.backgroundColor = 'lightgreen';
      tangerineN1.style.backgroundColor = 'lightgreen';
      tangerineG.style.backgroundColor = 'lightgreen';
      tangerineE1.style.backgroundColor = 'lightgreen';
      tangerineR.style.backgroundColor = 'lightgreen';
      tangerineI.style.backgroundColor = 'lightgreen';
      tangerineN2.style.backgroundColor = 'lightgreen';
      tangerineE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#tangerine');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // LIME
  // L
  limeL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      limeL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      limeL.style.backgroundColor = 'lightgreen';
      limeI.style.backgroundColor = 'lightgreen';
      limeM.style.backgroundColor = 'lightgreen';
      limeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#lime');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  limeI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      limeL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      limeL.style.backgroundColor = 'lightgreen';
      limeI.style.backgroundColor = 'lightgreen';
      limeM.style.backgroundColor = 'lightgreen';
      limeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#lime');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // M
  limeM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      limeL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      limeL.style.backgroundColor = 'lightgreen';
      limeI.style.backgroundColor = 'lightgreen';
      limeM.style.backgroundColor = 'lightgreen';
      limeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#lime');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  limeE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      limeL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      limeE.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      limeL.style.backgroundColor = 'lightgreen';
      limeI.style.backgroundColor = 'lightgreen';
      limeM.style.backgroundColor = 'lightgreen';
      limeE.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#lime');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // MANGO
  // M
  mangoM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mangoM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoO.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mangoM.style.backgroundColor = 'lightgreen';
      mangoA.style.backgroundColor = 'lightgreen';
      mangoN.style.backgroundColor = 'lightgreen';
      mangoG.style.backgroundColor = 'lightgreen';
      mangoO.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#mango');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  mangoA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mangoM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoO.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mangoM.style.backgroundColor = 'lightgreen';
      mangoA.style.backgroundColor = 'lightgreen';
      mangoN.style.backgroundColor = 'lightgreen';
      mangoG.style.backgroundColor = 'lightgreen';
      mangoO.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#mango');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  mangoN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mangoM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoO.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mangoM.style.backgroundColor = 'lightgreen';
      mangoA.style.backgroundColor = 'lightgreen';
      mangoN.style.backgroundColor = 'lightgreen';
      mangoG.style.backgroundColor = 'lightgreen';
      mangoO.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#mango');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // G
  mangoG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mangoM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoO.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mangoM.style.backgroundColor = 'lightgreen';
      mangoA.style.backgroundColor = 'lightgreen';
      mangoN.style.backgroundColor = 'lightgreen';
      mangoG.style.backgroundColor = 'lightgreen';
      mangoO.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#mango');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  mangoO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mangoM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoG.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mangoO.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mangoM.style.backgroundColor = 'lightgreen';
      mangoA.style.backgroundColor = 'lightgreen';
      mangoN.style.backgroundColor = 'lightgreen';
      mangoG.style.backgroundColor = 'lightgreen';
      mangoO.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#mango');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // PEACH
  // P
  peachP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      peachP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachH.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      peachP.style.backgroundColor = 'lightgreen';
      peachE.style.backgroundColor = 'lightgreen';
      peachA.style.backgroundColor = 'lightgreen';
      peachC.style.backgroundColor = 'lightgreen';
      peachH.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#peach');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  peachE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      peachP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachH.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      peachP.style.backgroundColor = 'lightgreen';
      peachE.style.backgroundColor = 'lightgreen';
      peachA.style.backgroundColor = 'lightgreen';
      peachC.style.backgroundColor = 'lightgreen';
      peachH.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#peach');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  peachA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      peachP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachH.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      peachP.style.backgroundColor = 'lightgreen';
      peachE.style.backgroundColor = 'lightgreen';
      peachA.style.backgroundColor = 'lightgreen';
      peachC.style.backgroundColor = 'lightgreen';
      peachH.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#peach');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // C
  peachC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      peachP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachH.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      peachP.style.backgroundColor = 'lightgreen';
      peachE.style.backgroundColor = 'lightgreen';
      peachA.style.backgroundColor = 'lightgreen';
      peachC.style.backgroundColor = 'lightgreen';
      peachH.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#peach');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // H
  peachH.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      peachP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      peachH.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      peachP.style.backgroundColor = 'lightgreen';
      peachE.style.backgroundColor = 'lightgreen';
      peachA.style.backgroundColor = 'lightgreen';
      peachC.style.backgroundColor = 'lightgreen';
      peachH.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#peach');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
};
// LEVEL TRICKY   --------------------------------------->

// LEVEL TOUGH   --------------------------------------->
// THIS CREATES THE BOARD
const startGameLevelThree = () => {
  // everything in the header
  let headerContainer = document.createElement('div');
  let h1Header = document.createElement('h1');

  h1Header.setAttribute('id', 'header');
  h1Header.innerText = 'Crossword Countdown • Tough Level';
  headerContainer.setAttribute('id', 'header-container');

  document.body.appendChild(headerContainer);
  headerContainer.appendChild(h1Header);
  // main container
  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');
  document.body.appendChild(mainContainer);
  // container A
  let containerA = document.createElement('div');
  containerA.setAttribute('id', 'container-aLevelThree');
  mainContainer.appendChild(containerA);
  // container B
  let containerB = document.createElement('div');
  containerB.setAttribute('id', 'container-b');
  mainContainer.appendChild(containerB);
  // container B // timer-box
  let timerBox = document.createElement('div');
  timerBox.setAttribute('id', 'timer-box');
  containerB.appendChild(timerBox);
  // container B // timer-box // h1(time remaining)
  let timeRemaining = document.createElement('h1');
  timeRemaining.innerText = 'Time remaining:';
  timerBox.appendChild(timeRemaining);
  // container B // timer-box // h1(timer)
  let timer = document.createElement('h1');
  timer.setAttribute('id', 'timer');
  timer.innerText = 'GO!';
  timerBox.appendChild(timer);
  // container B // word-box
  let wordBox = document.createElement('div');
  wordBox.setAttribute('id', 'word-box');
  containerB.appendChild(wordBox);
  // container B // word-box // REVERSE
  let reverseText = document.createElement('p');
  reverseText.setAttribute('id', 'reverse');
  reverseText.setAttribute('class', 'biggerFont');
  reverseText.innerText = 'REVERSE';
  wordBox.appendChild(reverseText);
  // container B // word-box // ARRAY
  let arrayText = document.createElement('p');
  arrayText.setAttribute('id', 'array');
  arrayText.setAttribute('class', 'biggerFont');
  arrayText.innerText = 'ARRAY';
  wordBox.appendChild(arrayText);
  // container B // word-box // MAP
  let mapText = document.createElement('p');
  mapText.setAttribute('id', 'map');
  mapText.setAttribute('class', 'biggerFont');
  mapText.innerText = 'MAP';
  wordBox.appendChild(mapText);
  // container B // word-box // SORT
  let sortText = document.createElement('p');
  sortText.setAttribute('id', 'sort');
  sortText.setAttribute('class', 'biggerFont');
  sortText.innerText = 'SORT';
  wordBox.appendChild(sortText);
  // container B // word-box // REDUCE
  let reduceText = document.createElement('p');
  reduceText.setAttribute('id', 'reduce');
  reduceText.setAttribute('class', 'biggerFont');
  reduceText.innerText = 'REDUCE';
  wordBox.appendChild(reduceText);
  // container B // word-box // OPERATOR
  let operatorText = document.createElement('p');
  operatorText.setAttribute('id', 'operator');
  operatorText.setAttribute('class', 'biggerFont');
  operatorText.innerText = 'OPERATOR';
  wordBox.appendChild(operatorText);
  // container B // word-box // BOOLEAN
  let booleanText = document.createElement('p');
  booleanText.setAttribute('id', 'boolean');
  booleanText.setAttribute('class', 'biggerFont');
  booleanText.innerText = 'BOOLEAN';
  wordBox.appendChild(booleanText);
  // container B // word-box // REMAINDER
  let remainderText = document.createElement('p');
  remainderText.setAttribute('id', 'remainder');
  remainderText.setAttribute('class', 'biggerFont');
  remainderText.innerText = 'REMAINDER';
  wordBox.appendChild(remainderText);
  // container B // word-box // CONDITIONAL
  let conditionalText = document.createElement('p');
  conditionalText.setAttribute('id', 'conditional');
  conditionalText.setAttribute('class', 'biggerFont');
  conditionalText.innerText = 'CONDITIONAL';
  wordBox.appendChild(conditionalText);
  // container B // word-box // FUNCTION
  let functionText = document.createElement('p');
  functionText.setAttribute('id', 'function');
  functionText.setAttribute('class', 'biggerFont');
  functionText.innerText = 'FUNCTION';
  wordBox.appendChild(functionText);
  // container B // word-box // CLASS
  let classText = document.createElement('p');
  classText.setAttribute('id', 'class');
  classText.setAttribute('class', 'biggerFont');
  classText.innerText = 'CLASS';
  wordBox.appendChild(classText);
  // container B // word-box // ITERATOR
  let iteratorText = document.createElement('p');
  iteratorText.setAttribute('id', 'iterator');
  iteratorText.setAttribute('class', 'biggerFont');
  iteratorText.innerText = 'ITERATOR';
  wordBox.appendChild(iteratorText);
  // container B // word-box // PLAY AGAIN
  let returntoMainButton = document.createElement('button');
  returntoMainButton.setAttribute('id', 'returntoMainButton');
  returntoMainButton.setAttribute('class', 'button-invisible');
  returntoMainButton.innerText = 'RETURN TO MAIN MENU';
  document.getElementById("rules-text").innerText ="Just in case you forgot, here are the rules:"
  containerB.appendChild(returntoMainButton);

  // RETURN TO MAIN MENU
  document
    .getElementById('returntoMainButton')
    .addEventListener('click', () => {
      document.querySelector('#button-div').style.removeProperty('display');
      document.querySelector('#header-div').style.removeProperty('display');
      document.getElementById('returntoMainButton').remove();

      document.getElementById('header-container').remove();
      document.getElementById('main-container').remove();

      // CHANGE TEXT AT MAIN MENU DEPENDING ON COLOR
    });
  // GENERATE BOARD
  let alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  let alphabetArray = alphabet.split(' ');

  for (let i = 0; i < 460; i++) {
    let numberGen = Math.floor(Math.random() * 26);

    let singleBlock = document.createElement('div');
    singleBlock.classList.add('singleBlockLevelThree');
    singleBlock.innerText = alphabetArray[numberGen];
    singleBlock.setAttribute('id', i);
    containerA.appendChild(singleBlock);
  }

  // TIMER

  let countdownStart = 301;
  let timerMinusOne = () => {
    countdownStart--;
    timer.innerText = countdownStart + 'sec';

    if (countdownStart === 0) {
      let b = "BREEZY"
      clearInterval(oneMinTimer);
      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '😢You lost!😢';
      document.querySelector('#startLevel3').style.backgroundColor = 'yellow';
      document.querySelector('#tough-status').innerText = "try again";
    }

    if (
      document.querySelectorAll('.biggerFontandStrikethrough').length === 12
    ) {
      clearInterval(oneMinTimer);

      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '🏆You won!🏆';
      document.querySelector('#startLevel3').style.backgroundColor =
        'lightgreen';
      document.querySelector('#tough-status').innerText = "complete!"
    }
  };

  let oneMinTimer = setInterval(timerMinusOne, 1000);
};

// GENERATE LETTERS ON BOARD
let generateNamesThree = () => {
  //ARRAY SETUP
  let arrayA1 = document.getElementById('106');
  arrayA1.className = 'singleBlockTestLevelThree';
  arrayA1.innerText = 'A';
  let arrayR1 = document.getElementById('127');
  arrayR1.className = 'singleBlockTestLevelThree';
  arrayR1.innerText = 'R';
  let arrayR2 = document.getElementById('148');
  arrayR2.className = 'singleBlockTestLevelThree';
  arrayR2.innerText = 'R';
  let arrayA2 = document.getElementById('169');
  arrayA2.className = 'singleBlockTestLevelThree';
  arrayA2.innerText = 'A';
  let arrayY = document.getElementById('190');
  arrayY.className = 'singleBlockTestLevelThree';
  arrayY.innerText = 'Y';
  // REVERSE SETUP
  let reverseR1 = document.getElementById('320');
  reverseR1.className = 'singleBlockTestLevelThree';
  reverseR1.innerText = 'R';
  let reverseE1 = document.getElementById('340');
  reverseE1.className = 'singleBlockTestLevelThree';
  reverseE1.innerText = 'E';
  let reverseV = document.getElementById('360');
  reverseV.className = 'singleBlockTestLevelThree';
  reverseV.innerText = 'V';
  let reverseE2 = document.getElementById('380');
  reverseE2.className = 'singleBlockTestLevelThree';
  reverseE2.innerText = 'E';
  let reverseR2 = document.getElementById('400');
  reverseR2.className = 'singleBlockTestLevelThree';
  reverseR2.innerText = 'R';
  let reverseS = document.getElementById('420');
  reverseS.className = 'singleBlockTestLevelThree';
  reverseS.innerText = 'S';
  let reverseE3 = document.getElementById('440');
  reverseE3.className = 'singleBlockTestLevelThree';
  reverseE3.innerText = 'E';
  // MAP SETUP
  let mapM = document.getElementById('6');
  mapM.className = 'singleBlockTestLevelThree';
  mapM.innerText = 'M';
  let mapA = document.getElementById('27');
  mapA.className = 'singleBlockTestLevelThree';
  mapA.innerText = 'A';
  let mapP = document.getElementById('48');
  mapP.className = 'singleBlockTestLevelThree';
  mapP.innerText = 'P';

  // SORT SETUP
  let sortS = document.getElementById('316');
  sortS.className = 'singleBlockTestLevelThree';
  sortS.innerText = 'S';
  let sortO = document.getElementById('335');
  sortO.className = 'singleBlockTestLevelThree';
  sortO.innerText = 'O';
  let sortR = document.getElementById('354');
  sortR.className = 'singleBlockTestLevelThree';
  sortR.innerText = 'R';
  let sortT = document.getElementById('373');
  sortT.className = 'singleBlockTestLevelThree';
  sortT.innerText = 'T';

  // REDUCE SETUP
  let reduceR = document.getElementById('445');
  reduceR.className = 'singleBlockTestLevelThree';
  reduceR.innerText = 'R';
  let reduceE1 = document.getElementById('446');
  reduceE1.className = 'singleBlockTestLevelThree';
  reduceE1.innerText = 'E';
  let reduceD = document.getElementById('447');
  reduceD.className = 'singleBlockTestLevelThree';
  reduceD.innerText = 'D';
  let reduceU = document.getElementById('448');
  reduceU.className = 'singleBlockTestLevelThree';
  reduceU.innerText = 'U';
  let reduceC = document.getElementById('449');
  reduceC.className = 'singleBlockTestLevelThree';
  reduceC.innerText = 'C';
  let reduceE2 = document.getElementById('450');
  reduceE2.className = 'singleBlockTestLevelThree';
  reduceE2.innerText = 'E';
  // OPERATOR SETUP
  let operatorO1 = document.getElementById('452');
  operatorO1.className = 'singleBlockTestLevelThree';
  operatorO1.innerText = 'O';
  let operatorP = document.getElementById('433');
  operatorP.className = 'singleBlockTestLevelThree';
  operatorP.innerText = 'P';
  let operatorE = document.getElementById('414');
  operatorE.className = 'singleBlockTestLevelThree';
  operatorE.innerText = 'E';
  let operatorR1 = document.getElementById('395');
  operatorR1.className = 'singleBlockTestLevelThree';
  operatorR1.innerText = 'R';
  let operatorA = document.getElementById('376');
  operatorA.className = 'singleBlockTestLevelThree';
  operatorA.innerText = 'A';
  let operatorT = document.getElementById('357');
  operatorT.className = 'singleBlockTestLevelThree';
  operatorT.innerText = 'T';
  let operatorO2 = document.getElementById('338');
  operatorO2.className = 'singleBlockTestLevelThree';
  operatorO2.innerText = 'O';
  let operatorR2 = document.getElementById('319');
  operatorR2.className = 'singleBlockTestLevelThree';
  operatorR2.innerText = 'R';
  // BOOLEAN SETUP
  let booleanB = document.getElementById('403');
  booleanB.className = 'singleBlockTestLevelThree';
  booleanB.innerText = 'B';
  let booleanO1 = document.getElementById('384');
  booleanO1.className = 'singleBlockTestLevelThree';
  booleanO1.innerText = 'O';
  let booleanO2 = document.getElementById('365');
  booleanO2.className = 'singleBlockTestLevelThree';
  booleanO2.innerText = 'O';
  let booleanL = document.getElementById('346');
  booleanL.className = 'singleBlockTestLevelThree';
  booleanL.innerText = 'L';
  let booleanE = document.getElementById('327');
  booleanE.className = 'singleBlockTestLevelThree';
  booleanE.innerText = 'E';
  let booleanA = document.getElementById('308');
  booleanA.className = 'singleBlockTestLevelThree';
  booleanA.innerText = 'A';
  let booleanN = document.getElementById('289');
  booleanN.className = 'singleBlockTestLevelThree';
  booleanN.innerText = 'N';
  // REMAINDER SETUP
  let remainderR1 = document.getElementById('39');
  remainderR1.className = 'singleBlockTestLevelThree';
  remainderR1.innerText = 'R';
  let remainderE1 = document.getElementById('58');
  remainderE1.className = 'singleBlockTestLevelThree';
  remainderE1.innerText = 'E';
  let remainderM = document.getElementById('77');
  remainderM.className = 'singleBlockTestLevelThree';
  remainderM.innerText = 'M';
  let remainderA = document.getElementById('96');
  remainderA.className = 'singleBlockTestLevelThree';
  remainderA.innerText = 'A';
  let remainderI = document.getElementById('115');
  remainderI.className = 'singleBlockTestLevelThree';
  remainderI.innerText = 'I';
  let remainderN = document.getElementById('134');
  remainderN.className = 'singleBlockTestLevelThree';
  remainderN.innerText = 'N';
  let remainderD = document.getElementById('153');
  remainderD.className = 'singleBlockTestLevelThree';
  remainderD.innerText = 'D';
  let remainderE2 = document.getElementById('172');
  remainderE2.className = 'singleBlockTestLevelThree';
  remainderE2.innerText = 'E';
  let remainderR2 = document.getElementById('191');
  remainderR2.className = 'singleBlockTestLevelThree';
  remainderR2.innerText = 'R ';
  // CONDITIONAL SETUP
  let conditionalC = document.getElementById('102');
  conditionalC.className = 'singleBlockTestLevelThree';
  conditionalC.innerText = 'C';
  let conditionalO1 = document.getElementById('122');
  conditionalO1.className = 'singleBlockTestLevelThree';
  conditionalO1.innerText = 'O';
  let conditionalN1 = document.getElementById('142');
  conditionalN1.className = 'singleBlockTestLevelThree';
  conditionalN1.innerText = 'N';
  let conditionalD = document.getElementById('162');
  conditionalD.className = 'singleBlockTestLevelThree';
  conditionalD.innerText = 'D';
  let conditionalI1 = document.getElementById('182');
  conditionalI1.className = 'singleBlockTestLevelThree';
  conditionalI1.innerText = 'I';
  let conditionalT = document.getElementById('202');
  conditionalT.className = 'singleBlockTestLevelThree';
  conditionalT.innerText = 'T';
  let conditionalI2 = document.getElementById('222');
  conditionalI2.className = 'singleBlockTestLevelThree';
  conditionalI2.innerText = 'I';
  let conditionalO2 = document.getElementById('242');
  conditionalO2.className = 'singleBlockTestLevelThree';
  conditionalO2.innerText = 'O';
  let conditionalN2 = document.getElementById('262');
  conditionalN2.className = 'singleBlockTestLevelThree';
  conditionalN2.innerText = 'N';
  let conditionalA = document.getElementById('282');
  conditionalA.className = 'singleBlockTestLevelThree';
  conditionalA.innerText = 'A';
  let conditionalL = document.getElementById('302');
  conditionalL.className = 'singleBlockTestLevelThree';
  conditionalL.innerText = 'L ';
  // FUNCTION SETUP
  let functionF = document.getElementById('139');
  functionF.className = 'singleBlockTestLevelThree';
  functionF.innerText = 'F';
  let functionU = document.getElementById('159');
  functionU.className = 'singleBlockTestLevelThree';
  functionU.innerText = 'U';
  let functionN1 = document.getElementById('179');
  functionN1.className = 'singleBlockTestLevelThree';
  functionN1.innerText = 'N';
  let functionC = document.getElementById('199');
  functionC.className = 'singleBlockTestLevelThree';
  functionC.innerText = 'C';
  let functionT = document.getElementById('219');
  functionT.className = 'singleBlockTestLevelThree';
  functionT.innerText = 'T';
  let functionI = document.getElementById('239');
  functionI.className = 'singleBlockTestLevelThree';
  functionI.innerText = 'I';
  let functionO = document.getElementById('259');
  functionO.className = 'singleBlockTestLevelThree';
  functionO.innerText = 'O';
  let functionN2 = document.getElementById('279');
  functionN2.className = 'singleBlockTestLevelThree';
  functionN2.innerText = 'N';
  // CLASS SETUP
  let classC = document.getElementById('245');
  classC.className = 'singleBlockTestLevelThree';
  classC.innerText = 'C';
  let classL = document.getElementById('246');
  classL.className = 'singleBlockTestLevelThree';
  classL.innerText = 'L';
  let classA = document.getElementById('247');
  classA.className = 'singleBlockTestLevelThree';
  classA.innerText = 'A';
  let classS1 = document.getElementById('248');
  classS1.className = 'singleBlockTestLevelThree';
  classS1.innerText = 'S';
  let classS2 = document.getElementById('249');
  classS2.className = 'singleBlockTestLevelThree';
  classS2.innerText = 'S';
  // ITERATOR SETUP
  let iteratorI = document.getElementById('37');
  iteratorI.className = 'singleBlockTestLevelThree';
  iteratorI.innerText = 'I';
  let iteratorT1 = document.getElementById('36');
  iteratorT1.className = 'singleBlockTestLevelThree';
  iteratorT1.innerText = 'T';
  let iteratorE = document.getElementById('35');
  iteratorE.className = 'singleBlockTestLevelThree';
  iteratorE.innerText = 'E';
  let iteratorR1 = document.getElementById('34');
  iteratorR1.className = 'singleBlockTestLevelThree';
  iteratorR1.innerText = 'R';
  let iteratorA = document.getElementById('33');
  iteratorA.className = 'singleBlockTestLevelThree';
  iteratorA.innerText = 'A';
  let iteratorT2 = document.getElementById('32');
  iteratorT2.className = 'singleBlockTestLevelThree';
  iteratorT2.innerText = 'T';
  let iteratorO = document.getElementById('31');
  iteratorO.className = 'singleBlockTestLevelThree';
  iteratorO.innerText = 'O';
  let iteratorR2 = document.getElementById('30');
  iteratorR2.className = 'singleBlockTestLevelThree';
  iteratorR2.innerText = 'R';

  // ARRAY
  // A
  arrayA1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      arrayA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayY.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      arrayA1.style.backgroundColor = 'lightgreen';
      arrayR1.style.backgroundColor = 'lightgreen';
      arrayR2.style.backgroundColor = 'lightgreen';
      arrayA2.style.backgroundColor = 'lightgreen';
      arrayY.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  //R
  arrayR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      arrayA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayY.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      arrayA1.style.backgroundColor = 'lightgreen';
      arrayR1.style.backgroundColor = 'lightgreen';
      arrayR2.style.backgroundColor = 'lightgreen';
      arrayA2.style.backgroundColor = 'lightgreen';
      arrayY.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  arrayR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      arrayA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayY.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      arrayA1.style.backgroundColor = 'lightgreen';
      arrayR1.style.backgroundColor = 'lightgreen';
      arrayR2.style.backgroundColor = 'lightgreen';
      arrayA2.style.backgroundColor = 'lightgreen';
      arrayY.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  arrayA2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      arrayA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayY.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      arrayA1.style.backgroundColor = 'lightgreen';
      arrayR1.style.backgroundColor = 'lightgreen';
      arrayR2.style.backgroundColor = 'lightgreen';
      arrayA2.style.backgroundColor = 'lightgreen';
      arrayY.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // Y
  arrayY.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      arrayA1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayA2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      arrayY.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      arrayA1.style.backgroundColor = 'lightgreen';
      arrayR1.style.backgroundColor = 'lightgreen';
      arrayR2.style.backgroundColor = 'lightgreen';
      arrayA2.style.backgroundColor = 'lightgreen';
      arrayY.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // REVERSE
  // R
  reverseR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reverseR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseV.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reverseR1.style.backgroundColor = 'lightgreen';
      reverseE1.style.backgroundColor = 'lightgreen';
      reverseV.style.backgroundColor = 'lightgreen';
      reverseE2.style.backgroundColor = 'lightgreen';
      reverseR2.style.backgroundColor = 'lightgreen';
      reverseS.style.backgroundColor = 'lightgreen';
      reverseE3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reverseE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reverseR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseV.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reverseR1.style.backgroundColor = 'lightgreen';
      reverseE1.style.backgroundColor = 'lightgreen';
      reverseV.style.backgroundColor = 'lightgreen';
      reverseE2.style.backgroundColor = 'lightgreen';
      reverseR2.style.backgroundColor = 'lightgreen';
      reverseS.style.backgroundColor = 'lightgreen';
      reverseE3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // V
  reverseV.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reverseR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseV.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reverseR1.style.backgroundColor = 'lightgreen';
      reverseE1.style.backgroundColor = 'lightgreen';
      reverseV.style.backgroundColor = 'lightgreen';
      reverseE2.style.backgroundColor = 'lightgreen';
      reverseR2.style.backgroundColor = 'lightgreen';
      reverseS.style.backgroundColor = 'lightgreen';
      reverseE3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reverseE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reverseR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseV.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reverseR1.style.backgroundColor = 'lightgreen';
      reverseE1.style.backgroundColor = 'lightgreen';
      reverseV.style.backgroundColor = 'lightgreen';
      reverseE2.style.backgroundColor = 'lightgreen';
      reverseR2.style.backgroundColor = 'lightgreen';
      reverseS.style.backgroundColor = 'lightgreen';
      reverseE3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  reverseR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reverseR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseV.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reverseR1.style.backgroundColor = 'lightgreen';
      reverseE1.style.backgroundColor = 'lightgreen';
      reverseV.style.backgroundColor = 'lightgreen';
      reverseE2.style.backgroundColor = 'lightgreen';
      reverseR2.style.backgroundColor = 'lightgreen';
      reverseS.style.backgroundColor = 'lightgreen';
      reverseE3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // S
  reverseS.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reverseR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseV.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reverseR1.style.backgroundColor = 'lightgreen';
      reverseE1.style.backgroundColor = 'lightgreen';
      reverseV.style.backgroundColor = 'lightgreen';
      reverseE2.style.backgroundColor = 'lightgreen';
      reverseR2.style.backgroundColor = 'lightgreen';
      reverseS.style.backgroundColor = 'lightgreen';
      reverseE3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reverseE3.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reverseR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseV.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseR2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reverseE3.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reverseR1.style.backgroundColor = 'lightgreen';
      reverseE1.style.backgroundColor = 'lightgreen';
      reverseV.style.backgroundColor = 'lightgreen';
      reverseE2.style.backgroundColor = 'lightgreen';
      reverseR2.style.backgroundColor = 'lightgreen';
      reverseS.style.backgroundColor = 'lightgreen';
      reverseE3.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // MAP
  // M
  mapM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mapM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mapA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mapP.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mapM.style.backgroundColor = 'lightgreen';
      mapA.style.backgroundColor = 'lightgreen';
      mapP.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#map');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  mapA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mapM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mapA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mapP.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mapM.style.backgroundColor = 'lightgreen';
      mapA.style.backgroundColor = 'lightgreen';
      mapP.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#map');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // P
  mapP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      mapM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mapA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      mapP.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      mapM.style.backgroundColor = 'lightgreen';
      mapA.style.backgroundColor = 'lightgreen';
      mapP.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#map');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // SORT
  // S
  sortS.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      sortS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortT.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sortS.style.backgroundColor = 'lightgreen';
      sortO.style.backgroundColor = 'lightgreen';
      sortR.style.backgroundColor = 'lightgreen';
      sortT.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sort');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  sortO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      sortS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortT.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sortS.style.backgroundColor = 'lightgreen';
      sortO.style.backgroundColor = 'lightgreen';
      sortR.style.backgroundColor = 'lightgreen';
      sortT.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sort');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  sortR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      sortS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortT.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sortS.style.backgroundColor = 'lightgreen';
      sortO.style.backgroundColor = 'lightgreen';
      sortR.style.backgroundColor = 'lightgreen';
      sortT.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sort');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // T
  sortT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      sortS.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      sortT.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      sortS.style.backgroundColor = 'lightgreen';
      sortO.style.backgroundColor = 'lightgreen';
      sortR.style.backgroundColor = 'lightgreen';
      sortT.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#sort');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });

  // REDUCE
  // R
  reduceR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reduceR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reduceR.style.backgroundColor = 'lightgreen';
      reduceE1.style.backgroundColor = 'lightgreen';
      reduceD.style.backgroundColor = 'lightgreen';
      reduceU.style.backgroundColor = 'lightgreen';
      reduceC.style.backgroundColor = 'lightgreen';
      reduceE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reduce');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reduceE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reduceR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reduceR.style.backgroundColor = 'lightgreen';
      reduceE1.style.backgroundColor = 'lightgreen';
      reduceD.style.backgroundColor = 'lightgreen';
      reduceU.style.backgroundColor = 'lightgreen';
      reduceC.style.backgroundColor = 'lightgreen';
      reduceE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reduce');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // D
  reduceD.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reduceR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reduceR.style.backgroundColor = 'lightgreen';
      reduceE1.style.backgroundColor = 'lightgreen';
      reduceD.style.backgroundColor = 'lightgreen';
      reduceU.style.backgroundColor = 'lightgreen';
      reduceC.style.backgroundColor = 'lightgreen';
      reduceE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reduce');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // U
  reduceU.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reduceR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reduceR.style.backgroundColor = 'lightgreen';
      reduceE1.style.backgroundColor = 'lightgreen';
      reduceD.style.backgroundColor = 'lightgreen';
      reduceU.style.backgroundColor = 'lightgreen';
      reduceC.style.backgroundColor = 'lightgreen';
      reduceE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reduce');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // C
  reduceC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reduceR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reduceR.style.backgroundColor = 'lightgreen';
      reduceE1.style.backgroundColor = 'lightgreen';
      reduceD.style.backgroundColor = 'lightgreen';
      reduceU.style.backgroundColor = 'lightgreen';
      reduceC.style.backgroundColor = 'lightgreen';
      reduceE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reduce');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reduceE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      reduceR.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      reduceE2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      reduceR.style.backgroundColor = 'lightgreen';
      reduceE1.style.backgroundColor = 'lightgreen';
      reduceD.style.backgroundColor = 'lightgreen';
      reduceU.style.backgroundColor = 'lightgreen';
      reduceC.style.backgroundColor = 'lightgreen';
      reduceE2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#reduce');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // OPERATOR
  // O
  operatorO1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // P
  operatorP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  operatorE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  operatorR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  operatorA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // T
  operatorT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  operatorO2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  operatorR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      operatorO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorP.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      operatorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      operatorO1.style.backgroundColor = 'lightgreen';
      operatorP.style.backgroundColor = 'lightgreen';
      operatorE.style.backgroundColor = 'lightgreen';
      operatorR1.style.backgroundColor = 'lightgreen';
      operatorA.style.backgroundColor = 'lightgreen';
      operatorT.style.backgroundColor = 'lightgreen';
      operatorO2.style.backgroundColor = 'lightgreen';
      operatorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#operator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // BOOLEAN
  // B
  booleanB.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      booleanB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanN.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      booleanB.style.backgroundColor = 'lightgreen';
      booleanO1.style.backgroundColor = 'lightgreen';
      booleanO2.style.backgroundColor = 'lightgreen';
      booleanL.style.backgroundColor = 'lightgreen';
      booleanE.style.backgroundColor = 'lightgreen';
      booleanA.style.backgroundColor = 'lightgreen';
      booleanN.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#boolean');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  booleanO1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      booleanB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanN.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      booleanB.style.backgroundColor = 'lightgreen';
      booleanO1.style.backgroundColor = 'lightgreen';
      booleanO2.style.backgroundColor = 'lightgreen';
      booleanL.style.backgroundColor = 'lightgreen';
      booleanE.style.backgroundColor = 'lightgreen';
      booleanA.style.backgroundColor = 'lightgreen';
      booleanN.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#boolean');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  booleanO2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      booleanB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanN.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      booleanB.style.backgroundColor = 'lightgreen';
      booleanO1.style.backgroundColor = 'lightgreen';
      booleanO2.style.backgroundColor = 'lightgreen';
      booleanL.style.backgroundColor = 'lightgreen';
      booleanE.style.backgroundColor = 'lightgreen';
      booleanA.style.backgroundColor = 'lightgreen';
      booleanN.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#boolean');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  booleanL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      booleanB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanN.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      booleanB.style.backgroundColor = 'lightgreen';
      booleanO1.style.backgroundColor = 'lightgreen';
      booleanO2.style.backgroundColor = 'lightgreen';
      booleanL.style.backgroundColor = 'lightgreen';
      booleanE.style.backgroundColor = 'lightgreen';
      booleanA.style.backgroundColor = 'lightgreen';
      booleanN.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#boolean');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  booleanE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      booleanB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanN.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      booleanB.style.backgroundColor = 'lightgreen';
      booleanO1.style.backgroundColor = 'lightgreen';
      booleanO2.style.backgroundColor = 'lightgreen';
      booleanL.style.backgroundColor = 'lightgreen';
      booleanE.style.backgroundColor = 'lightgreen';
      booleanA.style.backgroundColor = 'lightgreen';
      booleanN.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#boolean');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  booleanA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      booleanB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanN.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      booleanB.style.backgroundColor = 'lightgreen';
      booleanO1.style.backgroundColor = 'lightgreen';
      booleanO2.style.backgroundColor = 'lightgreen';
      booleanL.style.backgroundColor = 'lightgreen';
      booleanE.style.backgroundColor = 'lightgreen';
      booleanA.style.backgroundColor = 'lightgreen';
      booleanN.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#boolean');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  booleanN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      booleanB.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      booleanN.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      booleanB.style.backgroundColor = 'lightgreen';
      booleanO1.style.backgroundColor = 'lightgreen';
      booleanO2.style.backgroundColor = 'lightgreen';
      booleanL.style.backgroundColor = 'lightgreen';
      booleanE.style.backgroundColor = 'lightgreen';
      booleanA.style.backgroundColor = 'lightgreen';
      booleanN.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#boolean');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // REMAINDER
  // R
  remainderR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  remainderE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // M
  remainderM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  remainderA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  remainderI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  remainderN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // D
  remainderD.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  remainderE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  remainderR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      remainderR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderM.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderN.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderE2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      remainderR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      remainderR1.style.backgroundColor = 'lightgreen';
      remainderE1.style.backgroundColor = 'lightgreen';
      remainderM.style.backgroundColor = 'lightgreen';
      remainderA.style.backgroundColor = 'lightgreen';
      remainderI.style.backgroundColor = 'lightgreen';
      remainderN.style.backgroundColor = 'lightgreen';
      remainderD.style.backgroundColor = 'lightgreen';
      remainderE2.style.backgroundColor = 'lightgreen';
      remainderR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#remainder');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });

  // CONDITIONAL
  // C
  conditionalC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  conditionalO1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  conditionalN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // D
  conditionalD.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  conditionalI1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // T
  conditionalT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  conditionalI2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  conditionalO2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  conditionalN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor ='lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  conditionalA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  conditionalL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      conditionalC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalD.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalI2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalO2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalN2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      conditionalL.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      conditionalC.style.backgroundColor = 'lightgreen';
      conditionalO1.style.backgroundColor = 'lightgreen';
      conditionalN1.style.backgroundColor = 'lightgreen';
      conditionalD.style.backgroundColor = 'lightgreen';
      conditionalI1.style.backgroundColor = 'lightgreen';
      conditionalT.style.backgroundColor = 'lightgreen';
      conditionalI2.style.backgroundColor = 'lightgreen';
      conditionalO2.style.backgroundColor = 'lightgreen';
      conditionalN2.style.backgroundColor = 'lightgreen';
      conditionalA.style.backgroundColor = 'lightgreen';
      conditionalL.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // FUNCTION
  // F
  functionF.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // U
  functionU.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  functionN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // C
  functionC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // T
  functionT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  functionI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  functionO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  functionN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      functionF.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionU.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionT.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      functionN2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      functionF.style.backgroundColor = 'lightgreen';
      functionU.style.backgroundColor = 'lightgreen';
      functionN1.style.backgroundColor = 'lightgreen';
      functionC.style.backgroundColor = 'lightgreen';
      functionT.style.backgroundColor = 'lightgreen';
      functionI.style.backgroundColor = 'lightgreen';
      functionO.style.backgroundColor = 'lightgreen';
      functionN2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#function');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // CLASS
  // C
  classC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      classC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      classC.style.backgroundColor = 'lightgreen';
      classL.style.backgroundColor = 'lightgreen';
      classA.style.backgroundColor = 'lightgreen';
      classS1.style.backgroundColor = 'lightgreen';
      classS2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#class');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  classL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      classC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      classC.style.backgroundColor = 'lightgreen';
      classL.style.backgroundColor = 'lightgreen';
      classA.style.backgroundColor = 'lightgreen';
      classS1.style.backgroundColor = 'lightgreen';
      classS2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#class');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  classA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      classC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      classC.style.backgroundColor = 'lightgreen';
      classL.style.backgroundColor = 'lightgreen';
      classA.style.backgroundColor = 'lightgreen';
      classS1.style.backgroundColor = 'lightgreen';
      classS2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#class');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // S
  classS1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      classC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      classC.style.backgroundColor = 'lightgreen';
      classL.style.backgroundColor = 'lightgreen';
      classA.style.backgroundColor = 'lightgreen';
      classS1.style.backgroundColor = 'lightgreen';
      classS2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#class');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // S
  classS2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      classC.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classL.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      classS2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      classC.style.backgroundColor = 'lightgreen';
      classL.style.backgroundColor = 'lightgreen';
      classA.style.backgroundColor = 'lightgreen';
      classS1.style.backgroundColor = 'lightgreen';
      classS2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#class');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  //ITERATOR
  // I
  iteratorI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // T
  iteratorT1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  iteratorE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor === 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  iteratorR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  iteratorA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // T
  iteratorT2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  iteratorO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  iteratorR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(255, 214, 186)';
    if (
      iteratorI.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorE.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR1.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorA.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorT2.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorO.style.backgroundColor === 'rgb(255, 214, 186)' &&
      iteratorR2.style.backgroundColor === 'rgb(255, 214, 186)'
    ) {
      iteratorI.style.backgroundColor = 'lightgreen';
      iteratorT1.style.backgroundColor = 'lightgreen';
      iteratorE.style.backgroundColor = 'lightgreen';
      iteratorR1.style.backgroundColor = 'lightgreen';
      iteratorA.style.backgroundColor = 'lightgreen';
      iteratorT2.style.backgroundColor = 'lightgreen';
      iteratorO.style.backgroundColor = 'lightgreen';
      iteratorR2.style.backgroundColor = 'lightgreen';
      let strike = document.querySelector('#iterator');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
};
// LEVEL TOUGH   --------------------------------------->

// test test test test test
// let elem = document.createElement('button');
// elem.setAttribute('id', 'test');
// elem.innerText = 'testing';
// document.body.appendChild(elem);

// 54 is the total num of letters

// INITIATE LEVEL TWO PROMPT
let startLevel3 = document.querySelector('#startLevel3');
startLevel3.addEventListener('click', function () {
  document.querySelector('#button-div').style.display = 'none';
  document.querySelector('#header-div').style.display = 'none';
  startGameLevelThree();
  generateNamesThree();
});
let startLevel2 = document.querySelector('#startLevel2');
startLevel2.addEventListener('click', function () {
  document.querySelector('#button-div').style.display = 'none';
  document.querySelector('#header-div').style.display = 'none';
  startGameLevelTwo();
  generateNamesTwo();
});
let startLevel1 = document.querySelector('#startLevel1');
startLevel1.addEventListener('click', function () {
  document.querySelector('#button-div').style.display = 'none';
  document.querySelector('#header-div').style.display = 'none';
  startGameLevelOne();
  generateNamesOne();
});
