export const chapter = "Chapter - 12: Crafts and Industries";
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
        question: "Which group forced Indian weavers to sell their goods at prices 20–40% lower than market rates?",
        optionA: "Indian merchants",
        optionB: "Company officials",
        optionC: "Local zamindars",
        correctAnswer: "Company officials",
      }),
      shuffleOptions({
        question: "Who invented the rotary carding engine that sped up cotton production in England?",
        optionA: "Richard Arkwright",
        optionB: "James Watt",
        optionC: "Edmund Cartwright",
        correctAnswer: "Richard Arkwright",
      }),
      shuffleOptions({
        question: "Which Indian town became world-famous for its fine malmal cloth?",
        optionA: "Surat",
        optionB: "Dacca",
        optionC: "Patna",
        correctAnswer: "Dacca",
      }),
      shuffleOptions({
        question: "Which region saw the earliest cotton mill established in 1854?",
        optionA: "Kanpur",
        optionB: "Ahmedabad",
        optionC: "Bombay",
        correctAnswer: "Bombay",
      }),
      shuffleOptions({
        question: "Which industrial sector expanded rapidly because railways consumed large quantities of fuel?",
        optionA: "Oil industry",
        optionB: "Leather industry",
        optionC: "Coal mining industry",
        correctAnswer: "Coal mining industry",
      }),
      shuffleOptions({
        question: "Which community of businessmen played a major role in starting cotton mills in Bombay?",
        optionA: "Rajputs",
        optionB: "Parsis and Gujaratis",
        optionC: "Marathas",
        correctAnswer: "Parsis and Gujaratis",
      }),
      shuffleOptions({
        question: "Who established the Tata Iron and Steel Company after taking forward Jamshedji Tata’s vision?",
        optionA: "R.D. Birla",
        optionB: "Dorabji Tata",
        optionC: "Dadabhai Naoroji",
        correctAnswer: "Dorabji Tata",
      }),
      shuffleOptions({
        question: "Which industry in India faced strong competition from Scottish mills in the beginning?",
        optionA: "Sugar",
        optionB: "Jute industry",
        optionC: "Cement",
        correctAnswer: "Jute industry",
      }),
      shuffleOptions({
        question: "Which place had ideal black soil and damp climate suitable for cotton farming?",
        optionA: "Western India",
        optionB: "Eastern India",
        optionC: "Northern India",
        correctAnswer: "Western India",
      }),
      shuffleOptions({
        question: "Which traditional steel of India was famous for its flowing water-like pattern on swords?",
        optionA: "Cast iron",
        optionB: "Wootz steel",
        optionC: "Tinned steel",
        correctAnswer: "Wootz steel",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "British traders bought raw material in bulk from India, causing ______ for local craftsmen.",
        optionA: "abundance",
        optionB: "scarcity",
        optionC: "surplus",
        correctAnswer: "scarcity",
      }),
      shuffleOptions({
        question: "Many weavers were forced to leave their profession and work as ______ labourers.",
        optionA: "agricultural",
        optionB: "domestic",
        optionC: "factory",
        correctAnswer: "agricultural",
      }),
      shuffleOptions({
        question: "British goods entering India were exempted from ______ duties.",
        optionA: "export",
        optionB: "import",
        optionC: "sales",
        correctAnswer: "import",
      }),
      shuffleOptions({
        question: "After de-industrialisation, Indian economy became more ______.",
        optionA: "industrial",
        optionB: "agricultural",
        optionC: "urban",
        correctAnswer: "agricultural",
      }),
      shuffleOptions({
        question: "The first jute mill in India was established at ______.",
        optionA: "Rishra",
        optionB: "Nagpur",
        optionC: "Jamshedpur",
        correctAnswer: "Rishra",
      }),
      shuffleOptions({
        question: "During World War I, Indian mills were instructed to produce cloth for ______ supplies.",
        optionA: "royal",
        optionB: "military",
        optionC: "school",
        correctAnswer: "military",
      }),
      shuffleOptions({
        question: "Wootz steel blades had a unique pattern because of tiny ______ crystals.",
        optionA: "copper",
        optionB: "carbon",
        optionC: "iron oxide",
        correctAnswer: "carbon",
      }),
      shuffleOptions({
        question: "The British imposed very high taxation on Indian ______ and craftsmen.",
        optionA: "farmers",
        optionB: "teachers",
        optionC: "artisans",
        correctAnswer: "artisans",
      }),
      shuffleOptions({
        question: "The decline of Indian industries under colonial rule is known as ______.",
        optionA: "industrialisation",
        optionB: "de-industrialisation",
        optionC: "mechanisation",
        correctAnswer: "de-industrialisation",
      }),
      shuffleOptions({
        question: "The black soil region of western India was suitable for growing ______.",
        optionA: "wheat",
        optionB: "cotton",
        optionC: "jute",
        correctAnswer: "cotton",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "British officials sometimes punished Indian weavers for refusing to work by cutting their thumbs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Plantation workers enjoyed good working conditions and fair treatment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The British railway system increased demand for coal mining in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cities like Dhaka and Surat lost population because weaving jobs disappeared.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Indian iron-smelting and textile industries were both affected by colonial policies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "British capitalists in India were given cheaper railway freight than Indian industrialists.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Machine-made goods from England were more expensive than Indian handmade goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Jute from Indian mills eventually dominated the world supply.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "After the Industrial Revolution, Indian hand-woven goods could easily compete with British goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Many artisans migrated to cities and joined cotton mills in places like Bombay and Sholapur.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
