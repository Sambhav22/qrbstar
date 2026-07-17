export const chapter = "Chapter - 3: Map : Our Guides";
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
        question: "Which type of map shows details such as rainfall, forests and wind direction?",
        optionA: "Political map",
        optionB: "Physical map",
        optionC: "Thematic map",
        correctAnswer: "Thematic map",
      }),
      shuffleOptions({
        question: "Which map would you use to identify the states and capitals of India?",
        optionA: "Weather map",
        optionB: "Rainfall map",
        optionC: "Political map",
        correctAnswer: "Political map",
      }),
      shuffleOptions({
        question: "Which direction is always shown at the top of a map?",
        optionA: "East",
        optionB: "North",
        optionC: "West",
        correctAnswer: "North",
      }),
      shuffleOptions({
        question: "Which sub-direction lies between the north and east?",
        optionA: "South-East",
        optionB: "North-East",
        optionC: "South-West",
        correctAnswer: "North-East",
      }),
      shuffleOptions({
        question: "Who is the person responsible for drawing maps?",
        optionA: "Photographer",
        optionB: "Geographer",
        optionC: "Cartographer",
        correctAnswer: "Cartographer",
      }),
      shuffleOptions({
        question: "Which colour is used to show oceans and seas on a map?",
        optionA: "Green",
        optionB: "Blue",
        optionC: "Yellow",
        correctAnswer: "Blue",
      }),
      shuffleOptions({
        question: "What does a legend or index on a map help you understand?",
        optionA: "Map symbols and details",
        optionB: "Population",
        optionC: "Country names only",
        correctAnswer: "Map symbols and details",
      }),
      shuffleOptions({
        question: "Which feature on a map helps us measure actual distances between places?",
        optionA: "Boundary",
        optionB: "Scale",
        optionC: "Symbol",
        correctAnswer: "Scale",
      }),
      shuffleOptions({
        question: "Which maps show mountains, plateaus, plains and rivers?",
        optionA: "Physical maps",
        optionB: "Political maps",
        optionC: "Thematic maps",
        correctAnswer: "Physical maps",
      }),
      shuffleOptions({
        question: "A book that contains a collection of maps is called:",
        optionA: "Journal",
        optionB: "Atlas",
        optionC: "Register",
        correctAnswer: "Atlas",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A map is drawn according to a ______.",
        optionA: "legend",
        optionB: "scale",
        optionC: "compass",
        correctAnswer: "scale",
      }),
      shuffleOptions({
        question: "Plains and forests are shown in ______ colour on a map.",
        optionA: "green",
        optionB: "blue",
        optionC: "red",
        correctAnswer: "green",
      }),
      shuffleOptions({
        question: "Deep water bodies are shown in ______ colour.",
        optionA: "light blue",
        optionB: "dark blue",
        optionC: "brown",
        correctAnswer: "dark blue",
      }),
      shuffleOptions({
        question: "The direction opposite to east is ______.",
        optionA: "west",
        optionB: "south",
        optionC: "north",
        correctAnswer: "west",
      }),
      shuffleOptions({
        question: "Hills and mountains are shown in ______ colour.",
        optionA: "dark brown",
        optionB: "green",
        optionC: "blue",
        correctAnswer: "dark brown",
      }),
      shuffleOptions({
        question: "A map uses ______ and symbols to show different features.",
        optionA: "pictures",
        optionB: "signs",
        optionC: "boundaries",
        correctAnswer: "signs",
      }),
      shuffleOptions({
        question: "The art of map-making is called ______.",
        optionA: "geology",
        optionB: "cartography",
        optionC: "astronomy",
        correctAnswer: "cartography",
      }),
      shuffleOptions({
        question: "The direction between the south and the east is ______.",
        optionA: "NE",
        optionB: "SE",
        optionC: "SW",
        correctAnswer: "SE",
      }),
      shuffleOptions({
        question: "A map can be folded or ______ easily.",
        optionA: "rolled",
        optionB: "erased",
        optionC: "inflated",
        correctAnswer: "rolled",
      }),
      shuffleOptions({
        question: "Different types of maps are made to avoid ______.",
        optionA: "confusion",
        optionB: "decoration",
        optionC: "distance",
        correctAnswer: "confusion",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Maps can be made on paper, cloth or even walls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Physical maps show cities and villages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "North is always at the top of a map.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Green colour is used to show water bodies on a map.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A map shows actual distances without any reduction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Thematic maps can show rainfall and crop patterns.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The west direction is always found on the right side of a map.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Yellow colour represents land higher than plains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sub-directions include NW, NE, SW and SE.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Small symbols on a map represent roads, rivers and other features.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
