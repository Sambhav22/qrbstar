export const chapter = "Chapter - 13: How Subhash Escaped to Germany";
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
        question: "Who helped Subhash drive out of Calcutta?",
        optionA: "Ramkrishan",
        optionB: "Shishir",
        optionC: "Bhagatram",
        correctAnswer: "Shishir",
      }),
      shuffleOptions({
        question: "Subhash grew a ______ to change his appearance.",
        optionA: "Long hair",
        optionB: "Mustaches and beard",
        optionC: "Scar",
        correctAnswer: "Mustaches and beard",
      }),
      shuffleOptions({
        question: "What was the name Subhash gave on the train?",
        optionA: "Maulvi Ziauddin",
        optionB: "Maulvi Javed",
        optionC: "Maulvi Ashraf",
        correctAnswer: "Maulvi Ziauddin",
      }),
      shuffleOptions({
        question: "Where did Subhash stay first after escaping Calcutta?",
        optionA: "Delhi",
        optionB: "Dhanbad",
        optionC: "Kabul",
        correctAnswer: "Dhanbad",
      }),
      shuffleOptions({
        question: "Who advised Subhash to act deaf and dumb?",
        optionA: "Bhagatram",
        optionB: "Akbar Shah",
        optionC: "Shishir",
        correctAnswer: "Bhagatram",
      }),
      shuffleOptions({
        question: "Which hotel did Subhash check into at Peshawar?",
        optionA: "Ashoka Hotel",
        optionB: "Tajmahal Hotel",
        optionC: "Oberoi Hotel",
        correctAnswer: "Tajmahal Hotel",
      }),
      shuffleOptions({
        question: "Who sheltered Subhash in Kabul?",
        optionA: "Niranjan Singh",
        optionB: "Uttamchand Malhotra",
        optionC: "Sardar Baldev Singh",
        correctAnswer: "Uttamchand Malhotra",
      }),
      shuffleOptions({
        question: "Which embassy ignored Subhash’s request first?",
        optionA: "Russian",
        optionB: "German",
        optionC: "Italian",
        correctAnswer: "Russian",
      }),
      shuffleOptions({
        question: "On which date did he leave Indian borders for Russia?",
        optionA: "18 March 1941",
        optionB: "3 April 1941",
        optionC: "5 December 1940",
        correctAnswer: "18 March 1941",
      }),
      shuffleOptions({
        question: "What was Subhash’s Italian passport name?",
        optionA: "Count Orlando Mazzotta",
        optionB: "Count Orlando Marzio",
        optionC: "Count Orlando Singh",
        correctAnswer: "Count Orlando Mazzotta",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Subhash kept ______ and Ramayana near him.",
        optionA: "Quran",
        optionB: "Geeta",
        optionC: "Bible",
        correctAnswer: "Geeta",
      }),
      shuffleOptions({
        question: "Around ______ policemen were guarding his house.",
        optionA: "65",
        optionB: "100",
        optionC: "35",
        correctAnswer: "65",
      }),
      shuffleOptions({
        question: "Subhash wore black sherwani, trousers, cap, and ______.",
        optionA: "Round spectacles",
        optionB: "Turban",
        optionC: "Hat",
        correctAnswer: "Round spectacles",
      }),
      shuffleOptions({
        question: "The car raced on ______ roads out of Calcutta.",
        optionA: "Busy",
        optionB: "Deserted",
        optionC: "Muddy",
        correctAnswer: "Deserted",
      }),
      shuffleOptions({
        question: "His elder brother in Dhanbad was named ______.",
        optionA: "Niranjan Singh",
        optionB: "Ashoknath Bose",
        optionC: "Bhagatram",
        correctAnswer: "Ashoknath Bose",
      }),
      shuffleOptions({
        question: "At Peshawar station, Subhash met ______.",
        optionA: "Akbar Shah",
        optionB: "Savarkar",
        optionC: "Gandhi",
        correctAnswer: "Akbar Shah",
      }),
      shuffleOptions({
        question: "Before leaving, he daubed ______ on his head.",
        optionA: "Ashes",
        optionB: "Mother earth",
        optionC: "Sand",
        correctAnswer: "Mother earth",
      }),
      shuffleOptions({
        question: "Subhash reached Berlin by aeroplane from ______.",
        optionA: "Kabul",
        optionB: "Moscow",
        optionC: "Delhi",
        correctAnswer: "Moscow",
      }),
      shuffleOptions({
        question: "The Italian and German embassies worked in close ______.",
        optionA: "Cooperation",
        optionB: "Secrecy",
        optionC: "Rivalry",
        correctAnswer: "Cooperation",
      }),
      shuffleOptions({
        question: "His eyes streamed with ______ tears while leaving India.",
        optionA: "Warm",
        optionB: "Cold",
        optionC: "Bitter",
        correctAnswer: "Warm",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Subhash was allowed to write letters during house arrest.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "He pretended to be a sanyasi while in his room.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subhash left his house at 11 pm.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shishir was Subhash’s comrade from Forward Bloc.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Subhash disguised as a Maulvi during part of his journey.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "At Peshawar, he was told to act deaf and dumb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subhash’s escape was discovered the next morning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Russian embassy helped him immediately.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "He finally reached Germany on 3 April 1941.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subhash promised his motherland he would return for freedom.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
