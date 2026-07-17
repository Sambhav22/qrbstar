export const chapter = "Chapter - 10: Smog";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What does the word ‘smog’ mean?",
        optionA: "Dusty wind",
        optionB: "Smoky fog",
        optionC: "Cloudy rain",
        correctAnswer: "Smoky fog",
      }),
      shuffleOptions({
        question: "Which group is most affected by smog?",
        optionA: "Farmers",
        optionB: "Children and old people",
        optionC: "Shopkeepers",
        correctAnswer: "Children and old people",
      }),
      shuffleOptions({
        question: "Which of these is a visible gas in smog?",
        optionA: "Sulphur oxides",
        optionB: "Carbon monoxide",
        optionC: "CFCs",
        correctAnswer: "Sulphur oxides",
      }),
      shuffleOptions({
        question: "Which city is called one of the most polluted in the world?",
        optionA: "New Delhi",
        optionB: "Mumbai",
        optionC: "Jaipur",
        correctAnswer: "New Delhi",
      }),
      shuffleOptions({
        question: "In which season does smog become worse?",
        optionA: "Summer",
        optionB: "Winter",
        optionC: "Rainy",
        correctAnswer: "Winter",
      }),
      shuffleOptions({
        question: "Which plant removes carbon monoxide?",
        optionA: "Aloe Vera",
        optionB: "Spider Plant",
        optionC: "Snake Plant",
        correctAnswer: "Spider Plant",
      }),
      shuffleOptions({
        question: "Which article of the Constitution gives us the right to clean air?",
        optionA: "Article 14",
        optionB: "Article 21",
        optionC: "Article 370",
        correctAnswer: "Article 21",
      }),
      shuffleOptions({
        question: "What does WHO stand for?",
        optionA: "World Health Organisation",
        optionB: "Water Health Organisation",
        optionC: "World Humanity Office",
        correctAnswer: "World Health Organisation",
      }),
      shuffleOptions({
        question: "Which year saw a heavy smog in London?",
        optionA: "1952",
        optionB: "1942",
        optionC: "1962",
        correctAnswer: "1952",
      }),
      shuffleOptions({
        question: "Which scheme was started in Delhi to control vehicles?",
        optionA: "Even-odd",
        optionB: "Free ride",
        optionC: "Double road",
        correctAnswer: "Even-odd",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Smog contains both __________ and invisible gases.",
        optionA: "Visible",
        optionB: "Harmful",
        optionC: "Colourful",
        correctAnswer: "Visible",
      }),
      shuffleOptions({
        question: "Invisible gases include carbon monoxide, CFCs and __________ gases.",
        optionA: "Radioactive",
        optionB: "Oxygen",
        optionC: "Nitrogen",
        correctAnswer: "Radioactive",
      }),
      shuffleOptions({
        question: "AQI stands for __________.",
        optionA: "Air Quality Index",
        optionB: "Air Quantity Information",
        optionC: "Air Quick Indicator",
        correctAnswer: "Air Quality Index",
      }),
      shuffleOptions({
        question: "Delhi’s AQI in November can go up to __________ or more.",
        optionA: "100",
        optionB: "1000",
        optionC: "10,000",
        correctAnswer: "1000",
      }),
      shuffleOptions({
        question: "Over __________ children die every year due to pollution-related diseases.",
        optionA: "60,000",
        optionB: "6,00,000",
        optionC: "6,000",
        correctAnswer: "6,00,000",
      }),
      shuffleOptions({
        question: "People should wear __________ during smog.",
        optionA: "Caps",
        optionB: "Masks",
        optionC: "Gloves",
        correctAnswer: "Masks",
      }),
      shuffleOptions({
        question: "Burning __________ increases dust and smog.",
        optionA: "Crop residue",
        optionB: "Firewood",
        optionC: "Garbage",
        correctAnswer: "Crop residue",
      }),
      shuffleOptions({
        question: "Industries should be shifted __________ cities.",
        optionA: "Inside",
        optionB: "Out of",
        optionC: "Above",
        correctAnswer: "Out of",
      }),
      shuffleOptions({
        question: "Cutting __________ leads to dust rising with the wind.",
        optionA: "Trees",
        optionB: "Crops",
        optionC: "Roads",
        correctAnswer: "Trees",
      }),
      shuffleOptions({
        question: "Article 21 is a __________ right.",
        optionA: "Fundamental",
        optionB: "Social",
        optionC: "Local",
        correctAnswer: "Fundamental",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Smog is formed by smoke + fog.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Delhi’s AQI has always remained below 100.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Schools are closed for children during heavy smog.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Old vehicles should be encouraged to run more.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Dust rises when construction material is kept on the road.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Global warming has no link with pollution.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Masks help protect people during smog.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "WHO has declared a safe AQI level.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Smog improves human health.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Aloe Vera removes carcinogens from the air.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
