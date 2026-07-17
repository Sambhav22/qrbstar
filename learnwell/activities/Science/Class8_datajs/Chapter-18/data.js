export const chapter = "Chapter - 18: Air and Water Pollution";
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
        question: "What do we call the addition of harmful and undesirable substances to air?",
        optionA: "Distillation",
        optionB: "Air pollution",
        optionC: "Air dilution",
        correctAnswer: "Air pollution",
      }),
      shuffleOptions({
        question: "Which natural event releases gases and ash that pollute the air?",
        optionA: "Earthquake",
        optionB: "Volcanic eruption",
        optionC: "Landslide",
        correctAnswer: "Volcanic eruption",
      }),
      shuffleOptions({
        question: "Which human activity is a major contributor to air pollution in cities?",
        optionA: "Playing games",
        optionB: "Increasing number of automobiles",
        optionC: "Gardening",
        correctAnswer: "Increasing number of automobiles",
      }),
      shuffleOptions({
        question: "Which poisonous gas reduces the amount of oxygen entering our bloodstream?",
        optionA: "Oxygen",
        optionB: "Carbon monoxide (CO)",
        optionC: "Nitrogen",
        correctAnswer: "Carbon monoxide (CO)",
      }),
      shuffleOptions({
        question: "Which gas traps heat and increases Earth’s temperature through greenhouse effect?",
        optionA: "Helium",
        optionB: "Carbon dioxide (CO₂)",
        optionC: "Hydrogen",
        correctAnswer: "Carbon dioxide (CO₂)",
      }),
      shuffleOptions({
        question: "Which gas damages plant leaves by causing them to dry and curl?",
        optionA: "Neon",
        optionB: "Sulphur dioxide (SO₂)",
        optionC: "Argon",
        correctAnswer: "Sulphur dioxide (SO₂)",
      }),
      shuffleOptions({
        question: "Which chemical compounds are responsible for depletion of the ozone layer?",
        optionA: "Carbohydrates",
        optionB: "Chlorofluorocarbons (CFCs)",
        optionC: "Nitrates",
        correctAnswer: "Chlorofluorocarbons (CFCs)",
      }),
      shuffleOptions({
        question: "What is the mixture of smoke and fog that reduces visibility called?",
        optionA: "Dew",
        optionB: "Smog",
        optionC: "Breeze",
        correctAnswer: "Smog",
      }),
      shuffleOptions({
        question: "What is the corrosion of marble called, seen especially on monuments like the Taj Mahal?",
        optionA: "Marble rust",
        optionB: "Marble cancer",
        optionC: "Marble stain",
        correctAnswer: "Marble cancer",
      }),
      shuffleOptions({
        question: "Excessive carbon dioxide in the atmosphere leads to which condition?",
        optionA: "Global cooling",
        optionB: "Global warming",
        optionC: "Oxygen increase",
        correctAnswer: "Global warming",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Gases like carbon dioxide and methane that absorb heat are called ______.",
        optionA: "noble gases",
        optionB: "greenhouse gases",
        optionC: "inert gases",
        correctAnswer: "greenhouse gases",
      }),
      shuffleOptions({
        question: "The harmful substances that pollute the air are known as ______.",
        optionA: "vitamins",
        optionB: "pollutants",
        optionC: "minerals",
        correctAnswer: "pollutants",
      }),
      shuffleOptions({
        question: "Sulphur dioxide harms plants by making their leaves ______.",
        optionA: "grow faster",
        optionB: "dry, curl and fall off",
        optionC: "become bright",
        correctAnswer: "dry, curl and fall off",
      }),
      shuffleOptions({
        question: "The mixture of smoke and fog forming a dense haze is called ______.",
        optionA: "frost",
        optionB: "smog",
        optionC: "vapour",
        correctAnswer: "smog",
      }),
      shuffleOptions({
        question: "The trapping of heat in the Earth’s atmosphere is known as the ______.",
        optionA: "reflection effect",
        optionB: "greenhouse effect",
        optionC: "cooling effect",
        correctAnswer: "greenhouse effect",
      }),
      shuffleOptions({
        question: "The rise in Earth’s temperature due to excess heat trapping is called ______.",
        optionA: "acidification",
        optionB: "global warming",
        optionC: "oxidation",
        correctAnswer: "global warming",
      }),
      shuffleOptions({
        question: "The process that damages marble structures is known as ______.",
        optionA: "bleaching",
        optionB: "marble cancer",
        optionC: "peeling",
        correctAnswer: "marble cancer",
      }),
      shuffleOptions({
        question: "Water pollution is caused by harmful substances called ______.",
        optionA: "pollutants",
        optionB: "nutrients",
        optionC: "pigments",
        correctAnswer: "pollutants",
      }),
      shuffleOptions({
        question: "Excess growth of algae in water bodies due to fertilisers is called ______.",
        optionA: "hydration",
        optionB: "eutrophication",
        optionC: "evaporation",
        correctAnswer: "eutrophication",
      }),
      shuffleOptions({
        question: "The programme launched in 1985 to clean river Ganga is the ______.",
        optionA: "National Water Mission",
        optionB: "Ganga Action Plan (GAP)",
        optionC: "River Recovery Scheme",
        correctAnswer: "Ganga Action Plan (GAP)",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Air pollution can be caused by both natural events and human activities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "CFCs released from refrigerators and sprays damage the ozone layer.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Smog increases visibility during winter.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Indoor air pollution can be caused by perfumes, paints, sprays and smoking.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Global warming occurs due to decreasing carbon dioxide levels.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Acid rain can damage forests, soil and buildings.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Polluted water does not cause diseases.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Industrial waste containing metals like mercury and arsenic pollutes water bodies.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Oil spills reduce oxygen in water and harm marine life.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Exhaust from CNG vehicles contains a high amount of sulphur dioxide.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
    ]),
  };
}
