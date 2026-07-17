export const chapter = "Chapter - 11: The World of Food";
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
        question: "Which method of food preservation removes the moisture from food items?",
        optionA: "Freezing",
        optionB: "Drying",
        optionC: "Pasteurisation",
        correctAnswer: "Drying",
      }),
      shuffleOptions({
        question: "Who invented the process of pasteurisation in 1865?",
        optionA: "Louis Pasteur",
        optionB: "Alexander Fleming",
        optionC: "Isaac Newton",
        correctAnswer: "Louis Pasteur",
      }),
      shuffleOptions({
        question: "Which method of preservation involves sealing fruits and vegetables in jars?",
        optionA: "Drying",
        optionB: "Canning",
        optionC: "Refrigeration",
        correctAnswer: "Canning",
      }),
      shuffleOptions({
        question: "Which gas acts as a natural preservative in aerated drinks?",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Hydrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "What should we do with leftover food after a family gathering?",
        optionA: "Throw it in the dustbin",
        optionB: "Feed animals or donate",
        optionC: "Keep it uncovered",
        correctAnswer: "Feed animals or donate",
      }),
      shuffleOptions({
        question: "Which food items can spoil quickly if not stored properly?",
        optionA: "Pulses",
        optionB: "Vegetables",
        optionC: "Spices",
        correctAnswer: "Vegetables",
      }),
      shuffleOptions({
        question: "Why do floods and droughts lead to food scarcity?",
        optionA: "They destroy crops",
        optionB: "They increase production",
        optionC: "They make soil fertile",
        correctAnswer: "They destroy crops",
      }),
      shuffleOptions({
        question: "Which of the following is a man-made cause of food scarcity?",
        optionA: "Poverty",
        optionB: "Rainfall",
        optionC: "Drought",
        correctAnswer: "Poverty",
      }),
      shuffleOptions({
        question: "Which technique is suitable for both perishable and non-perishable food items?",
        optionA: "Vacuum Packing",
        optionB: "Drying",
        optionC: "Boiling",
        correctAnswer: "Vacuum Packing",
      }),
      shuffleOptions({
        question: "What should we do to prevent food wastage?",
        optionA: "Cook excess food",
        optionB: "Take only as much food as needed",
        optionC: "Buy more than required",
        correctAnswer: "Take only as much food as needed",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "________ helps in slowing down the microbial growth in food.",
        optionA: "Freezing",
        optionB: "Heating",
        optionC: "Boiling",
        correctAnswer: "Freezing",
      }),
      shuffleOptions({
        question: "________ is one of the oldest techniques of food preservation.",
        optionA: "Drying",
        optionB: "Canning",
        optionC: "Refrigeration",
        correctAnswer: "Drying",
      }),
      shuffleOptions({
        question: "________ means complete absence of air in a space.",
        optionA: "Vacuum",
        optionB: "Air",
        optionC: "Gas",
        correctAnswer: "Vacuum",
      }),
      shuffleOptions({
        question: "________ is the process of heating and then cooling milk to kill germs.",
        optionA: "Pasteurisation",
        optionB: "Freezing",
        optionC: "Drying",
        correctAnswer: "Pasteurisation",
      }),
      shuffleOptions({
        question: "________ is a non-perishable item that can be stored for months.",
        optionA: "Pulses",
        optionB: "Milk",
        optionC: "Meat",
        correctAnswer: "Pulses",
      }),
      shuffleOptions({
        question: "________ drinks contain carbon dioxide as a natural preservative.",
        optionA: "Aerated",
        optionB: "Energy",
        optionC: "Fruit",
        correctAnswer: "Aerated",
      }),
      shuffleOptions({
        question: "________ is the process in which food is sealed in sterile jars or cans.",
        optionA: "Canning",
        optionB: "Freezing",
        optionC: "Drying",
        correctAnswer: "Canning",
      }),
      shuffleOptions({
        question: "________ is caused when bacteria grow on food.",
        optionA: "Spoilage",
        optionB: "Preservation",
        optionC: "Cooling",
        correctAnswer: "Spoilage",
      }),
      shuffleOptions({
        question: "________ can create artificial shortage of food.",
        optionA: "Hoarding",
        optionB: "Sharing",
        optionC: "Donating",
        correctAnswer: "Hoarding",
      }),
      shuffleOptions({
        question: "________ occurs when crops fail due to lack of rain or floods.",
        optionA: "Food scarcity",
        optionB: "Food safety",
        optionC: "Food growth",
        correctAnswer: "Food scarcity",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Perishable foods include milk, fruits and vegetables.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Non-perishable foods spoil easily if not preserved.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pasteurisation is mainly used for dairy products.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Floods can lead to shortage of food supply.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vacuum packing allows air to remain in the package.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Drying helps to remove water content from food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Poverty is a natural cause of food scarcity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Food preservation helps increase the shelf life of food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Throwing leftover food shows good manners.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "We should eat only as much as we can finish to avoid food wastage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
