export const chapter = "Chapter - 13: The Earth and its Motions";
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
        question: "Who proved that the Earth is round by sailing around it?",
        optionA: "Christopher Columbus",
        optionB: "Ferdinand Magellan",
        optionC: "Galileo Galilei",
        correctAnswer: "Ferdinand Magellan",
      }),
      shuffleOptions({
        question: "What is the shape of the Earth?",
        optionA: "Flat like a plate",
        optionB: "Slightly bulgy in the middle and flat at both ends",
        optionC: "Square like a box",
        correctAnswer: "Slightly bulgy in the middle and flat at both ends",
      }),
      shuffleOptions({
        question: "What is the family of the Sun and eight planets called?",
        optionA: "Galaxy",
        optionB: "Solar System",
        optionC: "Star Cluster",
        correctAnswer: "Solar System",
      }),
      shuffleOptions({
        question: "What is the fixed path on which planets move around the Sun called?",
        optionA: "Axis",
        optionB: "Orbit",
        optionC: "Circle",
        correctAnswer: "Orbit",
      }),
      shuffleOptions({
        question: "On which imaginary line does the Earth spin?",
        optionA: "Orbit",
        optionB: "Axis",
        optionC: "Pole",
        correctAnswer: "Axis",
      }),
      shuffleOptions({
        question: "What is the spinning movement of the Earth known as?",
        optionA: "Rotation",
        optionB: "Revolution",
        optionC: "Spinning",
        correctAnswer: "Rotation",
      }),
      shuffleOptions({
        question: "The movement of the Earth around the Sun is called—",
        optionA: "Rotation",
        optionB: "Revolution",
        optionC: "Circulation",
        correctAnswer: "Revolution",
      }),
      shuffleOptions({
        question: "How long does the Earth take to complete one rotation?",
        optionA: "12 hours",
        optionB: "24 hours",
        optionC: "30 hours",
        correctAnswer: "24 hours",
      }),
      shuffleOptions({
        question: "Which movement of the Earth causes change in seasons?",
        optionA: "Rotation",
        optionB: "Revolution",
        optionC: "Spinning",
        correctAnswer: "Revolution",
      }),
      shuffleOptions({
        question: "During which season are the days long and nights short?",
        optionA: "Winter",
        optionB: "Summer",
        optionC: "Autumn",
        correctAnswer: "Summer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Earth is slightly ______ in the middle.",
        optionA: "flat",
        optionB: "bulgy",
        optionC: "hollow",
        correctAnswer: "bulgy",
      }),
      shuffleOptions({
        question: "The Sun is the ______ of the Solar System.",
        optionA: "head",
        optionB: "member",
        optionC: "planet",
        correctAnswer: "head",
      }),
      shuffleOptions({
        question: "The Earth moves around the Sun in a fixed ______.",
        optionA: "circle",
        optionB: "orbit",
        optionC: "line",
        correctAnswer: "orbit",
      }),
      shuffleOptions({
        question: "The Earth’s ______ causes day and night.",
        optionA: "revolution",
        optionB: "rotation",
        optionC: "season",
        correctAnswer: "rotation",
      }),
      shuffleOptions({
        question: "The Earth’s axis is slightly ______ to one side.",
        optionA: "tilted",
        optionB: "straight",
        optionC: "curved",
        correctAnswer: "tilted",
      }),
      shuffleOptions({
        question: "There are mainly ______ seasons on the Earth.",
        optionA: "three",
        optionB: "five",
        optionC: "six",
        correctAnswer: "five",
      }),
      shuffleOptions({
        question: "The Earth completes one revolution in ______ days.",
        optionA: "300",
        optionB: "365¼",
        optionC: "400",
        correctAnswer: "365¼",
      }),
      shuffleOptions({
        question: "Trees shed their leaves during the ______ season.",
        optionA: "autumn",
        optionB: "spring",
        optionC: "winter",
        correctAnswer: "autumn",
      }),
      shuffleOptions({
        question: "The rainy season is also called ______.",
        optionA: "spring",
        optionB: "monsoon",
        optionC: "autumn",
        correctAnswer: "monsoon",
      }),
      shuffleOptions({
        question: "In winter, days are ______ and nights are ______.",
        optionA: "long, short",
        optionB: "short, long",
        optionC: "equal, equal",
        correctAnswer: "short, long",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Earth is perfectly round.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Earth rotates from west to east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sun and eight planets form the Solar System.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The rotation of the Earth causes day and night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The revolution of the Earth causes change in seasons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Summer is the coldest time of the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Autumn season is dry and windy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Earth spins on its orbit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "In monsoon season, it rains almost every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Earth takes 24 hours to complete one revolution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
