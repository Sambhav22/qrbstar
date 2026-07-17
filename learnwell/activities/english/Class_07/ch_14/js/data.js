export const chapter = "Chapter - 14: The Indomitable Netaji";
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
        question: "Who wanted Bose to become a high-ranking officer?",
        optionA: "His mother",
        optionB: "His father",
        optionC: "His uncle",
        correctAnswer: "His father",
      }),
      shuffleOptions({
        question: "Why did Bose resign from the ICS?",
        optionA: "He failed the exam",
        optionB: "He did not want to serve the British",
        optionC: "He wanted to join business",
        correctAnswer: "He did not want to serve the British",
      }),
      shuffleOptions({
        question: "In which region did Bose do relief work after his release from jail?",
        optionA: "Punjab",
        optionB: "North Bengal",
        optionC: "Madras",
        correctAnswer: "North Bengal",
      }),
      shuffleOptions({
        question: "Where was Bose sent after being charged with conspiracy?",
        optionA: "Mandalay Jail",
        optionB: "Andaman Jail",
        optionC: "Cellular Jail",
        correctAnswer: "Mandalay Jail",
      }),
      shuffleOptions({
        question: "Why did Bose go to Vienna in 1933?",
        optionA: "To write a book",
        optionB: "For medical treatment",
        optionC: "For further studies",
        correctAnswer: "For medical treatment",
      }),
      shuffleOptions({
        question: "In which country was The Indian Struggle banned?",
        optionA: "India",
        optionB: "Germany",
        optionC: "Japan",
        correctAnswer: "India",
      }),
      shuffleOptions({
        question: "In which year did Bose complete An Indian Pilgrim?",
        optionA: "1936",
        optionB: "1937",
        optionC: "1939",
        correctAnswer: "1937",
      }),
      shuffleOptions({
        question: "To which country did Bose escape from house arrest in 1941?",
        optionA: "Burma",
        optionB: "Afghanistan",
        optionC: "Japan",
        correctAnswer: "Afghanistan",
      }),
      shuffleOptions({
        question: "How did Bose travel to Kabul?",
        optionA: "By ship only",
        optionB: "By aeroplane",
        optionC: "By train, tonga, truck and horse",
        correctAnswer: "By train, tonga, truck and horse",
      }),
      shuffleOptions({
        question: "When did the British realise that Bose had escaped?",
        optionA: "Immediately",
        optionB: "Before he left",
        optionC: "Only after he had reached Kabul",
        correctAnswer: "Only after he had reached Kabul",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bose was born in ______.",
        optionA: "Cuttack",
        optionB: "Kolkata",
        optionC: "Delhi",
        correctAnswer: "Cuttack",
      }),
      shuffleOptions({
        question: "He joined Presidency College in ______.",
        optionA: "1913",
        optionB: "1915",
        optionC: "1917",
        correctAnswer: "1913",
      }),
      shuffleOptions({
        question: "Bose’s first imprisonment lasted for ______ months.",
        optionA: "6",
        optionB: "12",
        optionC: "18",
        correctAnswer: "6",
      }),
      shuffleOptions({
        question: "In 1924, he became ______ of Calcutta Corporation.",
        optionA: "Mayor",
        optionB: "Chief Executive",
        optionC: "Chairman",
        correctAnswer: "Chief Executive",
      }),
      shuffleOptions({
        question: "Bose was suspected to have caught tuberculosis in ______.",
        optionA: "Mandalay Jail",
        optionB: "Cellular Jail",
        optionC: "Calcutta Prison",
        correctAnswer: "Mandalay Jail",
      }),
      shuffleOptions({
        question: "Bose’s idea was to gain ______ support for India’s freedom.",
        optionA: "International",
        optionB: "Financial",
        optionC: "Spiritual",
        correctAnswer: "International",
      }),
      shuffleOptions({
        question: "He undertook a submarine journey from Germany to ______.",
        optionA: "Rangoon",
        optionB: "Singapore",
        optionC: "Calcutta",
        correctAnswer: "Singapore",
      }),
      shuffleOptions({
        question: "The INA soldiers lacked proper ______.",
        optionA: "Weapons and clothing",
        optionB: "Training",
        optionC: "Leadership",
        correctAnswer: "Weapons and clothing",
      }),
      shuffleOptions({
        question: "In 1944, INA entered ______.",
        optionA: "Kohima",
        optionB: "Delhi",
        optionC: "Madras",
        correctAnswer: "Kohima",
      }),
      shuffleOptions({
        question: "Bose disappeared after taking a plane from ______.",
        optionA: "Saigon",
        optionB: "Burma",
        optionC: "Tokyo",
        correctAnswer: "Saigon",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Bose studied in Presidency College, Calcutta.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bose stood first in the ICS examination.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bose wrote both The Indian Struggle and An Indian Pilgrim.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Gandhiji fully supported Bose’s leadership as Congress President.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bose disguised himself as a Muslim gentleman during his escape.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bose went to Germany directly from Calcutta.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "INA was originally formed by Rash Behari Bose.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bose shifted the INA base to Rangoon in 1944.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "INA had a strong air force against the British.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The exact fate of Bose after 1945 remains uncertain.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
