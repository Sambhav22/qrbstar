export const chapter = "Chapter - 18: Sending A Letter";
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
        question: "Who delivers letters to our homes?",
        optionA: "Policeman",
        optionB: "Postman",
        optionC: "Driver",
        correctAnswer: "Postman",
      }),
      shuffleOptions({
        question: "What is a message written on paper called?",
        optionA: "Poster",
        optionB: "Letter",
        optionC: "Card",
        correctAnswer: "Letter",
      }),
      shuffleOptions({
        question: "Where do we drop a letter for posting?",
        optionA: "Post box",
        optionB: "Cupboard",
        optionC: "Basket",
        correctAnswer: "Post box",
      }),
      shuffleOptions({
        question: "What is the oldest means of communication?",
        optionA: "Mobile phone",
        optionB: "Letter",
        optionC: "Radio",
        correctAnswer: "Letter",
      }),
      shuffleOptions({
        question: "Who reads the letter after receiving it?",
        optionA: "Receiver",
        optionB: "Postman",
        optionC: "Teacher",
        correctAnswer: "Receiver",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A letter is written on a piece of ______.",
        optionA: "Cloth",
        optionB: "Paper",
        optionC: "Plastic",
        correctAnswer: "Paper",
      }),
      shuffleOptions({
        question: "We post our letters in a ______.",
        optionA: "Bag",
        optionB: "Post box",
        optionC: "Drawer",
        correctAnswer: "Post box",
      }),
      shuffleOptions({
        question: "A ______ delivers letters to our homes.",
        optionA: "Policeman",
        optionB: "Postman",
        optionC: "Doctor",
        correctAnswer: "Postman",
      }),
      shuffleOptions({
        question: "In olden days, people used ______ to send messages.",
        optionA: "Letters",
        optionB: "Phones",
        optionC: "Radios",
        correctAnswer: "Letters",
      }),
      shuffleOptions({
        question: "The process of sharing ideas is called ______.",
        optionA: "Communication",
        optionB: "Decoration",
        optionC: "Collection",
        correctAnswer: "Communication",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Letters are the oldest means of communication.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A postman delivers letters to our homes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A letter is written on a metal sheet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We post a letter in a post box.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Communication means sending and receiving information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
