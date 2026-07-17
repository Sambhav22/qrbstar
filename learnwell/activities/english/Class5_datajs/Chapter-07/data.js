export const chapter = "Chapter - 7: The Shoemaker’s Fortune";
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
        question: "Who gave Rivan the first bag of gold coins?",
        optionA: "Roshan",
        optionB: "Chaman",
        optionC: "Neighbour",
        correctAnswer: "Chaman",
      }),
      shuffleOptions({
        question: "Where did Rivan’s grandfather work?",
        optionA: "In a shoe shop",
        optionB: "In a farm",
        optionC: "In a palace",
        correctAnswer: "In a shoe shop",
      }),
      shuffleOptions({
        question: "What did Rivan buy with ten gold pieces each time?",
        optionA: "Jewellery",
        optionB: "Food",
        optionC: "Clothes only",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Who sold the old jar?",
        optionA: "Rivan",
        optionB: "Rivan’s wife",
        optionC: "His daughter",
        correctAnswer: "Rivan’s wife",
      }),
      shuffleOptions({
        question: "What did Rivan’s children quarrel about?",
        optionA: "Doll",
        optionB: "Diamond",
        optionC: "Clothes",
        correctAnswer: "Diamond",
      }),
      shuffleOptions({
        question: "Who gave Rivan a copper coin?",
        optionA: "Roshan",
        optionB: "Chaman",
        optionC: "Neighbour",
        correctAnswer: "Roshan",
      }),
      shuffleOptions({
        question: "What did Rivan do with the valuable stone?",
        optionA: "Kept it hidden",
        optionB: "Sold it to his rich neighbour",
        optionC: "Threw it away",
        correctAnswer: "Sold it to his rich neighbour",
      }),
      shuffleOptions({
        question: "What was the profession of Rivan’s neighbour?",
        optionA: "Farmer",
        optionB: "Jeweller",
        optionC: "Fisherman",
        correctAnswer: "Jeweller",
      }),
      shuffleOptions({
        question: "After selling the stone, what kind of house did Rivan buy?",
        optionA: "Small hut",
        optionB: "Palatial house",
        optionC: "Farmhouse",
        correctAnswer: "Palatial house",
      }),
      shuffleOptions({
        question: "At dinner, who asked Rivan, “What made you rich—the four hundred gold pieces or that copper piece?”",
        optionA: "Chaman",
        optionB: "Roshan",
        optionC: "Rivan",
        correctAnswer: "Chaman",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rivan learnt shoemaking from his _______.",
        optionA: "uncle",
        optionB: "father",
        optionC: "friend",
        correctAnswer: "father",
      }),
      shuffleOptions({
        question: "Roshan and Chaman were business _______.",
        optionA: "bankers",
        optionB: "partners",
        optionC: "drivers",
        correctAnswer: "partners",
      }),
      shuffleOptions({
        question: "Rivan dropped the second bag into an old _______.",
        optionA: "box",
        optionB: "jar",
        optionC: "chest",
        correctAnswer: "jar",
      }),
      shuffleOptions({
        question: "Rivan’s wife exchanged the jar for _______ cakes.",
        optionA: "sugar",
        optionB: "soap",
        optionC: "rice",
        correctAnswer: "soap",
      }),
      shuffleOptions({
        question: "The children’s mouths _______ when they saw the packets of food.",
        optionA: "watered",
        optionB: "smiled",
        optionC: "shouted",
        correctAnswer: "watered",
      }),
      shuffleOptions({
        question: "The neighbour first offered _______ gold pieces for the shining stone.",
        optionA: "fifty",
        optionB: "ten",
        optionC: "one thousand",
        correctAnswer: "ten",
      }),
      shuffleOptions({
        question: "The deal for the stone was finalised at _______ gold pieces.",
        optionA: "ten thousand",
        optionB: "one hundred thousand",
        optionC: "fifty thousand",
        correctAnswer: "one hundred thousand",
      }),
      shuffleOptions({
        question: "After becoming wealthy, Rivan set up a _______ factory.",
        optionA: "textile",
        optionB: "shoemaking",
        optionC: "toy",
        correctAnswer: "shoemaking",
      }),
      shuffleOptions({
        question: "Later, Roshan gave Rivan a _______ coin.",
        optionA: "silver",
        optionB: "copper",
        optionC: "gold",
        correctAnswer: "copper",
      }),
      shuffleOptions({
        question: "Rivan found his turban stuck in a _______ among the rocks.",
        optionA: "wall",
        optionB: "tree",
        optionC: "roof",
        correctAnswer: "tree",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rivan repaired Roshan’s shoe free of cost.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rivan became rich with the first bag of gold coins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "His wife exchanged the jar for soap cakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rivan’s daughter wanted a yellow frock.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The shining stone was found inside a fish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The neighbour tried to cheat Rivan by calling the stone a piece of glass.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rivan finally sold the stone for one hundred thousand gold coins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Roshan and Chaman visited Rivan three times in the story.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rivan mistook the shining piece for ordinary glass at first.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The story teaches that luck and hard work together make a person rich.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
