export const chapter = "Chapter - 17: Dealing with Garbage";
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
        question: "Which type of waste can easily rot and mix with soil?",
        optionA: "Plastic waste",
        optionB: "Biodegradable waste",
        optionC: "Metallic waste",
        correctAnswer: "Biodegradable waste",
      }),
      shuffleOptions({
        question: "Which waste cannot be broken down by microorganisms?",
        optionA: "Non-biodegradable waste",
        optionB: "Biodegradable waste",
        optionC: "Organic waste",
        correctAnswer: "Non-biodegradable waste",
      }),
      shuffleOptions({
        question: "What do red worms do in a compost pit?",
        optionA: "Burn garbage",
        optionB: "Help to make manure",
        optionC: "Eat paper",
        correctAnswer: "Help to make manure",
      }),
      shuffleOptions({
        question: "Which gas is produced when garbage is burnt?",
        optionA: "Carbon dioxide",
        optionB: "Oxygen",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "Which bin should be used for kitchen waste?",
        optionA: "Blue",
        optionB: "Green",
        optionC: "Red",
        correctAnswer: "Green",
      }),
      shuffleOptions({
        question: "What is the process of burning waste materials called?",
        optionA: "Composting",
        optionB: "Incineration",
        optionC: "Recycling",
        correctAnswer: "Incineration",
      }),
      shuffleOptions({
        question: "What is a landfill used for?",
        optionA: "Growing crops",
        optionB: "Dumping waste",
        optionC: "Cleaning drains",
        correctAnswer: "Dumping waste",
      }),
      shuffleOptions({
        question: "Which method uses earthworms to prepare organic manure?",
        optionA: "Incineration",
        optionB: "Vermicomposting",
        optionC: "Recycling",
        correctAnswer: "Vermicomposting",
      }),
      shuffleOptions({
        question: "Which of these materials is non-biodegradable?",
        optionA: "Plastic",
        optionB: "Banana peel",
        optionC: "Paper",
        correctAnswer: "Plastic",
      }),
      shuffleOptions({
        question: "Which of the following helps to reduce plastic pollution?",
        optionA: "Using cloth or jute bags",
        optionB: "Burning plastic",
        optionC: "Throwing it on roads",
        correctAnswer: "Using cloth or jute bags",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Waste that can rot and mix with soil is called ______ waste.",
        optionA: "biodegradable",
        optionB: "liquid",
        optionC: "metallic",
        correctAnswer: "biodegradable",
      }),
      shuffleOptions({
        question: "Waste that does not rot easily is called ______ waste.",
        optionA: "non-biodegradable",
        optionB: "compostable",
        optionC: "plastic",
        correctAnswer: "non-biodegradable",
      }),
      shuffleOptions({
        question: "______ and ______ help to decompose organic waste.",
        optionA: "Bacteria, fungi",
        optionB: "Ants, flies",
        optionC: "Worms, dust",
        correctAnswer: "Bacteria, fungi",
      }),
      shuffleOptions({
        question: "The process of making manure from garbage is called ______.",
        optionA: "composting",
        optionB: "segregation",
        optionC: "filtration",
        correctAnswer: "composting",
      }),
      shuffleOptions({
        question: "In vermicomposting, ______ are used.",
        optionA: "red worms",
        optionB: "black ants",
        optionC: "honey bees",
        correctAnswer: "red worms",
      }),
      shuffleOptions({
        question: "The low-lying area where garbage is dumped and covered with soil is called a ______.",
        optionA: "landfill",
        optionB: "park",
        optionC: "pond",
        correctAnswer: "landfill",
      }),
      shuffleOptions({
        question: "Burning of waste materials is known as ______.",
        optionA: "incineration",
        optionB: "composting",
        optionC: "recycling",
        correctAnswer: "incineration",
      }),
      shuffleOptions({
        question: "The 4 Rs stand for Reuse, Reduce, Recycle and ______.",
        optionA: "Respect",
        optionB: "Replace",
        optionC: "Rebuild",
        correctAnswer: "Respect",
      }),
      shuffleOptions({
        question: "The bin used for non-biodegradable waste is ______ in colour.",
        optionA: "blue",
        optionB: "green",
        optionC: "yellow",
        correctAnswer: "blue",
      }),
      shuffleOptions({
        question: "______ should never be burnt as it releases harmful gases.",
        optionA: "Plastic",
        optionB: "Paper",
        optionC: "Leaves",
        correctAnswer: "Plastic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Biodegradable waste can be decomposed by microorganisms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plastic waste rots easily in soil.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Open dumping of garbage is safe for the environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Compost acts as a natural fertiliser for plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Burning plastic produces toxic gases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Green bins are used for non-biodegradable waste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Recycling helps to save energy and natural resources.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Earthworms are used in vermicomposting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Liquid waste includes water from kitchens and toilets.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should always throw garbage on the roads.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
