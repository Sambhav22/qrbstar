export const chapter = "Chapter - 8: The Battle of Haldighati";
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
        question: "The battle of Haldighati was fought in which year?",
        optionA: "1575",
        optionB: "1576",
        optionC: "1577",
        correctAnswer: "1576",
      }),
      shuffleOptions({
        question: "What does the word ‘Ghati’ mean?",
        optionA: "River",
        optionB: "Valley",
        optionC: "Plain",
        correctAnswer: "Valley",
      }),
      shuffleOptions({
        question: "Where did Pratap’s army march from?",
        optionA: "Delhi",
        optionB: "Kumbhalgarh",
        optionC: "Mandalgarh",
        correctAnswer: "Kumbhalgarh",
      }),
      shuffleOptions({
        question: "Who accompanied Pratap’s army in the hills?",
        optionA: "Rajputs",
        optionB: "Bhils",
        optionC: "Mughals",
        correctAnswer: "Bhils",
      }),
      shuffleOptions({
        question: "Which commander in Akbar’s army was also a writer?",
        optionA: "Hakim Sur",
        optionB: "Badayuni",
        optionC: "Mansingh",
        correctAnswer: "Badayuni",
      }),
      shuffleOptions({
        question: "How long did the battle last?",
        optionA: "4 hours",
        optionB: "8 hours",
        optionC: "12 hours",
        correctAnswer: "4 hours",
      }),
      shuffleOptions({
        question: "How many soldiers died in the battle?",
        optionA: "500",
        optionB: "5,000",
        optionC: "50,000",
        correctAnswer: "500",
      }),
      shuffleOptions({
        question: "Where was Mansingh when he took leave of Akbar?",
        optionA: "Ajmer",
        optionB: "Delhi",
        optionC: "Mewar",
        correctAnswer: "Ajmer",
      }),
      shuffleOptions({
        question: "Which village did Mansingh camp at before Haldighati?",
        optionA: "Molela",
        optionB: "Mandalgarh",
        optionC: "Gogunda",
        correctAnswer: "Molela",
      }),
      shuffleOptions({
        question: "What did Mihtar Khan shout to inspire Mughal soldiers?",
        optionA: "Akbar was coming",
        optionB: "Pratap was captured",
        optionC: "Reinforcements arrived",
        correctAnswer: "Akbar was coming",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Battle of Haldighati was fought in ______.",
        optionA: "Rajasthan",
        optionB: "Punjab",
        optionC: "Gujarat",
        correctAnswer: "Rajasthan",
      }),
      shuffleOptions({
        question: "The colour of the soil at Haldighati is like ______.",
        optionA: "Gold",
        optionB: "Turmeric",
        optionC: "Saffron",
        correctAnswer: "Turmeric",
      }),
      shuffleOptions({
        question: "Maharana Pratap was the ruler of ______.",
        optionA: "Mewar",
        optionB: "Delhi",
        optionC: "Bengal",
        correctAnswer: "Mewar",
      }),
      shuffleOptions({
        question: "Mansingh first camped at ______.",
        optionA: "Mandalgarh",
        optionB: "Gogunda",
        optionC: "Haldighati",
        correctAnswer: "Mandalgarh",
      }),
      shuffleOptions({
        question: "Pratap’s favourite horse was named ______.",
        optionA: "Ashwa",
        optionB: "Chetak",
        optionC: "Kesari",
        correctAnswer: "Chetak",
      }),
      shuffleOptions({
        question: "The Mughal army had about ______ soldiers.",
        optionA: "5,000",
        optionB: "20,000",
        optionC: "80,000",
        correctAnswer: "5,000",
      }),
      shuffleOptions({
        question: "The Mewar army had about ______ soldiers.",
        optionA: "3,000",
        optionB: "10,000",
        optionC: "50,000",
        correctAnswer: "3,000",
      }),
      shuffleOptions({
        question: "The Bhils were expert ______.",
        optionA: "Archers",
        optionB: "Swordsmen",
        optionC: "Horsemen",
        correctAnswer: "Archers",
      }),
      shuffleOptions({
        question: "The battle was fought in the month of ______.",
        optionA: "April",
        optionB: "June",
        optionC: "July",
        correctAnswer: "June",
      }),
      shuffleOptions({
        question: "After this battle, the Mughals tried to capture Mewar for ______ years.",
        optionA: "5",
        optionB: "8",
        optionC: "12",
        correctAnswer: "12",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The battle of Haldighati was fought between Akbar and Babur.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Mughal army had more soldiers than the Mewar army.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mansingh could bring all his cannons to Gogunda.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Both armies divided into four parts before the battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pratap’s horse Chetak attacked Mansingh’s elephant.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chetak survived the battle unharmed.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mihtar Khan lied that Akbar was coming with a huge army.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The battle lasted for about 4 hours.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Akbar finally conquered Mewar after this battle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pratap regained his entire territory after some years.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
