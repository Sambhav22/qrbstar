export const chapter = "Chapter - 2: The Imaginary Lines : Latitudes and Longitudes";
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
        question: "Which imaginary line divides the Earth into the Northern and Southern Hemispheres?",
        optionA: "Tropic of Cancer",
        optionB: "Equator",
        optionC: "Arctic Circle",
        correctAnswer: "Equator",
      }),
      shuffleOptions({
        question: "Which lines run from the North Pole to the South Pole?",
        optionA: "Latitudes",
        optionB: "Longitudes",
        optionC: "Tropics",
        correctAnswer: "Longitudes",
      }),
      shuffleOptions({
        question: "Which latitude lies at 23½°S?",
        optionA: "Tropic of Cancer",
        optionB: "Tropic of Capricorn",
        optionC: "Antarctic Circle",
        correctAnswer: "Tropic of Capricorn",
      }),
      shuffleOptions({
        question: "Which lines are always equal in length?",
        optionA: "Latitudes",
        optionB: "Heat zones",
        optionC: "Longitudes",
        correctAnswer: "Longitudes",
      }),
      shuffleOptions({
        question: "Which region receives the most direct sunlight?",
        optionA: "Frigid Zone",
        optionB: "Torrid Zone",
        optionC: "Temperate Zone",
        correctAnswer: "Torrid Zone",
      }),
      shuffleOptions({
        question: "Which longitude is used to define Universal Time?",
        optionA: "23½°E",
        optionB: "Prime Meridian (0°)",
        optionC: "International Date Line",
        correctAnswer: "Prime Meridian (0°)",
      }),
      shuffleOptions({
        question: "Which circle is located at 66½°N?",
        optionA: "Antarctic Circle",
        optionB: "Arctic Circle",
        optionC: "Equator",
        correctAnswer: "Arctic Circle",
      }),
      shuffleOptions({
        question: "What helps us find the exact position of a place on Earth?",
        optionA: "Heat zones",
        optionB: "Geographic grid",
        optionC: "Oceans",
        correctAnswer: "Geographic grid",
      }),
      shuffleOptions({
        question: "Which hemisphere lies below the Equator?",
        optionA: "Eastern Hemisphere",
        optionB: "Western Hemisphere",
        optionC: "Southern Hemisphere",
        correctAnswer: "Southern Hemisphere",
      }),
      shuffleOptions({
        question: "How long does Earth take to rotate one degree of longitude?",
        optionA: "6 minutes",
        optionB: "4 minutes",
        optionC: "10 minutes",
        correctAnswer: "4 minutes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The earth spins on an imaginary line called the ________.",
        optionA: "axis",
        optionB: "meridian",
        optionC: "circle",
        correctAnswer: "axis",
      }),
      shuffleOptions({
        question: "Lines of latitude are drawn ________ to one another.",
        optionA: "slanting",
        optionB: "parallel",
        optionC: "vertical",
        correctAnswer: "parallel",
      }),
      shuffleOptions({
        question: "The 0° longitude is known as the ________.",
        optionA: "Equator",
        optionB: "Tropic",
        optionC: "Prime Meridian",
        correctAnswer: "Prime Meridian",
      }),
      shuffleOptions({
        question: "The regions near the Equator are the ________ on Earth.",
        optionA: "coldest",
        optionB: "hottest",
        optionC: "moderate",
        correctAnswer: "hottest",
      }),
      shuffleOptions({
        question: "Lines of longitude meet at the ________.",
        optionA: "Equator",
        optionB: "poles",
        optionC: "tropics",
        correctAnswer: "poles",
      }),
      shuffleOptions({
        question: "The ________ Circle lies at 66½°S.",
        optionA: "Antarctic",
        optionB: "Arctic",
        optionC: "Temperate",
        correctAnswer: "Antarctic",
      }),
      shuffleOptions({
        question: "Latitudes help us understand the ________ of a place.",
        optionA: "time",
        optionB: "temperature",
        optionC: "distance",
        correctAnswer: "temperature",
      }),
      shuffleOptions({
        question: "The area between the Tropic of Cancer and Tropic of Capricorn is called the ________ Zone.",
        optionA: "Frigid",
        optionB: "Temperate",
        optionC: "Torrid",
        correctAnswer: "Torrid",
      }),
      shuffleOptions({
        question: "There are a total of ________ meridians on Earth.",
        optionA: "180",
        optionB: "360",
        optionC: "90",
        correctAnswer: "360",
      }),
      shuffleOptions({
        question: "The Equator is located at ________ degrees latitude.",
        optionA: "0°",
        optionB: "23½°N",
        optionC: "90°S",
        correctAnswer: "0°",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "All longitudes are equal in length.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Latitudes meet at the poles.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Tropic of Cancer lies in the Northern Hemisphere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Arctic Circle is located at 66½°S.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Prime Meridian divides the Earth into Eastern and Western Hemispheres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Heat zones are based on the amount of heat received from the Sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Longitudes help in calculating the time of a place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Equator is the longest latitude on the globe.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Frigid Zones are the hottest regions on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The International Date Line is close to 180° longitude.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
