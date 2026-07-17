export const chapter = "Chapter - 3: Uses of Computer";
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
        question: "Where is a computer used to store patients’ information?",
        optionA: "At home",
        optionB: "In hospitals",
        optionC: "In shops",
        correctAnswer: "In hospitals",
      }),
      shuffleOptions({
        question: "What does a computer help teachers to do?",
        optionA: "Teach subjects",
        optionB: "Grow plants",
        optionC: "Cook food",
        correctAnswer: "Teach subjects",
      }),
      shuffleOptions({
        question: "Where can we watch movies on a computer?",
        optionA: "At school",
        optionB: "At home",
        optionC: "At hospital",
        correctAnswer: "At home",
      }),
      shuffleOptions({
        question: "What helps to send important messages in offices?",
        optionA: "Letters",
        optionB: "E-mails",
        optionC: "Books",
        correctAnswer: "E-mails",
      }),
      shuffleOptions({
        question: "What kind of machine is a computer?",
        optionA: "Slow",
        optionB: "Wonderful",
        optionC: "Lazy",
        correctAnswer: "Wonderful",
      }),
      shuffleOptions({
        question: "What can we listen to on a computer?",
        optionA: "Music",
        optionB: "Stories",
        optionC: "Noise",
        correctAnswer: "Music",
      }),
      shuffleOptions({
        question: "What helps in preparing fee receipts?",
        optionA: "Blackboard",
        optionB: "Computer",
        optionC: "Calendar",
        correctAnswer: "Computer",
      }),
      shuffleOptions({
        question: "In which place does a computer make official work easy?",
        optionA: "Office",
        optionB: "Garden",
        optionC: "Playground",
        correctAnswer: "Office",
      }),
      shuffleOptions({
        question: "What helps doctors to record data of medicines?",
        optionA: "Notebook",
        optionB: "Computer",
        optionC: "Telephone",
        correctAnswer: "Computer",
      }),
      shuffleOptions({
        question: "Where are computers used to make bills?",
        optionA: "Parks",
        optionB: "Shops",
        optionC: "Schools",
        correctAnswer: "Shops",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A computer is a very _______ machine.",
        optionA: "Wonderful",
        optionB: "Noisy",
        optionC: "Heavy",
        correctAnswer: "Wonderful",
      }),
      shuffleOptions({
        question: "Computers are used in _______ to teach students.",
        optionA: "Schools",
        optionB: "Offices",
        optionC: "Parks",
        correctAnswer: "Schools",
      }),
      shuffleOptions({
        question: "At home, computers are used to watch _______.",
        optionA: "Movies",
        optionB: "Animals",
        optionC: "Windows",
        correctAnswer: "Movies",
      }),
      shuffleOptions({
        question: "Computers are used to send messages through _______.",
        optionA: "E-mails",
        optionB: "Toys",
        optionC: "Boxes",
        correctAnswer: "E-mails",
      }),
      shuffleOptions({
        question: "In hospitals, computers store information of _______.",
        optionA: "Patients",
        optionB: "Teachers",
        optionC: "Drivers",
        correctAnswer: "Patients",
      }),
      shuffleOptions({
        question: "Computers are used in _______ to make report cards.",
        optionA: "Schools",
        optionB: "Hospitals",
        optionC: "Homes",
        correctAnswer: "Schools",
      }),
      shuffleOptions({
        question: "Computers help us to listen to _______.",
        optionA: "Music",
        optionB: "Bells",
        optionC: "Pencils",
        correctAnswer: "Music",
      }),
      shuffleOptions({
        question: "Computers are used to make _______ in shops and malls.",
        optionA: "Bills",
        optionB: "Toys",
        optionC: "Games",
        correctAnswer: "Bills",
      }),
      shuffleOptions({
        question: "Computers can remember lots of _______.",
        optionA: "Things",
        optionB: "Colours",
        optionC: "Chairs",
        correctAnswer: "Things",
      }),
      shuffleOptions({
        question: "Computers make our work _______.",
        optionA: "Easy",
        optionB: "Dirty",
        optionC: "Slow",
        correctAnswer: "Easy",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Computers are used to teach students in schools.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers help to store information of patients in hospitals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers are not used in offices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Computers are used at home to watch movies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers can remember many things.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers are used to make bills in shops and malls.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers create problems in hospitals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Computers help to make report cards in schools.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers help to send messages through e-mails.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Computers are wonderful machines that never make mistakes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
