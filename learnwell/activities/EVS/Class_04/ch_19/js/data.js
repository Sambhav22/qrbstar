export const chapter = "Chapter - 19: Travel";
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
        question: "Who belongs to Sikkim and planned a trip to Kerala?",
        optionA: "Verma family",
        optionB: "Bhutia family",
        optionC: "Reddy family",
        correctAnswer: "Bhutia family",
      }),
      shuffleOptions({
        question: "What is the long-sleeved silk gown worn by Mrs Bhutia called?",
        optionA: "Mundu",
        optionB: "Honju",
        optionC: "Bakhu",
        correctAnswer: "Honju",
      }),
      shuffleOptions({
        question: "What do men in Kerala usually wear with a shirt?",
        optionA: "Lungi",
        optionB: "Bakhu",
        optionC: "Mundu",
        correctAnswer: "Mundu",
      }),
      shuffleOptions({
        question: "Which sea lies to the west of Kerala?",
        optionA: "Arabian Sea",
        optionB: "Bay of Bengal",
        optionC: "Indian Ocean",
        correctAnswer: "Arabian Sea",
      }),
      shuffleOptions({
        question: "Which language is spoken by the people of Kerala?",
        optionA: "Malayalam",
        optionB: "Nepali",
        optionC: "Bengali",
        correctAnswer: "Malayalam",
      }),
      shuffleOptions({
        question: "What is used for buying tickets and goods in India?",
        optionA: "Dollar",
        optionB: "Rupee",
        optionC: "Euro",
        correctAnswer: "Rupee",
      }),
      shuffleOptions({
        question: "What is shown as a watermark on Indian banknotes?",
        optionA: "The Red Fort",
        optionB: "The Ashoka Chakra",
        optionC: "Mahatma Gandhi",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Which animals are called beasts of burden?",
        optionA: "Elephants and horses",
        optionB: "Mules and donkeys",
        optionC: "Cats and dogs",
        correctAnswer: "Mules and donkeys",
      }),
      shuffleOptions({
        question: "What should we do if a domesticated animal falls sick?",
        optionA: "Ignore it",
        optionB: "Take it to a veterinary doctor",
        optionC: "Make it work more",
        correctAnswer: "Take it to a veterinary doctor",
      }),
      shuffleOptions({
        question: "Which animals were used by kings for transport in olden times?",
        optionA: "Elephants",
        optionB: "Camels",
        optionC: "Horses",
        correctAnswer: "Elephants",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Bhutia family travelled from ______ to Kerala.",
        optionA: "Sikkim",
        optionB: "Gujarat",
        optionC: "Punjab",
        correctAnswer: "Sikkim",
      }),
      shuffleOptions({
        question: "In Kerala, food is cooked in ______ oil.",
        optionA: "Mustard",
        optionB: "Coconut",
        optionC: "Groundnut",
        correctAnswer: "Coconut",
      }),
      shuffleOptions({
        question: "Food in Kerala is often served on a ______ leaf.",
        optionA: "Banana",
        optionB: "Mango",
        optionC: "Lotus",
        correctAnswer: "Banana",
      }),
      shuffleOptions({
        question: "Buses and trains are examples of ______ transport.",
        optionA: "Private",
        optionB: "Public",
        optionC: "Personal",
        correctAnswer: "Public",
      }),
      shuffleOptions({
        question: "Money made of metal is called ______.",
        optionA: "Coin",
        optionB: "Note",
        optionC: "Cheque",
        correctAnswer: "Coin",
      }),
      shuffleOptions({
        question: "The front side of a coin showing its value is called the ______.",
        optionA: "Tail",
        optionB: "Head",
        optionC: "Middle",
        correctAnswer: "Head",
      }),
      shuffleOptions({
        question: "The 500-rupee note has a picture of the ______.",
        optionA: "Red Fort",
        optionB: "Sun Temple",
        optionC: "Hampi",
        correctAnswer: "Red Fort",
      }),
      shuffleOptions({
        question: "Camels are used for travel in ______ areas.",
        optionA: "Mountainous",
        optionB: "Desert",
        optionC: "Forest",
        correctAnswer: "Desert",
      }),
      shuffleOptions({
        question: "We should not make animals carry very ______ loads.",
        optionA: "Light",
        optionB: "Heavy",
        optionC: "Small",
        correctAnswer: "Heavy",
      }),
      shuffleOptions({
        question: "We must provide proper ______ to domesticated animals.",
        optionA: "Food and shelter",
        optionB: "Toys",
        optionC: "Medals",
        correctAnswer: "Food and shelter",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Bhutia family lives in Kerala.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kerala lies in the south-western part of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Coins are made of paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Indian currency is the rupee.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The security thread is a mark seen on old coins.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Oxen and camels are used for transporting people and goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Donkeys are called beasts of burden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is good to beat animals if they refuse to work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Elephants were used by kings for transport in ancient times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should be kind and sensitive towards animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
