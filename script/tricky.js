// LEVEL TRICKY   --------------------------------------->
// THIS CREATES THE BOARD/LAYOUT
const startGameLevelTwo = () => {
  // everything in the header
  let headerContainer = document.createElement('div');
  let h1Header = document.createElement('h1');

  h1Header.setAttribute('id', 'header');
  h1Header.innerText = 'WordSearch Countdown • Tricky Level';
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

// GENERATE WORDS
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


// INITIATE LEVEL PROMPT
let startLevel2 = document.querySelector('#startLevel2');
startLevel2.addEventListener('click', function () {
  document.querySelector('#button-div').style.display = 'none';
  document.querySelector('#header-div').style.display = 'none';
  startGameLevelTwo();
  generateNamesTwo();
});
