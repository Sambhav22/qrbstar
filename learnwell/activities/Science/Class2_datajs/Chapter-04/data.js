export const chapter = "Chapter - 4: Wild Animals";
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
        question: "Which animal is known as the king of the jungle?",
        optionA: "Tiger",
        optionB: "Lion",
        optionC: "Wolf",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Which is the tallest land animal?",
        optionA: "Elephant",
        optionB: "Giraffe",
        optionC: "Zebra",
        correctAnswer: "Giraffe",
      }),
      shuffleOptions({
        question: "Which animal lives in a burrow?",
        optionA: "Rabbit",
        optionB: "Monkey",
        optionC: "Lion",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "Which animal is the fastest land animal?",
        optionA: "Horse",
        optionB: "Cheetah",
        optionC: "Deer",
        correctAnswer: "Cheetah",
      }),
      shuffleOptions({
        question: "Which animal uses its tail to swing from tree to tree?",
        optionA: "Bear",
        optionB: "Monkey",
        optionC: "Dog",
        correctAnswer: "Monkey",
      }),
      shuffleOptions({
        question: "Which animal has a long trunk?",
        optionA: "Tiger",
        optionB: "Elephant",
        optionC: "Panther",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "Which animals eat grass and fruits?",
        optionA: "Herbivores",
        optionB: "Carnivores",
        optionC: "Scavengers",
        correctAnswer: "Herbivores",
      }),
      shuffleOptions({
        question: "Which animals eat both plants and flesh?",
        optionA: "Omnivores",
        optionB: "Herbivores",
        optionC: "Carnivores",
        correctAnswer: "Omnivores",
      }),
      shuffleOptions({
        question: "Which animals eat flesh of dead animals?",
        optionA: "Scavengers",
        optionB: "Omnivores",
        optionC: "Herbivores",
        correctAnswer: "Scavengers",
      }),
      shuffleOptions({
        question: "Which animal is endangered in India?",
        optionA: "Indian rhinoceros",
        optionB: "Cow",
        optionC: "Goat",
        correctAnswer: "Indian rhinoceros",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Lion lives in a ________.",
        optionA: "den",
        optionB: "nest",
        optionC: "burrow",
        correctAnswer: "den",
      }),
      shuffleOptions({
        question: "Wild animals live in ________.",
        optionA: "houses",
        optionB: "forests",
        optionC: "cages",
        correctAnswer: "forests",
      }),
      shuffleOptions({
        question: "Monkeys live on ________.",
        optionA: "caves",
        optionB: "trees",
        optionC: "burrows",
        correctAnswer: "trees",
      }),
      shuffleOptions({
        question: "Elephants eat ________ and leaves.",
        optionA: "grass",
        optionB: "flesh",
        optionC: "fish",
        correctAnswer: "grass",
      }),
      shuffleOptions({
        question: "Birds make ________ to live in.",
        optionA: "nests",
        optionB: "caves",
        optionC: "burrows",
        correctAnswer: "nests",
      }),
      shuffleOptions({
        question: "Jackals eat flesh of ________ animals.",
        optionA: "living",
        optionB: "dead",
        optionC: "pet",
        correctAnswer: "dead",
      }),
      shuffleOptions({
        question: "Crocodiles can live on land and in ________.",
        optionA: "water",
        optionB: "nests",
        optionC: "holes",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "The Indian ________ is an endangered animal.",
        optionA: "rhinoceros",
        optionB: "tiger",
        optionC: "cow",
        correctAnswer: "rhinoceros",
      }),
      shuffleOptions({
        question: "Animals that eat only plants are called ________.",
        optionA: "herbivores",
        optionB: "carnivores",
        optionC: "scavengers",
        correctAnswer: "herbivores",
      }),
      shuffleOptions({
        question: "Animals that eat flesh are called ________.",
        optionA: "carnivores",
        optionB: "omnivores",
        optionC: "herbivores",
        correctAnswer: "carnivores",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Giraffe is the tallest land animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Monkeys live in caves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Deer is a herbivore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Crocodile can live both on land and in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Panda is an endangered animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vultures are scavengers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Elephants eat flesh of other animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Forests are homes of wild animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Lion lives in burrows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bear is an omnivore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
