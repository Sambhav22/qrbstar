export const chapter = "Chapter - 2: The Earth";
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
        question: "Which gas forms the smallest part of the earth’s atmosphere?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Other gases",
        correctAnswer: "Other gases",
      }),
      shuffleOptions({
        question: "Which ocean is completely covered with ice in the southernmost part of the world?",
        optionA: "Atlantic Ocean",
        optionB: "Southern Ocean",
        optionC: "Antarctic Ocean (Antarctica region)",
        correctAnswer: "Antarctic Ocean (Antarctica region)",
      }),
      shuffleOptions({
        question: "Which continent lies completely covered with snow and ice?",
        optionA: "Africa",
        optionB: "Antarctica",
        optionC: "Europe",
        correctAnswer: "Antarctica",
      }),
      shuffleOptions({
        question: "Which ocean lies near the North Pole?",
        optionA: "Arctic Ocean",
        optionB: "Pacific Ocean",
        optionC: "Indian Ocean",
        correctAnswer: "Arctic Ocean",
      }),
      shuffleOptions({
        question: "Which gas in the atmosphere helps living beings to breathe?",
        optionA: "Oxygen",
        optionB: "Nitrogen",
        optionC: "Helium",
        correctAnswer: "Oxygen",
      }),
      shuffleOptions({
        question: "Which ocean is the biggest water body on Earth?",
        optionA: "Indian Ocean",
        optionB: "Pacific Ocean",
        optionC: "Arctic Ocean",
        correctAnswer: "Pacific Ocean",
      }),
      shuffleOptions({
        question: "Which landform is higher than hills?",
        optionA: "Plains",
        optionB: "Mountains",
        optionC: "Valleys",
        correctAnswer: "Mountains",
      }),
      shuffleOptions({
        question: "Who was the first human to see the Earth from space?",
        optionA: "Magellan",
        optionB: "Yuri Gagarin",
        optionC: "Copernicus",
        correctAnswer: "Yuri Gagarin",
      }),
      shuffleOptions({
        question: "Which continent is the largest in the world?",
        optionA: "Asia",
        optionB: "Australia",
        optionC: "South America",
        correctAnswer: "Asia",
      }),
      shuffleOptions({
        question: "Which water body is salty and very large?",
        optionA: "River",
        optionB: "Ocean",
        optionC: "Lake",
        correctAnswer: "Ocean",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The earth looks blue because most of it is covered with ______.",
        optionA: "Forests",
        optionB: "Water",
        optionC: "Mountains",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "Very large flat pieces of land are called ______.",
        optionA: "Hills",
        optionB: "Plains",
        optionC: "Islands",
        correctAnswer: "Plains",
      }),
      shuffleOptions({
        question: "The layer of air around the earth is called ______.",
        optionA: "Atmosphere",
        optionB: "Hemisphere",
        optionC: "Hydrosphere",
        correctAnswer: "Atmosphere",
      }),
      shuffleOptions({
        question: "The earth has a slight ______ in the middle.",
        optionA: "Hole",
        optionB: "Bulge",
        optionC: "Crack",
        correctAnswer: "Bulge",
      }),
      shuffleOptions({
        question: "Only ______% of the earth’s water is fit for use.",
        optionA: "1%",
        optionB: "5%",
        optionC: "10%",
        correctAnswer: "1%",
      }),
      shuffleOptions({
        question: "Large bodies of salty water are called ______.",
        optionA: "Ponds",
        optionB: "Oceans",
        optionC: "Streams",
        correctAnswer: "Oceans",
      }),
      shuffleOptions({
        question: "The earth spins around an imaginary line called the ______.",
        optionA: "Pole",
        optionB: "Axis",
        optionC: "Circle",
        correctAnswer: "Axis",
      }),
      shuffleOptions({
        question: "The earth is the only planet that has the right ______ for life.",
        optionA: "Temperature",
        optionB: "Colour",
        optionC: "Distance",
        correctAnswer: "Temperature",
      }),
      shuffleOptions({
        question: "Trees help to make the air ______.",
        optionA: "Dirty",
        optionB: "Fresh",
        optionC: "Heavy",
        correctAnswer: "Fresh",
      }),
      shuffleOptions({
        question: "The fixed path along which the earth moves around the sun is called ______.",
        optionA: "Orbit",
        optionB: "Route",
        optionC: "Line",
        correctAnswer: "Orbit",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Water covers a larger area of the earth than land.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Antarctica is the smallest continent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Landforms include mountains, plains and deserts.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Arctic Ocean lies near the North Pole.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Pacific Ocean is the largest ocean on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The earth rotates on its axis, which causes day and night.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "All the oceans on Earth contain fresh water that we can drink.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The earth has seven continents and five oceans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ancient people believed the earth was flat.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Southern Ocean lies near Antarctica.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
