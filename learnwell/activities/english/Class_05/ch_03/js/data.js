export const chapter = "Chapter - 3: Bundelkhand";
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
        question: "What is Bundelkhand also known as?",
        optionA: "Land of Saints",
        optionB: "Land of Warriors",
        optionC: "Land of Farmers",
        correctAnswer: "Land of Warriors",
      }),
      shuffleOptions({
        question: "Who made Jhansi famous with her courage?",
        optionA: "Mastani",
        optionB: "Rani Lakshmi Bai",
        optionC: "Rudra Pratap Singh",
        correctAnswer: "Rani Lakshmi Bai",
      }),
      shuffleOptions({
        question: "Who founded Orchha?",
        optionA: "Rudra Pratap Singh",
        optionB: "Chandela",
        optionC: "Bajirao",
        correctAnswer: "Rudra Pratap Singh",
      }),
      shuffleOptions({
        question: "The Jahangir Mahal is a marvellous example of which architecture?",
        optionA: "Mughal",
        optionB: "Rajput",
        optionC: "British",
        correctAnswer: "Mughal",
      }),
      shuffleOptions({
        question: "Who built the Khajuraho temples?",
        optionA: "Gupta kings",
        optionB: "Chandela kings",
        optionC: "Maratha rulers",
        correctAnswer: "Chandela kings",
      }),
      shuffleOptions({
        question: "Who was the great warrior king of Panna?",
        optionA: "Chhatrasal",
        optionB: "Aurangzeb",
        optionC: "Chandrashekhar Azad",
        correctAnswer: "Chhatrasal",
      }),
      shuffleOptions({
        question: "Where is the Maharaja Chhatrasal Museum located?",
        optionA: "Jhansi",
        optionB: "Dhubela",
        optionC: "Panna",
        correctAnswer: "Dhubela",
      }),
      shuffleOptions({
        question: "Whose palace was the Mastani Mahal?",
        optionA: "Rani Lakshmi Bai",
        optionB: "Mastani",
        optionC: "Rudra Pratap Singh",
        correctAnswer: "Mastani",
      }),
      shuffleOptions({
        question: "In which temple did Chandrashekhar Azad hide?",
        optionA: "Azad Temple",
        optionB: "Panch Mahal",
        optionC: "Raja Ram Temple",
        correctAnswer: "Azad Temple",
      }),
      shuffleOptions({
        question: "Near which town does the Betwa river flow?",
        optionA: "Orchha",
        optionB: "Panna",
        optionC: "Jhansi",
        correctAnswer: "Orchha",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The pride of Jhansi is the ______ Fort.",
        optionA: "Red",
        optionB: "Jhansi",
        optionC: "Agra",
        correctAnswer: "Jhansi",
      }),
      shuffleOptions({
        question: "The large gun at Jhansi Fort is called ______.",
        optionA: "Bhavani Shankar",
        optionB: "Fansi Stambh",
        optionC: "Kal Kothari",
        correctAnswer: "Bhavani Shankar",
      }),
      shuffleOptions({
        question: "The ______ Mahal is a five-storey palace in Jhansi Fort.",
        optionA: "Panch",
        optionB: "Jahangir",
        optionC: "Mastani",
        correctAnswer: "Panch",
      }),
      shuffleOptions({
        question: "The Kudan Sthal is the ______ point of Jhansi Fort.",
        optionA: "Jumping",
        optionB: "Viewing",
        optionC: "Worship",
        correctAnswer: "Jumping",
      }),
      shuffleOptions({
        question: "A ______ programme is held at Jahangir Mahal.",
        optionA: "Light-and-sound",
        optionB: "Dance",
        optionC: "Puppet show",
        correctAnswer: "Light-and-sound",
      }),
      shuffleOptions({
        question: "The Chaturbhuj Temple is dedicated to ______.",
        optionA: "Vishnu",
        optionB: "Shiva",
        optionC: "Ram",
        correctAnswer: "Vishnu",
      }),
      shuffleOptions({
        question: "Khajuraho has been declared a ______ World Heritage Site.",
        optionA: "UNESCO",
        optionB: "National",
        optionC: "Government",
        correctAnswer: "UNESCO",
      }),
      shuffleOptions({
        question: "Panna is also known for its ______ mines.",
        optionA: "Diamond",
        optionB: "Gold",
        optionC: "Silver",
        correctAnswer: "Diamond",
      }),
      shuffleOptions({
        question: "The Jain Gallery in Dhubela houses old ______.",
        optionA: "Artifacts",
        optionB: "Weapons",
        optionC: "Paintings",
        correctAnswer: "Artifacts",
      }),
      shuffleOptions({
        question: "The wildlife sanctuary in Panna is home to ______.",
        optionA: "Tiger",
        optionB: "Camel",
        optionC: "Elephant",
        correctAnswer: "Tiger",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Jhansi Fort has a hanging altar called Fansi Stambh.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Rani Lakshmi Bai jumped with her son at Kudan Sthal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Orchha is famous for diamond mines.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chandrashekhar Azad was a Mughal ruler.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The temples of Khajuraho are carved from stone.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Khajuraho is mainly a religious site today.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chhatrasal confronted Aurangzeb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Panna has a mixture of history, religion and nature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Dhubela is located in Jhansi district.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bundelkhand attracts tourists again and again.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}

export var activityData;
