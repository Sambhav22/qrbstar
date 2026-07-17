export const chapter = "Chapter - 10: Our Celebrations";
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
        question: "Which festival is called the festival of lights?",
        optionA: "Holi",
        optionB: "Diwali",
        optionC: "Eid",
        correctAnswer: "Diwali",
      }),
      shuffleOptions({
        question: "Which religion celebrates Eid?",
        optionA: "Hindus",
        optionB: "Muslims",
        optionC: "Christians",
        correctAnswer: "Muslims",
      }),
      shuffleOptions({
        question: "Who is remembered on Gandhi Jayanti?",
        optionA: "Jawaharlal Nehru",
        optionB: "Mahatma Gandhi",
        optionC: "Subhash Chandra Bose",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Which festival is celebrated by all Indians?",
        optionA: "National festivals",
        optionB: "Religious festivals",
        optionC: "Regional festivals",
        correctAnswer: "National festivals",
      }),
      shuffleOptions({
        question: "Which festival is celebrated on 15 August?",
        optionA: "Republic Day",
        optionB: "Independence Day",
        optionC: "Gandhi Jayanti",
        correctAnswer: "Independence Day",
      }),
      shuffleOptions({
        question: "Which festival is called the festival of colours?",
        optionA: "Diwali",
        optionB: "Holi",
        optionC: "Eid",
        correctAnswer: "Holi",
      }),
      shuffleOptions({
        question: "Which festival is celebrated on 26 January?",
        optionA: "Republic Day",
        optionB: "Independence Day",
        optionC: "Gandhi Jayanti",
        correctAnswer: "Republic Day",
      }),
      shuffleOptions({
        question: "Which festival is celebrated by Christians?",
        optionA: "Christmas",
        optionB: "Eid",
        optionC: "Holi",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "Which festival do Sikhs celebrate?",
        optionA: "Baisakhi",
        optionB: "Holi",
        optionC: "Eid",
        correctAnswer: "Baisakhi",
      }),
      shuffleOptions({
        question: "What do festivals fill our life with?",
        optionA: "Sadness",
        optionB: "Great joy",
        optionC: "Tiredness",
        correctAnswer: "Great joy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We celebrate ______ on 15 August.",
        optionA: "Republic Day",
        optionB: "Independence Day",
        optionC: "Gandhi Jayanti",
        correctAnswer: "Independence Day",
      }),
      shuffleOptions({
        question: "______ Jayanti is celebrated on 2 October.",
        optionA: "Gandhi",
        optionB: "Nehru",
        optionC: "Ambedkar",
        correctAnswer: "Gandhi",
      }),
      shuffleOptions({
        question: "______ is the festival of lights.",
        optionA: "Holi",
        optionB: "Diwali",
        optionC: "Eid",
        correctAnswer: "Diwali",
      }),
      shuffleOptions({
        question: "Christians celebrate ______ and Good Friday.",
        optionA: "Christmas",
        optionB: "Holi",
        optionC: "Eid",
        correctAnswer: "Christmas",
      }),
      shuffleOptions({
        question: "Hindus celebrate ______ and Diwali.",
        optionA: "Holi",
        optionB: "Eid",
        optionC: "Christmas",
        correctAnswer: "Holi",
      }),
      shuffleOptions({
        question: "Sikhs enjoy Gurupurabs and ______.",
        optionA: "Baisakhi",
        optionB: "Eid",
        optionC: "Raksha Bandhan",
        correctAnswer: "Baisakhi",
      }),
      shuffleOptions({
        question: "Muslims enjoy Eid and ______.",
        optionA: "Barah-Wafat",
        optionB: "Holi",
        optionC: "Diwali",
        correctAnswer: "Barah-Wafat",
      }),
      shuffleOptions({
        question: "We celebrate Republic Day on ______.",
        optionA: "15 August",
        optionB: "26 January",
        optionC: "2 October",
        correctAnswer: "26 January",
      }),
      shuffleOptions({
        question: "Celebrations fill our life with great ______.",
        optionA: "joy",
        optionB: "anger",
        optionC: "noise",
        correctAnswer: "joy",
      }),
      shuffleOptions({
        question: "We should respect and celebrate ______ festivals with great pomp and show.",
        optionA: "national",
        optionB: "religious",
        optionC: "family",
        correctAnswer: "national",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Festivals fill our life with joy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "National festivals are celebrated by only one religion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Holi is a festival of colours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Diwali is celebrated by Hindus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eid is celebrated by Muslims.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Christmas is celebrated by Christians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhi Jayanti is celebrated on 26 January.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Independence Day is celebrated on 15 August.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Festivals bring love and affection among people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should respect and celebrate national festivals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
