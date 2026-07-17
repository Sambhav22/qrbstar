export const chapter = "Chapter - 18: UN Organs and Agencies";
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
        question: "Which UN organ prepares and presents the annual report of the organisation?",
        optionA: "ICJ",
        optionB: "Secretariat",
        optionC: "ECOSOC",
        correctAnswer: "Secretariat",
      }),
      shuffleOptions({
        question: "Which organ of the UN includes all member nations and discusses global issues?",
        optionA: "General Assembly",
        optionB: "Security Council",
        optionC: "Trusteeship Council",
        correctAnswer: "General Assembly",
      }),
      shuffleOptions({
        question: "Which UN agency works worldwide to eliminate diseases like malaria and tuberculosis?",
        optionA: "IMF",
        optionB: "WHO",
        optionC: "FAO",
        correctAnswer: "WHO",
      }),
      shuffleOptions({
        question: "Which agency works to improve the nutrition and living standards of people?",
        optionA: "UNICEF",
        optionB: "FAO",
        optionC: "ILO",
        correctAnswer: "FAO",
      }),
      shuffleOptions({
        question: "Which UN organ consists of fifteen judges from different countries?",
        optionA: "Security Council",
        optionB: "ECOSOC",
        optionC: "International Court of Justice (ICJ)",
        correctAnswer: "International Court of Justice (ICJ)",
      }),
      shuffleOptions({
        question: "Which UN body helps settle disputes between countries through negotiation?",
        optionA: "UNESCO",
        optionB: "Security Council",
        optionC: "IMF",
        correctAnswer: "Security Council",
      }),
      shuffleOptions({
        question: "Which specialised agency works for the welfare, education and health of children?",
        optionA: "UNICEF",
        optionB: "ILO",
        optionC: "WHO",
        correctAnswer: "UNICEF",
      }),
      shuffleOptions({
        question: "Which organisation helps countries facing financial instability by giving loans?",
        optionA: "WHO",
        optionB: "IMF",
        optionC: "UNESCO",
        correctAnswer: "IMF",
      }),
      shuffleOptions({
        question: "Which body was created to guide territories towards self-government?",
        optionA: "Trusteeship Council",
        optionB: "ECOSOC",
        optionC: "WHO",
        correctAnswer: "Trusteeship Council",
      }),
      shuffleOptions({
        question: "Which UN agency promotes peace, culture, human rights and education worldwide?",
        optionA: "UNESCO",
        optionB: "UNICEF",
        optionC: "FAO",
        correctAnswer: "UNESCO",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The specialised agency that won the Nobel Prize for Peace in 1965 is ______.",
        optionA: "FAO",
        optionB: "UNICEF",
        optionC: "UNESCO",
        correctAnswer: "UNICEF",
      }),
      shuffleOptions({
        question: "The headquarters of the International Court of Justice are located in ______.",
        optionA: "Paris",
        optionB: "The Hague",
        optionC: "New York",
        correctAnswer: "The Hague",
      }),
      shuffleOptions({
        question: "The Trusteeship Council was created to help regions prepare for ______.",
        optionA: "independence",
        optionB: "defence",
        optionC: "trade",
        correctAnswer: "independence",
      }),
      shuffleOptions({
        question: "The headquarters of WHO are in ______.",
        optionA: "Geneva",
        optionB: "Rome",
        optionC: "Washington",
        correctAnswer: "Geneva",
      }),
      shuffleOptions({
        question: "The UN Secretariat is headed by the ______.",
        optionA: "Security Chief",
        optionB: "President",
        optionC: "Secretary General",
        correctAnswer: "Secretary General",
      }),
      shuffleOptions({
        question: "ECOSOC works mainly on ______ issues.",
        optionA: "military",
        optionB: "economic and social",
        optionC: "technological",
        correctAnswer: "economic and social",
      }),
      shuffleOptions({
        question: "The FAO was established to defeat ______.",
        optionA: "pollution",
        optionB: "hunger",
        optionC: "unemployment",
        correctAnswer: "hunger",
      }),
      shuffleOptions({
        question: "The IMF provides ______ assistance to countries.",
        optionA: "financial",
        optionB: "cultural",
        optionC: "agricultural",
        correctAnswer: "financial",
      }),
      shuffleOptions({
        question: "WHO played a major role in eliminating ______ from the world.",
        optionA: "smallpox",
        optionB: "cholera",
        optionC: "diphtheria",
        correctAnswer: "smallpox",
      }),
      shuffleOptions({
        question: "The Security Council consists of ______ non-permanent members.",
        optionA: "five",
        optionB: "ten",
        optionC: "twelve",
        correctAnswer: "ten",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The General Assembly meets once a year in September.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Security Council cannot impose economic sanctions on an offending country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The ICJ is also known as the World Court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "UNICEF mainly focuses on improving the welfare of working adults.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "ECOSOC meets twice every year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "WHO’s priorities include communicable diseases such as malaria and AIDS.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Trusteeship Council’s work is finished because all territories gained self-rule.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The IMF headquarters are located in China.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "All countries in the General Assembly have one vote each.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India has contributed to UN peacekeeping missions in countries like Korea and Congo.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
