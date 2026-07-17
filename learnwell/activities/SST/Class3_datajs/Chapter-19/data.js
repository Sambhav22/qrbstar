export const chapter = "Chapter - 19: Great Freedom Fighters";
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
        question: "Who passed the ICS examination in 1920 but refused to work for the British?",
        optionA: "Jawaharlal Nehru",
        optionB: "Subhash Chandra Bose",
        optionC: "Bal Gangadhar Tilak",
        correctAnswer: "Subhash Chandra Bose",
      }),
      shuffleOptions({
        question: "Who joined the Non-Cooperation Movement at the age of 15?",
        optionA: "Bhagat Singh",
        optionB: "Sarojini Naidu",
        optionC: "Chandra Shekhar Azad",
        correctAnswer: "Chandra Shekhar Azad",
      }),
      shuffleOptions({
        question: "Who was deeply influenced by Swami Vivekananda and Ramakrishna?",
        optionA: "Vallabhbhai Patel",
        optionB: "Subhash Chandra Bose",
        optionC: "Sukhdev",
        correctAnswer: "Subhash Chandra Bose",
      }),
      shuffleOptions({
        question: "Who gave his name as “Azad” when presented before a magistrate?",
        optionA: "Bal Gangadhar Tilak",
        optionB: "Chandra Shekhar Tiwari (Azad)",
        optionC: "Rajguru",
        correctAnswer: "Chandra Shekhar Tiwari (Azad)",
      }),
      shuffleOptions({
        question: "Who threw a bomb in the Central Legislative Assembly to warn the British government?",
        optionA: "Bhagat Singh",
        optionB: "Subhash Chandra Bose",
        optionC: "Jawaharlal Nehru",
        correctAnswer: "Bhagat Singh",
      }),
      shuffleOptions({
        question: "Who is known as the “Father of Indian Movement”?",
        optionA: "Gandhiji",
        optionB: "Bal Gangadhar Tilak",
        optionC: "Sardar Patel",
        correctAnswer: "Bal Gangadhar Tilak",
      }),
      shuffleOptions({
        question: "Who sacrificed his life at the age of 30 and became a symbol of heroism?",
        optionA: "Bhagat Singh",
        optionB: "Subhash Chandra Bose",
        optionC: "Chandra Shekhar Azad",
        correctAnswer: "Bhagat Singh",
      }),
      shuffleOptions({
        question: "Who was the first woman to become the governor of an Indian state?",
        optionA: "Indira Gandhi",
        optionB: "Sarojini Naidu",
        optionC: "Vijaylaxmi Pandit",
        correctAnswer: "Sarojini Naidu",
      }),
      shuffleOptions({
        question: "Who was born in Allahabad on 14 November 1889?",
        optionA: "Jawaharlal Nehru",
        optionB: "Subhash Chandra Bose",
        optionC: "Bhagat Singh",
        correctAnswer: "Jawaharlal Nehru",
      }),
      shuffleOptions({
        question: "Who played a major role in forming the Indian National Army?",
        optionA: "Vallabhbhai Patel",
        optionB: "Chandra Shekhar Azad",
        optionC: "Subhash Chandra Bose",
        correctAnswer: "Subhash Chandra Bose",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Subhash Chandra Bose studied at the ______ European School in Cuttack.",
        optionA: "Central",
        optionB: "Protestant",
        optionC: "National",
        correctAnswer: "Protestant",
      }),
      shuffleOptions({
        question: "Chandra Shekhar Azad was born in ______ village.",
        optionA: "Bhavra",
        optionB: "Badarka",
        optionC: "Cuttack",
        correctAnswer: "Bhavra",
      }),
      shuffleOptions({
        question: "Bhagat Singh worked with other revolutionaries in the ______ Socialist Republican Association.",
        optionA: "Indian",
        optionB: "Hindustan",
        optionC: "National",
        correctAnswer: "Hindustan",
      }),
      shuffleOptions({
        question: "Sarojini Naidu became the first woman ______ of an Indian state.",
        optionA: "Governor",
        optionB: "President",
        optionC: "Journalist",
        correctAnswer: "Governor",
      }),
      shuffleOptions({
        question: "Jawaharlal Nehru hoisted the national flag at the ______ after independence.",
        optionA: "India Gate",
        optionB: "Red Fort",
        optionC: "Gateway of India",
        correctAnswer: "Red Fort",
      }),
      shuffleOptions({
        question: "The slogan “Jai Hind” became popular through the ______ Hind Fauj.",
        optionA: "Nava",
        optionB: "Azad",
        optionC: "Mahan",
        correctAnswer: "Azad",
      }),
      shuffleOptions({
        question: "Bal Gangadhar Tilak started the ______ Rule League.",
        optionA: "People’s",
        optionB: "Home",
        optionC: "Freedom",
        correctAnswer: "Home",
      }),
      shuffleOptions({
        question: "Subhash Chandra Bose was influenced by Swami Vivekananda at the age of ______.",
        optionA: "10",
        optionB: "12",
        optionC: "16",
        correctAnswer: "16",
      }),
      shuffleOptions({
        question: "Azad wanted to build a new India based on ______ principles.",
        optionA: "socialist",
        optionB: "democratic",
        optionC: "regional",
        correctAnswer: "socialist",
      }),
      shuffleOptions({
        question: "Bhagat Singh was executed along with Sukhdev and ______.",
        optionA: "Rajguru",
        optionB: "Patel",
        optionC: "Bose",
        correctAnswer: "Rajguru",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Subhash Chandra Bose belonged to a well-to-do family.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chandra Shekhar Azad gave his father’s name as “Swatantrata” in court.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhagat Singh intended to harm people when he threw the bomb.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sarojini Naidu was also a well-known poet during the freedom struggle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jawaharlal Nehru was one of the key architects of newly independent India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Subhash Chandra Bose believed his studies were more important than religion.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chandra Shekhar Azad was involved in the Kakori conspiracy of 1925.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhagat Singh was more than 40 years old when he sacrificed his life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sarojini Naidu worked only as a poet and did not participate in politics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jawaharlal Nehru belonged to the Indian National Congress.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
