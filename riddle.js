/**
 * Riddle Game JavaScript
 * This file contains the data and logic for a riddle game with multiple difficulty levels
 */

/**
 * Riddles database organized by difficulty levels (easy, medium, hard, impossible)
 * Each riddle object contains:
 * - question: The riddle text
 * - answers: Array of acceptable answers (for fuzzy matching)
 */
const riddles = {
  easy: [
    {
      question: "What has to be broken before you can use it?",
      answers: [
        "An egg",
        "Egg",
        "A egg",
        "eggs",
        "An eggshell",
        "A Glowstick",
        "Glowstick",
        "The shell of an egg",
        "The egg's shell",
        "Light stick",
        "Chemical light",
      ],
    },
    {
      question:
        "What has hands but cannot clap?",
      answers: ["A clock", "Clock", "A watch", "Watch", "Wall clock", "Grandfather clock", "Wristwatch", "Timepiece", "A timepiece", "Clocks", "Watches"],
    },
    {
      question: "What month of the year has 28 days?",
      answers: [
        "All of them",
        "They all do",
        "Every month",
        "Every month has 28 days",
        "All months",
        "Any month",
        "Each month",
        "All 12 months",
      ],
    },
    {
      question: "What is full of holes but still holds water?",
      answers: ["A sponge", "Sponge", "A perforated container", "Sponges", "A kitchen sponge", "Bath sponge", "Natural sponge", "Synthetic sponge"],
    },
    {
      question: "What question can you never (honestly) answer yes to?",
      answers: [
        "Are you asleep yet",
        "Are you dead",
        "Are you asleep",
        "Are you dead yet",
        "Are you sleeping",
        "Are you sleeping now",
        "Are you asleep right now",
      ],
    },
    {
      question: "What is always in front of you but can't be seen?",
      answers: [
        "The future",
        "Future",
        "Air",
        "The air",
        "Your potential",
        "Your future",
      ],
    },
    {
      question:
        "There's a one-story house. The floor is yellow. The books are yellow. The lights are yellow. Even the windows are yellow. What color are the stairs?",
      answers: [
        "There aren't any, it's a one-story house",
        "There are no stairs, it's a one-story house",
        "There are not any stairs, it is a one-story house",
        "It's a one-story house, so no stairs",
        "there are no stairs",
      ],
    },
    {
      question: "What can you break, even if you never pick it up or touch it?",
      answers: ["A promise", "Promises", "Silence", "A vow"],
    },
    {
      question: "What goes up but never comes down?",
      answers: ["Your age", "Age", "The years of your life"],
    },
    {
      question:
        "A man who was outside in the rain without an umbrella or hat didn't get a single hair on his head wet. Why?",
      answers: [
        "He was bald",
        "He had no hair",
        "He was completely bald",
        "He was hairless",
        "bald",
      ],
    },
    {
      question: "What gets wet while drying?",
      answers: ["A towel", "Towel", "A drying cloth", "A napkin", "Bath towel", "Hand towel", "Dish towel", "Drying towel", "The towel"],
    },
    {
      question: "What can you keep after giving to someone?",
      answers: ["Your word", "Your promise", "a promise", "A commitment", "Word", "Promise", "Words", "Promises", "Your vow"],
    },
    {
      question: "I shave every day, but my beard keeps growing. What am I?",
      answers: ["A barber", "barbers", "A shaver", "shavers", "Hair stylist", "Hairdresser", "A hair cutter", "Barber shop owner"],
    },
    {
      question:
        "You see a boat filled with people, yet there isn't a single person on board. How is that possible?",
      answers: [
        "All the people on the boat are married",
        "Everyone on the boat is married",
        "The boat is full of married people",
        "theyre all married",
      ],
    },
    {
      question:
        "A man dies of old age on his 22nd birthday. How is this possible?",
      answers: [
        "He was born on February 29",
        "He was born on a leap day",
        "He was born on February 29th",
        "His birthday is February 29",
      ],
    },
    {
      question: "I have branches, but no fruit, trunk, or leaves. What am I?",
      answers: ["A bank", "A financial institution", "The bank", "Banking institution", "Credit union", "Bank branches", "Financial branches"],
    },
    {
      question: "What can't talk but will always reply when spoken to?",
      answers: ["An echo", "Echo", "A reverberation", "Sound reflection", "Reflected sound", "The echo", "Sound echo", "Voice echo"],
    },
    {
      question: "The more of this there is, the less you will see. What is it?",
      answers: ["Darkness", "The dark", "Shadow", "Shadows", "Dark", "Black", "Night", "Nighttime", "Obscurity"],
    },
    {
      question:
        "David's parents have three sons: Snap, Crackle, and what's the name of the third son?",
      answers: ["David", "His name is David", "The third son is David"],
    },
    {
      question:
        "I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?",
      answers: ["Your shadow", "A shadow", "The shadow of you", "shadow"],
    },
    {
      question: "What has many keys but can't open a single lock?",
      answers: ["A piano", "A keyboard", "piano", "keyboard", "Musical keyboard", "Digital piano", "Electric keyboard", "Computer keyboard", "Typing keyboard", "Grand piano"],
    },
    {
      question: "What can you hold in your left hand but not in your right?",
      answers: ["Your right elbow", "Your right hand", "Your right wrist", "Right elbow", "The right elbow", "Your own right elbow", "Right arm elbow"],
    },
    {
      question: "What is black when it's clean and white when it's dirty?",
      answers: ["A chalkboard", "A blackboard", "chalkboard", "blackboard"],
    },
    {
      question: "What gets bigger when more is taken away?",
      answers: ["A hole", "A pit", "A divet", "hole", "pit"],
    },
    {
      question: "What has ears but cannot hear?",
      answers: ["A cornfield", "Corn", "A field of corn"],
    }
  ],
  medium: [
    {
      question:
        "I'm light as a feather, yet the strongest person can't hold me for 25 minutes. What am I?",
      answers: ["Your breath", "Breath", "The breath", "Breathing", "Human breath", "One's breath", "Air from lungs"],
    },
    {
      question: "Where does today come before yesterday?",
      answers: [
        "In the dictionary",
        "In a dictionary",
        "The dictionary",
        "dictionary",
        "Alphabetical order",
        "In alphabetical listing",
        "Dictionary order",
      ],
    },
    {
      question: "What invention lets you look right through a wall?",
      answers: ["A window", "A glass window", "transparent glass", "window", "Windows", "Glass pane", "Glass panel", "Window pane", "House window"],
    },
    {
      question:
        "If you've got me, you want to share me; if you share me, you haven't kept me. What am I?",
      answers: ["A secret", "A confidential matter", "secret", "Secrets", "The secret", "Confidential information", "Private information"],
    },
    {
      question: "What can't be put in a saucepan?",
      answers: ["Its lid", "The saucepans lid", "The cover of the saucepan"],
    },
    {
      question:
        "I have keys but no locks. I have a space but no room. You can enter, but you can't exit. What am I?",
      answers: ["A keyboard", "A computer keyboard", "keyboard"],
    },
    {
      question: "What is easy to get into, but hard to get out of?",
      answers: ["Trouble", "A bad situation", "A dilemma", "a sinkhole"],
    },
    {
      question:
        "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
      answers: ["A map", "A world map", "A geographical map", "map"],
    },
    {
      question: "What has one eye, but can't see?",
      answers: ["A needle", "A sewing needle", "A pin"],
    },
    {
      question: "What has a head, a tail, is brown, and has no legs?",
      answers: ["A penny", "A coin", "A brown coin", "penny"],
    },
    {
      question:
        "What can travel around the world while staying in the same spot?",
      answers: ["A stamp", "A postage stamp", "stamp"],
    },
    {
      question: "What has to be given before you can catch it?",
      answers: ["A cold", "The flu", "A virus", "cold", "virus"],
    },
    {
      question: "What has 13 hearts, but no other organs?",
      answers: [
        "A deck of cards",
        "A playing card deck",
        "A pack of cards",
        "a card deck",
        "a deck",
        "Playing cards",
        "Card deck",
        "Cards",
        "Standard deck",
        "Card pack",
      ],
    },
    {
      question: "What is so fragile that saying its name breaks it?",
      answers: ["Silence", "Quiet", "The silence", "Quietness", "Complete silence", "Perfect silence", "Peace and quiet"],
    },
    {
      question: "What has four wheels and flies?",
      answers: ["A garbage truck", "A trash truck", "A refuse truck"],
    },
    {
      question: "The more you have of me, the less you see. What am I?",
      answers: ["Darkness", "Shadows", "the dark"],
    },
    {
      question: "What can run, but never walks, has a bed but never sleeps?",
      answers: ["A river", "A stream", "A current", "river"],
    },
    {
      question: "What gets sharper the more you use it?",
      answers: ["Your brain", "Your mind", "Your intellect", "brain", "mind"],
    },
    {
      question: "What has ends but no beginning?",
      answers: ["A stick", "A pencil", "A line segment", "pencil", "stick"],
    },
    {
      question: "What has teeth but cannot bite?",
      answers: ["A comb", "A hair comb", "comb"],
    },
    {
      question: "What is always coming but never arrives?",
      answers: ["Tomorrow", "The future", "The next day"],
    },
    {
      question: "What has words but never speaks?",
      answers: ["A book", "Book"],
    },
    {
      question: "What has a neck but no head?",
      answers: ["A bottle", "Bottle"],
    },
    {
      question: "The more you remove from me, the bigger I get. What am I?",
      answers: ["A hole"],
    },
    {
      question: "What has one eye but can't see?",
      answers: ["A needle", "A sewing needle"],
    }
  ],
  hard: [
    {
      question: "What animal walks on all fours in the morning, two in the afternoon, and three in the evening?",
      answers: ["Human", "Man", "Person", "A human", "A man", "Mankind", "A person"],
    },
    {
      question: "What asks but never answers?",
      answers: ["An owl", "Owl", "A barn owl", "The owl"],
    },
    {
      question:
        "You measure my life in hours and I serve you by expiring. I'm quick when I'm thin and slow when I'm fat. The wind is my enemy. What am I?",
      answers: ["A candle", "A wick", "A burning candle"],
    },
    {
      question:
        "I turn around once, what is out will not get in. I turn around again, what is in will not get out. What am I?",
      answers: ["A key", "A door key", "Lock key", "House key", "The key"],
    },
    {
      question:
        "The person who makes it sells it. The person who buys it never uses it. The person who uses it never knows they're using it. What is it?",
      answers: [
        "A coffin",
        "A burial casket",
        "A grave box",
        "coffin",
        "casket",
        "grave box",
      ],
    },
    {
      question:
        "I'm found in socks, scarves, and mittens; and often in the paws of playful kittens. What am I?",
      answers: ["Yarn", "Wool", "String"],
    },
    {
      question: "What disappears as soon as you say its name?",
      answers: ["Silence", "Quiet", "Stillness"],
    },
    {
      question:
        "I am taken from a mine, and shut inside a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
      answers: ["pencil core", "Pencil lead", "Graphite", "Pencil graphite", "Lead", "The lead in a pencil", "Pencil's core", "Drawing lead"],
    },
    {
      question:
        "I have no flesh, no feathers, no scales, no bones. Yet I have fingers and thumbs of my own. What am I?",
      answers: ["A glove", "A mitten", "mitten", "glove"],
    },
    {
      question: "What has a heart that doesn't beat?",
      answers: ["An artichoke", "A palm tree", "A cabbage"],
    },
    {
      question: "I can be cracked, made, told, and played. What am I?",
      answers: ["A joke", "A riddle", "A pun"],
    },
    {
      question: "The more you have of me, the less you see. What am I?",
      answers: ["Darkness", "Night", "The dark"],
    },
    {
      question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answers: ["The letter 'M'", "M", "The letter m", "Letter M", "The character M", "The letter 'M'", "The m sound", "Letter 'm'"],
    },
    {
      question: "I can be long, or I can be short. I can be grown or I can be bought. I can be painted or left bare. I can be round or I can be square. What am I?",
      answers: ["A pole", "A stick", "A pencil"],
    },
    {
      question: "What can travel around the world while staying in the corner?",
      answers: ["A stamp", "A postage stamp", "A stamp on an envelope"],
    },
    {
      question: "What gets bigger the more you take away from it?",
      answers: ["A hole", "A pit", "A void"],
    },
    {
      question: "What comes down but never goes up?",
      answers: ["Rain", "Snow", "The temperature"],
    },
    {
      question: "I am always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?",
      answers: ["Fire", "Flame", "A blaze"],
    },
    {
      question: "I am tall when I am young, and I am short when I am old. What am I?",
      answers: ["A candle", "A wick", "A matchstick"],
    },
    {
      question: "What is as light as a feather, yet the strongest man can't hold it for much longer than a minute?",
      answers: ["Breath", "Air", "Your breath"],
    },
    {
      question: "What is never used until it is broken?",
      answers: ["An egg", "A promise", "A glowstick"],
    },
    {
      question: "What is always in front of you but can't be seen?",
      answers: ["The future", "Tomorrow", "What's ahead"],
    },
    {
      question: "What has keys but can't open locks?",
      answers: ["A piano", "A keyboard", "A computer keyboard"],
    },
    {
      question: "What begins with T, ends with T, and has T in it?",
      answers: ["A teapot", "A tea pot", "A teacup"],
    },
    {
      question: "What can you catch, but not throw?",
      answers: ["A cold", "A virus", "A sickness"],
    }
  ],
  impossible: [
    {
      question: "What is made of water but if you put it into water it will die?",
      answers: ["An ice cube", "Ice", "Frozen water", "Ice cubes", "A snowflake"],
    },
    {
      question: "What can be broken, but is never held?",
      answers: ["A promise", "A vow", "A trust"],
    },
    {
      question: "What gets sharper the more you use it?",
      answers: ["Your brain", "Your mind", "Your intellect"],
    },
    {
      question: "What is invisible and makes things visible?",
      answers: ["Light", "Air", "Energy"],
    },
    {
      question: "What is greater than God, more evil than the devil, the poor have it, the rich need it, and if you eat it, you die?",
      answers: ["Nothing", "Zero", "Nada", "Nil", "Void", "Emptiness", "The answer is nothing", "There is nothing"],
    },
    {
      question: "What can you hold without ever touching it?",
      answers: ["Your breath", "A conversation", "A thought", "Breath", "Thoughts", "Memories", "Eye contact", "Attention", "A gaze"],
    },
    {
      question: "What has keys but can't open locks?",
      answers: ["A piano", "A keyboard", "A computer keyboard"],
    },
    {
      question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answers: ["The letter 'M'", "The letter m", "M"],
    },
    {
      question: "The more of this there is, the less you see. What is it?",
      answers: ["Darkness", "The dark", "Shadows"],
    },
    {
      question: "What has four fingers and a thumb but is not alive?",
      answers: ["A glove", "A mitten", "A hand-shaped object"],
    },
    {
      question: "I am something that can never be fully known, yet you can always feel me, even when I'm not present. What am I?",
      answers: ["Love", "Emotion", "Time"],
    },
    {
      question: "What never asks a question, but gets answered all the time?",
      answers: ["A telephone", "A phone", "A text message"],
    },
    {
      question: "What is so fragile that saying its name breaks it?",
      answers: ["Silence", "Quiet", "Stillness"],
    },
    {
      question: "What begins with an E, ends with an E, but only contains one letter?",
      answers: ["An envelope", "A letter", "Envelope", "The envelope", "A mail envelope", "Postal envelope", "Mailing envelope"],
    },
    {
      question: "What do you throw out when you want to use it, but take in when you don't want to use it?",
      answers: ["An anchor", "A boat anchor", "Ship anchor", "Anchor", "The anchor"],
    },
    {
      question: "I have cities, but no houses. I have forests, but no trees. I have rivers, but no water. What am I?",
      answers: ["A map", "A world map", "A geographical map"],
    },
    {
      question: "What can't be seen but can be heard, and can't be touched but can be felt?",
      answers: ["A sound", "A whisper", "A voice"],
    },
    {
      question: "What has no beginning, end, or middle?",
      answers: ["A circle", "A loop", "A sphere"],
    },
    {
      question: "What falls but never breaks, and breaks but never falls?",
      answers: ["Night and day", "Night falls day breaks", "Dusk and dawn", "Day and night"],
    },
    {
      question: "What has a head, a tail, but no body?",
      answers: ["A coin", "A penny", "A coin flip"],
    },
    {
      question: "What comes down, but never goes up?",
      answers: ["Rain", "Snow", "The temperature"],
    },
    {
      question: "What word is spelled incorrectly in every dictionary?",
      answers: ["Incorrectly", "The word incorrectly", "Incorrectly is", "The word 'incorrectly'"],
    },
    {
      question: "I move without wings, between silken strings. What am I?",
      answers: ["A spider", "An arachnid", "A web spinner", "A spider on its web"],
    },
    {
      question: "What belongs to you but others use it more than you do?",
      answers: ["Your name", "My name", "Name", "A name", "Your identity"],
    },
    {
      question: "What goes on four legs in the morning, two legs in the afternoon, and three legs in the evening?",
      answers: ["A human", "Man", "A person", "Humankind", "People"],
    },
  ]
};

