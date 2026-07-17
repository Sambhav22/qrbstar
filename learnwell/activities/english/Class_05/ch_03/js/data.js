export const chapter = "Chapter - 3: How a Mistake led to the Nobel Prizes";
export const noOfActivities = 3;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object;
  const optionsArray = [optionA, optionB, optionC].filter(Boolean);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
  }

  object.optionA = optionsArray[0];
  object.optionB = optionsArray[1];

  if (optionsArray.length > 2) {
    object.optionC = optionsArray[2];
  } else {
    delete object.optionC;
  }

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who was the first person of Indian origin to win the Nobel Prize?",
        optionA: "Rabindranath Tagore",
        optionB: "C.V. Raman",
        optionC: "Amartya Sen",
        correctAnswer: "Rabindranath Tagore",
      }),
      shuffleOptions({
        question: "Who shared the Nobel Peace Prize with Kailash Satyarthi?",
        optionA: "Dalai Lama",
        optionB: "Malala Yousafzai",
        optionC: "Amartya Sen",
        correctAnswer: "Malala Yousafzai",
      }),
      shuffleOptions({
        question: "Which of these fields is not recognised by a Nobel Prize?",
        optionA: "Medicine",
        optionB: "Chemistry",
        optionC: "Sports",
        correctAnswer: "Sports",
      }),
      shuffleOptions({
        question: "Alfred Nobel held how many patents?",
        optionA: "101",
        optionB: "355",
        optionC: "500",
        correctAnswer: "355",
      }),
      shuffleOptions({
        question: "Which Nobel laureate was awarded for work in Physiology in 1968?",
        optionA: "Har Gobind Khurana",
        optionB: "Ronald Ross",
        optionC: "Subramanyam Chandrashekhar",
        correctAnswer: "Har Gobind Khurana",
      }),
      shuffleOptions({
        question: "What does the Nobel Foundation NOT give to laureates?",
        optionA: "Gold medal",
        optionB: "Trophy",
        optionC: "Diploma",
        correctAnswer: "Trophy",
      }),
      shuffleOptions({
        question: "Who described Gandhi’s absence from Nobel awards as the “greatest omission”?",
        optionA: "Rabindranath Tagore",
        optionB: "Geir Lundestad",
        optionC: "Kailash Satyarthi",
        correctAnswer: "Geir Lundestad",
      }),
      shuffleOptions({
        question: "Alfred Nobel was born in which year?",
        optionA: "1833",
        optionB: "1845",
        optionC: "1850",
        correctAnswer: "1833",
      }),
      shuffleOptions({
        question: "In which country did a newspaper mistakenly publish Nobel’s obituary?",
        optionA: "France",
        optionB: "England",
        optionC: "Sweden",
        correctAnswer: "France",
      }),
      shuffleOptions({
        question: "Which Indian Nobel laureate worked in welfare economics?",
        optionA: "Amartya Sen",
        optionB: "Mother Teresa",
        optionC: "Venkatraman Ramakrishnan",
        correctAnswer: "Amartya Sen",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Alfred Nobel was called the “________ of Death.”",
        optionA: "Merchant",
        optionB: "Scientist",
        optionC: "Friend",
        correctAnswer: "Merchant",
      }),
      shuffleOptions({
        question: "Nobel Prizes are considered the most ________ awards in the world.",
        optionA: "Ordinary",
        optionB: "Prestigious",
        optionC: "Recent",
        correctAnswer: "Prestigious",
      }),
      shuffleOptions({
        question: "Nobel made his wealth mainly from ________.",
        optionA: "Explosives",
        optionB: "Books",
        optionC: "Teaching",
        correctAnswer: "Explosives",
      }),
      shuffleOptions({
        question: "Nobel’s foundation was created in the year ________.",
        optionA: "1895",
        optionB: "1905",
        optionC: "1915",
        correctAnswer: "1895",
      }),
      shuffleOptions({
        question: "Nobel bought Bofors and turned it into an ________ manufacturer.",
        optionA: "Toy",
        optionB: "Arms",
        optionC: "Textile",
        correctAnswer: "Arms",
      }),
      shuffleOptions({
        question: "The Nobel Prize money today is about ________.",
        optionA: "$1,110,000",
        optionB: "$10,000",
        optionC: "$250 million",
        correctAnswer: "$1,110,000",
      }),
      shuffleOptions({
        question: "________ was awarded the Nobel Peace Prize in 1989.",
        optionA: "Dalai Lama",
        optionB: "Gandhi",
        optionC: "Satyarthi",
        correctAnswer: "Dalai Lama",
      }),
      shuffleOptions({
        question: "Alfred Nobel studied ________.",
        optionA: "Chemistry",
        optionB: "Physics",
        optionC: "Medicine",
        correctAnswer: "Chemistry",
      }),
      shuffleOptions({
        question: "Rudyard Kipling won the Nobel Prize in ________.",
        optionA: "1907",
        optionB: "1913",
        optionC: "1921",
        correctAnswer: "1907",
      }),
      shuffleOptions({
        question: "The Nobel Prize gold medal is accompanied by a ________.",
        optionA: "Diploma",
        optionB: "Trophy",
        optionC: "Certificate only",
        correctAnswer: "Diploma",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nobel made more wealth designing and selling cannons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nobel Prizes were first awarded after 1900.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Nobel Prize is also given for art.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nobel is remembered as one of the greatest philanthropists.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A mistaken obituary described Alfred Nobel as a philanthropist.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gandhi was nominated for the Nobel Prize four times.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Alfred Nobel was Swedish by nationality.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Nobel Prizes can be shared by more than three individuals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nobel Prizes are awarded in six main categories.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Winning hearts is considered greater than winning prizes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
