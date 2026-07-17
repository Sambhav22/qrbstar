export const chapter = "Chapter - 16: Mapping the Neighbourhood";
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
        question: "Who lives at Apartment No. 3 in Jolly Apartments?",
        optionA: "Zoobie",
        optionB: "Doobie",
        optionC: "Pinky",
        correctAnswer: "Doobie",
      }),
      shuffleOptions({
        question: "What helps us in locating new places easily?",
        optionA: "Mapping",
        optionB: "Cooking",
        optionC: "Measuring",
        correctAnswer: "Mapping",
      }),
      shuffleOptions({
        question: "Which well-known building can be used as a landmark on Doobie’s map?",
        optionA: "Mountain",
        optionB: "Mall",
        optionC: "Forest",
        correctAnswer: "Mall",
      }),
      shuffleOptions({
        question: "What is a map?",
        optionA: "A visual representation of an area",
        optionB: "A real place",
        optionC: "A chart of songs",
        correctAnswer: "A visual representation of an area",
      }),
      shuffleOptions({
        question: "How many cardinal directions are shown on a map?",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "What do signs and symbols on a map represent?",
        optionA: "Different features like roads, rivers and bridges",
        optionB: "Musical notes",
        optionC: "Fairy tales",
        correctAnswer: "Different features like roads, rivers and bridges",
      }),
      shuffleOptions({
        question: "Which direction is shown at the top of every map?",
        optionA: "East",
        optionB: "North",
        optionC: "West",
        correctAnswer: "North",
      }),
      shuffleOptions({
        question: "What does a scale on a map show?",
        optionA: "Ratio of map distance to real distance",
        optionB: "Colour of the map",
        optionC: "Height of buildings",
        correctAnswer: "Ratio of map distance to real distance",
      }),
      shuffleOptions({
        question: "Which direction lies between North and East?",
        optionA: "North-West",
        optionB: "North-East",
        optionC: "South-East",
        correctAnswer: "North-East",
      }),
      shuffleOptions({
        question: "Why are landmarks important?",
        optionA: "They help us find and identify places easily",
        optionB: "They make maps colourful",
        optionC: "They show the weather",
        correctAnswer: "They help us find and identify places easily",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ______ shows an area on a flat surface.",
        optionA: "picture",
        optionB: "map",
        optionC: "model",
        correctAnswer: "map",
      }),
      shuffleOptions({
        question: "The top of a map always shows the ______ direction.",
        optionA: "north",
        optionB: "west",
        optionC: "south",
        correctAnswer: "north",
      }),
      shuffleOptions({
        question: "______ and ______ are used to show various features on a map.",
        optionA: "colours and lines",
        optionB: "signs and symbols",
        optionC: "pens and pencils",
        correctAnswer: "signs and symbols",
      }),
      shuffleOptions({
        question: "A ______ helps to measure distance between two places.",
        optionA: "ruler",
        optionB: "scale",
        optionC: "compass",
        correctAnswer: "scale",
      }),
      shuffleOptions({
        question: "The direction opposite to East is ______.",
        optionA: "South",
        optionB: "North",
        optionC: "West",
        correctAnswer: "West",
      }),
      shuffleOptions({
        question: "The person living near our house is called our ______.",
        optionA: "neighbour",
        optionB: "friend",
        optionC: "stranger",
        correctAnswer: "neighbour",
      }),
      shuffleOptions({
        question: "A temple, mosque or church can be used as a ______.",
        optionA: "landmark",
        optionB: "river",
        optionC: "scale",
        correctAnswer: "landmark",
      }),
      shuffleOptions({
        question: "The direction to the left side of the map is ______.",
        optionA: "east",
        optionB: "west",
        optionC: "south",
        correctAnswer: "west",
      }),
      shuffleOptions({
        question: "North-East lies between ______ and East.",
        optionA: "South",
        optionB: "North",
        optionC: "West",
        correctAnswer: "North",
      }),
      shuffleOptions({
        question: "The bottom of a map shows the ______ direction.",
        optionA: "south",
        optionB: "north",
        optionC: "east",
        correctAnswer: "south",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Landmarks help people to locate a place easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A map is a drawing of an area on a flat surface.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Signs and symbols on a map are different in every country.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The top of a map shows South direction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A scale helps to show direction on a map.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "There are four cardinal directions—North, South, East, and West.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A bridge symbol on a map stands for a river.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "North-East and South-West are called intermediate directions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Zoobie used Doobie’s map to find her house for the birthday party.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Maps don’t need batteries or signals to work.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
