export const chapter = "Chapter - 17: The United Nations";
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
        question: "Who suggested the name “United Nations”?",
        optionA: "Winston Churchill",
        optionB: "Franklin D. Roosevelt",
        optionC: "Jawaharlal Nehru",
        correctAnswer: "Franklin D. Roosevelt",
      }),
      shuffleOptions({
        question: "Which organisation was formed after the First World War to maintain peace?",
        optionA: "United Nations",
        optionB: "League of Nations",
        optionC: "NATO",
        correctAnswer: "League of Nations",
      }),
      shuffleOptions({
        question: "Which city hosted the meeting where the UN Charter was signed?",
        optionA: "Paris",
        optionB: "Rome",
        optionC: "San Francisco",
        correctAnswer: "San Francisco",
      }),
      shuffleOptions({
        question: "Which country’s cities were destroyed by the atom bombs during World War II?",
        optionA: "China",
        optionB: "Japan",
        optionC: "Russia",
        correctAnswer: "Japan",
      }),
      shuffleOptions({
        question: "Which body of the UN deals with world peace and security?",
        optionA: "Security Council",
        optionB: "UNESCO",
        optionC: "UNICEF",
        correctAnswer: "Security Council",
      }),
      shuffleOptions({
        question: "Who dropped the atom bombs in 1945?",
        optionA: "Britain",
        optionB: "USA",
        optionC: "Germany",
        correctAnswer: "USA",
      }),
      shuffleOptions({
        question: "Which colour is used for UN peacekeeping vehicles?",
        optionA: "Red",
        optionB: "White",
        optionC: "Black",
        correctAnswer: "White",
      }),
      shuffleOptions({
        question: "Which organisation works for children under the UN?",
        optionA: "UNICEF",
        optionB: "WHO",
        optionC: "UNESCO",
        correctAnswer: "UNICEF",
      }),
      shuffleOptions({
        question: "Which year is celebrated as the formation year of the United Nations?",
        optionA: "1940",
        optionB: "1945",
        optionC: "1950",
        correctAnswer: "1945",
      }),
      shuffleOptions({
        question: "How many nations originally signed the UN Charter?",
        optionA: "25",
        optionB: "51",
        optionC: "100",
        correctAnswer: "51",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The UN aims to maintain ______ among nations.",
        optionA: "peace",
        optionB: "festivals",
        optionC: "tourism",
        correctAnswer: "peace",
      }),
      shuffleOptions({
        question: "The UN flag shows a world map surrounded by ______.",
        optionA: "wheat",
        optionB: "olive branches",
        optionC: "stars",
        correctAnswer: "olive branches",
      }),
      shuffleOptions({
        question: "The background colour of the UN flag is ______.",
        optionA: "light blue",
        optionB: "dark green",
        optionC: "yellow",
        correctAnswer: "light blue",
      }),
      shuffleOptions({
        question: "The Universal Declaration of Human Rights was adopted on ______.",
        optionA: "24 October 1945",
        optionB: "10 December 1948",
        optionC: "1 January 1950",
        correctAnswer: "10 December 1948",
      }),
      shuffleOptions({
        question: "The headquarters of the United Nations is located in ______.",
        optionA: "London",
        optionB: "New York",
        optionC: "Beijing",
        correctAnswer: "New York",
      }),
      shuffleOptions({
        question: "The Second World War ended in ______.",
        optionA: "1945",
        optionB: "1939",
        optionC: "1920",
        correctAnswer: "1945",
      }),
      shuffleOptions({
        question: "The UN promotes freedom of ______.",
        optionA: "speech and writing",
        optionB: "wildlife",
        optionC: "cooking",
        correctAnswer: "speech and writing",
      }),
      shuffleOptions({
        question: "The UN sends peacekeeping soldiers during ______.",
        optionA: "music concerts",
        optionB: "wars and conflicts",
        optionC: "sports events",
        correctAnswer: "wars and conflicts",
      }),
      shuffleOptions({
        question: "The UN helps fight poverty, illiteracy and ______.",
        optionA: "holidays",
        optionB: "diseases",
        optionC: "celebrations",
        correctAnswer: "diseases",
      }),
      shuffleOptions({
        question: "The UN Charter contains the ______ of the organisation.",
        optionA: "games",
        optionB: "objectives and principles",
        optionC: "punishments",
        correctAnswer: "objectives and principles",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The UN came into force on 24 October 1945.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The League of Nations successfully stopped World War II.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The UN started with 51 member countries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The UN flag shows a map as seen from the South Pole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The UN has six official languages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The UN peacekeeping soldiers wear blue berets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Universal Human Rights Day is celebrated on 28 December.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "More than 5 crore people died during the Second World War.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The UN supports research in medicine and environmental protection.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The UN works only in rich and developed countries.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
