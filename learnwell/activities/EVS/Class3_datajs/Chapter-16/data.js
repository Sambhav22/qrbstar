export const chapter = "Chapter - 16: Communication";
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
        question: "Who introduced the postal service in India?",
        optionA: "Akbar",
        optionB: "Sher Shah Suri",
        optionC: "Ashoka",
        correctAnswer: "Sher Shah Suri",
      }),
      shuffleOptions({
        question: "What does the postman collect from the letter box?",
        optionA: "Newspapers",
        optionB: "Letters",
        optionC: "Parcels",
        correctAnswer: "Letters",
      }),
      shuffleOptions({
        question: "Which of these helps us to talk to people far away?",
        optionA: "Telephone",
        optionB: "Radio",
        optionC: "Newspaper",
        correctAnswer: "Telephone",
      }),
      shuffleOptions({
        question: "Which of the following is a means of mass communication?",
        optionA: "Radio",
        optionB: "Mobile phone",
        optionC: "Letter",
        correctAnswer: "Radio",
      }),
      shuffleOptions({
        question: "What is fixed on an envelope before posting it?",
        optionA: "Stamp",
        optionB: "Thread",
        optionC: "Coin",
        correctAnswer: "Stamp",
      }),
      shuffleOptions({
        question: "What do we call communication done with many people at once?",
        optionA: "Mass communication",
        optionB: "Personal communication",
        optionC: "Visual communication",
        correctAnswer: "Mass communication",
      }),
      shuffleOptions({
        question: "Who delivers letters to our homes?",
        optionA: "Postman",
        optionB: "Watchman",
        optionC: "Policeman",
        correctAnswer: "Postman",
      }),
      shuffleOptions({
        question: "Which of these was used for communication in old times?",
        optionA: "Signs",
        optionB: "Mobile phone",
        optionC: "Internet",
        correctAnswer: "Signs",
      }),
      shuffleOptions({
        question: "Which is the fastest means of personal communication?",
        optionA: "Mobile phone",
        optionB: "Letter",
        optionC: "Newspaper",
        correctAnswer: "Mobile phone",
      }),
      shuffleOptions({
        question: "Letters take about how many days to reach their destination?",
        optionA: "5–6 days",
        optionB: "1 day",
        optionC: "10 days",
        correctAnswer: "5–6 days",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People first used _______ to communicate.",
        optionA: "smoke",
        optionB: "signs",
        optionC: "papers",
        correctAnswer: "signs",
      }),
      shuffleOptions({
        question: "A postman collects letters from a _______.",
        optionA: "letter box",
        optionB: "post office",
        optionC: "shop",
        correctAnswer: "letter box",
      }),
      shuffleOptions({
        question: "Radio is a means of _______ communication.",
        optionA: "personal",
        optionB: "mass",
        optionC: "written",
        correctAnswer: "mass",
      }),
      shuffleOptions({
        question: "We can send messages quickly through _______.",
        optionA: "e-mails",
        optionB: "letters",
        optionC: "magazines",
        correctAnswer: "e-mails",
      }),
      shuffleOptions({
        question: "Communication helps us to know about _______.",
        optionA: "people and the world",
        optionB: "birds",
        optionC: "food",
        correctAnswer: "people and the world",
      }),
      shuffleOptions({
        question: "Earlier people wrote on _______.",
        optionA: "leaves",
        optionB: "walls",
        optionC: "stones",
        correctAnswer: "leaves",
      }),
      shuffleOptions({
        question: "The place to which a letter is sent is called its _______.",
        optionA: "destination",
        optionB: "post office",
        optionC: "route",
        correctAnswer: "destination",
      }),
      shuffleOptions({
        question: "We put a letter in a _______ before posting.",
        optionA: "stamped envelope",
        optionB: "file",
        optionC: "box",
        correctAnswer: "stamped envelope",
      }),
      shuffleOptions({
        question: "Sher Shah Suri started _______ services in India.",
        optionA: "postal",
        optionB: "railway",
        optionC: "school",
        correctAnswer: "postal",
      }),
      shuffleOptions({
        question: "Magazines and newspapers are means of _______.",
        optionA: "mass communication",
        optionB: "travel",
        optionC: "play",
        correctAnswer: "mass communication",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "People can talk from far away using a telephone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Letters reach their destination in a few minutes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We use signs for communication even today.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The postman delivers letters to our homes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sher Shah Suri started the postal service in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Radio is used for mass communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should not write the address on an envelope.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Communication means sharing messages and ideas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mobile phones are a slow way to communicate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Television shows news and entertainment to many people at once.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
