export const chapter = "Chapter - 14: Education and British Rule";
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
        question: "Who established the Calcutta Madarsa to promote Persian and Arabic studies?",
        optionA: "Warren Hastings",
        optionB: "Charles Wood",
        optionC: "Lord Lytton",
        correctAnswer: "Warren Hastings",
      }),
      shuffleOptions({
        question: "Who founded the Asiatic Society of Bengal for research on Indian culture and languages?",
        optionA: "Henry Thomas Colebrooke",
        optionB: "Sir William Jones",
        optionC: "Lord Macaulay",
        correctAnswer: "Sir William Jones",
      }),
      shuffleOptions({
        question: "Who recommended English as the medium of instruction in India?",
        optionA: "Jonathan Duncan",
        optionB: "Lord Macaulay",
        optionC: "Satish Chandra Mukherjee",
        correctAnswer: "Lord Macaulay",
      }),
      shuffleOptions({
        question: "Who strongly supported women’s education and opened many girls’ schools?",
        optionA: "Ishwar Chandra Vidyasagar",
        optionB: "Swami Dayanand",
        optionC: "Aurobindo Ghosh",
        correctAnswer: "Ishwar Chandra Vidyasagar",
      }),
      shuffleOptions({
        question: "Who established the Mohammedan Anglo-Oriental College at Aligarh?",
        optionA: "Dr Jackson",
        optionB: "Sir Syed Ahmed Khan",
        optionC: "Maharaja Sayajirao",
        correctAnswer: "Sir Syed Ahmed Khan",
      }),
      shuffleOptions({
        question: "Who started the Bengal National College during the Swadeshi movement?",
        optionA: "Satish Chandra Mukherjee",
        optionB: "Aurobindo Ghosh",
        optionC: "Raja Ram Mohan Roy",
        correctAnswer: "Aurobindo Ghosh",
      }),
      shuffleOptions({
        question: "Who believed that education should train the head, heart and hand?",
        optionA: "Lord Curzon",
        optionB: "Mahatma Gandhi",
        optionC: "Dayanand Saraswati",
        correctAnswer: "Mahatma Gandhi",
      }),
      shuffleOptions({
        question: "Who introduced a systematic and organised education system through a major despatch?",
        optionA: "Charles Wood",
        optionB: "Lord Ripon",
        optionC: "William Bentinck",
        correctAnswer: "Charles Wood",
      }),
      shuffleOptions({
        question: "Who developed a new technique to teach Sanskrit and promoted Bengali prose?",
        optionA: "Swami Dayanand Saraswati",
        optionB: "Ishwar Chandra Vidyasagar",
        optionC: "Raja Ram Mohan Roy",
        correctAnswer: "Ishwar Chandra Vidyasagar",
      }),
      shuffleOptions({
        question: "Who wanted to establish a university in Baroda that could provide all-round education?",
        optionA: "Maharaja Sayajirao Gaekwad III",
        optionB: "Raja Mahinder Pratap",
        optionC: "Dr Jackson",
        correctAnswer: "Maharaja Sayajirao Gaekwad III",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Fort William College was set up to train officials in Indian ______.",
        optionA: "geography",
        optionB: "languages and customs",
        optionC: "trade",
        correctAnswer: "languages and customs",
      }),
      shuffleOptions({
        question: "The British initially supported oriental education to help in smooth ______.",
        optionA: "farming",
        optionB: "administration",
        optionC: "industry",
        correctAnswer: "administration",
      }),
      shuffleOptions({
        question: "English was made the official language in the year ______.",
        optionA: "1840",
        optionB: "1844",
        optionC: "1857",
        correctAnswer: "1844",
      }),
      shuffleOptions({
        question: "The Wood’s Despatch led to the opening of universities in _______.",
        optionA: "Bombay, Calcutta and Madras",
        optionB: "Delhi, Patna and Calcutta",
        optionC: "Madras, Kanpur and Shillong",
        correctAnswer: "Bombay, Calcutta and Madras",
      }),
      shuffleOptions({
        question: "English education created a sense of ______ among educated Indians.",
        optionA: "division",
        optionB: "oneness",
        optionC: "fear",
        correctAnswer: "oneness",
      }),
      shuffleOptions({
        question: "The new education system neglected ______ education completely.",
        optionA: "boys’",
        optionB: "British",
        optionC: "girls’",
        correctAnswer: "girls’",
      }),
      shuffleOptions({
        question: "Indigenous pathshalas were mostly funded by ______.",
        optionA: "British officers",
        optionB: "rich native people or teachers themselves",
        optionC: "missionaries",
        correctAnswer: "rich native people or teachers themselves",
      }),
      shuffleOptions({
        question: "Gandhi believed education in English ______ Indians.",
        optionA: "empowered",
        optionB: "crippled",
        optionC: "separated",
        correctAnswer: "crippled",
      }),
      shuffleOptions({
        question: "The Swadeshi movement encouraged ______ education.",
        optionA: "national",
        optionB: "military",
        optionC: "foreign",
        correctAnswer: "national",
      }),
      shuffleOptions({
        question: "The MAO College later became the ______.",
        optionA: "Vishwabharati University",
        optionB: "Aligarh Muslim University",
        optionC: "Jamia Millia Islamia",
        correctAnswer: "Aligarh Muslim University",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The British introduced modern education to get cheap and loyal clerks.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Orientalists believed education should be given only through English.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "English education helped educated Indians from different regions unite.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The indigenous system declined because English-educated people were preferred for jobs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British promoted scientific and technical education from the beginning.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gandhiji promoted education in Indian languages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Pathshalas and madrasas were usually supported by wealthy locals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Baroda was one of the most progressive princely states in educational reforms.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "English becoming the medium in schools widened the cultural gap among Indians.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sir Syed Ahmed Khan opposed modern scientific thought among Muslims.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
