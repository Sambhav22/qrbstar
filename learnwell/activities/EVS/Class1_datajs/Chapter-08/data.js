export const chapter = "Chapter - 8: Learn Good Things";
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
        question: "What gives us energy to work?",
        optionA: "Weak body",
        optionB: "Healthy body",
        optionC: "Dirty body",
        correctAnswer: "Healthy body",
      }),
      shuffleOptions({
        question: "How many times should we brush our teeth in a day?",
        optionA: "Once",
        optionB: "Twice",
        optionC: "Thrice",
        correctAnswer: "Twice",
      }),
      shuffleOptions({
        question: "What should we do before eating our meals?",
        optionA: "Sleep",
        optionB: "Wash hands",
        optionC: "Play",
        correctAnswer: "Wash hands",
      }),
      shuffleOptions({
        question: "What should we use while sneezing?",
        optionA: "Hands",
        optionB: "Handkerchief",
        optionC: "Towel",
        correctAnswer: "Handkerchief",
      }),
      shuffleOptions({
        question: "What should we drink daily to stay healthy?",
        optionA: "Water",
        optionB: "Cold drinks",
        optionC: "Milkshake",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "What kind of food should we avoid eating?",
        optionA: "Junk food",
        optionB: "Healthy food",
        optionC: "Home-cooked food",
        correctAnswer: "Junk food",
      }),
      shuffleOptions({
        question: "What type of clothes should we wear every day?",
        optionA: "Neat and clean clothes",
        optionB: "Dirty clothes",
        optionC: "Old clothes",
        correctAnswer: "Neat and clean clothes",
      }),
      shuffleOptions({
        question: "What should we do with our nails?",
        optionA: "Cut them regularly",
        optionB: "Bite them",
        optionC: "Paint them",
        correctAnswer: "Cut them regularly",
      }),
      shuffleOptions({
        question: "What should we do to keep our hair tidy?",
        optionA: "Comb and oil them regularly",
        optionB: "Ignore them",
        optionC: "Cut them short",
        correctAnswer: "Comb and oil them regularly",
      }),
      shuffleOptions({
        question: "What should we do every day to keep our body fit?",
        optionA: "Exercise",
        optionB: "Sleep more",
        optionC: "Eat sweet",
        correctAnswer: "Exercise",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should take a _______ daily.",
        optionA: "Meal",
        optionB: "Bath",
        optionC: "Nap",
        correctAnswer: "Bath",
      }),
      shuffleOptions({
        question: "We should wash our hands _______ and _______ meals.",
        optionA: "Before / after",
        optionB: "During / after",
        optionC: "After / before",
        correctAnswer: "Before / after",
      }),
      shuffleOptions({
        question: "We should drink _______ glasses of water every day.",
        optionA: "7 to 8",
        optionB: "2 to 3",
        optionC: "10 to 12",
        correctAnswer: "7 to 8",
      }),
      shuffleOptions({
        question: "We should wear _______ clothes.",
        optionA: "Neat and clean",
        optionB: "Dirty",
        optionC: "Torn",
        correctAnswer: "Neat and clean",
      }),
      shuffleOptions({
        question: "We should brush our teeth _______ a day.",
        optionA: "Twice",
        optionB: "Once",
        optionC: "Thrice",
        correctAnswer: "Twice",
      }),
      shuffleOptions({
        question: "We should use a _______ while sneezing.",
        optionA: "Handkerchief",
        optionB: "Paper",
        optionC: "Towel",
        correctAnswer: "Handkerchief",
      }),
      shuffleOptions({
        question: "We should eat _______ food.",
        optionA: "Healthy",
        optionB: "Junk",
        optionC: "Spicy",
        correctAnswer: "Healthy",
      }),
      shuffleOptions({
        question: "We should _______ our nails regularly.",
        optionA: "Cut",
        optionB: "Bite",
        optionC: "Colour",
        correctAnswer: "Cut",
      }),
      shuffleOptions({
        question: "A _______ body works better than a weak one.",
        optionA: "Healthy",
        optionB: "Lazy",
        optionC: "Sleepy",
        correctAnswer: "Healthy",
      }),
      shuffleOptions({
        question: "We should _______ daily to stay fit.",
        optionA: "Exercise",
        optionB: "Rest",
        optionC: "Jump",
        correctAnswer: "Exercise",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should eat junk food every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should take a bath daily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should comb our hair regularly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should drink 7 to 8 glasses of water daily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Healthy food keeps us strong and fit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should use a handkerchief while sneezing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A weak body works better than a healthy one.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should wash our hands before and after meals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should cut our nails regularly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should wear dirty clothes every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
