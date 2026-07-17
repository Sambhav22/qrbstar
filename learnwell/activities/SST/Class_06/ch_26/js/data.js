export const chapter = "Chapter - 26: Rural Administration";
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
        question: "Who supervises the work of Patwaris in a tehsil?",
        optionA: "DSP",
        optionB: "Tehsildar",
        optionC: "SHO",
        correctAnswer: "Tehsildar",
      }),
      shuffleOptions({
        question: "Who is responsible for resolving land disputes at the village level?",
        optionA: "Patwari",
        optionB: "SP",
        optionC: "Tehsildar",
        correctAnswer: "Tehsildar",
      }),
      shuffleOptions({
        question: "Who accompanied Harbeer to the Patwari during the enquiry?",
        optionA: "SHO",
        optionB: "Constable",
        optionC: "District Officer",
        correctAnswer: "Constable",
      }),
      shuffleOptions({
        question: "Who built the small boundary that Tejpal later shifted?",
        optionA: "Kanungo",
        optionB: "Harbeer Tomer",
        optionC: "Ramu Singh",
        correctAnswer: "Harbeer Tomer",
      }),
      shuffleOptions({
        question: "Who maintains all land maps and field measurements?",
        optionA: "Patwari",
        optionB: "SP",
        optionC: "DSP",
        correctAnswer: "Patwari",
      }),
      shuffleOptions({
        question: "Who heads the police circle that contains several thanas?",
        optionA: "SHO",
        optionB: "DSP",
        optionC: "Patwari",
        correctAnswer: "DSP",
      }),
      shuffleOptions({
        question: "Who helped prove Harbeer’s land ownership by showing the Khasra?",
        optionA: "SHO",
        optionB: "Patwari",
        optionC: "District Collector",
        correctAnswer: "Patwari",
      }),
      shuffleOptions({
        question: "Who promised to conduct an enquiry after registering Harbeer’s complaint?",
        optionA: "Kanungo",
        optionB: "SHO",
        optionC: "District Officer",
        correctAnswer: "SHO",
      }),
      shuffleOptions({
        question: "Who provides details of crops after every harvest to the government?",
        optionA: "Patwari",
        optionB: "Naib-Tehsildar",
        optionC: "SP",
        correctAnswer: "Patwari",
      }),
      shuffleOptions({
        question: "Who is responsible for ensuring proper functioning of all departments in a district?",
        optionA: "District Collector / District Magistrate (DM)",
        optionB: "SHO",
        optionC: "Constable",
        correctAnswer: "District Collector / District Magistrate (DM)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rural disputes often happen because of broken or shifted ______.",
        optionA: "wells",
        optionB: "boundaries",
        optionC: "canals",
        correctAnswer: "boundaries",
      }),
      shuffleOptions({
        question: "A police station must take action in case of a theft, fight or ______.",
        optionA: "accident",
        optionB: "marriage",
        optionC: "festival",
        correctAnswer: "accident",
      }),
      shuffleOptions({
        question: "A Patwari regularly updates records of crops grown at every ______.",
        optionA: "season",
        optionB: "harvest",
        optionC: "month",
        correctAnswer: "harvest",
      }),
      shuffleOptions({
        question: "Farmers sometimes need land records when buying ______.",
        optionA: "jewellery",
        optionB: "fertilisers",
        optionC: "clothes",
        correctAnswer: "fertilisers",
      }),
      shuffleOptions({
        question: "Each police circle is placed under a ______.",
        optionA: "Head Constable",
        optionB: "Lekhpal",
        optionC: "DSP",
        correctAnswer: "DSP",
      }),
      shuffleOptions({
        question: "A Khasra contains the name of the land ______.",
        optionA: "borrower",
        optionB: "owner",
        optionC: "visitor",
        correctAnswer: "owner",
      }),
      shuffleOptions({
        question: "Harbeer went to the police station to file a complaint after his boundary was ______.",
        optionA: "repaired",
        optionB: "shifted",
        optionC: "cleaned",
        correctAnswer: "shifted",
      }),
      shuffleOptions({
        question: "Land records are also needed when applying for a bank ______.",
        optionA: "holiday",
        optionB: "loan",
        optionC: "fine",
        correctAnswer: "loan",
      }),
      shuffleOptions({
        question: "The Patwari keeps all land maps safely in his ______.",
        optionA: "custody",
        optionB: "pocket",
        optionC: "cupboard at home",
        correctAnswer: "custody",
      }),
      shuffleOptions({
        question: "The 2005 amendment gave equal property share to daughters and the ______.",
        optionA: "neighbour",
        optionB: "widow",
        optionC: "teacher",
        correctAnswer: "widow",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "A DSP supervises several police stations in a circle.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Patwari helps maintain records of crops grown each year.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Tejpal voluntarily gave back the land he had taken from Harbeer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Police stations in villages handle theft, fights and accidents.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Farmers can easily obtain land records without any difficulty.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Khasra contains information about area, crops and ownership.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Land disputes never occur in villages.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Rural administration includes maintaining law and order.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The SHO is responsible for listening to complaints from villagers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The New Inheritance Law gives property rights only to sons.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
