export const chapter = "Chapter - 5: Physical Features of India";
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
        question: "Which part of India has high snow-covered mountains?",
        optionA: "The Northern Plains",
        optionB: "The Himalayas",
        optionC: "The Thar Desert",
        correctAnswer: "The Himalayas",
      }),
      shuffleOptions({
        question: "Which river rises from the Himalayas?",
        optionA: "Krishna",
        optionB: "Ganga",
        optionC: "Cauvery",
        correctAnswer: "Ganga",
      }),
      shuffleOptions({
        question: "Which region of India is known for its dry and sandy land?",
        optionA: "The Islands",
        optionB: "The Northern Mountains",
        optionC: "The Great Indian Desert",
        correctAnswer: "The Great Indian Desert",
      }),
      shuffleOptions({
        question: "Which state is mostly covered by the Thar Desert?",
        optionA: "Rajasthan",
        optionB: "Punjab",
        optionC: "Bihar",
        correctAnswer: "Rajasthan",
      }),
      shuffleOptions({
        question: "Which water body lies on the western side of India?",
        optionA: "Bay of Bengal",
        optionB: "Arabian Sea",
        optionC: "Indian Ocean",
        correctAnswer: "Arabian Sea",
      }),
      shuffleOptions({
        question: "Which area of India has fertile soil brought by rivers?",
        optionA: "The Northern Plains",
        optionB: "The Coastal Plains",
        optionC: "The Islands",
        correctAnswer: "The Northern Plains",
      }),
      shuffleOptions({
        question: "Which physical feature is triangular in shape?",
        optionA: "The Northern Plains",
        optionB: "The Southern Peninsula",
        optionC: "The Thar Desert",
        correctAnswer: "The Southern Peninsula",
      }),
      shuffleOptions({
        question: "Which coastal plains lie along the Arabian Sea?",
        optionA: "Eastern Coastal Plains",
        optionB: "Western Coastal Plains",
        optionC: "Southern Coastal Plains",
        correctAnswer: "Western Coastal Plains",
      }),
      shuffleOptions({
        question: "Which type of plants grow mainly in the desert?",
        optionA: "Mango and banana",
        optionB: "Cactus and babool",
        optionC: "Pine and deodar",
        correctAnswer: "Cactus and babool",
      }),
      shuffleOptions({
        question: "Which islands are located in the Bay of Bengal?",
        optionA: "Lakshadweep Islands",
        optionB: "Andaman and Nicobar Islands",
        optionC: "Maldives",
        correctAnswer: "Andaman and Nicobar Islands",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Himalayas are the ______ mountain range in the world.",
        optionA: "highest",
        optionB: "smallest",
        optionC: "lowest",
        correctAnswer: "highest",
      }),
      shuffleOptions({
        question: "The snow from the mountains melts and forms many ______.",
        optionA: "lakes",
        optionB: "rivers",
        optionC: "seas",
        correctAnswer: "rivers",
      }),
      shuffleOptions({
        question: "The Northern Plains have very ______ summers.",
        optionA: "cold",
        optionB: "rainy",
        optionC: "hot",
        correctAnswer: "hot",
      }),
      shuffleOptions({
        question: "The Thar Desert receives very little ______.",
        optionA: "rainfall",
        optionB: "fog",
        optionC: "snow",
        correctAnswer: "rainfall",
      }),
      shuffleOptions({
        question: "The Southern Peninsula is ______ in shape.",
        optionA: "round",
        optionB: "triangular",
        optionC: "square",
        correctAnswer: "triangular",
      }),
      shuffleOptions({
        question: "The Eastern Coastal Plains lie along the ______ of Bengal.",
        optionA: "Gulf",
        optionB: "Bay",
        optionC: "Strait",
        correctAnswer: "Bay",
      }),
      shuffleOptions({
        question: "The Western Coastal Plains lie near the ______ Sea.",
        optionA: "Arabian",
        optionB: "Caspian",
        optionC: "Baltic",
        correctAnswer: "Arabian",
      }),
      shuffleOptions({
        question: "Only a few plants like cactus grow in ______ regions.",
        optionA: "mountain",
        optionB: "desert",
        optionC: "coastal",
        correctAnswer: "desert",
      }),
      shuffleOptions({
        question: "The Deccan Plateau lies to the ______ of the Northern Plains.",
        optionA: "south",
        optionB: "north",
        optionC: "east",
        correctAnswer: "south",
      }),
      shuffleOptions({
        question: "A piece of land surrounded by water on all sides is called an ______.",
        optionA: "island",
        optionB: "plateau",
        optionC: "plain",
        correctAnswer: "island",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Himalayas are located in the northern part of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Northern Plains are formed by fertile soil brought by rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Thar Desert receives heavy rainfall every year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Southern Peninsula is surrounded by water on three sides.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Lakshadweep Islands are located in the Bay of Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cactus is commonly found in the desert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Eastern Coastal Plains are beside the Arabian Sea.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Ganga river originates in the Himalayas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Northern Plains are always covered with snow.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Southern Plateau is part of the Southern Peninsula.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
