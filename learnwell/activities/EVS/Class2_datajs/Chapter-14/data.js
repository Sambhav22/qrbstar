export const chapter = "Chapter - 14: The Earth";
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
        question: "Which planet is the only one where life is possible?",
        optionA: "Mars",
        optionB: "Earth",
        optionC: "Jupiter",
        correctAnswer: "Earth",
      }),
      shuffleOptions({
        question: "What covers about 70 % of the Earth’s surface?",
        optionA: "Land",
        optionB: "Water",
        optionC: "Mountains",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "What are the low and flat areas of land called?",
        optionA: "Hills",
        optionB: "Plains",
        optionC: "Valleys",
        correctAnswer: "Plains",
      }),
      shuffleOptions({
        question: "Which landform is higher and steeper than hills?",
        optionA: "Mountains",
        optionB: "Deserts",
        optionC: "Plains",
        correctAnswer: "Mountains",
      }),
      shuffleOptions({
        question: "What do we call a dry and sandy land with very little rainfall?",
        optionA: "Valley",
        optionB: "Desert",
        optionC: "Sea",
        correctAnswer: "Desert",
      }),
      shuffleOptions({
        question: "What is a low area between hills or mountains called?",
        optionA: "Valley",
        optionB: "Plain",
        optionC: "Hill",
        correctAnswer: "Valley",
      }),
      shuffleOptions({
        question: "Which water body is very large and deep?",
        optionA: "Sea",
        optionB: "Ocean",
        optionC: "River",
        correctAnswer: "Ocean",
      }),
      shuffleOptions({
        question: "Which water body is large but smaller than an ocean?",
        optionA: "Sea",
        optionB: "River",
        optionC: "Pond",
        correctAnswer: "Sea",
      }),
      shuffleOptions({
        question: "Where does a river finally fall?",
        optionA: "Sea",
        optionB: "Hill",
        optionC: "Desert",
        correctAnswer: "Sea",
      }),
      shuffleOptions({
        question: "Why should we not throw waste into rivers?",
        optionA: "It makes the water dirty",
        optionB: "It makes the water clean",
        optionC: "It stops rainfall",
        correctAnswer: "It makes the water dirty",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Earth is the only planet where _______ is possible.",
        optionA: "air",
        optionB: "life",
        optionC: "water",
        correctAnswer: "life",
      }),
      shuffleOptions({
        question: "Lands higher than plains are called _______.",
        optionA: "mountains",
        optionB: "hills",
        optionC: "valleys",
        correctAnswer: "hills",
      }),
      shuffleOptions({
        question: "The dry and sandy part of land is known as a _______.",
        optionA: "plain",
        optionB: "desert",
        optionC: "hill",
        correctAnswer: "desert",
      }),
      shuffleOptions({
        question: "There are _______ oceans on the Earth.",
        optionA: "five",
        optionB: "six",
        optionC: "seven",
        correctAnswer: "five",
      }),
      shuffleOptions({
        question: "A large stream that flows on the surface of land is a _______.",
        optionA: "sea",
        optionB: "river",
        optionC: "lake",
        correctAnswer: "river",
      }),
      shuffleOptions({
        question: "River water is _______ and _______.",
        optionA: "fresh and pure",
        optionB: "hot and salty",
        optionC: "muddy and dry",
        correctAnswer: "fresh and pure",
      }),
      shuffleOptions({
        question: "Seas are smaller than _______.",
        optionA: "oceans",
        optionB: "rivers",
        optionC: "ponds",
        correctAnswer: "oceans",
      }),
      shuffleOptions({
        question: "Deserts receive very _______ rainfall.",
        optionA: "little",
        optionB: "heavy",
        optionC: "no",
        correctAnswer: "little",
      }),
      shuffleOptions({
        question: "Valleys lie between _______ or _______.",
        optionA: "hills and mountains",
        optionB: "plains and deserts",
        optionC: "rivers and seas",
        correctAnswer: "hills and mountains",
      }),
      shuffleOptions({
        question: "About 70 % of the Earth’s surface is covered with _______.",
        optionA: "land",
        optionB: "water",
        optionC: "sand",
        correctAnswer: "water",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Earth is the only planet where life exists.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plains are low and flat lands.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hills are lower than plains.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mountains are higher and steeper than hills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Deserts receive heavy rainfall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "There are five oceans on Earth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Seas are larger than oceans.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rivers flow on land and fall into seas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "River water is fresh and pure.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should throw waste into rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
