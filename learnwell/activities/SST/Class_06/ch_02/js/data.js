export const chapter = "Chapter - 2: Globe: The Model of the Earth";
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
        question: "What is the true shape of the earth generally considered to be?",
        optionA: "Cube",
        optionB: "Sphere",
        optionC: "Pyramid",
        correctAnswer: "Sphere",
      }),
      shuffleOptions({
        question: "Which part of the earth is slightly bulging?",
        optionA: "North Pole",
        optionB: "South Pole",
        optionC: "Equator",
        correctAnswer: "Equator",
      }),
      shuffleOptions({
        question: "What is used to show the earth with correct shape and features?",
        optionA: "Sketch",
        optionB: "Globe",
        optionC: "Graph",
        correctAnswer: "Globe",
      }),
      shuffleOptions({
        question: "What do the horizontal lines drawn on a globe represent?",
        optionA: "Meridians",
        optionB: "Parallels of latitude",
        optionC: "Axis lines",
        correctAnswer: "Parallels of latitude",
      }),
      shuffleOptions({
        question: "Which latitude divides the earth into two equal halves?",
        optionA: "Tropic of Cancer",
        optionB: "Arctic Circle",
        optionC: "Equator",
        correctAnswer: "Equator",
      }),
      shuffleOptions({
        question: "Which zone receives the maximum heat from the sun?",
        optionA: "Temperate Zone",
        optionB: "Frigid Zone",
        optionC: "Torrid Zone",
        correctAnswer: "Torrid Zone",
      }),
      shuffleOptions({
        question: "The longitude passing through Greenwich is known as",
        optionA: "Standard Meridian",
        optionB: "Equator",
        optionC: "Prime Meridian",
        correctAnswer: "Prime Meridian",
      }),
      shuffleOptions({
        question: "How many degrees does the earth rotate in 24 hours?",
        optionA: "90°",
        optionB: "360°",
        optionC: "180°",
        correctAnswer: "360°",
      }),
      shuffleOptions({
        question: "What is the angular distance east or west of the Prime Meridian called?",
        optionA: "Latitude",
        optionB: "Longitude",
        optionC: "Hemisphere",
        correctAnswer: "Longitude",
      }),
      shuffleOptions({
        question: "Which line is opposite the Prime Meridian?",
        optionA: "90°W",
        optionB: "International Date Line (180°)",
        optionC: "45°E",
        correctAnswer: "International Date Line (180°)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The earth is slightly flattened at the ______.",
        optionA: "Equator",
        optionB: "Poles",
        optionC: "Tropics",
        correctAnswer: "Poles",
      }),
      shuffleOptions({
        question: "A globe shows directions and distances on a ______ scale.",
        optionA: "giant",
        optionB: "reduced",
        optionC: "double",
        correctAnswer: "reduced",
      }),
      shuffleOptions({
        question: "Latitudes are measured in ______.",
        optionA: "inches",
        optionB: "degrees",
        optionC: "centimetres",
        correctAnswer: "degrees",
      }),
      shuffleOptions({
        question: "The region between the Tropic of Cancer and Tropic of Capricorn is the ______ zone.",
        optionA: "temperate",
        optionB: "frigid",
        optionC: "torrid",
        correctAnswer: "torrid",
      }),
      shuffleOptions({
        question: "The Arctic Circle lies at ______ north.",
        optionA: "90°",
        optionB: "66½°N",
        optionC: "45°",
        correctAnswer: "66½°N",
      }),
      shuffleOptions({
        question: "The Prime Meridian divides the earth into ______ hemispheres.",
        optionA: "three",
        optionB: "two",
        optionC: "four",
        correctAnswer: "two",
      }),
      shuffleOptions({
        question: "Longitudes run from the North Pole to the ______.",
        optionA: "Equator",
        optionB: "Tropic of Cancer",
        optionC: "South Pole",
        correctAnswer: "South Pole",
      }),
      shuffleOptions({
        question: "One degree of longitude equals ______ minutes of time difference.",
        optionA: "10",
        optionB: "4",
        optionC: "6",
        correctAnswer: "4",
      }),
      shuffleOptions({
        question: "India’s Standard Time is based on ______E.",
        optionA: "68°E",
        optionB: "82½°E",
        optionC: "97°E",
        correctAnswer: "82½°E",
      }),
      shuffleOptions({
        question: "The Frigid Zone receives ______ rays of the sun.",
        optionA: "vertical",
        optionB: "slanting",
        optionC: "warm",
        correctAnswer: "slanting",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Longitudes are also called meridians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Equator is the shortest latitude on the globe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Temperate Zones have neither very hot nor very cold climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The sun shines vertically over the Tropic of Capricorn on 21st June.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Prime Meridian helps in calculating local time.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The International Date Line is located at 180° longitude.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Frigid Zones receive very little heat from the sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All lines of latitude meet at the poles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The earth rotates from west to east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Standard Meridian of India passes through 82½°E.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
