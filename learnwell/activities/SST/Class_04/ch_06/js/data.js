export const chapter = "Chapter - 6: The Western Desert";
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
        question: "Which part of the Indian subcontinent contains the Western Desert?",
        optionA: "North-east",
        optionB: "North-west",
        optionC: "South",
        correctAnswer: "North-west",
      }),
      shuffleOptions({
        question: "What carries sand from one place to another in the desert?",
        optionA: "Rivers",
        optionB: "Strong winds",
        optionC: "Snowfall",
        correctAnswer: "Strong winds",
      }),
      shuffleOptions({
        question: "Which city in the desert region is known for golden sandstone buildings?",
        optionA: "Barmer",
        optionB: "Jaisalmer",
        optionC: "Jodhpur",
        correctAnswer: "Jaisalmer",
      }),
      shuffleOptions({
        question: "Which type of storms can push sand dunes several metres away?",
        optionA: "Dust storms",
        optionB: "Sandstorms",
        optionC: "Thunderstorms",
        correctAnswer: "Sandstorms",
      }),
      shuffleOptions({
        question: "Which city is famous for its carpet-weaving industry?",
        optionA: "Bikaner",
        optionB: "Jaisalmer",
        optionC: "Jaipur",
        correctAnswer: "Bikaner",
      }),
      shuffleOptions({
        question: "Which plant commonly grows in the dry, sandy soil of the Western Desert?",
        optionA: "Mango",
        optionB: "Cactus",
        optionC: "Coconut",
        correctAnswer: "Cactus",
      }),
      shuffleOptions({
        question: "Which material is used to decorate traditional houses in Barmer?",
        optionA: "Glass tiles",
        optionB: "Delicate folk motifs",
        optionC: "Marble",
        correctAnswer: "Delicate folk motifs",
      }),
      shuffleOptions({
        question: "Which major canal carries water into the Western Desert?",
        optionA: "Bhakra Canal",
        optionB: "Indira Gandhi Canal",
        optionC: "Yamuna Canal",
        correctAnswer: "Indira Gandhi Canal",
      }),
      shuffleOptions({
        question: "Which city is known for its bright and sunny weather throughout the year?",
        optionA: "Jodhpur",
        optionB: "Shimla",
        optionC: "Barmer",
        correctAnswer: "Jodhpur",
      }),
      shuffleOptions({
        question: "What helps a camel walk easily on hot sand?",
        optionA: "Hooves with sharp nails",
        optionB: "Large padded feet",
        optionC: "Split toes",
        correctAnswer: "Large padded feet",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Western Desert receives very ______ rainfall.",
        optionA: "heavy",
        optionB: "little",
        optionC: "moderate",
        correctAnswer: "little",
      }),
      shuffleOptions({
        question: "Sand dunes keep moving because of strong ______.",
        optionA: "winds",
        optionB: "rains",
        optionC: "tides",
        correctAnswer: "winds",
      }),
      shuffleOptions({
        question: "In summer, days in the Western Desert are very ______.",
        optionA: "cold",
        optionB: "hot",
        optionC: "rainy",
        correctAnswer: "hot",
      }),
      shuffleOptions({
        question: "People in Barmer live in ______ houses.",
        optionA: "wooden",
        optionB: "mud-walled",
        optionC: "cement",
        correctAnswer: "mud-walled",
      }),
      shuffleOptions({
        question: "Jaisalmer’s water is mostly ______.",
        optionA: "sweet",
        optionB: "brackish",
        optionC: "frozen",
        correctAnswer: "brackish",
      }),
      shuffleOptions({
        question: "Barmer is famous for ______ fabrics.",
        optionA: "block-printed",
        optionB: "silk",
        optionC: "woollen",
        correctAnswer: "block-printed",
      }),
      shuffleOptions({
        question: "The Luni River is a ______ river.",
        optionA: "snow-fed",
        optionB: "seasonal",
        optionC: "perennial",
        correctAnswer: "seasonal",
      }),
      shuffleOptions({
        question: "Cactus survives because it needs very ______ water.",
        optionA: "little",
        optionB: "much",
        optionC: "salty",
        correctAnswer: "little",
      }),
      shuffleOptions({
        question: "The desert soil near an oasis becomes ______.",
        optionA: "rocky",
        optionB: "fertile",
        optionC: "dry",
        correctAnswer: "fertile",
      }),
      shuffleOptions({
        question: "The climate of the desert has very hot days and ______ nights.",
        optionA: "cold",
        optionB: "stormy",
        optionC: "humid",
        correctAnswer: "cold",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Sand dunes in the desert remain fixed at one place.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Camels can close their nostrils during sandstorms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Barmer is located to the south of Jaisalmer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cactus grows in the desert because it needs plenty of water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jaisalmer is close to the India–Pakistan border.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Western Desert has a very fertile soil everywhere.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bikaner receives very little rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Camel is able to travel long distances without food or water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jodhpur is also known as the Sun City.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sandstorms are rare in the Western Desert.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
