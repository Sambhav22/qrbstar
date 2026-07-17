export const chapter = "Chapter - 9: Keeping Safe";
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
        question: "Which of these is safe to do?",
        optionA: "Playing on road",
        optionB: "Walking on footpath",
        optionC: "Running in corridors",
        correctAnswer: "Walking on footpath",
      }),
      shuffleOptions({
        question: "What should we use to sharpen a pencil?",
        optionA: "Blade",
        optionB: "Sharpener",
        optionC: "Knife",
        correctAnswer: "Sharpener",
      }),
      shuffleOptions({
        question: "Which of these should not be done at school?",
        optionA: "Sitting properly",
        optionB: "Throwing things",
        optionC: "Listening to teacher",
        correctAnswer: "Throwing things",
      }),
      shuffleOptions({
        question: "What says “Stop”?",
        optionA: "Yellow light",
        optionB: "Green light",
        optionC: "Red light",
        correctAnswer: "Red light",
      }),
      shuffleOptions({
        question: "Playing with matchsticks is –",
        optionA: "Safe",
        optionB: "Dangerous",
        optionC: "Fun",
        correctAnswer: "Dangerous",
      }),
      shuffleOptions({
        question: "What should we not do while getting into a bus?",
        optionA: "Push",
        optionB: "Wait",
        optionC: "Stand in line",
        correctAnswer: "Push",
      }),
      shuffleOptions({
        question: "Which light says “Wait”?",
        optionA: "Yellow",
        optionB: "Red",
        optionC: "Green",
        correctAnswer: "Yellow",
      }),
      shuffleOptions({
        question: "Where should we not play?",
        optionA: "Playground",
        optionB: "Road",
        optionC: "Garden",
        correctAnswer: "Road",
      }),
      shuffleOptions({
        question: "Which of these helps to cross safely?",
        optionA: "Traffic police",
        optionB: "Swing",
        optionC: "Toys",
        correctAnswer: "Traffic police",
      }),
      shuffleOptions({
        question: "What happens if we are careless?",
        optionA: "We can get hurt",
        optionB: "We stay safe",
        optionC: "We win prizes",
        correctAnswer: "We can get hurt",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Do not play with ______.",
        optionA: "knives",
        optionB: "books",
        optionC: "pencils",
        correctAnswer: "knives",
      }),
      shuffleOptions({
        question: "Always walk on the ______.",
        optionA: "roof",
        optionB: "footpath",
        optionC: "desk",
        correctAnswer: "footpath",
      }),
      shuffleOptions({
        question: "Cross the road at the ______.",
        optionA: "zebra crossing",
        optionB: "park",
        optionC: "middle of road",
        correctAnswer: "zebra crossing",
      }),
      shuffleOptions({
        question: "We must not run in the ______.",
        optionA: "corridors",
        optionB: "playground",
        optionC: "garden",
        correctAnswer: "corridors",
      }),
      shuffleOptions({
        question: "The green light says ______.",
        optionA: "stop",
        optionB: "wait",
        optionC: "go",
        correctAnswer: "go",
      }),
      shuffleOptions({
        question: "The yellow light says ______.",
        optionA: "stop",
        optionB: "wait",
        optionC: "go",
        correctAnswer: "wait",
      }),
      shuffleOptions({
        question: "The red light says ______.",
        optionA: "go",
        optionB: "stop",
        optionC: "play",
        correctAnswer: "stop",
      }),
      shuffleOptions({
        question: "Toys scattered on the floor can make someone ______.",
        optionA: "laugh",
        optionB: "fall",
        optionC: "happy",
        correctAnswer: "fall",
      }),
      shuffleOptions({
        question: "Safety means being ______.",
        optionA: "careless",
        optionB: "careful",
        optionC: "playful",
        correctAnswer: "careful",
      }),
      shuffleOptions({
        question: "Do not stand in front of the ______.",
        optionA: "swing",
        optionB: "door",
        optionC: "bus",
        correctAnswer: "swing",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "It is safe to play with fire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Always use a sharpener for pencils.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should run in the corridors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We must look both sides before crossing road.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Green light means Stop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Zebra crossing is used to cross the road safely.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Do not play alone on the roof.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pushing others on the stairs is safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Safety rules help us stay safe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Yellow light means Wait.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
