export const chapter = "Chapter - 14: Disposal of Waste";
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
        question: "What did Karan, Raman and Shreya notice during their school campaign?",
        optionA: "Clean parks",
        optionB: "Heaps of garbage",
        optionC: "New buildings",
        correctAnswer: "Heaps of garbage",
      }),
      shuffleOptions({
        question: "Waste is created when we throw away ______.",
        optionA: "sharpened pencil shavings",
        optionB: "sharpeners",
        optionC: "pencils",
        correctAnswer: "sharpened pencil shavings",
      }),
      shuffleOptions({
        question: "Which type of waste decomposes naturally?",
        optionA: "Non-biodegradable",
        optionB: "Biodegradable",
        optionC: "Electronic",
        correctAnswer: "Biodegradable",
      }),
      shuffleOptions({
        question: "Which method of waste disposal causes air pollution?",
        optionA: "Composting",
        optionB: "Incineration",
        optionC: "Landfill",
        correctAnswer: "Incineration",
      }),
      shuffleOptions({
        question: "In which method is waste burnt in special furnaces?",
        optionA: "Composting",
        optionB: "Incineration",
        optionC: "Open dumping",
        correctAnswer: "Incineration",
      }),
      shuffleOptions({
        question: "What is added after every three metres of waste in a landfill?",
        optionA: "Compost",
        optionB: "Soil layer",
        optionC: "Plastic sheet",
        correctAnswer: "Soil layer",
      }),
      shuffleOptions({
        question: "Which waste includes plastic bags and glass bottles?",
        optionA: "Biodegradable",
        optionB: "Non-biodegradable",
        optionC: "Organic",
        correctAnswer: "Non-biodegradable",
      }),
      shuffleOptions({
        question: "What poisonous metals are found in e-waste?",
        optionA: "Zinc and Iron",
        optionB: "Mercury and Lead",
        optionC: "Copper and Tin",
        correctAnswer: "Mercury and Lead",
      }),
      shuffleOptions({
        question: "Which process turns biodegradable waste into manure?",
        optionA: "Composting",
        optionB: "Incineration",
        optionC: "Recycling",
        correctAnswer: "Composting",
      }),
      shuffleOptions({
        question: "What does “Reuse” mean in waste management?",
        optionA: "Throw away after use",
        optionB: "Use again for another purpose",
        optionC: "Burn it",
        correctAnswer: "Use again for another purpose",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Waste refers to materials that are no longer ______.",
        optionA: "usable",
        optionB: "colourful",
        optionC: "clean",
        correctAnswer: "usable",
      }),
      shuffleOptions({
        question: "Factories discard ______ chemicals.",
        optionA: "pleasant",
        optionB: "toxic",
        optionC: "helpful",
        correctAnswer: "toxic",
      }),
      shuffleOptions({
        question: "Open dumping of waste ______ the environment.",
        optionA: "cleans",
        optionB: "pollutes",
        optionC: "protects",
        correctAnswer: "pollutes",
      }),
      shuffleOptions({
        question: "In landfill, waste is solidified by ______.",
        optionA: "bulldozers",
        optionB: "trucks",
        optionC: "rollers",
        correctAnswer: "bulldozers",
      }),
      shuffleOptions({
        question: "In incineration, waste is ______ to reduce its weight.",
        optionA: "washed",
        optionB: "burnt",
        optionC: "buried",
        correctAnswer: "burnt",
      }),
      shuffleOptions({
        question: "Composting needs microorganisms like ______.",
        optionA: "bacteria and fungi",
        optionB: "flies and worms",
        optionC: "frogs and ants",
        correctAnswer: "bacteria and fungi",
      }),
      shuffleOptions({
        question: "Non-biodegradable waste does not ______.",
        optionA: "smell",
        optionB: "decompose",
        optionC: "burn",
        correctAnswer: "decompose",
      }),
      shuffleOptions({
        question: "The three R’s stand for Reduce, Reuse and ______.",
        optionA: "Rebuild",
        optionB: "Recycle",
        optionC: "Remake",
        correctAnswer: "Recycle",
      }),
      shuffleOptions({
        question: "Improper waste disposal invites ______.",
        optionA: "rain",
        optionB: "flies and mosquitoes",
        optionC: "sunshine",
        correctAnswer: "flies and mosquitoes",
      }),
      shuffleOptions({
        question: "Factories and markets are major sources of ______.",
        optionA: "pollution",
        optionB: "toys",
        optionC: "clothes",
        correctAnswer: "pollution",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Waste is produced only in homes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Composting is a slow process but useful for soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Incineration helps to reduce waste volume by about 90%.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Non-biodegradable waste decomposes easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Improper waste disposal causes bad smell and diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Landfills should be made in flood-prone areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Reuse means to use a thing again instead of throwing it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "E-waste is good for the environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plastic and metals are examples of non-biodegradable waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Recycling helps to save natural resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
