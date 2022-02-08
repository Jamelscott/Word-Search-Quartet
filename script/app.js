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
  containerA.setAttribute('id', 'container-a');
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

  let playagainButton = document.createElement('button');
  playagainButton.setAttribute('id', 'playAgainButton');
  playagainButton.setAttribute('class', 'button-invisible');
  playagainButton.innerText = 'RETURN TO MAIN MENU';
  document.body.appendChild(playagainButton);

  // REMOVE MAIN MENU
  document.getElementById('playAgainButton').addEventListener('click', () => {
    document.querySelector('#startLevel1').style.display = 'inline';
    document.querySelector('#startLevel2').style.display = 'inline';
    document.querySelector('#startLevel3').style.display = 'inline';
    document.querySelector('#chooseText').style.display = 'block';
    document.querySelector('#chooseText').style.display = 'block';
    document.getElementById('playAgainButton').remove();

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
    singleBlock.classList.add('singleBlock');
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
        .getElementById('playAgainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('playAgainButton')
        .classList.add('button-visible');
      let youlost = document.createElement('p');
      youlost.classList.add('winloseText');
      youlost.innerText = '😢You lost!😢';
      containerB.appendChild(youlost);
      document.querySelector('#startLevel2').style.backgroundColor = 'yellow';
    }

    if (document.querySelectorAll('.biggerFontandStrikethrough').length === 9) {
      clearInterval(oneMinTimer);

      document
        .getElementById('playAgainButton')
        .classList.remove('button-invisible');
      document
        .getElementById('playAgainButton')
        .classList.add('button-visible');
      let youwin = document.createElement('p');
      youwin.classList.add('winloseText');
      youwin.innerText = '😁You won!😁';
      containerB.appendChild(youwin);
      document.querySelector('#startLevel2').style.backgroundColor =
        'limegreen';
    }
  };

  let oneMinTimer = setInterval(timerMinusOne, 1000);
};

