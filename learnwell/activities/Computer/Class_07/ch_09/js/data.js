export const chapter = "Chapter - 9: Internet Services";
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
        question: "Who introduced the term weblog on 17 December 1997?",
        optionA: "Tim Berners-Lee",
        optionB: "Jorn Barger",
        optionC: "Bill Gates",
        correctAnswer: "Jorn Barger",
      }),
      shuffleOptions({
        question: "Which type of blog is written to share travel experiences?",
        optionA: "Travel blog",
        optionB: "Education blog",
        optionC: "Fashion blog",
        correctAnswer: "Travel blog",
      }),
      shuffleOptions({
        question: "Which website provides a free blogging service?",
        optionA: "Wikipedia.org",
        optionB: "Blogger.com",
        optionC: "Yahoo.com",
        correctAnswer: "Blogger.com",
      }),
      shuffleOptions({
        question: "Which popular site is an example of microblogging?",
        optionA: "Twitter",
        optionB: "Instagram",
        optionC: "Gmail",
        correctAnswer: "Twitter",
      }),
      shuffleOptions({
        question: "Which internet service allows you to send an electronic card to friends?",
        optionA: "Mailing list",
        optionB: "Instant messaging",
        optionC: "E-greeting",
        correctAnswer: "E-greeting",
      }),
      shuffleOptions({
        question: "What is the maximum character limit for a microblog post?",
        optionA: "100",
        optionB: "140",
        optionC: "200",
        correctAnswer: "140",
      }),
      shuffleOptions({
        question: "Which of the following enables real-time chatting with webcam and microphone?",
        optionA: "Instant messaging",
        optionB: "E-greeting",
        optionC: "Mailing list",
        correctAnswer: "Instant messaging",
      }),
      shuffleOptions({
        question: "Which online service is called an internet community?",
        optionA: "Blog",
        optionB: "Newsgroup",
        optionC: "Forum",
        correctAnswer: "Newsgroup",
      }),
      shuffleOptions({
        question: "Which service distributes one e-mail to every subscriber in the list?",
        optionA: "Mailing list",
        optionB: "Chat room",
        optionC: "E-card",
        correctAnswer: "Mailing list",
      }),
      shuffleOptions({
        question: "What should never be shared with strangers on social sites?",
        optionA: "Bookmarks",
        optionB: "Photographs of flowers",
        optionC: "Personal information",
        correctAnswer: "Personal information",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A blog is derived from ______.",
        optionA: "betterlog",
        optionB: "weblog",
        optionC: "basiclog",
        correctAnswer: "weblog",
      }),
      shuffleOptions({
        question: "______ blogs are treated as ongoing diaries.",
        optionA: "Personal",
        optionB: "Political",
        optionC: "Travel",
        correctAnswer: "Personal",
      }),
      shuffleOptions({
        question: "Messages on Twitter are called ______.",
        optionA: "tweets",
        optionB: "posts",
        optionC: "cards",
        correctAnswer: "tweets",
      }),
      shuffleOptions({
        question: "E-greetings help to save ______.",
        optionA: "money",
        optionB: "paper",
        optionC: "energy",
        correctAnswer: "paper",
      }),
      shuffleOptions({
        question: "The combination of blogging and instant messaging is ______.",
        optionA: "microblogging",
        optionB: "mailing",
        optionC: "chatting",
        correctAnswer: "microblogging",
      }),
      shuffleOptions({
        question: "Online newspapers are available as ______.",
        optionA: "printed copies",
        optionB: "web pages",
        optionC: "audio clips",
        correctAnswer: "web pages",
      }),
      shuffleOptions({
        question: "A mailing list forwards every message to all ______.",
        optionA: "recipients",
        optionB: "students",
        optionC: "customers",
        correctAnswer: "recipients",
      }),
      shuffleOptions({
        question: "Extra browser windows that open automatically are called ______.",
        optionA: "tabs",
        optionB: "pop-ups",
        optionC: "pages",
        correctAnswer: "pop-ups",
      }),
      shuffleOptions({
        question: "We should use ____ controls on social networking sites for safety.",
        optionA: "privacy",
        optionB: "audio",
        optionC: "game",
        correctAnswer: "privacy",
      }),
      shuffleOptions({
        question: "People who maintain and update blogs are called ______.",
        optionA: "bloggers",
        optionB: "senders",
        optionC: "coders",
        correctAnswer: "bloggers",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Microblogging allows users to post short messages of up to 140 characters.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Twitter and Tumbler are examples of microblogging platforms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "E-greetings are sent through postal mail.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Online newspapers can be read only on printed paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Newsgroups cover a wide range of topics, including current events.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Instant messaging not allow users to see each other via webcam.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A mailing list requires a central e-mail address to forward messages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bloggers can share their thoughts and preserve memories.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sharing personal details online may lead to cybercrime.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pop-ups are extra browser windows that open automatically while browsing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