/**
 * Frequently Asked Questions about the riddle game
 * Each FAQ object contains:
 * - question: The frequently asked question
 * - answer: The detailed answer/explanation
 */
const faqs = [
  {
    question: "How do I play the game?",
    answer: "Start by selecting a difficulty level or clicking 'Start Riddling!' to begin with easy riddles. Read the riddle carefully, type your answer in the input box, and click 'Submit' or press Enter. The game will let you know if your answer is correct."
  },
  {
    question: "How are answers checked?",
    answer: "The game uses fuzzy matching to check your answers, which means your answer doesn't have to be exactly like the stored answer. Minor spelling errors or additional words are usually accepted as long as your answer is close enough to the correct one."
  },
  {
    question: "What do the different difficulty levels mean?",
    answer: "The game has four difficulty levels: Easy (straightforward riddles), Medium (requires more thinking), Hard (challenging wordplay and logic), and Impossible (extremely tricky riddles that will test even the best puzzle solvers)."
  },
  {
    question: "Can I skip a riddle if I don't know the answer?",
    answer: "Yes! Click the 'Skip Riddle' button to move to the next riddle without answering the current one. You can always come back to difficult riddles later."
  },
  {
    question: "How do I navigate between riddles?",
    answer: "Use the 'Previous Riddle' and 'Next Riddle' buttons to move back and forth between riddles. When you finish a difficulty level, the game will automatically move you to the next difficulty."
  },
  {
    question: "Why isn't my correct answer being accepted?",
    answer: "While our system uses fuzzy matching, sometimes your wording might be too different from the expected answers. Try rephrasing your answer or using simpler terms. If you're sure you're right, your answer might be missing from our database."
  },
  {
    question: "Is there a time limit for solving riddles?",
    answer: "No, there's no time limit. Take as much time as you need to think about each riddle and submit your answer when ready."
  },
  {
    question: "Can I create or submit my own riddles?",
    answer: "We're working on a feature to allow users to submit their own riddles. Stay tuned for updates on when this feature will be available!"
  },
  {
    question: "How many riddles are there in total?",
    answer: "Currently, the game contains over 100 riddles across all difficulty levels: 25 Easy, 25 Medium, 25 Hard, and 25 Impossible riddles."
  },
  {
    question: "Is my progress saved?",
    answer: "Currently, the game doesn't save your progress between sessions. We're working on adding this feature in a future update."
  }
];

