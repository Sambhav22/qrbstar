export const chapter = "Chapter - 7: Human Resources";
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
        question: "Which continent has the highest concentration of world population?",
        optionA: "Africa",
        optionB: "Asia",
        optionC: "Australia",
        correctAnswer: "Asia",
      }),
      shuffleOptions({
        question: "Which physical factor discourages population in desert regions?",
        optionA: "Good rainfall",
        optionB: "Harsh climate",
        optionC: "Forest cover",
        correctAnswer: "Harsh climate",
      }),
      shuffleOptions({
        question: "Which region of India shows the highest population concentration?",
        optionA: "Western Ghats",
        optionB: "Northern Plains",
        optionC: "Thar Desert",
        correctAnswer: "Northern Plains",
      }),
      shuffleOptions({
        question: "Which age group forms the working population?",
        optionA: "0–14",
        optionB: "65+",
        optionC: "15–64",
        correctAnswer: "15–64",
      }),
      shuffleOptions({
        question: "Which factor has greatly reduced the death rate in recent decades?",
        optionA: "Decrease in literacy",
        optionB: "Better medical facilities",
        optionC: "Reduction in rainfall",
        correctAnswer: "Better medical facilities",
      }),
      shuffleOptions({
        question: "Which migration type refers to moving within a country?",
        optionA: "National migration",
        optionB: "Emigration",
        optionC: "International migration",
        correctAnswer: "National migration",
      }),
      shuffleOptions({
        question: "Which region is sparsely populated due to extreme cold?",
        optionA: "Amazon Basin",
        optionB: "Sahara",
        optionC: "Siberia",
        correctAnswer: "Siberia",
      }),
      shuffleOptions({
        question: "Which country is the second most populated in the world as per 2011 census?",
        optionA: "India",
        optionB: "China",
        optionC: "USA",
        correctAnswer: "India",
      }),
      shuffleOptions({
        question: "Which factor attracts people to urban areas?",
        optionA: "Thick forests",
        optionB: "Better job opportunities",
        optionC: "Scarce water",
        correctAnswer: "Better job opportunities",
      }),
      shuffleOptions({
        question: "Which term describes the number of females per 1000 males?",
        optionA: "Population density",
        optionB: "Life expectancy",
        optionC: "Sex ratio",
        correctAnswer: "Sex ratio",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The world’s population grew rapidly due to improvements in ______.",
        optionA: "sports",
        optionB: "food supply",
        optionC: "desert size",
        correctAnswer: "food supply",
      }),
      shuffleOptions({
        question: "The least populated continent is ______.",
        optionA: "Asia",
        optionB: "Africa",
        optionC: "Australia",
        correctAnswer: "Australia",
      }),
      shuffleOptions({
        question: "Areas with fertile soil usually support ______ population.",
        optionA: "sparse",
        optionB: "dense",
        optionC: "no",
        correctAnswer: "dense",
      }),
      shuffleOptions({
        question: "Movement of people from one country to another is called ______.",
        optionA: "immigration",
        optionB: "rotation",
        optionC: "cultivation",
        correctAnswer: "immigration",
      }),
      shuffleOptions({
        question: "The increase in population due to high birth rate and low death rate is called ______.",
        optionA: "urbanisation",
        optionB: "natural growth rate",
        optionC: "literacy rate",
        correctAnswer: "natural growth rate",
      }),
      shuffleOptions({
        question: "The average number of years a person may live is known as ______.",
        optionA: "age structure",
        optionB: "life expectancy",
        optionC: "migration",
        correctAnswer: "life expectancy",
      }),
      shuffleOptions({
        question: "The Himalayan region has ______ population due to rugged terrain.",
        optionA: "high",
        optionB: "low",
        optionC: "very dense",
        correctAnswer: "low",
      }),
      shuffleOptions({
        question: "The Amazon Basin is ______ populated due to heavy rainfall and dense forests.",
        optionA: "moderately",
        optionB: "sparsely",
        optionC: "densely",
        correctAnswer: "sparsely",
      }),
      shuffleOptions({
        question: "Better transport facilities usually lead to ______ population densities.",
        optionA: "higher",
        optionB: "lower",
        optionC: "zero",
        correctAnswer: "higher",
      }),
      shuffleOptions({
        question: "The working population falls in the ______ age group.",
        optionA: "15–64 years",
        optionB: "0–14 years",
        optionC: "65+ years",
        correctAnswer: "15–64 years",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The density of population refers to the number of people per square kilometre.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Desert regions always have dense settlements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Europe is sparsely populated due to poor climate and lack of industry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fertile plains and river valleys attract more population.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Migration does not affect population size of any region.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Literacy rate is an indicator of development.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Population explosion refers to slow, gradual increase in population.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The life expectancy of a country increases with better healthcare.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Thick forests always support high population density.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The world’s population was about 1000 million in the 1850s.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
