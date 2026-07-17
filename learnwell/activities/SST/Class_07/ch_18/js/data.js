export const chapter = "Chapter - 18: Popular Beliefs and Religious Debates";
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
        question: "Who preached that Ram and Rahim are the same and wanted to unite Hindus and Muslims?",
        optionA: "Surdas",
        optionB: "Kabir",
        optionC: "Mirabai",
        correctAnswer: "Kabir",
      }),
      shuffleOptions({
        question: "Who established four maths at Badrinath, Puri, Dwarka and Sringeri?",
        optionA: "Shankaracharya",
        optionB: "Basavanna",
        optionC: "Ramanuja",
        correctAnswer: "Shankaracharya",
      }),
      shuffleOptions({
        question: "Who composed devotional hymns compiled in Sursagar?",
        optionA: "Tulsidas",
        optionB: "Surdas",
        optionC: "Eknath",
        correctAnswer: "Surdas",
      }),
      shuffleOptions({
        question: "Which saint played a key role in spreading Vaishnavism in Bengal?",
        optionA: "Chaitanya",
        optionB: "Jnaneshwar",
        optionC: "Kabir",
        correctAnswer: "Chaitanya",
      }),
      shuffleOptions({
        question: "Who founded the Lingayat movement in Karnataka?",
        optionA: "Namdev",
        optionB: "Basavanna",
        optionC: "Guru Nanak",
        correctAnswer: "Basavanna",
      }),
      shuffleOptions({
        question: "Who was the founder of the Chishti order in India?",
        optionA: "Baba Farid",
        optionB: "Khwaja Moinuddin Chishti",
        optionC: "Nizam-ud-Din Auliya",
        correctAnswer: "Khwaja Moinuddin Chishti",
      }),
      shuffleOptions({
        question: "Which saint wrote Ramcharitmanas?",
        optionA: "Tulsidas",
        optionB: "Surdas",
        optionC: "Jnaneshwar",
        correctAnswer: "Tulsidas",
      }),
      shuffleOptions({
        question: "Who strongly rejected rituals and caste and believed in a formless God?",
        optionA: "Ramananda",
        optionB: "Kabir",
        optionC: "Basavanna",
        correctAnswer: "Kabir",
      }),
      shuffleOptions({
        question: "Which saint was a Rajput princess devoted to Lord Krishna?",
        optionA: "Mirabai",
        optionB: "Nayanar",
        optionC: "Alvar",
        correctAnswer: "Mirabai",
      }),
      shuffleOptions({
        question: "Which Sufi practice involved singing spiritual songs?",
        optionA: "Zikr",
        optionB: "Sama",
        optionC: "Qawwali",
        correctAnswer: "Qawwali",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The Bhakti movement taught that helping others is equal to serving ________.",
        optionA: "the king",
        optionB: "God",
        optionC: "society",
        correctAnswer: "God",
      }),
      shuffleOptions({
        question: "The followers of Madhavacharya worshipped ________.",
        optionA: "Krishna",
        optionB: "Shiva",
        optionC: "Brahma",
        correctAnswer: "Krishna",
      }),
      shuffleOptions({
        question: "The disciples of a Sufi pir were known as ________.",
        optionA: "murids",
        optionB: "chaityas",
        optionC: "pandas",
        correctAnswer: "murids",
      }),
      shuffleOptions({
        question: "The Varkari saints worshipped ________, a form of Vishnu.",
        optionA: "Vitthala",
        optionB: "Rama",
        optionC: "Brahma",
        correctAnswer: "Vitthala",
      }),
      shuffleOptions({
        question: "Guru Nanak introduced community dining called ________.",
        optionA: "satsang",
        optionB: "langar",
        optionC: "ardas",
        correctAnswer: "langar",
      }),
      shuffleOptions({
        question: "Namdev and Tukaram composed Bhakti songs in ________.",
        optionA: "Gujarati",
        optionB: "Marathi",
        optionC: "Bengali",
        correctAnswer: "Marathi",
      }),
      shuffleOptions({
        question: "Shankaracharya spread the idea of ________ or oneness of the soul with God.",
        optionA: "advaita",
        optionB: "dvaita",
        optionC: "nirguna",
        correctAnswer: "advaita",
      }),
      shuffleOptions({
        question: "Chishti Sufi saints lived a simple life supported by ________.",
        optionA: "trade",
        optionB: "donations",
        optionC: "farming",
        correctAnswer: "donations",
      }),
      shuffleOptions({
        question: "The holy book of Sikhism is called ________.",
        optionA: "Adi Granth / Guru Granth Sahib",
        optionB: "Sursagar",
        optionC: "Jnaneshwari",
        correctAnswer: "Adi Granth / Guru Granth Sahib",
      }),
      shuffleOptions({
        question: "Sufis set up religious centres known as ________.",
        optionA: "khanqahs",
        optionB: "chaityas",
        optionC: "viharas",
        correctAnswer: "khanqahs",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Kabir rejected idol worship and all religious rituals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Chishti saints refused royal employment and lived very simply.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Suhrawardi saints lived simple lives and avoided royal support.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Mirabai composed devotional poetry in Rajasthani and Brij.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Sufi saints believed in discovering God within oneself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Alvars were worshippers of Lord Shiva.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Shankaracharya considered Bhakti the best path for realizing God.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Guru Nanak stressed meditation, honest work, and sharing with others.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Varkari saints believed that God resides only in temples.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sufi saints mixed freely with Hindus and preached tolerance.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
