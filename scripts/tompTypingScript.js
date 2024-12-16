const wordBank = [
  "scalito"
];

document.querySelector('textarea').spellcheck = false;

// DOM Elements
const textToType = document.getElementById("text-to-type");
const userInput = document.getElementById("user-input");

// Generate Random Text
const generateRandomText = () => {
  const words = [];
  for (let i = 0; i < 10; i++) {
      words.push(wordBank[Math.floor(Math.random() * wordBank.length)]);
  }
  return words.join(" ");
};

// Initialize Game
const targetText = generateRandomText();
textToType.innerHTML = targetText;

// Variables for Tracking
let startTime = null;
let errors = 0;

// Event Listener for Typing
userInput.addEventListener("input", () => {
    if (!startTime) startTime = new Date(); // Start timer on first input

    const typedText = userInput.value;
    let updatedHTML = "";
    errors = 0;

    for (let i = 0; i < targetText.length; i++) {
        const correctChar = targetText[i];
        const typedChar = typedText[i];

        if (typedChar === undefined) {
          // Not yet typed
          if (i === typedText.length) {
              // Add the cursor at the current position
              updatedHTML += `<span style="border-left: 2px solid #ffffff; padding-left: 1px; margin-left: -1px; display: inline-block; height: 1em;"></span>`;
              updatedHTML += `<span style="color: #6666bb;">${correctChar}</span>`;
          } else {
              updatedHTML += `<span style="color: #6666bb;">${correctChar}</span>`;
          }   
      } else if (typedChar === correctChar) {
          // Correctly typed
          updatedHTML += `<span style="color: #ffffff;">${correctChar}</span>`;
      } else {
          // Incorrectly typed
          updatedHTML += `<span style="color: #ff4757;">${correctChar}</span>`;
          
          errors++;
      }
      
    }

    textToType.innerHTML = updatedHTML;



    // Check if typing is complete
    if (typedText.length === targetText.length) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Time in seconds
        const wpm = Math.round((targetText.split(" ").length / timeTaken) * 60);

        // Save results to sessionStorage
        sessionStorage.setItem("wpm", wpm);
        sessionStorage.setItem("time", timeTaken.toFixed(2));
        sessionStorage.setItem("errors", errors);

        // Redirect to results page
        if(errors === 0)
        window.location.href = "doyourememberme.html";
        else{
          window.location.href = "dddd.html";
        }
    }
});

// Select all buttons in the virtual keyboard
const buttons = document.querySelectorAll('button');

// Create Audio objects for the keyboard click sounds
const clickSound = new Audio('audios/167326__willy_ineedthatapp_com__click.mp3'); // Sound for all keys except space
const spaceSound = new Audio('audios/spacebar-click-keyboard-199448.mp3'); // Sound for the space bar

// Add event listeners for keydown and keyup
document.addEventListener('keydown', (event) => {
  // Handle space bar explicitly
  const key = event.key === ' ' ? 'Space' : event.key;

  // Find the button with the matching data-key attribute
  const button = document.querySelector(`button[data-key="${key}"]`);

  if (button) {
    // Add the "active" class to change the button's appearance
    button.classList.add('active');

    // Play the appropriate sound
    if (event.key === ' ') {
      spaceSound.currentTime = 0; // Reset to start for rapid clicks
      spaceSound.play();
    } else {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  }
});

document.addEventListener('keyup', (event) => {
  // Handle space bar explicitly
  const key = event.key === ' ' ? 'Space' : event.key;

  // Find the button with the matching data-key attribute
  const button = document.querySelector(`button[data-key="${key}"]`);
  if (button) {
    // Remove the "active" class
    button.classList.remove('active');
  }
});


