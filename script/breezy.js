// LEVEL BREEZY   --------------------------------------->
// THIS CREATES THE BOARD/LAYOUT
const startGameLevelOne = () => {
  // everything in the header
  let headerContainer = document.createElement('div');
  let h1Header = document.createElement('h1');

  h1Header.setAttribute('id', 'header');
  h1Header.innerText = 'WordSearch Countdown • Breezy Level';
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
        let videoAte = document.createElement("div")
        videoAte.style.width = "480px"
        videoAte.style.marginBottom = ".5em"
        let iFrame = document.createElement("iFrame")
        iFrame.setAttribute("allow", "fullscreen")
        iFrame.setAttribute("frameBorder", "0")
        iFrame.setAttribute("height", "270")
        iFrame.setAttribute("src","https://giphy.com/embed/xU7TNYYXP2UWnYUqPC/video")
        iFrame.setAttribute("width", "480")
        document.getElementById("vid").appendChild(iFrame)
        let winText = document.createElement("p")
        winText.innerText = "🏆 YOU DID IT! 🏆"
        winText.className = "rules-text"
        winText.style.color = "black"
        document.getElementById("vid").appendChild(winText)
        document.getElementById("rules-box").style.display = "none"
        
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

// GENERATE WORDS
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


// INITIATE LEVEL PROMPT
let startLevel1 = document.querySelector('#startLevel1');
startLevel1.addEventListener('click', function () {
  document.querySelector('#button-div').style.display = 'none';
  document.querySelector('#header-div').style.display = 'none';
  startGameLevelOne();
  generateNamesOne();
});
