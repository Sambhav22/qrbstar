export const chapter = "Chapter - 7: The Lumber Room";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What did Nicholas pretend to do in the front garden?",
        optionA: "Play",
        optionB: "Sneak to the gooseberry garden",
        optionC: "Hide",
        correctAnswer: "Sneak to the gooseberry garden",
      }),
      shuffleOptions({
        question: "What colouration did Nicholas describe about the frog?",
        optionA: "Spots and markings",
        optionB: "Blue stripes",
        optionC: "Golden patches",
        correctAnswer: "Spots and markings",
      }),
      shuffleOptions({
        question: "What did Nicholas cover the bird book with before leaving?",
        optionA: "Cotton",
        optionB: "Dust",
        optionC: "Cloth",
        correctAnswer: "Dust",
      }),
      shuffleOptions({
        question: "What was the lumber room key described as?",
        optionA: "Small",
        optionB: "Fat and important-looking",
        optionC: "Rusty",
        correctAnswer: "Fat and important-looking",
      }),
      shuffleOptions({
        question: "What sound came from the garden while Nicholas was inside?",
        optionA: "Birds singing",
        optionB: "Aunt calling",
        optionC: "Children playing",
        correctAnswer: "Aunt calling",
      }),
      shuffleOptions({
        question: "Which object made the nursery teapot look dull?",
        optionA: "Duck-shaped teapot",
        optionB: "Tapestry",
        optionC: "Candlesticks",
        correctAnswer: "Duck-shaped teapot",
      }),
      shuffleOptions({
        question: "How long was the aunt stuck in the tank?",
        optionA: "35 minutes",
        optionB: "20 minutes",
        optionC: "1 hour",
        correctAnswer: "35 minutes",
      }),
      shuffleOptions({
        question: "Who cried while climbing the carriage?",
        optionA: "Girl cousin",
        optionB: "Boy cousin",
        optionC: "Bobby",
        correctAnswer: "Girl cousin",
      }),
      shuffleOptions({
        question: "What did Nicholas imagine about the wolves?",
        optionA: "They would hide",
        optionB: "They might be more than four",
        optionC: "They would run away",
        correctAnswer: "They might be more than four",
      }),
      shuffleOptions({
        question: "What was Bobby’s problem at the beach?",
        optionA: "He was hungry",
        optionB: "His boots were tight",
        optionC: "He lost his toy",
        correctAnswer: "His boots were tight",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The key to the lumber room was kept in the ______.",
        optionA: "Kitchen",
        optionB: "Library shelf",
        optionC: "Cupboard",
        correctAnswer: "Library shelf",
      }),
      shuffleOptions({
        question: "Nicholas sat on a roll of ______ while studying the tapestry.",
        optionA: "Carpet",
        optionB: "Indian hangings",
        optionC: "Blanket",
        correctAnswer: "Indian hangings",
      }),
      shuffleOptions({
        question: "The hunter had only ______ arrows left in his quiver.",
        optionA: "Two",
        optionB: "Four",
        optionC: "Five",
        correctAnswer: "Two",
      }),
      shuffleOptions({
        question: "The aunt told Nicholas not to enter the ______ garden.",
        optionA: "Rose",
        optionB: "Gooseberry",
        optionC: "Apple",
        correctAnswer: "Gooseberry",
      }),
      shuffleOptions({
        question: "The unusual box in the lumber room was made of ______.",
        optionA: "Metal",
        optionB: "Sandal-wood",
        optionC: "Ivory",
        correctAnswer: "Sandal-wood",
      }),
      shuffleOptions({
        question: "Nicholas imagined the hunter’s dogs would be in a ______.",
        optionA: "Safe place",
        optionB: "Tight corner",
        optionC: "Forest",
        correctAnswer: "Tight corner",
      }),
      shuffleOptions({
        question: "The aunt’s voice from the tank was mistaken for the ______.",
        optionA: "Maid",
        optionB: "Evil One",
        optionC: "Cousin",
        correctAnswer: "Evil One",
      }),
      shuffleOptions({
        question: "Nicholas asked if there would be ______ jam for tea.",
        optionA: "Apple",
        optionB: "Strawberry",
        optionC: "Mango",
        correctAnswer: "Strawberry",
      }),
      shuffleOptions({
        question: "The children had no fun at the beach because there was no ______.",
        optionA: "Sand",
        optionB: "Sun",
        optionC: "Game",
        correctAnswer: "Sand",
      }),
      shuffleOptions({
        question: "During tea, Nicholas was ______.",
        optionA: "Talkative",
        optionB: "Silent",
        optionC: "Crying",
        correctAnswer: "Silent",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The aunt organised the beach trip to punish Nicholas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nicholas really wanted to go to the gooseberry garden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The lumber room was full of treasures Nicholas had never seen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tapestry showed a hunter chased by lions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nicholas thought his aunt’s voice might be the Evil One.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The aunt agreed there was no strawberry jam.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nicholas sprinkled dust on the book to hide his visit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The maid rescued the aunt from the rainwater tank.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bobby enjoyed himself thoroughly at the beach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nicholas kept quiet at tea, thinking of the tapestry scene.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
