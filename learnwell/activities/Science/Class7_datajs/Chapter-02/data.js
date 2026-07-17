export const chapter = "Chapter - 2: Nutrition in Animals";
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
        question: "Which process in animals includes ingestion, digestion, absorption, assimilation, and egestion?",
        optionA: "Photosynthesis",
        optionB: "Holozoic nutrition",
        optionC: "Saprotrophic nutrition",
        correctAnswer: "Holozoic nutrition",
      }),
      shuffleOptions({
        question: "Which type of teeth are used for grinding and chewing food?",
        optionA: "Molars",
        optionB: "Incisors",
        optionC: "Canines",
        correctAnswer: "Molars",
      }),
      shuffleOptions({
        question: "What is the J-shaped organ where food is mixed with acid and enzymes?",
        optionA: "Small intestine",
        optionB: "Stomach",
        optionC: "Liver",
        correctAnswer: "Stomach",
      }),
      shuffleOptions({
        question: "Which part of the small intestine receives bile and pancreatic juices?",
        optionA: "Colon",
        optionB: "Duodenum",
        optionC: "Rectum",
        correctAnswer: "Duodenum",
      }),
      shuffleOptions({
        question: "Which gland secretes pancreatic juice to digest carbohydrates and proteins?",
        optionA: "Pancreas",
        optionB: "Liver",
        optionC: "Gall bladder",
        correctAnswer: "Pancreas",
      }),
      shuffleOptions({
        question: "Which animal pushes out its stomach to digest soft animals inside shells?",
        optionA: "Frog",
        optionB: "Starfish",
        optionC: "Snail",
        correctAnswer: "Starfish",
      }),
      shuffleOptions({
        question: "What is the total number of teeth in an adult human being?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        correctAnswer: "32",
      }),
      shuffleOptions({
        question: "What kind of food do carnivores eat?",
        optionA: "Plants",
        optionB: "Both plants and animals",
        optionC: "Other animals",
        correctAnswer: "Other animals",
      }),
      shuffleOptions({
        question: "What is the name of the muscular movement of the oesophagus that pushes food downward?",
        optionA: "Contraction",
        optionB: "Peristalsis",
        optionC: "Diffusion",
        correctAnswer: "Peristalsis",
      }),
      shuffleOptions({
        question: "Which disease results from excessive secretion of stomach acid damaging the lining?",
        optionA: "Ulcer",
        optionB: "Heartburn",
        optionC: "Diarrhoea",
        correctAnswer: "Ulcer",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Amoeba takes in food with the help of ______.",
        optionA: "cilia",
        optionB: "flagella",
        optionC: "pseudopodia",
        correctAnswer: "pseudopodia",
      }),
      shuffleOptions({
        question: "The largest gland in the human body is the ______.",
        optionA: "pancreas",
        optionB: "liver",
        optionC: "gall bladder",
        correctAnswer: "liver",
      }),
      shuffleOptions({
        question: "Food in the stomach is converted into a thick liquid called ______.",
        optionA: "chyme",
        optionB: "bile",
        optionC: "saliva",
        correctAnswer: "chyme",
      }),
      shuffleOptions({
        question: "The ______ secretes a greenish liquid that helps in the digestion of fats.",
        optionA: "pancreas",
        optionB: "liver",
        optionC: "stomach",
        correctAnswer: "liver",
      }),
      shuffleOptions({
        question: "The tongue surface is rough due to the presence of ______.",
        optionA: "villi",
        optionB: "papillae",
        optionC: "mucous",
        correctAnswer: "papillae",
      }),
      shuffleOptions({
        question: "The small intestine absorbs nutrients with the help of finger-like projections called ______.",
        optionA: "villi",
        optionB: "papillae",
        optionC: "alveoli",
        correctAnswer: "villi",
      }),
      shuffleOptions({
        question: "The process of bringing back swallowed food to chew again is called ______.",
        optionA: "mastication",
        optionB: "rumination",
        optionC: "ingestion",
        correctAnswer: "rumination",
      }),
      shuffleOptions({
        question: "The main function of large intestine is to absorb ______ from undigested food.",
        optionA: "sugar",
        optionB: "water",
        optionC: "protein",
        correctAnswer: "water",
      }),
      shuffleOptions({
        question: "The third molars that appear in late teens are known as ______.",
        optionA: "baby teeth",
        optionB: "wisdom teeth",
        optionC: "canines",
        correctAnswer: "wisdom teeth",
      }),
      shuffleOptions({
        question: "The ______ present in saliva helps to break down starch.",
        optionA: "enzyme",
        optionB: "acid",
        optionC: "protein",
        correctAnswer: "enzyme",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In humans, digestion is an intracellular process.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The oesophagus carries out digestion by secreting juices.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Ruminants such as cows have a stomach divided into four chambers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bile is stored in the gall bladder before being released into the small intestine.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Villi in the large intestine help to absorb nutrients.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Plaque is a sticky film of bacteria that forms on teeth.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The appendix helps in digestion by producing enzymes.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Peptic ulcer is caused by excess mucus secretion in the stomach.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Amoeba shows autotrophic mode of nutrition.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The gall bladder secretes pancreatic juice.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