/**
 * Initialize the game when the DOM is fully loaded
 */
document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const home = document.getElementById("home");
  const download = document.getElementById("download");
  const upload = document.getElementById("upload");
  const faq = document.getElementById("faq");
  const easy = document.getElementById("easy");
  const medium = document.getElementById("medium");
  const hard = document.getElementById("hard");
  const impossible = document.getElementById("impossible");
  const stats = document.getElementById("stats");
  const start = document.getElementById("start");
  const riddleText = document.getElementById("riddle");
  const homepage = document.getElementById("homepage");
  const riddlePage = document.getElementById("riddle-page");
  const faqPage = document.getElementById("faq-page");
  const faqContainer = document.getElementById("faq-container");
  const backToHome = document.getElementById("back-to-home");
  const startR = document.getElementById("start-riddle");
  const submit = document.getElementById("submit");
  const riddleForm = document.getElementById("riddle-form");
  const riddleAnswer = document.getElementById("riddle-answer");
  const difficulty_display = document.getElementById("difficulty");
  const feedback = document.getElementById("feedback");
  const next = document.getElementById("next");
  const previous = document.getElementById("previous");
  const uploadPage = document.getElementById("upload-page");
  const statsPage = document.getElementById("stats-page");
  
  // Mobile dropdown elements
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const homeMobile = document.getElementById("home-mobile");
  const downloadMobile = document.getElementById("download-mobile");
  const uploadMobile = document.getElementById("upload-mobile");
  const faqMobile = document.getElementById("faq-mobile");
  const easyMobile = document.getElementById("easy-mobile");
  const mediumMobile = document.getElementById("medium-mobile");
  const hardMobile = document.getElementById("hard-mobile");
  const impossibleMobile = document.getElementById("impossible-mobile");
  const statsMobile = document.getElementById("stats-mobile");
  const startMobile = document.getElementById("start-mobile");

  // Initialize completion status for all riddles
  var riddleStatus = {
    easy: Array(riddles.easy.length).fill(false),
    medium: Array(riddles.medium.length).fill(false), 
    hard: Array(riddles.hard.length).fill(false),
    impossible: Array(riddles.impossible.length).fill(false)
  };

  // Store all pages for navigation
  const pages = [homepage, riddlePage, faqPage, uploadPage, statsPage];
  next.textContent = riddles.impossible.length;
  
  // Game state variables
  var doneWithRiddle = false;  // Flag to track if current riddle is solved
  var currRiddle;              // Current riddle object
  var currRiddleNum;           // Current riddle index
  var currDifficulty           // Current difficulty level
  var totalSolved = 0;         // Total riddles solved

  switchPages(homepage);

  /**
   * Gets the default CSS display property for a given HTML tag
   * @param {string} tagName - HTML tag name
   * @return {string} Default display property
   */
  function getDefaultDisplay(tagName) {
    const tempElement = document.createElement(tagName);
    document.body.appendChild(tempElement);
    const defaultDisplay = window.getComputedStyle(tempElement).display;
    document.body.removeChild(tempElement);
    return defaultDisplay;
  }

  /**
   * Switch visibility between different pages
   * @param {HTMLElement} page - The page to display
   */
  function switchPages(page) {
    if (page.tagName) {
      // Hide all pages
      pages.forEach((page) => {
        page.style.display = "none";
      });
      // Show the selected page with its default display property
      let defaultPageDisplay = getDefaultDisplay(page.tagName);
      page.style.display = defaultPageDisplay;
    }
  }

  /**
   * Display a riddle to the user
   * @param {string} difficulty - Difficulty level (easy, medium, hard, impossible)
   * @param {number|string} riddleNum - Index of riddle or "random" for random selection
   */
  function showRiddle(difficulty, riddleNum) {
    // Reset game state
    doneWithRiddle = false;
    currDifficulty = difficulty;
    
    // Select the appropriate riddle list based on difficulty
    switch (difficulty) {
      case "easy":
        var ridList = riddles.easy;
        break;

      case "medium":
        var ridList = riddles.medium;
        break;

      case "hard":
        var ridList = riddles.hard;
        break;

      case "impossible":
        var ridList = riddles.impossible;
        break;

      default:
        return;
    }

    // Validate riddleNum to ensure it's within bounds
    if (riddleNum !== "random" && typeof riddleNum === "number") {
      // Make sure riddleNum is a valid index
      if (riddleNum < 0) {
        riddleNum = 0;
      } else if (riddleNum >= ridList.length) {
        riddleNum = ridList.length - 1;
      }
    }
    
    currRiddleNum = riddleNum;
    riddleAnswer.value = "";
    feedback.style.display = "none";
    next.textContent = "Skip Riddle";
    
    // Use classes instead of inline styles - ensure proper class application
    next.classList.remove('button-green');
    next.classList.add('button-red');
    previous.classList.remove('button-green');
    previous.classList.add('button-red');
    
    submit.style.display = getDefaultDisplay(submit.tagName);
    
    // Handle random riddle selection or specific index
    if (riddleNum == "random") {
      riddleNum = Math.floor(Math.random() * ridList.length);
      riddleText.textContent = ridList[riddleNum].question;
      currRiddle = ridList[riddleNum];
      difficulty_display.textContent =
        difficulty.charAt(0).toUpperCase() +
        difficulty.slice(1) +
        " #" +
        (riddleNum + 1);
    } else {
      riddleText.textContent = ridList[riddleNum].question;
      currRiddle = ridList[riddleNum];
      difficulty_display.textContent =
        difficulty.charAt(0).toUpperCase() +
        difficulty.slice(1) +
        " #" +
        (riddleNum + 1);
    }
  }

  /**
   * Update the stats page with the current riddle status
   */
  function updateStatsPage() {
    // Update the stats page with the current riddle status
    // Get saved stats from localStorage
    const savedStats = localStorage.getItem('riddleStatus');
    if (savedStats) {
        var riddleStatusData = JSON.parse(savedStats);
    }
    
    const statsContainer = document.getElementById("stats-container");
    statsContainer.innerHTML = '';

    // Calculate total solved riddles across all difficulties
    let totalSolved = 0;
    let totalRiddles = 0;

    // Create stats for each difficulty level
    for (const difficulty in riddleStatusData) {
        const difficultyStats = document.createElement('div');
        difficultyStats.className = 'stats-item';
        
        // Count solved riddles for this difficulty
        const solvedCount = riddleStatusData[difficulty].filter(status => status).length;
        const totalCount = riddleStatusData[difficulty].length;
        const percentage = ((solvedCount / totalCount) * 100).toFixed(1);
        
        totalSolved += solvedCount;
        totalRiddles += totalCount;
        
        difficultyStats.textContent = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}: ${solvedCount}/${totalCount} (${percentage}%)`;
        difficultyStats.addEventListener("click", () => {
          statsContainer.innerHTML = '';
          const backButton = document.createElement('button');
          backButton.textContent = 'Back to Summary';
          backButton.className = 'center';
          backButton.classList.add('button-purple');
          backButton.style.marginTop = '10px';
          backButton.style.marginBottom = '15px';
          backButton.addEventListener('click', () => updateStatsPage());
          statsContainer.appendChild(backButton);
          statsContainer.appendChild(difficultyStats);
          
          // Add riddles of the selected difficulty with clickable functionality
          riddles[difficulty].forEach((riddle, index) => {
            const riddleStats = document.createElement('div');
            riddleStats.className = 'stats-item';
            
            // Create a div for the riddle text
            const riddleText = document.createElement('div');
            riddleText.className = 'riddle-text';
            riddleText.textContent = riddle.question;
            
            // Create a div for the status (Solved/Not Solved)
            const statusElement = document.createElement('div');
            statusElement.className = 'riddle-status';
            
            if (riddleStatusData[difficulty] && riddleStatusData[difficulty][index]) {
              statusElement.textContent = "Solved";
              statusElement.className += ' solved';
            } else {
              statusElement.textContent = "Not Solved";
              statusElement.className += ' not-solved';
            }
            
            // Add text and status to the riddle stats element
            riddleStats.appendChild(riddleText);
            riddleStats.appendChild(statusElement);
            
            // Add click event to navigate to this specific riddle
            riddleStats.addEventListener("click", () => {
              // Switch to the riddle page
              switchPages(riddlePage);
              
              // Show the specific riddle
              showRiddle(difficulty, index);
              
              // Add the indicator to the riddle page
              const riddleContainer = document.getElementById('riddle-container');
              // Remove any existing indicators first
              const existingIndicator = document.querySelector('.from-stats-indicator');
              if (existingIndicator) {
                existingIndicator.remove();
              }
              riddleContainer.appendChild(fromStatsIndicator);
            });
            
            statsContainer.appendChild(riddleStats);
          });
        });
        statsContainer.appendChild(difficultyStats);
    }

    // Create total stats element last
    const statsElement = document.createElement('div');
    statsElement.className = 'stats-item total-stats';
    const totalPercentage = ((totalSolved / totalRiddles) * 100).toFixed(1);
    statsElement.textContent = `Total Riddles Solved: ${totalSolved}/${totalRiddles} (${totalPercentage}%)`;
    statsContainer.appendChild(statsElement);
  }

  /**
   * Validate user's answer against the current riddle's acceptable answers
   * Uses fuzzy matching to allow for slight variations in spelling/wording
   */
  function checkAnswer() {
    feedback.style.display = getDefaultDisplay(feedback.tagName);
    userInput = riddleAnswer.value.trim().toLowerCase();
    
    // Check if answer is too short
    if (userInput.length < 3) {
      feedback.textContent = "Answer Too Short. Try Again";
      feedback.style.backgroundColor = "red";
    } else {
      // Use Fuse.js for fuzzy matching against acceptable answers
      const fuse = new Fuse(currRiddle.answers, {
        includeScore: true,
        threshold: 0.15,  // How close the match needs to be (lower = stricter)
      });
      const result = fuse.search(userInput);
      
      // Handle correct and incorrect answers
      if (result.length > 0) {
        doneWithRiddle = true;
        feedback.textContent = "Correct! Good Solving.";
        feedback.style.backgroundColor = "green";
        submit.style.display = "none";
        next.textContent = "Next Riddle";
        riddleStatus[currDifficulty][currRiddleNum] = true;
        // Save progress to local storage
        localStorage.setItem('riddleStatus', JSON.stringify(riddleStatus));
        // Update stats page
        // Use class instead of inline style - ensure proper class application
        next.classList.remove('button-red');
        next.classList.add('button-green');
      } else {
        feedback.textContent = "Bad Solving! Try again.";
        feedback.style.backgroundColor = "red";
      }
    }
  }
  
  // Event listeners for game navigation and interaction
  
  // Start buttons (from homepage and riddle page)
  [start, startR].forEach((element) => {
    element.addEventListener("click", () => {
      if (riddlePage.style.display === "none") {
        switchPages(riddlePage);
        showRiddle("easy", 0);
      }
    });
  });

  upload.addEventListener("click", () => {
    switchPages(uploadPage);
  });

  // Easy riddles button - starts game with easy difficulty
  easy.addEventListener("click", () => {
    if (currDifficulty != "easy") {
      switchPages(riddlePage);
      showRiddle("easy", 0);
    }
  });

  // Medium riddles button - starts game with medium difficulty
  medium.addEventListener("click", () => {
    if (currDifficulty != "medium") {
      switchPages(riddlePage);
      showRiddle("medium", 0);
    }
  });

  // Hard riddles button - starts game with hard difficulty
  hard.addEventListener("click", () => {
    if (currDifficulty != "hard") {
      switchPages(riddlePage);
      showRiddle("hard", 0);
    }
  });

  // Impossible riddles button - starts game with impossible difficulty
  impossible.addEventListener("click", () => {
    if (currDifficulty != "impossible") {
      switchPages(riddlePage);
      showRiddle("impossible", 0);
    }
  });

  stats.addEventListener("click", () => {
    switchPages(statsPage);
    updateStatsPage();
  });

  // Submit button for answering riddles
  submit.addEventListener("click", () => {
    checkAnswer();
  });

  // Form submission handler (for pressing Enter in the answer field)
  riddleForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!doneWithRiddle) {
      checkAnswer();
    } else {
      // Move to next riddle if current one is solved
      if ((currRiddleNum + 1) >= riddles[currDifficulty].length) {
        // Move to next difficulty if we've reached the end of current difficulty
        currRiddleNum = 0; // Set to first riddle of next difficulty
        switch (currDifficulty) {
          case "easy":
            currDifficulty = "medium";
            break;

          case "medium":
            currDifficulty = "hard";
            break;

          case "hard":
            currDifficulty = "impossible";
            break;

          case "impossible":
            currDifficulty = "easy";
            break;
        }
        showRiddle(currDifficulty, currRiddleNum);
      } else {
      showRiddle(currDifficulty, currRiddleNum + 1);
      }
    }
  });

  // Next button handler - advances to the next riddle
  next.addEventListener("click", () => {
    if ((currRiddleNum + 1) >= riddles[currDifficulty].length) {
      // Reset index and move to next difficulty when reaching the end
      currRiddleNum = 0; // Set to first riddle of next difficulty
      switch (currDifficulty) {
        case "easy":
          currDifficulty = "medium";
          break;

        case "medium":
          currDifficulty = "hard";
          break;

        case "hard":
          currDifficulty = "impossible";
          break;

        case "impossible":
          currDifficulty = "easy";
          break;
      }
      showRiddle(currDifficulty, currRiddleNum);
    } else {
    showRiddle(currDifficulty, currRiddleNum + 1);
    }
  });

  // Previous button handler - goes back to the previous riddle
  previous.addEventListener("click", () => {
    if ((currRiddleNum - 1) < 0) {
      // Handle wrapping to previous difficulty when at the beginning
      switch (currDifficulty) {
        case "easy":
          currDifficulty = "impossible";
          currRiddleNum = riddles.impossible.length - 1; // Set to last riddle of impossible
          break;

        case "medium":
          currDifficulty = "easy";
          currRiddleNum = riddles.easy.length - 1; // Set to last riddle of easy
          break;

        case "hard":
          currDifficulty = "medium";
          currRiddleNum = riddles.medium.length - 1; // Set to last riddle of medium
          break;

        case "impossible":
          currDifficulty = "hard";
          currRiddleNum = riddles.hard.length - 1; // Set to last riddle of hard
          break;
      }
      showRiddle(currDifficulty, currRiddleNum);
    } else {
    showRiddle(currDifficulty, currRiddleNum - 1);
    }
  });

  /**
   * Creates and displays the FAQ content
   */
  function displayFAQs() {
    // Clear any existing content
    faqContainer.innerHTML = '';
    
    // Create and append FAQ items
    faqs.forEach(faqItem => {
      const faqElement = document.createElement('div');
      faqElement.className = 'faq-item';
      
      const questionElement = document.createElement('div');
      questionElement.className = 'faq-question';
      questionElement.textContent = faqItem.question;
      
      const answerElement = document.createElement('div');
      answerElement.className = 'faq-answer';
      answerElement.textContent = faqItem.answer;
      
      faqElement.appendChild(questionElement);
      faqElement.appendChild(answerElement);
      faqContainer.appendChild(faqElement);
    });
  }
  
  // Event listeners for navigation
  home.addEventListener("click", () => {
    switchPages(homepage);
  });
  
  faq.addEventListener("click", () => {
    displayFAQs();
    switchPages(faqPage);
  });

  // Add hover effect manually for the next button
  next.addEventListener("mouseover", function() {
    if (this.classList.contains("button-red")) {
      this.style.backgroundColor = "rgb(255, 85, 85)"; // Match other red buttons
    } else if (this.classList.contains("button-green")) {
      this.style.backgroundColor = "rgb(75, 203, 75)"; // Match other green buttons
    }
  });
  
  next.addEventListener("mouseout", function() {
    if (this.classList.contains("button-red")) {
      this.style.backgroundColor = "red";
    } else if (this.classList.contains("button-green")) {
      this.style.backgroundColor = "green";
    }
  });

  download.addEventListener("click", () => {
    // Generate the content for the riddles.txt file
    let content = "RIDDLEY: RIDDLES FOR EVERYONE\n\n";
    
    // Add Easy Riddles
    content += "=== EASY RIDDLES ===\n\n";
    riddles.easy.forEach((riddle, index) => {
      content += `${index + 1}. ${riddle.question}\n`;
      content += `   Answer: ${riddle.answers[0]}\n\n`;
    });
    
    // Add Medium Riddles
    content += "=== MEDIUM RIDDLES ===\n\n";
    riddles.medium.forEach((riddle, index) => {
      content += `${index + 1}. ${riddle.question}\n`;
      content += `   Answer: ${riddle.answers[0]}\n\n`;
    });
    
    // Add Hard Riddles
    content += "=== HARD RIDDLES ===\n\n";
    riddles.hard.forEach((riddle, index) => {
      content += `${index + 1}. ${riddle.question}\n`;
      content += `   Answer: ${riddle.answers[0]}\n\n`;
    });
    
    // Add Impossible Riddles
    content += "=== IMPOSSIBLE RIDDLES ===\n\n";
    riddles.impossible.forEach((riddle, index) => {
      content += `${index + 1}. ${riddle.question}\n`;
      content += `   Answer: ${riddle.answers[0]}\n\n`;
    });
    
    // Create a Blob with the content
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'riddles.txt';
    
    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 100);
  });

  // Mobile dropdown toggle
  dropdownToggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the document click handler from immediately closing it
    dropdownMenu.classList.toggle('show');
  });
  
  // Hide dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown") && dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
    }
  });
  
  // Mobile navigation button event listeners
  homeMobile.addEventListener("click", () => {
    switchPages(homepage);
    dropdownMenu.classList.remove('show');
  });
  
  downloadMobile.addEventListener("click", () => {
    const json = JSON.stringify(riddles);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "riddles.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    dropdownMenu.classList.remove('show');
  });
  
  uploadMobile.addEventListener("click", () => {
    switchPages(uploadPage);
    dropdownMenu.classList.remove('show');
  });
  
  faqMobile.addEventListener("click", () => {
    switchPages(faqPage);
    displayFAQs();
    dropdownMenu.classList.remove('show');
  });
  
  easyMobile.addEventListener("click", () => {
    if (currDifficulty != "easy") {
      switchPages(riddlePage);
      showRiddle("easy", 0);
    }
    dropdownMenu.classList.remove('show');
  });
  
  mediumMobile.addEventListener("click", () => {
    if (currDifficulty != "medium") {
      switchPages(riddlePage);
      showRiddle("medium", 0);
    }
    dropdownMenu.classList.remove('show');
  });
  
  hardMobile.addEventListener("click", () => {
    if (currDifficulty != "hard") {
      switchPages(riddlePage);
      showRiddle("hard", 0);
    }
    dropdownMenu.classList.remove('show');
  });
  
  impossibleMobile.addEventListener("click", () => {
    if (currDifficulty != "impossible") {
      switchPages(riddlePage);
      showRiddle("impossible", 0);
    }
    dropdownMenu.classList.remove('show');
  });
  
  statsMobile.addEventListener("click", () => {
    switchPages(statsPage);
    updateStatsPage();
    dropdownMenu.classList.remove('show');
  });
  
  startMobile.addEventListener("click", () => {
    switchPages(riddlePage);
    showRiddle("easy", "random");
    dropdownMenu.classList.remove('show');
  });

  // Next button - shows the next riddle
  next.addEventListener("click", () => {
    // ... existing code ...
  });
});
