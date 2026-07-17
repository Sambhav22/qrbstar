export const chapter = "Chapter - 18: Beauty Lies Within";
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
        question: "Who was Neela’s teacher?",
        optionA: "Naina",
        optionB: "Smriti",
        optionC: "Mohan",
        correctAnswer: "Smriti",
      }),
      shuffleOptions({
        question: "What accident scarred Neela’s face?",
        optionA: "Car accident",
        optionB: "Fire accident",
        optionC: "Sports accident",
        correctAnswer: "Fire accident",
      }),
      shuffleOptions({
        question: "How many races did Neela win?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "Who said Neela was an angel?",
        optionA: "Teacher",
        optionB: "Mother",
        optionC: "Friend",
        correctAnswer: "Mother",
      }),
      shuffleOptions({
        question: "What did Neela’s classmates borrow from her?",
        optionA: "Toys",
        optionB: "Notebooks",
        optionC: "Money",
        correctAnswer: "Notebooks",
      }),
      shuffleOptions({
        question: "Who saved Neela from a crocodile in her dream?",
        optionA: "Swan",
        optionB: "Dove",
        optionC: "Eagle",
        correctAnswer: "Swan",
      }),
      shuffleOptions({
        question: "Where did Neela feel like an outcaste?",
        optionA: "Only at home",
        optionB: "Only in school",
        optionC: "Everywhere",
        correctAnswer: "Everywhere",
      }),
      shuffleOptions({
        question: "What did Neela see in the dream mirror?",
        optionA: "Herself as ugly",
        optionB: "Herself as beautiful",
        optionC: "Herself as a child",
        correctAnswer: "Herself as beautiful",
      }),
      shuffleOptions({
        question: "How did people usually react to Neela?",
        optionA: "With pity, horror, revulsion",
        optionB: "With happiness",
        optionC: "With friendliness",
        correctAnswer: "With pity, horror, revulsion",
      }),
      shuffleOptions({
        question: "What did Neela cry out after seeing the dream mirror?",
        optionA: "“I am ugly.”",
        optionB: "“I look like a goddess.”",
        optionC: "“I am an angel.”",
        correctAnswer: "“I look like a goddess.”",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Neela always stood ______ in her class.",
        optionA: "second",
        optionB: "first",
        optionC: "last",
        correctAnswer: "first",
      }),
      shuffleOptions({
        question: "Neela hid her face in her ______.",
        optionA: "scarf",
        optionB: "palms",
        optionC: "notebook",
        correctAnswer: "palms",
      }),
      shuffleOptions({
        question: "She had only a ______ where her left eye should have been.",
        optionA: "mark",
        optionB: "slit",
        optionC: "scar",
        correctAnswer: "slit",
      }),
      shuffleOptions({
        question: "People showed pity, horror and ______ in their eyes.",
        optionA: "joy",
        optionB: "revulsion",
        optionC: "surprise",
        correctAnswer: "revulsion",
      }),
      shuffleOptions({
        question: "Neela longed for a real ______.",
        optionA: "friend",
        optionB: "book",
        optionC: "teacher",
        correctAnswer: "friend",
      }),
      shuffleOptions({
        question: "The swan told Neela she was ______ inside.",
        optionA: "ugly",
        optionB: "beautiful",
        optionC: "ordinary",
        correctAnswer: "beautiful",
      }),
      shuffleOptions({
        question: "The swan showed Neela a ______ mirror.",
        optionA: "round",
        optionB: "broken",
        optionC: "magic",
        correctAnswer: "magic",
      }),
      shuffleOptions({
        question: "Neela’s scar was still there, but her face was ______.",
        optionA: "glowing",
        optionB: "dull",
        optionC: "pale",
        correctAnswer: "glowing",
      }),
      shuffleOptions({
        question: "Neela’s good qualities made her look like a ______.",
        optionA: "goddess",
        optionB: "queen",
        optionC: "fairy",
        correctAnswer: "goddess",
      }),
      shuffleOptions({
        question: "The children ______ when Neela’s name was taken in comparison.",
        optionA: "cried",
        optionB: "giggled",
        optionC: "clapped",
        correctAnswer: "giggled",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Neela was a lazy student.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neela’s classmates always supported her.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neela was a good runner.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "People accepted Neela happily.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Neela felt like an outcaste.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A swan appeared in her dream.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The swan told Neela she was beautiful inside.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Neela saw herself ugly in the magic mirror.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "When Neela woke up, her scar disappeared.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The story teaches us that beauty lies within.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
