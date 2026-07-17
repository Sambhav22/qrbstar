export const chapter = "Chapter - 20: New Political Formation";
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
        question: "Who reorganised the administration of the Mughal Empire after becoming the wazir in 1722?",
        optionA: "Saadat Khan",
        optionB: "Nizam-ul-Mulk Asaf Jah",
        optionC: "Murshid Quli Khan",
        correctAnswer: "Nizam-ul-Mulk Asaf Jah",
      }),
      shuffleOptions({
        question: "Who founded the city of Jaipur and encouraged science and astronomy?",
        optionA: "Suraj Mal",
        optionB: "Raja Sawai Jai Singh",
        optionC: "Banda Bahadur",
        correctAnswer: "Raja Sawai Jai Singh",
      }),
      shuffleOptions({
        question: "Who shifted the capital of Bengal to Murshidabad?",
        optionA: "Siraj-ud-Daulah",
        optionB: "Murshid Quli Khan",
        optionC: "Alivardi Khan",
        correctAnswer: "Murshid Quli Khan",
      }),
      shuffleOptions({
        question: "Who united the 12 Sikh misls into one powerful kingdom?",
        optionA: "Banda Bahadur",
        optionB: "Guru Govind Singh",
        optionC: "Maharaja Ranjit Singh",
        correctAnswer: "Maharaja Ranjit Singh",
      }),
      shuffleOptions({
        question: "Who extended the Jat kingdom to Agra, Dholpur and Meerut?",
        optionA: "Badan Singh",
        optionB: "Suraj Mal",
        optionC: "Safdarjung",
        correctAnswer: "Suraj Mal",
      }),
      shuffleOptions({
        question: "Which ruler’s invasion gave the Sikhs an opportunity to expand their power in Punjab?",
        optionA: "Aurangzeb",
        optionB: "Nadir Shah and Ahmad Shah Abdali",
        optionC: "Baji Rao I",
        correctAnswer: "Nadir Shah and Ahmad Shah Abdali",
      }),
      shuffleOptions({
        question: "Who modernised the Mysore army and continued Hyder Ali’s reforms?",
        optionA: "Wodeyar rulers",
        optionB: "Murshid khan",
        optionC: "Tipu Sultan",
        correctAnswer: "Tipu Sultan",
      }),
      shuffleOptions({
        question: "Which Maratha leader famously defeated Afzal Khan?",
        optionA: "Balaji Vishwanath",
        optionB: "Shivaji",
        optionC: "Sambhaji",
        correctAnswer: "Shivaji",
      }),
      shuffleOptions({
        question: "Who became a powerful ruler in Awadh after succeeding Saadat Khan?",
        optionA: "Siraj-ud-Daulah",
        optionB: "Safdarjung",
        optionC: "Chin Qilich Khan",
        correctAnswer: "Safdarjung",
      }),
      shuffleOptions({
        question: "Who led the Sikhs after the death of Guru Govind Singh?",
        optionA: "Banda Bahadur",
        optionB: "Badan Singh",
        optionC: "Jassa Singh Ahluwalia",
        correctAnswer: "Banda Bahadur",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Nadir Shah invaded India in the year ______.",
        optionA: "1739",
        optionB: "1756",
        optionC: "1761",
        correctAnswer: "1739",
      }),
      shuffleOptions({
        question: "Hyder Ali started his career as an ordinary ______.",
        optionA: "farmer",
        optionB: "soldier",
        optionC: "trader",
        correctAnswer: "soldier",
      }),
      shuffleOptions({
        question: "The Jat capital during Suraj Mal’s rule was ______.",
        optionA: "Agra",
        optionB: "Bharatpur",
        optionC: "Mathura",
        correctAnswer: "Bharatpur",
      }),
      shuffleOptions({
        question: "The Sikhs were organised into a military group called ______.",
        optionA: "Khalsa",
        optionB: "Sardeshmukhi",
        optionC: "Mansabdar",
        correctAnswer: "Khalsa",
      }),
      shuffleOptions({
        question: "The misls were ______ political groups formed by the Sikhs.",
        optionA: "eight",
        optionB: "ten",
        optionC: "twelve",
        correctAnswer: "twelve",
      }),
      shuffleOptions({
        question: "Safdarjung made ______ the capital of Awadh.",
        optionA: "Lucknow",
        optionB: "Faizabad",
        optionC: "Delhi",
        correctAnswer: "Lucknow",
      }),
      shuffleOptions({
        question: "Shivaji captured many forts near ______ during the early phase of his rule.",
        optionA: "Pune",
        optionB: "Agra",
        optionC: "Malwa",
        correctAnswer: "Pune",
      }),
      shuffleOptions({
        question: "Suraj Mal extended the Jat kingdom up to ______.",
        optionA: "Bengal",
        optionB: "Aligarh & Agra region",
        optionC: "Gujarat",
        correctAnswer: "Aligarh & Agra region",
      }),
      shuffleOptions({
        question: "The Marathas reached ______ in 1752.",
        optionA: "Delhi",
        optionB: "Jaipur",
        optionC: "Punjab",
        correctAnswer: "Delhi",
      }),
      shuffleOptions({
        question: "Banda Bahadur was executed in ______.",
        optionA: "1716",
        optionB: "1740",
        optionC: "1680",
        correctAnswer: "1716",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Sayyid Brothers were known as the “Kingmakers” in Mughal politics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Raja Sawai Jai Singh built observatories at Delhi, Jaipur, Ujjain, Mathura and Banaras.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Sikhs formed 15 misls during the 18th century.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Suraj Mal was a famous Rajput warrior.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Marathas used guerilla warfare as their main strategy.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tipu Sultan was known as the “Eagle of Mysore”.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Nizam-ul-Mulk crushed rebellions and strengthened Hyderabad.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The invasion of Nadir Shah brought prosperity to the Mughal Empire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Safdarjung ruled Awadh as a weak and ineffective leader.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "After Sambhaji, Sahu continued the struggle against the Mughals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
