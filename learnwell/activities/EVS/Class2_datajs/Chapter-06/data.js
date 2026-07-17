export const chapter = "Chapter - 6: Our Shelter";
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
        question: "What does a house protect us from?",
        optionA: "Books",
        optionB: "Toys",
        optionC: "Animals",
        correctAnswer: "Animals",
      }),
      shuffleOptions({
        question: "Who lives together in a sweet home?",
        optionA: "Family",
        optionB: "Friends",
        optionC: "Teachers",
        correctAnswer: "Family",
      }),
      shuffleOptions({
        question: "Which house floats on water?",
        optionA: "Caravan",
        optionB: "Houseboat",
        optionC: "Tent",
        correctAnswer: "Houseboat",
      }),
      shuffleOptions({
        question: "Which house is built on wheels?",
        optionA: "Tent",
        optionB: "Caravan",
        optionC: "Boat",
        correctAnswer: "Caravan",
      }),
      shuffleOptions({
        question: "Who uses tents?",
        optionA: "Scouts",
        optionB: "Farmers",
        optionC: "Doctors",
        correctAnswer: "Scouts",
      }),
      shuffleOptions({
        question: "What keeps us safe from rain and cold?",
        optionA: "Clothes",
        optionB: "Shelter",
        optionC: "Toys",
        correctAnswer: "Shelter",
      }),
      shuffleOptions({
        question: "What is used to make a pucca house strong?",
        optionA: "Bricks",
        optionB: "Leaves",
        optionC: "Paper",
        correctAnswer: "Bricks",
      }),
      shuffleOptions({
        question: "Where are houseboats seen?",
        optionA: "Kerala",
        optionB: "Delhi",
        optionC: "Rajasthan",
        correctAnswer: "Kerala",
      }),
      shuffleOptions({
        question: "What should we keep clean daily?",
        optionA: "Furniture",
        optionB: "Road",
        optionC: "Tree",
        correctAnswer: "Furniture",
      }),
      shuffleOptions({
        question: "What should we do to take care of our home?",
        optionA: "Keep it clean",
        optionB: "Leave it dirty",
        optionC: "Lock it always",
        correctAnswer: "Keep it clean",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A ______ keeps us safe from heat and rain.",
        optionA: "Shelter",
        optionB: "Toy",
        optionC: "Car",
        correctAnswer: "Shelter",
      }),
      shuffleOptions({
        question: "A ______ house is made of mud and bamboo.",
        optionA: "Pucca",
        optionB: "Kutcha",
        optionC: "Glass",
        correctAnswer: "Kutcha",
      }),
      shuffleOptions({
        question: "Houseboats float on ______.",
        optionA: "Road",
        optionB: "Water",
        optionC: "Air",
        correctAnswer: "Water",
      }),
      shuffleOptions({
        question: "______ houses are made of bricks and cement.",
        optionA: "Wooden",
        optionB: "Pucca",
        optionC: "Temporary",
        correctAnswer: "Pucca",
      }),
      shuffleOptions({
        question: "Caravans move on ______.",
        optionA: "Water",
        optionB: "Wheels",
        optionC: "Tracks",
        correctAnswer: "Wheels",
      }),
      shuffleOptions({
        question: "Scouts and ______ use tents.",
        optionA: "Soldiers",
        optionB: "Teachers",
        optionC: "Drivers",
        correctAnswer: "Soldiers",
      }),
      shuffleOptions({
        question: "Our home protects us from ______ animals.",
        optionA: "Stray",
        optionB: "Pet",
        optionC: "Tiny",
        correctAnswer: "Stray",
      }),
      shuffleOptions({
        question: "We should keep the toilet and kitchen ______.",
        optionA: "Clean",
        optionB: "Closed",
        optionC: "Dark",
        correctAnswer: "Clean",
      }),
      shuffleOptions({
        question: "The house in which we live is our ______.",
        optionA: "Playground",
        optionB: "Sweet home",
        optionC: "Market",
        correctAnswer: "Sweet home",
      }),
      shuffleOptions({
        question: "Shelter is a place where one ______.",
        optionA: "Plays",
        optionB: "Lives",
        optionC: "Hides",
        correctAnswer: "Lives",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Shelter keeps us safe from thieves.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Caravans float on water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Tents are used for long-term living.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Houseboats are built on wheels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Animals also need shelter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep the toilet clean.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A kuchcha house is made of bricks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pucca houses are found in cities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We should keep our house dirty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Our house protects us from rain and sun.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
