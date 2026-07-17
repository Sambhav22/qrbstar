export const chapter = "Chapter - 3: Some Anecdotes from Dr. A.P.J. Abdul Kalam";
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
        question: "Dr. Kalam was born on –",
        optionA: "15 October 1931",
        optionB: "14 November 1932",
        optionC: "26 January 1930",
        correctAnswer: "15 October 1931",
      }),
      shuffleOptions({
        question: "Who was Samsuddin to Kalam?",
        optionA: "Cousin",
        optionB: "Uncle",
        optionC: "Brother",
        correctAnswer: "Cousin",
      }),
      shuffleOptions({
        question: "Which war created sudden demand for tamarind seeds?",
        optionA: "First World War",
        optionB: "Second World War",
        optionC: "Indo-Pak War",
        correctAnswer: "Second World War",
      }),
      shuffleOptions({
        question: "How did Kalam earn his first wages?",
        optionA: "Selling fish",
        optionB: "Catching newspaper bundles",
        optionC: "Selling tamarind seeds",
        correctAnswer: "Catching newspaper bundles",
      }),
      shuffleOptions({
        question: "Who gave permission with a sleek smile to a scientist to leave early?",
        optionA: "Scientist’s manager",
        optionB: "Dr. Kalam",
        optionC: "Scientist’s wife",
        correctAnswer: "Dr. Kalam",
      }),
      shuffleOptions({
        question: "Where did the orthopaedic surgeon meet Kalam?",
        optionA: "Nizam Institute of Medical Sciences",
        optionB: "Madras Medical College",
        optionC: "Delhi AIIMS",
        correctAnswer: "Nizam Institute of Medical Sciences",
      }),
      shuffleOptions({
        question: "Sowbhagya Enterprises gifted Kalam a –",
        optionA: "Mixer",
        optionB: "Grinder",
        optionC: "Pressure cooker",
        correctAnswer: "Grinder",
      }),
      shuffleOptions({
        question: "How much did Kalam pay for the grinder?",
        optionA: "Rs 3,500",
        optionB: "Rs 4,850",
        optionC: "Rs 5,000",
        correctAnswer: "Rs 4,850",
      }),
      shuffleOptions({
        question: "Where was the state-level tech fest organised?",
        optionA: "A medical college",
        optionB: "An engineering college",
        optionC: "A school",
        correctAnswer: "An engineering college",
      }),
      shuffleOptions({
        question: "How long did Kalam observe the projects in the expo?",
        optionA: "1 hour",
        optionB: "2.5 hours",
        optionC: "4 hours",
        correctAnswer: "2.5 hours",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kalam is popularly known as the ______ of India.",
        optionA: "Missile Man",
        optionB: "Computer Man",
        optionC: "Science Man",
        correctAnswer: "Missile Man",
      }),
      shuffleOptions({
        question: "Kalam earned his first wage as a ______ boy.",
        optionA: "Shopkeeper",
        optionB: "Newspaper",
        optionC: "Cycle",
        correctAnswer: "Newspaper",
      }),
      shuffleOptions({
        question: "The light material developed for Agni was called ______.",
        optionA: "Steel",
        optionB: "Carbon-carbon",
        optionC: "Plastic",
        correctAnswer: "Carbon-carbon",
      }),
      shuffleOptions({
        question: "Kalam’s cousin Samsuddin was a distributor of ______.",
        optionA: "Vegetables",
        optionB: "Newspapers",
        optionC: "Books",
        correctAnswer: "Newspapers",
      }),
      shuffleOptions({
        question: "The grinder gifted to Kalam cost Rs ______.",
        optionA: "3,000",
        optionB: "4,850",
        optionC: "5,500",
        correctAnswer: "4,850",
      }),
      shuffleOptions({
        question: "Science should eliminate ______.",
        optionA: "Pain",
        optionB: "Bliss",
        optionC: "Happiness",
        correctAnswer: "Pain",
      }),
      shuffleOptions({
        question: "Dr. Kalam took the scientist’s ______ to the exhibition.",
        optionA: "Wife",
        optionB: "Child",
        optionC: "Friend",
        correctAnswer: "Child",
      }),
      shuffleOptions({
        question: "The failed project group used ordinary ______ for their model.",
        optionA: "Toys",
        optionB: "Chairs",
        optionC: "Machines",
        correctAnswer: "Toys",
      }),
      shuffleOptions({
        question: "Kalam worked with nearly ______ scientists in one project.",
        optionA: "50",
        optionB: "70",
        optionC: "100",
        correctAnswer: "70",
      }),
      shuffleOptions({
        question: "The surgeon requested Kalam to help his ______ patients.",
        optionA: "Cardiac",
        optionB: "Orthopaedic",
        optionC: "Dental",
        correctAnswer: "Orthopaedic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Dr. Kalam is called the Missile Man of India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Samsuddin was Kalam’s uncle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kalam earned his first money selling tamarind seeds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kalam himself took the scientist’s child to the exhibition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kalam accepted the grinder as a free gift.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sowbhagya Enterprises immediately encashed Kalam’s cheque.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Kalam believed in integration of scientific fields.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The tech fest allowed only working models.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Kalam ignored the failed project at the fest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Teachers and students clapped when the failed project worked.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
