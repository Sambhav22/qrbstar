export const chapter = "Chapter - 5: The Animals World";
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
        question: "Which animal has a very long neck?",
        optionA: "Giraffe",
        optionB: "Lion",
        optionC: "Bear",
        correctAnswer: "Giraffe",
      }),
      shuffleOptions({
        question: "Which animal has a trunk?",
        optionA: "Dog",
        optionB: "Elephant",
        optionC: "Horse",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "Which animal hops on two strong legs?",
        optionA: "Kangaroo",
        optionB: "Cat",
        optionC: "Squirrel",
        correctAnswer: "Kangaroo",
      }),
      shuffleOptions({
        question: "Which animal has a horn on its nose?",
        optionA: "Rhinoceros",
        optionB: "Lion",
        optionC: "Bear",
        correctAnswer: "Rhinoceros",
      }),
      shuffleOptions({
        question: "Which animal is very small?",
        optionA: "Rat",
        optionB: "Elephant",
        optionC: "Horse",
        correctAnswer: "Rat",
      }),
      shuffleOptions({
        question: "Which bird lays eggs in its nest?",
        optionA: "Sparrow",
        optionB: "Monkey",
        optionC: "Dog",
        correctAnswer: "Sparrow",
      }),
      shuffleOptions({
        question: "Which bird cannot fly?",
        optionA: "Ostrich",
        optionB: "Parrot",
        optionC: "Crow",
        correctAnswer: "Ostrich",
      }),
      shuffleOptions({
        question: "Which animal never closes its eyes?",
        optionA: "Snake",
        optionB: "Frog",
        optionC: "Cat",
        correctAnswer: "Snake",
      }),
      shuffleOptions({
        question: "Which animal lives in the forest?",
        optionA: "Lion",
        optionB: "Cow",
        optionC: "Dog",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Which animal lives on trees?",
        optionA: "Monkey",
        optionB: "Dog",
        optionC: "Horse",
        correctAnswer: "Monkey",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "_______ is a very small animal.",
        optionA: "Butterfly",
        optionB: "Cow",
        optionC: "Horse",
        correctAnswer: "Butterfly",
      }),
      shuffleOptions({
        question: "_______ is a wild animal.",
        optionA: "Tiger",
        optionB: "Cow",
        optionC: "Dog",
        correctAnswer: "Tiger",
      }),
      shuffleOptions({
        question: "_______ is a pet animal.",
        optionA: "Cat",
        optionB: "Lion",
        optionC: "Elephant",
        correctAnswer: "Cat",
      }),
      shuffleOptions({
        question: "Whales and sharks live in the _______.",
        optionA: "Water",
        optionB: "Forest",
        optionC: "Desert",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Frogs and crocodiles can live in _______.",
        optionA: "Land and water",
        optionB: "Desert",
        optionC: "Air",
        correctAnswer: "Land and water",
      }),
      shuffleOptions({
        question: "_______ is an example of a reptile.",
        optionA: "Lizard",
        optionB: "Sparrow",
        optionC: "Crow",
        correctAnswer: "Lizard",
      }),
      shuffleOptions({
        question: "Animals like _______ and horses are domestic animals.",
        optionA: "Cows",
        optionB: "Tigers",
        optionC: "Lions",
        correctAnswer: "Cows",
      }),
      shuffleOptions({
        question: "Ostrich and _______ are birds that cannot fly.",
        optionA: "Emu",
        optionB: "Pigeon",
        optionC: "Crow",
        correctAnswer: "Emu",
      }),
      shuffleOptions({
        question: "Squirrels and monkeys live on _______.",
        optionA: "Trees",
        optionB: "Water",
        optionC: "Desert",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "All insects have _______ legs.",
        optionA: "6",
        optionB: "2",
        optionC: "4",
        correctAnswer: "6",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Giraffe is a big animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rats are very small animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kangaroos live in the sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bears are wild animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cats are pet animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Crocodiles are amphibians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Whales live on land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chameleons can change their colour.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bees are reptiles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ostriches cannot fly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
