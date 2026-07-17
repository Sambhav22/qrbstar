export const chapter = "Chapter - 2: Microorganisms : Friends and Foes";
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
        question: "Which bacterium helps in converting alcohol into vinegar?",
        optionA: "Rhizobium",
        optionB: "Acetobacter aceti",
        optionC: "Lactobacillus",
        correctAnswer: "Acetobacter aceti",
      }),
      shuffleOptions({
        question: "Which microorganism causes the disease anthrax in animals?",
        optionA: "Bacillus anthracis",
        optionB: "Vibrio cholerae",
        optionC: "Treponema pallidum",
        correctAnswer: "Bacillus anthracis",
      }),
      shuffleOptions({
        question: "Which protozoan causes amoebic dysentery in humans?",
        optionA: "Amoeba proteus",
        optionB: "Entamoeba histolytica",
        optionC: "Plasmodium",
        correctAnswer: "Entamoeba histolytica",
      }),
      shuffleOptions({
        question: "Which group of organisms lack chlorophyll and cannot prepare their own food?",
        optionA: "Algae",
        optionB: "Fungi",
        optionC: "Bacteria",
        correctAnswer: "Fungi",
      }),
      shuffleOptions({
        question: "Which scientist discovered the process of pasteurisation?",
        optionA: "Louis Pasteur",
        optionB: "Robert Koch",
        optionC: "Alexander Fleming",
        correctAnswer: "Louis Pasteur",
      }),
      shuffleOptions({
        question: "Which pigment gives brown algae its colour?",
        optionA: "Chlorophyll",
        optionB: "Fucoxanthin",
        optionC: "Phycoerythrin",
        correctAnswer: "Fucoxanthin",
      }),
      shuffleOptions({
        question: "Which microorganism is used in the production of biogas?",
        optionA: "Bacteria",
        optionB: "Virus",
        optionC: "Protozoa",
        correctAnswer: "Bacteria",
      }),
      shuffleOptions({
        question: "Which protozoan causes sleeping sickness in human beings?",
        optionA: "Giardia",
        optionB: "Trypanosoma",
        optionC: "Plasmodium",
        correctAnswer: "Trypanosoma",
      }),
      shuffleOptions({
        question: "Which fungus is used to make the antibiotic penicillin?",
        optionA: "Rhizopus",
        optionB: "Penicillium",
        optionC: "Aspergillus",
        correctAnswer: "Penicillium",
      }),
      shuffleOptions({
        question: "Which blue-green alga helps to increase soil fertility?",
        optionA: "Anabaena",
        optionB: "Spirogyra",
        optionC: "Volvox",
        correctAnswer: "Anabaena",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "The bacterium that helps in the formation of curd is ______.",
        optionA: "Bacillus",
        optionB: "Lactobacillus",
        optionC: "Spirillum",
        correctAnswer: "Lactobacillus",
      }),
      shuffleOptions({
        question: "The rod-shaped bacteria are called ______.",
        optionA: "Cocci",
        optionB: "Bacilli",
        optionC: "Spirilla",
        correctAnswer: "Bacilli",
      }),
      shuffleOptions({
        question: "The fungus commonly found growing on bread is ______.",
        optionA: "Rhizopus",
        optionB: "Penicillium",
        optionC: "Yeast",
        correctAnswer: "Rhizopus",
      }),
      shuffleOptions({
        question: "The red pigment present in red algae is called ______.",
        optionA: "Fucoxanthin",
        optionB: "Phycoerythrin",
        optionC: "Chlorophyll",
        correctAnswer: "Phycoerythrin",
      }),
      shuffleOptions({
        question: "The bacterium Treponema pallidum causes the disease ______.",
        optionA: "Cholera",
        optionB: "Syphilis",
        optionC: "Typhoid",
        correctAnswer: "Syphilis",
      }),
      shuffleOptions({
        question: "The process of converting nitrogen gas into usable nitrogen compounds is called ______.",
        optionA: "Nitrogen fixation",
        optionB: "Nitrification",
        optionC: "Denitrification",
        correctAnswer: "Nitrogen fixation",
      }),
      shuffleOptions({
        question: "The gas released during fermentation by yeast is ______.",
        optionA: "Oxygen",
        optionB: "Carbon dioxide",
        optionC: "Nitrogen",
        correctAnswer: "Carbon dioxide",
      }),
      shuffleOptions({
        question: "Medicines produced by microorganisms to kill harmful bacteria are called ______.",
        optionA: "Vaccine",
        optionB: "Antibiotic",
        optionC: "Antibody",
        correctAnswer: "Antibiotic",
      }),
      shuffleOptions({
        question: "The process of heating and cooling milk to kill harmful microbes is called ______.",
        optionA: "Sterilisation",
        optionB: "Pasteurisation",
        optionC: "Refrigeration",
        correctAnswer: "Pasteurisation",
      }),
      shuffleOptions({
        question: "Organisms that feed on dead and decaying matter are known as ______.",
        optionA: "Parasites",
        optionB: "Saprophytes",
        optionC: "Autotrophs",
        correctAnswer: "Saprophytes",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Rhizobium bacteria live in the root nodules of leguminous plants.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Viruses can reproduce even outside a living cell.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Anabaena and Nostoc help in fixing atmospheric nitrogen.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Yeast is a multicellular fungus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Penicillium produces an antibiotic called penicillin.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Bacteria play no role in cleaning the environment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Blue-green algae can prepare their own food through photosynthesis.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "AIDS is caused by a virus.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Fungi contain chlorophyll for making their own food.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "The process of pasteurisation was discovered by Robert Koch.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
