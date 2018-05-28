# Guts

// initial commit

Team Members:
* Injoong Yoon
* Robyn Navarro
* Easton Gorishek


We are modeling Guts which is a gambling game that uses a standard deck of cards. 

Each player is dealt two cards and makes a decision to play the hand or fold. Suits do not matter in this game. A pair of aces are the highest hand a player can receive, and a hand of a two and a three is the lowest hand a player can receive. If each player has both the same high card then the kicker will determine the winner. If both players have pairs then the higher pair will be the winner. 

e.g. a pair of twos will beat a hand that has an ace/king. 

We have broken this app into six components including the App level. 

## The six components are as follows:
* App
* Players
* Player (child of Players)
* Controls
* EngGame
* UserReport (child of EndGame)

We modeled a standard deck of cards within the cards.js file 

* Includes properties that represent the value of the card and the front image/back image of card. 

We modeled the players within the playerObjects.js file 

* Includes properties that represent the player's name, hand, game decision and their points. 


## App
* randomly generates and assigns hand to each player
* compares each players hand and determines the winner/loser
* tallies each players score 
* passes down packaged information down to it's children (Players, Controls, EndGame)

## Players
* gets players from app and either runs an update method or the normal render method depending on game state
* passes each player down to Player component (child)

## Player
* Takes players name, points and hand and injects them to the dom.
* Includes conditional statements to display correct information. 

## Controls
* Adds addEventListener to control buttons in game 
* Calls App to fire function when buttons are selected

## EndGame
* Receives each player from App and then passes down to UserReport(child)
* Includes an update method and a normal render method dependent on game state

## ResultsPage
* Takes each players name and final score and injects it to the dom









