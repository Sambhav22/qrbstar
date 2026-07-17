export const chapter = "Chapter - 4: The New Terror";
export const noOfActivities = 3;
export var activityData;

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
        question: "Who were sitting near the window at the beginning of the story?",
        optionA: "Malti and Kamal",
        optionB: "Malti and Madhuri",
        optionC: "Kamal and Pradeep",
        correctAnswer: "Malti and Kamal",
      }),
      shuffleOptions({
        question: "Why were the children waiting for the rain to stop?",
        optionA: "To go out and play",
        optionB: "To meet Mr. Bhardwaj",
        optionC: "To go to the shop",
        correctAnswer: "To go out and play",
      }),
      shuffleOptions({
        question: "What did Kamal call the windows of the new house?",
        optionA: "Shiny windows",
        optionB: "Shady windows",
        optionC: "Beautiful windows",
        correctAnswer: "Shady windows",
      }),
      shuffleOptions({
        question: "Who said, “God help us”?",
        optionA: "Kamal",
        optionB: "Malti",
        optionC: "Mamma",
        correctAnswer: "Malti",
      }),
      shuffleOptions({
        question: "What did Malti hold while sitting at the threshold?",
        optionA: "A notebook",
        optionB: "A fat book",
        optionC: "A Frisbee",
        correctAnswer: "A fat book",
      }),
      shuffleOptions({
        question: "Who among the four children studied in a different school?",
        optionA: "Malti and Kamal",
        optionB: "Madhuri and Pradeep",
        optionC: "Kamal and Madhuri",
        correctAnswer: "Madhuri and Pradeep",
      }),
      shuffleOptions({
        question: "What was the colour of Mr. Bhardwaj’s dog?",
        optionA: "Brown",
        optionB: "Black",
        optionC: "White",
        correctAnswer: "Black",
      }),
      shuffleOptions({
        question: "How did the dog behave on seeing Mr. Bhardwaj?",
        optionA: "He barked loudly",
        optionB: "He wagged his tail like an obedient child",
        optionC: "He ran away",
        correctAnswer: "He wagged his tail like an obedient child",
      }),
      shuffleOptions({
        question: "What did the children fear if their teacher lived next door?",
        optionA: "He would give them extra homework",
        optionB: "He would report everything to their mother",
        optionC: "He would stop them from going to school",
        correctAnswer: "He would report everything to their mother",
      }),
      shuffleOptions({
        question: "What did the children do after playing with Mr. Bhardwaj?",
        optionA: "Watched television",
        optionB: "Slept early",
        optionC: "Ran home to bring their maths books",
        correctAnswer: "Ran home to bring their maths books",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Malti thought the windows were ______.",
        optionA: "Shady",
        optionB: "Dirty out of disuse",
        optionC: "Colourful",
        correctAnswer: "Dirty out of disuse",
      }),
      shuffleOptions({
        question: "Kamal said he was sure a ______ lived in the house.",
        optionA: "Ghost",
        optionB: "Cat",
        optionC: "Teacher",
        correctAnswer: "Ghost",
      }),
      shuffleOptions({
        question: "The children were afraid they would be caught ______.",
        optionA: "Sleeping",
        optionB: "Playing",
        optionC: "Eating",
        correctAnswer: "Playing",
      }),
      shuffleOptions({
        question: "Mamma believed strict people make very good ______.",
        optionA: "Friends",
        optionB: "Teachers",
        optionC: "Neighbours",
        correctAnswer: "Teachers",
      }),
      shuffleOptions({
        question: "Pradeep told them they would have a common ______ with the teacher.",
        optionA: "Playground",
        optionB: "Bus stop",
        optionC: "Room",
        correctAnswer: "Bus stop",
      }),
      shuffleOptions({
        question: "Malti said the dog’s name was very ______.",
        optionA: "Strange",
        optionB: "Sweet",
        optionC: "Funny",
        correctAnswer: "Strange",
      }),
      shuffleOptions({
        question: "The children had not stepped out to play for ______ days.",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "Mr. Bhardwaj was sitting on the ______ when he was laughing.",
        optionA: "Chair",
        optionB: "Grass",
        optionC: "Steps",
        correctAnswer: "Grass",
      }),
      shuffleOptions({
        question: "Malti and Kamal greeted their teacher by saying, “______.”",
        optionA: "Hello Sir",
        optionB: "Good morning, Sir",
        optionC: "Welcome Sir",
        correctAnswer: "Good morning, Sir",
      }),
      shuffleOptions({
        question: "Mr. Bhardwaj asked, “How many ______ did you score in the last unit test?”",
        optionA: "Questions",
        optionB: "Marks",
        optionC: "Books",
        correctAnswer: "Marks",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Malti thought the windows of the empty house were shady.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kamal was sure that a ghost lived inside the house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Malti and Kamal were very good at mathematics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mamma was worried after hearing about Mr. Bhardwaj.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Madhuri and Pradeep studied in the same school as Malti and Kamal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kamal went outside to play while Malti stayed at the threshold.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mr. Bhardwaj’s dog was afraid of him.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The children enjoyed playing Frisbee with Mr. Bhardwaj.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mr. Bhardwaj scolded the children when he saw them with the dog.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "After meeting Mr. Bhardwaj, the children no longer considered him a terror.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
