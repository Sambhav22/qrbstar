export const chapter = "Chapter - 20: Trip and an Educational Tour";
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
        question: "Who were the first people to climb to the top of Mount Everest?",
        optionA: "Bachendri Pal",
        optionB: "Sir Edmund Hillary and Tenzing Norgay",
        optionC: "Rakesh Sharma",
        correctAnswer: "Sir Edmund Hillary and Tenzing Norgay",
      }),
      shuffleOptions({
        question: "Which Indian woman inspired others by scaling Mount Everest in 1984?",
        optionA: "Kalpana Chawla",
        optionB: "Bachendri Pal",
        optionC: "Sunita Williams",
        correctAnswer: "Bachendri Pal",
      }),
      shuffleOptions({
        question: "Who was the first Indian to travel into space?",
        optionA: "Neil Armstrong",
        optionB: "Rakesh Sharma",
        optionC: "Yuri Gagarin",
        correctAnswer: "Rakesh Sharma",
      }),
      shuffleOptions({
        question: "Who built the Red Fort in Delhi?",
        optionA: "Akbar",
        optionB: "Shah Jahan",
        optionC: "Aurangzeb",
        correctAnswer: "Shah Jahan",
      }),
      shuffleOptions({
        question: "Who built the Ashokan Pillar at Sarnath?",
        optionA: "Ashoka the Great",
        optionB: "Chanakya",
        optionC: "Harsha",
        correctAnswer: "Ashoka the Great",
      }),
      shuffleOptions({
        question: "Who holds the record for the longest spaceflight by a woman (195 days)?",
        optionA: "Kalpana Chawla",
        optionB: "Sunita Williams",
        optionC: "Valentina Tereshkova",
        correctAnswer: "Sunita Williams",
      }),
      shuffleOptions({
        question: "Who completed the construction of Qutub Minar?",
        optionA: "Shah Jahan",
        optionB: "Iltutmish",
        optionC: "Qutub-ud-din Aibak",
        correctAnswer: "Iltutmish",
      }),
      shuffleOptions({
        question: "Who named the Qutub Minar after the Sufi saint Khwaja Qutubuddin Bakhtiyar Kaki?",
        optionA: "Shah Jahan",
        optionB: "Qutub-ud-din Aibak",
        optionC: "Akbar",
        correctAnswer: "Qutub-ud-din Aibak",
      }),
      shuffleOptions({
        question: "Who built the Taj Mahal in memory of his wife Mumtaz Mahal?",
        optionA: "Aurangzeb",
        optionB: "Shah Jahan",
        optionC: "Humayun",
        correctAnswer: "Shah Jahan",
      }),
      shuffleOptions({
        question: "Who hoists the National Flag at the Red Fort every 15 August?",
        optionA: "President of India",
        optionB: "Prime Minister of India",
        optionC: "Governor of Delhi",
        correctAnswer: "Prime Minister of India",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Mount Everest is the ______ mountain peak in the world.",
        optionA: "lowest",
        optionB: "highest",
        optionC: "coldest",
        correctAnswer: "highest",
      }),
      shuffleOptions({
        question: "The height of Mount Everest is ______ metres.",
        optionA: "7 000",
        optionB: "8 848",
        optionC: "9 500",
        correctAnswer: "8 848",
      }),
      shuffleOptions({
        question: "The sport or activity of climbing mountains is called ______.",
        optionA: "mountaineering",
        optionB: "rafting",
        optionC: "skydiving",
        correctAnswer: "mountaineering",
      }),
      shuffleOptions({
        question: "The Himalayan Mountaineering Institute is located in ______.",
        optionA: "Shimla",
        optionB: "Darjeeling",
        optionC: "Manali",
        correctAnswer: "Darjeeling",
      }),
      shuffleOptions({
        question: "The first Indian woman to climb Mount Everest was ______.",
        optionA: "Sunita Williams",
        optionB: "Bachendri Pal",
        optionC: "Kalpana Chawla",
        correctAnswer: "Bachendri Pal",
      }),
      shuffleOptions({
        question: "The Taj Mahal is built of ______ marble.",
        optionA: "black",
        optionB: "white",
        optionC: "red",
        correctAnswer: "white",
      }),
      shuffleOptions({
        question: "The Red Fort was built in the year ______.",
        optionA: "1648",
        optionB: "1548",
        optionC: "1748",
        correctAnswer: "1648",
      }),
      shuffleOptions({
        question: "The capital of the Ashokan Pillar has ______ lions.",
        optionA: "two",
        optionB: "three",
        optionC: "four",
        correctAnswer: "four",
      }),
      shuffleOptions({
        question: "India Gate and Rashtrapati Bhawan were built during the ______ era.",
        optionA: "Mughal",
        optionB: "British",
        optionC: "Mauryan",
        correctAnswer: "British",
      }),
      shuffleOptions({
        question: "The Qutub Minar is the tallest ______ tower in India.",
        optionA: "wooden",
        optionB: "stone",
        optionC: "iron",
        correctAnswer: "stone",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Adventure sports like rafting and paragliding are popular today.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The height of Mount Everest is 8 848 metres.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rakesh Sharma was the first Indian to go into space.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sunita Williams is an astronaut from NASA.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Red Fort is built of white marble.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Taj Mahal took about 22 years to build.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Ashokan Pillar’s capital of four lions is India’s national symbol.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Qutub Minar was started by Qutub-ud-din Aibak and finished by Iltutmish.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bachendri Pal climbed Mount Everest in 1953.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "India’s monuments are part of its rich cultural heritage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
