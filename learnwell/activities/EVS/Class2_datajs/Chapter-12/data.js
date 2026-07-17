export const chapter = "Chapter - 12: National Festivals";
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
        question: "Who unfurls the National Flag on Independence Day?",
        optionA: "President",
        optionB: "Prime Minister",
        optionC: "Governor",
        correctAnswer: "Prime Minister",
      }),
      shuffleOptions({
        question: "Where does the President take the salute of the Parade on Republic Day?",
        optionA: "Red Fort",
        optionB: "Rajpath",
        optionC: "India Gate",
        correctAnswer: "Rajpath",
      }),
      shuffleOptions({
        question: "When do we celebrate Republic Day?",
        optionA: "15 August",
        optionB: "26 January",
        optionC: "2 October",
        correctAnswer: "26 January",
      }),
      shuffleOptions({
        question: "Who is known as the Father of our Nation?",
        optionA: "Jawaharlal Nehru",
        optionB: "Sardar Patel",
        optionC: "Mahatma Gandhi",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "When was Mahatma Gandhi born?",
        optionA: "2 October 1869",
        optionB: "15 August 1947",
        optionC: "26 January 1950",
        correctAnswer: "2 October 1869",
      }),
      shuffleOptions({
        question: "How many national festivals do we celebrate in India?",
        optionA: "Two",
        optionB: "Three",
        optionC: "Four",
        correctAnswer: "Three",
      }),
      shuffleOptions({
        question: "Which festival marks the day our country became a Republic?",
        optionA: "Independence Day",
        optionB: "Republic Day",
        optionC: "Gandhi Jayanti",
        correctAnswer: "Republic Day",
      }),
      shuffleOptions({
        question: "Who pays tribute to Mahatma Gandhi at Raj Ghat?",
        optionA: "Students",
        optionB: "President and Prime Minister",
        optionC: "Soldiers",
        correctAnswer: "President and Prime Minister",
      }),
      shuffleOptions({
        question: "Which parade shows our military power and rich culture?",
        optionA: "Independence Day Parade",
        optionB: "Republic Day Parade",
        optionC: "Sports Parade",
        correctAnswer: "Republic Day Parade",
      }),
      shuffleOptions({
        question: "Where is Raj Ghat located?",
        optionA: "Mumbai",
        optionB: "New Delhi",
        optionC: "Kolkata",
        correctAnswer: "New Delhi",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Independence Day is celebrated on _______.",
        optionA: "26 January",
        optionB: "2 October",
        optionC: "15 August",
        correctAnswer: "15 August",
      }),
      shuffleOptions({
        question: "Republic Day is celebrated on _______.",
        optionA: "15 August",
        optionB: "26 January",
        optionC: "1 May",
        correctAnswer: "26 January",
      }),
      shuffleOptions({
        question: "Gandhi Jayanti is celebrated on _______.",
        optionA: "2 October",
        optionB: "15 August",
        optionC: "14 November",
        correctAnswer: "2 October",
      }),
      shuffleOptions({
        question: "Our Prime Minister unfurls the National Flag at _______.",
        optionA: "Red Fort",
        optionB: "India Gate",
        optionC: "Rajpath",
        correctAnswer: "Red Fort",
      }),
      shuffleOptions({
        question: "Our President takes the salute of the Parade at _______.",
        optionA: "Rajpath",
        optionB: "Red Fort",
        optionC: "Connaught Place",
        correctAnswer: "Rajpath",
      }),
      shuffleOptions({
        question: "National festivals are events of national _______.",
        optionA: "importance",
        optionB: "holiday",
        optionC: "music",
        correctAnswer: "importance",
      }),
      shuffleOptions({
        question: "India got freedom in the year ______.",
        optionA: "1857",
        optionB: "1947",
        optionC: "1950",
        correctAnswer: "1947",
      }),
      shuffleOptions({
        question: "The Republic Day Parade shows our ______ and rich culture.",
        optionA: "sports",
        optionB: "military power",
        optionC: "food",
        correctAnswer: "military power",
      }),
      shuffleOptions({
        question: "We offer tributes to Mahatma Gandhi at ______.",
        optionA: "Raj Ghat",
        optionB: "India Gate",
        optionC: "Lotus Temple",
        correctAnswer: "Raj Ghat",
      }),
      shuffleOptions({
        question: "Gandhiji taught us the value of ______.",
        optionA: "truth and non-violence",
        optionB: "anger",
        optionC: "fight",
        correctAnswer: "truth and non-violence",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Independence Day is celebrated on 15 August.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The President unfurls the flag on Independence Day.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Republic Day celebrates the coming of our Constitution into force.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhi Jayanti is celebrated to honour Mahatma Gandhi’s birth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India became free in 1950.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Prime Minister takes salute of the Republic Day Parade.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Raj Ghat is situated in New Delhi.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Schools and colleges celebrate national festivals to build patriotic feelings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "There are three national festivals in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "National festivals make us feel unhappy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
