export const chapter = "Chapter - 8: Web Browsing";
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
        question: "Which program allows users to access and view websites on the internet?",
        optionA: "Web Browser",
        optionB: "Web Page",
        optionC: "Hyperlink",
        correctAnswer: "Web Browser",
      }),
      shuffleOptions({
        question: "What is the first page of any website called?",
        optionA: "Index Page",
        optionB: "Home Page",
        optionC: "Status Page",
        correctAnswer: "Home Page",
      }),
      shuffleOptions({
        question: "Which bar shows the address of the current web page?",
        optionA: "Status Bar",
        optionB: "Address Bar",
        optionC: "Tool Bar",
        correctAnswer: "Address Bar",
      }),
      shuffleOptions({
        question: "Which of the following connects one page of a website to another?",
        optionA: "Hyperlink",
        optionB: "HTML",
        optionC: "Search Engine",
        correctAnswer: "Hyperlink",
      }),
      shuffleOptions({
        question: "Which is the largest search engine used for finding information online?",
        optionA: "Yahoo",
        optionB: "Bing",
        optionC: "Google",
        correctAnswer: "Google",
      }),
      shuffleOptions({
        question: "Which bar displays the progress of loading a webpage?",
        optionA: "Title Bar",
        optionB: "Status Bar",
        optionC: "Link Bar",
        correctAnswer: "Status Bar",
      }),
      shuffleOptions({
        question: "Which part of the web browser window displays the main content?",
        optionA: "Content Area",
        optionB: "Address Bar",
        optionC: "Menu Bar",
        correctAnswer: "Content Area",
      }),
      shuffleOptions({
        question: "The process of buying or selling goods and services online is called—",
        optionA: "E-commerce",
        optionB: "E-banking",
        optionC: "Social Networking",
        correctAnswer: "E-commerce",
      }),
      shuffleOptions({
        question: "The non-linear medium of information that includes text, images, and videos is known as—",
        optionA: "Hypermedia",
        optionB: "Hyperlink",
        optionC: "Homepage",
        correctAnswer: "Hypermedia",
      }),
      shuffleOptions({
        question: "Which bar contains shortcut buttons for quick internet access?",
        optionA: "Link Bar",
        optionB: "Status Bar",
        optionC: "Address Bar",
        correctAnswer: "Link Bar",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The first page of a website is called a _______.",
        optionA: "Web Page",
        optionB: "Home Page",
        optionC: "Title Page",
        correctAnswer: "Home Page",
      }),
      shuffleOptions({
        question: "_______ provides the unique address for a file on the internet.",
        optionA: "URL",
        optionB: "WWW",
        optionC: "HTML",
        correctAnswer: "URL",
      }),
      shuffleOptions({
        question: "The bar that shows the title of the webpage currently open is the _______.",
        optionA: "Title Bar",
        optionB: "Address Bar",
        optionC: "Status Bar",
        correctAnswer: "Title Bar",
      }),
      shuffleOptions({
        question: "_______ is used to display websites and surf the internet.",
        optionA: "Web Browser",
        optionB: "Search Engine",
        optionC: "Link Bar",
        correctAnswer: "Web Browser",
      }),
      shuffleOptions({
        question: "The _______ bar contains buttons like Back, Refresh, and Stop.",
        optionA: "Status",
        optionB: "Tool",
        optionC: "Address",
        correctAnswer: "Tool",
      }),
      shuffleOptions({
        question: "The unique address of a webpage is called its _______.",
        optionA: "URL",
        optionB: "Page Link",
        optionC: "Browser Path",
        correctAnswer: "URL",
      }),
      shuffleOptions({
        question: "_______ allows users to move quickly from one page to another.",
        optionA: "Hyperlink",
        optionB: "Hypertext",
        optionC: "Shortcut",
        correctAnswer: "Hyperlink",
      }),
      shuffleOptions({
        question: "_______ is a non-linear medium containing text, audio, and video.",
        optionA: "Link Bar",
        optionB: "Homepage",
        optionC: "Hypermedia",
        correctAnswer: "Hypermedia",
      }),
      shuffleOptions({
        question: "_______ helps users perform banking transactions online.",
        optionA: "E-banking",
        optionB: "E-commerce",
        optionC: "Social Networking",
        correctAnswer: "E-banking",
      }),
      shuffleOptions({
        question: "_______ is a popular example of a social networking site.",
        optionA: "Amazon",
        optionB: "Wikipedia",
        optionC: "Facebook",
        correctAnswer: "Facebook",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The title bar appears at the top of the browser window.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Hyperlinks help to connect one web page to another.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The status bar is located at the top of the browser.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Google is a type of web browser.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The tool bar contains buttons like Back and Refresh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The address bar displays the current webpage’s URL.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "E-banking allows people to buy clothes online.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hypermedia includes only text and not images.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The content area displays the main webpage content.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Keeping your browser updated helps protect your computer from online threats.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
