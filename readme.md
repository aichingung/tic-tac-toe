link: https://aichingung.github.io/tic-tac-toe/


Initial html setup

1. needs a header, temporarily using "Tic-Tac-Toe"
2. followed up with the board, had placed it to be buttons. *eventually decided against the idea and used divs instead as I wanted to add gifs as the icons.
3. a section to keep track of each player's scores.
4. name of player1 and player2 and pictures based on the theme to set who is who.
5. also a button for resetting the board to play. 


initial javascript setup

1. focus on the board's div to get the game going, had started 2 functions to be called but eventually settled with using a switch to alternate between player1 and player2 because if I had done seperate functions the if else statement will be if clickBoardLength === 3 then banner popup to say you won, however the 3 boxes had to be lined up either horizontally/vertically/diagonally. 
2. In terms of identifying the winning sequences, I could not think of a simpler and neater way and decided on writing out the possible sequences of winning box lines and game draw lines. 
3. decided to have a total reset button to reset the scores and rounds played.

challenges found

1. code for game to draw took a while to figure out, initially had tested the sequences one by one and manually set it.
2.  manually written out the possible winning sequences.
3. had initially wanted to use alert to say who won or draw game, researched how to do the popup with divs instead.
4. have yet to figure out how to allow user to select icon and have mained the player 1 and player 2 with a set icon for both.
5. couldn't get the audio file to autoplay in the browser.




Initial look thought process

1. decided with a theme of amber heard and Johnny Depp trial. 
2. presentation of the tic-tac-toe box itself will be in a board format and the boarder will not be left out.
3. board has 9 boxes so will set up html to have 9 divs. 
4. there will be 2 players each with their own score.
5. a reset button at the bottom to reset the game.   


# layout
![screencapture-pages-git-generalassemb-ly-aichingung-sei-project-1-2022-07-19-19_03_30](https://media.git.generalassemb.ly/user/42808/files/42ccda72-73af-4ddb-af80-7b8a9ee2646e)