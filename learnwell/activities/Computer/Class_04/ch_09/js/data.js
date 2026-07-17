export const chapter = "Chapter - 9: Software Licensing";
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
        question: "What gives legal permission to use a software?",
        optionA: "Licence",
        optionB: "Password",
        optionC: "Copyright",
        correctAnswer: "Licence",
      }),
      shuffleOptions({
        question: "Which software shows pop-up advertisements while working on a computer?",
        optionA: "Adware",
        optionB: "Shareware",
        optionC: "Freeware",
        correctAnswer: "Adware",
      }),
      shuffleOptions({
        question: "Which software can damage your system by harmful codes?",
        optionA: "Malware",
        optionB: "Open source",
        optionC: "Freeware",
        correctAnswer: "Malware",
      }),
      shuffleOptions({
        question: "Which type of software is available for a limited time before expiring?",
        optionA: "Trial software",
        optionB: "Commercial software",
        optionC: "Shareware",
        correctAnswer: "Trial software",
      }),
      shuffleOptions({
        question: "Which software asks users to register after trying it?",
        optionA: "Shareware",
        optionB: "Freeware",
        optionC: "Adware",
        correctAnswer: "Shareware",
      }),
      shuffleOptions({
        question: "Which software allows people to modify its source code?",
        optionA: "Open source software",
        optionB: "Commercial software",
        optionC: "Trial software",
        correctAnswer: "Open source software",
      }),
      shuffleOptions({
        question: "Which software is sold for making professional projects?",
        optionA: "Commercial software",
        optionB: "Freeware",
        optionC: "Adware",
        correctAnswer: "Commercial software",
      }),
      shuffleOptions({
        question: "What is it called when someone copies licensed software without permission?",
        optionA: "Software piracy",
        optionB: "Software policy",
        optionC: "Software sharing",
        correctAnswer: "Software piracy",
      }),
      shuffleOptions({
        question: "What do software licences provide to users?",
        optionA: "Rights and restrictions",
        optionB: "Hardware details",
        optionC: "Internet access",
        correctAnswer: "Rights and restrictions",
      }),
      shuffleOptions({
        question: "Why should we avoid using pirated software?",
        optionA: "It is illegal and unsafe",
        optionB: "It is faster",
        optionC: "It is free",
        correctAnswer: "It is illegal and unsafe",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Making illegal copies of software is called _______.",
        optionA: "Piracy",
        optionB: "Marketing",
        optionC: "Coding",
        correctAnswer: "Piracy",
      }),
      shuffleOptions({
        question: "_______ software displays advertisements on screen.",
        optionA: "Adware",
        optionB: "Malware",
        optionC: "Trial",
        correctAnswer: "Adware",
      }),
      shuffleOptions({
        question: "_______ software may harm or corrupt computer files.",
        optionA: "Malware",
        optionB: "Shareware",
        optionC: "Freeware",
        correctAnswer: "Malware",
      }),
      shuffleOptions({
        question: "_______ software provides a limited-period version for testing.",
        optionA: "Trial",
        optionB: "Commercial",
        optionC: "Freeware",
        correctAnswer: "Trial",
      }),
      shuffleOptions({
        question: "_______ software asks the user to register after using it.",
        optionA: "Shareware",
        optionB: "Open source",
        optionC: "Freeware",
        correctAnswer: "Shareware",
      }),
      shuffleOptions({
        question: "_______ software allows the public to see and change its code.",
        optionA: "Open source",
        optionB: "Commercial",
        optionC: "Trial",
        correctAnswer: "Open source",
      }),
      shuffleOptions({
        question: "_______ software is free to use but cannot be sold.",
        optionA: "Freeware",
        optionB: "Adware",
        optionC: "Shareware",
        correctAnswer: "Freeware",
      }),
      shuffleOptions({
        question: "A software licence protects the _______ rights of the developer.",
        optionA: "Legal",
        optionB: "Hardware",
        optionC: "Sharing",
        correctAnswer: "Legal",
      }),
      shuffleOptions({
        question: "_______ software is created mainly for business and projects.",
        optionA: "Commercial",
        optionB: "Freeware",
        optionC: "Adware",
        correctAnswer: "Commercial",
      }),
      shuffleOptions({
        question: "Using unlicensed software is _______ under law.",
        optionA: "Punishable",
        optionB: "Rewarded",
        optionC: "Ignored",
        correctAnswer: "Punishable",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adware shows unwanted pop-up ads on a computer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Trial software can be used forever without expiry.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shareware is distributed for free but registration is expected.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Using unlicensed software is legal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Freeware can be modified and resold by anyone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Open source software provides access to its source code.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Commercial software requires a paid licence for use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Malware keeps your computer safe from viruses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Software piracy means copying licensed software illegally.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Licensed software ensures legal and safe use.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
