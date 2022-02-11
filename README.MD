# WordSeach Countdown

## Elevator Pitch

Welcome to WordSearch Countdown. There are three wordsearch puzzles to play but you will only get credit for completing the levels if you do it within the time-limit. Be warned, the levels get harder as you make your way through the breezy, tricky and tough difficulties. Your progress will be kept on the main screen in case you've forgotten which levels you've completed.

## Tech stack

* HTML/CSS/Vanilla JS

## Quick Sketch

[Here is the initial concept](https://i.ibb.co/8XJBKz8/IMG-5564.jpg)

## MVP Goals

* build a word-search board (hard-coded)
* build a countdown timer
* create a list of searchable words (hard-coded)
* circle or highlight letters of searchable words when clicked in sequence
* strike out words in the list when found
* when game is over, add a play again button.

## Stretch Goals (complete)

* when first board is complete, start a new board that is larger, restart timer and provide 10 new words
* add three levels of incrementing difficulty
* list the rules on main menu
* keep track of game progress on main menu
* let the player know when all levels are complete
* when you return to main menu, have the text in the rules change slightly
* provide a button to return to main menu instead of an instant return

## Stretch Goals (in-progress)

* add a circle around the found words (similar to hand-written word-searches)
* highlight timer when time is running out
* add a more time button that a player can use once during the game to provide an extra 20 seconds
* every time a board is generated, the words locations are different
* sound prompt on last 10 seconds
* slowly generate the board with words instead of instantly
* (completed with a twist) play a quick orchestral sound when complete
* (completed with a twist) build a round scoreboard (ex: round 1/3)
* add more resonsive design to the larger boards
* a mobile friendly version while just the breezy difficulty


## Code Highlights

* good use of hidding and/or removing objects in the DOM to seemlessly move beeen gameboards and main menu

## Ongoing bugs

* once a word is complete, if you happen to press one of the green squares, it will turn beige until all letters in that word are clicked again
* not small-screen/mobile friendly
* if you don't finish a level in time, you can continue to play but wont get credit for completing it in the main menu (maybe this is an unintended feature?)
