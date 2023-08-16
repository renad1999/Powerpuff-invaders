# Powerpuff-invaders README

Description

My first project for General Assembly is  a powerpuff girls version of Space Invaders. After playing each of the games on the list we had to choose from, I instantly couldn't stop playing Space Invaders and I knew that was the game I wanted to create. I wanted it to have a special theme to it and I love the powerpuff girls and thought it would be really cool to incorporate them into the game. I completed this project during week 3 of the course.


Deployment link

https://renad1999.github.io/Powerpuff-invaders/

Getting Started/Code Installation


To access and run the code for this project, please follow these step-by-step instructions:
Open a web browser on your computer.
Open GitHub
Navigate to the specific repository or project page containing the code for this project. (https://github.com/renad1999/Powerpuff-invaders.git)
Look for a "Clone" or "Download" button on the repository page. Click on it.
Select the option to download the code as a ZIP file and save it to a location on your computer.
Once the download is complete, locate the downloaded ZIP file and extract its contents to a desired folder on your computer.
Open your preferred code editor or IDE (Integrated Development Environment) such as Visual Studio Code.
In the code editor, navigate to the folder where you extracted the project files.
Open the main HTML file (usually named "index.html") in the code editor.
To run the game, right-click on the HTML file and select the option to open it with your preferred web browser.
The game should now open in your web browser, and you can interact with it.


Timeframe & Working Team (Solo/Pair/Group)

The project was done solo, I was given one week to complete the project.


Technologies Used

HTML was used for structuring the webpage.
CSS was used for styling and visually enhancing the game elements. 
JavaScript was used for implementing the game logic and interactivity.

The development tool I used to write my code was Visual Studio Code, and I utilised the "Go Live" feature, which helped me test and run the game using Google Chrome.


Brief

 The following requirements had to be met : 
 Include win/loss logic and render win/loss messages in HTML.
 Include separate HTML, CSS & JavaScript files.
 Use vanilla JavaScript.
 Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.
 No remaining unused and/or commented out code (code that will never be called) 
 Have functions and variables that are named sensibly.
 Be coded in a consistent manner. 
 Be deployed online using GitHub Pages so that the rest of the world can play your game!


Planning


To kick off the planning stage, I first wrote some pseudo code and sketched out a wireframe to get a clear picture of how I wanted the game to look and function. When I started coding, I made sure to stick to the ideas from my pseudo code and wireframe.

I began by setting up a grid as the basis for the game. From there, I gradually added different components and features to bring the game to life.
Having the pseudo code and wireframe as a reference helped me stay on track and stay true to my original vision. The pseudo code outlined the logical steps and actions needed for the game, while the wireframe helped me visualise the layout and placement of the game elements.

By starting with a grid structure and building upon it, I was able to create a well-organised and cohesive game. It made it easier to add player controls, enemy movements, and other interactive elements. Bringing together the pseudo code, wireframe, and grid structure allowed me to maintain consistency and create a game that matched my initial ideas.

<img width="616" alt="Screenshot 2023-08-15 at 21 00 16" src="https://github.com/renad1999/Powerpuff-invaders/assets/112344006/6af01fbb-fcca-49de-9031-efe22456a451">


<img width="620" alt="Screenshot 2023-08-15 at 21 01 18" src="https://github.com/renad1999/Powerpuff-invaders/assets/112344006/036a55a0-45a1-4e88-90fc-8573914529ed">

Build/Code Process


This is the code that assigns Mojos to an array containing a series of numbers representing the positions of mojos in the game.

let mojos = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]



In the code below the mojoMovement() function is responsible for handling the movement of the mojos.
First, it checks if any mojos are positioned on the left side of the game area by using the some() method and checking if the remainder of the division of the mojo position by the width of the game area is 0. Similarly, it checks if any mojos are on the right side by checking if the remainder is equal to the width minus 1.

The removeMojo() function is called to handle removing mojos from the game.
If there are no more mojos left, the function clears the interval that controls the movement of the mojos, removes the event listener for keyup events, and calls the gameOver() function.
If the mojos are at the right side and moving to the right, the position of each mojo in the array is incremented by the width plus 1, and the direction is set to -1, indicating that the mojos will move left. The goingRight variable is set to false.
Similarly, if the mojos are at the left side and moving to the left, the position of each mojo is incremented by the width minus 1, and the direction is set to 1, indicating that the mojos will move right. The goingRight variable is set to true.
Finally, for all other cases, the position of each mojo is incremented by the value of the direction variable. This code manages the movement of the mojos in the game and the logic for changing direction when reaching the edges of the grid.

