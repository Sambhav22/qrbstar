export const chapter = "Chapter - 3: Types of Families";
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
        question: "Which family has only parents and their children living together?",
        optionA: "Joint family",
        optionB: "Nuclear family",
        optionC: "Cousin family",
        correctAnswer: "Nuclear family",
      }),
      shuffleOptions({
        question: "Who is shown teaching Anya’s cousin in the picture?",
        optionA: "Her teacher",
        optionB: "Her father",
        optionC: "Her friend",
        correctAnswer: "Her father",
      }),
      shuffleOptions({
        question: "Who is cooking food in Anya’s home?",
        optionA: "Her mother",
        optionB: "Her cousin",
        optionC: "Her aunt",
        correctAnswer: "Her mother",
      }),
      shuffleOptions({
        question: "What do we call a family where many members live together?",
        optionA: "Joint family",
        optionB: "Single family",
        optionC: "Empty family",
        correctAnswer: "Joint family",
      }),
      shuffleOptions({
        question: "Who is serving food in Anya’s family picture?",
        optionA: "Anya’s grandmother",
        optionB: "Anya’s father",
        optionC: "Anya’s uncle",
        correctAnswer: "Anya’s grandmother",
      }),
      shuffleOptions({
        question: "Who is eating food in Anya’s house?",
        optionA: "Her grandfather",
        optionB: "Her cousin",
        optionC: "Her aunt",
        correctAnswer: "Her grandfather",
      }),
      shuffleOptions({
        question: "What do we call the child of one’s uncle or aunt?",
        optionA: "Neighbour",
        optionB: "Cousin",
        optionC: "Teacher",
        correctAnswer: "Cousin",
      }),
      shuffleOptions({
        question: "Who is helping Anya’s mother in the kitchen?",
        optionA: "Her aunt",
        optionB: "Her grandmother",
        optionC: "Her brother",
        correctAnswer: "Her aunt",
      }),
      shuffleOptions({
        question: "What do family members do for each other?",
        optionA: "Ignore each other",
        optionB: "Love and care for each other",
        optionC: "Fight with each other",
        correctAnswer: "Love and care for each other",
      }),
      shuffleOptions({
        question: "What is a child called when his or her parents are not alive?",
        optionA: "Sibling",
        optionB: "Cousin",
        optionC: "Orphan",
        correctAnswer: "Orphan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A joint family is a ______ family.",
        optionA: "big",
        optionB: "tiny",
        optionC: "lonely",
        correctAnswer: "big",
      }),
      shuffleOptions({
        question: "A nuclear family may be big or ______.",
        optionA: "round",
        optionB: "small",
        optionC: "tall",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "Family members live together in a ______.",
        optionA: "shop",
        optionB: "bus",
        optionC: "house",
        correctAnswer: "house",
      }),
      shuffleOptions({
        question: "Anya lives in a ______ family.",
        optionA: "nuclear",
        optionB: "joint",
        optionC: "single",
        correctAnswer: "joint",
      }),
      shuffleOptions({
        question: "Arav lives in a ______ family.",
        optionA: "joint",
        optionB: "nuclear",
        optionC: "mixed",
        correctAnswer: "nuclear",
      }),
      shuffleOptions({
        question: "Anya’s aunt is ______ her mother in the kitchen.",
        optionA: "helping",
        optionB: "watching",
        optionC: "scolding",
        correctAnswer: "helping",
      }),
      shuffleOptions({
        question: "Grandfather is ______ food in the picture.",
        optionA: "cooking",
        optionB: "eating",
        optionC: "cleaning",
        correctAnswer: "eating",
      }),
      shuffleOptions({
        question: "We learn many things from our ______.",
        optionA: "family",
        optionB: "toys",
        optionC: "street",
        correctAnswer: "family",
      }),
      shuffleOptions({
        question: "Parents give us their ______.",
        optionA: "blessings",
        optionB: "shoes",
        optionC: "games",
        correctAnswer: "blessings",
      }),
      shuffleOptions({
        question: "A child with no parents is called an ______.",
        optionA: "uncle",
        optionB: "orphan",
        optionC: "elder",
        correctAnswer: "orphan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A nuclear family has only parents and children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A joint family always has only two members.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Anya’s grandmother is serving food in the picture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Arav lives in a joint family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Family members should love and care for each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cousin is the child of one’s uncle or aunt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A joint family is a big family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Anya’s father is teaching her cousin in the picture.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "An orphan is a child whose parents are alive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A nuclear family can be big or small.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
