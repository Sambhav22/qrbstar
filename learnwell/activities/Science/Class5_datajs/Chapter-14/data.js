export const chapter = "Chapter - 14: The Moon and the Eclipses";
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
        question: "Which planet’s natural satellite is the moon?",
        optionA: "Mars",
        optionB: "Earth",
        optionC: "Venus",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "What makes the moon shine at night?",
        optionA: "Its own light",
        optionB: "Reflected sunlight",
        optionC: "Electric light",
        correctAnswer: "Reflected sunlight",
      }),
      shuffleOptions({
        question: "Which are the deep holes on the moon’s surface?",
        optionA: "Mountains",
        optionB: "Craters",
        optionC: "Valleys",
        correctAnswer: "Craters",
      }),
      shuffleOptions({
        question: "Which spacecraft was the first to visit the moon in 1959?",
        optionA: "Apollo 11",
        optionB: "Luna 2",
        optionC: "Aryabhata",
        correctAnswer: "Luna 2",
      }),
      shuffleOptions({
        question: "Who was the first man to step on the moon?",
        optionA: "Rakesh Sharma",
        optionB: "Neil Armstrong",
        optionC: "Edwin Aldrin",
        correctAnswer: "Neil Armstrong",
      }),
      shuffleOptions({
        question: "How many days does the moon take to complete one revolution around the earth?",
        optionA: "24",
        optionB: "30",
        optionC: "27.3",
        correctAnswer: "27.3",
      }),
      shuffleOptions({
        question: "How much is the moon’s gravity compared to that of the earth?",
        optionA: "Equal",
        optionB: "One-sixth",
        optionC: "Twice",
        correctAnswer: "One-sixth",
      }),
      shuffleOptions({
        question: "When the moon comes between the earth and the sun, which eclipse occurs?",
        optionA: "Solar eclipse",
        optionB: "Lunar eclipse",
        optionC: "Partial eclipse",
        correctAnswer: "Solar eclipse",
      }),
      shuffleOptions({
        question: "When the earth comes between the sun and the moon, which eclipse takes place?",
        optionA: "Solar eclipse",
        optionB: "Lunar eclipse",
        optionC: "High tide",
        correctAnswer: "Lunar eclipse",
      }),
      shuffleOptions({
        question: "Which was India’s first artificial satellite?",
        optionA: "Rohini",
        optionB: "Aryabhata",
        optionC: "Bhaskar",
        correctAnswer: "Aryabhata",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The moon is the only ____ satellite of the earth.",
        optionA: "Artificial",
        optionB: "Natural",
        optionC: "Man-made",
        correctAnswer: "Natural",
      }),
      shuffleOptions({
        question: "The moon’s surface has ____ and craters.",
        optionA: "Forests",
        optionB: "Hills",
        optionC: "Rivers",
        correctAnswer: "Hills",
      }),
      shuffleOptions({
        question: "Sound cannot ____ on the moon because there is no air.",
        optionA: "Bounce",
        optionB: "Travel",
        optionC: "Vibrate",
        correctAnswer: "Travel",
      }),
      shuffleOptions({
        question: "The moon looks different on different nights because of its changing ____.",
        optionA: "Colours",
        optionB: "Phases",
        optionC: "Size",
        correctAnswer: "Phases",
      }),
      shuffleOptions({
        question: "The full bright disc of the moon is called the ____.",
        optionA: "New moon",
        optionB: "Full moon",
        optionC: "Half moon",
        correctAnswer: "Full moon",
      }),
      shuffleOptions({
        question: "The increasing visible portion of the moon is known as ____ phase.",
        optionA: "Waning",
        optionB: "Waxing",
        optionC: "New",
        correctAnswer: "Waxing",
      }),
      shuffleOptions({
        question: "The rise and fall of sea-water are called ____.",
        optionA: "Tides",
        optionB: "Waves",
        optionC: "Currents",
        correctAnswer: "Tides",
      }),
      shuffleOptions({
        question: "A ____ eclipse occurs when the moon blocks the sun’s light.",
        optionA: "Lunar",
        optionB: "Solar",
        optionC: "Partial",
        correctAnswer: "Solar",
      }),
      shuffleOptions({
        question: "Artificial satellites are launched into space by ____.",
        optionA: "Planes",
        optionB: "Rockets",
        optionC: "Helicopters",
        correctAnswer: "Rockets",
      }),
      shuffleOptions({
        question: "The first artificial satellite launched by India was ____.",
        optionA: "Insat 1B",
        optionB: "Aryabhata",
        optionC: "Bhaskar",
        correctAnswer: "Aryabhata",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The moon has its own light.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon is smaller than the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There is no air or water on the moon.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sound can travel on the moon’s surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The moon completes one revolution around the earth in about 27 days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A lunar eclipse occurs on a Full Moon night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A solar eclipse occurs on a New Moon day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The gravity on the moon is stronger than on the earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sputnik 1 was the first artificial satellite launched in space.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India has launched many artificial satellites after Aryabhata.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
