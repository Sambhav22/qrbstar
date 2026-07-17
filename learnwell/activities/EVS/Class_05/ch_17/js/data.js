export const chapter = "Chapter - 17: Water O’ Water";
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
        question: "Who advised Bholi not to waste water?",
        optionA: "Her mother",
        optionB: "Her grandfather",
        optionC: "Her teacher",
        correctAnswer: "Her grandfather",
      }),
      shuffleOptions({
        question: "Where did Bholi’s grandfather fetch water from when he was young?",
        optionA: "Baoli",
        optionB: "River",
        optionC: "Canal",
        correctAnswer: "Baoli",
      }),
      shuffleOptions({
        question: "Which device uses a bullock to draw water from a well?",
        optionA: "Denkli",
        optionB: "Persian wheel",
        optionC: "Tube well",
        correctAnswer: "Persian wheel",
      }),
      shuffleOptions({
        question: "Which device uses a counter weight to lift a bucket of water?",
        optionA: "Archimedes’ screw",
        optionB: "Denkli",
        optionC: "Pump",
        correctAnswer: "Denkli",
      }),
      shuffleOptions({
        question: "Which invention is based on a spiral design to lift water?",
        optionA: "Tube well",
        optionB: "Archimedes’ screw",
        optionC: "Baoli",
        correctAnswer: "Archimedes’ screw",
      }),
      shuffleOptions({
        question: "Why does a plastic bottle float on water?",
        optionA: "It has less density than water",
        optionB: "It is flat",
        optionC: "It is made of plastic",
        correctAnswer: "It has less density than water",
      }),
      shuffleOptions({
        question: "Which two liquids mix well with each other?",
        optionA: "Oil and water",
        optionB: "Water and milk",
        optionC: "Oil and milk",
        correctAnswer: "Water and milk",
      }),
      shuffleOptions({
        question: "Which insect breeds in stagnant water?",
        optionA: "Butterfly",
        optionB: "Mosquito",
        optionC: "Bee",
        correctAnswer: "Mosquito",
      }),
      shuffleOptions({
        question: "Who sucks blood from humans — male or female mosquitoes?",
        optionA: "Male",
        optionB: "Female",
        optionC: "Both",
        correctAnswer: "Female",
      }),
      shuffleOptions({
        question: "What is considered a holy deed in our country?",
        optionA: "Offering food",
        optionB: "Offering water to the thirsty",
        optionC: "Planting trees",
        correctAnswer: "Offering water to the thirsty",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water from a borewell comes out through an __________.",
        optionA: "Rope",
        optionB: "Electric motor",
        optionC: "Pump",
        correctAnswer: "Electric motor",
      }),
      shuffleOptions({
        question: "A __________ is a deep step well used to store water.",
        optionA: "Denkli",
        optionB: "Baoli",
        optionC: "Tube well",
        correctAnswer: "Baoli",
      }),
      shuffleOptions({
        question: "The heaviness or lightness of a substance is called its __________.",
        optionA: "Mass",
        optionB: "Density",
        optionC: "Weight",
        correctAnswer: "Density",
      }),
      shuffleOptions({
        question: "Substances that mix in water are called __________ substances.",
        optionA: "Soluble",
        optionB: "Insoluble",
        optionC: "Soft",
        correctAnswer: "Soluble",
      }),
      shuffleOptions({
        question: "Sand and oil are __________ in water.",
        optionA: "Soluble",
        optionB: "Insoluble",
        optionC: "Dissolved",
        correctAnswer: "Insoluble",
      }),
      shuffleOptions({
        question: "The wheel in a Persian wheel is turned by a __________.",
        optionA: "Man",
        optionB: "Bullock",
        optionC: "Motor",
        correctAnswer: "Bullock",
      }),
      shuffleOptions({
        question: "Female mosquitoes are attracted to __________ exhaled by humans.",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Hydrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "To avoid mosquito bites, we should use __________.",
        optionA: "Repellents",
        optionB: "Perfume",
        optionC: "Soap",
        correctAnswer: "Repellents",
      }),
      shuffleOptions({
        question: "Water and milk __________ well with each other.",
        optionA: "Mix",
        optionB: "Do not mix",
        optionC: "Float",
        correctAnswer: "Mix",
      }),
      shuffleOptions({
        question: "Mosquitoes spread diseases like __________.",
        optionA: "Typhoid",
        optionB: "Malaria",
        optionC: "Flu",
        correctAnswer: "Malaria",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bholi’s grandfather told her to save water because it is precious.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Farmers in the past depended only on rain for irrigation.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Persian wheel was turned by electric motors.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Objects with less density than water float on it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Oil and water mix completely with each other.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sand is a soluble substance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Female mosquitoes feed on blood while males feed on plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mosquito saliva prevents blood from clotting.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Offering water to the thirsty is considered a holy act.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Water sustains life on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
