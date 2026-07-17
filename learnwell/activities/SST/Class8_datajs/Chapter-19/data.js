export const chapter = "Chapter - 19: Nationalist Movement (1919-1947)";
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
        question: "Who led the Satyagraha in Champaran for the indigo cultivators?",
        optionA: "Jawaharlal Nehru",
        optionB: "Mahatma Gandhi",
        optionC: "Rajendra Prasad",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who led the silent protest march against the Simon Commission in Lahore?",
        optionA: "Sardar Patel",
        optionB: "Lala Lajpat Rai",
        optionC: "Khan Abdul Ghaffar Khan",
        correctAnswer: "Lala Lajpat Rai",
      }),
      shuffleOptions({
        question: "Who established the Hindustan Socialist Republican Party?",
        optionA: "Bhagat Singh",
        optionB: "Subhash Chandra Bose",
        optionC: "Chandra Shekhar Azad",
        correctAnswer: "Chandra Shekhar Azad",
      }),
      shuffleOptions({
        question: "Who led the Salt March from Tiruchirappalli to Vedaranyam in Tamil Nadu?",
        optionA: "Sarojini Naidu",
        optionB: "C. Rajagopalachari",
        optionC: "Motilal Nehru",
        correctAnswer: "C. Rajagopalachari",
      }),
      shuffleOptions({
        question: "Who gave the slogan “Jai Hind”?",
        optionA: "Subhash Chandra Bose",
        optionB: "Bipin Chandra Pal",
        optionC: "Rabindranath Tagore",
        correctAnswer: "Subhash Chandra Bose",
      }),
      shuffleOptions({
        question: "Who ordered the lathi charge in Lahore that injured Lala Lajpat Rai?",
        optionA: "Charles Hardinge",
        optionB: "James A. Scott",
        optionC: "John Simon",
        correctAnswer: "James A. Scott",
      }),
      shuffleOptions({
        question: "Who formed the Indian National Army (INA) in 1943?",
        optionA: "Mahatma Gandhi",
        optionB: "Subhash Chandra Bose",
        optionC: "Bal Gangadhar Tilak",
        correctAnswer: "Subhash Chandra Bose",
      }),
      shuffleOptions({
        question: "Who led protests in the North-West Frontier Province during the Civil Disobedience Movement?",
        optionA: "Khan Abdul Ghaffar Khan",
        optionB: "Jawaharlal Nehru",
        optionC: "Maulana Azad",
        correctAnswer: "Khan Abdul Ghaffar Khan",
      }),
      shuffleOptions({
        question: "Who signed the agreement with Gandhiji known as the Gandhi–Irwin Pact?",
        optionA: "Lord Mountbatten",
        optionB: "Lord Irwin",
        optionC: "Lord Reading",
        correctAnswer: "Lord Irwin",
      }),
      shuffleOptions({
        question: "Who became the first Indian Governor-General of free India?",
        optionA: "Dr. Rajendra Prasad",
        optionB: "Jawaharlal Nehru",
        optionC: "C. Rajagopalachari",
        correctAnswer: "C. Rajagopalachari",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Gandhiji began the Civil Disobedience Movement by breaking the ________.",
        optionA: "Forest Law",
        optionB: "Salt Law",
        optionC: "Press Act",
        correctAnswer: "Salt Law",
      }),
      shuffleOptions({
        question: "The British maintained a monopoly over making ________ before 1930.",
        optionA: "iron",
        optionB: "salt",
        optionC: "cloth",
        correctAnswer: "salt",
      }),
      shuffleOptions({
        question: "The Swaraj Party was formed in 1923 by C.R. Das and ________.",
        optionA: "Motilal Nehru",
        optionB: "Vithalbhai Patel",
        optionC: "Sardar Patel",
        correctAnswer: "Motilal Nehru",
      }),
      shuffleOptions({
        question: "The revolutionaries mistakenly killed J.P. Saunders instead of ________.",
        optionA: "James A. Scott",
        optionB: "John Simon",
        optionC: "Clement Attlee",
        correctAnswer: "James A. Scott",
      }),
      shuffleOptions({
        question: "Sarojini Naidu led protests in front of ________ depots during the Salt Satyagraha.",
        optionA: "grain",
        optionB: "salt",
        optionC: "postal",
        correctAnswer: "salt",
      }),
      shuffleOptions({
        question: "The Quit India Movement was launched with the slogan ________.",
        optionA: "Back to Village",
        optionB: "Victory to India",
        optionC: "Do or Die",
        correctAnswer: "Do or Die",
      }),
      shuffleOptions({
        question: "The women's regiment of the INA was named the ________ Regiment.",
        optionA: "Rani Lakshmi",
        optionB: "Rani Jhansi",
        optionC: "Rani Gauri",
        correctAnswer: "Rani Jhansi",
      }),
      shuffleOptions({
        question: "The Cabinet Mission came to India in ________.",
        optionA: "1946",
        optionB: "1939",
        optionC: "1929",
        correctAnswer: "1946",
      }),
      shuffleOptions({
        question: "The period 1919–1947 is often known as the ________ Era.",
        optionA: "Bose",
        optionB: "Gandhi",
        optionC: "Nehru",
        correctAnswer: "Gandhi",
      }),
      shuffleOptions({
        question: "India became independent on ________.",
        optionA: "15 August 1947",
        optionB: "14 August 1947",
        optionC: "26 January 1947",
        correctAnswer: "15 August 1947",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Non-Cooperation Movement included boycott of British schools and colleges.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Simon Commission included several Indian members.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Chauri Chaura incident involved burning a police station.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bhagat Singh and B.K. Dutt intended to avoid killing anyone in the Assembly bombing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Women played no role in the Civil Disobedience Movement.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Congress attended the First Round Table Conference.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "India was declared a war ally by Britain without consulting Indian leaders in 1939.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The INA collaborated with the Japanese army during World War II.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Mountbatten’s plan proposed partitioning India into India and Pakistan.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pakistan received independence on the same day as India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
