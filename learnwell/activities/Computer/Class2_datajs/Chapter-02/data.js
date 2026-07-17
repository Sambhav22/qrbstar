export const chapter = "Chapter - 2: Computer in Daily Life";
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
        question: "Which place uses computers to keep records of students?",
        optionA: "Shops",
        optionB: "Schools",
        optionC: "Banks",
        correctAnswer: "Schools",
      }),
      shuffleOptions({
        question: "Which place shows arrival and departure information using computers?",
        optionA: "Airport/Railway station",
        optionB: "Hospital",
        optionC: "Park",
        correctAnswer: "Airport/Railway station",
      }),
      shuffleOptions({
        question: "In which place are computers used to maintain important files and folders?",
        optionA: "Office",
        optionB: "Home",
        optionC: "Bank",
        correctAnswer: "Office",
      }),
      shuffleOptions({
        question: "Where do computers help to keep records of passengers?",
        optionA: "Offices",
        optionB: "Airports/Railway stations",
        optionC: "Homes",
        correctAnswer: "Airports/Railway stations",
      }),
      shuffleOptions({
        question: "At home, which of these is a use of computers mentioned in the chapter?",
        optionA: "Listening to music",
        optionB: "Washing clothes",
        optionC: "Watering plants",
        correctAnswer: "Listening to music",
      }),
      shuffleOptions({
        question: "Which place uses computers for keeping stock data and sales records?",
        optionA: "Hospital",
        optionB: "Shop",
        optionC: "School",
        correctAnswer: "Shop",
      }),
      shuffleOptions({
        question: "Computers help designers to work on which of these?",
        optionA: "Cars",
        optionB: "Trees",
        optionC: "Rivers",
        correctAnswer: "Cars",
      }),
      shuffleOptions({
        question: "Where are computers used to prepare examination papers and related documents?",
        optionA: "Schools",
        optionB: "Banks",
        optionC: "Shops",
        correctAnswer: "Schools",
      }),
      shuffleOptions({
        question: "Which place uses computers for day-to-day transactions?",
        optionA: "Bank",
        optionB: "Garden",
        optionC: "Playground",
        correctAnswer: "Bank",
      }),
      shuffleOptions({
        question: "In which place are computers used to send important messages through email?",
        optionA: "Offices",
        optionB: "Hospitals",
        optionC: "Markets",
        correctAnswer: "Offices",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In offices, computers help to maintain important ______.",
        optionA: "files",
        optionB: "fruits",
        optionC: "fences",
        correctAnswer: "files",
      }),
      shuffleOptions({
        question: "Computers at airports and railway stations provide ______ about trains and flights.",
        optionA: "games",
        optionB: "information",
        optionC: "homework",
        correctAnswer: "information",
      }),
      shuffleOptions({
        question: "Computers in banks record the account details of ______.",
        optionA: "customers",
        optionB: "teachers",
        optionC: "passengers",
        correctAnswer: "customers",
      }),
      shuffleOptions({
        question: "Computers help shops to keep ______ of sales.",
        optionA: "records",
        optionB: "gardens",
        optionC: "bells",
        correctAnswer: "records",
      }),
      shuffleOptions({
        question: "At home, computers can be used to draw ______.",
        optionA: "pictures",
        optionB: "furniture",
        optionC: "roads",
        correctAnswer: "pictures",
      }),
      shuffleOptions({
        question: "Computers at stations keep the ______ of passengers.",
        optionA: "weather",
        optionB: "record",
        optionC: "luggage",
        correctAnswer: "record",
      }),
      shuffleOptions({
        question: "Computers in hospitals prepare medical ______.",
        optionA: "reports",
        optionB: "recipes",
        optionC: "posters",
        correctAnswer: "reports",
      }),
      shuffleOptions({
        question: "Computers help designers to make models of ______.",
        optionA: "buildings",
        optionB: "clouds",
        optionC: "beaches",
        correctAnswer: "buildings",
      }),
      shuffleOptions({
        question: "In schools, computers help in preparing ______ papers.",
        optionA: "examination",
        optionB: "currency",
        optionC: "packing",
        correctAnswer: "examination",
      }),
      shuffleOptions({
        question: "Computers can be used to send messages through ______.",
        optionA: "email",
        optionB: "envelope",
        optionC: "loudspeaker",
        correctAnswer: "email",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Computers in schools are used to keep students’ records.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers at airports show arrival and departure information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers at home are only for studying.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Computers help shops keep records of sales.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers cannot be used to send emails in offices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Computers in banks record customers’ account details.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers help in designing buildings and cars.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers at railway stations are used to prepare food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Computers can be used at home to watch movies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers cannot keep stock data in shops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
