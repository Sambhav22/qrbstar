export const chapter = "Chapter - 5: Acids, Bases and Salts";
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
        question: "Which acid is responsible for the tangy taste of cola drinks?",
        optionA: "Citric acid",
        optionB: "Carbonic acid",
        optionC: "Acetic acid",
        correctAnswer: "Carbonic acid",
      }),
      shuffleOptions({
        question: "Which acid is present in curd?",
        optionA: "Lactic acid",
        optionB: "Ascorbic acid",
        optionC: "Tartaric acid",
        correctAnswer: "Lactic acid",
      }),
      shuffleOptions({
        question: "What are the substances that change colour in acidic and basic mediums called?",
        optionA: "Salts",
        optionB: "Indicators",
        optionC: "Alkalies",
        correctAnswer: "Indicators",
      }),
      shuffleOptions({
        question: "Which base is used in making soaps and detergents?",
        optionA: "Sodium hydroxide",
        optionB: "Ammonium hydroxide",
        optionC: "Magnesium hydroxide",
        correctAnswer: "Sodium hydroxide",
      }),
      shuffleOptions({
        question: "What is the taste of acids?",
        optionA: "Bitter",
        optionB: "Sour",
        optionC: "Sweet",
        correctAnswer: "Sour",
      }),
      shuffleOptions({
        question: "What does a blue litmus paper turn into when dipped in an acid?",
        optionA: "Remains blue",
        optionB: "Turns red",
        optionC: "Turns green",
        correctAnswer: "Turns red",
      }),
      shuffleOptions({
        question: "Which natural indicator changes yellow to red in a basic solution?",
        optionA: "Litmus",
        optionB: "Turmeric",
        optionC: "Red cabbage",
        correctAnswer: "Turmeric",
      }),
      shuffleOptions({
        question: "What is the reaction between an acid and a base called?",
        optionA: "Neutralisation",
        optionB: "Dilution",
        optionC: "Decomposition",
        correctAnswer: "Neutralisation",
      }),
      shuffleOptions({
        question: "Which of the following is used for whitewashing walls?",
        optionA: "Calcium hydroxide",
        optionB: "Ammonium hydroxide",
        optionC: "Sulphuric acid",
        correctAnswer: "Calcium hydroxide",
      }),
      shuffleOptions({
        question: "What type of reaction releases heat?",
        optionA: "Endothermic",
        optionB: "Exothermic",
        optionC: "Neutral",
        correctAnswer: "Exothermic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The acid present in lemons is ______.",
        optionA: "Tartaric acid",
        optionB: "Citric acid",
        optionC: "Malic acid",
        correctAnswer: "Citric acid",
      }),
      shuffleOptions({
        question: "Bases produce ______ ions when dissolved in water.",
        optionA: "Hydrogen",
        optionB: "Hydroxide",
        optionC: "Chloride",
        correctAnswer: "Hydroxide",
      }),
      shuffleOptions({
        question: "The pH of pure water is ______.",
        optionA: "5",
        optionB: "7",
        optionC: "9",
        correctAnswer: "7",
      }),
      shuffleOptions({
        question: "The acid found in our stomach is ______.",
        optionA: "Nitric acid",
        optionB: "Hydrochloric acid",
        optionC: "Sulphuric acid",
        correctAnswer: "Hydrochloric acid",
      }),
      shuffleOptions({
        question: "The base used in antacid tablets is ______.",
        optionA: "Magnesium hydroxide",
        optionB: "Sodium hydroxide",
        optionC: "Calcium hydroxide",
        correctAnswer: "Magnesium hydroxide",
      }),
      shuffleOptions({
        question: "______ indicator turns pink in basic solution and remains colourless in acidic solution.",
        optionA: "Methyl orange",
        optionB: "Phenolphthalein",
        optionC: "Turmeric",
        correctAnswer: "Phenolphthalein",
      }),
      shuffleOptions({
        question: "______ is used in car batteries and to make dyes.",
        optionA: "Sulphuric acid",
        optionB: "Nitric acid",
        optionC: "Hydrochloric acid",
        correctAnswer: "Sulphuric acid",
      }),
      shuffleOptions({
        question: "______ is a basic substance that can dissolve in water.",
        optionA: "Acid",
        optionB: "Alkali",
        optionC: "Salt",
        correctAnswer: "Alkali",
      }),
      shuffleOptions({
        question: "The acid in bee sting is ______.",
        optionA: "Formic acid",
        optionB: "Acetic acid",
        optionC: "Tartaric acid",
        correctAnswer: "Formic acid",
      }),
      shuffleOptions({
        question: "The Danish chemist who introduced the pH scale was ______.",
        optionA: "Dalton",
        optionB: "Sorensen",
        optionC: "Newton",
        correctAnswer: "Sorensen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Acids are bitter in taste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bases feel slippery when touched.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All acids are soluble in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Turmeric turns red in acidic solution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Acetic acid is present in vinegar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Litmus is a synthetic indicator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Acid rain causes damage to buildings and monuments.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Neutralisation reaction produces salt and water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Alkalis are insoluble in water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Antacid tablets help to neutralise excess acid in the stomach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
