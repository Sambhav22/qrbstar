export const chapter = "Chapter - 16: Recreation";
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
        question: "What do some people enjoy doing on the computer in their leisure time?",
        optionA: "Washing clothes",
        optionB: "Playing games",
        optionC: "Doing homework",
        correctAnswer: "Playing games",
      }),
      shuffleOptions({
        question: "What do many people like to read for fun?",
        optionA: "Storybooks and comics",
        optionB: "School textbooks",
        optionC: "Newspapers only",
        correctAnswer: "Storybooks and comics",
      }),
      shuffleOptions({
        question: "What do people enjoy watching on television?",
        optionA: "Favourite programmes",
        optionB: "Weather only",
        optionC: "Blank screen",
        correctAnswer: "Favourite programmes",
      }),
      shuffleOptions({
        question: "Where do people go to play, exercise and meditate?",
        optionA: "Market",
        optionB: "Park",
        optionC: "Office",
        correctAnswer: "Park",
      }),
      shuffleOptions({
        question: "Where do people sometimes go with family and friends during leisure time?",
        optionA: "Hospital",
        optionB: "Picnic",
        optionC: "Bank",
        correctAnswer: "Picnic",
      }),
      shuffleOptions({
        question: "Where do some people go to see animals and birds?",
        optionA: "Post office",
        optionB: "Zoo",
        optionC: "Airport",
        correctAnswer: "Zoo",
      }),
      shuffleOptions({
        question: "What do some people enjoy doing for fitness in their leisure time?",
        optionA: "Sleeping all day",
        optionB: "Jogging and swimming",
        optionC: "Crying",
        correctAnswer: "Jogging and swimming",
      }),
      shuffleOptions({
        question: "What do people visit to enjoy different stalls and activities?",
        optionA: "Fairs and exhibitions",
        optionB: "Classrooms",
        optionC: "Libraries",
        correctAnswer: "Fairs and exhibitions",
      }),
      shuffleOptions({
        question: "What activity helps the mind stay calm and peaceful?",
        optionA: "Shouting",
        optionB: "Meditation",
        optionC: "Running fast",
        correctAnswer: "Meditation",
      }),
      shuffleOptions({
        question: "What do families often do together in the evening?",
        optionA: "Fight",
        optionB: "Do recreational activities",
        optionC: "Pack luggage",
        correctAnswer: "Do recreational activities",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We feel ______ after doing recreational activities.",
        optionA: "bored",
        optionB: "relaxed",
        optionC: "angry",
        correctAnswer: "relaxed",
      }),
      shuffleOptions({
        question: "People sometimes visit ______ to enjoy different displays.",
        optionA: "exhibitions",
        optionB: "hospitals",
        optionC: "courts",
        correctAnswer: "exhibitions",
      }),
      shuffleOptions({
        question: "People go to the park to get fresh ______.",
        optionA: "water",
        optionB: "air",
        optionC: "toys",
        correctAnswer: "air",
      }),
      shuffleOptions({
        question: "Some people enjoy ______ music.",
        optionA: "listening to",
        optionB: "running from",
        optionC: "touching",
        correctAnswer: "listening to",
      }),
      shuffleOptions({
        question: "People like to spend leisure time reading ______.",
        optionA: "bills",
        optionB: "dictionaries",
        optionC: "comics and storybooks",
        correctAnswer: "comics and storybooks",
      }),
      shuffleOptions({
        question: "People often go out on a ______ with their families.",
        optionA: "picnic",
        optionB: "meeting",
        optionC: "debate",
        correctAnswer: "picnic",
      }),
      shuffleOptions({
        question: "Some people enjoy ______ for fitness.",
        optionA: "jogging",
        optionB: "shouting",
        optionC: "arguing",
        correctAnswer: "jogging",
      }),
      shuffleOptions({
        question: "A zoo is a place where we see many ______.",
        optionA: "shops",
        optionB: "animals",
        optionC: "cars",
        correctAnswer: "animals",
      }),
      shuffleOptions({
        question: "Leisure time means ______ time.",
        optionA: "free",
        optionB: "busy",
        optionC: "confusing",
        correctAnswer: "free",
      }),
      shuffleOptions({
        question: "Watching TV for too long may harm our ______.",
        optionA: "eyes",
        optionB: "hands",
        optionC: "feet",
        correctAnswer: "eyes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Recreational activities make us unhappy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Reading comics is a form of recreation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People enjoy walking and swimming in their leisure time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Families never do recreational activities together.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Visiting fairs can be a recreational activity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should avoid recreational activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Going to a museum can be fun and relaxing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Watching TV for a long time is good for the eyes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Meditation helps us relax our mind.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People enjoy listening to music in their leisure time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
