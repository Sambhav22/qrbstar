export const chapter = "Chapter - 6: Clothes We Wear";
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
        question: "Which type of clothes keep our body cool in the hot summer season?",
        optionA: "Woollen clothes",
        optionB: "Cotton clothes",
        optionC: "Rainy clothes",
        correctAnswer: "Cotton clothes",
      }),
      shuffleOptions({
        question: "What do we use to protect ourselves from getting wet when it rains?",
        optionA: "Umbrella",
        optionB: "Raincoat",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
      shuffleOptions({
        question: "Which clothes do we wear when the weather becomes very cold?",
        optionA: "Cotton clothes",
        optionB: "Woollen clothes",
        optionC: "Silk clothes",
        correctAnswer: "Woollen clothes",
      }),
      shuffleOptions({
        question: "Which one of these is worn by people doing special jobs like policemen and postmen?",
        optionA: "Uniforms",
        optionB: "Raincoats",
        optionC: "Casual clothes",
        correctAnswer: "Uniforms",
      }),
      shuffleOptions({
        question: "Which item is mostly used during heavy rain to cover the head?",
        optionA: "Cap",
        optionB: "Gumboots",
        optionC: "Umbrella",
        correctAnswer: "Umbrella",
      }),
      shuffleOptions({
        question: "What kind of clothes do we wear on birthdays and festivals?",
        optionA: "School uniforms",
        optionB: "Special colourful clothes",
        optionC: "Woollen caps",
        correctAnswer: "Special colourful clothes",
      }),
      shuffleOptions({
        question: "Which clothes are usually light in colour and comfortable to wear in heat?",
        optionA: "Cotton clothes",
        optionB: "Woollen clothes",
        optionC: "Rainy clothes",
        correctAnswer: "Cotton clothes",
      }),
      shuffleOptions({
        question: "What do gumboots protect us from during rainy weather?",
        optionA: "Cold",
        optionB: "Sunlight",
        optionC: "Mud and water",
        correctAnswer: "Mud and water",
      }),
      shuffleOptions({
        question: "Who among the following wears a uniform while working?",
        optionA: "Postman",
        optionB: "Painter",
        optionC: "Farmer",
        correctAnswer: "Postman",
      }),
      shuffleOptions({
        question: "What do students usually wear when they go to school?",
        optionA: "Party dress",
        optionB: "Uniform",
        optionC: "Festival clothes",
        correctAnswer: "Uniform",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We wear ______ when the weather is very cold.",
        optionA: "cotton clothes",
        optionB: "woollen clothes",
        optionC: "silk clothes",
        correctAnswer: "woollen clothes",
      }),
      shuffleOptions({
        question: "A raincoat helps us stay ______ in the rainy season.",
        optionA: "dry",
        optionB: "warm",
        optionC: "dirty",
        correctAnswer: "dry",
      }),
      shuffleOptions({
        question: "Cotton clothes are worn in ______ weather.",
        optionA: "rainy",
        optionB: "sunny",
        optionC: "cold",
        correctAnswer: "sunny",
      }),
      shuffleOptions({
        question: "Students wear their school ______ every morning.",
        optionA: "raincoat",
        optionB: "uniform",
        optionC: "jacket",
        correctAnswer: "uniform",
      }),
      shuffleOptions({
        question: "We use an ______ to protect ourselves from rain.",
        optionA: "umbrella",
        optionB: "cap",
        optionC: "muffler",
        correctAnswer: "umbrella",
      }),
      shuffleOptions({
        question: "People wear ______ clothes during birthdays and weddings.",
        optionA: "colourful",
        optionB: "woollen",
        optionC: "dull",
        correctAnswer: "colourful",
      }),
      shuffleOptions({
        question: "Different states have different traditional ______.",
        optionA: "attire",
        optionB: "animals",
        optionC: "seasons",
        correctAnswer: "attire",
      }),
      shuffleOptions({
        question: "Gumboots keep our feet safe from ______.",
        optionA: "sunlight",
        optionB: "dust",
        optionC: "water",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "Cotton clothes are usually of a ______ shade.",
        optionA: "light",
        optionB: "dark",
        optionC: "no",
        correctAnswer: "light",
      }),
      shuffleOptions({
        question: "A policeman wears a special ______ while on duty.",
        optionA: "uniform",
        optionB: "raincoat",
        optionC: "sweater",
        correctAnswer: "uniform",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Woollen clothes help us stay warm in the winter season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Students wear party clothes to school every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We use umbrellas mainly during rainy weather.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton clothes are suitable for hot summer days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A postman wears a uniform while doing his job.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Raincoats make our clothes wet in rain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should always wear neat and clean clothes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gumboots are worn to protect our feet from rainwater.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Woollen clothes are used in the rainy season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Special clothes are worn on festivals and birthdays.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
