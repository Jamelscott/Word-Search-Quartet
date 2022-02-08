

// LEVEL BREEZY   --------------------------------------->
// THIS CREATES THE BOARD
const startGameLevelOne = () => {
  // everything in the header
  let headerContainer = document.createElement('div');
  let h1Header = document.createElement('h1');

  h1Header.setAttribute('id', 'header');
  h1Header.innerText = 'Cross-word Countdown • Level 1';
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
  wordBox.appendChild(returntoMainButton);
 
  // RETURN TO MAIN MENU
  document.getElementById('returntoMainButton').addEventListener('click', () => {
    document.querySelector('#button-div').style.removeProperty("display");
    document.querySelector('#header-div').style.removeProperty("display");
    document.getElementById('returntoMainButton').remove();

    document.getElementById('header-container').remove();
    document.getElementById('main-container').remove();

    // CHANGE TEXT AT MAIN MENU DEPENDING ON COLOR
  });
  // GENERATE BOARD
  let alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  let alphabetArray = alphabet.split(' ');

  for (let i = 0; i < 64; i++) {
    let numberGen = Math.floor(Math.random() * 27);

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
        'limegreen';
    }
  };

  let oneMinTimer = setInterval(timerMinusOne, 10);
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
    event.target.style.backgroundColor = 'red';
    if (
      sailS.style.backgroundColor === 'red' &&
      sailA.style.backgroundColor === 'red' &&
      sailI.style.backgroundColor === 'red' &&
      sailL.style.backgroundColor === 'red'
    ) {
      sailS.style.backgroundColor = 'green';
      sailA.style.backgroundColor = 'green';
      sailI.style.backgroundColor = 'green';
      sailL.style.backgroundColor = 'green';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  //A
  sailA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      sailS.style.backgroundColor === 'red' &&
      sailA.style.backgroundColor === 'red' &&
      sailI.style.backgroundColor === 'red' &&
      sailL.style.backgroundColor === 'red'
    ) {
      sailS.style.backgroundColor = 'green';
      sailA.style.backgroundColor = 'green';
      sailI.style.backgroundColor = 'green';
      sailL.style.backgroundColor = 'green';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // I
  sailI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      sailS.style.backgroundColor === 'red' &&
      sailA.style.backgroundColor === 'red' &&
      sailI.style.backgroundColor === 'red' &&
      sailL.style.backgroundColor === 'red'
    ) {
      sailS.style.backgroundColor = 'green';
      sailA.style.backgroundColor = 'green';
      sailI.style.backgroundColor = 'green';
      sailL.style.backgroundColor = 'green';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  sailL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      sailS.style.backgroundColor === 'red' &&
      sailA.style.backgroundColor === 'red' &&
      sailI.style.backgroundColor === 'red' &&
      sailL.style.backgroundColor === 'red'
    ) {
      sailS.style.backgroundColor = 'green';
      sailA.style.backgroundColor = 'green';
      sailI.style.backgroundColor = 'green';
      sailL.style.backgroundColor = 'green';
      let strike = document.querySelector('#sail');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
// ANCHOR
  // A
  anchorA.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      anchorA.style.backgroundColor === 'red' &&
      anchorN.style.backgroundColor === 'red' &&
      anchorC.style.backgroundColor === 'red' &&
      anchorH.style.backgroundColor === 'red' &&
      anchorO.style.backgroundColor === 'red' &&
      anchorR.style.backgroundColor === 'red'
    ) {
      anchorA.style.backgroundColor = 'green';
      anchorN.style.backgroundColor = 'green';
      anchorC.style.backgroundColor = 'green';
      anchorH.style.backgroundColor = 'green';
      anchorO.style.backgroundColor = 'green';
      anchorR.style.backgroundColor = 'green';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  anchorN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      anchorA.style.backgroundColor === 'red' &&
      anchorN.style.backgroundColor === 'red' &&
      anchorC.style.backgroundColor === 'red' &&
      anchorH.style.backgroundColor === 'red' &&
      anchorO.style.backgroundColor === 'red' &&
      anchorR.style.backgroundColor === 'red'
    ) {
      anchorA.style.backgroundColor = 'green';
      anchorN.style.backgroundColor = 'green';
      anchorC.style.backgroundColor = 'green';
      anchorH.style.backgroundColor = 'green';
      anchorO.style.backgroundColor = 'green';
      anchorR.style.backgroundColor = 'green';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // C
  anchorC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      anchorA.style.backgroundColor === 'red' &&
      anchorN.style.backgroundColor === 'red' &&
      anchorC.style.backgroundColor === 'red' &&
      anchorH.style.backgroundColor === 'red' &&
      anchorO.style.backgroundColor === 'red' &&
      anchorR.style.backgroundColor === 'red'
    ) {
      anchorA.style.backgroundColor = 'green';
      anchorN.style.backgroundColor = 'green';
      anchorC.style.backgroundColor = 'green';
      anchorH.style.backgroundColor = 'green';
      anchorO.style.backgroundColor = 'green';
      anchorR.style.backgroundColor = 'green';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');;
    }
  });
  // H
  anchorH.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      anchorA.style.backgroundColor === 'red' &&
      anchorN.style.backgroundColor === 'red' &&
      anchorC.style.backgroundColor === 'red' &&
      anchorH.style.backgroundColor === 'red' &&
      anchorO.style.backgroundColor === 'red' &&
      anchorR.style.backgroundColor === 'red'
    ) {
      anchorA.style.backgroundColor = 'green';
      anchorN.style.backgroundColor = 'green';
      anchorC.style.backgroundColor = 'green';
      anchorH.style.backgroundColor = 'green';
      anchorO.style.backgroundColor = 'green';
      anchorR.style.backgroundColor = 'green';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // O
  anchorO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      anchorA.style.backgroundColor === 'red' &&
      anchorN.style.backgroundColor === 'red' &&
      anchorC.style.backgroundColor === 'red' &&
      anchorH.style.backgroundColor === 'red' &&
      anchorO.style.backgroundColor === 'red' &&
      anchorR.style.backgroundColor === 'red'
    ) {
      anchorA.style.backgroundColor = 'green';
      anchorN.style.backgroundColor = 'green';
      anchorC.style.backgroundColor = 'green';
      anchorH.style.backgroundColor = 'green';
      anchorO.style.backgroundColor = 'green';
      anchorR.style.backgroundColor = 'green';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  anchorR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      anchorA.style.backgroundColor === 'red' &&
      anchorN.style.backgroundColor === 'red' &&
      anchorC.style.backgroundColor === 'red' &&
      anchorH.style.backgroundColor === 'red' &&
      anchorO.style.backgroundColor === 'red' &&
      anchorR.style.backgroundColor === 'red'
    ) {
      anchorA.style.backgroundColor = 'green';
      anchorN.style.backgroundColor = 'green';
      anchorC.style.backgroundColor = 'green';
      anchorH.style.backgroundColor = 'green';
      anchorO.style.backgroundColor = 'green';
      anchorR.style.backgroundColor = 'green';
      let strike = document.querySelector('#anchor');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });

