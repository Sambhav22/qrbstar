export const chapter = "Chapter - 6: Manufacturing Industries";
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
        question: "Which industry uses softwood from coniferous trees to make newsprint?",
        optionA: "Chemical",
        optionB: "Paper industry",
        optionC: "Cement",
        correctAnswer: "Paper industry",
      }),
      shuffleOptions({
        question: "Which city of Japan is often known as the “Manchester of Japan”?",
        optionA: "Tokyo",
        optionB: "Osaka",
        optionC: "Nagoya",
        correctAnswer: "Osaka",
      }),
      shuffleOptions({
        question: "Which Indian city is called the Silicon Valley of India?",
        optionA: "Lucknow",
        optionB: "Kolkata",
        optionC: "Bengaluru",
        correctAnswer: "Bengaluru",
      }),
      shuffleOptions({
        question: "Which industry uses limestone and coal as its main raw materials?",
        optionA: "Paper",
        optionB: "Cement industry",
        optionC: "Wool",
        correctAnswer: "Cement industry",
      }),
      shuffleOptions({
        question: "Which region of the USA became famous as the “Motor City”?",
        optionA: "New York",
        optionB: "Florida",
        optionC: "Detroit",
        correctAnswer: "Detroit",
      }),
      shuffleOptions({
        question: "Which industry depends heavily on raw materials like cotton, wool and silk?",
        optionA: "Jute industry",
        optionB: "Textile industry",
        optionC: "Mineral industry",
        correctAnswer: "Textile industry",
      }),
      shuffleOptions({
        question: "Which Indian iron and steel plant was founded by Jamshedji Tata?",
        optionA: "Durgapur",
        optionB: "TISCO (Jamshedpur)",
        optionC: "Rourkela",
        correctAnswer: "TISCO (Jamshedpur)",
      }),
      shuffleOptions({
        question: "Which place in India became the second biggest textile city after Mumbai?",
        optionA: "Ahmedabad",
        optionB: "Jaipur",
        optionC: "Chennai",
        correctAnswer: "Ahmedabad",
      }),
      shuffleOptions({
        question: "Which natural factor helped Osaka develop as a textile centre?",
        optionA: "Desert climate",
        optionB: "Warm and humid climate",
        optionC: "Extremely cold climate",
        correctAnswer: "Warm and humid climate",
      }),
      shuffleOptions({
        question: "Which valley in the USA later became famous for IT industries?",
        optionA: "Potomac Valley",
        optionB: "Silicon Valley",
        optionC: "Mississippi Valley",
        correctAnswer: "Silicon Valley",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Iron ore is converted into pig iron in a ________.",
        optionA: "furnace",
        optionB: "blast furnace",
        optionC: "oil chamber",
        correctAnswer: "blast furnace",
      }),
      shuffleOptions({
        question: "Sugar mills are always located close to ________.",
        optionA: "cotton farms",
        optionB: "sugarcane fields",
        optionC: "coal mines",
        correctAnswer: "sugarcane fields",
      }),
      shuffleOptions({
        question: "The IT industry in Bengaluru grew rapidly due to its supportive ________.",
        optionA: "state policies",
        optionB: "climate",
        optionC: "agriculture",
        correctAnswer: "state policies",
      }),
      shuffleOptions({
        question: "The Osaka textile mills get their water mainly from the ________ river.",
        optionA: "Rhine",
        optionB: "Yodo",
        optionC: "Amazon",
        correctAnswer: "Yodo",
      }),
      shuffleOptions({
        question: "The steel industry requires iron ore, coal and ________.",
        optionA: "limestone",
        optionB: "rubber",
        optionC: "leather",
        correctAnswer: "limestone",
      }),
      shuffleOptions({
        question: "Marine-based industries depend on products from the ________.",
        optionA: "oceans",
        optionB: "forests",
        optionC: "mountains",
        correctAnswer: "oceans",
      }),
      shuffleOptions({
        question: "Raw materials like timber and bamboo are used in the ________ industry.",
        optionA: "forest-based industry",
        optionB: "cement",
        optionC: "oil-based",
        correctAnswer: "forest-based industry",
      }),
      shuffleOptions({
        question: "The clustering of many industries in one place creates an industrial ________.",
        optionA: "desert",
        optionB: "region/cluster",
        optionC: "river",
        correctAnswer: "region/cluster",
      }),
      shuffleOptions({
        question: "The main centres of cotton textiles in India developed near ________.",
        optionA: "jute farms",
        optionB: "cotton-growing regions",
        optionC: "tea estates",
        correctAnswer: "cotton-growing regions",
      }),
      shuffleOptions({
        question: "Detroit automobile factories grew due to the availability of coal from the ________ region.",
        optionA: "Deccan",
        optionB: "Siberian mines",
        optionC: "Appalachian coalfields",
        correctAnswer: "Appalachian coalfields",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Iron and steel is considered a basic industry because other industries depend on it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Osaka depends mainly on domestic Japanese cotton for its textile mills.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The first paper mill in India was set up at Serampore in West Bengal.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Cottage industries require very heavy machinery.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Chota Nagpur region in India is rich in coal and iron ore.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Jamshedpur receives water supply from the Khorkai and Subarnarekha rivers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The USA is the world's largest consumer of paper.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bengaluru has become a major IT hub due to its coastal desert climate.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Sugar beet is grown mainly in temperate regions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Silicon Valley became famous for cotton textile manufacturing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
