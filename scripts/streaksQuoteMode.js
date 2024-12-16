const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today",
    "Life is what happens when you are busy making other plans",
    "Success is not final failure is not fatal it is the courage to continue that counts",
    "In the middle of every difficulty lies opportunity",
    "What you get by achieving your goals is not as important as what you become by achieving your goals",
    "Happiness is not something ready made it comes from your own actions",
    "Do not watch the clock do what it does keep going",
    "The best way to predict the future is to create it",
    "Your time is limited so do not waste it living someone else’s life",
    "Act as if what you do makes a difference because it does",
    "You miss one hundred percent of the shots you do not take",
    "The journey of a thousand miles begins with one step",
    "The best revenge is massive success",
    "It always seems impossible until it is done",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us",
    "Do what you can with what you have where you are",
    "Do not wait to strike till the iron is hot but make it hot by striking",
    "You must be the change you wish to see in the world",
    "Believe you can and you are halfway there",
    "Fall seven times and stand up eight",
    "Do not let the fear of striking out keep you from playing the game",
    "Dream big and dare to fail",
    "The future belongs to those who believe in the beauty of their dreams",
    "If you can dream it you can do it",
    "Keep your face always toward the sunshine and shadows will fall behind you",
    "The harder the conflict the greater the triumph"
  ];
  
  
  // DOM Elements
  const textToType = document.getElementById("text-to-type");
  const userInput = document.getElementById("user-input");
  
  
  
  // Initialize Game
  const targetText = quotes[Math.floor(Math.random() * quotes.length)];
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
              updatedHTML += `<span style="border-left: 2px solid #ff9800; padding-left: 1px; margin-left: -1px; display: inline-block; height: 1em;"></span>`;
              updatedHTML += `<span style="color: #734a00;">${correctChar}</span>`;
          } else {
              updatedHTML += `<span style="color: #734a00;">${correctChar}</span>`;
          }
        } else if (typedChar === correctChar) {
            // Correctly typed
            updatedHTML += `<span style="color: #FFA500;">${correctChar}</span>`;
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
        window.location.href = "streaksQuoteModeResults.html";
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
  