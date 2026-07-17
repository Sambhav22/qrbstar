export const chapter = "Chapter - 5: Cinderella";
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
        question: "Who lived in a big house at the beginning of the story?",
        optionA: "A prince",
        optionB: "A rich gentleman",
        optionC: "A magician",
        correctAnswer: "A rich gentleman",
      }),
      shuffleOptions({
        question: "What kind of woman was the gentleman’s second wife?",
        optionA: "Kind-hearted",
        optionB: "Ill-natured",
        optionC: "Gentle",
        correctAnswer: "Ill-natured",
      }),
      shuffleOptions({
        question: "What did Cinderella’s stepmother make her do?",
        optionA: "Household chores",
        optionB: "Only study",
        optionC: "Go to the market",
        correctAnswer: "Household chores",
      }),
      shuffleOptions({
        question: "What kind of clothes did Cinderella wear?",
        optionA: "Expensive gowns",
        optionB: "Tattered clothes",
        optionC: "Silver shoes",
        correctAnswer: "Tattered clothes",
      }),
      shuffleOptions({
        question: "What did Cinderella desire sometimes?",
        optionA: "To have a pretty dress",
        optionB: "To eat sweets",
        optionC: "To go to school",
        correctAnswer: "To have a pretty dress",
      }),
      shuffleOptions({
        question: "Who invited the people to the ball?",
        optionA: "The Fairy",
        optionB: "The Prince",
        optionC: "The King",
        correctAnswer: "The Prince",
      }),
      shuffleOptions({
        question: "Who appeared with a magic wand?",
        optionA: "A queen",
        optionB: "A fairy godmother",
        optionC: "A soldier",
        correctAnswer: "A fairy godmother",
      }),
      shuffleOptions({
        question: "What did the fairy turn the pumpkin into?",
        optionA: "A chair",
        optionB: "A coach",
        optionC: "A palace",
        correctAnswer: "A coach",
      }),
      shuffleOptions({
        question: "What warning did the fairy give Cinderella?",
        optionA: "Do not dance",
        optionB: "Return before midnight",
        optionC: "Do not meet the prince",
        correctAnswer: "Return before midnight",
      }),
      shuffleOptions({
        question: "Who fell in love with Cinderella at first sight?",
        optionA: "The soldiers",
        optionB: "The Prince",
        optionC: "The coachman",
        correctAnswer: "The Prince",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cinderella’s __________ fell ill and died.",
        optionA: "Father",
        optionB: "Mother",
        optionC: "Stepmother",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Cinderella lay on __________ in the fireplace.",
        optionA: "Stones",
        optionB: "Cinders",
        optionC: "Ashes",
        correctAnswer: "Cinders",
      }),
      shuffleOptions({
        question: "The fairy turned six __________ into horses.",
        optionA: "Cats",
        optionB: "Pigeons",
        optionC: "Dogs",
        correctAnswer: "Pigeons",
      }),
      shuffleOptions({
        question: "The fairy turned an old parrot into a __________.",
        optionA: "Guard",
        optionB: "Coachman",
        optionC: "Prince",
        correctAnswer: "Coachman",
      }),
      shuffleOptions({
        question: "The fairy changed Cinderella’s clothes into a __________ gown.",
        optionA: "Red",
        optionB: "Golden and silver embroidered",
        optionC: "Green",
        correctAnswer: "Golden and silver embroidered",
      }),
      shuffleOptions({
        question: "The fairy gave Cinderella shoes of __________.",
        optionA: "Gold",
        optionB: "Silver and crystal",
        optionC: "Wood",
        correctAnswer: "Silver and crystal",
      }),
      shuffleOptions({
        question: "Cinderella danced at the ball until __________ struck.",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eleven",
        correctAnswer: "Twelve",
      }),
      shuffleOptions({
        question: "While running away, Cinderella lost a __________.",
        optionA: "Necklace",
        optionB: "Shoe",
        optionC: "Ring",
        correctAnswer: "Shoe",
      }),
      shuffleOptions({
        question: "The prince ordered soldiers to search for the girl whose __________ fitted.",
        optionA: "Ring",
        optionB: "Shoe",
        optionC: "Dress",
        correctAnswer: "Shoe",
      }),
      shuffleOptions({
        question: "Cinderella forgave her stepmother and __________ in the end.",
        optionA: "Friends",
        optionB: "Stepsisters",
        optionC: "Servants",
        correctAnswer: "Stepsisters",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cinderella’s real mother was very kind-hearted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cinderella’s stepmother treated her with love and care.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cinderella had to wash clothes, cook food, and clean the house.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cinderella slept on soft silk beds in her room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Fairy Godmother turned a pumpkin into a coach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Fairy turned six pigeons into Arabian horses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "At the ball, everyone was surprised to see Cinderella’s beauty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The prince danced only with Cinderella.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cinderella lost her shoe while running down the palace stairs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In the end, the prince married Cinderella and they lived happily ever after.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
