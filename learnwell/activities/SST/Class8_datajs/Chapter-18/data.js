export const chapter = "Chapter - 18: Nationalist Movement (1885-1919)";
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
        question: "Who described Swaraj as the “birthright” of Indians?",
        optionA: "Gopal Krishna Gokhale",
        optionB: "Bal Gangadhar Tilak",
        optionC: "Bipin Chandra Pal",
        correctAnswer: "Bal Gangadhar Tilak",
      }),
      shuffleOptions({
        question: "Who among the following founded the Indian Association in 1876?",
        optionA: "Dadabhai Naoroji",
        optionB: "Surendranath Banerjee",
        optionC: "Lala Lajpat Rai",
        correctAnswer: "Surendranath Banerjee",
      }),
      shuffleOptions({
        question: "Which British officer ordered firing at Jallianwala Bagh in 1919?",
        optionA: "Lord Hardinge",
        optionB: "General Dyer",
        optionC: "Lord Lytton",
        correctAnswer: "General Dyer",
      }),
      shuffleOptions({
        question: "Who led the Home Rule League along with Tilak?",
        optionA: "Annie Besant",
        optionB: "Sarojini Naidu",
        optionC: "Madam Cama",
        correctAnswer: "Annie Besant",
      }),
      shuffleOptions({
        question: "Which Viceroy supported the creation of separate Muslim electorates?",
        optionA: "Lord Curzon",
        optionB: "Lord Minto",
        optionC: "Lord Ripon",
        correctAnswer: "Lord Minto",
      }),
      shuffleOptions({
        question: "Who was deported to Burma for extremist activities?",
        optionA: "Gopal Krishna Gokhale",
        optionB: "Lala Lajpat Rai",
        optionC: "Mohammad Ali Jinnah",
        correctAnswer: "Lala Lajpat Rai",
      }),
      shuffleOptions({
        question: "Who were the main leaders of the Lal-Bal-Pal group?",
        optionA: "Hadayal, Barkatulla, Sohan Singh",
        optionB: "Lajpat Rai, Tilak, Bipin Chandra Pal",
        optionC: "Gokhale, Naoroji, Sayani",
        correctAnswer: "Lajpat Rai, Tilak, Bipin Chandra Pal",
      }),
      shuffleOptions({
        question: "Who led revolutionary activities from foreign countries like the US and Germany?",
        optionA: "Rashbehari Bose",
        optionB: "V.D. Savarkar",
        optionC: "Lala Hardayal",
        correctAnswer: "Lala Hardayal",
      }),
      shuffleOptions({
        question: "Which leader represented the Muslim delegation that met Lord Minto in 1906?",
        optionA: "Aga Khan & Nawab Salimulla",
        optionB: "Jinnah & Liaquat Ali",
        optionC: "Hakim Ajmal Khan & Maulana Azad",
        correctAnswer: "Aga Khan & Nawab Salimulla",
      }),
      shuffleOptions({
        question: "Who renounced his knighthood after the Jallianwala Bagh tragedy?",
        optionA: "Mahatma Gandhi",
        optionB: "Rabindranath Tagore",
        optionC: "Subhash Chandra Bose",
        correctAnswer: "Rabindranath Tagore",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The main intention behind the Partition of Bengal was to divide people on ________ lines.",
        optionA: "economic",
        optionB: "communal",
        optionC: "linguistic",
        correctAnswer: "communal",
      }),
      shuffleOptions({
        question: "The British imposed the ________ Act to restrict Indian-language newspapers.",
        optionA: "Rowlatt Act",
        optionB: "Vernacular Press Act",
        optionC: "Arms Act",
        correctAnswer: "Vernacular Press Act",
      }),
      shuffleOptions({
        question: "The ________ Party planned to raise an armed rebellion during the First World War.",
        optionA: "Swadeshi",
        optionB: "Ghadar",
        optionC: "Home Rule",
        correctAnswer: "Ghadar",
      }),
      shuffleOptions({
        question: "The Muslim League was formed in the year ________.",
        optionA: "1906",
        optionB: "1905",
        optionC: "1908",
        correctAnswer: "1906",
      }),
      shuffleOptions({
        question: "The capital of India was shifted from Calcutta to ________ in 1911.",
        optionA: "Bombay",
        optionB: "Delhi",
        optionC: "Madras",
        correctAnswer: "Delhi",
      }),
      shuffleOptions({
        question: "The Swadeshi movement started on ________.",
        optionA: "7 August 1905",
        optionB: "16 October 1905",
        optionC: "6 April 1919",
        correctAnswer: "7 August 1905",
      }),
      shuffleOptions({
        question: "Under the 1909 reforms, ________ electorates were introduced for Muslims.",
        optionA: "joint",
        optionB: "limited",
        optionC: "separate",
        correctAnswer: "separate",
      }),
      shuffleOptions({
        question: "The Rowlatt Act allowed imprisonment without ________.",
        optionA: "trial",
        optionB: "evidence",
        optionC: "charges",
        correctAnswer: "trial",
      }),
      shuffleOptions({
        question: "The British justified the First World War as a defence of ________.",
        optionA: "socialism",
        optionB: "liberty and democracy",
        optionC: "monarchy",
        correctAnswer: "liberty and democracy",
      }),
      shuffleOptions({
        question: "The national movement strengthened after Indians faced ________ exploitation.",
        optionA: "economic",
        optionB: "political",
        optionC: "industrial",
        correctAnswer: "economic",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The moderates believed that the British would act fairly if approached constitutionally.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The extremists believed mass protests and swadeshi were more effective than petitions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The British readily punished their own officers for racial discrimination.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Bengal was divided mainly to improve administrative efficiency.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The Ghadar Party encouraged Indians working abroad to support revolutionary activity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Imperial Durbar declared Bengal’s reunion in 1911.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Extremist leaders always supported violent methods as their first choice.",
        optionA: "True",
        optionB: "False  (They believed in self-reliance and mass agitation, not blind violence.)",
        correctAnswer: "False  (They believed in self-reliance and mass agitation, not blind violence.)",
      }),
      shuffleOptions({
        question: "The 1909 Act increased the number of elected members in legislative councils.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jallianwala Bagh had only one exit, which was blocked during firing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Revolutionaries believed that petitions were enough to remove the British from India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
