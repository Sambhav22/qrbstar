export const chapter = "Chapter - 9: Life in Temperate Regions";
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
        question: "Which region of the world is known for its vast temperate grasslands called Prairies?",
        optionA: "South America",
        optionB: "North America",
        optionC: "Africa",
        correctAnswer: "North America",
      }),
      shuffleOptions({
        question: "Which river mainly drains the prairies of the United States?",
        optionA: "Amazon",
        optionB: "Mississippi",
        optionC: "Orange",
        correctAnswer: "Mississippi",
      }),
      shuffleOptions({
        question: "Which mountain range lies to the west of the Prairies?",
        optionA: "Himalayas",
        optionB: "Andes",
        optionC: "Rocky Mountains",
        correctAnswer: "Rocky Mountains",
      }),
      shuffleOptions({
        question: "Which warm wind blows down the eastern slopes of the Rockies?",
        optionA: "Mistral",
        optionB: "Chinook",
        optionC: "Loo",
        correctAnswer: "Chinook",
      }),
      shuffleOptions({
        question: "Which soil found in the Prairies is among the most fertile in the world?",
        optionA: "Laterite",
        optionB: "Chernozem",
        optionC: "Alluvial",
        correctAnswer: "Chernozem",
      }),
      shuffleOptions({
        question: "Which animal was once found in large numbers in the Prairies?",
        optionA: "Springbok",
        optionB: "Yak",
        optionC: "American buffalo (Bison)",
        correctAnswer: "American buffalo (Bison)",
      }),
      shuffleOptions({
        question: "Which crop is widely grown in the Prairies using highly mechanised farming?",
        optionA: "Tea",
        optionB: "Wheat",
        optionC: "Rubber",
        correctAnswer: "Wheat",
      }),
      shuffleOptions({
        question: "Which Canadian city is known as the “gateway of the prairies”?",
        optionA: "Ottawa",
        optionB: "Winnipeg",
        optionC: "Regina",
        correctAnswer: "Winnipeg",
      }),
      shuffleOptions({
        question: "Which industry is widely developed in both the USA and Canadian prairie regions?",
        optionA: "Fishing",
        optionB: "Dairy farming",
        optionC: "Silk weaving",
        correctAnswer: "Dairy farming",
      }),
      shuffleOptions({
        question: "Which continent contains the temperate grasslands known as Velds?",
        optionA: "Africa",
        optionB: "Asia",
        optionC: "Australia",
        correctAnswer: "Africa",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The warm current that brings rainfall to the velds is the ______.",
        optionA: "Gulf Stream",
        optionB: "Agulhas Current",
        optionC: "Kuroshio",
        correctAnswer: "Agulhas Current",
      }),
      shuffleOptions({
        question: "The velds lie on a high ______ ranging between 600 and 2000 metres.",
        optionA: "plateau",
        optionB: "valley",
        optionC: "plain",
        correctAnswer: "plateau",
      }),
      shuffleOptions({
        question: "The river ______ drains much of the veld region.",
        optionA: "Mississippi",
        optionB: "Limpopo",
        optionC: "Colorado",
        correctAnswer: "Limpopo",
      }),
      shuffleOptions({
        question: "The natural vegetation of the velds includes short grasses such as ______.",
        optionA: "gramma grass",
        optionB: "cactus",
        optionC: "reeds",
        correctAnswer: "gramma grass",
      }),
      shuffleOptions({
        question: "Johannesburg is known as the ______ of the world.",
        optionA: "silver city",
        optionB: "gold capital",
        optionC: "coal centre",
        correctAnswer: "gold capital",
      }),
      shuffleOptions({
        question: "The velds receive ______ rainfall during summer.",
        optionA: "heavy",
        optionB: "low",
        optionC: "continuous",
        correctAnswer: "low",
      }),
      shuffleOptions({
        question: "The Prairies have a ______ type of climate with extreme temperatures.",
        optionA: "monsoon",
        optionB: "continental",
        optionC: "equatorial",
        correctAnswer: "continental",
      }),
      shuffleOptions({
        question: "The prairies receive about ______ cm of annual rainfall.",
        optionA: "40 cm",
        optionB: "90 cm",
        optionC: "10 cm",
        correctAnswer: "40 cm",
      }),
      shuffleOptions({
        question: "The fertile soil found in the Prairies is dark and rich in ______.",
        optionA: "clay",
        optionB: "humus",
        optionC: "salt",
        correctAnswer: "humus",
      }),
      shuffleOptions({
        question: "The thick blanket of ______ covers the Prairies in winter.",
        optionA: "fog",
        optionB: "snow",
        optionC: "dust",
        correctAnswer: "snow",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The prairies experience extremely cold winters with temperatures reaching –20°C.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The velds receive more rainfall in the west than in the east.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bison are now considered protected animals due to overhunting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wheat is not the main crop grown in the Prairies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Agulhas Current is responsible for bringing warm water near South Africa.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sheep rearing in the velds is mainly for wool production.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Canadian Pacific Railway helped settlers reach the prairies easily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Short grasses dominate the velds because the climate is dry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Prairies have dense forests in most of their parts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kimberley is well known for its diamond mines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
