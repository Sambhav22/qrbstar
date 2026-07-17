export const chapter = "Chapter - 8: Safety and First Aid";
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
        question: "What does safety help us to avoid?",
        optionA: "Accidents",
        optionB: "Games",
        optionC: "Food",
        correctAnswer: "Accidents",
      }),
      shuffleOptions({
        question: "When walking on the road, whose hand should children hold?",
        optionA: "Elders",
        optionB: "Friends",
        optionC: "Strangers",
        correctAnswer: "Elders",
      }),
      shuffleOptions({
        question: "What does the green pedestrian signal mean?",
        optionA: "Stop",
        optionB: "Wait",
        optionC: "Walk",
        correctAnswer: "Walk",
      }),
      shuffleOptions({
        question: "What should we never do on the school stairs?",
        optionA: "Push each other",
        optionB: "Stand in a queue",
        optionC: "Sit quietly",
        correctAnswer: "Push each other",
      }),
      shuffleOptions({
        question: "Which of these is kept in a first aid box?",
        optionA: "Toys",
        optionB: "Bandages",
        optionC: "Ball",
        correctAnswer: "Bandages",
      }),
      shuffleOptions({
        question: "What should we never touch at home?",
        optionA: "Books",
        optionB: "Open wires",
        optionC: "Windows",
        correctAnswer: "Open wires",
      }),
      shuffleOptions({
        question: "What should we avoid in a moving bus?",
        optionA: "Standing on the footboard",
        optionB: "Sitting on the seat",
        optionC: "Looking outside",
        correctAnswer: "Standing on the footboard",
      }),
      shuffleOptions({
        question: "What must we follow while playing?",
        optionA: "Rules of the game",
        optionB: "Shouting loudly",
        optionC: "Fighting with others",
        correctAnswer: "Rules of the game",
      }),
      shuffleOptions({
        question: "Which traffic light tells vehicles to stop?",
        optionA: "Red",
        optionB: "Yellow",
        optionC: "Green",
        correctAnswer: "Red",
      }),
      shuffleOptions({
        question: "First aid helps to promote –",
        optionA: "Injury",
        optionB: "Recovery",
        optionC: "Fighting",
        correctAnswer: "Recovery",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should always cross the road at the ______.",
        optionA: "Corner",
        optionB: "Zebra crossing",
        optionC: "Middle",
        correctAnswer: "Zebra crossing",
      }),
      shuffleOptions({
        question: "Do not stand in front of a ______.",
        optionA: "Swing",
        optionB: "Tree",
        optionC: "Wall",
        correctAnswer: "Swing",
      }),
      shuffleOptions({
        question: "Always play in a ______.",
        optionA: "Park",
        optionB: "Road",
        optionC: "Classroom",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "Do not touch switches with ______ hands.",
        optionA: "Dry",
        optionB: "Wet",
        optionC: "Empty",
        correctAnswer: "Wet",
      }),
      shuffleOptions({
        question: "Get off the bus only when it has ______.",
        optionA: "Started",
        optionB: "Stopped",
        optionC: "Turned",
        correctAnswer: "Stopped",
      }),
      shuffleOptions({
        question: "First aid is the ______ help given to an injured person.",
        optionA: "Immediate",
        optionB: "Last",
        optionC: "No",
        correctAnswer: "Immediate",
      }),
      shuffleOptions({
        question: "A first aid box contains ______ to clean wounds.",
        optionA: "Antiseptic lotion",
        optionB: "Chocolates",
        optionC: "Paint",
        correctAnswer: "Antiseptic lotion",
      }),
      shuffleOptions({
        question: "Do not play with ______ objects.",
        optionA: "Sharp",
        optionB: "Soft",
        optionC: "Round",
        correctAnswer: "Sharp",
      }),
      shuffleOptions({
        question: "Never ______ others while waiting in a queue.",
        optionA: "Push",
        optionB: "Help",
        optionC: "Smile",
        correctAnswer: "Push",
      }),
      shuffleOptions({
        question: "First aid also prevents the condition from becoming ______.",
        optionA: "Worse",
        optionB: "Better",
        optionC: "Fun",
        correctAnswer: "Worse",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Safety rules protect us from accidents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Yellow traffic light says ‘Go’.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should never bully or fight at school.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is safe to stand on the bus footboard.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A pair of scissors is found in a first aid box.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should play only in the park or an open space.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "First aid helps to worsen the condition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We must not touch electric plugs with wet hands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Green light means stop.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Accidents can happen anytime if we are not careful.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
