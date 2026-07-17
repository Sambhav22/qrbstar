export const chapter = "Chapter - 11: Our Celebrations";
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
        question: "What do people play with on Holi?",
        optionA: "Lights",
        optionB: "Colours",
        optionC: "Candles",
        correctAnswer: "Colours",
      }),
      shuffleOptions({
        question: "What do people decorate their homes with on Diwali?",
        optionA: "Balloons",
        optionB: "Diyas and lights",
        optionC: "Toys",
        correctAnswer: "Diyas and lights",
      }),
      shuffleOptions({
        question: "What do people cook and eat on Eid?",
        optionA: "Sewain",
        optionB: "Cake",
        optionC: "Jalebi",
        correctAnswer: "Sewain",
      }),
      shuffleOptions({
        question: "When is Christmas celebrated every year?",
        optionA: "14 November",
        optionB: "25 December",
        optionC: "2 October",
        correctAnswer: "25 December",
      }),
      shuffleOptions({
        question: "Who celebrate Gurupurabs?",
        optionA: "Hindus",
        optionB: "Sikhs",
        optionC: "Christians",
        correctAnswer: "Sikhs",
      }),
      shuffleOptions({
        question: "What do people do on their birthdays?",
        optionA: "Offer prayers",
        optionB: "Cut cake",
        optionC: "Go to temple",
        correctAnswer: "Cut cake",
      }),
      shuffleOptions({
        question: "Whom do people worship on Diwali?",
        optionA: "Goddess Saraswati",
        optionB: "Goddess Laxmi",
        optionC: "Goddess Parvati",
        correctAnswer: "Goddess Laxmi",
      }),
      shuffleOptions({
        question: "What do people say to each other on Eid?",
        optionA: "Merry Christmas",
        optionB: "Happy Diwali",
        optionC: "Eid Mubarak",
        correctAnswer: "Eid Mubarak",
      }),
      shuffleOptions({
        question: "What do people burst on Diwali night?",
        optionA: "Crackers",
        optionB: "Balloons",
        optionC: "Candles",
        correctAnswer: "Crackers",
      }),
      shuffleOptions({
        question: "Where do Christians go to pray on Christmas?",
        optionA: "Church",
        optionB: "Temple",
        optionC: "Gurudwara",
        correctAnswer: "Church",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Holi is the festival of _______.",
        optionA: "Lights",
        optionB: "Colours",
        optionC: "Sweets",
        correctAnswer: "Colours",
      }),
      shuffleOptions({
        question: "On Diwali, people wear ______ clothes.",
        optionA: "Old",
        optionB: "New",
        optionC: "Plain",
        correctAnswer: "New",
      }),
      shuffleOptions({
        question: "Eid comes after the month of _______.",
        optionA: "Ramzan",
        optionB: "December",
        optionC: "March",
        correctAnswer: "Ramzan",
      }),
      shuffleOptions({
        question: "On Christmas, people decorate a ______.",
        optionA: "Tree",
        optionB: "Lamp",
        optionC: "House only",
        correctAnswer: "Tree",
      }),
      shuffleOptions({
        question: "Gurupurabs are celebrated in ______.",
        optionA: "Gurudwaras",
        optionB: "Mosques",
        optionC: "Temples",
        correctAnswer: "Gurudwaras",
      }),
      shuffleOptions({
        question: "A birthday is a day full of ______.",
        optionA: "Sadness",
        optionB: "Fun",
        optionC: "Silence",
        correctAnswer: "Fun",
      }),
      shuffleOptions({
        question: "People light their houses with diyas and ______.",
        optionA: "Candles",
        optionB: "Fruits",
        optionC: "Flowers",
        correctAnswer: "Candles",
      }),
      shuffleOptions({
        question: "On Eid, people offer ______.",
        optionA: "Namaz",
        optionB: "Aarti",
        optionC: "Song",
        correctAnswer: "Namaz",
      }),
      shuffleOptions({
        question: "A marriage function is full of fun and ______.",
        optionA: "Feast",
        optionB: "Fights",
        optionC: "Boredom",
        correctAnswer: "Feast",
      }),
      shuffleOptions({
        question: "Celebrations fill our life with ______.",
        optionA: "Happiness",
        optionB: "Anger",
        optionC: "Sleep",
        correctAnswer: "Happiness",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Holi is the festival of lights.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People play with colours on Holi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eid is celebrated by Sikhs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People light diyas and candles on Diwali.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Christmas is celebrated on 25 December.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gurupurabs are celebrated by Hindus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People eat sewain on Eid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "On birthdays, children cut cakes and enjoy with friends.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A marriage function is full of sadness.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should celebrate all festivals with love and care.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
