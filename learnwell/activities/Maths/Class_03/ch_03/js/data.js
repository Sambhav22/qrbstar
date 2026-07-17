export const chapter = "Chapter - 3: Lovely Creatures";
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
        question: "What is the nest of a tailorbird like?",
        optionA: "Basket",
        optionB: "Cradle",
        optionC: "Cup",
        correctAnswer: "Cradle",
      }),
      shuffleOptions({
        question: "What does a tailorbird use as thread?",
        optionA: "Silk",
        optionB: "Hair",
        optionC: "Plant down",
        correctAnswer: "Plant down",
      }),
      shuffleOptions({
        question: "What is the colour of cheetal’s underbody?",
        optionA: "Brown",
        optionB: "White",
        optionC: "Grey",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "Who does not have antlers?",
        optionA: "Male cheetal",
        optionB: "Female cheetal",
        optionC: "Both",
        correctAnswer: "Female cheetal",
      }),
      shuffleOptions({
        question: "Where can tailorbirds be found?",
        optionA: "Deserts",
        optionB: "Bushes near home",
        optionC: "Rivers",
        correctAnswer: "Bushes near home",
      }),
      shuffleOptions({
        question: "How many lines are on a male cheetal’s antlers?",
        optionA: "Two",
        optionB: "Four",
        optionC: "Three",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "What does a cheetal do if it senses danger?",
        optionA: "Shouts",
        optionB: "Sleeps",
        optionC: "Stands still",
        correctAnswer: "Stands still",
      }),
      shuffleOptions({
        question: "The cheetal avoids being active during:",
        optionA: "Dusk",
        optionB: "Noon",
        optionC: "Midnight",
        correctAnswer: "Noon",
      }),
      shuffleOptions({
        question: "The word ‘cheetal’ comes from which language?",
        optionA: "English",
        optionB: "Hindi",
        optionC: "Sanskrit",
        correctAnswer: "Sanskrit",
      }),
      shuffleOptions({
        question: "What helps tailorbirds stitch leaves?",
        optionA: "Feet",
        optionB: "Beak",
        optionC: "Wings",
        correctAnswer: "Beak",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The cheetal’s body is covered with ______.",
        optionA: "Spots",
        optionB: "Stripes",
        optionC: "Patches",
        correctAnswer: "Spots",
      }),
      shuffleOptions({
        question: "The tailorbird holds its ______ upright.",
        optionA: "Wing",
        optionB: "Tail",
        optionC: "Bill",
        correctAnswer: "Tail",
      }),
      shuffleOptions({
        question: "The cheetal lives in a ______.",
        optionA: "Nest",
        optionB: "Cave",
        optionC: "Herd",
        correctAnswer: "Herd",
      }),
      shuffleOptions({
        question: "Tailorbird’s wings are ______.",
        optionA: "Long and wide",
        optionB: "Short and rounded",
        optionC: "Curved and stiff",
        correctAnswer: "Short and rounded",
      }),
      shuffleOptions({
        question: "The antlers of cheetal are branched into ______ lines.",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "Cheetals become more active towards ______.",
        optionA: "Sunrise",
        optionB: "Dusk",
        optionC: "Noon",
        correctAnswer: "Dusk",
      }),
      shuffleOptions({
        question: "The cheetal responds to ______ calls made by animals.",
        optionA: "Welcome",
        optionB: "Alarm",
        optionC: "Soft",
        correctAnswer: "Alarm",
      }),
      shuffleOptions({
        question: "Tailorbird stitches leaves to make a ______.",
        optionA: "Tunnel",
        optionB: "Pouch",
        optionC: "Rope",
        correctAnswer: "Pouch",
      }),
      shuffleOptions({
        question: "Cheetals can jump over obstacles as high as ______ metres.",
        optionA: "1.5",
        optionB: "2",
        optionC: "2.5",
        correctAnswer: "1.5",
      }),
      shuffleOptions({
        question: "Tailorbirds can be observed in ______.",
        optionA: "Cities",
        optionB: "Forests",
        optionC: "Neighbourhood",
        correctAnswer: "Neighbourhood",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tailorbirds use needles and threads from shops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cheetals are always active at noon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Langurs and cheetals never interact.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tailorbird’s nest is built with bricks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The cheetal can run fast and jump over obstacles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Female cheetals have antlers too.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tailorbirds can be found only in zoos.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cheetals are protected animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The word ‘cheetah’ and ‘cheetal’ have different origins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tailorbirds build their nests with the help of their bills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
