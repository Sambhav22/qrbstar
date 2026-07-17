export const chapter = "Chapter - 27: Laws for Social Justice";
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
        question: "Which Act fixes the minimum wages that a worker must be paid?",
        optionA: "Consumer Protection Act",
        optionB: "Minimum Wages Act, 1948",
        optionC: "Mines Act",
        correctAnswer: "Minimum Wages Act, 1948",
      }),
      shuffleOptions({
        question: "Which Act sets standards for lighting, ventilation and safety in factories?",
        optionA: "Factories Act",
        optionB: "Domestic Violence Act",
        optionC: "Child Labour Act",
        correctAnswer: "Factories Act",
      }),
      shuffleOptions({
        question: "Which group of workers often accept low wages due to lack of options?",
        optionA: "Engineers",
        optionB: "Poor and illiterate labourers",
        optionC: "Government officials",
        correctAnswer: "Poor and illiterate labourers",
      }),
      shuffleOptions({
        question: "Which Act protects women from verbal, emotional and economic abuse?",
        optionA: "Equal Remuneration Act",
        optionB: "Domestic Violence Act, 2005",
        optionC: "Factories Act",
        correctAnswer: "Domestic Violence Act, 2005",
      }),
      shuffleOptions({
        question: "Which law ensures equal wages for men and women for similar work?",
        optionA: "Mines Act",
        optionB: "Maintenance of Senior Citizens Act",
        optionC: "Equal Remuneration Act, 1976",
        correctAnswer: "Equal Remuneration Act, 1976",
      }),
      shuffleOptions({
        question: "Which chemical leaked during the Bhopal Gas Tragedy?",
        optionA: "Ammonia",
        optionB: "MIC (Methyl Iso-Cyanite)",
        optionC: "Chlorine",
        correctAnswer: "MIC (Methyl Iso-Cyanite)",
      }),
      shuffleOptions({
        question: "Which Act makes it illegal to employ children in hazardous industries?",
        optionA: "Environment Protection Act",
        optionB: "Domestic Violence Act",
        optionC: "Child Labour (Prohibition & Regulation) Act",
        correctAnswer: "Child Labour (Prohibition & Regulation) Act",
      }),
      shuffleOptions({
        question: "Which courts handle complaints related to goods and services?",
        optionA: "Criminal courts",
        optionB: "Consumer courts",
        optionC: "Labour courts",
        correctAnswer: "Consumer courts",
      }),
      shuffleOptions({
        question: "Which Act was enacted after the Bhopal disaster to strengthen environmental safety?",
        optionA: "Maintenance Act",
        optionB: "Environment Protection Act, 1986",
        optionC: "Equal Remuneration Act",
        correctAnswer: "Environment Protection Act, 1986",
      }),
      shuffleOptions({
        question: "Which Act benefits elderly parents who cannot maintain themselves?",
        optionA: "Minimum Wages Act",
        optionB: "Senior Citizens Act, 2007",
        optionC: "Consumer Protection Act",
        correctAnswer: "Senior Citizens Act, 2007",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Many workers remain unaware of their ________.",
        optionA: "rights",
        optionB: "holidays",
        optionC: "promotions",
        correctAnswer: "rights",
      }),
      shuffleOptions({
        question: "Industries must ensure that pollutants do not contaminate air, water and ________.",
        optionA: "stone",
        optionB: "soil",
        optionC: "plastic",
        correctAnswer: "soil",
      }),
      shuffleOptions({
        question: "The Factories Act limits the working week to ________ hours.",
        optionA: "36",
        optionB: "48",
        optionC: "60",
        correctAnswer: "48",
      }),
      shuffleOptions({
        question: "Children under ________ years cannot be employed in any workshop.",
        optionA: "16",
        optionB: "14",
        optionC: "10",
        correctAnswer: "14",
      }),
      shuffleOptions({
        question: "Domestic violence may include emotional and ________ abuse.",
        optionA: "economic",
        optionB: "musical",
        optionC: "recreational",
        correctAnswer: "economic",
      }),
      shuffleOptions({
        question: "Toxic chemicals left after the Bhopal leak seeped ________ and polluted drinking water.",
        optionA: "upward",
        optionB: "underground",
        optionC: "across roads",
        correctAnswer: "underground",
      }),
      shuffleOptions({
        question: "Many domestic workers in India will soon have fixed working hours and a weekly ________.",
        optionA: "bonus",
        optionB: "rest day",
        optionC: "exam",
        correctAnswer: "rest day",
      }),
      shuffleOptions({
        question: "Workers at ports and docks are protected under the ________ Act.",
        optionA: "Dock Workers",
        optionB: "Consumer",
        optionC: "Wildlife",
        correctAnswer: "Dock Workers",
      }),
      shuffleOptions({
        question: "The government revises minimum wages at regular ________.",
        optionA: "distances",
        optionB: "intervals",
        optionC: "penalties",
        correctAnswer: "intervals",
      }),
      shuffleOptions({
        question: "The Environment Protection Act was last amended in ________.",
        optionA: "1991",
        optionB: "1984",
        optionC: "2007",
        correctAnswer: "1991",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Many people affected by the Bhopal gas leak were from weaker sections of society.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Domestic work by children under 14 became punishable after the 2006 amendment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Relocating polluting factories has no adverse impact on poor workers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Pollution-free air and water are now part of the Right to Life in India.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Industries must follow laws to prevent accidents and ensure safety of workers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Before the Bhopal tragedy, environmental laws were strict and strongly enforced.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Women facing emotional abuse are not protected under the Domestic Violence Act.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Some workers cannot demand compensation because they fear losing their jobs.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "The Consumer Protection Act deals only with wages of workers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Hazardous jobs like beedi making and carpet weaving were restricted under the Child Labour Act.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
