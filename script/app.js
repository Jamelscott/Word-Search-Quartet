// setting variables
let containerA = document.querySelector("#container-a")

let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
let alphabetArray = alphabet.split(" ")

// build the screen and get unique ids & text for each block
for (let i=0; i <450;i++){

    let numberGen = Math.floor(Math.random()*26)
    
    let singleBlock = document.createElement("div")
    singleBlock.classList.add("singleBlock")
    singleBlock.innerText = alphabetArray[numberGen]
    singleBlock.setAttribute("id",i)
    containerA.appendChild(singleBlock)
    // singleBlock.addEventListener("mousedown", ()=>{
    //     singleBlock.style.backgroundColor = "hotpink"
    // })
    // singleBlock.addEventListener("mouseup", ()=>{
    //     singleBlock.style.backgroundColor = "rgba(255, 255, 255, 0.603)"
    // })

    }

// remove random letters and replace them with words
//APPLE SETUP
let appleA = document.getElementById("105")
appleA.className = "singleBlockTest"
appleA.innerText = "A"
let appleP1 = document.getElementById("120")
appleP1.className = "singleBlockTest"
appleP1.innerText = "P"
let appleP2 = document.getElementById("135")
appleP2.className = "singleBlockTest"
appleP2.innerText = "P"
let appleL = document.getElementById("150")
appleL.className = "singleBlockTest"
appleL.innerText = "L"
let appleE = document.getElementById("165")
appleE.className = "singleBlockTest"
appleE.innerText = "E"
// ORANGE SETUP
let orangeO = document.getElementById("155")
orangeO.className = "singleBlockTest"
orangeO.innerText = "O"
let orangeR = document.getElementById("171")
orangeR.className = "singleBlockTest"
orangeR.innerText = "R"
let orangeA = document.getElementById("187")
orangeA.className = "singleBlockTest"
orangeA.innerText = "A"
let orangeN = document.getElementById("203")
orangeN.className = "singleBlockTest"
orangeN.innerText = "N"
let orangeG = document.getElementById("219")
orangeG.className = "singleBlockTest"
orangeG.innerText = "G"
let orangeE = document.getElementById("235")
orangeE.className = "singleBlockTest"
orangeE.innerText = "E"
//BANANA SETUP
let bananaB = document.getElementById("400")
bananaB.className = "singleBlockTest"
bananaB.innerText = "B"
let bananaA1 = document.getElementById("399")
bananaA1.className = "singleBlockTest"
bananaA1.innerText = "A"
let bananaN1 = document.getElementById("398")
bananaN1.className = "singleBlockTest"
bananaN1.innerText = "N"
let bananaA2 = document.getElementById("397")
bananaA2.className = "singleBlockTest"
bananaA2.innerText = "A"
let bananaA3 = document.getElementById("396")
bananaA3.className = "singleBlockTest"
bananaA3.innerText = "N"
let bananN3 = document.getElementById("395")
bananN3.className = "singleBlockTest"
bananN3.innerText = "A"
//GRAPE SETUP
let grapeG = document.getElementById("22")
grapeG.className = "singleBlockTest"
grapeG.innerText = "G"
let grapeR = document.getElementById("36")
grapeR.className = "singleBlockTest"
grapeR.innerText = "R"
let grapeA = document.getElementById("50")
grapeA.className = "singleBlockTest"
grapeA.innerText = "A"
let grapeP = document.getElementById("64")
grapeP.className = "singleBlockTest"
grapeP.innerText = "P"
let grapeE = document.getElementById("78")
grapeE.className = "singleBlockTest"
grapeE.innerText = "E"
//NECTARINE SETUP
let nectarineN1 = document.getElementById("435")
nectarineN1.className = "singleBlockTest"
nectarineN1.innerText = "N"
let nectarineE1 = document.getElementById("436")
nectarineE1.className = "singleBlockTest"
nectarineE1.innerText = "E"
let nectarineC = document.getElementById("437")
nectarineC.className = "singleBlockTest"
nectarineC.innerText = "C"
let nectarineT = document.getElementById("438")
nectarineT.className = "singleBlockTest"
nectarineT.innerText = "T"
let nectarineA = document.getElementById("439")
nectarineA.className = "singleBlockTest"
nectarineA.innerText = "A"
let nectarineR = document.getElementById("440")
nectarineR.className = "singleBlockTest"
nectarineR.innerText = "R"
let nectarineI = document.getElementById("441")
nectarineI.className = "singleBlockTest"
nectarineI.innerText = "I"
let nectarineN2 = document.getElementById("442")
nectarineN2.className = "singleBlockTest"
nectarineN2.innerText = "N"
let nectarineE2 = document.getElementById("443")
nectarineE2.className = "singleBlockTest"
nectarineE2.innerText = "E"
//TANGERINE SETUP
let tangerineT = document.getElementById("100")
tangerineT.innerText = "T"
tangerineT.className = "singleBlockTest"
let tangerineA = document.getElementById("115")
tangerineA.className = "singleBlockTest"
tangerineA.innerText = "A"
let tangerineN1 = document.getElementById("130")
tangerineN1.className = "singleBlockTest"
tangerineN1.innerText = "N"
let tangerineG = document.getElementById("145")
tangerineG.className = "singleBlockTest"
tangerineG.innerText = "G"
let tangerineE1 = document.getElementById("160")
tangerineE1.className = "singleBlockTest"
tangerineE1.innerText = "E"
let tangerineR = document.getElementById("175")
tangerineR.className = "singleBlockTest"
tangerineR.innerText = "R"
let tangerineI = document.getElementById("190")
tangerineI.className = "singleBlockTest"
tangerineI.innerText = "I"
let tangerineN2 = document.getElementById("205")
tangerineN2.className = "singleBlockTest"
tangerineN2.innerText = "N"
let tangerineE2 = document.getElementById("220")
tangerineE2.className = "singleBlockTest"
tangerineE2.innerText = "E"
nectarineE2.innerText = "E"
//LIME SETUP
let limeL = document.getElementById("25")
limeL.innerText = "L"
limeL.className = "singleBlockTest"
let limeI = document.getElementById("41")
limeI.innerText = "I"
limeI.className = "singleBlockTest"
let limeM = document.getElementById("57")
limeM.innerText = "M"
limeM.className = "singleBlockTest"
let limeE = document.getElementById("73")
limeE.innerText = "E"
limeE.className = "singleBlockTest"
//MANGO SETUP
let mangoM = document.getElementById("301")
mangoM.innerText = "M"
mangoM.className = "singleBlockTest"
let mangoA = document.getElementById("316")
mangoA.innerText = "A"
mangoA.className = "singleBlockTest"
let mangoN = document.getElementById("331")
mangoN.innerText = "N"
mangoN.className = "singleBlockTest"
let mangoG = document.getElementById("346")
mangoG.innerText = "G"
mangoG.className = "singleBlockTest"
let mangoO = document.getElementById("361")
mangoO.innerText = "O"
mangoO.className = "singleBlockTest"
//PEACH SETUP
let peachP = document.getElementById("290")
peachP.innerText = "P"
peachP.className = "singleBlockTest"
let peachE = document.getElementById("306")
peachE.innerText = "E"
peachE.className = "singleBlockTest"
let peachA = document.getElementById("322")
peachA.innerText = "A"
peachA.className = "singleBlockTest"
let peachC = document.getElementById("338")
peachC.innerText = "C"
peachC.className = "singleBlockTest"
let peachH = document.getElementById("354")
peachH.innerText = "H"
peachH.className = "singleBlockTest"





