export const chapter = "Chapter - 11: Teeth and Tongue";
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
        question: "Which part of our body helps to mix food while chewing?",
        optionA: "Teeth",
        optionB: "Tongue",
        optionC: "Nose",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "Which type of teeth are used for tearing food?",
        optionA: "Canines",
        optionB: "Incisors",
        optionC: "Molars",
        correctAnswer: "Canines",
      }),
      shuffleOptions({
        question: "Which organ helps us to taste different flavours of food?",
        optionA: "Ears",
        optionB: "Tongue",
        optionC: "Nose",
        correctAnswer: "Tongue",
      }),
      shuffleOptions({
        question: "Which teeth act like nut-crackers and help in crushing food?",
        optionA: "Premolars",
        optionB: "Canines",
        optionC: "Molars",
        correctAnswer: "Premolars",
      }),
      shuffleOptions({
        question: "How many incisors are present in each jaw?",
        optionA: "Four",
        optionB: "Two",
        optionC: "Six",
        correctAnswer: "Four",
      }),
      shuffleOptions({
        question: "Which animal uses its tongue to find its way in the dark?",
        optionA: "Frog",
        optionB: "Snake",
        optionC: "Tiger",
        correctAnswer: "Snake",
      }),
      shuffleOptions({
        question: "What is the approximate weight of the human tongue?",
        optionA: "36 grams",
        optionB: "56 grams",
        optionC: "66 grams",
        correctAnswer: "56 grams",
      }),
      shuffleOptions({
        question: "The molars at the end of the jaws are called",
        optionA: "Wisdom teeth",
        optionB: "Cutting teeth",
        optionC: "Tearing teeth",
        correctAnswer: "Wisdom teeth",
      }),
      shuffleOptions({
        question: "What protects our teeth from cavities and decay?",
        optionA: "Fluoride toothpaste",
        optionB: "Cold drinks",
        optionC: "Sugar",
        correctAnswer: "Fluoride toothpaste",
      }),
      shuffleOptions({
        question: "By the age of 20, an adult usually has ____ permanent teeth.",
        optionA: "28",
        optionB: "32",
        optionC: "30",
        correctAnswer: "32",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The tongue is one of the five _____.",
        optionA: "Sense organs",
        optionB: "Bones",
        optionC: "Muscles",
        correctAnswer: "Sense organs",
      }),
      shuffleOptions({
        question: "Teeth help us to ____ our food.",
        optionA: "Chew",
        optionB: "Smell",
        optionC: "Hear",
        correctAnswer: "Chew",
      }),
      shuffleOptions({
        question: "The buds on the tip of the tongue help to detect ____ taste.",
        optionA: "Sour",
        optionB: "Sweet",
        optionC: "Bitter",
        correctAnswer: "Sweet",
      }),
      shuffleOptions({
        question: "The buds on the back of the tongue help to detect ____ taste.",
        optionA: "Bitter",
        optionB: "Salty",
        optionC: "Sweet",
        correctAnswer: "Bitter",
      }),
      shuffleOptions({
        question: "Frogs and lizards use their ____ to catch insects.",
        optionA: "Hands",
        optionB: "Tongues",
        optionC: "Tails",
        correctAnswer: "Tongues",
      }),
      shuffleOptions({
        question: "A clear film of bacteria on our teeth is called _____.",
        optionA: "Plaque",
        optionB: "Paste",
        optionC: "Germs",
        correctAnswer: "Plaque",
      }),
      shuffleOptions({
        question: "The broad teeth next to canines are called _____.",
        optionA: "Molars",
        optionB: "Premolars",
        optionC: "Incisors",
        correctAnswer: "Premolars",
      }),
      shuffleOptions({
        question: "The first set of temporary teeth in children are ____ teeth.",
        optionA: "Milk",
        optionB: "Permanent",
        optionC: "Wisdom",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "The teeth that grow after milk teeth fall out are ____ teeth.",
        optionA: "Baby",
        optionB: "Permanent",
        optionC: "Sharp",
        correctAnswer: "Permanent",
      }),
      shuffleOptions({
        question: "We should brush our teeth ____ times a day.",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        correctAnswer: "Two",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Tongue helps us to speak and taste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Canines are used for cutting food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Babies are born without teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plaque is good for our teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Brushing once a week keeps teeth clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tongue is about 10 cm long.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Molars are broader than premolars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A frog uses its teeth to chew food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The last molars are called wisdom teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cleaning the tongue prevents bad breath.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
