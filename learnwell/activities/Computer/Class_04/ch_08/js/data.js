export const chapter = "Chapter - 8: Internet";
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
        question: "Who is known as the founder of the World Wide Web?",
        optionA: "Bill Gates",
        optionB: "Tim Berners-Lee",
        optionC: "Charles Babbage",
        correctAnswer: "Tim Berners-Lee",
      }),
      shuffleOptions({
        question: "Which device connects a computer to a telephone line?",
        optionA: "Printer",
        optionB: "Modem",
        optionC: "Speaker",
        correctAnswer: "Modem",
      }),
      shuffleOptions({
        question: "Which company provides Internet services?",
        optionA: "BSNL",
        optionB: "Microsoft",
        optionC: "Google Chrome",
        correctAnswer: "BSNL",
      }),
      shuffleOptions({
        question: "The first page that appears when a website opens is called the ______.",
        optionA: "Web page",
        optionB: "Home page",
        optionC: "Contact page",
        correctAnswer: "Home page",
      }),
      shuffleOptions({
        question: "The unique address of a website is called a ______.",
        optionA: "URL",
        optionB: "WWW",
        optionC: "ISP",
        correctAnswer: "URL",
      }),
      shuffleOptions({
        question: "Which of the following is an example of a web browser?",
        optionA: "Opera Mini",
        optionB: "Gmail",
        optionC: "Yahoo",
        correctAnswer: "Opera Mini",
      }),
      shuffleOptions({
        question: "Internet stands for ______.",
        optionA: "Internal Network",
        optionB: "Interconnected Network",
        optionC: "International Network",
        correctAnswer: "Interconnected Network",
      }),
      shuffleOptions({
        question: "Which type of connection does not use wires?",
        optionA: "Wireless",
        optionB: "Wired",
        optionC: "Dial-up",
        correctAnswer: "Wireless",
      }),
      shuffleOptions({
        question: "What is required to open and view websites on the Internet?",
        optionA: "Web browser",
        optionB: "Word Processor",
        optionC: "Spreadsheet",
        correctAnswer: "Web browser",
      }),
      shuffleOptions({
        question: "Which of the following allows communication through e-mail?",
        optionA: "Internet",
        optionB: "Notepad",
        optionC: "Scanner",
        correctAnswer: "Internet",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Internet connects computers all over the _______.",
        optionA: "country",
        optionB: "world",
        optionC: "building",
        correctAnswer: "world",
      }),
      shuffleOptions({
        question: "A ________ stands for Modulator-Demodulator.",
        optionA: "CPU",
        optionB: "Modem",
        optionC: "Router",
        correctAnswer: "Modem",
      }),
      shuffleOptions({
        question: "A collection of web pages is called a ________.",
        optionA: "Website",
        optionB: "Web Browser",
        optionC: "Folder",
        correctAnswer: "Website",
      }),
      shuffleOptions({
        question: "The unique address of a website is known as ________.",
        optionA: "ISP",
        optionB: "URL",
        optionC: "Modem",
        correctAnswer: "URL",
      }),
      shuffleOptions({
        question: "A ________ is used to open and view information on websites.",
        optionA: "Web Browser",
        optionB: "CPU",
        optionC: "Scanner",
        correctAnswer: "Web Browser",
      }),
      shuffleOptions({
        question: "The first page of a website is called its ________.",
        optionA: "Home Page",
        optionB: "Last Page",
        optionC: "Menu Page",
        correctAnswer: "Home Page",
      }),
      shuffleOptions({
        question: "________ provides Internet connection for a monthly charge.",
        optionA: "ISP",
        optionB: "CPU",
        optionC: "USB",
        correctAnswer: "ISP",
      }),
      shuffleOptions({
        question: "________ is used to exchange messages with people worldwide.",
        optionA: "E-mail",
        optionB: "Calculator",
        optionC: "Paint",
        correctAnswer: "E-mail",
      }),
      shuffleOptions({
        question: "Online education through ________ websites makes learning easy.",
        optionA: "E-learning",
        optionB: "Gaming",
        optionC: "Printing",
        correctAnswer: "E-learning",
      }),
      shuffleOptions({
        question: "________ helps you connect with others on the Internet.",
        optionA: "Social Networking",
        optionB: "Text Editing",
        optionC: "Typing",
        correctAnswer: "Social Networking",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Internet connects millions of computers across the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Modem is required to connect a computer to the Internet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "URL is the same for every website.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Google Chrome is a web browser.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Internet can be used for shopping and banking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "ISP means Internet Service Provider.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Home Page is the main page of a website.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Modem stands for Modulator–Demodulator.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tim Berners-Lee invented the World Wide Web.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Internet is used only for sending letters by post.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
