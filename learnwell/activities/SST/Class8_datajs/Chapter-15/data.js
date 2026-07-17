export const chapter = "Chapter - 15: Women, Caste and Reform";
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
        question: "Who campaigned strongly against the purdah system and easy divorce among Muslims?",
        optionA: "Periyar",
        optionB: "Sir Syed Ahmed Khan",
        optionC: "Dadabhai Naoroji",
        correctAnswer: "Sir Syed Ahmed Khan",
      }),
      shuffleOptions({
        question: "Who founded the Ramakrishna Math at Belur?",
        optionA: "Swami Vivekananda",
        optionB: "Keshub Chandra Sen",
        optionC: "Shri Narayana Guru",
        correctAnswer: "Swami Vivekananda",
      }),
      shuffleOptions({
        question: "Who established an institution in Poona to educate young widows and train them as teachers?",
        optionA: "D.K. Karve",
        optionB: "Ranade",
        optionC: "Phule",
        correctAnswer: "D.K. Karve",
      }),
      shuffleOptions({
        question: "Who criticised polygamy among Muslims and promoted women’s education?",
        optionA: "Swami Dayanand",
        optionB: "Sir Syed Ahmed Khan",
        optionC: "Ishwar Chandra Vidyasagar",
        correctAnswer: "Sir Syed Ahmed Khan",
      }),
      shuffleOptions({
        question: "Who started Seva Sadan for distressed women?",
        optionA: "Savitri Phule",
        optionB: "Ramabai Ranade",
        optionC: "Pandita Ramabai",
        correctAnswer: "Ramabai Ranade",
      }),
      shuffleOptions({
        question: "Who founded the Advaita Ashram at Aluva in 1913?",
        optionA: "Shri Narayana Guru",
        optionB: "Vivekananda",
        optionC: "Ambedkar",
        correctAnswer: "Shri Narayana Guru",
      }),
      shuffleOptions({
        question: "Who was arrested for fighting for temple entry for lower castes?",
        optionA: "Periyar",
        optionB: "Ambedkar",
        optionC: "Phule",
        correctAnswer: "Periyar",
      }),
      shuffleOptions({
        question: "Who initiated the Temple Entry Movement at Kalaram Temple?",
        optionA: "Gandhi",
        optionB: "B.R. Ambedkar",
        optionC: "Malabari",
        correctAnswer: "B.R. Ambedkar",
      }),
      shuffleOptions({
        question: "Who wrote articles in The Times highlighting child marriage?",
        optionA: "Ranade",
        optionB: "Behramji Malabari",
        optionC: "Dayanand Saraswati",
        correctAnswer: "Behramji Malabari",
      }),
      shuffleOptions({
        question: "Who compared the condition of Shudras in India with American slaves in his writings?",
        optionA: "Swami Vivekananda",
        optionB: "Dadabhai Naoroji",
        optionC: "Jyotiba Phule",
        correctAnswer: "Jyotiba Phule",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Swami Dayanand founded the ______ in 1875.",
        optionA: "Brahmo Samaj",
        optionB: "Arya Samaj",
        optionC: "Prarthana Samaj",
        correctAnswer: "Arya Samaj",
      }),
      shuffleOptions({
        question: "The first girls’ school in India, Bethune School, was started in ______.",
        optionA: "1849",
        optionB: "1870",
        optionC: "1867",
        correctAnswer: "1849",
      }),
      shuffleOptions({
        question: "Gandhiji started the weekly paper ______ to promote equality.",
        optionA: "Harijan",
        optionB: "Nation",
        optionC: "Swaraj",
        correctAnswer: "Harijan",
      }),
      shuffleOptions({
        question: "The organisation founded by Phule in 1873 was the ______.",
        optionA: "Arya Mahila Samaj",
        optionB: "Satyashodhak Samaj",
        optionC: "Hindu Mahasabha",
        correctAnswer: "Satyashodhak Samaj",
      }),
      shuffleOptions({
        question: "The Female Infanticide Act was passed in ______.",
        optionA: "1870",
        optionB: "1856",
        optionC: "1929",
        correctAnswer: "1870",
      }),
      shuffleOptions({
        question: "Periyar set up an organisation named ______.",
        optionA: "Dravidar Kazhagam",
        optionB: "Depressed Classes Association",
        optionC: "Brahmo Samaj",
        correctAnswer: "Dravidar Kazhagam",
      }),
      shuffleOptions({
        question: "Shri Narayana Guru’s spiritual organisation was called ______.",
        optionA: "Narayan Dharma Paripalana Yogam",
        optionB: "Satyashodhak Samaj",
        optionC: "Arya Samaj",
        correctAnswer: "Narayan Dharma Paripalana Yogam",
      }),
      shuffleOptions({
        question: "Gandhi founded the ______ Ashram in 1916.",
        optionA: "Sabarmati",
        optionB: "Sevagram",
        optionC: "Belur",
        correctAnswer: "Sabarmati",
      }),
      shuffleOptions({
        question: "The marriageable age of girls was raised to 14 by the ______.",
        optionA: "Sharda Act",
        optionB: "Widow Remarriage Act",
        optionC: "Age of Consent Act",
        correctAnswer: "Sharda Act",
      }),
      shuffleOptions({
        question: "Dadabhai Naoroji strongly supported ______ education among Parsi girls.",
        optionA: "Sanskrit",
        optionB: "Modern",
        optionC: "Temple",
        correctAnswer: "Modern",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Swami Vivekananda believed caste should be based on qualities, not birth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Periyar supported temple entry for lower castes and fought for it throughout his life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Vidyasagar opposed the education of girls and supported caste restrictions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Gandhi opened his Sabarmati Ashram to people of all religions and castes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Malabari wrote articles exposing the tragedy of child marriage.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shri Narayana Guru believed that people should be divided based on caste purity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jyotiba Phule and Savitri Phule pioneered girls’ education in Poona.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Ambedkar wrote several journals to spread social reform ideas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The caste system promoted scientific and liberal thinking in society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "D.K. Karve gave widows employment so they would not feel like an economic burden.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