// GENERATE LETTERS ON BOARD
let generateNamesTwo = () => {
  //APPLE SETUP
  let appleA = document.getElementById('105');
  appleA.className = 'singleBlockTest';
  appleA.innerText = 'A';
  let appleP1 = document.getElementById('120');
  appleP1.className = 'singleBlockTest';
  appleP1.innerText = 'P';
  let appleP2 = document.getElementById('135');
  appleP2.className = 'singleBlockTest';
  appleP2.innerText = 'P';
  let appleL = document.getElementById('150');
  appleL.className = 'singleBlockTest';
  appleL.innerText = 'L';
  let appleE = document.getElementById('165');
  appleE.className = 'singleBlockTest';
  appleE.innerText = 'E';
  // ORANGE SETUP
  let orangeO = document.getElementById('155');
  orangeO.className = 'singleBlockTest';
  orangeO.innerText = 'O';
  let orangeR = document.getElementById('171');
  orangeR.className = 'singleBlockTest';
  orangeR.innerText = 'R';
  let orangeA = document.getElementById('187');
  orangeA.className = 'singleBlockTest';
  orangeA.innerText = 'A';
  let orangeN = document.getElementById('203');
  orangeN.className = 'singleBlockTest';
  orangeN.innerText = 'N';
  let orangeG = document.getElementById('219');
  orangeG.className = 'singleBlockTest';
  orangeG.innerText = 'G';
  let orangeE = document.getElementById('235');
  orangeE.className = 'singleBlockTest';
  orangeE.innerText = 'E';
  //BANANA SETUP
  let bananaB = document.getElementById('240');
  bananaB.className = 'singleBlockTest';
  bananaB.innerText = 'B';
  let bananaA1 = document.getElementById('241');
  bananaA1.className = 'singleBlockTest';
  bananaA1.innerText = 'A';
  let bananaN1 = document.getElementById('242');
  bananaN1.className = 'singleBlockTest';
  bananaN1.innerText = 'N';
  let bananaA2 = document.getElementById('243');
  bananaA2.className = 'singleBlockTest';
  bananaA2.innerText = 'A';
  let bananaN2 = document.getElementById('244');
  bananaN2.className = 'singleBlockTest';
  bananaN2.innerText = 'N';
  let bananaA3 = document.getElementById('245');
  bananaA3.className = 'singleBlockTest';
  bananaA3.innerText = 'A';
  //GRAPE SETUP
  let grapeG = document.getElementById('22');
  grapeG.className = 'singleBlockTest';
  grapeG.innerText = 'G';
  let grapeR = document.getElementById('36');
  grapeR.className = 'singleBlockTest';
  grapeR.innerText = 'R';
  let grapeA = document.getElementById('50');
  grapeA.className = 'singleBlockTest';
  grapeA.innerText = 'A';
  let grapeP = document.getElementById('64');
  grapeP.className = 'singleBlockTest';
  grapeP.innerText = 'P';
  let grapeE = document.getElementById('78');
  grapeE.className = 'singleBlockTest';
  grapeE.innerText = 'E';
  //NECTARINE SETUP
  let nectarineN1 = document.getElementById('167');
  nectarineN1.className = 'singleBlockTest';
  nectarineN1.innerText = 'N';
  let nectarineE1 = document.getElementById('183');
  nectarineE1.className = 'singleBlockTest';
  nectarineE1.innerText = 'E';
  let nectarineC = document.getElementById('199');
  nectarineC.className = 'singleBlockTest';
  nectarineC.innerText = 'C';
  let nectarineT = document.getElementById('215');
  nectarineT.className = 'singleBlockTest';
  nectarineT.innerText = 'T';
  let nectarineA = document.getElementById('231');
  nectarineA.className = 'singleBlockTest';
  nectarineA.innerText = 'A';
  let nectarineR = document.getElementById('247');
  nectarineR.className = 'singleBlockTest';
  nectarineR.innerText = 'R';
  let nectarineI = document.getElementById('263');
  nectarineI.className = 'singleBlockTest';
  nectarineI.innerText = 'I';
  let nectarineN2 = document.getElementById('279');
  nectarineN2.className = 'singleBlockTest';
  nectarineN2.innerText = 'N';
  let nectarineE2 = document.getElementById('295');
  nectarineE2.className = 'singleBlockTest';
  nectarineE2.innerText = 'E';
  //TANGERINE SETUP
  let tangerineT = document.getElementById('100');
  tangerineT.innerText = 'T';
  tangerineT.className = 'singleBlockTest';
  let tangerineA = document.getElementById('115');
  tangerineA.className = 'singleBlockTest';
  tangerineA.innerText = 'A';
  let tangerineN1 = document.getElementById('130');
  tangerineN1.className = 'singleBlockTest';
  tangerineN1.innerText = 'N';
  let tangerineG = document.getElementById('145');
  tangerineG.className = 'singleBlockTest';
  tangerineG.innerText = 'G';
  let tangerineE1 = document.getElementById('160');
  tangerineE1.className = 'singleBlockTest';
  tangerineE1.innerText = 'E';
  let tangerineR = document.getElementById('175');
  tangerineR.className = 'singleBlockTest';
  tangerineR.innerText = 'R';
  let tangerineI = document.getElementById('190');
  tangerineI.className = 'singleBlockTest';
  tangerineI.innerText = 'I';
  let tangerineN2 = document.getElementById('205');
  tangerineN2.className = 'singleBlockTest';
  tangerineN2.innerText = 'N';
  let tangerineE2 = document.getElementById('220');
  tangerineE2.className = 'singleBlockTest';
  tangerineE2.innerText = 'E';
  nectarineE2.innerText = 'E';
  //LIME SETUP
  let limeL = document.getElementById('25');
  limeL.innerText = 'L';
  limeL.className = 'singleBlockTest';
  let limeI = document.getElementById('41');
  limeI.innerText = 'I';
  limeI.className = 'singleBlockTest';
  let limeM = document.getElementById('57');
  limeM.innerText = 'M';
  limeM.className = 'singleBlockTest';
  let limeE = document.getElementById('73');
  limeE.innerText = 'E';
  limeE.className = 'singleBlockTest';
  //MANGO SETUP
  let mangoM = document.getElementById('76');
  mangoM.innerText = 'M';
  mangoM.className = 'singleBlockTest';
  let mangoA = document.getElementById('61');
  mangoA.innerText = 'A';
  mangoA.className = 'singleBlockTest';
  let mangoN = document.getElementById('46');
  mangoN.innerText = 'N';
  mangoN.className = 'singleBlockTest';
  let mangoG = document.getElementById('31');
  mangoG.innerText = 'G';
  mangoG.className = 'singleBlockTest';
  let mangoO = document.getElementById('16');
  mangoO.innerText = 'O';
  mangoO.className = 'singleBlockTest';
  //PEACH SETUP
  let peachP = document.getElementById('265');
  peachP.innerText = 'P';
  peachP.className = 'singleBlockTest';
  let peachE = document.getElementById('251');
  peachE.innerText = 'E';
  peachE.className = 'singleBlockTest';
  let peachA = document.getElementById('237');
  peachA.innerText = 'A';
  peachA.className = 'singleBlockTest';
  let peachC = document.getElementById('223');
  peachC.innerText = 'C';
  peachC.className = 'singleBlockTest';
  let peachH = document.getElementById('209');
  peachH.innerText = 'H';
  peachH.className = 'singleBlockTest';


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

// test test test test test
let elem = document.createElement('button');
elem.setAttribute('id', 'test');
elem.innerText = 'testing';
document.body.appendChild(elem);

// 54 is the total num of letters

// INITIATE LEVEL TWO PROMPT
let startLevel2 = document.querySelector('#startLevel2');
startLevel2.addEventListener('click', function () {
  document.querySelector('#startLevel1').style.display = 'none';
  document.querySelector('#startLevel2').style.display = 'none';
  document.querySelector('#startLevel3').style.display = 'none';
  document.querySelector('#chooseText').style.display = 'none';
  startGameLevelTwo();
  generateNamesTwo();
});
