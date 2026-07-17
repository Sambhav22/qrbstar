export const chapter = "Chapter - 1: About Computer";
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
        question: "What kind of machine is a computer?",
        optionA: "Toy",
        optionB: "Magical",
        optionC: "Natural",
        correctAnswer: "Magical",
      }),
      shuffleOptions({
        question: "What does a computer run on?",
        optionA: "Fuel",
        optionB: "Electricity",
        optionC: "Water",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "What does a computer help us to do?",
        optionA: "Wash clothes",
        optionB: "Do homework",
        optionC: "Cook food",
        correctAnswer: "Do homework",
      }),
      shuffleOptions({
        question: "How does a computer work?",
        optionA: "Quickly",
        optionB: "Slowly",
        optionC: "Noisily",
        correctAnswer: "Quickly",
      }),
      shuffleOptions({
        question: "What does a computer save?",
        optionA: "Toys",
        optionB: "Time and energy",
        optionC: "Food",
        correctAnswer: "Time and energy",
      }),
      shuffleOptions({
        question: "Who is known as the Father of Computer?",
        optionA: "Edison",
        optionB: "Charles Babbage",
        optionC: "Newton",
        correctAnswer: "Charles Babbage",
      }),
      shuffleOptions({
        question: "What can we listen to on a computer?",
        optionA: "News",
        optionB: "Stories",
        optionC: "Music",
        correctAnswer: "Music",
      }),
      shuffleOptions({
        question: "What can we watch on a computer?",
        optionA: "Trees",
        optionB: "Movies",
        optionC: "Cars",
        correctAnswer: "Movies",
      }),
      shuffleOptions({
        question: "What can we play on a computer?",
        optionA: "Games",
        optionB: "Cards",
        optionC: "Sports",
        correctAnswer: "Games",
      }),
      shuffleOptions({
        question: "What type of friend is a computer called in the chapter?",
        optionA: "Angry",
        optionB: "Sleepy",
        optionC: "Magical",
        correctAnswer: "Magical",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer is a ______ machine.",
        optionA: "Big",
        optionB: "Magical",
        optionC: "Heavy",
        correctAnswer: "Magical",
      }),
      shuffleOptions({
        question: "A computer makes our work ______.",
        optionA: "Hard",
        optionB: "Easy",
        optionC: "Long",
        correctAnswer: "Easy",
      }),
      shuffleOptions({
        question: "A computer runs on ______.",
        optionA: "Petrol",
        optionB: "Air",
        optionC: "Electricity",
        correctAnswer: "Electricity",
      }),
      shuffleOptions({
        question: "A computer saves our ______ and energy.",
        optionA: "Money",
        optionB: "Toys",
        optionC: "Time",
        correctAnswer: "Time",
      }),
      shuffleOptions({
        question: "We can play ______ on a computer.",
        optionA: "Cards",
        optionB: "Sports",
        optionC: "Games",
        correctAnswer: "Games",
      }),
      shuffleOptions({
        question: "We can watch ______ on a computer.",
        optionA: "Posters",
        optionB: "Movies",
        optionC: "Books",
        correctAnswer: "Movies",
      }),
      shuffleOptions({
        question: "We can listen to ______ on a computer.",
        optionA: "Stories",
        optionB: "Music",
        optionC: "News",
        correctAnswer: "Music",
      }),
      shuffleOptions({
        question: "Charles Babbage is known as the Father of ______.",
        optionA: "Television",
        optionB: "Computer",
        optionC: "Radio",
        correctAnswer: "Computer",
      }),
      shuffleOptions({
        question: "A computer helps in sending and receiving ______.",
        optionA: "Letters",
        optionB: "Messages",
        optionC: "Gifts",
        correctAnswer: "Messages",
      }),
      shuffleOptions({
        question: "A computer works very ______.",
        optionA: "Slowly",
        optionB: "Quickly",
        optionC: "Lazily",
        correctAnswer: "Quickly",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer is a toy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A computer runs on electricity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can watch movies on a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer helps us in many ways.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer works very slowly.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A computer is a magical machine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Charles Babbage is the Father of Computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer saves our time and energy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can play games on a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A computer can fly and run for us.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
