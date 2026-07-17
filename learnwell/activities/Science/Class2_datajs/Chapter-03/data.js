export const chapter = "Chapter - 3: Domestic Animals";
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
        question: "Which pet animal keeps rats away?",
        optionA: "Dog",
        optionB: "Cat",
        optionC: "Parrot",
        correctAnswer: "Cat",
      }),
      shuffleOptions({
        question: "Horses live in a:",
        optionA: "Shed",
        optionB: "Stable",
        optionC: "Pen",
        correctAnswer: "Stable",
      }),
      shuffleOptions({
        question: "Sheep are kept in a:",
        optionA: "Pen",
        optionB: "Stable",
        optionC: "Beehive",
        correctAnswer: "Pen",
      }),
      shuffleOptions({
        question: "Which animal is used for riding?",
        optionA: "Donkey",
        optionB: "Camel",
        optionC: "Goat",
        correctAnswer: "Camel",
      }),
      shuffleOptions({
        question: "Which animal gives us meat?",
        optionA: "Cow",
        optionB: "Hen",
        optionC: "Cat",
        correctAnswer: "Hen",
      }),
      shuffleOptions({
        question: "Which insect makes both honey and wax?",
        optionA: "Ant",
        optionB: "Bee",
        optionC: "Butterfly",
        correctAnswer: "Bee",
      }),
      shuffleOptions({
        question: "Which animal’s dung is used as manure?",
        optionA: "Tiger",
        optionB: "Buffalo",
        optionC: "Cat",
        correctAnswer: "Buffalo",
      }),
      shuffleOptions({
        question: "Which animal pulls carts in villages?",
        optionA: "Bull",
        optionB: "Goat",
        optionC: "Parrot",
        correctAnswer: "Bull",
      }),
      shuffleOptions({
        question: "Which animal’s skin is used for leather?",
        optionA: "Sheep",
        optionB: "Snake",
        optionC: "Hen",
        correctAnswer: "Snake",
      }),
      shuffleOptions({
        question: "Which animal can travel without food and water for long?",
        optionA: "Camel",
        optionB: "Horse",
        optionC: "Dog",
        correctAnswer: "Camel",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cow is kept in a ______.",
        optionA: "Stable",
        optionB: "Shed",
        optionC: "Pen",
        correctAnswer: "Shed",
      }),
      shuffleOptions({
        question: "A ______ guards our homes.",
        optionA: "Cat",
        optionB: "Dog",
        optionC: "Parrot",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "A parrot is a ______ animal.",
        optionA: "Pet",
        optionB: "Farm",
        optionC: "Wild",
        correctAnswer: "Pet",
      }),
      shuffleOptions({
        question: "A sheep is kept in a ______.",
        optionA: "Pen",
        optionB: "Shed",
        optionC: "Beehive",
        correctAnswer: "Pen",
      }),
      shuffleOptions({
        question: "A donkey carries ______.",
        optionA: "Loads",
        optionB: "Silk",
        optionC: "Eggs",
        correctAnswer: "Loads",
      }),
      shuffleOptions({
        question: "A hen gives us ______.",
        optionA: "Wool",
        optionB: "Eggs",
        optionC: "Leather",
        correctAnswer: "Eggs",
      }),
      shuffleOptions({
        question: "We get ______ from silkworms.",
        optionA: "Silk",
        optionB: "Wool",
        optionC: "Leather",
        correctAnswer: "Silk",
      }),
      shuffleOptions({
        question: "Buffalo dung is used as ______.",
        optionA: "Fuel",
        optionB: "Silk",
        optionC: "Eggs",
        correctAnswer: "Fuel",
      }),
      shuffleOptions({
        question: "Bees make honey in a ______.",
        optionA: "Beehive",
        optionB: "Shed",
        optionC: "Stable",
        correctAnswer: "Beehive",
      }),
      shuffleOptions({
        question: "A camel is called the ship of the ______.",
        optionA: "Desert",
        optionB: "Forest",
        optionC: "Ocean",
        correctAnswer: "Desert",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cats guard our homes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dogs are kept as pets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sheep give us wool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Goats give us honey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Buffalo dung is used as fuel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Camels live in a pen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Horses are used for riding.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bees make honey in beehives.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Silkworms give us wool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Donkeys are used to carry loads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
