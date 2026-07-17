export const chapter = "Chapter - 6: Food and Homes of Animals";
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
        question: "Which animal eats both plants and flesh?",
        optionA: "Cow",
        optionB: "Dog",
        optionC: "Goat",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which animal eats grains?",
        optionA: "Tiger",
        optionB: "Pigeon",
        optionC: "Lion",
        correctAnswer: "Pigeon",
      }),
      shuffleOptions({
        question: "Which animal has a sticky tongue?",
        optionA: "Frog",
        optionB: "Cow",
        optionC: "Hen",
        correctAnswer: "Frog",
      }),
      shuffleOptions({
        question: "Where does a lion live?",
        optionA: "Stable",
        optionB: "Den",
        optionC: "Shed",
        correctAnswer: "Den",
      }),
      shuffleOptions({
        question: "Which animal lives on trees?",
        optionA: "Monkey",
        optionB: "Rabbit",
        optionC: "Fish",
        correctAnswer: "Monkey",
      }),
      shuffleOptions({
        question: "Which of these is a carnivore?",
        optionA: "Goat",
        optionB: "Tiger",
        optionC: "Hen",
        correctAnswer: "Tiger",
      }),
      shuffleOptions({
        question: "Which of these is a grain-eater?",
        optionA: "Squirrel",
        optionB: "Eagle",
        optionC: "Dog",
        correctAnswer: "Squirrel",
      }),
      shuffleOptions({
        question: "Which of these makes a web?",
        optionA: "Ant",
        optionB: "Spider",
        optionC: "Bee",
        correctAnswer: "Spider",
      }),
      shuffleOptions({
        question: "Which animal makes a hive?",
        optionA: "Bee",
        optionB: "Crow",
        optionC: "Koel",
        correctAnswer: "Bee",
      }),
      shuffleOptions({
        question: "Where are cows kept?",
        optionA: "Shed",
        optionB: "Coop",
        optionC: "Den",
        correctAnswer: "Shed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cow is a ______ animal.",
        optionA: "herbivore",
        optionB: "carnivore",
        optionC: "omnivore",
        correctAnswer: "herbivore",
      }),
      shuffleOptions({
        question: "A lion eats ______.",
        optionA: "flesh",
        optionB: "grains",
        optionC: "grass",
        correctAnswer: "flesh",
      }),
      shuffleOptions({
        question: "A bear is an ______.",
        optionA: "omnivore",
        optionB: "herbivore",
        optionC: "grain-eater",
        correctAnswer: "omnivore",
      }),
      shuffleOptions({
        question: "Fish are kept in ______.",
        optionA: "aquariums",
        optionB: "kennels",
        optionC: "sheds",
        correctAnswer: "aquariums",
      }),
      shuffleOptions({
        question: "A hen is a ______-eating animal.",
        optionA: "grain",
        optionB: "flesh",
        optionC: "plant",
        correctAnswer: "grain",
      }),
      shuffleOptions({
        question: "Ants make an ______.",
        optionA: "anthill",
        optionB: "kennel",
        optionC: "coop",
        correctAnswer: "anthill",
      }),
      shuffleOptions({
        question: "A rabbit lives in a ______.",
        optionA: "burrow",
        optionB: "den",
        optionC: "hive",
        correctAnswer: "burrow",
      }),
      shuffleOptions({
        question: "Koel lays eggs in the nest of ______.",
        optionA: "other birds",
        optionB: "squirrels",
        optionC: "hens",
        correctAnswer: "other birds",
      }),
      shuffleOptions({
        question: "A spider makes a ______.",
        optionA: "web",
        optionB: "burrow",
        optionC: "coop",
        correctAnswer: "web",
      }),
      shuffleOptions({
        question: "Horses are kept in ______.",
        optionA: "stables",
        optionB: "sheds",
        optionC: "hives",
        correctAnswer: "stables",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Goat is a herbivore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eagle eats plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dog is an omnivore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Frog catches insects with its sticky tongue.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Spider makes a hive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Koel makes its own nest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lion lives in a den.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hen is a grain-eater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rabbit lives in a kennel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Monkey lives on a tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
