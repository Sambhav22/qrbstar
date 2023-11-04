export const chapter = "Chapter - 1: My Education";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What was the main reason the protagonist's parents initially hesitated to send her to the one-year education camp?",
          optionA: "They believed education was not useful for girls.",
          optionB: "The camp was too far away from their village.",
          optionC: "They couldn't afford the cost of the camp.",
          correctAnswer: "They believed education was not useful for girls.",
        },
        {
          question:
            "How did the people from the government school persuade the protagonist's parents to send her to the camp?",
          optionA: "They offered to pay for her education.",
          optionB:
            "They promised safety and care for all the girls in the camp.",
          optionC: "They threatened the parents with legal action.",
          correctAnswer:
            "They promised safety and care for all the girls in the camp.",
        },
        {
          question: "Who was the protagonist's friend at the camp?",
          optionA: "Mala",
          optionB: "A village boy",
          optionC: "A teacher",
          correctAnswer: "Mala",
        },
        {
          question:
            "What did Mala ask the protagonist before leaving for the camp?",
          optionA: "Will there be any sand dunes there?",
          optionB: "How many exams will we have to take?",
          optionC: "Can we bring our goats to the camp?",
          correctAnswer: "Will there be any sand dunes there?",
        },
        {
          question:
            "How did the protagonist feel on the day before leaving home for the camp?",
          optionA: "Excited and confident",
          optionB: "Nervous and sad",
          optionC: "Indifferent and calm",
          correctAnswer: "Nervous and sad",
        },
        {
          question:
            "What did the protagonist achieve during her time at the camp?",
          optionA: "She learned how to take care of goats.",
          optionB: "She passed the fifth standard examination.",
          optionC: "She made many friends in the village.",
          correctAnswer: "She passed the fifth standard examination.",
        },
        {
          question: "What was the protagonist's dream career?",
          optionA: "Becoming a doctor",
          optionB: "Becoming a teacher",
          optionC: "Becoming a farmer",
          correctAnswer: "Becoming a teacher",
        },
        {
          question:
            "What was the good news for the protagonist and Mala after returning from the camp?",
          optionA: "They could go back to their old way of life.",
          optionB: "A new school was opening in the next village.",
          optionC: "They were going to a city for further education.",
          correctAnswer: "A new school was opening in the next village.",
        },
        {
          question:
            "Why did the protagonist and Mala plead with their parents to let them go to the new school in the next village?",
          optionA: "They wanted to be closer to their homes.",
          optionB: "They didn't want to study anymore.",
          optionC:
            "They were excited about the new school and wanted to study more.",
          correctAnswer:
            "They were excited about the new school and wanted to study more.",
        },
        {
          question:
            "What message does the story convey about education in the protagonist's country?",
          optionA: "Education is easily accessible to all children.",
          optionB: "The government is not making efforts to improve education.",
          optionC:
            "Some children face challenges accessing education due to distance, but efforts are being made to change this.",
          correctAnswer:
            "Some children face challenges accessing education due to distance, but efforts are being made to change this.",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "The protagonist was __________ years old when some people from a nearby government school came.",
          options: ["ten", "twelve", "eight"],
          correctAnswer: "ten",
        },
        {
          question:
            "The parents believed that education never got villagers anywhere and that girls should stay at home and learn __________.",
          options: ["farming", "household work", "mathematics"],
          correctAnswer: "household work",
        },
        {
          question:
            "The people from the government school persuaded the protagonist's parents by promising that about a hundred girls from different villages would be __________.",
          options: ["rich", "educated", "safe and taken care of well"],
          correctAnswer: "safe and taken care of well",
        },
        {
          question:
            "The protagonist and her friend, Mala, wondered if there would be any __________ in the unknown place.",
          options: ["sand dunes", "lakes", "mountains"],
          correctAnswer: "sand dunes",
        },
        {
          question:
            "The protagonist was nervous the day before leaving home and couldn't imagine living without her parents and __________.",
          options: ["toys", "goats", "siblings"],
          correctAnswer: "goats",
        },
        {
          question:
            "The protagonist gradually started making friends with the other girls at the camp, and they would all study together, play together, eat together, and __________ together.",
          options: ["sleep", "cry", "work"],
          correctAnswer: "sleep",
        },
        {
          question:
            "The teachers were very happy with the protagonist because she passed the __________ examination at the end of the term.",
          options: ["first standard", "second standard", "fifth standard"],
          correctAnswer: "fifth standard",
        },
        {
          question:
            "After returning home, the protagonist expressed her desire to go to school to study more and wanted to become a __________.",
          options: ["farmer", "teacher", "doctor"],
          correctAnswer: "teacher",
        },
        {
          question:
            "The good news for the protagonist and Mala was that a new school was coming up in the next village, just a __________ away.",
          options: ["kilometer", "mile", "meter"],
          correctAnswer: "kilometer",
        },
        {
          question:
            "The story conveys that in their country, not all children can go to school because it is so far away from their homes, but the government is making efforts in this direction to make education more __________.",
          options: ["accessible", "expensive", "irrelevant"],
          correctAnswer: "accessible",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "The protagonist's parents were enthusiastic about sending her to the one-year education camp.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "The people from the government school promised safety and care for the girls in the camp.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The protagonist and her friend, Mala, were the only two girls from their village at the camp.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The protagonist passed the third standard examination at the end of the term.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question: "The protagonist's dream career was to become a doctor.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "The new school opening in the next village was located a mile away.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "The story conveys that education is easily accessible to all children in their country.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "The protagonist found a weaverbird's nest with all the eggs intact.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "Grandpa planted a new tree after the old one was cut down.",
          optionA: "False",
          optionB: "True",
          correctAnswer: "False",
        },
        {
          question:
            "The protagonist's parents were overjoyed to see her when she returned from the camp.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
