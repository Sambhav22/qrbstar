export const chapter = "Chapter - 7: Weather, Climate and Adaptations";
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
        question: "What is the spinning movement of the earth on its axis called?",
        optionA: "Rotation",
        optionB: "Revolution",
        optionC: "Orbit",
        correctAnswer: "Rotation",
      }),
      shuffleOptions({
        question: "How much time does the earth take to complete one revolution around the sun?",
        optionA: "30 days",
        optionB: "365¼ days",
        optionC: "24 hours",
        correctAnswer: "365¼ days",
      }),
      shuffleOptions({
        question: "Who prepares the daily weather reports using data and pictures from satellites?",
        optionA: "Astronauts",
        optionB: "Meteorologists",
        optionC: "Scientists of the ocean",
        correctAnswer: "Meteorologists",
      }),
      shuffleOptions({
        question: "Which device is used to measure rainfall?",
        optionA: "Thermometer",
        optionB: "Barometer",
        optionC: "Rain gauge",
        correctAnswer: "Rain gauge",
      }),
      shuffleOptions({
        question: "What is the average weather condition of a place over a long period called?",
        optionA: "Weather",
        optionB: "Climate",
        optionC: "Atmosphere",
        correctAnswer: "Climate",
      }),
      shuffleOptions({
        question: "Which regions of the Earth experience six months of day and six months of night?",
        optionA: "Tropical regions",
        optionB: "Polar regions",
        optionC: "Desert regions",
        correctAnswer: "Polar regions",
      }),
      shuffleOptions({
        question: "Which animal has a thick layer of fat under its skin called blubber?",
        optionA: "Elephant",
        optionB: "Polar bear",
        optionC: "Lion-tailed macaque",
        correctAnswer: "Polar bear",
      }),
      shuffleOptions({
        question: "What feature helps a monkey to hang from tree branches?",
        optionA: "Trunk",
        optionB: "Prehensile tail",
        optionC: "Long ears",
        correctAnswer: "Prehensile tail",
      }),
      shuffleOptions({
        question: "What adaptation helps a red-eyed frog to live on trees?",
        optionA: "Sticky pads on feet",
        optionB: "Blubber",
        optionC: "Long trunk",
        correctAnswer: "Sticky pads on feet",
      }),
      shuffleOptions({
        question: "Which bird has a long, large beak to eat fruits and nuts?",
        optionA: "Toucan",
        optionB: "Penguin",
        optionC: "Macaw",
        correctAnswer: "Toucan",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The spinning of the earth on its axis is called ______.",
        optionA: "Rotation",
        optionB: "Revolution",
        optionC: "Motion",
        correctAnswer: "Rotation",
      }),
      shuffleOptions({
        question: "The earth takes ______ days to complete one revolution around the sun.",
        optionA: "360",
        optionB: "365¼",
        optionC: "366",
        correctAnswer: "365¼",
      }),
      shuffleOptions({
        question: "______ is the condition of the atmosphere at a particular place and time.",
        optionA: "Weather",
        optionB: "Climate",
        optionC: "Season",
        correctAnswer: "Weather",
      }),
      shuffleOptions({
        question: "The stable pattern of weather over a long period of time is called ______.",
        optionA: "Weather",
        optionB: "Climate",
        optionC: "Environment",
        correctAnswer: "Climate",
      }),
      shuffleOptions({
        question: "The amount of water vapour present in the air is called ______.",
        optionA: "Pressure",
        optionB: "Humidity",
        optionC: "Temperature",
        correctAnswer: "Humidity",
      }),
      shuffleOptions({
        question: "______ have adapted to live in polar regions with thick fur and blubber.",
        optionA: "Elephants",
        optionB: "Penguins",
        optionC: "Polar bears",
        correctAnswer: "Polar bears",
      }),
      shuffleOptions({
        question: "The regions near the poles are the ______ regions.",
        optionA: "Desert",
        optionB: "Polar",
        optionC: "Tropical",
        correctAnswer: "Polar",
      }),
      shuffleOptions({
        question: "The ______ frog has sticky pads on its feet to climb trees.",
        optionA: "Tree",
        optionB: "Red-eyed",
        optionC: "Green",
        correctAnswer: "Red-eyed",
      }),
      shuffleOptions({
        question: "The ______ bird has a long, large beak that helps it to crack nuts.",
        optionA: "Toucan",
        optionB: "Macaw",
        optionC: "Owl",
        correctAnswer: "Toucan",
      }),
      shuffleOptions({
        question: "The movement of animals from one region to another to escape extreme weather is called ______.",
        optionA: "Migration",
        optionB: "Camouflage",
        optionC: "Adaptation",
        correctAnswer: "Migration",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Earth takes 24 hours to complete one revolution around the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Meteorologists study the weather and climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rain gauge is used to measure temperature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Climate refers to the daily condition of the atmosphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Polar regions have very hot weather throughout the year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Penguins can fly like other birds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The polar bear’s white fur helps it to camouflage in the snow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The red-eyed frog lives in cold polar regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tropical rainforests have hot and humid climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Migration helps birds to escape extreme weather conditions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
