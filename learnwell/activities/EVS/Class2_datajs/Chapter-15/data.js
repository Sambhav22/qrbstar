export const chapter = "Chapter - 15: Animals Around Us";
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
        question: "Which animal gives us eggs?",
        optionA: "Cow",
        optionB: "Hen",
        optionC: "Goat",
        correctAnswer: "Hen",
      }),
      shuffleOptions({
        question: "Which animal guards our house?",
        optionA: "Dog",
        optionB: "Rabbit",
        optionC: "Elephant",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "Which animal gives us honey?",
        optionA: "Honeybee",
        optionB: "Cow",
        optionC: "Goat",
        correctAnswer: "Honeybee",
      }),
      shuffleOptions({
        question: "What is made from the skin of dead animals?",
        optionA: "Leather",
        optionB: "Silk",
        optionC: "Wool",
        correctAnswer: "Leather",
      }),
      shuffleOptions({
        question: "Which animal gives us wool?",
        optionA: "Sheep",
        optionB: "Goat",
        optionC: "Hen",
        correctAnswer: "Sheep",
      }),
      shuffleOptions({
        question: "Which of these is a wild animal?",
        optionA: "Lion",
        optionB: "Dog",
        optionC: "Rabbit",
        correctAnswer: "Lion",
      }),
      shuffleOptions({
        question: "Animals that live in water are called —",
        optionA: "Wild animals",
        optionB: "Aquatic animals",
        optionC: "Pet animals",
        correctAnswer: "Aquatic animals",
      }),
      shuffleOptions({
        question: "What do silkworms give us?",
        optionA: "Silk",
        optionB: "Leather",
        optionC: "Wool",
        correctAnswer: "Silk",
      }),
      shuffleOptions({
        question: "Which animal has a trunk?",
        optionA: "Elephant",
        optionB: "Tiger",
        optionC: "Goat",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "What should we never do to animals?",
        optionA: "Hurt them",
        optionB: "Feed them",
        optionC: "Love them",
        correctAnswer: "Hurt them",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cow and buffalo give us _______.",
        optionA: "Honey",
        optionB: "Milk",
        optionC: "Eggs",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "The animal that guards our house is a ______.",
        optionA: "Dog",
        optionB: "Cat",
        optionC: "Horse",
        correctAnswer: "Dog",
      }),
      shuffleOptions({
        question: "We get silk from ______.",
        optionA: "Silkworm",
        optionB: "Honeybee",
        optionC: "Sheep",
        correctAnswer: "Silkworm",
      }),
      shuffleOptions({
        question: "We get wool from ______.",
        optionA: "Sheep",
        optionB: "Goat",
        optionC: "Hen",
        correctAnswer: "Sheep",
      }),
      shuffleOptions({
        question: "We get honey from ______.",
        optionA: "Silkworm",
        optionB: "Honeybee",
        optionC: "Sheep",
        correctAnswer: "Honeybee",
      }),
      shuffleOptions({
        question: "Animals that live in jungles are called ______ animals.",
        optionA: "Pet",
        optionB: "Wild",
        optionC: "Farm",
        correctAnswer: "Wild",
      }),
      shuffleOptions({
        question: "Animals that live in water are called ______ animals.",
        optionA: "Aquatic",
        optionB: "Farm",
        optionC: "Pet",
        correctAnswer: "Aquatic",
      }),
      shuffleOptions({
        question: "The doctor who treats animals is called a ______.",
        optionA: "Veterinary doctor",
        optionB: "Teacher",
        optionC: "Policeman",
        correctAnswer: "Veterinary doctor",
      }),
      shuffleOptions({
        question: "We should give animals fresh ______ and water.",
        optionA: "Food",
        optionB: "Toys",
        optionC: "Clothes",
        correctAnswer: "Food",
      }),
      shuffleOptions({
        question: "Fish live in ______.",
        optionA: "Water",
        optionB: "Jungle",
        optionC: "Cages",
        correctAnswer: "Water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cow gives us milk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hen gives us wool.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Lion lives in jungle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Silkworm gives us silk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish lives in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Honeybee gives us honey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dog is a wild animal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Leather is made from animal skin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Animals also feel pain like us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should hurt animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
