export const chapter = "Chapter - 1: Parents and Children";
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
        question: "Who brought an album to Aranya’s house during the Naamkaran Sanskar?",
        optionA: "Dadi",
        optionB: "Nani",
        optionC: "Aunt",
        correctAnswer: "Nani",
      }),
      shuffleOptions({
        question: "Which organ carries food and oxygen to the baby in the mother’s body?",
        optionA: "Heart",
        optionB: "Tube",
        optionC: "Bone",
        correctAnswer: "Tube",
      }),
      shuffleOptions({
        question: "How long does a baby kangaroo stay in its mother’s pouch?",
        optionA: "2 months",
        optionB: "8 months",
        optionC: "1 month",
        correctAnswer: "8 months",
      }),
      shuffleOptions({
        question: "Which animal carries its baby by holding its mother’s tail?",
        optionA: "Dog",
        optionB: "Elephant",
        optionC: "Monkey",
        correctAnswer: "Elephant",
      }),
      shuffleOptions({
        question: "Which animal feeds its chicks in the nest?",
        optionA: "Bird",
        optionB: "Fish",
        optionC: "Snake",
        correctAnswer: "Bird",
      }),
      shuffleOptions({
        question: "What kind of animals give birth to babies?",
        optionA: "Mammals",
        optionB: "Reptiles",
        optionC: "Amphibians",
        correctAnswer: "Mammals",
      }),
      shuffleOptions({
        question: "What ceremony was celebrated at Aranya’s home?",
        optionA: "Wedding",
        optionB: "Naamkaran Sanskar",
        optionC: "Festival",
        correctAnswer: "Naamkaran Sanskar",
      }),
      shuffleOptions({
        question: "Who told Aranya to look for her father’s photos in Dadi’s album?",
        optionA: "Mother",
        optionB: "Nani",
        optionC: "Aunt",
        correctAnswer: "Nani",
      }),
      shuffleOptions({
        question: "Which of these animals lays eggs and moves away?",
        optionA: "Dog",
        optionB: "Fish",
        optionC: "Cow",
        correctAnswer: "Fish",
      }),
      shuffleOptions({
        question: "Foster care is supervised by which organisation in India?",
        optionA: "Government",
        optionB: "Schools",
        optionC: "Markets",
        correctAnswer: "Government",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A baby develops inside the mother’s ______.",
        optionA: "Mouth",
        optionB: "Womb",
        optionC: "Stomach",
        correctAnswer: "Womb",
      }),
      shuffleOptions({
        question: "The baby monkey ______ to its mother’s body.",
        optionA: "Clings",
        optionB: "Hides",
        optionC: "Climbs",
        correctAnswer: "Clings",
      }),
      shuffleOptions({
        question: "The kangaroo keeps its baby in a ______.",
        optionA: "Nest",
        optionB: "Pouch",
        optionC: "Basket",
        correctAnswer: "Pouch",
      }),
      shuffleOptions({
        question: "A baby receives ______ and ______ from the mother through a tube.",
        optionA: "Food and oxygen",
        optionB: "Blood and air",
        optionC: "Water and milk",
        correctAnswer: "Food and oxygen",
      }),
      shuffleOptions({
        question: "In ______, parents legally become parents of another child.",
        optionA: "Fostering",
        optionB: "Adoption",
        optionC: "Naming",
        correctAnswer: "Adoption",
      }),
      shuffleOptions({
        question: "In ______, parents care for a child for a short time.",
        optionA: "Adoption",
        optionB: "Fostering",
        optionC: "Marriage",
        correctAnswer: "Fostering",
      }),
      shuffleOptions({
        question: "Aranya saw her father’s photos in her ______’s album.",
        optionA: "Dadi",
        optionB: "Nani",
        optionC: "Friend",
        correctAnswer: "Dadi",
      }),
      shuffleOptions({
        question: "Birds build ______ to take care of their young ones.",
        optionA: "Trees",
        optionB: "Nests",
        optionC: "Holes",
        correctAnswer: "Nests",
      }),
      shuffleOptions({
        question: "Human beings and animals like cows and dogs are called ______.",
        optionA: "Mammals",
        optionB: "Reptiles",
        optionC: "Amphibians",
        correctAnswer: "Mammals",
      }),
      shuffleOptions({
        question: "Fish and insects lay ______ and move on.",
        optionA: "Eggs",
        optionB: "Babies",
        optionC: "Shells",
        correctAnswer: "Eggs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Naamkaran Sanskar is a naming ceremony.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A baby develops outside the mother’s body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mammals give birth to babies, not eggs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mother bird feeds her young chicks in the nest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The baby kangaroo stays in its mother’s pouch for about eight months.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In fostering, parents look after a child for a short time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fish guard their eggs until they hatch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Adoption makes parents legal guardians of the child.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Foster care in India is supervised by the government or charities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aranya’s Nani brought an album with her during the ceremony.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
