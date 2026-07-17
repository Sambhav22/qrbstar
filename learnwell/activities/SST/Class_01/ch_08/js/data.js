export const chapter = "Chapter - 8: Animal’s Home";
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
        question: "Which animal makes its home under the ground?",
        optionA: "Hen",
        optionB: "Rabbit",
        optionC: "Dolphin",
        correctAnswer: "Rabbit",
      }),
      shuffleOptions({
        question: "Which animal spins a web to live in?",
        optionA: "Spider",
        optionB: "Dog",
        optionC: "Monkey",
        correctAnswer: "Spider",
      }),
      shuffleOptions({
        question: "Which animal lives in a shelter called a kennel?",
        optionA: "Lion",
        optionB: "Dog",
        optionC: "Cow",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which animal lives in a home called a beehive?",
        optionA: "Whale",
        optionB: "Bee",
        optionC: "Rabbit",
        correctAnswer: "Bee",
      }),
      shuffleOptions({
        question: "Which animals live in water?",
        optionA: "Monkey",
        optionB: "Horse",
        optionC: "Dolphin and whale",
        correctAnswer: "Dolphin and whale",
      }),
      shuffleOptions({
        question: "Which animal lives on trees in the forest?",
        optionA: "Cow",
        optionB: "Monkey",
        optionC: "Hen",
        correctAnswer: "Monkey",
      }),
      shuffleOptions({
        question: "Which animal stays in a home called a shed?",
        optionA: "Dog",
        optionB: "Cow",
        optionC: "Sea horse",
        correctAnswer: "Cow",
      }),
      shuffleOptions({
        question: "Which animal stays in a stable?",
        optionA: "Horse",
        optionB: "Bee",
        optionC: "Spider",
        correctAnswer: "Horse",
      }),
      shuffleOptions({
        question: "Which animal lives in a den?",
        optionA: "Lion",
        optionB: "Dolphin",
        optionC: "Hen",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Which animal’s home is made of wax and hangs from branches?",
        optionA: "Spider",
        optionB: "Hen",
        optionC: "Bee’s beehive",
        correctAnswer: "Bee’s beehive",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A spider makes its home using its ______.",
        optionA: "claws",
        optionB: "silk thread",
        optionC: "feathers",
        correctAnswer: "silk thread",
      }),
      shuffleOptions({
        question: "A beehive is usually found hanging from a ______.",
        optionA: "tree branch",
        optionB: "burrow",
        optionC: "stable",
        correctAnswer: "tree branch",
      }),
      shuffleOptions({
        question: "A rabbit stays inside a ______.",
        optionA: "kennel",
        optionB: "burrow",
        optionC: "coop",
        correctAnswer: "burrow",
      }),
      shuffleOptions({
        question: "A dog lives in a ______.",
        optionA: "tree",
        optionB: "den",
        optionC: "kennel",
        correctAnswer: "kennel",
      }),
      shuffleOptions({
        question: "A hen is kept in a ______.",
        optionA: "coop",
        optionB: "shed",
        optionC: "web",
        correctAnswer: "coop",
      }),
      shuffleOptions({
        question: "Dolphins and whales live in ______.",
        optionA: "forests",
        optionB: "burrows",
        optionC: "water",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Lions live in ______.",
        optionA: "dens",
        optionB: "nests",
        optionC: "webs",
        correctAnswer: "dens",
      }),
      shuffleOptions({
        question: "A bird makes a ______.",
        optionA: "kennel",
        optionB: "burrow",
        optionC: "nest",
        correctAnswer: "nest",
      }),
      shuffleOptions({
        question: "A cow lives in a ______.",
        optionA: "stable",
        optionB: "shed",
        optionC: "coop",
        correctAnswer: "shed",
      }),
      shuffleOptions({
        question: "Animals that live in water are called ______ animals.",
        optionA: "wild",
        optionB: "aquatic",
        optionC: "pet",
        correctAnswer: "aquatic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rabbits make burrows to live in.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bees live in kennels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lions live in natural homes called dens.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dolphins can live on land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A spider makes a home called a web.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hens live on trees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Aquatic animals live in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cow lives in a shed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Monkeys live in burrows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A beehive is made by bees.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
