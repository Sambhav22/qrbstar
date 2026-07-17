export const chapter = "Chapter - 6: Wise or Stupid";
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
        question: "Who fed and bathed the cows?",
        optionA: "Mohandas",
        optionB: "Manik",
        optionC: "Doctor",
        correctAnswer: "Manik",
      }),
      shuffleOptions({
        question: "Where did Mohandas live?",
        optionA: "City",
        optionB: "Village",
        optionC: "Town",
        correctAnswer: "Village",
      }),
      shuffleOptions({
        question: "Who said Manik was stupid?",
        optionA: "Doctor",
        optionB: "Mohandas",
        optionC: "Family",
        correctAnswer: "Mohandas",
      }),
      shuffleOptions({
        question: "What did Mohandas give in the packet?",
        optionA: "Two turbans",
        optionB: "Two coats",
        optionC: "Two books",
        correctAnswer: "Two turbans",
      }),
      shuffleOptions({
        question: "Who said Mohandas had only a few days to live?",
        optionA: "Manik",
        optionB: "Doctor",
        optionC: "Servant",
        correctAnswer: "Doctor",
      }),
      shuffleOptions({
        question: "Who was told to help in the kitchen?",
        optionA: "Doctor",
        optionB: "Family member",
        optionC: "Manik",
        correctAnswer: "Manik",
      }),
      shuffleOptions({
        question: "What did Mohandas buy recently?",
        optionA: "House",
        optionB: "Car",
        optionC: "Cart",
        correctAnswer: "Car",
      }),
      shuffleOptions({
        question: "Who finally received the second turban?",
        optionA: "Doctor",
        optionB: "Family member",
        optionC: "Mohandas",
        correctAnswer: "Mohandas",
      }),
      shuffleOptions({
        question: "What did Manik say made him happy?",
        optionA: "Saving money",
        optionB: "Helping the poor",
        optionC: "Buying clothes",
        correctAnswer: "Helping the poor",
      }),
      shuffleOptions({
        question: "Who admitted he was stupid in the end?",
        optionA: "Mohandas",
        optionB: "Manik",
        optionC: "Doctor",
        correctAnswer: "Mohandas",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mohandas was a rich ______.",
        optionA: "Farmer",
        optionB: "Trader",
        optionC: "Doctor",
        correctAnswer: "Trader",
      }),
      shuffleOptions({
        question: "Manik divided his salary into ______ parts.",
        optionA: "Three",
        optionB: "Two",
        optionC: "Four",
        correctAnswer: "Two",
      }),
      shuffleOptions({
        question: "Mohandas called Manik a ______ fellow.",
        optionA: "Clever",
        optionB: "Stupid",
        optionC: "Wise",
        correctAnswer: "Stupid",
      }),
      shuffleOptions({
        question: "Manik donated money at the village ______.",
        optionA: "School",
        optionB: "Temple",
        optionC: "Shop",
        correctAnswer: "Temple",
      }),
      shuffleOptions({
        question: "The doctor said Mohandas had only a few ______ left.",
        optionA: "Days",
        optionB: "Months",
        optionC: "Years",
        correctAnswer: "Days",
      }),
      shuffleOptions({
        question: "Mohandas said money could overcome any ______.",
        optionA: "Festival",
        optionB: "Difficulty",
        optionC: "Friend",
        correctAnswer: "Difficulty",
      }),
      shuffleOptions({
        question: "Mohandas gave Manik two ______.",
        optionA: "Turbans",
        optionB: "Shirts",
        optionC: "Coats",
        correctAnswer: "Turbans",
      }),
      shuffleOptions({
        question: "Mohandas laughed at Manik and called him ______.",
        optionA: "Clever",
        optionB: "Stupid",
        optionC: "Rich",
        correctAnswer: "Stupid",
      }),
      shuffleOptions({
        question: "Manik said he was ______ in the mind.",
        optionA: "Angry",
        optionB: "Happy",
        optionC: "Sad",
        correctAnswer: "Happy",
      }),
      shuffleOptions({
        question: "Mohandas told Manik to help in the ______.",
        optionA: "Kitchen",
        optionB: "Market",
        optionC: "Shed",
        correctAnswer: "Kitchen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mohandas lived in a city.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Manik saved all his money in a bank.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mohandas thought money could solve problems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Manik had no wife or children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mohandas bought a bicycle recently.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The doctor said Mohandas would recover soon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Manik gave the turban back to Mohandas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mohandas said he would go empty-handed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Manik called Mohandas wise at the end.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mohandas admitted Manik was wise.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
