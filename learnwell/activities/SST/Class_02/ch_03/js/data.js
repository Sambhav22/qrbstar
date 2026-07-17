export const chapter = "Chapter - 3: Good Health";
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
        question: "Which habit helps us keep our mouth fresh?",
        optionA: "Eating sweets",
        optionB: "Brushing teeth regularly",
        optionC: "Sleeping late",
        correctAnswer: "Brushing teeth regularly",
      }),
      shuffleOptions({
        question: "What should we use while sneezing to stop germs?",
        optionA: "A handkerchief",
        optionB: "A toy",
        optionC: "A book",
        correctAnswer: "A handkerchief",
      }),
      shuffleOptions({
        question: "Which food item helps make our bones strong?",
        optionA: "Chips",
        optionB: "Milk",
        optionC: "Ice cream",
        correctAnswer: "Milk",
      }),
      shuffleOptions({
        question: "Which activity keeps our body active?",
        optionA: "Sitting all day",
        optionB: "Playing outdoor games",
        optionC: "Watching TV",
        correctAnswer: "Playing outdoor games",
      }),
      shuffleOptions({
        question: "What should we do after using the toilet?",
        optionA: "Ignore our hands",
        optionB: "Run outside",
        optionC: "Wash hands with soap",
        correctAnswer: "Wash hands with soap",
      }),
      shuffleOptions({
        question: "Which of these is a healthy habit?",
        optionA: "Wearing dirty clothes",
        optionB: "Wearing neat and clean clothes",
        optionC: "Wearing wet clothes",
        correctAnswer: "Wearing neat and clean clothes",
      }),
      shuffleOptions({
        question: "Which one refreshes our mind after hard work?",
        optionA: "Eating junk food",
        optionB: "Taking a nap",
        optionC: "Listening to loud noise",
        correctAnswer: "Taking a nap",
      }),
      shuffleOptions({
        question: "What should we do in the morning to stay fit?",
        optionA: "Walk daily in the morning",
        optionB: "Sleep more",
        optionC: "Eat only sweets",
        correctAnswer: "Walk daily in the morning",
      }),
      shuffleOptions({
        question: "Which of these is a good posture habit?",
        optionA: "Sitting bent",
        optionB: "Keeping our body straight while sitting or standing",
        optionC: "Crawling",
        correctAnswer: "Keeping our body straight while sitting or standing",
      }),
      shuffleOptions({
        question: "Which of these protects us from germs in the air?",
        optionA: "Covering our nose while coughing or sneezing",
        optionB: "Using a handkerchief correctly",
        optionC: "Both a and b",
        correctAnswer: "Both a and b",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We should wash our hands ______ using the toilet.",
        optionA: "before",
        optionB: "after",
        optionC: "never",
        correctAnswer: "after",
      }),
      shuffleOptions({
        question: "Fresh fruits give us ______ to play and study.",
        optionA: "energy",
        optionB: "tiredness",
        optionC: "dust",
        correctAnswer: "energy",
      }),
      shuffleOptions({
        question: "We must wear ______ clothes every day.",
        optionA: "neat and clean",
        optionB: "torn",
        optionC: "dirty",
        correctAnswer: "neat and clean",
      }),
      shuffleOptions({
        question: "We should keep our nails ______.",
        optionA: "very long",
        optionB: "short",
        optionC: "sharp",
        correctAnswer: "short",
      }),
      shuffleOptions({
        question: "We should drink plenty of ______ during the day.",
        optionA: "water",
        optionB: "oil",
        optionC: "juice",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "We should keep our ______ clean to avoid germs.",
        optionA: "nose",
        optionB: "shoes",
        optionC: "both nose and body parts clean",
        correctAnswer: "both nose and body parts clean",
      }),
      shuffleOptions({
        question: "Walking in a park keeps us ______.",
        optionA: "active",
        optionB: "sleepy",
        optionC: "sick",
        correctAnswer: "active",
      }),
      shuffleOptions({
        question: "Yoga helps our body stay ______.",
        optionA: "flexible and strong",
        optionB: "weak",
        optionC: "lazy",
        correctAnswer: "flexible and strong",
      }),
      shuffleOptions({
        question: "We must take a short ______ if we feel tired.",
        optionA: "nap",
        optionB: "game",
        optionC: "bath",
        correctAnswer: "nap",
      }),
      shuffleOptions({
        question: "We should eat plenty of fresh fruits and ______.",
        optionA: "chocolates",
        optionB: "vegetables",
        optionC: "chips",
        correctAnswer: "vegetables",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Clean clothes help protect us from germs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Germs in our surroundings can make us sick.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep our nose dirty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Playing outdoor games keeps our body active.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sleeping with our face covered is a good habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Fresh fruits and vegetables keep us healthy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Walking daily in the morning is a healthy habit.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should wash our hands only before meals, not after.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Using a handkerchief while sneezing stops germs from spreading.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Taking proper rest gives us new energy to work again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
