export const chapter = "Chapter - 4: Clothes We Wear";
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
        question: "Which clothes keep us cool during the summer season?",
        optionA: "Woollen clothes",
        optionB: "Cotton clothes",
        optionC: "Leather clothes",
        correctAnswer: "Cotton clothes",
      }),
      shuffleOptions({
        question: "From which tree do we get the rubber used for making raincoats?",
        optionA: "Neem tree",
        optionB: "Rubber tree",
        optionC: "Mango tree",
        correctAnswer: "Rubber tree",
      }),
      shuffleOptions({
        question: "Which material is used to make shoes and belts?",
        optionA: "Cotton",
        optionB: "Wool",
        optionC: "Leather",
        correctAnswer: "Leather",
      }),
      shuffleOptions({
        question: "What do we wear to protect ourselves from getting wet during rain?",
        optionA: "Shawl",
        optionB: "Raincoat and gumboots",
        optionC: "Sweater",
        correctAnswer: "Raincoat and gumboots",
      }),
      shuffleOptions({
        question: "Which clothes protect us from cold in winter?",
        optionA: "Cotton clothes",
        optionB: "Woollen clothes",
        optionC: "Rubber clothes",
        correctAnswer: "Woollen clothes",
      }),
      shuffleOptions({
        question: "Which dress is specially worn by school children?",
        optionA: "Party dress",
        optionB: "Traditional dress",
        optionC: "School uniform",
        correctAnswer: "School uniform",
      }),
      shuffleOptions({
        question: "What type of clothes do people wear during festivals and weddings?",
        optionA: "Normal dresses",
        optionB: "Special dresses",
        optionC: "Woollen dresses",
        correctAnswer: "Special dresses",
      }),
      shuffleOptions({
        question: "From which animal do we get wool?",
        optionA: "Cow",
        optionB: "Sheep",
        optionC: "Goat",
        correctAnswer: "Sheep",
      }),
      shuffleOptions({
        question: "Which uniform is worn by a policeman?",
        optionA: "White coat",
        optionB: "Khaki uniform",
        optionC: "Black suit",
        correctAnswer: "Khaki uniform",
      }),
      shuffleOptions({
        question: "What should we do to keep our clothes free from dust and insects?",
        optionA: "Throw them anywhere",
        optionB: "Dry them in rain",
        optionC: "Keep them properly in shelves",
        correctAnswer: "Keep them properly in shelves",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cotton comes from __________.",
        optionA: "Rubber plant",
        optionB: "Cotton plant",
        optionC: "Mango tree",
        correctAnswer: "Cotton plant",
      }),
      shuffleOptions({
        question: "Raincoats are made of __________.",
        optionA: "Rubber",
        optionB: "Wool",
        optionC: "Paper",
        correctAnswer: "Rubber",
      }),
      shuffleOptions({
        question: "Leather bags are made from __________.",
        optionA: "Animal skin",
        optionB: "Cotton",
        optionC: "Water",
        correctAnswer: "Animal skin",
      }),
      shuffleOptions({
        question: "Woollen clothes keep our body __________.",
        optionA: "Cool",
        optionB: "Warm",
        optionC: "Wet",
        correctAnswer: "Warm",
      }),
      shuffleOptions({
        question: "People wear __________ dresses on special occasions.",
        optionA: "Normal",
        optionB: "Special",
        optionC: "Rainy",
        correctAnswer: "Special",
      }),
      shuffleOptions({
        question: "School children wear __________ every day.",
        optionA: "Casual clothes",
        optionB: "Uniforms",
        optionC: "Party dresses",
        correctAnswer: "Uniforms",
      }),
      shuffleOptions({
        question: "Rubber __________ help us walk safely in the rain.",
        optionA: "Socks",
        optionB: "Gumboots",
        optionC: "Scarves",
        correctAnswer: "Gumboots",
      }),
      shuffleOptions({
        question: "Cotton clothes are best suited for the __________ season.",
        optionA: "Winter",
        optionB: "Summer",
        optionC: "Rainy",
        correctAnswer: "Summer",
      }),
      shuffleOptions({
        question: "Wool is obtained from __________.",
        optionA: "Trees",
        optionB: "Sheep",
        optionC: "Plants",
        correctAnswer: "Sheep",
      }),
      shuffleOptions({
        question: "We should wash our clothes with good __________.",
        optionA: "Detergent",
        optionB: "Paint",
        optionC: "Oil",
        correctAnswer: "Detergent",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Woollen clothes are worn during the winter season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Raincoats keep us dry during the rainy season.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton clothes are worn to keep our body warm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Leather is made from the skin of dead animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All people in India wear the same traditional dress.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Special dresses are worn on ordinary days.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rubber comes from the rubber tree.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "School uniforms are worn only at home.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Cotton clothes keep us cool in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep our clothes in shelves to protect them from dust.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
