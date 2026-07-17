export const chapter = "Chapter - 7: Clothes We Wear";
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
        question: "Why do we wear clothes?",
        optionA: "To protect our body",
        optionB: "To look taller",
        optionC: "To play games",
        correctAnswer: "To protect our body",
      }),
      shuffleOptions({
        question: "What do clothes protect us from?",
        optionA: "Food",
        optionB: "Dust and germs",
        optionC: "Colours",
        correctAnswer: "Dust and germs",
      }),
      shuffleOptions({
        question: "What kind of clothes keep our body cool?",
        optionA: "Woollen clothes",
        optionB: "Cotton clothes",
        optionC: "Silk clothes",
        correctAnswer: "Cotton clothes",
      }),
      shuffleOptions({
        question: "What type of clothes keep our body warm?",
        optionA: "Woollen clothes",
        optionB: "Cotton clothes",
        optionC: "Nylon clothes",
        correctAnswer: "Woollen clothes",
      }),
      shuffleOptions({
        question: "What do we wear in the rainy season?",
        optionA: "Raincoat",
        optionB: "Woollen coat",
        optionC: "Cotton shirt",
        correctAnswer: "Raincoat",
      }),
      shuffleOptions({
        question: "Which type of material does not allow water to pass through?",
        optionA: "Waterproof",
        optionB: "Cotton",
        optionC: "Woollen",
        correctAnswer: "Waterproof",
      }),
      shuffleOptions({
        question: "What should we use to wash our clothes?",
        optionA: "Mud",
        optionB: "Detergent",
        optionC: "Oil",
        correctAnswer: "Detergent",
      }),
      shuffleOptions({
        question: "What keeps clothes wrinkle-free and neat?",
        optionA: "Ironing",
        optionB: "Folding",
        optionC: "Wearing again",
        correctAnswer: "Ironing",
      }),
      shuffleOptions({
        question: "Where should we keep our clean clothes?",
        optionA: "Bed",
        optionB: "Shelf",
        optionC: "Floor",
        correctAnswer: "Shelf",
      }),
      shuffleOptions({
        question: "How can we help the poor in winter?",
        optionA: "By giving our woollen clothes",
        optionB: "By giving our toys",
        optionC: "By giving raincoats",
        correctAnswer: "By giving our woollen clothes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We wear ______ to cover our body.",
        optionA: "shoes",
        optionB: "clothes",
        optionC: "caps",
        correctAnswer: "clothes",
      }),
      shuffleOptions({
        question: "Cotton clothes are worn in ______ season.",
        optionA: "winter",
        optionB: "summer",
        optionC: "rainy",
        correctAnswer: "summer",
      }),
      shuffleOptions({
        question: "Woollen clothes are ______ in touch.",
        optionA: "soft",
        optionB: "rough",
        optionC: "cold",
        correctAnswer: "soft",
      }),
      shuffleOptions({
        question: "Raincoat and umbrella are used in ______ season.",
        optionA: "rainy",
        optionB: "winter",
        optionC: "summer",
        correctAnswer: "rainy",
      }),
      shuffleOptions({
        question: "We should wear ______ and clean clothes.",
        optionA: "dirty",
        optionB: "neat",
        optionC: "torn",
        correctAnswer: "neat",
      }),
      shuffleOptions({
        question: "Clothes are made from different ______.",
        optionA: "colours",
        optionB: "fabrics",
        optionC: "tools",
        correctAnswer: "fabrics",
      }),
      shuffleOptions({
        question: "Raincoat is made of ______ material.",
        optionA: "waterproof",
        optionB: "cotton",
        optionC: "silk",
        correctAnswer: "waterproof",
      }),
      shuffleOptions({
        question: "Cotton clothes allow ______ to pass through.",
        optionA: "air",
        optionB: "water",
        optionC: "light",
        correctAnswer: "air",
      }),
      shuffleOptions({
        question: "We should ______ our clothes properly after washing.",
        optionA: "iron",
        optionB: "tear",
        optionC: "throw",
        correctAnswer: "iron",
      }),
      shuffleOptions({
        question: "Woollen clothes protect us from ______.",
        optionA: "heat",
        optionB: "cold",
        optionC: "sunlight",
        correctAnswer: "cold",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "We wear the same clothes in all seasons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Woollen clothes are worn in winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cotton clothes keep us cool in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Raincoat allows water to pass through.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neat clothes protect us from mosquitoes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should wash our clothes with a good detergent.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dirty clothes keep us safe from germs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Raincoat and gumboots are used in summer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Clothes make us look smart.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should share our spare woollen clothes with needy people.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
