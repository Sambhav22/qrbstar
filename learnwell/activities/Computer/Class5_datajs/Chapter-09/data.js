export const chapter = "Chapter - 9: Internet";
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
        question: "Which organisation first developed the idea of the Internet?",
        optionA: "NASA",
        optionB: "ARPA",
        optionC: "Microsoft",
        correctAnswer: "ARPA",
      }),
      shuffleOptions({
        question: "In which year was ARPANET created?",
        optionA: "1950",
        optionB: "1969",
        optionC: "1975",
        correctAnswer: "1969",
      }),
      shuffleOptions({
        question: "What does the Internet mainly allow us to do?",
        optionA: "Travel",
        optionB: "Communicate",
        optionC: "Cook",
        correctAnswer: "Communicate",
      }),
      shuffleOptions({
        question: "Which of these is not an e-mail service provider?",
        optionA: "Gmail",
        optionB: "Zoho",
        optionC: "YouTube",
        correctAnswer: "YouTube",
      }),
      shuffleOptions({
        question: "Which field in an e-mail lets you type your message?",
        optionA: "Inbox",
        optionB: "Text field",
        optionC: "Subject",
        correctAnswer: "Text field",
      }),
      shuffleOptions({
        question: "What is the full form of “Cc”?",
        optionA: "Carbon copy",
        optionB: "Closed copy",
        optionC: "Clear copy",
        correctAnswer: "Carbon copy",
      }),
      shuffleOptions({
        question: "What can you send through attachments in an e-mail?",
        optionA: "Files and pictures",
        optionB: "Voice notes",
        optionC: "Passwords",
        correctAnswer: "Files and pictures",
      }),
      shuffleOptions({
        question: "What does “Bcc” stand for?",
        optionA: "Background carbon copy",
        optionB: "Blind carbon copy",
        optionC: "Basic carbon copy",
        correctAnswer: "Blind carbon copy",
      }),
      shuffleOptions({
        question: "Why should you log out after using your e-mail?",
        optionA: "To save battery",
        optionB: "To keep account secure",
        optionC: "To delete mail",
        correctAnswer: "To keep account secure",
      }),
      shuffleOptions({
        question: "Which of the following helps to express emotions in messages?",
        optionA: "Animations",
        optionB: "Emoticons",
        optionC: "Attachments",
        correctAnswer: "Emoticons",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Internet connects millions of ________ around the world.",
        optionA: "computers",
        optionB: "televisions",
        optionC: "mobiles",
        correctAnswer: "computers",
      }),
      shuffleOptions({
        question: "The first form of the Internet was called ________.",
        optionA: "World Wide Web",
        optionB: "ARPANET",
        optionC: "Intranet",
        correctAnswer: "ARPANET",
      }),
      shuffleOptions({
        question: "________ is the short form of electronic mail.",
        optionA: "Mail",
        optionB: "E-mail",
        optionC: "Message",
        correctAnswer: "E-mail",
      }),
      shuffleOptions({
        question: "The Inbox shows the list of ________ e-mails.",
        optionA: "sent",
        optionB: "received",
        optionC: "deleted",
        correctAnswer: "received",
      }),
      shuffleOptions({
        question: "The ________ field of an e-mail tells what the message is about.",
        optionA: "Subject",
        optionB: "Cc",
        optionC: "Inbox",
        correctAnswer: "Subject",
      }),
      shuffleOptions({
        question: "We can watch movies or play games on the ________.",
        optionA: "Internet",
        optionB: "Television",
        optionC: "Radio",
        correctAnswer: "Internet",
      }),
      shuffleOptions({
        question: "________ helps to send a copy of a mail to another person.",
        optionA: "Bcc",
        optionB: "Cc",
        optionC: "Draft",
        correctAnswer: "Cc",
      }),
      shuffleOptions({
        question: "To send documents with a mail, we use ________.",
        optionA: "attachments",
        optionB: "filters",
        optionC: "folders",
        correctAnswer: "attachments",
      }),
      shuffleOptions({
        question: "________ are used in a message to show feelings or expressions.",
        optionA: "Emoticons",
        optionB: "Animations",
        optionC: "Attachments",
        correctAnswer: "Emoticons",
      }),
      shuffleOptions({
        question: "After using an e-mail account, we must always ________.",
        optionA: "Log out",
        optionB: "Refresh",
        optionC: "Close browser",
        correctAnswer: "Log out",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Internet is a network connecting computers worldwide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The first Internet connection was established in 1969.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Communication is the most important use of the Internet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gmail is an e-mail service provider.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Cc field in an e-mail hides the names of receivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "You can attach more than one file with a mail.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Emoticons are used to express emotions in text messages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "It is safe to leave your account without logging out.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Internet can be used for online learning and research.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Attachments are only used to send text.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
