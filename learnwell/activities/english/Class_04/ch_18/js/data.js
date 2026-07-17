export const chapter = "Chapter - 18: The Greedy Glutton";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];
  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "What was Ajay’s age?",
        optionA: "Seven",
        optionB: "Eight",
        optionC: "Nine",
        correctAnswer: "Eight",
      }),
      shuffleOptions({
        question: "Who was Jyoti’s friend?",
        optionA: "Naina",
        optionB: "Neha",
        optionC: "Nisha",
        correctAnswer: "Naina",
      }),
      shuffleOptions({
        question: "What made Ajay’s mouth water the most?",
        optionA: "Decorations",
        optionB: "Cake",
        optionC: "Balloons",
        correctAnswer: "Cake",
      }),
      shuffleOptions({
        question: "Who threatened Ajay with a thrashing?",
        optionA: "Jyoti",
        optionB: "Mother",
        optionC: "Father",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "Where did Jyoti ask Ajay to sit in the hall?",
        optionA: "In the middle",
        optionB: "In the corner",
        optionC: "Near the cake",
        correctAnswer: "In the corner",
      }),
      shuffleOptions({
        question: "What was being set up in the other corner?",
        optionA: "Chairs",
        optionB: "Food stalls",
        optionC: "Toys",
        correctAnswer: "Food stalls",
      }),
      shuffleOptions({
        question: "How did Ajay refuse when offered cake?",
        optionA: "Politely once",
        optionB: "Loudly thrice",
        optionC: "He didn’t refuse",
        correctAnswer: "Loudly thrice",
      }),
      shuffleOptions({
        question: "What happened when Ajay ate cake quickly?",
        optionA: "People laughed",
        optionB: "Jyoti scolded him",
        optionC: "Mother stopped him",
        correctAnswer: "People laughed",
      }),
      shuffleOptions({
        question: "How did Jyoti and her friend react finally?",
        optionA: "Got angry",
        optionB: "Laughed",
        optionC: "Left the party",
        correctAnswer: "Laughed",
      }),
      shuffleOptions({
        question: "What was placed on the centre table?",
        optionA: "Gifts",
        optionB: "Cake",
        optionC: "Sweets",
        correctAnswer: "Cake",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ajay was a ______ glutton.",
        optionA: "Happy",
        optionB: "Greedy",
        optionC: "Careful",
        correctAnswer: "Greedy",
      }),
      shuffleOptions({
        question: "Jyoti went to her friend ______’s birthday party.",
        optionA: "Naina",
        optionB: "Neha",
        optionC: "Namita",
        correctAnswer: "Naina",
      }),
      shuffleOptions({
        question: "Ajay had to refuse food at least ______ times.",
        optionA: "Once",
        optionB: "Twice",
        optionC: "Thrice",
        correctAnswer: "Thrice",
      }),
      shuffleOptions({
        question: "Ajay sat on a chair in the ______ of the hall.",
        optionA: "Corner",
        optionB: "Middle",
        optionC: "Front",
        correctAnswer: "Corner",
      }),
      shuffleOptions({
        question: "Ajay was readied by his ______.",
        optionA: "Mother",
        optionB: "Sister",
        optionC: "Friend",
        correctAnswer: "Sister",
      }),
      shuffleOptions({
        question: "Ajay loved to eat ______.",
        optionA: "Goodies",
        optionB: "Fruits",
        optionC: "Vegetables",
        correctAnswer: "Goodies",
      }),
      shuffleOptions({
        question: "Ajay gulped slices of ______.",
        optionA: "Pizza",
        optionB: "Cake",
        optionC: "Sandwich",
        correctAnswer: "Cake",
      }),
      shuffleOptions({
        question: "Jyoti pinched and pulled Ajay while ______ him ready.",
        optionA: "Making",
        optionB: "Stopping",
        optionC: "Scolding",
        correctAnswer: "Making",
      }),
      shuffleOptions({
        question: "Ajay muttered to himself while looking at the ______.",
        optionA: "Cake",
        optionB: "Balloons",
        optionC: "Chairs",
        correctAnswer: "Cake",
      }),
      shuffleOptions({
        question: "Ajay promised to take food only with Jyoti’s ______.",
        optionA: "Permission",
        optionB: "Anger",
        optionC: "Friend",
        correctAnswer: "Permission",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Ajay was nine years old.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jyoti was invited to Naina’s birthday party.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mother allowed Jyoti to go alone without Ajay.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ajay promised to refuse food thrice before eating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ajay was interested in decorations of the hall.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ajay sat quietly in the corner as told by Jyoti.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ajay shouted ‘No, no, no’ before grabbing cake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People scolded Ajay when he ate cake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jyoti finally laughed when she saw Ajay eating.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ajay ate four slices of cake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}

export var activityData;
