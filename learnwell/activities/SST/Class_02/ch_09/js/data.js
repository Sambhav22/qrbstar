export const chapter = "Chapter - 9: Festivals We Enjoy";
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
        question: "Which festival is celebrated by playing with coloured powder and water?",
        optionA: "Eid",
        optionB: "Holi",
        optionC: "Christmas",
        correctAnswer: "Holi",
      }),
      shuffleOptions({
        question: "On which festival do people light diyas and candles at home?",
        optionA: "Diwali",
        optionB: "Holi",
        optionC: "Baisakhi",
        correctAnswer: "Diwali",
      }),
      shuffleOptions({
        question: "On which festival do people go to church to offer special prayers?",
        optionA: "Holi",
        optionB: "Christmas",
        optionC: "Gurpurab",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "Which festival is celebrated after the holy month of Ramzan?",
        optionA: "Diwali",
        optionB: "Eid-ul-Fitr",
        optionC: "Holi",
        correctAnswer: "Eid-ul-Fitr",
      }),
      shuffleOptions({
        question: "Which festival is celebrated to mark the birthdays of the Sikh Gurus?",
        optionA: "Gurpurab",
        optionB: "Holi",
        optionC: "Christmas",
        correctAnswer: "Gurpurab",
      }),
      shuffleOptions({
        question: "On which festival do people decorate a Christmas tree?",
        optionA: "Eid",
        optionB: "Christmas",
        optionC: "Diwali",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "On which festival do people enjoy a sweet dish called gujiya?",
        optionA: "Eid",
        optionB: "Diwali",
        optionC: "Holi and Diwali",
        correctAnswer: "Holi and Diwali",
      }),
      shuffleOptions({
        question: "Which festival is known as the festival of lights?",
        optionA: "Christmas",
        optionB: "Diwali",
        optionC: "Gurpurab",
        correctAnswer: "Diwali",
      }),
      shuffleOptions({
        question: "On which festival do Sikhs sit together and eat langar?",
        optionA: "Christmas",
        optionB: "Gurpurab",
        optionC: "Holi",
        correctAnswer: "Gurpurab",
      }),
      shuffleOptions({
        question: "On which festival do people wish each other “Eid Mubarak”?",
        optionA: "Eid-ul-Fitr",
        optionB: "Diwali",
        optionC: "Christmas",
        correctAnswer: "Eid-ul-Fitr",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People play with ______ during Holi.",
        optionA: "flowers",
        optionB: "colours (gulal)",
        optionC: "balloons",
        correctAnswer: "colours (gulal)",
      }),
      shuffleOptions({
        question: "On Eid, people eat a sweet dish called ______.",
        optionA: "gujiya",
        optionB: "sewian",
        optionC: "cake",
        correctAnswer: "sewian",
      }),
      shuffleOptions({
        question: "Christians decorate a ______ tree on Christmas.",
        optionA: "mango",
        optionB: "Christmas",
        optionC: "banyan",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "Sikhs eat free food called ______ on Gurpurabs.",
        optionA: "langar",
        optionB: "sewian",
        optionC: "gujiya",
        correctAnswer: "langar",
      }),
      shuffleOptions({
        question: "People light ______ during Diwali.",
        optionA: "diyas and candles",
        optionB: "lanterns only",
        optionC: "crackers only",
        correctAnswer: "diyas and candles",
      }),
      shuffleOptions({
        question: "Eid comes after the holy month of ______.",
        optionA: "Ramzan",
        optionB: "January",
        optionC: "Diwali",
        correctAnswer: "Ramzan",
      }),
      shuffleOptions({
        question: "Diwali is the festival of ______.",
        optionA: "colours",
        optionB: "food",
        optionC: "lights",
        correctAnswer: "lights",
      }),
      shuffleOptions({
        question: "Holi celebrations begin with a ______ bonfire.",
        optionA: "Holika",
        optionB: "Christmas",
        optionC: "Diya",
        correctAnswer: "Holika",
      }),
      shuffleOptions({
        question: "Christmas marks the birthday of ______.",
        optionA: "Guru Nanak",
        optionB: "Jesus Christ",
        optionC: "Mahatma Gandhi",
        correctAnswer: "Jesus Christ",
      }),
      shuffleOptions({
        question: "Langar is served in a ______.",
        optionA: "mosque",
        optionB: "gurudwara",
        optionC: "church",
        correctAnswer: "gurudwara",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Holi is known as the festival of colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People burst crackers mainly on Diwali.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People go to the mosque on Christmas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Eid-ul-Fitr is celebrated after Ramzan.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gurpurabs are celebrated to mark the birthdays of Sikh Gurus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Christmas is celebrated on 25th December every year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People decorate their houses with colours on Holi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Langar is a free meal served in a gurudwara.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diwali is celebrated by Christians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People say “Eid Mubarak” on Eid.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
