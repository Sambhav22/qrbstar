export const chapter = "Chapter - 9: Cyber World";
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
        question: "What is the main purpose of a cyber attack?",
        optionA: "To improve system speed",
        optionB: "To damage or disrupt a computer network",
        optionC: "To install games",
        correctAnswer: "To damage or disrupt a computer network",
      }),
      shuffleOptions({
        question: "Which attack involves tricking people into revealing confidential information?",
        optionA: "Syntactic attack",
        optionB: "Semantic attack",
        optionC: "Hardware attack",
        correctAnswer: "Semantic attack",
      }),
      shuffleOptions({
        question: "Which harmful program can spread through networks and damage files?",
        optionA: "Spreadsheet",
        optionB: "Worm",
        optionC: "Virus",
        correctAnswer: "Virus",
      }),
      shuffleOptions({
        question: "What does a logic bomb do when triggered?",
        optionA: "Repairs software",
        optionB: "Executes a malicious task",
        optionC: "Cleans the system",
        correctAnswer: "Executes a malicious task",
      }),
      shuffleOptions({
        question: "Which cyber crime involves gaining access to a system without permission?",
        optionA: "Hacking",
        optionB: "Browsing",
        optionC: "Downloading",
        correctAnswer: "Hacking",
      }),
      shuffleOptions({
        question: "Which method is used to extract passwords through fake emails?",
        optionA: "Phishing",
        optionB: "Monitoring",
        optionC: "Coding",
        correctAnswer: "Phishing",
      }),
      shuffleOptions({
        question: "Which cyber crime involves sending large numbers of useless emails to crash an account?",
        optionA: "Email bombing",
        optionB: "Cyber stalking",
        optionC: "Virus dissemination",
        correctAnswer: "Email bombing",
      }),
      shuffleOptions({
        question: "Which activity involves following a person online and harvesting information?",
        optionA: "Net surfing",
        optionB: "Cyber stalking",
        optionC: "Bookmarking",
        correctAnswer: "Cyber stalking",
      }),
      shuffleOptions({
        question: "Which tool should be turned on to stop fraudulent activities?",
        optionA: "Paint tool",
        optionB: "Firewall",
        optionC: "Media player",
        correctAnswer: "Firewall",
      }),
      shuffleOptions({
        question: "Which software must be updated regularly to remain effective?",
        optionA: "Antivirus software",
        optionB: "Audio software",
        optionC: "Video player",
        correctAnswer: "Antivirus software",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A cyber attack may originate from an ______ source.",
        optionA: "authorised",
        optionB: "unknown",
        optionC: "fixed",
        correctAnswer: "unknown",
      }),
      shuffleOptions({
        question: "Cyber crime is also known as ______ crime.",
        optionA: "computer",
        optionB: "manual",
        optionC: "printed",
        correctAnswer: "computer",
      }),
      shuffleOptions({
        question: "Spyware secretly ______ user activity.",
        optionA: "deletes",
        optionB: "monitors",
        optionC: "slows",
        correctAnswer: "monitors",
      }),
      shuffleOptions({
        question: "A virus can ______ files in a computer.",
        optionA: "infect",
        optionB: "protect",
        optionC: "rename",
        correctAnswer: "infect",
      }),
      shuffleOptions({
        question: "A logic bomb acts only when a specific ______ is met.",
        optionA: "colour",
        optionB: "condition",
        optionC: "command",
        correctAnswer: "condition",
      }),
      shuffleOptions({
        question: "Cyber law ensures security and ______ of online information.",
        optionA: "confidentiality",
        optionB: "speed",
        optionC: "brightness",
        correctAnswer: "confidentiality",
      }),
      shuffleOptions({
        question: "Cyber ethics are moral ______ for computer use.",
        optionA: "machines",
        optionB: "principles",
        optionC: "windows",
        correctAnswer: "principles",
      }),
      shuffleOptions({
        question: "Users must avoid connecting to ______ Wi-Fi networks.",
        optionA: "secure",
        optionB: "free",
        optionC: "unsecure",
        correctAnswer: "unsecure",
      }),
      shuffleOptions({
        question: "Antivirus software must be ______ regularly.",
        optionA: "updated",
        optionB: "deleted",
        optionC: "renamed",
        correctAnswer: "updated",
      }),
      shuffleOptions({
        question: "Backing up data protects documents from ______ loss.",
        optionA: "temporary",
        optionB: "permanent",
        optionC: "slow",
        correctAnswer: "permanent",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Cyber attacks can damage or disrupt communication networks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Semantic attacks are also called social engineering attacks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A cyber stalker follows a victim physically.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Logic bombs remain inactive until triggered.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Phishing is used to extract confidential information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cyber law deals with the legal aspects of the internet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Users should make duplicate copies of paid software without permission.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Viruses can modify or delete stored data.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Firewalls help protect computers from fraudulent activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cyber ethics encourage responsible behaviour while using computers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
