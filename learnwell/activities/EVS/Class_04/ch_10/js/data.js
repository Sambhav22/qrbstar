export const chapter = "Chapter - 10: Food on Special Occasions";
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
        question: "Who started the practice of Langar?",
        optionA: "Mahatma Gandhi",
        optionB: "Guru Nanak Dev",
        optionC: "Mother Teresa",
        correctAnswer: "Guru Nanak Dev",
      }),
      shuffleOptions({
        question: "Which special sweet is prepared on Holi?",
        optionA: "Modak",
        optionB: "Gunjiya",
        optionC: "Sewain",
        correctAnswer: "Gunjiya",
      }),
      shuffleOptions({
        question: "On which festival are Modaks made for Lord Ganesha?",
        optionA: "Pongal",
        optionB: "Ganesh Chaturthi",
        optionC: "Bihu",
        correctAnswer: "Ganesh Chaturthi",
      }),
      shuffleOptions({
        question: "What special dish is cooked on Eid?",
        optionA: "Sweet Rice",
        optionB: "Sewain",
        optionC: "Pitha",
        correctAnswer: "Sewain",
      }),
      shuffleOptions({
        question: "Which festival of Assam includes pitha as a special dish?",
        optionA: "Bihu",
        optionB: "Pongal",
        optionC: "Hemis",
        correctAnswer: "Bihu",
      }),
      shuffleOptions({
        question: "Which state celebrates Baisakhi with Makki ki Roti and Sarson ka Saag?",
        optionA: "Punjab",
        optionB: "Tamil Nadu",
        optionC: "Bihar",
        correctAnswer: "Punjab",
      }),
      shuffleOptions({
        question: "Where do students eat their meals in a boarding school?",
        optionA: "Classroom",
        optionB: "Mess",
        optionC: "Playground",
        correctAnswer: "Mess",
      }),
      shuffleOptions({
        question: "What kind of food is served in a Langar?",
        optionA: "Simple vegetarian food",
        optionB: "Non-vegetarian food",
        optionC: "Only sweets",
        correctAnswer: "Simple vegetarian food",
      }),
      shuffleOptions({
        question: "Who checks the quality of food in school canteens?",
        optionA: "Principal",
        optionB: "In-charge",
        optionC: "Cook",
        correctAnswer: "In-charge",
      }),
      shuffleOptions({
        question: "What is the main purpose of community eating?",
        optionA: "To show off wealth",
        optionB: "To bring love and affection",
        optionC: "To waste food",
        correctAnswer: "To bring love and affection",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "________ started the practice of Langar.",
        optionA: "Mahatma Gandhi",
        optionB: "Guru Nanak Dev",
        optionC: "Mother Teresa",
        correctAnswer: "Guru Nanak Dev",
      }),
      shuffleOptions({
        question: "On Eid, people prepare a sweet dish called ________.",
        optionA: "Gunjiya",
        optionB: "Sewain",
        optionC: "Pitha",
        correctAnswer: "Sewain",
      }),
      shuffleOptions({
        question: "On Ganesh Chaturthi, ________ are offered to Lord Ganesha.",
        optionA: "Modaks",
        optionB: "Cakes",
        optionC: "Laddoos",
        correctAnswer: "Modaks",
      }),
      shuffleOptions({
        question: "On Pongal, people cook ________ rice for the Sun God.",
        optionA: "Sweet",
        optionB: "Fried",
        optionC: "Spicy",
        correctAnswer: "Sweet",
      }),
      shuffleOptions({
        question: "Makki ki Roti and Sarson ka Saag are popular dishes of ________.",
        optionA: "Assam",
        optionB: "Punjab",
        optionC: "Bihar",
        correctAnswer: "Punjab",
      }),
      shuffleOptions({
        question: "Thukpa and Momos are prepared during the Hemis festival of ________.",
        optionA: "Ladakh",
        optionB: "Rajasthan",
        optionC: "Tamil Nadu",
        correctAnswer: "Ladakh",
      }),
      shuffleOptions({
        question: "In a Langar, people sit on the ________ to take food.",
        optionA: "Ground",
        optionB: "Chair",
        optionC: "Bench",
        correctAnswer: "Ground",
      }),
      shuffleOptions({
        question: "Free meals served in government schools are called ________ meals.",
        optionA: "Mid-day",
        optionB: "Evening",
        optionC: "Morning",
        correctAnswer: "Mid-day",
      }),
      shuffleOptions({
        question: "Children eat lunch together during ________ at school.",
        optionA: "Recess",
        optionB: "Assembly",
        optionC: "Games period",
        correctAnswer: "Recess",
      }),
      shuffleOptions({
        question: "Eating together helps to build ________ and ________.",
        optionA: "Love and affection",
        optionB: "Anger and hate",
        optionC: "Pride and ego",
        correctAnswer: "Love and affection",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Langar is organised only for rich people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Guru Nanak Dev began the practice of Langar.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "On Bihu, people cook pitha and other traditional dishes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cakes and puddings are prepared on Christmas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Makki ki Roti and Sarson ka Saag are eaten during Baisakhi in Punjab.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Students in boarding schools eat their meals in the mess.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Eating lunch together in school is a kind of community eating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In a Langar, simple vegetarian food is served to all.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Food quality in school canteens is checked by the in-charge.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "During Pongal, sweet rice is offered to the Sun God.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
