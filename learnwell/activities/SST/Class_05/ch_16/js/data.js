export const chapter = "Chapter - 16: Towards the Path of Freedom";
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
        question: "Who led the peaceful Salt Satyagraha march to break the Salt Law?",
        optionA: "Jawaharlal Nehru",
        optionB: "Mahatma Gandhi",
        optionC: "Subhash Chandra Bose",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who ordered the firing at Jallianwala Bagh in 1919?",
        optionA: "General Dyer",
        optionB: "General Mohan Singh",
        optionC: "Chandra Shekhar Azad",
        correctAnswer: "General Dyer",
      }),
      shuffleOptions({
        question: "Who reorganised the Indian National Army in Singapore?",
        optionA: "Lala Lajpat Rai",
        optionB: "Subhash Chandra Bose",
        optionC: "Sachin Sanyal",
        correctAnswer: "Subhash Chandra Bose",
      }),
      shuffleOptions({
        question: "Which leader shot himself when surrounded by police?",
        optionA: "Sukhdev",
        optionB: "Rajguru",
        optionC: "Chandra Shekhar Azad",
        correctAnswer: "Chandra Shekhar Azad",
      }),
      shuffleOptions({
        question: "Who resigned from the Indian Civil Service to join Gandhiji's movement?",
        optionA: "Sardar Patel",
        optionB: "Subhash Chandra Bose",
        optionC: "Rajendra Prasad",
        correctAnswer: "Subhash Chandra Bose",
      }),
      shuffleOptions({
        question: "Which leader gave the slogan “Inquilab Zindabad”?",
        optionA: "Bhagat Singh and B.K. Dutt",
        optionB: "Rashbehari Bose",
        optionC: "C. Rajagopalachari",
        correctAnswer: "Bhagat Singh and B.K. Dutt",
      }),
      shuffleOptions({
        question: "Who gave the slogan “Give me blood and I will give you freedom”?",
        optionA: "Mahatma Gandhi",
        optionB: "Subhash Chandra Bose",
        optionC: "Motilal Nehru",
        correctAnswer: "Subhash Chandra Bose",
      }),
      shuffleOptions({
        question: "Who were arrested before the Jallianwala Bagh meeting?",
        optionA: "Sardar Patel and Rajguru",
        optionB: "Satya Pal and Dr Saifuddin Kitchlew",
        optionC: "Rajendra Prasad and Deshbandhu Das",
        correctAnswer: "Satya Pal and Dr Saifuddin Kitchlew",
      }),
      shuffleOptions({
        question: "Who formed the Hindustan Republican Association?",
        optionA: "Ram Prasad Bismil and his associates",
        optionB: "Bhagat Singh and Sukhdev",
        optionC: "Gandhiji and Nehru",
        correctAnswer: "Ram Prasad Bismil and his associates",
      }),
      shuffleOptions({
        question: "Who became the first Prime Minister of independent India?",
        optionA: "Dr Rajendra Prasad",
        optionB: "Jawaharlal Nehru",
        optionC: "C. Rajagopalachari",
        correctAnswer: "Jawaharlal Nehru",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Gandhiji returned to India from ________.",
        optionA: "Germany",
        optionB: "South Africa",
        optionC: "Japan",
        correctAnswer: "South Africa",
      }),
      shuffleOptions({
        question: "The peaceful gathering at Jallianwala Bagh took place on ________.",
        optionA: "13 April 1919",
        optionB: "10 April 1919",
        optionC: "15 August 1919",
        correctAnswer: "13 April 1919",
      }),
      shuffleOptions({
        question: "The Kakori incident involved looting a train carrying ________.",
        optionA: "food",
        optionB: "government money",
        optionC: "weapons",
        correctAnswer: "government money",
      }),
      shuffleOptions({
        question: "The Non-cooperation Movement asked people to give up ________.",
        optionA: "foreign clothes",
        optionB: "government jobs",
        optionC: "freedom fighters",
        correctAnswer: "government jobs",
      }),
      shuffleOptions({
        question: "The Salt Satyagraha started from ________ Ashram.",
        optionA: "Wardha",
        optionB: "Sabarmati",
        optionC: "Kheda",
        correctAnswer: "Sabarmati",
      }),
      shuffleOptions({
        question: "The Quit India Movement began in ________.",
        optionA: "1930",
        optionB: "1940",
        optionC: "1942",
        correctAnswer: "1942",
      }),
      shuffleOptions({
        question: "The Simon Commission arrived in India in ________.",
        optionA: "1928",
        optionB: "1919",
        optionC: "1945",
        correctAnswer: "1928",
      }),
      shuffleOptions({
        question: "Purna Swaraj means complete ________.",
        optionA: "victory",
        optionB: "independence",
        optionC: "war",
        correctAnswer: "independence",
      }),
      shuffleOptions({
        question: "The Indian National Army was reorganised in ________.",
        optionA: "Burma",
        optionB: "Singapore",
        optionC: "Delhi",
        correctAnswer: "Singapore",
      }),
      shuffleOptions({
        question: "The Cellular Jail was located in the ________ Islands.",
        optionA: "Lakshadweep",
        optionB: "Andaman",
        optionC: "Nicobar",
        correctAnswer: "Andaman",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Gandhiji always followed non-violence in all his movements.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Simon Commission had Indian members.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Chauri Chaura incident involved the burning of a police station.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Thousands of Indians were arrested during the Civil Disobedience Movement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subhash Chandra Bose gave the slogan “Jai Hind.”",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Dandi March was carried out to oppose the tax on salt.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Kakori incident took place in 1925.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "“Simon Go Back” was shouted because the commission had no Indian member.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "India became free on 15 August 1945.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bhagat Singh, Rajguru and Sukhdev were executed in 1931.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
