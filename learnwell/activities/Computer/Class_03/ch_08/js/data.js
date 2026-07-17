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
        question: "Which device connects a computer to the Internet?",
        optionA: "Keyboard",
        optionB: "Modem",
        optionC: "CPU",
        correctAnswer: "Modem",
      }),
      shuffleOptions({
        question: "Which of these is a web browser?",
        optionA: "Google Chrome",
        optionB: "Google",
        optionC: "Yahoo!",
        correctAnswer: "Google Chrome",
      }),
      shuffleOptions({
        question: "What helps us to search for information on the Internet?",
        optionA: "Search engine",
        optionB: "Calculator",
        optionC: "Paint",
        correctAnswer: "Search engine",
      }),
      shuffleOptions({
        question: "Which of these is an example of a search engine?",
        optionA: "Yahoo!",
        optionB: "Paint",
        optionC: "PowerPoint",
        correctAnswer: "Yahoo!",
      }),
      shuffleOptions({
        question: "Where do we type the website address in a browser?",
        optionA: "Address bar",
        optionB: "Title bar",
        optionC: "Status bar",
        correctAnswer: "Address bar",
      }),
      shuffleOptions({
        question: "Which part of the computer shows the web page?",
        optionA: "Monitor",
        optionB: "Mouse",
        optionC: "CPU",
        correctAnswer: "Monitor",
      }),
      shuffleOptions({
        question: "Which of these provides worldwide information?",
        optionA: "Internet",
        optionB: "MS Word",
        optionC: "Calculator",
        correctAnswer: "Internet",
      }),
      shuffleOptions({
        question: "Which of these is needed to start a browser?",
        optionA: "Double-click the browser icon",
        optionB: "Switch off the computer",
        optionC: "Type in Word",
        correctAnswer: "Double-click the browser icon",
      }),
      shuffleOptions({
        question: "What is the full form of WWW?",
        optionA: "World Wide Web",
        optionB: "World Web Wide",
        optionC: "Web World Wide",
        correctAnswer: "World Wide Web",
      }),
      shuffleOptions({
        question: "What is the use of search engines?",
        optionA: "To find information",
        optionB: "To print documents",
        optionC: "To shut down computer",
        correctAnswer: "To find information",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Internet is a network of ______.",
        optionA: "computers",
        optionB: "machines",
        optionC: "cables",
        correctAnswer: "computers",
      }),
      shuffleOptions({
        question: "A web browser helps to open a ______.",
        optionA: "web page",
        optionB: "folder",
        optionC: "file",
        correctAnswer: "web page",
      }),
      shuffleOptions({
        question: "Google Chrome and Mozilla Firefox are ______.",
        optionA: "web browsers",
        optionB: "search engines",
        optionC: "websites",
        correctAnswer: "web browsers",
      }),
      shuffleOptions({
        question: "Yahoo! and Bing are examples of ______.",
        optionA: "search engines",
        optionB: "browsers",
        optionC: "files",
        correctAnswer: "search engines",
      }),
      shuffleOptions({
        question: "To connect with the Internet, we need a ______.",
        optionA: "modem",
        optionB: "speaker",
        optionC: "scanner",
        correctAnswer: "modem",
      }),
      shuffleOptions({
        question: "The website name is written in the ______ bar.",
        optionA: "address",
        optionB: "title",
        optionC: "menu",
        correctAnswer: "address",
      }),
      shuffleOptions({
        question: "We can search information through different ______.",
        optionA: "search engines",
        optionB: "folders",
        optionC: "drives",
        correctAnswer: "search engines",
      }),
      shuffleOptions({
        question: "A ______ displays a web page on the screen.",
        optionA: "browser",
        optionB: "printer",
        optionC: "mouse",
        correctAnswer: "browser",
      }),
      shuffleOptions({
        question: "Internet helps people to ______ and share information.",
        optionA: "communicate",
        optionB: "sleep",
        optionC: "fight",
        correctAnswer: "communicate",
      }),
      shuffleOptions({
        question: "The short form of World Wide Web is ______.",
        optionA: "WWW",
        optionB: "WBW",
        optionC: "WSW",
        correctAnswer: "WWW",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Internet connects computers across the world.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A modem is used for Internet connection.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Google Chrome is a search engine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Yahoo! is a search engine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "We can search any information on the Internet.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Internet cannot be used for education.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mozilla Firefox is a web browser.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Internet is a local network within one city only.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Search engines are used to find information.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A web page appears when we press Enter after typing a website.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
