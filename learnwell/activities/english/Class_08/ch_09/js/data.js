export const chapter = "Chapter - 9: Ponds-Our Lifeline";
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
        question: "At independence, India had around how many ponds?",
        optionA: "1 million",
        optionB: "2.4 million",
        optionC: "0.5 million",
        correctAnswer: "2.4 million",
      }),
      shuffleOptions({
        question: "Excessive exploitation of groundwater has caused the water table to go down?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Cannot say",
        correctAnswer: "Yes",
      }),
      shuffleOptions({
        question: "Which product did villagers obtain from ponds?",
        optionA: "Clay",
        optionB: "Cotton",
        optionC: "Rice",
        correctAnswer: "Clay",
      }),
      shuffleOptions({
        question: "In which year did the central government launch a scheme for revival of ponds?",
        optionA: "1947",
        optionB: "1970",
        optionC: "2005",
        correctAnswer: "2005",
      }),
      shuffleOptions({
        question: "Why did land mafias fill up ponds?",
        optionA: "To build parks",
        optionB: "To sell land at high prices",
        optionC: "To grow crops",
        correctAnswer: "To sell land at high prices",
      }),
      shuffleOptions({
        question: "Who gave the example of Bani Talaiya?",
        optionA: "Ruskin Bond",
        optionB: "Pankaj Chaturvedi",
        optionC: "R.K. Narayan",
        correctAnswer: "Pankaj Chaturvedi",
      }),
      shuffleOptions({
        question: "Which lake was not included in the cleaning plan?",
        optionA: "Dal Lake",
        optionB: "Rani Talab",
        optionC: "Naini Lake",
        correctAnswer: "Naini Lake",
      }),
      shuffleOptions({
        question: "Flash floods in cities are mainly caused because ponds and river floodplains have been",
        optionA: "Yes",
        optionB: "No",
        optionC: "Cannot say",
        correctAnswer: "Yes",
      }),
      shuffleOptions({
        question: "Under which Act was pond revival also included?",
        optionA: "RTI Act",
        optionB: "MNREGA",
        optionC: "Food Security Act",
        correctAnswer: "MNREGA",
      }),
      shuffleOptions({
        question: "What did the disappearance of ponds bring to many villages?",
        optionA: "Water scarcity",
        optionB: "Prosperity",
        optionC: "More rainfall",
        correctAnswer: "Water scarcity",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ponds conserve ______.",
        optionA: "soil",
        optionB: "water",
        optionC: "energy",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "In 2000–01, the number of ponds came down to about ______.",
        optionA: "2.4 million",
        optionB: "0.5 million",
        optionC: "1 million",
        correctAnswer: "0.5 million",
      }),
      shuffleOptions({
        question: "Funds for pond revival were ______ off.",
        optionA: "siphoned",
        optionB: "returned",
        optionC: "doubled",
        correctAnswer: "siphoned",
      }),
      shuffleOptions({
        question: "With the drying of ponds, the water level in wells went ______.",
        optionA: "up",
        optionB: "down",
        optionC: "unchanged",
        correctAnswer: "down",
      }),
      shuffleOptions({
        question: "In many places, people dump ______ in ponds.",
        optionA: "sand",
        optionB: "garbage",
        optionC: "stones",
        correctAnswer: "garbage",
      }),
      shuffleOptions({
        question: "When rainwater has no outlet, it leads to ______.",
        optionA: "floods",
        optionB: "earthquakes",
        optionC: "snowfall",
        correctAnswer: "floods",
      }),
      shuffleOptions({
        question: "Neglect of ponds has brought ______ to many villages.",
        optionA: "misery",
        optionB: "wealth",
        optionC: "happiness",
        correctAnswer: "misery",
      }),
      shuffleOptions({
        question: "Urbanisation has left hardly any place for ______.",
        optionA: "houses",
        optionB: "ponds",
        optionC: "schools",
        correctAnswer: "ponds",
      }),
      shuffleOptions({
        question: "The word ‘Talaiya’ means ______.",
        optionA: "river",
        optionB: "pond",
        optionC: "canal",
        correctAnswer: "pond",
      }),
      shuffleOptions({
        question: "Reviving ponds is the duty of ______.",
        optionA: "politicians only",
        optionB: "all citizens",
        optionC: "World Bank",
        correctAnswer: "all citizens",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "There are more ponds today than in 1947.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The World Bank helped fund the revival scheme.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ponds provided villagers with fish and lotus stems.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Silt dug out was often left outside and flowed back in rains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ponds have no role in preventing droughts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Garbage dumping in ponds worsens water scarcity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People deserted Bani Talaiya due to lack of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "MNREGA was fully successful in reviving ponds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The disappearance of ponds lowered the level of wells.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Citizens should not leave pond care only to the government.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
