export const chapter = "Chapter - 17: Travel, A Fun!";
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
        question: "Which vehicle moves on water?",
        optionA: "Bus",
        optionB: "Boat",
        optionC: "Bicycle",
        correctAnswer: "Boat",
      }),
      shuffleOptions({
        question: "Which vehicle flies high in the sky?",
        optionA: "Aeroplane",
        optionB: "Train",
        optionC: "Ship",
        correctAnswer: "Aeroplane",
      }),
      shuffleOptions({
        question: "Which vehicle is pulled by animals?",
        optionA: "Car",
        optionB: "Bullock cart",
        optionC: "Motorcycle",
        correctAnswer: "Bullock cart",
      }),
      shuffleOptions({
        question: "Which vehicle runs on rails?",
        optionA: "Bus",
        optionB: "Train",
        optionC: "Bicycle",
        correctAnswer: "Train",
      }),
      shuffleOptions({
        question: "What do we use to travel long distances?",
        optionA: "Vehicles",
        optionB: "Books",
        optionC: "Food",
        correctAnswer: "Vehicles",
      }),
      shuffleOptions({
        question: "Which vehicle moves on the road?",
        optionA: "Bus",
        optionB: "Boat",
        optionC: "Ship",
        correctAnswer: "Bus",
      }),
      shuffleOptions({
        question: "Which vehicle uses pedals?",
        optionA: "Bicycle",
        optionB: "Train",
        optionC: "Aeroplane",
        correctAnswer: "Bicycle",
      }),
      shuffleOptions({
        question: "What gives us fun when we go from one place to another?",
        optionA: "Travelling",
        optionB: "Sleeping",
        optionC: "Eating",
        correctAnswer: "Travelling",
      }),
      shuffleOptions({
        question: "What should we avoid when going to an unknown place?",
        optionA: "Going alone",
        optionB: "Taking an elder",
        optionC: "Using vehicles",
        correctAnswer: "Going alone",
      }),
      shuffleOptions({
        question: "For which of these do we travel?",
        optionA: "To attend family functions",
        optionB: "To sit at home",
        optionC: "To play games",
        correctAnswer: "To attend family functions",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Travelling gives us ______.",
        optionA: "joy",
        optionB: "fun",
        optionC: "books",
        correctAnswer: "fun",
      }),
      shuffleOptions({
        question: "We learn many things while ______.",
        optionA: "travelling",
        optionB: "eating",
        optionC: "sleeping",
        correctAnswer: "travelling",
      }),
      shuffleOptions({
        question: "Vehicles help us to reach our ______.",
        optionA: "destination",
        optionB: "schoolbag",
        optionC: "teacher",
        correctAnswer: "destination",
      }),
      shuffleOptions({
        question: "A ship travels on ______.",
        optionA: "water",
        optionB: "road",
        optionC: "track",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "A bus moves on ______.",
        optionA: "road",
        optionB: "sea",
        optionC: "air",
        correctAnswer: "road",
      }),
      shuffleOptions({
        question: "A train runs on ______.",
        optionA: "rails",
        optionB: "sky",
        optionC: "water",
        correctAnswer: "rails",
      }),
      shuffleOptions({
        question: "We should not go ______ to an unknown place.",
        optionA: "alone",
        optionB: "with family",
        optionC: "with teacher",
        correctAnswer: "alone",
      }),
      shuffleOptions({
        question: "A bicycle has ______ wheels.",
        optionA: "two",
        optionB: "four",
        optionC: "six",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "A pilgrimage means a ______ journey.",
        optionA: "religious",
        optionB: "school",
        optionC: "funny",
        correctAnswer: "religious",
      }),
      shuffleOptions({
        question: "Vehicles are means of ______.",
        optionA: "transport",
        optionB: "drawing",
        optionC: "writing",
        correctAnswer: "transport",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Travel gives us fun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vehicles are used to go from one place to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Aeroplane moves on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bullock cart is a means of travel.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bus moves on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ship runs on rails.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should go alone to unknown places.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Travelling helps us learn many things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pilgrimage means a religious journey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bicycle flies in the sky.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
