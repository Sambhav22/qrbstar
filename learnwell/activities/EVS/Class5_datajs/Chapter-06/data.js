export const chapter = "Chapter - 6: Work We Do";
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
        question: "Who keeps our surroundings clean and hygienic?",
        optionA: "Sweepers",
        optionB: "Drivers",
        optionC: "Gardeners",
        correctAnswer: "Sweepers",
      }),
      shuffleOptions({
        question: "Who designs buildings and flyovers?",
        optionA: "Carpenters",
        optionB: "Engineers",
        optionC: "Farmers",
        correctAnswer: "Engineers",
      }),
      shuffleOptions({
        question: "Who delivers newspapers to our homes every morning?",
        optionA: "Newspaper hawker",
        optionB: "Security guard",
        optionC: "Plumber",
        correctAnswer: "Newspaper hawker",
      }),
      shuffleOptions({
        question: "Who teaches in schools and colleges?",
        optionA: "Advocates",
        optionB: "Teachers",
        optionC: "Doctors",
        correctAnswer: "Teachers",
      }),
      shuffleOptions({
        question: "Who helps doctors in hospitals?",
        optionA: "Nurses",
        optionB: "Engineers",
        optionC: "Carpenters",
        correctAnswer: "Nurses",
      }),
      shuffleOptions({
        question: "Who maintains law and order in society?",
        optionA: "Police officers",
        optionB: "Drivers",
        optionC: "Scientists",
        correctAnswer: "Police officers",
      }),
      shuffleOptions({
        question: "Who flies aeroplanes?",
        optionA: "Pilot",
        optionB: "Farmer",
        optionC: "Mason",
        correctAnswer: "Pilot",
      }),
      shuffleOptions({
        question: "Who counsels people on legal matters?",
        optionA: "Advocates",
        optionB: "Teachers",
        optionC: "Carpenters",
        correctAnswer: "Advocates",
      }),
      shuffleOptions({
        question: "Who works hard in the fields to grow crops?",
        optionA: "Farmers",
        optionB: "Sweepers",
        optionC: "Drivers",
        correctAnswer: "Farmers",
      }),
      shuffleOptions({
        question: "Who shapes ploughs and implements for farming?",
        optionA: "Smiths",
        optionB: "Guards",
        optionC: "Nurses",
        correctAnswer: "Smiths",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Work is an activity done to _______.",
        optionA: "earn money",
        optionB: "spend time",
        optionC: "rest",
        correctAnswer: "earn money",
      }),
      shuffleOptions({
        question: "The work done with our hands is called ______ work.",
        optionA: "manual",
        optionB: "intellectual",
        optionC: "artistic",
        correctAnswer: "manual",
      }),
      shuffleOptions({
        question: "The work done with our brain is called ______ work.",
        optionA: "intellectual",
        optionB: "physical",
        optionC: "mechanical",
        correctAnswer: "intellectual",
      }),
      shuffleOptions({
        question: "Intellectual jobs are also known as ______ jobs.",
        optionA: "white collar",
        optionB: "blue collar",
        optionC: "government",
        correctAnswer: "white collar",
      }),
      shuffleOptions({
        question: "We must ______ every profession.",
        optionA: "respect",
        optionB: "ignore",
        optionC: "compare",
        correctAnswer: "respect",
      }),
      shuffleOptions({
        question: "Gandhiji showed the ______ of labour through his own actions.",
        optionA: "dignity",
        optionB: "superiority",
        optionC: "difference",
        correctAnswer: "dignity",
      }),
      shuffleOptions({
        question: "Manual work needs ______ effort.",
        optionA: "physical",
        optionB: "mental",
        optionC: "social",
        correctAnswer: "physical",
      }),
      shuffleOptions({
        question: "Doctors and engineers perform ______ work.",
        optionA: "intellectual",
        optionB: "manual",
        optionC: "field",
        correctAnswer: "intellectual",
      }),
      shuffleOptions({
        question: "Sweepers and sanitary workers maintain ______ standards.",
        optionA: "hygienic",
        optionB: "financial",
        optionC: "mechanical",
        correctAnswer: "hygienic",
      }),
      shuffleOptions({
        question: "Every work done with ______ is honourable.",
        optionA: "honesty",
        optionB: "greed",
        optionC: "force",
        correctAnswer: "honesty",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Work is any activity that helps a person earn a living.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Manual labour is not needed in our daily life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Intellectual work is done mainly using the brain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All kinds of work are equal in dignity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should criticise people for small jobs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Engineers and doctors do manual work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sweepers’ work is unhygienic but important.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhiji proved by example that no work is small.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Teachers and advocates use mental effort in their work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dignity of labour means respecting only white-collar jobs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
