const wordBank = [
                                                                                                  "thomas", "scala", "freaky p", "z", "scalito", "pork", "deiter", "man", "deiterman", "felix", "poliscala", "scaeterman", "tom", "disease", "lord", "john", "despair", "distraught", "barty", "v", "deiterday", "john pork", "dieterlito", "logan scala proton", "felix deiterman neutron", "dieterscalito", "scalawag", "scalitoverse", "verse", "sean b", "sean", "dafreak", "ryan", "tomofreaki", "freaco", "fralito", "dascalito", "tomoscala", "mr. z", "origins of dieterday coming out december 18th", "kafreak", "tannis", "wanderforge", "p-gang", "logan", "deiternight", "st. deiterman", "z-day", "dylan freaktella", "low-taper", "low-taper pork", "freakison", "wood", "freakison wood", "matt mcfreakin", "zitt", "electron", "governor stem scala", "governer stem", "deiterday eve", "eve", "crian", "bollum", "crian bollum", "zogan", "young", "zogan young", "ward", "dylan ward", "fade", "massive meme", "massive", "freckle", "mythical", "creepypasta", "creepypasta", "creepy deiterman", "scaliterman", "pcoin", "ac dollar bill", "ac", "ac z-mode", "z-mode", "freakbiss", "freaky", "waleed", "freakzana", "waleed freakzana", "freaking", "dylan freaking", "freaks vs. scalitos", "scary", "terry", "scary terry", "scalito overlords", "thomas scala", "professor", "ztaada", "grish", "mgaha", "zavid zarvahlo", "oleks pork", "scalito pork", "oleks", "tom p electron", "dicosmos", "dark eisner", "oakle decker", "islandbooger", "freaklie", "freaklie wanderforge", "tannis kalfreak", "ferri", "hoxha", "ken carson", "lord meyer", "meyer", "lord cignarella", "italian pork", "slightly overweight", "bearded", "gary v", "gary", "gary v ultimate", "scalito", "scalito", "scalito", "scalito", "scalito"

  ];
  
document.querySelector('textarea').spellcheck = false;
// DOM Elements
const textToType = document.getElementById("text-to-type");
const userInput = document.getElementById("user-input");

// Generate Random Text
const generateRandomText = () => {
    const words = [];
    for (let i = 0; i < 25; i++) {
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
              updatedHTML += `<span style="border-left: 2px solid #ffaaaa; padding-left: 1px; margin-left: -1px; display: inline-block; height: 1em;"></span>`;
              updatedHTML += `<span style="color: #734a00;">${correctChar}</span>`;
          } else {
              updatedHTML += `<span style="color: #734a00;">${correctChar}</span>`;
          }   
            
            
        } else if (typedChar === correctChar) {
            // Correctly typed
            updatedHTML += `<span style="color: #ff0000;">${correctChar}</span>`;
            
        } else {
            // Incorrectly typed
            updatedHTML += `<span style="color: #ffffff;">${correctChar}</span>`;
            
            sunshine.currentTime = 0;
            sunshine.play();
            document.body.style.backgroundImage = 'url(img/scalito3.png)';
            document.body.style.backgroundSize = 'cover';  // Make sure the image covers the entire page
            document.body.style.backgroundPosition = 'center';  // Center the image
            document.body.style.height = '100vh';  // Ensure the body takes up the full viewport height
            document.body.style.margin = '0';  // Remove any default margins
            const divs = document.querySelectorAll('div');
            divs.forEach(div => {
                div.style.opacity = '0';  // Set the opacity of each div to 0 (transparent)
            });
        
            // Make all paragraphs transparent
            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(p => {
                p.style.opacity = '0';  // Set the opacity of each paragraph to 0 (transparent)
            });
        
            // Make all headers (h1, h2, h3, h4, h5, h6) transparent
            const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headers.forEach(header => {
                header.style.opacity = '0';  // Set the opacity of each header to 0 (transparent)
            });
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
        window.location.href = "evil_results.html";
    }
});

// Select all buttons in the virtual keyboard
const buttons = document.querySelectorAll('button');

// Create Audio objects for the keyboard click sounds
const clickSound = new Audio('audios/scalitotype.mp3'); // Sound for all keys except space
const spaceSound = new Audio('audios/scalaspace.wav'); // Sound for the space bar
const psound = new Audio("audios/p.wav");
const sunshine = new Audio("audios/sunshine.mp3");
const awesome = new Audio("audios/awesome.mp3");
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
    } 
    else if (event.key === 'p' || event.key === 'z')
    {
      psound.currentTime = 0;
      psound.play();
    }
    else if (event.key === 's' || event.key === 'e' || event.key === 'a' || event.key === 'n' || event.key === 'b')
    {
      awesome.currentTime = 0;
      awesome.play();
    }
    else if (event.key === '.' || event.key === '-')
    {
      sunshine.currentTime = 0;
      sunshine.play();
      document.body.style.backgroundImage = 'url(img/scalito3.png)';
      document.body.style.backgroundSize = 'cover';  // Make sure the image covers the entire page
      document.body.style.backgroundPosition = 'center';  // Center the image
      document.body.style.height = '100vh';  // Ensure the body takes up the full viewport height
      document.body.style.margin = '0';  // Remove any default margins
      const divs = document.querySelectorAll('div');
      divs.forEach(div => {
          div.style.opacity = '0';  // Set the opacity of each div to 0 (transparent)
      });
  
      // Make all paragraphs transparent
      const paragraphs = document.querySelectorAll('p');
      paragraphs.forEach(p => {
          p.style.opacity = '0';  // Set the opacity of each paragraph to 0 (transparent)
      });
  
      // Make all headers (h1, h2, h3, h4, h5, h6) transparent
      const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headers.forEach(header => {
          header.style.opacity = '0';  // Set the opacity of each header to 0 (transparent)
      });
    }
    else {
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


