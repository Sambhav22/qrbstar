export const chapter = "Chapter - 10: Living Longer and Healthier";
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
        question: "Who invented the stethoscope after observing children playing with a hollow log of wood?",
        optionA: "Rene Laennec",
        optionB: "Galileo",
        optionC: "Wilhelm Roentgen",
        correctAnswer: "Rene Laennec",
      }),
      shuffleOptions({
        question: "Who discovered penicillin by accident in 1928?",
        optionA: "Edward Jenner",
        optionB: "Sir Alexander Fleming",
        optionC: "Louis Pasteur",
        correctAnswer: "Sir Alexander Fleming",
      }),
      shuffleOptions({
        question: "Who proved that many diseases are caused by germs entering our body through food and water?",
        optionA: "Rene Laennec",
        optionB: "Louis Pasteur",
        optionC: "G.D. Fahrenheit",
        correctAnswer: "Louis Pasteur",
      }),
      shuffleOptions({
        question: "Who developed the first vaccine in the world against smallpox?",
        optionA: "Dr. Edward Jenner",
        optionB: "Galileo",
        optionC: "Alexander Fleming",
        correctAnswer: "Dr. Edward Jenner",
      }),
      shuffleOptions({
        question: "Who invented the clinical thermometer in 1715?",
        optionA: "Galileo",
        optionB: "G.D. Fahrenheit",
        optionC: "Wilhelm Roentgen",
        correctAnswer: "G.D. Fahrenheit",
      }),
      shuffleOptions({
        question: "Who invented the X-ray machine in 1896?",
        optionA: "Louis Pasteur",
        optionB: "Wilhelm Roentgen",
        optionC: "Rene Laennec",
        correctAnswer: "Wilhelm Roentgen",
      }),
      shuffleOptions({
        question: "Which scientist improved the flea glass and named it the microscope?",
        optionA: "Galileo Galilei",
        optionB: "Sir Alexander Fleming",
        optionC: "Edward Jenner",
        correctAnswer: "Galileo Galilei",
      }),
      shuffleOptions({
        question: "Who observed that milkmaids never suffered from smallpox?",
        optionA: "Louis Pasteur",
        optionB: "Edward Jenner",
        optionC: "Rene Laennec",
        correctAnswer: "Edward Jenner",
      }),
      shuffleOptions({
        question: "Who discovered the effectiveness of quinine in treating malaria?",
        optionA: "Edward Jenner",
        optionB: "Scientists studying mosquito-borne diseases (Quinine discovery)",
        optionC: "Alexander Fleming",
        correctAnswer: "Scientists studying mosquito-borne diseases (Quinine discovery)",
      }),
      shuffleOptions({
        question: "Who noticed children listening to faint sounds using a wooden log, leading to a major invention?",
        optionA: "Louis Pasteur",
        optionB: "Rene Laennec",
        optionC: "Wilhelm Roentgen",
        correctAnswer: "Rene Laennec",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The microscope helps doctors see very ________ things.",
        optionA: "large",
        optionB: "small",
        optionC: "bright",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "Malaria is caused by the bite of ________ mosquitoes.",
        optionA: "Anopheles",
        optionB: "Aedes",
        optionC: "Culex",
        correctAnswer: "Anopheles",
      }),
      shuffleOptions({
        question: "Pasteurization kills germs by first ________ milk or water.",
        optionA: "cooling",
        optionB: "heating",
        optionC: "freezing",
        correctAnswer: "heating",
      }),
      shuffleOptions({
        question: "A thermometer shows the ________ of our body.",
        optionA: "temperature",
        optionB: "weight",
        optionC: "height",
        correctAnswer: "temperature",
      }),
      shuffleOptions({
        question: "A digital thermometer displays the reading in ________.",
        optionA: "coloured lights",
        optionB: "digits",
        optionC: "symbols",
        correctAnswer: "digits",
      }),
      shuffleOptions({
        question: "Penicillin is an ________ medicine.",
        optionA: "antiviral",
        optionB: "antibiotic",
        optionC: "antiseptic",
        correctAnswer: "antibiotic",
      }),
      shuffleOptions({
        question: "The microscope was first inspired by a toy known as the ________.",
        optionA: "magic glass",
        optionB: "sun glass",
        optionC: "flea glass",
        correctAnswer: "flea glass",
      }),
      shuffleOptions({
        question: "X-ray machines help doctors check for ________ inside the body.",
        optionA: "germs",
        optionB: "fractures",
        optionC: "digestion",
        correctAnswer: "fractures",
      }),
      shuffleOptions({
        question: "Milkmaids suffered from a mild disease called ________.",
        optionA: "measles",
        optionB: "cowpox",
        optionC: "malaria",
        correctAnswer: "cowpox",
      }),
      shuffleOptions({
        question: "To stay healthy, we must keep our surroundings ________.",
        optionA: "dirty",
        optionB: "crowded",
        optionC: "clean",
        correctAnswer: "clean",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Digital thermometers show temperature using digits on a screen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The stethoscope helps doctors see bones inside the body.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pasteurization involves heating milk to kill germs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Anopheles mosquitoes spread malaria.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Edward Jenner developed the first vaccine by studying cowpox.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The microscope helps doctors look at extremely small things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Penicillin was discovered in the year 1816.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Junk food is healthy and should be eaten every day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The X-ray machine was invented by Wilhelm Roentgen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Before medical science developed, people believed illnesses were caused by evil spirits.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