function mojSide && !goingRight) {
      for (let i = 0; i < mojos.length; i++) {
        mojos[i] += width - 1;
        direction = 1;
        goingRight = true;
      }
    }

    for (let i = 0; i < mojos.length; i++) {
      mojos[i] += direction;
    }oMovement() {
    const leftSide = mojos.some(mojo => mojo % width === 0)
    const rightSide = mojos.some(mojo => mojo % width === width - 1)
    removeMojo();
    if (mojos.length === 0) {
      clearInterval(moveMojoInterval);
      document.removeEventListener('keyup', handleMovement);
      gameOver();
      return;
    }

    if (rightSide && goingRight) {
      for (let i = 0; i < mojos.length; i++) {
        mojos[i] += width + 1;
        direction = -1;
        goingRight = false;
      }
    }

    if (leftSide && !goingRight) {
      for (let i = 0; i < mojos.length; i++) {
        mojos[i] += width - 1;
        direction = 1;
        goingRight = true;
      }
    }

    for (let i = 0; i < mojos.length; i++) {
      mojos[i] += direction;
    }



 function handleMovement(event) {
    const key = event.keyCode;
    const left = 37;
    const right = 39;
    const spacebar = 32;

 removeBlossom();
    cells[currentPosition].classList.remove('mojo');

    let newPosition = currentPosition;
    if (key === right && currentPosition % width < width - 1) {
      newPosition++;
    } else if (key === left && currentPosition % width > 0) {
      newPosition--;
    } else if (key === spacebar) {
      shoot(currentPosition);
    } else {
      console.log('INVALID KEY');
    }

    currentPosition = newPosition;
    removeBlossom(currentPosition);
    addBlossom(currentPosition);
  }


The code provided defines a function called handleMovement that handles player movement in the game.When a key is pressed, the function retrieves the key code from the event object and assigns it to the key variable. It also defines constants for the key codes of the left arrow, right arrow, and spacebar. The function then removes the current position of the player (blossom) from the game by removing the mojo class from the corresponding cell. A new position variable (newPosition) is initialised with the current position. If the pressed key is the right arrow and the current position is not at the rightmost edge of the game area, the newPosition is incremented by 1. Similarly, if the pressed key is the left arrow and the current position is not at the leftmost edge, the newPosition is decremented by 1. If the pressed key is the spacebar, the shoot() function is called to handle shooting action. If none of these keys are pressed, an "INVALID KEY" message is logged to the console. The current position is then updated to the new position, and the functions removeBlossom() and addBlossom() are called to update the player's position in the game.


  function shoot(startPosition, blossomCell) {
    let currentPosition = startPosition - width;
    const shootInterval = setInterval(() => {
      if (currentPosition < 0) {

        // Shooting  moved out of the play area
        clearInterval(shootInterval);
       
return;
      }

      const currentCell = cells[currentPosition];
      if (!currentCell) {
        // Element with given index does not exist in cells array
        clearInterval(shootInterval);
        return;
      }
      if (currentCell.classList.contains('mojo') && currentPosition === blossomCell) {
        // Blossom hits Mojojojo
        clearInterval(shootInterval);
        currentCell.classList.remove('mojo');
        removeBlossom();
        mojoCount--;
        winOrLoss();

// remove mojo when shot
const mojoIndex = mojos.indexOf(parseInt(currentCell.dataset.index));
if (mojoIndex > -1) {
  mojos.splice(mojoIndex, 1);
}
         score += 10;
        updateScore();
        function winOrLoss(){
        if (mojoCount === 0) {
          clearInterval(mojoInterval);
          document.removeEventListener('keyup', handleMovement);
          alert('Game Over!');
        }}
        return;
      }
      if (currentCell.classList.contains('blossom')) {
        // Hit Blossom
        clearInterval(shootInterval);
        currentCell.classList.remove('blossom');
        removeBlossom();
        return;
      }

      if (currentCell.classList.contains('mojo')) {
        // Hit obstacle
        clearInterval(shootInterval);

        const mojoIndex = mojos.indexOf(parseInt(currentCell.dataset.index));
        if (mojoIndex > -1) {
          mojos.splice(mojoIndex, 1);
        }

        currentCell.classList.remove('mojo');
        score += 10;
        updateScore();
        return;
      }

      currentCell.classList.add('shoot');
      setTimeout(() => {
        currentCell.classList.remove('shoot');
      }, 10);
      currentPosition -= width;
    });
  }


The provided codes is for the  shooting function that handles shooting actions in the game. The function takes two parameters: startPosition, which represents the starting position for the shot, and blossomCell, which represents the current position of the player (blossom). Inside the function, a currentPosition variable is initialised with a position above the startPosition to represent the initial shot position. A shootInterval is created using setInterval, which executes the code inside it repeatedly with a certain interval. The code inside the interval checks various conditions for the shot:
If the currentPosition goes below 0, it means the shot has moved out of the play area, and the interval is cleared to stop the shooting action.
If the currentCell at the currentPosition doesn't exist in the cells array, it means the shot has hit an area outside the game grid, and the interval is cleared to stop the shooting action.
If the currentCell at the currentPosition contains the mojo class and the currentPosition is equal to the blossomCell, it means the shot has hit Mojojojo. The interval is cleared, the mojo class is removed from the currentCell, the player's position (blossom) is removed, the mojoCount is decremented, the winOrLoss function is called to check if the game is won or lost, and the mojos array is updated to remove the shot mojo. Additionally, the score is increased by 10, and the updateScore function is called to update the score display.
If the currentCell at the currentPosition contains the blossom class, it means the shot has hit the player (blossom). The interval is cleared, the blossom class is removed from the currentCell, and the player's position is removed.
If the currentCell at the currentPosition contains the mojo class, it means the shot has hit an obstacle (another mojo). The interval is cleared, the obstacle is removed from the mojos array, the mojo class is removed from the currentCell, and the score is increased by 10. The updateScore function is called to update the score display.
If none of the above conditions are met, the shoot class is added to the currentCell to visually represent the shot. After a short delay, the shoot class is removed from the currentCell to reset its appearance. Finally, the currentPosition is decremented by the width of the game grid to move the shot upwards.


Challenges



Game Logic and Timing: Designing and implementing the game logic, including enemy movement patterns, player controls, proper synchronisation and smooth gameplay were a challenge for me. It took time to come up with codes that ensures smooth gameplay


﻿Collision Detection: Implementing accurate collision detection between game elements, such as the shooter(blossom) and the enemy (Mojo) was challenging while trying to handle overlapping positions﻿ 

﻿ Responsive Design: Ensuring that the game is playable. Designing a responsive layout and adapting game elements to varying screen resolutions required careful planning and testing.


A challenge I faced that significantly slowed down my progress was related to the movement of the mojo character in the game. Initially, I had implemented automatic movement for the mojo on the game grid, but it was not behaving as I expected. Instead of descending towards the bottom of the grid, it was stuck in a loop towards the middle and then moving back up. After spending several hours trying to identify the issue, I couldn't figure out what went wrong.

 Feeling stuck and unable to make progress, I decided to move on to the next task, which involved implementing random shots fired by the mojo towards the player character (Blossom). However, when I tested this functionality, I encountered another problem. The shots fired by the mojo were hitting other Mojos instead of hitting Blossom. This issue added to my frustration.

Eventually, I reached out for help and received guidance on fixing the mojo's movement and as I had suspected the mistake in the mojo movement function was affecting other aspects of the game as well. If I had addressed this issue earlier and fixed the mojo movement function properly, it would have resolved my issues, such as the incorrect behaviour of the random shots fired by the Mojo.

This experience taught me the importance of tackling foundational issues first and ensuring that core functionalities are working correctly before moving on to other features. It highlighted the interconnected nature of different components in a game and how a single issue can have a cascading effect on the overall game functionality.

Deployment of my game on GitHub, the styling I have done on my game does not appear on screen when it is deployed on GitHub. The pictures and images disappear, this is something I did not expect to happen and need to consider on future projects.

<img width="595" alt="Screenshot 2023-08-15 at 21 08 16" src="https://github.com/renad1999/Powerpuff-invaders/assets/112344006/940a436b-0d97-4b91-8fd9-92646c53ef59">


<img width="638" alt="Screenshot 2023-08-15 at 21 08 28" src="https://github.com/renad1999/Powerpuff-invaders/assets/112344006/f2b4d813-2b54-438a-b78a-ca3458309989">


Wins


After spending days developing my Blossom Invaders game, I finally achieved a major milestone - getting the game to function as intended. I felt like I was on top of the world when I successfully implemented the collision detection and the Game Over alert when Mojo and Blossom collided or when all the Mojos were shot down.Testing the game and witnessing the win condition being triggered brought a tremendous sense of accomplishment. Seeing the Game Over message appear on the screen and knowing that the game acknowledged the player's achievement was truly rewarding.
This achievement reaffirmed my perseverance and problem-solving abilities. It reminded me of the progress I made throughout the development journey and motivated me to continue my passion for web development and hopefully designing more engaging and enjoyable games in the future.


Key Learnings/Takeaways


﻿Working on the game solely has taught me a lot about my strengths and weaknesses in coding. I learnt how important planning and time management is and how we shouldn’t spend too much time on a single problem or issue you are facing but also how important it is to make sure a function is fully functioning the way it should be before moving on to the next step because it can compromise all the work you’ve been working on.

 I also learnt how important it is to ask for help when you need it, I am still in the beginning of my journey as a web developer and I am yet to face many difficulties in the future, although it's hard I learnt that its okay to ask for help, that doesn’t mean i'm a failure or am incompetent it just means that I am yet to learn more and I will always continue learning and growing. ﻿ 

Developing the Blossoms Invaders game allowed me to gain a deeper understanding of JavaScript and its application in game development. I became more proficient in handling game logic, implementing event listeners, and manipulating the DOM dynamically. 

Although I did not get the game to have all the features I initially intended it to have, I am still very proud of my work and I am really excited to get the chance to enhance my game to have all the features I wanted and for it to be more visually appealing  giving the player a more enjoyable experience while playing and also to create more games in the future.

Designing and implementing the game logic was crucial to ensure smooth gameplay and proper synchronisation. Learning  how to handle player controls, player/ character movement patterns, and timing mechanisms were very helpful. Executing accurate collision detection between game elements was a challenge that taught me the importance of precise calculations and handling overlapping positions. Developing the game involved encountering and fixing different issues and bugs. ﻿I enjoyed the process of finding the issues in my game and using my  problem-solving skills and learning effective strategies to identify and fix errors in my code.
Overall, creating the Blossom Invaders game was a huge learning experience for me and strengthened my technical skills in JavaScript, HTML, and CSS, while also enhancing my problem-solving skills and time management. It was a valuable learning experience that shaped me as a more confident engineer in game development and frontend web development.

As I tackled my first project, I discovered another big lesson along the way. I realised how crucial it is to write clear and organised code. It was a bit tricky, but I picked up the importance of sketching out clear pseudo code, having a solid plan for coding, and  diligently adhering to the "Don't Repeat Yourself" (DRY) principle.


Bugs

There is some code left that is unused as of now in my game which is for the releaseMojoShots function:

 function releaseMojoShots() {
    const emptyCells = cells.filter(
      (cell) =>
        !cell.classList.contains('mojo') &&
        !cell.classList.contains('blossom')
    );
    if (emptyCells.length === 0) {
      return;
    }
    
    const randomCell =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const blossomRow = Math.floor(blossomCell / width);
    const blossomCol = blossomCell % width;
    const randomRow = Math.floor(randomCell.dataset.index / width);
    const randomCol = blossomCell % width;
    if (
      Math.abs(blossomRow - randomRow) <= 1 &&
      Math.abs(blossomCol - randomCol) <= 1
    ) {
      if (blossomCell !== null) {
        shoot(randomMojoCell.dataset.index, blossomCell);
      }
    }
    setTimeout(releaseMojoShots, Math.random() * 1000 + 500);

    
  }


Future Improvements


There is great room for improvement in my project. Here are the revisions I plan to make:
Implement a play button to provide a clear starting point for the game.
Create an on-screen game over message or display instead of relying solely on alerts.
Introduce lives for Blossom, allowing the player to have multiple chances before losing the game.
Develop functionality for shooting down from Mojojojo, adding an additional challenge for the player.
Incorporate multiple levels to increase the complexity and engagement of the game.
Enhance the visual appearance of the game to create a more visually appealing and immersive experience.
Cleaner more organised code.
By implementing these revisions, I aim to enhance the overall gameplay, interactivity, and visual aesthetics of the project.



