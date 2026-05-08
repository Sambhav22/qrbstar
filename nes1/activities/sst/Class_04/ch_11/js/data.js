export const chapter = "Chapter - 11: Mineral Resources ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What are minerals that are naturally occurring substances in the earth's crust called?",
        optionA: "Rocks",
        optionB: "Ores",
        optionC: "Metals",
        correctAnswer: "B) Ores",
      },
      {
        question:
          "What is the process of digging out minerals from the surface of the earth called?",
        optionA: "Drilling",
        optionB: "Extraction",
        optionC: "Mining",
        correctAnswer: "C) Mining",
      },
      {
        question:
          "Which of the following is NOT a type of metal mentioned in the text?",
        optionA: "Iron",
        optionB: "Copper",
        optionC: "Coal",
        correctAnswer: "C) Coal",
      },
      {
        question: "Which metal is primarily used to make electric wires?",
        optionA: "Iron",
        optionB: "Copper",
        optionC: "Aluminium",
        correctAnswer: "B) Copper",
      },
      {
        question: "What is the main use of aluminum in the text?",
        optionA: "Making utensils",
        optionB: "Building bridges",
        optionC: "Making aircraft bodies",
        correctAnswer: "C) Making aircraft bodies",
      },
      {
        question: "Where are the Kolar gold mines located?",
        optionA: "Madhya Pradesh",
        optionB: "Karnataka",
        optionC: "Odisha",
        correctAnswer: "B) Karnataka",
      },
      {
        question:
          "Which of the following is not a metal found in India, as mentioned in the text?",
        optionA: "Manganese",
        optionB: "Silver",
        optionC: "Zinc",
        correctAnswer: "C) Zinc",
      },
      {
        question: "What are minerals that do not contain any metal called?",
        optionA: "Metals",
        optionB: "Ores",
        optionC: "Non-metals",
        correctAnswer: "C) Non-metals",
      },
      {
        question:
          "What is coal also known as due to its importance in heavy industries?",
        optionA: "Black diamond",
        optionB: "Black gold",
        optionC: "Black treasure",
        correctAnswer: "B) Black gold",
      },
      {
        question:
          "What is the other name for crude oil, which is pumped out from the earth?",
        optionA: "Mineral oil",
        optionB: "Natural gas",
        optionC: "Refined oil",
        correctAnswer: "A) Mineral oil",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "Minerals are naturally occurring substances in the earth's crust, such as iron ore, coal, or petroleum that are obtained by _______________ or drilling.",
        options: ["mining", "cooking", "swimming"],
        correctAnswer: "mining",
      },
      {
        question:
          "The holes dug in the earth to take out minerals are called ____________.",
        options: ["tunnels", "caves", "mines"],
        correctAnswer: "mines",
      },
      {
        question:
          "Iron is primarily used to make utensils, machines, tools, bridges, buildings, railway engines, and coaches, and it is usually used in the form of ______________.",
        options: ["steel", "copper", "gold"],
        correctAnswer: "steel",
      },
      {
        question:
          "Copper is used by the electrical industry because electricity flows easily through ______________.",
        options: ["iron", "copper", "aluminium"],
        correctAnswer: "copper",
      },
      {
        question:
          "Aluminium is mainly used to make bodies of ______________ and cars.",
        options: ["bicycles", "aircrafts", "submarines"],
        correctAnswer: "aircrafts",
      },
      {
        question:
          "Gold is a very precious and costly metal, and it is used to make ______________.",
        options: ["furniture", "ornaments", "weapons"],
        correctAnswer: "ornaments",
      },
      {
        question:
          "Coal is formed from the remains of dead trees and plants that got buried in the earth over thousands of years, and it is also known as ______________ because of its importance in heavy industries.",
        options: ["silver", "black gold", "steel"],
        correctAnswer: "black gold",
      },
      {
        question:
          "Petroleum is a mineral oil, and it is pumped out from the earth through deep ______________.",
        options: ["wells", "caves", "tunnels"],
        correctAnswer: "wells",
      },
      {
        question:
          "Mica is mainly found in Andhra Pradesh, Rajasthan, and _______________.",
        options: ["Gujarat", "Kerala", "Maharashtra"],
        correctAnswer: "Kerala",
      },
      {
        question:
          "Mineral resources take millions of years to form, and if they are wasted or not used with care, we will run out of these minerals. That is why they are called ______________ sources of energy.",
        options: ["renewable", "non-renewable", "sustainable"],
        correctAnswer: "non-renewable",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "Minerals are naturally occurring substances in the earth's crust.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Metals are typically soft materials.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Iron is mainly used to make aircraft bodies.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Coal is a major source of energy and is also known as 'black gold.'",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "Petroleum is a liquid extracted from deep wells in the earth.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question: "Mica is primarily found in Rajasthan.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Mineral resources take a short time to form.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question:
          "Renewable sources of energy are environment-friendly and do not cause pollution.",
        optionA: "True",
        optionB: "False",correctAnswer: "True",
      },
      {
        question:
          "In coastal areas, people typically wear thick woolen clothes.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
      {
        question: "Gold is found in abundance in India.",
        optionA: "True",
        optionB: "False",correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