// PADDLE
  // P
  paddleP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      paddleP.style.backgroundColor === 'red' &&
      paddleA.style.backgroundColor === 'red' &&
      paddleD1.style.backgroundColor === 'red' &&
      paddleD2.style.backgroundColor === 'red' &&
      paddleL.style.backgroundColor === 'red' &&
      paddleE.style.backgroundColor === 'red'
    ) {
      paddleP.style.backgroundColor = 'green';
      paddleA.style.backgroundColor = 'green';
      paddleD1.style.backgroundColor = 'green';
      paddleD2.style.backgroundColor = 'green';
      paddleL.style.backgroundColor = 'green';
      paddleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
      // A
    paddleA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      paddleP.style.backgroundColor === 'red' &&
      paddleA.style.backgroundColor === 'red' &&
      paddleD1.style.backgroundColor === 'red' &&
      paddleD2.style.backgroundColor === 'red' &&
      paddleL.style.backgroundColor === 'red' &&
      paddleE.style.backgroundColor === 'red'
    ) {
      paddleP.style.backgroundColor = 'green';
      paddleA.style.backgroundColor = 'green';
      paddleD1.style.backgroundColor = 'green';
      paddleD2.style.backgroundColor = 'green';
      paddleL.style.backgroundColor = 'green';
      paddleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
        strike.classList.remove('biggerFont');
        strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // D
    paddleD1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      paddleP.style.backgroundColor === 'red' &&
      paddleA.style.backgroundColor === 'red' &&
      paddleD1.style.backgroundColor === 'red' &&
      paddleD2.style.backgroundColor === 'red' &&
      paddleL.style.backgroundColor === 'red' &&
      paddleE.style.backgroundColor === 'red'
    ) {
      paddleP.style.backgroundColor = 'green';
      paddleA.style.backgroundColor = 'green';
      paddleD1.style.backgroundColor = 'green';
      paddleD2.style.backgroundColor = 'green';
      paddleL.style.backgroundColor = 'green';
      paddleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // D
    paddleD2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      paddleP.style.backgroundColor === 'red' &&
      paddleA.style.backgroundColor === 'red' &&
      paddleD1.style.backgroundColor === 'red' &&
      paddleD2.style.backgroundColor === 'red' &&
      paddleL.style.backgroundColor === 'red' &&
      paddleE.style.backgroundColor === 'red'
    ) {
      paddleP.style.backgroundColor = 'green';
      paddleA.style.backgroundColor = 'green';
      paddleD1.style.backgroundColor = 'green';
      paddleD2.style.backgroundColor = 'green';
      paddleL.style.backgroundColor = 'green';
      paddleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#paddle');
      strike.classList.remove('biggerFont');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // L
    paddleL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      paddleP.style.backgroundColor === 'red' &&
      paddleA.style.backgroundColor === 'red' &&
      paddleD1.style.backgroundColor === 'red' &&
      paddleD2.style.backgroundColor === 'red' &&
      paddleL.style.backgroundColor === 'red' &&
      paddleE.style.backgroundColor === 'red'
    ) {
      paddleP.style.backgroundColor = 'green';
      paddleA.style.backgroundColor = 'green';
      paddleD1.style.backgroundColor = 'green';
      paddleD2.style.backgroundColor = 'green';
      paddleL.style.backgroundColor = 'green';
      paddleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#paddle');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    paddleE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      paddleP.style.backgroundColor === 'red' &&
      paddleA.style.backgroundColor === 'red' &&
      paddleD1.style.backgroundColor === 'red' &&
      paddleD2.style.backgroundColor === 'red' &&
      paddleL.style.backgroundColor === 'red' &&
      paddleE.style.backgroundColor === 'red'
    ) {
      paddleP.style.backgroundColor = 'green';
      paddleA.style.backgroundColor = 'green';
      paddleD1.style.backgroundColor = 'green';
      paddleD2.style.backgroundColor = 'green';
      paddleL.style.backgroundColor = 'green';
      paddleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#paddle');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });


  // TIDE
    // T
    tideT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
       tideT.style.backgroundColor === 'red' &&
        tideI.style.backgroundColor === 'red' &&
        tideD.style.backgroundColor === 'red' &&
        tideE.style.backgroundColor === 'red' 
    ) {
        tideT.style.backgroundColor = 'green';
        tideI.style.backgroundColor = 'green';
        tideD.style.backgroundColor = 'green';
        tideE.style.backgroundColor = 'green';
        let strike = document.querySelector('#tide');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // I
    tideI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      tideT.style.backgroundColor === 'red' &&
      tideI.style.backgroundColor === 'red' &&
      tideD.style.backgroundColor === 'red' &&
      tideE.style.backgroundColor === 'red' 
  ) {
      tideT.style.backgroundColor = 'green';
      tideI.style.backgroundColor = 'green';
      tideD.style.backgroundColor = 'green';
      tideE.style.backgroundColor = 'green';
      let strike = document.querySelector('#tide');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // D
    tideD.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      tideT.style.backgroundColor === 'red' &&
      tideI.style.backgroundColor === 'red' &&
      tideD.style.backgroundColor === 'red' &&
      tideE.style.backgroundColor === 'red' 
  ) {
      tideT.style.backgroundColor = 'green';
      tideI.style.backgroundColor = 'green';
      tideD.style.backgroundColor = 'green';
      tideE.style.backgroundColor = 'green';
      let strike = document.querySelector('#tide');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    tideE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      tideT.style.backgroundColor === 'red' &&
      tideI.style.backgroundColor === 'red' &&
      tideD.style.backgroundColor === 'red' &&
      tideE.style.backgroundColor === 'red' 
  ) {
      tideT.style.backgroundColor = 'green';
      tideI.style.backgroundColor = 'green';
      tideD.style.backgroundColor = 'green';
      tideE.style.backgroundColor = 'green';
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
  h1Header.innerText = 'Cross-word Countdown • Level 2';
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
  wordBox.appendChild(returntoMainButton);
 
  // RETURN TO MAIN MENU
  document.getElementById('returntoMainButton').addEventListener('click', () => {
    document.querySelector('#button-div').style.removeProperty("display");
    document.querySelector('#header-div').style.removeProperty("display");
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
        'limegreen';
    }
  };

  let oneMinTimer = setInterval(timerMinusOne, 10);
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
    event.target.style.backgroundColor = 'red';
    if (
      appleA.style.backgroundColor === 'red' &&
      appleP1.style.backgroundColor === 'red' &&
      appleP2.style.backgroundColor === 'red' &&
      appleL.style.backgroundColor === 'red' &&
      appleE.style.backgroundColor === 'red'
    ) {
      appleA.style.backgroundColor = 'green';
      appleP1.style.backgroundColor = 'green';
      appleP2.style.backgroundColor = 'green';
      appleL.style.backgroundColor = 'green';
      appleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  appleP1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      appleA.style.backgroundColor === 'red' &&
      appleP1.style.backgroundColor === 'red' &&
      appleP2.style.backgroundColor === 'red' &&
      appleL.style.backgroundColor === 'red' &&
      appleE.style.backgroundColor === 'red'
    ) {
      appleA.style.backgroundColor = 'green';
      appleP1.style.backgroundColor = 'green';
      appleP2.style.backgroundColor = 'green';
      appleL.style.backgroundColor = 'green';
      appleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // P
  appleP2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      appleA.style.backgroundColor === 'red' &&
      appleP1.style.backgroundColor === 'red' &&
      appleP2.style.backgroundColor === 'red' &&
      appleL.style.backgroundColor === 'red' &&
      appleE.style.backgroundColor === 'red'
    ) {
      appleA.style.backgroundColor = 'green';
      appleP1.style.backgroundColor = 'green';
      appleP2.style.backgroundColor = 'green';
      appleL.style.backgroundColor = 'green';
      appleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // L
  appleL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      appleA.style.backgroundColor === 'red' &&
      appleP1.style.backgroundColor === 'red' &&
      appleP2.style.backgroundColor === 'red' &&
      appleL.style.backgroundColor === 'red' &&
      appleE.style.backgroundColor === 'red'
    ) {
      appleA.style.backgroundColor = 'green';
      appleP1.style.backgroundColor = 'green';
      appleP2.style.backgroundColor = 'green';
      appleL.style.backgroundColor = 'green';
      appleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  appleE.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      appleA.style.backgroundColor === 'red' &&
      appleP1.style.backgroundColor === 'red' &&
      appleP2.style.backgroundColor === 'red' &&
      appleL.style.backgroundColor === 'red' &&
      appleE.style.backgroundColor === 'red'
    ) {
      appleA.style.backgroundColor = 'green';
      appleP1.style.backgroundColor = 'green';
      appleP2.style.backgroundColor = 'green';
      appleL.style.backgroundColor = 'green';
      appleE.style.backgroundColor = 'green';
      let strike = document.querySelector('#apple');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // ORANGE
  // O
  orangeO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      orangeO.style.backgroundColor === 'red' &&
      orangeR.style.backgroundColor === 'red' &&
      orangeA.style.backgroundColor === 'red' &&
      orangeN.style.backgroundColor === 'red' &&
      orangeG.style.backgroundColor === 'red' &&
      orangeE.style.backgroundColor === 'red'
    ) {
      orangeO.style.backgroundColor = 'green';
      orangeR.style.backgroundColor = 'green';
      orangeA.style.backgroundColor = 'green';
      orangeN.style.backgroundColor = 'green';
      orangeG.style.backgroundColor = 'green';
      orangeE.style.backgroundColor = 'green';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  orangeR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      orangeO.style.backgroundColor === 'red' &&
      orangeR.style.backgroundColor === 'red' &&
      orangeA.style.backgroundColor === 'red' &&
      orangeN.style.backgroundColor === 'red' &&
      orangeG.style.backgroundColor === 'red' &&
      orangeE.style.backgroundColor === 'red'
    ) {
      orangeO.style.backgroundColor = 'green';
      orangeR.style.backgroundColor = 'green';
      orangeA.style.backgroundColor = 'green';
      orangeN.style.backgroundColor = 'green';
      orangeG.style.backgroundColor = 'green';
      orangeE.style.backgroundColor = 'green';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');;
    }
  });
  // A
  orangeA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      orangeO.style.backgroundColor === 'red' &&
      orangeR.style.backgroundColor === 'red' &&
      orangeA.style.backgroundColor === 'red' &&
      orangeN.style.backgroundColor === 'red' &&
      orangeG.style.backgroundColor === 'red' &&
      orangeE.style.backgroundColor === 'red'
    ) {
      orangeO.style.backgroundColor = 'green';
      orangeR.style.backgroundColor = 'green';
      orangeA.style.backgroundColor = 'green';
      orangeN.style.backgroundColor = 'green';
      orangeG.style.backgroundColor = 'green';
      orangeE.style.backgroundColor = 'green';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // N
  orangeN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      orangeO.style.backgroundColor === 'red' &&
      orangeR.style.backgroundColor === 'red' &&
      orangeA.style.backgroundColor === 'red' &&
      orangeN.style.backgroundColor === 'red' &&
      orangeG.style.backgroundColor === 'red' &&
      orangeE.style.backgroundColor === 'red'
    ) {
      orangeO.style.backgroundColor = 'green';
      orangeR.style.backgroundColor = 'green';
      orangeA.style.backgroundColor = 'green';
      orangeN.style.backgroundColor = 'green';
      orangeG.style.backgroundColor = 'green';
      orangeE.style.backgroundColor = 'green';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // G
  orangeG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      orangeO.style.backgroundColor === 'red' &&
      orangeR.style.backgroundColor === 'red' &&
      orangeA.style.backgroundColor === 'red' &&
      orangeN.style.backgroundColor === 'red' &&
      orangeG.style.backgroundColor === 'red' &&
      orangeE.style.backgroundColor === 'red'
    ) {
      orangeO.style.backgroundColor = 'green';
      orangeR.style.backgroundColor = 'green';
      orangeA.style.backgroundColor = 'green';
      orangeN.style.backgroundColor = 'green';
      orangeG.style.backgroundColor = 'green';
      orangeE.style.backgroundColor = 'green';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  orangeE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      orangeO.style.backgroundColor === 'red' &&
      orangeR.style.backgroundColor === 'red' &&
      orangeA.style.backgroundColor === 'red' &&
      orangeN.style.backgroundColor === 'red' &&
      orangeG.style.backgroundColor === 'red' &&
      orangeE.style.backgroundColor === 'red'
    ) {
      orangeO.style.backgroundColor = 'green';
      orangeR.style.backgroundColor = 'green';
      orangeA.style.backgroundColor = 'green';
      orangeN.style.backgroundColor = 'green';
      orangeG.style.backgroundColor = 'green';
      orangeE.style.backgroundColor = 'green';
      let strike = document.querySelector('#orange');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
        // BANANA
      // B
    bananaB.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        bananaB.style.backgroundColor === 'red' &&
        bananaA1.style.backgroundColor === 'red' &&
        bananaN1.style.backgroundColor === 'red' &&
        bananaA2.style.backgroundColor === 'red' &&
        bananaN2.style.backgroundColor === 'red' &&
        bananaA3.style.backgroundColor === 'red'
    ) {
        bananaB.style.backgroundColor = 'green';
        bananaA1.style.backgroundColor = 'green';
        bananaN1.style.backgroundColor = 'green';
        bananaA2.style.backgroundColor = 'green';
        bananaN2.style.backgroundColor = 'green';
        bananaA3.style.backgroundColor = 'green';
        let strike = document.querySelector('#banana');
        strike.classList.remove('biggerFont');
        strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    bananaA1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        bananaB.style.backgroundColor === 'red' &&
        bananaA1.style.backgroundColor === 'red' &&
        bananaN1.style.backgroundColor === 'red' &&
        bananaA2.style.backgroundColor === 'red' &&
        bananaN2.style.backgroundColor === 'red' &&
        bananaA3.style.backgroundColor === 'red'
    ) {
        bananaB.style.backgroundColor = 'green';
        bananaA1.style.backgroundColor = 'green';
        bananaN1.style.backgroundColor = 'green';
        bananaA2.style.backgroundColor = 'green';
        bananaN2.style.backgroundColor = 'green';
        bananaA3.style.backgroundColor = 'green';
        let strike = document.querySelector('#banana');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    bananaN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        bananaB.style.backgroundColor === 'red' &&
        bananaA1.style.backgroundColor === 'red' &&
        bananaN1.style.backgroundColor === 'red' &&
        bananaA2.style.backgroundColor === 'red' &&
        bananaN2.style.backgroundColor === 'red' &&
        bananaA3.style.backgroundColor === 'red'
    ) {
        bananaB.style.backgroundColor = 'green';
        bananaA1.style.backgroundColor = 'green';
        bananaN1.style.backgroundColor = 'green';
        bananaA2.style.backgroundColor = 'green';
        bananaN2.style.backgroundColor = 'green';
        bananaA3.style.backgroundColor = 'green';
        let strike = document.querySelector('#banana');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    bananaA2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        bananaB.style.backgroundColor === 'red' &&
        bananaA1.style.backgroundColor === 'red' &&
        bananaN1.style.backgroundColor === 'red' &&
        bananaA2.style.backgroundColor === 'red' &&
        bananaN2.style.backgroundColor === 'red' &&
        bananaA3.style.backgroundColor === 'red'
    ) {
        bananaB.style.backgroundColor = 'green';
        bananaA1.style.backgroundColor = 'green';
        bananaN1.style.backgroundColor = 'green';
        bananaA2.style.backgroundColor = 'green';
        bananaN2.style.backgroundColor = 'green';
        bananaA3.style.backgroundColor = 'green';
        let strike = document.querySelector('#banana');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    bananaN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        bananaB.style.backgroundColor === 'red' &&
        bananaA1.style.backgroundColor === 'red' &&
        bananaN1.style.backgroundColor === 'red' &&
        bananaA2.style.backgroundColor === 'red' &&
        bananaN2.style.backgroundColor === 'red' &&
        bananaA3.style.backgroundColor === 'red'
    ) {
        bananaB.style.backgroundColor = 'green';
        bananaA1.style.backgroundColor = 'green';
        bananaN1.style.backgroundColor = 'green';
        bananaA2.style.backgroundColor = 'green';
        bananaN2.style.backgroundColor = 'green';
        bananaA3.style.backgroundColor = 'green';
        let strike = document.querySelector('#banana');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    bananaA3.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        bananaB.style.backgroundColor === 'red' &&
        bananaA1.style.backgroundColor === 'red' &&
        bananaN1.style.backgroundColor === 'red' &&
        bananaA2.style.backgroundColor === 'red' &&
        bananaN2.style.backgroundColor === 'red' &&
        bananaA3.style.backgroundColor === 'red'
    ) {
        bananaB.style.backgroundColor = 'green';
        bananaA1.style.backgroundColor = 'green';
        bananaN1.style.backgroundColor = 'green';
        bananaA2.style.backgroundColor = 'green';
        bananaN2.style.backgroundColor = 'green';
        bananaA3.style.backgroundColor = 'green';
        let strike = document.querySelector('#banana');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // GRAPE
    // G
    grapeG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        grapeG.style.backgroundColor === 'red' &&
        grapeR.style.backgroundColor === 'red' &&
        grapeA.style.backgroundColor === 'red' &&
        grapeP.style.backgroundColor === 'red' &&
        grapeE.style.backgroundColor === 'red'
    ) {
        grapeG.style.backgroundColor = 'green';
        grapeR.style.backgroundColor = 'green';
        grapeA.style.backgroundColor = 'green';
        grapeP.style.backgroundColor = 'green';
        grapeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#grape');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    grapeR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        grapeG.style.backgroundColor === 'red' &&
        grapeR.style.backgroundColor === 'red' &&
        grapeA.style.backgroundColor === 'red' &&
        grapeP.style.backgroundColor === 'red' &&
        grapeE.style.backgroundColor === 'red'
    ) {
        grapeG.style.backgroundColor = 'green';
        grapeR.style.backgroundColor = 'green';
        grapeA.style.backgroundColor = 'green';
        grapeP.style.backgroundColor = 'green';
        grapeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#grape');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    grapeA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        grapeG.style.backgroundColor === 'red' &&
        grapeR.style.backgroundColor === 'red' &&
        grapeA.style.backgroundColor === 'red' &&
        grapeP.style.backgroundColor === 'red' &&
        grapeE.style.backgroundColor === 'red'
    ) {
        grapeG.style.backgroundColor = 'green';
        grapeR.style.backgroundColor = 'green';
        grapeA.style.backgroundColor = 'green';
        grapeP.style.backgroundColor = 'green';
        grapeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#grape');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // P
    grapeP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        grapeG.style.backgroundColor === 'red' &&
        grapeR.style.backgroundColor === 'red' &&
        grapeA.style.backgroundColor === 'red' &&
        grapeP.style.backgroundColor === 'red' &&
        grapeE.style.backgroundColor === 'red'
    ) {
        grapeG.style.backgroundColor = 'green';
        grapeR.style.backgroundColor = 'green';
        grapeA.style.backgroundColor = 'green';
        grapeP.style.backgroundColor = 'green';
        grapeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#grape');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    grapeE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        grapeG.style.backgroundColor === 'red' &&
        grapeR.style.backgroundColor === 'red' &&
        grapeA.style.backgroundColor === 'red' &&
        grapeP.style.backgroundColor === 'red' &&
        grapeE.style.backgroundColor === 'red'
    ) {
        grapeG.style.backgroundColor = 'green';
        grapeR.style.backgroundColor = 'green';
        grapeA.style.backgroundColor = 'green';
        grapeP.style.backgroundColor = 'green';
        grapeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#grape');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // NECTARINE
    // N
    nectarineN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    nectarineE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // C
    nectarineC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // T
    nectarineT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    nectarineA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    nectarineR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // I
    nectarineI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    nectarineN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    nectarineE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        nectarineN1.style.backgroundColor === 'red' &&
        nectarineE1.style.backgroundColor === 'red' &&
        nectarineC.style.backgroundColor === 'red' &&
        nectarineT.style.backgroundColor === 'red' &&
        nectarineA.style.backgroundColor === 'red' &&
        nectarineR.style.backgroundColor === 'red' &&
        nectarineI.style.backgroundColor === 'red' &&
        nectarineN2.style.backgroundColor === 'red' &&
        nectarineE2.style.backgroundColor === 'red'
    ) {
        nectarineN1.style.backgroundColor = 'green';
        nectarineE1.style.backgroundColor = 'green';
        nectarineC.style.backgroundColor = 'green';
        nectarineT.style.backgroundColor = 'green';
        nectarineA.style.backgroundColor = 'green';
        nectarineR.style.backgroundColor = 'green';
        nectarineI.style.backgroundColor = 'green';
        nectarineN2.style.backgroundColor = 'green';
        nectarineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#nectarine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // TANGERINE
    // T
    tangerineT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    tangerineA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    tangerineN1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // G
    tangerineG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    tangerineE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    tangerineR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // I
    tangerineI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    tangerineN2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    tangerineE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        tangerineT.style.backgroundColor === 'red' &&
        tangerineA.style.backgroundColor === 'red' &&
        tangerineN1.style.backgroundColor === 'red' &&
        tangerineG.style.backgroundColor === 'red' &&
        tangerineE1.style.backgroundColor === 'red' &&
        tangerineR.style.backgroundColor === 'red' &&
        tangerineI.style.backgroundColor === 'red' &&
        tangerineN2.style.backgroundColor === 'red' &&
        tangerineE2.style.backgroundColor === 'red'
    ) {
        tangerineT.style.backgroundColor = 'green';
        tangerineA.style.backgroundColor = 'green';
        tangerineN1.style.backgroundColor = 'green';
        tangerineG.style.backgroundColor = 'green';
        tangerineE1.style.backgroundColor = 'green';
        tangerineR.style.backgroundColor = 'green';
        tangerineI.style.backgroundColor = 'green';
        tangerineN2.style.backgroundColor = 'green';
        tangerineE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#tangerine');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // LIME
    // L
    limeL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        limeL.style.backgroundColor === 'red' &&
        limeI.style.backgroundColor === 'red' &&
        limeM.style.backgroundColor === 'red' &&
        limeE.style.backgroundColor === 'red'
    ) {
        limeL.style.backgroundColor = 'green';
        limeI.style.backgroundColor = 'green';
        limeM.style.backgroundColor = 'green';
        limeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#lime');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // I
    limeI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        limeL.style.backgroundColor === 'red' &&
        limeI.style.backgroundColor === 'red' &&
        limeM.style.backgroundColor === 'red' &&
        limeE.style.backgroundColor === 'red'
    ) {
        limeL.style.backgroundColor = 'green';
        limeI.style.backgroundColor = 'green';
        limeM.style.backgroundColor = 'green';
        limeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#lime');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // M
    limeM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        limeL.style.backgroundColor === 'red' &&
        limeI.style.backgroundColor === 'red' &&
        limeM.style.backgroundColor === 'red' &&
        limeE.style.backgroundColor === 'red'
    ) {
        limeL.style.backgroundColor = 'green';
        limeI.style.backgroundColor = 'green';
        limeM.style.backgroundColor = 'green';
        limeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#lime');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    limeE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        limeL.style.backgroundColor === 'red' &&
        limeI.style.backgroundColor === 'red' &&
        limeM.style.backgroundColor === 'red' &&
        limeE.style.backgroundColor === 'red'
    ) {
        limeL.style.backgroundColor = 'green';
        limeI.style.backgroundColor = 'green';
        limeM.style.backgroundColor = 'green';
        limeE.style.backgroundColor = 'green';
        let strike = document.querySelector('#lime');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // MANGO
    // M
    mangoM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        mangoM.style.backgroundColor === 'red' &&
        mangoA.style.backgroundColor === 'red' &&
        mangoN.style.backgroundColor === 'red' &&
        mangoG.style.backgroundColor === 'red' &&
        mangoO.style.backgroundColor === 'red'
    ) {
        mangoM.style.backgroundColor = 'green';
        mangoA.style.backgroundColor = 'green';
        mangoN.style.backgroundColor = 'green';
        mangoG.style.backgroundColor = 'green';
        mangoO.style.backgroundColor = 'green';
        let strike = document.querySelector('#mango');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    mangoA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        mangoM.style.backgroundColor === 'red' &&
        mangoA.style.backgroundColor === 'red' &&
        mangoN.style.backgroundColor === 'red' &&
        mangoG.style.backgroundColor === 'red' &&
        mangoO.style.backgroundColor === 'red'
    ) {
        mangoM.style.backgroundColor = 'green';
        mangoA.style.backgroundColor = 'green';
        mangoN.style.backgroundColor = 'green';
        mangoG.style.backgroundColor = 'green';
        mangoO.style.backgroundColor = 'green';
        let strike = document.querySelector('#mango');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    mangoN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        mangoM.style.backgroundColor === 'red' &&
        mangoA.style.backgroundColor === 'red' &&
        mangoN.style.backgroundColor === 'red' &&
        mangoG.style.backgroundColor === 'red' &&
        mangoO.style.backgroundColor === 'red'
    ) {
        mangoM.style.backgroundColor = 'green';
        mangoA.style.backgroundColor = 'green';
        mangoN.style.backgroundColor = 'green';
        mangoG.style.backgroundColor = 'green';
        mangoO.style.backgroundColor = 'green';
        let strike = document.querySelector('#mango');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // G
    mangoG.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        mangoM.style.backgroundColor === 'red' &&
        mangoA.style.backgroundColor === 'red' &&
        mangoN.style.backgroundColor === 'red' &&
        mangoG.style.backgroundColor === 'red' &&
        mangoO.style.backgroundColor === 'red'
    ) {
        mangoM.style.backgroundColor = 'green';
        mangoA.style.backgroundColor = 'green';
        mangoN.style.backgroundColor = 'green';
        mangoG.style.backgroundColor = 'green';
        mangoO.style.backgroundColor = 'green';
        let strike = document.querySelector('#mango');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // O
    mangoO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        mangoM.style.backgroundColor === 'red' &&
        mangoA.style.backgroundColor === 'red' &&
        mangoN.style.backgroundColor === 'red' &&
        mangoG.style.backgroundColor === 'red' &&
        mangoO.style.backgroundColor === 'red'
    ) {
        mangoM.style.backgroundColor = 'green';
        mangoA.style.backgroundColor = 'green';
        mangoN.style.backgroundColor = 'green';
        mangoG.style.backgroundColor = 'green';
        mangoO.style.backgroundColor = 'green';
        let strike = document.querySelector('#mango');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // PEACH
    // P
    peachP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        peachP.style.backgroundColor === 'red' &&
        peachE.style.backgroundColor === 'red' &&
        peachA.style.backgroundColor === 'red' &&
        peachC.style.backgroundColor === 'red' &&
        peachH.style.backgroundColor === 'red'
    ) {
        peachP.style.backgroundColor = 'green';
        peachE.style.backgroundColor = 'green';
        peachA.style.backgroundColor = 'green';
        peachC.style.backgroundColor = 'green';
        peachH.style.backgroundColor = 'green';
        let strike = document.querySelector('#peach');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    peachE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        peachP.style.backgroundColor === 'red' &&
        peachE.style.backgroundColor === 'red' &&
        peachA.style.backgroundColor === 'red' &&
        peachC.style.backgroundColor === 'red' &&
        peachH.style.backgroundColor === 'red'
    ) {
        peachP.style.backgroundColor = 'green';
        peachE.style.backgroundColor = 'green';
        peachA.style.backgroundColor = 'green';
        peachC.style.backgroundColor = 'green';
        peachH.style.backgroundColor = 'green';
        let strike = document.querySelector('#peach');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    peachA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        peachP.style.backgroundColor === 'red' &&
        peachE.style.backgroundColor === 'red' &&
        peachA.style.backgroundColor === 'red' &&
        peachC.style.backgroundColor === 'red' &&
        peachH.style.backgroundColor === 'red'
    ) {
        peachP.style.backgroundColor = 'green';
        peachE.style.backgroundColor = 'green';
        peachA.style.backgroundColor = 'green';
        peachC.style.backgroundColor = 'green';
        peachH.style.backgroundColor = 'green';
        let strike = document.querySelector('#peach');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // C
    peachC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        peachP.style.backgroundColor === 'red' &&
        peachE.style.backgroundColor === 'red' &&
        peachA.style.backgroundColor === 'red' &&
        peachC.style.backgroundColor === 'red' &&
        peachH.style.backgroundColor === 'red'
    ) {
        peachP.style.backgroundColor = 'green';
        peachE.style.backgroundColor = 'green';
        peachA.style.backgroundColor = 'green';
        peachC.style.backgroundColor = 'green';
        peachH.style.backgroundColor = 'green';
        let strike = document.querySelector('#peach');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // H
    peachH.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        peachP.style.backgroundColor === 'red' &&
        peachE.style.backgroundColor === 'red' &&
        peachA.style.backgroundColor === 'red' &&
        peachC.style.backgroundColor === 'red' &&
        peachH.style.backgroundColor === 'red'
    ) {
        peachP.style.backgroundColor = 'green';
        peachE.style.backgroundColor = 'green';
        peachA.style.backgroundColor = 'green';
        peachC.style.backgroundColor = 'green';
        peachH.style.backgroundColor = 'green';
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
  h1Header.innerText = 'Cross-word Countdown • Level 3';
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
  wordBox.appendChild( arrayText);
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
  booleanText.innerText = 'BOOLEAM';
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
  wordBox.appendChild(returntoMainButton);
 
  // RETURN TO MAIN MENU
  document.getElementById('returntoMainButton').addEventListener('click', () => {
    document.querySelector('#button-div').style.removeProperty("display");
    document.querySelector('#header-div').style.removeProperty("display");
    document.getElementById('returntoMainButton').remove();

    document.getElementById('header-container').remove();
    document.getElementById('main-container').remove();

    // CHANGE TEXT AT MAIN MENU DEPENDING ON COLOR
  });
  // GENERATE BOARD
  let alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
  let alphabetArray = alphabet.split(' ');

  for (let i = 0; i < 600; i++) {
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
      clearInterval(oneMinTimer);
      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '😢You lost!😢';
      document.querySelector('#startLevel3').style.backgroundColor = 'yellow';
    }

    if (document.querySelectorAll('.biggerFontandStrikethrough').length === 12) {
      clearInterval(oneMinTimer);

      document
        .getElementById('returntoMainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('returntoMainButton')
        .classList.add('button-visible');
      timer.innerText = '🏆You won!🏆';
      document.querySelector('#startLevel3').style.backgroundColor =
        'limegreen';
    }
  };

  let oneMinTimer = setInterval(timerMinusOne, 1000);
};