// get letters to change color when selected
// APPLE
// A
appleA.addEventListener("click", (event)=>{
event.target.style.backgroundColor = "red"
if(appleA.style.backgroundColor === "red" && appleP1.style.backgroundColor === "red" && appleP2.style.backgroundColor === "red" && appleL.style.backgroundColor === "red" && appleE.style.backgroundColor === "red"){
    console.log("we're in")
    appleA.style.backgroundColor = "green"
    appleP1.style.backgroundColor = "green"
    appleP2.style.backgroundColor = "green"
    appleL.style.backgroundColor = "green"
    appleE.style.backgroundColor = "green"
    let strike = document.querySelector("#apple")
    strike.style.textDecoration = "line-through"
}
    // P
    appleP1.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "red"
        if(appleA.style.backgroundColor === "red" && appleP1.style.backgroundColor === "red" && appleP2.style.backgroundColor === "red" && appleL.style.backgroundColor === "red" && appleE.style.backgroundColor === "red"){
            console.log("we're in")
            appleA.style.backgroundColor = "green"
            appleP1.style.backgroundColor = "green"
            appleP2.style.backgroundColor = "green"
            appleL.style.backgroundColor = "green"
            appleE.style.backgroundColor = "green"
            let strike = document.querySelector("#apple")
            strike.style.textDecoration = "line-through"
        }
    })
    // P
    appleP2.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "red"
        if(appleA.style.backgroundColor === "red" && appleP1.style.backgroundColor === "red" && appleP2.style.backgroundColor === "red" && appleL.style.backgroundColor === "red" && appleE.style.backgroundColor === "red"){
    console.log("we're in")
    appleA.style.backgroundColor = "green"
    appleP1.style.backgroundColor = "green"
    appleP2.style.backgroundColor = "green"
    appleL.style.backgroundColor = "green"
    appleE.style.backgroundColor = "green"
    let strike = document.querySelector("#apple")
    strike.style.textDecoration = "line-through"
}
})
// L
appleL.addEventListener("click", (event)=>{
    event.target.style.backgroundColor = "red"
    if(appleA.style.backgroundColor === "red" && appleP1.style.backgroundColor === "red" && appleP2.style.backgroundColor === "red" && appleL.style.backgroundColor === "red" && appleE.style.backgroundColor === "red"){
        console.log("we're in")
        appleA.style.backgroundColor = "green"
        appleP1.style.backgroundColor = "green"
        appleP2.style.backgroundColor = "green"
        appleL.style.backgroundColor = "green"
        appleE.style.backgroundColor = "green"
        let strike = document.querySelector("#apple")
        strike.style.textDecoration = "line-through"
    }
})
// E
})
appleE.addEventListener("mouseup", (event)=>{
event.target.style.backgroundColor = "red"
if(appleA.style.backgroundColor === "red" && appleP1.style.backgroundColor === "red" && appleP2.style.backgroundColor === "red" && appleL.style.backgroundColor === "red" && appleE.style.backgroundColor === "red"){
    console.log("we're in")
    appleA.style.backgroundColor = "green"
    appleP1.style.backgroundColor = "green"
    appleP2.style.backgroundColor = "green"
    appleL.style.backgroundColor = "green"
    appleE.style.backgroundColor = "green"
    let strike = document.querySelector("#apple")
    strike.style.textDecoration = "line-through"
}
})
// ORANGE
// O


