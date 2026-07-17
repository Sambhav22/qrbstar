export const chapter = "Chapter - 2: My Family and Me";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who lives together in a family?",
        optionA: "Parents and children",
        optionB: "Teachers and students",
        optionC: "Friends and neighbours",
        correctAnswer: "Parents and children",
      }),
      shuffleOptions({
        question: "What kind of family has grandparents, uncles and cousins living together?",
        optionA: "Nuclear family",
        optionB: "Joint family",
        optionC: "Single-parent family",
        correctAnswer: "Joint family",
      }),
      shuffleOptions({
        question: "Who are called paternal relatives?",
        optionA: "Relatives from mother’s side",
        optionB: "Relatives from father’s side",
        optionC: "Neighbours",
        correctAnswer: "Relatives from father’s side",
      }),
      shuffleOptions({
        question: "What is a chart showing relationships between family members called?",
        optionA: "Tree chart",
        optionB: "Family tree",
        optionC: "Family map",
        correctAnswer: "Family tree",
      }),
      shuffleOptions({
        question: "Who belongs to the first generation in a family tree?",
        optionA: "Parents",
        optionB: "Grandparents",
        optionC: "Children",
        correctAnswer: "Grandparents",
      }),
      shuffleOptions({
        question: "Which family has only parents and their children?",
        optionA: "Joint family",
        optionB: "Nuclear family",
        optionC: "Large family",
        correctAnswer: "Nuclear family",
      }),
      shuffleOptions({
        question: "What do we learn from our family?",
        optionA: "To fight",
        optionB: "To help others",
        optionC: "To ignore others",
        correctAnswer: "To help others",
      }),
      shuffleOptions({
        question: "Who are Eva and Jatin in the chapter?",
        optionA: "Cousins",
        optionB: "Brother and sister",
        optionC: "Friends",
        correctAnswer: "Brother and sister",
      }),
      shuffleOptions({
        question: "Who are called maternal relatives?",
        optionA: "Relatives from mother’s side",
        optionB: "Relatives from father’s side",
        optionC: "Distant neighbours",
        correctAnswer: "Relatives from mother’s side",
      }),
      shuffleOptions({
        question: "What is the meaning of a single-parent family?",
        optionA: "Only one parent takes care of children",
        optionB: "Two parents and children",
        optionC: "Grandparents and grandchildren",
        correctAnswer: "Only one parent takes care of children",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A family is a ______ system for an individual.",
        optionA: "transport",
        optionB: "support",
        optionC: "food",
        correctAnswer: "support",
      }),
      shuffleOptions({
        question: "Parents and children living together make a ______.",
        optionA: "school",
        optionB: "family",
        optionC: "team",
        correctAnswer: "family",
      }),
      shuffleOptions({
        question: "Families are of different ______.",
        optionA: "sizes",
        optionB: "colours",
        optionC: "types",
        correctAnswer: "types",
      }),
      shuffleOptions({
        question: "The relatives from our father’s side are called ______ relatives.",
        optionA: "maternal",
        optionB: "paternal",
        optionC: "general",
        correctAnswer: "paternal",
      }),
      shuffleOptions({
        question: "The relatives from our mother’s side are called ______ relatives.",
        optionA: "paternal",
        optionB: "maternal",
        optionC: "local",
        correctAnswer: "maternal",
      }),
      shuffleOptions({
        question: "A ______ family includes grandparents and cousins.",
        optionA: "nuclear",
        optionB: "joint",
        optionC: "small",
        correctAnswer: "joint",
      }),
      shuffleOptions({
        question: "The children of your uncle are your ______.",
        optionA: "neighbours",
        optionB: "cousins",
        optionC: "teachers",
        correctAnswer: "cousins",
      }),
      shuffleOptions({
        question: "A ______ person is loved and welcomed by everyone.",
        optionA: "rude",
        optionB: "well-mannered",
        optionC: "angry",
        correctAnswer: "well-mannered",
      }),
      shuffleOptions({
        question: "Our family teaches us to follow our ______.",
        optionA: "customs",
        optionB: "games",
        optionC: "lessons",
        correctAnswer: "customs",
      }),
      shuffleOptions({
        question: "We learn to keep our ______ clean from our family.",
        optionA: "surroundings",
        optionB: "bags",
        optionC: "books",
        correctAnswer: "surroundings",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Families do not depend on each other for their needs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In a nuclear family, only parents and their children live together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Maternal relatives are from our father’s side.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Our family teaches us good manners and values.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Old-age homes are for elderly people who have no one to look after them.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The first generation in a family tree includes children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Families share joys and sorrows together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Paternal means related to the mother.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Our family is our first school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Helping others is a bad habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