// GENERATE LETTERS ON BOARD
let generateNamesThree = () => {
  //ARRAY SETUP
  let arrayA1 = document.getElementById('106');
  arrayA1.className = 'singleBlockTestLevelTwo';
  arrayA1.innerText = 'A';
  let arrayR1 = document.getElementById('127');
  arrayR1.className = 'singleBlockTestLevelTwo';
  arrayR1.innerText = 'R';
  let arrayR2 = document.getElementById('148');
  arrayR2.className = 'singleBlockTestLevelTwo';
  arrayR2.innerText = 'R';
  let arrayA2 = document.getElementById('169');
  arrayA2.className = 'singleBlockTestLevelTwo';
  arrayA2.innerText = 'A';
  let arrayY = document.getElementById('190');
  arrayY.className = 'singleBlockTestLevelTwo';
  arrayY.innerText = 'Y';
  // REVERSE SETUP
  let reverseR1 = document.getElementById('400');
  reverseR1.className = 'singleBlockTestLevelTwo';
  reverseR1.innerText = 'R';
  let reverseE1 = document.getElementById('420');
  reverseE1.className = 'singleBlockTestLevelTwo';
  reverseE1.innerText = 'E';
  let reverseV = document.getElementById('440');
  reverseV.className = 'singleBlockTestLevelTwo';
  reverseV.innerText = 'V';
  let reverseE2 = document.getElementById('460');
  reverseE2.className = 'singleBlockTestLevelTwo';
  reverseE2.innerText = 'E';
  let reverseR2 = document.getElementById('480');
  reverseR2.className = 'singleBlockTestLevelTwo';
  reverseR2.innerText = 'R';
  let reverseS = document.getElementById('500');
  reverseS.className = 'singleBlockTestLevelTwo';
  reverseS.innerText = 'S';
  let reverseE3 = document.getElementById('520');
  reverseE3.className = 'singleBlockTestLevelTwo';
  reverseE3.innerText = 'E';
  // MAP SETUP
  let mapM = document.getElementById('6');
  mapM.className = 'singleBlockTestLevelTwo';
  mapM.innerText = 'M';
  let mapA = document.getElementById('27');
  mapA.className = 'singleBlockTestLevelTwo';
  mapA.innerText = 'A';
  let mapP = document.getElementById('48');
  mapP.className = 'singleBlockTestLevelTwo';
  mapP.innerText = 'P';

  // SORT SETUP
  let sortS = document.getElementById('316');
  sortS.className = 'singleBlockTestLevelTwo';
  sortS.innerText = 'S';
  let sortO = document.getElementById('335');
  sortO.className = 'singleBlockTestLevelTwo';
  sortO.innerText = 'O';
  let sortR = document.getElementById('354');
  sortR.className = 'singleBlockTestLevelTwo';
  sortR.innerText = 'R';
  let sortT = document.getElementById('373');
  sortT.className = 'singleBlockTestLevelTwo';
  sortT.innerText = 'T';

  // REDUCE SETUP
  let reduceR = document.getElementById('573');
  reduceR.className = 'singleBlockTestLevelTwo';
  reduceR.innerText = 'R';
  let reduceE1 = document.getElementById('574');
  reduceE1.className = 'singleBlockTestLevelTwo';
  reduceE1.innerText = 'E';
  let reduceD = document.getElementById('575');
  reduceD.className = 'singleBlockTestLevelTwo';
  reduceD.innerText = 'D';
  let reduceU = document.getElementById('576');
  reduceU.className = 'singleBlockTestLevelTwo';
  reduceU.innerText = 'U';
  let reduceC = document.getElementById('577');
  reduceC.className = 'singleBlockTestLevelTwo';
  reduceC.innerText = 'C';
  let reduceE2 = document.getElementById('578');
  reduceE2.className = 'singleBlockTestLevelTwo';
  reduceE2.innerText = 'E';
  // OPERATOR SETUP
  let operatorO1 = document.getElementById('410');
  operatorO1.className = 'singleBlockTestLevelTwo';
  operatorO1.innerText = 'O';
  let operatorP = document.getElementById('411');
  operatorP.className = 'singleBlockTestLevelTwo';
  operatorP.innerText = 'P';
  let operatorE = document.getElementById('412');
  operatorE.className = 'singleBlockTestLevelTwo';
  operatorE.innerText = 'E';
  let operatorR1 = document.getElementById('413');
  operatorR1.className = 'singleBlockTestLevelTwo';
  operatorR1.innerText = 'R';
  let operatorA = document.getElementById('414');
  operatorA.className = 'singleBlockTestLevelTwo';
  operatorA.innerText = 'A';
  let operatorT = document.getElementById('415');
  operatorT.className = 'singleBlockTestLevelTwo';
  operatorT.innerText = 'T';
  let operatorO2 = document.getElementById('416');
  operatorO2.className = 'singleBlockTestLevelTwo';
  operatorO2.innerText = 'O';
  let operatorR2 = document.getElementById('417');
  operatorR2.className = 'singleBlockTestLevelTwo';
  operatorR2.innerText = 'R';
  // BOOLEAN SETUP
  let booleanB = document.getElementById('585');
  booleanB.className = 'singleBlockTestLevelTwo';
  booleanB.innerText = 'B';
  let booleanO1 = document.getElementById('566');
  booleanO1.className = 'singleBlockTestLevelTwo';
  booleanO1.innerText = 'O';
  let booleanO2 = document.getElementById('547');
  booleanO2.className = 'singleBlockTestLevelTwo';
  booleanO2.innerText = 'O';
  let booleanL = document.getElementById('528');
  booleanL.className = 'singleBlockTestLevelTwo';
  booleanL.innerText = 'L';
  let booleanE = document.getElementById('509');
  booleanE.className = 'singleBlockTestLevelTwo';
  booleanE.innerText = 'E';
  let booleanA = document.getElementById('490');
  booleanA.className = 'singleBlockTestLevelTwo';
  booleanA.innerText = 'A';
  let booleanN = document.getElementById('471');
  booleanN.className = 'singleBlockTestLevelTwo';
  booleanN.innerText = 'N';
  // REMAINDER SETUP
  let remainderR1 = document.getElementById('39');
  remainderR1.className = 'singleBlockTestLevelTwo';
  remainderR1.innerText = 'R';
  let remainderE1 = document.getElementById('58');
  remainderE1.className = 'singleBlockTestLevelTwo';
  remainderE1.innerText = 'E';
  let remainderM = document.getElementById('77');
  remainderM.className = 'singleBlockTestLevelTwo';
  remainderM.innerText = 'M';
  let remainderA = document.getElementById('96');
  remainderA.className = 'singleBlockTestLevelTwo';
  remainderA.innerText = 'A';
  let remainderI = document.getElementById('115');
  remainderI.className = 'singleBlockTestLevelTwo';
  remainderI.innerText = 'I';
  let remainderN = document.getElementById('134');
  remainderN.className = 'singleBlockTestLevelTwo';
  remainderN.innerText = 'N';
  let remainderD = document.getElementById('153');
  remainderD.className = 'singleBlockTestLevelTwo';
  remainderD.innerText = 'D';
  let remainderE2 = document.getElementById('172');
  remainderE2.className = 'singleBlockTestLevelTwo';
  remainderE2.innerText = 'E';
  let remainderR2 = document.getElementById('191');
  remainderR2.className = 'singleBlockTestLevelTwo';
  remainderR2.innerText = 'R ';
  // CONDITIONAL SETUP
  let conditionalC = document.getElementById('102');
  conditionalC.className = 'singleBlockTestLevelTwo';
  conditionalC.innerText = 'C';
  let conditionalO1 = document.getElementById('122');
  conditionalO1.className = 'singleBlockTestLevelTwo';
  conditionalO1.innerText = 'O';
  let conditionalN1 = document.getElementById('142');
  conditionalN1.className = 'singleBlockTestLevelTwo';
  conditionalN1.innerText = 'N';
  let conditionalD = document.getElementById('162');
  conditionalD.className = 'singleBlockTestLevelTwo';
  conditionalD.innerText = 'D';
  let conditionalI1 = document.getElementById('182');
  conditionalI1.className = 'singleBlockTestLevelTwo';
  conditionalI1.innerText = 'I';
  let conditionalT = document.getElementById('202');
  conditionalT.className = 'singleBlockTestLevelTwo';
  conditionalT.innerText = 'T';
  let conditionalI2 = document.getElementById('222');
  conditionalI2.className = 'singleBlockTestLevelTwo';
  conditionalI2.innerText = 'I';
  let conditionalO2 = document.getElementById('242');
  conditionalO2.className = 'singleBlockTestLevelTwo';
  conditionalO2.innerText = 'O';
  let conditionalN2 = document.getElementById('262');
  conditionalN2.className = 'singleBlockTestLevelTwo';
  conditionalN2.innerText = 'N';
  let conditionalA = document.getElementById('282');
  conditionalA.className = 'singleBlockTestLevelTwo';
  conditionalA.innerText = 'A';
  let conditionalL = document.getElementById('302');
  conditionalL.className = 'singleBlockTestLevelTwo';
  conditionalL.innerText = 'L ';
  // FUNCTION SETUP
  let functionF = document.getElementById('139');
  functionF.className = 'singleBlockTestLevelTwo';
  functionF.innerText = 'F';
  let functionU = document.getElementById('159');
  functionU.className = 'singleBlockTestLevelTwo';
  functionU.innerText = 'U';
  let functionN1 = document.getElementById('179');
  functionN1.className = 'singleBlockTestLevelTwo';
  functionN1.innerText = 'N';
  let functionC = document.getElementById('199');
  functionC.className = 'singleBlockTestLevelTwo';
  functionC.innerText = 'C';
  let functionT = document.getElementById('219');
  functionT.className = 'singleBlockTestLevelTwo';
  functionT.innerText = 'T';
  let functionI = document.getElementById('239');
  functionI.className = 'singleBlockTestLevelTwo';
  functionI.innerText = 'I';
  let functionO = document.getElementById('259');
  functionO.className = 'singleBlockTestLevelTwo';
  functionO.innerText = 'O';
  let functionN2 = document.getElementById('279');
  functionN2.className = 'singleBlockTestLevelTwo';
  functionN2.innerText = 'N';
    // CLASS SETUP
  let classC = document.getElementById('250');
  classC.className = 'singleBlockTestLevelTwo';
  classC.innerText = 'C';
  let classL = document.getElementById('251');
  classL.className = 'singleBlockTestLevelTwo';
  classL.innerText = 'L';
  let classA = document.getElementById('252');
  classA.className = 'singleBlockTestLevelTwo';
  classA.innerText = 'A';
  let classS1 = document.getElementById('253');
  classS1.className = 'singleBlockTestLevelTwo';
  classS1.innerText = 'S';
  let classS2 = document.getElementById('254');
  classS2.className = 'singleBlockTestLevelTwo';
  classS2.innerText = 'S';
      // ITERATOR SETUP
  let iteratorI = document.getElementById('37');
  iteratorI.className = 'singleBlockTestLevelTwo';
  iteratorI.innerText = 'I';
  let iteratorT1 = document.getElementById('36');
  iteratorT1.className = 'singleBlockTestLevelTwo';
  iteratorT1.innerText = 'T';
  let iteratorE = document.getElementById('35');
  iteratorE.className = 'singleBlockTestLevelTwo';
  iteratorE.innerText = 'E';
  let iteratorR1 = document.getElementById('34');
  iteratorR1.className = 'singleBlockTestLevelTwo';
  iteratorR1.innerText = 'R';
  let iteratorA = document.getElementById('33');
  iteratorA.className = 'singleBlockTestLevelTwo';
  iteratorA.innerText = 'A';
  let iteratorT2 = document.getElementById('32');
  iteratorT2.className = 'singleBlockTestLevelTwo';
  iteratorT2.innerText = 'T';
  let iteratorO = document.getElementById('31');
  iteratorO.className = 'singleBlockTestLevelTwo';
  iteratorO.innerText = 'O';
  let iteratorR2 = document.getElementById('30');
  iteratorR2.className = 'singleBlockTestLevelTwo';
  iteratorR2.innerText = 'R';


// ARRAY
// A
  arrayA1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      arrayA1.style.backgroundColor === 'red' &&
      arrayR1.style.backgroundColor === 'red' &&
      arrayR2.style.backgroundColor === 'red' &&
      arrayA2.style.backgroundColor === 'red' &&
      arrayY.style.backgroundColor === 'red'
    ) {
      arrayA1.style.backgroundColor = 'green';
      arrayR1.style.backgroundColor = 'green';
      arrayR2.style.backgroundColor = 'green';
      arrayA2.style.backgroundColor = 'green';
      arrayY.style.backgroundColor = 'green';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  //R
  arrayR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      arrayA1.style.backgroundColor === 'red' &&
      arrayR1.style.backgroundColor === 'red' &&
      arrayR2.style.backgroundColor === 'red' &&
      arrayA2.style.backgroundColor === 'red' &&
      arrayY.style.backgroundColor === 'red'
    ) {
      arrayA1.style.backgroundColor = 'green';
      arrayR1.style.backgroundColor = 'green';
      arrayR2.style.backgroundColor = 'green';
      arrayA2.style.backgroundColor = 'green';
      arrayY.style.backgroundColor = 'green';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  arrayR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      arrayA1.style.backgroundColor === 'red' &&
      arrayR1.style.backgroundColor === 'red' &&
      arrayR2.style.backgroundColor === 'red' &&
      arrayA2.style.backgroundColor === 'red' &&
      arrayY.style.backgroundColor === 'red'
    ) {
      arrayA1.style.backgroundColor = 'green';
      arrayR1.style.backgroundColor = 'green';
      arrayR2.style.backgroundColor = 'green';
      arrayA2.style.backgroundColor = 'green';
      arrayY.style.backgroundColor = 'green';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // A
  arrayA2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      arrayA1.style.backgroundColor === 'red' &&
      arrayR1.style.backgroundColor === 'red' &&
      arrayR2.style.backgroundColor === 'red' &&
      arrayA2.style.backgroundColor === 'red' &&
      arrayY.style.backgroundColor === 'red'
    ) {
      arrayA1.style.backgroundColor = 'green';
      arrayR1.style.backgroundColor = 'green';
      arrayR2.style.backgroundColor = 'green';
      arrayA2.style.backgroundColor = 'green';
      arrayY.style.backgroundColor = 'green';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // Y
  arrayY.addEventListener('mouseup', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      arrayA1.style.backgroundColor === 'red' &&
      arrayR1.style.backgroundColor === 'red' &&
      arrayR2.style.backgroundColor === 'red' &&
      arrayA2.style.backgroundColor === 'red' &&
      arrayY.style.backgroundColor === 'red'
    ) {
      arrayA1.style.backgroundColor = 'green';
      arrayR1.style.backgroundColor = 'green';
      arrayR2.style.backgroundColor = 'green';
      arrayA2.style.backgroundColor = 'green';
      arrayY.style.backgroundColor = 'green';
      let strike = document.querySelector('#array');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // REVERSE
  // R
  reverseR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reverseR1.style.backgroundColor === 'red' &&
      reverseE1.style.backgroundColor === 'red' &&
      reverseV.style.backgroundColor === 'red' &&
      reverseE2.style.backgroundColor === 'red' &&
      reverseR2.style.backgroundColor === 'red' &&
      reverseS.style.backgroundColor === 'red' &&
      reverseE3.style.backgroundColor === 'red'
    ) {
      reverseR1.style.backgroundColor = 'green';
      reverseE1.style.backgroundColor = 'green';
      reverseV.style.backgroundColor = 'green';
      reverseE2.style.backgroundColor = 'green';
      reverseR2.style.backgroundColor = 'green';
      reverseS.style.backgroundColor = 'green';
      reverseE3.style.backgroundColor = 'green';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reverseE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reverseR1.style.backgroundColor === 'red' &&
      reverseE1.style.backgroundColor === 'red' &&
      reverseV.style.backgroundColor === 'red' &&
      reverseE2.style.backgroundColor === 'red' &&
      reverseR2.style.backgroundColor === 'red' &&
      reverseS.style.backgroundColor === 'red' &&
      reverseE3.style.backgroundColor === 'red'
    ) {
      reverseR1.style.backgroundColor = 'green';
      reverseE1.style.backgroundColor = 'green';
      reverseV.style.backgroundColor = 'green';
      reverseE2.style.backgroundColor = 'green';
      reverseR2.style.backgroundColor = 'green';
      reverseS.style.backgroundColor = 'green';
      reverseE3.style.backgroundColor = 'green';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');;
    }
  });
  // V
  reverseV.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reverseR1.style.backgroundColor === 'red' &&
      reverseE1.style.backgroundColor === 'red' &&
      reverseV.style.backgroundColor === 'red' &&
      reverseE2.style.backgroundColor === 'red' &&
      reverseR2.style.backgroundColor === 'red' &&
      reverseS.style.backgroundColor === 'red' &&
      reverseE3.style.backgroundColor === 'red'
    ) {
      reverseR1.style.backgroundColor = 'green';
      reverseE1.style.backgroundColor = 'green';
      reverseV.style.backgroundColor = 'green';
      reverseE2.style.backgroundColor = 'green';
      reverseR2.style.backgroundColor = 'green';
      reverseS.style.backgroundColor = 'green';
      reverseE3.style.backgroundColor = 'green';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reverseE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reverseR1.style.backgroundColor === 'red' &&
      reverseE1.style.backgroundColor === 'red' &&
      reverseV.style.backgroundColor === 'red' &&
      reverseE2.style.backgroundColor === 'red' &&
      reverseR2.style.backgroundColor === 'red' &&
      reverseS.style.backgroundColor === 'red' &&
      reverseE3.style.backgroundColor === 'red'
    ) {
      reverseR1.style.backgroundColor = 'green';
      reverseE1.style.backgroundColor = 'green';
      reverseV.style.backgroundColor = 'green';
      reverseE2.style.backgroundColor = 'green';
      reverseR2.style.backgroundColor = 'green';
      reverseS.style.backgroundColor = 'green';
      reverseE3.style.backgroundColor = 'green';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // R
  reverseR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reverseR1.style.backgroundColor === 'red' &&
      reverseE1.style.backgroundColor === 'red' &&
      reverseV.style.backgroundColor === 'red' &&
      reverseE2.style.backgroundColor === 'red' &&
      reverseR2.style.backgroundColor === 'red' &&
      reverseS.style.backgroundColor === 'red' &&
      reverseE3.style.backgroundColor === 'red'
    ) {
      reverseR1.style.backgroundColor = 'green';
      reverseE1.style.backgroundColor = 'green';
      reverseV.style.backgroundColor = 'green';
      reverseE2.style.backgroundColor = 'green';
      reverseR2.style.backgroundColor = 'green';
      reverseS.style.backgroundColor = 'green';
      reverseE3.style.backgroundColor = 'green';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // S
  reverseS.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reverseR1.style.backgroundColor === 'red' &&
      reverseE1.style.backgroundColor === 'red' &&
      reverseV.style.backgroundColor === 'red' &&
      reverseE2.style.backgroundColor === 'red' &&
      reverseR2.style.backgroundColor === 'red' &&
      reverseS.style.backgroundColor === 'red' &&
      reverseE3.style.backgroundColor === 'red'
    ) {
      reverseR1.style.backgroundColor = 'green';
      reverseE1.style.backgroundColor = 'green';
      reverseV.style.backgroundColor = 'green';
      reverseE2.style.backgroundColor = 'green';
      reverseR2.style.backgroundColor = 'green';
      reverseS.style.backgroundColor = 'green';
      reverseE3.style.backgroundColor = 'green';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // E
  reverseE3.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reverseR1.style.backgroundColor === 'red' &&
      reverseE1.style.backgroundColor === 'red' &&
      reverseV.style.backgroundColor === 'red' &&
      reverseE2.style.backgroundColor === 'red' &&
      reverseR2.style.backgroundColor === 'red' &&
      reverseS.style.backgroundColor === 'red' &&
      reverseE3.style.backgroundColor === 'red'
    ) {
      reverseR1.style.backgroundColor = 'green';
      reverseE1.style.backgroundColor = 'green';
      reverseV.style.backgroundColor = 'green';
      reverseE2.style.backgroundColor = 'green';
      reverseR2.style.backgroundColor = 'green';
      reverseS.style.backgroundColor = 'green';
      reverseE3.style.backgroundColor = 'green';
      let strike = document.querySelector('#reverse');
      strike.classList.remove('biggerFont');
      strike.classList.add('biggerFontandStrikethrough');
    }
  });
  // MAP
    // M
    mapM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        mapM.style.backgroundColor === 'red' &&
        mapA.style.backgroundColor === 'red' &&
        mapP.style.backgroundColor === 'red'
    ) {
        mapM.style.backgroundColor = 'green';
        mapA.style.backgroundColor = 'green';
        mapP.style.backgroundColor = 'green';
        let strike = document.querySelector('#map');
        strike.classList.remove('biggerFont');
        strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    mapA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      mapM.style.backgroundColor === 'red' &&
      mapA.style.backgroundColor === 'red' &&
      mapP.style.backgroundColor === 'red'
  ) {
      mapM.style.backgroundColor = 'green';
      mapA.style.backgroundColor = 'green';
      mapP.style.backgroundColor = 'green';
      let strike = document.querySelector('#map');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // P
    mapP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      mapM.style.backgroundColor === 'red' &&
      mapA.style.backgroundColor === 'red' &&
      mapP.style.backgroundColor === 'red'
  ) {
      mapM.style.backgroundColor = 'green';
      mapA.style.backgroundColor = 'green';
      mapP.style.backgroundColor = 'green';
      let strike = document.querySelector('#map');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // SORT
    // S
    sortS.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        sortS.style.backgroundColor === 'red' &&
        sortO.style.backgroundColor === 'red' &&
        sortR.style.backgroundColor === 'red' &&
        sortT.style.backgroundColor === 'red'
    ) {
        sortS.style.backgroundColor = 'green';
        sortO.style.backgroundColor = 'green';
        sortR.style.backgroundColor = 'green';
        sortT.style.backgroundColor = 'green';
        let strike = document.querySelector('#sort');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // O
    sortO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      sortS.style.backgroundColor === 'red' &&
      sortO.style.backgroundColor === 'red' &&
      sortR.style.backgroundColor === 'red' &&
      sortT.style.backgroundColor === 'red'
  ) {
      sortS.style.backgroundColor = 'green';
      sortO.style.backgroundColor = 'green';
      sortR.style.backgroundColor = 'green';
      sortT.style.backgroundColor = 'green';
      let strike = document.querySelector('#sort');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    sortR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      sortS.style.backgroundColor === 'red' &&
      sortO.style.backgroundColor === 'red' &&
      sortR.style.backgroundColor === 'red' &&
      sortT.style.backgroundColor === 'red'
  ) {
      sortS.style.backgroundColor = 'green';
      sortO.style.backgroundColor = 'green';
      sortR.style.backgroundColor = 'green';
      sortT.style.backgroundColor = 'green';
      let strike = document.querySelector('#sort');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // T  
    sortT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      sortS.style.backgroundColor === 'red' &&
      sortO.style.backgroundColor === 'red' &&
      sortR.style.backgroundColor === 'red' &&
      sortT.style.backgroundColor === 'red'
  ) {
      sortS.style.backgroundColor = 'green';
      sortO.style.backgroundColor = 'green';
      sortR.style.backgroundColor = 'green';
      sortT.style.backgroundColor = 'green';
      let strike = document.querySelector('#sort');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });

    // REDUCE
    // R
    reduceR.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        reduceR.style.backgroundColor === 'red' &&
        reduceE1.style.backgroundColor === 'red' &&
        reduceD.style.backgroundColor === 'red' &&
        reduceU.style.backgroundColor === 'red' &&
        reduceC.style.backgroundColor === 'red' &&
        reduceE2.style.backgroundColor === 'red'
    ) {
        reduceR.style.backgroundColor = 'green';
        reduceE1.style.backgroundColor = 'green';
        reduceD.style.backgroundColor = 'green';
        reduceU.style.backgroundColor = 'green';
        reduceC.style.backgroundColor = 'green';
        reduceE2.style.backgroundColor = 'green';
        let strike = document.querySelector('#reduce');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    reduceE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reduceR.style.backgroundColor === 'red' &&
      reduceE1.style.backgroundColor === 'red' &&
      reduceD.style.backgroundColor === 'red' &&
      reduceU.style.backgroundColor === 'red' &&
      reduceC.style.backgroundColor === 'red' &&
      reduceE2.style.backgroundColor === 'red'
  ) {
      reduceR.style.backgroundColor = 'green';
      reduceE1.style.backgroundColor = 'green';
      reduceD.style.backgroundColor = 'green';
      reduceU.style.backgroundColor = 'green';
      reduceC.style.backgroundColor = 'green';
      reduceE2.style.backgroundColor = 'green';
      let strike = document.querySelector('#reduce');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // D
    reduceD.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reduceR.style.backgroundColor === 'red' &&
      reduceE1.style.backgroundColor === 'red' &&
      reduceD.style.backgroundColor === 'red' &&
      reduceU.style.backgroundColor === 'red' &&
      reduceC.style.backgroundColor === 'red' &&
      reduceE2.style.backgroundColor === 'red'
  ) {
      reduceR.style.backgroundColor = 'green';
      reduceE1.style.backgroundColor = 'green';
      reduceD.style.backgroundColor = 'green';
      reduceU.style.backgroundColor = 'green';
      reduceC.style.backgroundColor = 'green';
      reduceE2.style.backgroundColor = 'green';
      let strike = document.querySelector('#reduce');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // U
    reduceU.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reduceR.style.backgroundColor === 'red' &&
      reduceE1.style.backgroundColor === 'red' &&
      reduceD.style.backgroundColor === 'red' &&
      reduceU.style.backgroundColor === 'red' &&
      reduceC.style.backgroundColor === 'red' &&
      reduceE2.style.backgroundColor === 'red'
  ) {
      reduceR.style.backgroundColor = 'green';
      reduceE1.style.backgroundColor = 'green';
      reduceD.style.backgroundColor = 'green';
      reduceU.style.backgroundColor = 'green';
      reduceC.style.backgroundColor = 'green';
      reduceE2.style.backgroundColor = 'green';
      let strike = document.querySelector('#reduce');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // C
    reduceC.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reduceR.style.backgroundColor === 'red' &&
      reduceE1.style.backgroundColor === 'red' &&
      reduceD.style.backgroundColor === 'red' &&
      reduceU.style.backgroundColor === 'red' &&
      reduceC.style.backgroundColor === 'red' &&
      reduceE2.style.backgroundColor === 'red'
  ) {
      reduceR.style.backgroundColor = 'green';
      reduceE1.style.backgroundColor = 'green';
      reduceD.style.backgroundColor = 'green';
      reduceU.style.backgroundColor = 'green';
      reduceC.style.backgroundColor = 'green';
      reduceE2.style.backgroundColor = 'green';
      let strike = document.querySelector('#reduce');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    reduceE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      reduceR.style.backgroundColor === 'red' &&
      reduceE1.style.backgroundColor === 'red' &&
      reduceD.style.backgroundColor === 'red' &&
      reduceU.style.backgroundColor === 'red' &&
      reduceC.style.backgroundColor === 'red' &&
      reduceE2.style.backgroundColor === 'red'
  ) {
      reduceR.style.backgroundColor = 'green';
      reduceE1.style.backgroundColor = 'green';
      reduceD.style.backgroundColor = 'green';
      reduceU.style.backgroundColor = 'green';
      reduceC.style.backgroundColor = 'green';
      reduceE2.style.backgroundColor = 'green';
      let strike = document.querySelector('#reduce');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // OPERATOR
    // O
    operatorO1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        operatorO1.style.backgroundColor === 'red' &&
        operatorP.style.backgroundColor === 'red' &&
        operatorE.style.backgroundColor === 'red' &&
        operatorR1.style.backgroundColor === 'red' &&
        operatorA.style.backgroundColor === 'red' &&
        operatorT.style.backgroundColor === 'red' &&
        operatorO2.style.backgroundColor === 'red' &&
        operatorR2.style.backgroundColor === 'red'
    ) {
        operatorO1.style.backgroundColor = 'green';
        operatorP.style.backgroundColor = 'green';
        operatorE.style.backgroundColor = 'green';
        operatorR1.style.backgroundColor = 'green';
        operatorA.style.backgroundColor = 'green';
        operatorT.style.backgroundColor = 'green';
        operatorO2.style.backgroundColor = 'green';
        operatorR2.style.backgroundColor = 'green';
        let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // P
    operatorP.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      operatorO1.style.backgroundColor === 'red' &&
      operatorP.style.backgroundColor === 'red' &&
      operatorE.style.backgroundColor === 'red' &&
      operatorR1.style.backgroundColor === 'red' &&
      operatorA.style.backgroundColor === 'red' &&
      operatorT.style.backgroundColor === 'red' &&
      operatorO2.style.backgroundColor === 'red' &&
      operatorR2.style.backgroundColor === 'red'
  ) {
      operatorO1.style.backgroundColor = 'green';
      operatorP.style.backgroundColor = 'green';
      operatorE.style.backgroundColor = 'green';
      operatorR1.style.backgroundColor = 'green';
      operatorA.style.backgroundColor = 'green';
      operatorT.style.backgroundColor = 'green';
      operatorO2.style.backgroundColor = 'green';
      operatorR2.style.backgroundColor = 'green';
      let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    operatorE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      operatorO1.style.backgroundColor === 'red' &&
      operatorP.style.backgroundColor === 'red' &&
      operatorE.style.backgroundColor === 'red' &&
      operatorR1.style.backgroundColor === 'red' &&
      operatorA.style.backgroundColor === 'red' &&
      operatorT.style.backgroundColor === 'red' &&
      operatorO2.style.backgroundColor === 'red' &&
      operatorR2.style.backgroundColor === 'red'
  ) {
      operatorO1.style.backgroundColor = 'green';
      operatorP.style.backgroundColor = 'green';
      operatorE.style.backgroundColor = 'green';
      operatorR1.style.backgroundColor = 'green';
      operatorA.style.backgroundColor = 'green';
      operatorT.style.backgroundColor = 'green';
      operatorO2.style.backgroundColor = 'green';
      operatorR2.style.backgroundColor = 'green';
      let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    operatorR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      operatorO1.style.backgroundColor === 'red' &&
      operatorP.style.backgroundColor === 'red' &&
      operatorE.style.backgroundColor === 'red' &&
      operatorR1.style.backgroundColor === 'red' &&
      operatorA.style.backgroundColor === 'red' &&
      operatorT.style.backgroundColor === 'red' &&
      operatorO2.style.backgroundColor === 'red' &&
      operatorR2.style.backgroundColor === 'red'
  ) {
      operatorO1.style.backgroundColor = 'green';
      operatorP.style.backgroundColor = 'green';
      operatorE.style.backgroundColor = 'green';
      operatorR1.style.backgroundColor = 'green';
      operatorA.style.backgroundColor = 'green';
      operatorT.style.backgroundColor = 'green';
      operatorO2.style.backgroundColor = 'green';
      operatorR2.style.backgroundColor = 'green';
      let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    operatorA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      operatorO1.style.backgroundColor === 'red' &&
      operatorP.style.backgroundColor === 'red' &&
      operatorE.style.backgroundColor === 'red' &&
      operatorR1.style.backgroundColor === 'red' &&
      operatorA.style.backgroundColor === 'red' &&
      operatorT.style.backgroundColor === 'red' &&
      operatorO2.style.backgroundColor === 'red' &&
      operatorR2.style.backgroundColor === 'red'
  ) {
      operatorO1.style.backgroundColor = 'green';
      operatorP.style.backgroundColor = 'green';
      operatorE.style.backgroundColor = 'green';
      operatorR1.style.backgroundColor = 'green';
      operatorA.style.backgroundColor = 'green';
      operatorT.style.backgroundColor = 'green';
      operatorO2.style.backgroundColor = 'green';
      operatorR2.style.backgroundColor = 'green';
      let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // T
    operatorT.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      operatorO1.style.backgroundColor === 'red' &&
      operatorP.style.backgroundColor === 'red' &&
      operatorE.style.backgroundColor === 'red' &&
      operatorR1.style.backgroundColor === 'red' &&
      operatorA.style.backgroundColor === 'red' &&
      operatorT.style.backgroundColor === 'red' &&
      operatorO2.style.backgroundColor === 'red' &&
      operatorR2.style.backgroundColor === 'red'
  ) {
      operatorO1.style.backgroundColor = 'green';
      operatorP.style.backgroundColor = 'green';
      operatorE.style.backgroundColor = 'green';
      operatorR1.style.backgroundColor = 'green';
      operatorA.style.backgroundColor = 'green';
      operatorT.style.backgroundColor = 'green';
      operatorO2.style.backgroundColor = 'green';
      operatorR2.style.backgroundColor = 'green';
      let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // O
    operatorO2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      operatorO1.style.backgroundColor === 'red' &&
      operatorP.style.backgroundColor === 'red' &&
      operatorE.style.backgroundColor === 'red' &&
      operatorR1.style.backgroundColor === 'red' &&
      operatorA.style.backgroundColor === 'red' &&
      operatorT.style.backgroundColor === 'red' &&
      operatorO2.style.backgroundColor === 'red' &&
      operatorR2.style.backgroundColor === 'red'
  ) {
      operatorO1.style.backgroundColor = 'green';
      operatorP.style.backgroundColor = 'green';
      operatorE.style.backgroundColor = 'green';
      operatorR1.style.backgroundColor = 'green';
      operatorA.style.backgroundColor = 'green';
      operatorT.style.backgroundColor = 'green';
      operatorO2.style.backgroundColor = 'green';
      operatorR2.style.backgroundColor = 'green';
      let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    operatorR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      operatorO1.style.backgroundColor === 'red' &&
      operatorP.style.backgroundColor === 'red' &&
      operatorE.style.backgroundColor === 'red' &&
      operatorR1.style.backgroundColor === 'red' &&
      operatorA.style.backgroundColor === 'red' &&
      operatorT.style.backgroundColor === 'red' &&
      operatorO2.style.backgroundColor === 'red' &&
      operatorR2.style.backgroundColor === 'red'
  ) {
      operatorO1.style.backgroundColor = 'green';
      operatorP.style.backgroundColor = 'green';
      operatorE.style.backgroundColor = 'green';
      operatorR1.style.backgroundColor = 'green';
      operatorA.style.backgroundColor = 'green';
      operatorT.style.backgroundColor = 'green';
      operatorO2.style.backgroundColor = 'green';
      operatorR2.style.backgroundColor = 'green';
      let strike = document.querySelector('#operator');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // BOOLEAN 
    // B
    booleanB.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        booleanB.style.backgroundColor === 'red' &&
        booleanO1.style.backgroundColor === 'red' &&
        booleanO2.style.backgroundColor === 'red' &&
        booleanL.style.backgroundColor === 'red' &&
        booleanE.style.backgroundColor === 'red' &&
        booleanA.style.backgroundColor === 'red' &&
        booleanN.style.backgroundColor === 'red' 
    ) {
        booleanB.style.backgroundColor = 'green';
        booleanO1.style.backgroundColor = 'green';
        booleanO2.style.backgroundColor = 'green';
        booleanL.style.backgroundColor = 'green';
        booleanE.style.backgroundColor = 'green';
        booleanA.style.backgroundColor = 'green';
        booleanN.style.backgroundColor = 'green';
        let strike = document.querySelector('#boolean');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // O
    booleanO1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      booleanB.style.backgroundColor === 'red' &&
      booleanO1.style.backgroundColor === 'red' &&
      booleanO2.style.backgroundColor === 'red' &&
      booleanL.style.backgroundColor === 'red' &&
      booleanE.style.backgroundColor === 'red' &&
      booleanA.style.backgroundColor === 'red' &&
      booleanN.style.backgroundColor === 'red' 
  ) {
      booleanB.style.backgroundColor = 'green';
      booleanO1.style.backgroundColor = 'green';
      booleanO2.style.backgroundColor = 'green';
      booleanL.style.backgroundColor = 'green';
      booleanE.style.backgroundColor = 'green';
      booleanA.style.backgroundColor = 'green';
      booleanN.style.backgroundColor = 'green';
      let strike = document.querySelector('#boolean');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // O
    booleanO2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      booleanB.style.backgroundColor === 'red' &&
      booleanO1.style.backgroundColor === 'red' &&
      booleanO2.style.backgroundColor === 'red' &&
      booleanL.style.backgroundColor === 'red' &&
      booleanE.style.backgroundColor === 'red' &&
      booleanA.style.backgroundColor === 'red' &&
      booleanN.style.backgroundColor === 'red' 
  ) {
      booleanB.style.backgroundColor = 'green';
      booleanO1.style.backgroundColor = 'green';
      booleanO2.style.backgroundColor = 'green';
      booleanL.style.backgroundColor = 'green';
      booleanE.style.backgroundColor = 'green';
      booleanA.style.backgroundColor = 'green';
      booleanN.style.backgroundColor = 'green';
      let strike = document.querySelector('#boolean');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // L
    booleanL.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      booleanB.style.backgroundColor === 'red' &&
      booleanO1.style.backgroundColor === 'red' &&
      booleanO2.style.backgroundColor === 'red' &&
      booleanL.style.backgroundColor === 'red' &&
      booleanE.style.backgroundColor === 'red' &&
      booleanA.style.backgroundColor === 'red' &&
      booleanN.style.backgroundColor === 'red' 
  ) {
      booleanB.style.backgroundColor = 'green';
      booleanO1.style.backgroundColor = 'green';
      booleanO2.style.backgroundColor = 'green';
      booleanL.style.backgroundColor = 'green';
      booleanE.style.backgroundColor = 'green';
      booleanA.style.backgroundColor = 'green';
      booleanN.style.backgroundColor = 'green';
      let strike = document.querySelector('#boolean');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    booleanE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      booleanB.style.backgroundColor === 'red' &&
      booleanO1.style.backgroundColor === 'red' &&
      booleanO2.style.backgroundColor === 'red' &&
      booleanL.style.backgroundColor === 'red' &&
      booleanE.style.backgroundColor === 'red' &&
      booleanA.style.backgroundColor === 'red' &&
      booleanN.style.backgroundColor === 'red' 
  ) {
      booleanB.style.backgroundColor = 'green';
      booleanO1.style.backgroundColor = 'green';
      booleanO2.style.backgroundColor = 'green';
      booleanL.style.backgroundColor = 'green';
      booleanE.style.backgroundColor = 'green';
      booleanA.style.backgroundColor = 'green';
      booleanN.style.backgroundColor = 'green';
      let strike = document.querySelector('#boolean');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    booleanA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      booleanB.style.backgroundColor === 'red' &&
      booleanO1.style.backgroundColor === 'red' &&
      booleanO2.style.backgroundColor === 'red' &&
      booleanL.style.backgroundColor === 'red' &&
      booleanE.style.backgroundColor === 'red' &&
      booleanA.style.backgroundColor === 'red' &&
      booleanN.style.backgroundColor === 'red' 
  ) {
      booleanB.style.backgroundColor = 'green';
      booleanO1.style.backgroundColor = 'green';
      booleanO2.style.backgroundColor = 'green';
      booleanL.style.backgroundColor = 'green';
      booleanE.style.backgroundColor = 'green';
      booleanA.style.backgroundColor = 'green';
      booleanN.style.backgroundColor = 'green';
      let strike = document.querySelector('#boolean');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    booleanN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      booleanB.style.backgroundColor === 'red' &&
      booleanO1.style.backgroundColor === 'red' &&
      booleanO2.style.backgroundColor === 'red' &&
      booleanL.style.backgroundColor === 'red' &&
      booleanE.style.backgroundColor === 'red' &&
      booleanA.style.backgroundColor === 'red' &&
      booleanN.style.backgroundColor === 'red' 
  ) {
      booleanB.style.backgroundColor = 'green';
      booleanO1.style.backgroundColor = 'green';
      booleanO2.style.backgroundColor = 'green';
      booleanL.style.backgroundColor = 'green';
      booleanE.style.backgroundColor = 'green';
      booleanA.style.backgroundColor = 'green';
      booleanN.style.backgroundColor = 'green';
      let strike = document.querySelector('#boolean');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // REMAINDER
    // R
    remainderR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
        remainderR1.style.backgroundColor === 'red' &&
        remainderE1.style.backgroundColor === 'red' &&
        remainderM.style.backgroundColor === 'red' &&
        remainderA.style.backgroundColor === 'red' &&
        remainderI.style.backgroundColor === 'red' &&
        remainderN.style.backgroundColor === 'red' &&
        remainderD.style.backgroundColor === 'red' &&
        remainderE2.style.backgroundColor === 'red' && 
        remainderR2.style.backgroundColor === 'red'
    ) {
      remainderR1.style.backgroundColor === 'green' 
      remainderE1.style.backgroundColor === 'green' 
      remainderM.style.backgroundColor === 'green' 
      remainderA.style.backgroundColor === 'green'
      remainderI.style.backgroundColor === 'green' 
      remainderN.style.backgroundColor === 'green' 
      remainderD.style.backgroundColor === 'green' 
      remainderE2.style.backgroundColor === 'green'
      remainderR2.style.backgroundColor === 'green'
        let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    remainderE1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // M
    remainderM.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    remainderA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // I
    remainderI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // N
    remainderN.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // D
    remainderD.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    remainderE2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    remainderR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      remainderR1.style.backgroundColor === 'red' &&
      remainderE1.style.backgroundColor === 'red' &&
      remainderM.style.backgroundColor === 'red' &&
      remainderA.style.backgroundColor === 'red' &&
      remainderI.style.backgroundColor === 'red' &&
      remainderN.style.backgroundColor === 'red' &&
      remainderD.style.backgroundColor === 'red' &&
      remainderE2.style.backgroundColor === 'red' && 
      remainderR2.style.backgroundColor === 'red'
  ) {
    remainderR1.style.backgroundColor === 'green' 
    remainderE1.style.backgroundColor === 'green' 
    remainderM.style.backgroundColor === 'green' 
    remainderA.style.backgroundColor === 'green'
    remainderI.style.backgroundColor === 'green' 
    remainderN.style.backgroundColor === 'green' 
    remainderD.style.backgroundColor === 'green' 
    remainderE2.style.backgroundColor === 'green'
    remainderR2.style.backgroundColor === 'green'
      let strike = document.querySelector('#remainder');
        strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });

  // CONDITIONAL
  // C
  conditionalC.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
      conditionalC.style.backgroundColor === 'red' &&
      conditionalO1.style.backgroundColor === 'red' &&
      conditionalN1.style.backgroundColor === 'red' &&
      conditionalD.style.backgroundColor === 'red' &&
      conditionalI1.style.backgroundColor === 'red' &&
      conditionalT.style.backgroundColor === 'red' &&
      conditionalI2.style.backgroundColor === 'red' &&
      conditionalO2.style.backgroundColor === 'red' &&
      conditionalN2.style.backgroundColor === 'red' &&
      conditionalA.style.backgroundColor === 'red' &&
      conditionalL.style.backgroundColor === 'red'
  ) {
    conditionalC.style.backgroundColor === 'green'
    conditionalO1.style.backgroundColor === 'green'
    conditionalN1.style.backgroundColor === 'green'
    conditionalD.style.backgroundColor === 'green'
    conditionalI1.style.backgroundColor === 'green'
    conditionalT.style.backgroundColor === 'green'
    conditionalI2.style.backgroundColor === 'green'
    conditionalO2.style.backgroundColor === 'green' 
    conditionalN2.style.backgroundColor === 'green'
    conditionalA.style.backgroundColor === 'green' 
    conditionalL.style.backgroundColor === 'green'
      let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
// O
conditionalO1.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'red';
if (
  conditionalC.style.backgroundColor === 'red' &&
  conditionalO1.style.backgroundColor === 'red' &&
  conditionalN1.style.backgroundColor === 'red' &&
  conditionalD.style.backgroundColor === 'red' &&
  conditionalI1.style.backgroundColor === 'red' &&
  conditionalT.style.backgroundColor === 'red' &&
  conditionalI2.style.backgroundColor === 'red' &&
  conditionalO2.style.backgroundColor === 'red' &&
  conditionalN2.style.backgroundColor === 'red' &&
  conditionalA.style.backgroundColor === 'red' &&
  conditionalL.style.backgroundColor === 'red'
) {
conditionalC.style.backgroundColor === 'green'
conditionalO1.style.backgroundColor === 'green'
conditionalN1.style.backgroundColor === 'green'
conditionalD.style.backgroundColor === 'green'
conditionalI1.style.backgroundColor === 'green'
conditionalT.style.backgroundColor === 'green'
conditionalI2.style.backgroundColor === 'green'
conditionalO2.style.backgroundColor === 'green' 
conditionalN2.style.backgroundColor === 'green'
conditionalA.style.backgroundColor === 'green' 
conditionalL.style.backgroundColor === 'green'
  let strike = document.querySelector('#conditional');
    strike.classList.remove('biggerFont');
strike.classList.add('biggerFontandStrikethrough');
}
});
// N
conditionalN1.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'red';
if (
  conditionalC.style.backgroundColor === 'red' &&
  conditionalO1.style.backgroundColor === 'red' &&
  conditionalN1.style.backgroundColor === 'red' &&
  conditionalD.style.backgroundColor === 'red' &&
  conditionalI1.style.backgroundColor === 'red' &&
  conditionalT.style.backgroundColor === 'red' &&
  conditionalI2.style.backgroundColor === 'red' &&
  conditionalO2.style.backgroundColor === 'red' &&
  conditionalN2.style.backgroundColor === 'red' &&
  conditionalA.style.backgroundColor === 'red' &&
  conditionalL.style.backgroundColor === 'red'
) {
conditionalC.style.backgroundColor === 'green'
conditionalO1.style.backgroundColor === 'green'
conditionalN1.style.backgroundColor === 'green'
conditionalD.style.backgroundColor === 'green'
conditionalI1.style.backgroundColor === 'green'
conditionalT.style.backgroundColor === 'green'
conditionalI2.style.backgroundColor === 'green'
conditionalO2.style.backgroundColor === 'green' 
conditionalN2.style.backgroundColor === 'green'
conditionalA.style.backgroundColor === 'green' 
conditionalL.style.backgroundColor === 'green'
  let strike = document.querySelector('#conditional');
    strike.classList.remove('biggerFont');
strike.classList.add('biggerFontandStrikethrough');
}
});
// D
conditionalD.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'red';
if (
  conditionalC.style.backgroundColor === 'red' &&
  conditionalO1.style.backgroundColor === 'red' &&
  conditionalN1.style.backgroundColor === 'red' &&
  conditionalD.style.backgroundColor === 'red' &&
  conditionalI1.style.backgroundColor === 'red' &&
  conditionalT.style.backgroundColor === 'red' &&
  conditionalI2.style.backgroundColor === 'red' &&
  conditionalO2.style.backgroundColor === 'red' &&
  conditionalN2.style.backgroundColor === 'red' &&
  conditionalA.style.backgroundColor === 'red' &&
  conditionalL.style.backgroundColor === 'red'
) {
conditionalC.style.backgroundColor === 'green'
conditionalO1.style.backgroundColor === 'green'
conditionalN1.style.backgroundColor === 'green'
conditionalD.style.backgroundColor === 'green'
conditionalI1.style.backgroundColor === 'green'
conditionalT.style.backgroundColor === 'green'
conditionalI2.style.backgroundColor === 'green'
conditionalO2.style.backgroundColor === 'green' 
conditionalN2.style.backgroundColor === 'green'
conditionalA.style.backgroundColor === 'green' 
conditionalL.style.backgroundColor === 'green'
  let strike = document.querySelector('#conditional');
    strike.classList.remove('biggerFont');
strike.classList.add('biggerFontandStrikethrough');
}
});
// I
conditionalI1.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'red';
if (
  conditionalC.style.backgroundColor === 'red' &&
  conditionalO1.style.backgroundColor === 'red' &&
  conditionalN1.style.backgroundColor === 'red' &&
  conditionalD.style.backgroundColor === 'red' &&
  conditionalI1.style.backgroundColor === 'red' &&
  conditionalT.style.backgroundColor === 'red' &&
  conditionalI2.style.backgroundColor === 'red' &&
  conditionalO2.style.backgroundColor === 'red' &&
  conditionalN2.style.backgroundColor === 'red' &&
  conditionalA.style.backgroundColor === 'red' &&
  conditionalL.style.backgroundColor === 'red'
) {
conditionalC.style.backgroundColor === 'green'
conditionalO1.style.backgroundColor === 'green'
conditionalN1.style.backgroundColor === 'green'
conditionalD.style.backgroundColor === 'green'
conditionalI1.style.backgroundColor === 'green'
conditionalT.style.backgroundColor === 'green'
conditionalI2.style.backgroundColor === 'green'
conditionalO2.style.backgroundColor === 'green' 
conditionalN2.style.backgroundColor === 'green'
conditionalA.style.backgroundColor === 'green' 
conditionalL.style.backgroundColor === 'green'
  let strike = document.querySelector('#conditional');
    strike.classList.remove('biggerFont');
strike.classList.add('biggerFontandStrikethrough');
}
});
// T
conditionalT.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'red';
if (
  conditionalC.style.backgroundColor === 'red' &&
  conditionalO1.style.backgroundColor === 'red' &&
  conditionalN1.style.backgroundColor === 'red' &&
  conditionalD.style.backgroundColor === 'red' &&
  conditionalI1.style.backgroundColor === 'red' &&
  conditionalT.style.backgroundColor === 'red' &&
  conditionalI2.style.backgroundColor === 'red' &&
  conditionalO2.style.backgroundColor === 'red' &&
  conditionalN2.style.backgroundColor === 'red' &&
  conditionalA.style.backgroundColor === 'red' &&
  conditionalL.style.backgroundColor === 'red'
) {
conditionalC.style.backgroundColor === 'green'
conditionalO1.style.backgroundColor === 'green'
conditionalN1.style.backgroundColor === 'green'
conditionalD.style.backgroundColor === 'green'
conditionalI1.style.backgroundColor === 'green'
conditionalT.style.backgroundColor === 'green'
conditionalI2.style.backgroundColor === 'green'
conditionalO2.style.backgroundColor === 'green' 
conditionalN2.style.backgroundColor === 'green'
conditionalA.style.backgroundColor === 'green' 
conditionalL.style.backgroundColor === 'green'
  let strike = document.querySelector('#conditional');
    strike.classList.remove('biggerFont');
strike.classList.add('biggerFontandStrikethrough');
}
});
// I
conditionalI2.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'red';
if (
  conditionalC.style.backgroundColor === 'red' &&
  conditionalO1.style.backgroundColor === 'red' &&
  conditionalN1.style.backgroundColor === 'red' &&
  conditionalD.style.backgroundColor === 'red' &&
  conditionalI1.style.backgroundColor === 'red' &&
  conditionalT.style.backgroundColor === 'red' &&
  conditionalI2.style.backgroundColor === 'red' &&
  conditionalO2.style.backgroundColor === 'red' &&
  conditionalN2.style.backgroundColor === 'red' &&
  conditionalA.style.backgroundColor === 'red' &&
  conditionalL.style.backgroundColor === 'red'
) {
conditionalC.style.backgroundColor === 'green'
conditionalO1.style.backgroundColor === 'green'
conditionalN1.style.backgroundColor === 'green'
conditionalD.style.backgroundColor === 'green'
conditionalI1.style.backgroundColor === 'green'
conditionalT.style.backgroundColor === 'green'
conditionalI2.style.backgroundColor === 'green'
conditionalO2.style.backgroundColor === 'green' 
conditionalN2.style.backgroundColor === 'green'
conditionalA.style.backgroundColor === 'green' 
conditionalL.style.backgroundColor === 'green'
  let strike = document.querySelector('#conditional');
    strike.classList.remove('biggerFont');
strike.classList.add('biggerFontandStrikethrough');
}
});
// O
conditionalO2.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'red';
if (
  conditionalC.style.backgroundColor === 'red' &&
  conditionalO1.style.backgroundColor === 'red' &&
  conditionalN1.style.backgroundColor === 'red' &&
  conditionalD.style.backgroundColor === 'red' &&
  conditionalI1.style.backgroundColor === 'red' &&
  conditionalT.style.backgroundColor === 'red' &&
  conditionalI2.style.backgroundColor === 'red' &&
  conditionalO2.style.backgroundColor === 'red' &&
  conditionalN2.style.backgroundColor === 'red' &&
  conditionalA.style.backgroundColor === 'red' &&
  conditionalL.style.backgroundColor === 'red'
) {
conditionalC.style.backgroundColor === 'green'
conditionalO1.style.backgroundColor === 'green'
conditionalN1.style.backgroundColor === 'green'
conditionalD.style.backgroundColor === 'green'
conditionalI1.style.backgroundColor === 'green'
conditionalT.style.backgroundColor === 'green'
conditionalI2.style.backgroundColor === 'green'
conditionalO2.style.backgroundColor === 'green' 
conditionalN2.style.backgroundColor === 'green'
conditionalA.style.backgroundColor === 'green' 
conditionalL.style.backgroundColor === 'green'
  let strike = document.querySelector('#conditional');
    strike.classList.remove('biggerFont');
strike.classList.add('biggerFontandStrikethrough');
}
});
  // N
  conditionalN2.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    conditionalC.style.backgroundColor === 'red' &&
    conditionalO1.style.backgroundColor === 'red' &&
    conditionalN1.style.backgroundColor === 'red' &&
    conditionalD.style.backgroundColor === 'red' &&
    conditionalI1.style.backgroundColor === 'red' &&
    conditionalT.style.backgroundColor === 'red' &&
    conditionalI2.style.backgroundColor === 'red' &&
    conditionalO2.style.backgroundColor === 'red' &&
    conditionalN2.style.backgroundColor === 'red' &&
    conditionalA.style.backgroundColor === 'red' &&
    conditionalL.style.backgroundColor === 'red'
) {
  conditionalC.style.backgroundColor === 'green'
  conditionalO1.style.backgroundColor === 'green'
  conditionalN1.style.backgroundColor === 'green'
  conditionalD.style.backgroundColor === 'green'
  conditionalI1.style.backgroundColor === 'green'
  conditionalT.style.backgroundColor === 'green'
  conditionalI2.style.backgroundColor === 'green'
  conditionalO2.style.backgroundColor === 'green' 
  conditionalN2.style.backgroundColor === 'green'
  conditionalA.style.backgroundColor === 'green' 
  conditionalL.style.backgroundColor === 'green'
    let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // A
  conditionalA.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    conditionalC.style.backgroundColor === 'red' &&
    conditionalO1.style.backgroundColor === 'red' &&
    conditionalN1.style.backgroundColor === 'red' &&
    conditionalD.style.backgroundColor === 'red' &&
    conditionalI1.style.backgroundColor === 'red' &&
    conditionalT.style.backgroundColor === 'red' &&
    conditionalI2.style.backgroundColor === 'red' &&
    conditionalO2.style.backgroundColor === 'red' &&
    conditionalN2.style.backgroundColor === 'red' &&
    conditionalA.style.backgroundColor === 'red' &&
    conditionalL.style.backgroundColor === 'red'
) {
  conditionalC.style.backgroundColor === 'green'
  conditionalO1.style.backgroundColor === 'green'
  conditionalN1.style.backgroundColor === 'green'
  conditionalD.style.backgroundColor === 'green'
  conditionalI1.style.backgroundColor === 'green'
  conditionalT.style.backgroundColor === 'green'
  conditionalI2.style.backgroundColor === 'green'
  conditionalO2.style.backgroundColor === 'green' 
  conditionalN2.style.backgroundColor === 'green'
  conditionalA.style.backgroundColor === 'green' 
  conditionalL.style.backgroundColor === 'green'
    let strike = document.querySelector('#conditional');
      strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // L
  conditionalL.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    conditionalC.style.backgroundColor === 'red' &&
    conditionalO1.style.backgroundColor === 'red' &&
    conditionalN1.style.backgroundColor === 'red' &&
    conditionalD.style.backgroundColor === 'red' &&
    conditionalI1.style.backgroundColor === 'red' &&
    conditionalT.style.backgroundColor === 'red' &&
    conditionalI2.style.backgroundColor === 'red' &&
    conditionalO2.style.backgroundColor === 'red' &&
    conditionalN2.style.backgroundColor === 'red' &&
    conditionalA.style.backgroundColor === 'red' &&
    conditionalL.style.backgroundColor === 'red'
) {
  conditionalC.style.backgroundColor === 'green'
  conditionalO1.style.backgroundColor === 'green'
  conditionalN1.style.backgroundColor === 'green'
  conditionalD.style.backgroundColor === 'green'
  conditionalI1.style.backgroundColor === 'green'
  conditionalT.style.backgroundColor === 'green'
  conditionalI2.style.backgroundColor === 'green'
  conditionalO2.style.backgroundColor === 'green' 
  conditionalN2.style.backgroundColor === 'green'
  conditionalA.style.backgroundColor === 'green' 
  conditionalL.style.backgroundColor === 'green'
    let strike = document.querySelector('#conditional');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // FUNCTION
  // F
  functionF.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
  functionF.style.backgroundColor === 'red' &&
  functionU.style.backgroundColor === 'red' &&
  functionN1.style.backgroundColor === 'red' &&
  functionC.style.backgroundColor === 'red' &&
  functionT.style.backgroundColor === 'red' &&
  functionI.style.backgroundColor === 'red' &&
  functionO.style.backgroundColor === 'red' &&
  functionN2.style.backgroundColor === 'red' 
  ) {
    functionF.style.backgroundColor === 'green'
    functionU.style.backgroundColor === 'green'
    functionN1.style.backgroundColor === 'green'
    functionC.style.backgroundColor === 'green'
    functionT.style.backgroundColor === 'green'
    functionI.style.backgroundColor === 'green'
    functionO.style.backgroundColor === 'green'
    functionN2.style.backgroundColor === 'green' 
  let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // U
  functionU.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    functionF.style.backgroundColor === 'red' &&
    functionU.style.backgroundColor === 'red' &&
    functionN1.style.backgroundColor === 'red' &&
    functionC.style.backgroundColor === 'red' &&
    functionT.style.backgroundColor === 'red' &&
    functionI.style.backgroundColor === 'red' &&
    functionO.style.backgroundColor === 'red' &&
    functionN2.style.backgroundColor === 'red' 
    ) {
      functionF.style.backgroundColor === 'green'
      functionU.style.backgroundColor === 'green'
      functionN1.style.backgroundColor === 'green'
      functionC.style.backgroundColor === 'green'
      functionT.style.backgroundColor === 'green'
      functionI.style.backgroundColor === 'green'
      functionO.style.backgroundColor === 'green'
      functionN2.style.backgroundColor === 'green' 
    let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // N
  functionN1.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    functionF.style.backgroundColor === 'red' &&
    functionU.style.backgroundColor === 'red' &&
    functionN1.style.backgroundColor === 'red' &&
    functionC.style.backgroundColor === 'red' &&
    functionT.style.backgroundColor === 'red' &&
    functionI.style.backgroundColor === 'red' &&
    functionO.style.backgroundColor === 'red' &&
    functionN2.style.backgroundColor === 'red' 
    ) {
      functionF.style.backgroundColor === 'green'
      functionU.style.backgroundColor === 'green'
      functionN1.style.backgroundColor === 'green'
      functionC.style.backgroundColor === 'green'
      functionT.style.backgroundColor === 'green'
      functionI.style.backgroundColor === 'green'
      functionO.style.backgroundColor === 'green'
      functionN2.style.backgroundColor === 'green' 
    let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // C
  functionC.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    functionF.style.backgroundColor === 'red' &&
    functionU.style.backgroundColor === 'red' &&
    functionN1.style.backgroundColor === 'red' &&
    functionC.style.backgroundColor === 'red' &&
    functionT.style.backgroundColor === 'red' &&
    functionI.style.backgroundColor === 'red' &&
    functionO.style.backgroundColor === 'red' &&
    functionN2.style.backgroundColor === 'red' 
    ) {
      functionF.style.backgroundColor === 'green'
      functionU.style.backgroundColor === 'green'
      functionN1.style.backgroundColor === 'green'
      functionC.style.backgroundColor === 'green'
      functionT.style.backgroundColor === 'green'
      functionI.style.backgroundColor === 'green'
      functionO.style.backgroundColor === 'green'
      functionN2.style.backgroundColor === 'green' 
    let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // T
  functionT.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    functionF.style.backgroundColor === 'red' &&
    functionU.style.backgroundColor === 'red' &&
    functionN1.style.backgroundColor === 'red' &&
    functionC.style.backgroundColor === 'red' &&
    functionT.style.backgroundColor === 'red' &&
    functionI.style.backgroundColor === 'red' &&
    functionO.style.backgroundColor === 'red' &&
    functionN2.style.backgroundColor === 'red' 
    ) {
      functionF.style.backgroundColor === 'green'
      functionU.style.backgroundColor === 'green'
      functionN1.style.backgroundColor === 'green'
      functionC.style.backgroundColor === 'green'
      functionT.style.backgroundColor === 'green'
      functionI.style.backgroundColor === 'green'
      functionO.style.backgroundColor === 'green'
      functionN2.style.backgroundColor === 'green' 
    let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // I
  functionI.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    functionF.style.backgroundColor === 'red' &&
    functionU.style.backgroundColor === 'red' &&
    functionN1.style.backgroundColor === 'red' &&
    functionC.style.backgroundColor === 'red' &&
    functionT.style.backgroundColor === 'red' &&
    functionI.style.backgroundColor === 'red' &&
    functionO.style.backgroundColor === 'red' &&
    functionN2.style.backgroundColor === 'red' 
    ) {
      functionF.style.backgroundColor === 'green'
      functionU.style.backgroundColor === 'green'
      functionN1.style.backgroundColor === 'green'
      functionC.style.backgroundColor === 'green'
      functionT.style.backgroundColor === 'green'
      functionI.style.backgroundColor === 'green'
      functionO.style.backgroundColor === 'green'
      functionN2.style.backgroundColor === 'green' 
    let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // O
  functionO.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    functionF.style.backgroundColor === 'red' &&
    functionU.style.backgroundColor === 'red' &&
    functionN1.style.backgroundColor === 'red' &&
    functionC.style.backgroundColor === 'red' &&
    functionT.style.backgroundColor === 'red' &&
    functionI.style.backgroundColor === 'red' &&
    functionO.style.backgroundColor === 'red' &&
    functionN2.style.backgroundColor === 'red' 
    ) {
      functionF.style.backgroundColor === 'green'
      functionU.style.backgroundColor === 'green'
      functionN1.style.backgroundColor === 'green'
      functionC.style.backgroundColor === 'green'
      functionT.style.backgroundColor === 'green'
      functionI.style.backgroundColor === 'green'
      functionO.style.backgroundColor === 'green'
      functionN2.style.backgroundColor === 'green' 
    let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // N
  functionN2.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    functionF.style.backgroundColor === 'red' &&
    functionU.style.backgroundColor === 'red' &&
    functionN1.style.backgroundColor === 'red' &&
    functionC.style.backgroundColor === 'red' &&
    functionT.style.backgroundColor === 'red' &&
    functionI.style.backgroundColor === 'red' &&
    functionO.style.backgroundColor === 'red' &&
    functionN2.style.backgroundColor === 'red' 
    ) {
      functionF.style.backgroundColor === 'green'
      functionU.style.backgroundColor === 'green'
      functionN1.style.backgroundColor === 'green'
      functionC.style.backgroundColor === 'green'
      functionT.style.backgroundColor === 'green'
      functionI.style.backgroundColor === 'green'
      functionO.style.backgroundColor === 'green'
      functionN2.style.backgroundColor === 'green' 
    let strike = document.querySelector('#function');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // CLASS
  // C
  classC.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    classC.style.backgroundColor === 'red' &&
    classL.style.backgroundColor === 'red' &&
    classA.style.backgroundColor === 'red' &&
    classS1.style.backgroundColor === 'red' &&
    classS2.style.backgroundColor === 'red' 
    ) {
      classC.style.backgroundColor === 'green'
      classL.style.backgroundColor === 'green'
      classA.style.backgroundColor === 'green'
      classS1.style.backgroundColor === 'green'
      classS2.style.backgroundColor === 'green'
    let strike = document.querySelector('#class');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // L
  classL.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    classC.style.backgroundColor === 'red' &&
    classL.style.backgroundColor === 'red' &&
    classA.style.backgroundColor === 'red' &&
    classS1.style.backgroundColor === 'red' &&
    classS2.style.backgroundColor === 'red' 
    ) {
      classC.style.backgroundColor === 'green'
      classL.style.backgroundColor === 'green'
      classA.style.backgroundColor === 'green'
      classS1.style.backgroundColor === 'green'
      classS2.style.backgroundColor === 'green'
    let strike = document.querySelector('#class');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // A
  classA.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    classC.style.backgroundColor === 'red' &&
    classL.style.backgroundColor === 'red' &&
    classA.style.backgroundColor === 'red' &&
    classS1.style.backgroundColor === 'red' &&
    classS2.style.backgroundColor === 'red' 
    ) {
      classC.style.backgroundColor === 'green'
      classL.style.backgroundColor === 'green'
      classA.style.backgroundColor === 'green'
      classS1.style.backgroundColor === 'green'
      classS2.style.backgroundColor === 'green'
    let strike = document.querySelector('#class');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
  // S
  classS1.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red';
  if (
    classC.style.backgroundColor === 'red' &&
    classL.style.backgroundColor === 'red' &&
    classA.style.backgroundColor === 'red' &&
    classS1.style.backgroundColor === 'red' &&
    classS2.style.backgroundColor === 'red' 
    ) {
      classC.style.backgroundColor === 'green'
      classL.style.backgroundColor === 'green'
      classA.style.backgroundColor === 'green'
      classS1.style.backgroundColor === 'green'
      classS2.style.backgroundColor === 'green'
    let strike = document.querySelector('#class');
  strike.classList.remove('biggerFont');
  strike.classList.add('biggerFontandStrikethrough');
  }
  });
    // S
    classS2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      classC.style.backgroundColor === 'red' &&
      classL.style.backgroundColor === 'red' &&
      classA.style.backgroundColor === 'red' &&
      classS1.style.backgroundColor === 'red' &&
      classS2.style.backgroundColor === 'red' 
      ) {
        classC.style.backgroundColor === 'green'
        classL.style.backgroundColor === 'green'
        classA.style.backgroundColor === 'green'
        classS1.style.backgroundColor === 'green'
        classS2.style.backgroundColor === 'green'
      let strike = document.querySelector('#class');
    strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    //ITERATOR
    // I
    iteratorI.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
      let strike = document.querySelector('#iterator');
    strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // T
    iteratorT1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
      let strike = document.querySelector('#iterator');
    strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // E
    iteratorE.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
      let strike = document.querySelector('#iterator');
    strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    iteratorR1.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
      let strike = document.querySelector('#iterator');
    strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // A
    iteratorA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
      let strike = document.querySelector('#iterator');
    strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // T
    iteratorT2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
      let strike = document.querySelector('#iterator');
    strike.classList.remove('biggerFont');
    strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // O
    iteratorO.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
      let strike = document.querySelector('#iterator');
        strike.classList.remove('biggerFont');
        strike.classList.add('biggerFontandStrikethrough');
    }
    });
    // R
    iteratorR2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    if (
      iteratorI.style.backgroundColor === 'red' &&
      iteratorT1.style.backgroundColor === 'red' &&
      iteratorE.style.backgroundColor === 'red' &&
      iteratorR1.style.backgroundColor === 'red' &&
      iteratorA.style.backgroundColor === 'red' &&
      iteratorT2.style.backgroundColor === 'red' &&
      iteratorO.style.backgroundColor === 'red' &&
      iteratorR2.style.backgroundColor === 'red' 
      ) {
        iteratorI.style.backgroundColor === 'green'
        iteratorT1.style.backgroundColor === 'green'
        iteratorE.style.backgroundColor === 'green'
        iteratorR1.style.backgroundColor === 'green'
        iteratorA.style.backgroundColor === 'green'
        iteratorT2.style.backgroundColor === 'green'
        iteratorO.style.backgroundColor === 'green' 
        iteratorR2.style.backgroundColor === 'green' 
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



