export const chapter = "Chapter - 10: The Short-sighted Brothers ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What was the main issue the three elderly brothers were arguing about?",
          optionA: "Their farming techniques",
          optionB: "Handling finances",
          optionC: "Choosing the right monastery",
          correctAnswer: "Handling finances",
        },
        {
          question:
            "Why did the youngest brother suggest that he should take charge of the finances?",
          optionA: "He had the most experience with finances.",
          optionB: "He claimed to have the best vision.",
          optionC: "He was the eldest among the brothers.",
          correctAnswer: "He claimed to have the best vision.",
        },
        {
          question:
            "According to the second brother, what was the youngest brother charged extra for?",
          optionA: "Buying counterfeit coins",
          optionB: "Overpaying for goods",
          optionC: "Paying too much for an item",
          correctAnswer: "Paying too much for an item",
        },
        {
          question:
            "How did the eldest brother plan to determine who should handle their finances?",
          optionA: "They would have a vote.",
          optionB: "They would test their vision by reading an inscription.",
          optionC: "They would ask a monk for advice.",
          correctAnswer:
            "They would test their vision by reading an inscription.",
        },
        {
          question:
            "What was the inscription they were supposed to read over the monastery doorway?",
          optionA: "Always Trust Your Brothers",
          optionB: "Be Honest At All Times",
          optionC: "Money Is the Root of All Evil",
          correctAnswer: "Be Honest At All Times",
        },
        {
          question:
            "What did the second brother claim to see besides the inscription on the tablet?",
          optionA: "A hidden message from Confucius",
          optionB: "A floral decoration around the inscription",
          optionC: "The name of the donor, Wang Lee",
          correctAnswer: "A floral decoration around the inscription",
        },
        {
          question:
            "What did the youngest brother reveal on the tablet that the other brothers didn't see?",
          optionA: "The name of the donor, Wang Lee",
          optionB: "A hidden message from Confucius",
          optionC: "A missing character in the inscription",
          correctAnswer: "The name of the donor, Wang Lee",
        },
        {
          question:
            "How did the brothers react when they realized that the inscription was not up yet?",
          optionA: "They argued even more about their vision.",
          optionB: "They laughed at their mistake and continued as before.",
          optionC: "They decided to leave and never return to the monastery.",
          correctAnswer:
            "They laughed at their mistake and continued as before.",
        },
        {
          question: "What was the moral of the story?",
          optionA: "Honesty is the best policy.",
          optionB: "Trust in your brothers, no matter what.",
          optionC: "Don't rely on your eyesight to make important decisions.",
          correctAnswer: "Honesty is the best policy.",
        },
        {
          question:
            "In the end, what decision did the three brothers make regarding their finances?",
          optionA: "They decided to have an outsider handle their finances.",
          optionB: "They continued with the arrangement they had before.",
          optionC: "They still couldn't agree and kept arguing.",
          correctAnswer: "They continued with the arrangement they had before.",
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
            "The three elderly brothers lived in a large house on the outskirts of a town in ________.",
          options: ["India", "China", "Russia"],
          correctAnswer: "China",
        },
        {
          question:
            "They all were very short-sighted and could not see far, yet they claimed they had the best ________.",
          options: ["eyesight", "vision", "hearing"],
          correctAnswer: "vision",
        },
        {
          question:
            "The eldest brother had the charge of the finances of the farming land and ________ farm.",
          options: ["horse", "poultry", "cattle"],
          correctAnswer: "cattle",
        },
        {
          question:
            "The youngest brother suggested that he should take charge of the finances because people took advantage of the eldest brother's disability and cheated him for ________ yuans.",
          options: ["five", "ten", "twenty"],
          correctAnswer: "five",
        },
        {
          question:
            "The second brother sneered at the youngest brother and mentioned that he had pointed out an error when the youngest brother paid ________ yuans.",
          options: ["two", "five", "ten"],
          correctAnswer: "ten",
        },
        {
          question:
            "The third brother argued that if the person handling finances should have the best sight, it should be him because he claimed to see better than the other two, to which the eldest brother replied that he had his doubts, as he was dealing with their finances very well. The third brother's claim was that he could make a ________ from a goat.",
          options: ["sheep", "cow", "chicken"],
          correctAnswer: "sheep",
        },
        {
          question:
            "The three brothers decided to settle the matter by testing their ________. They agreed to read an inscription at a monastery.",
          options: ["cooking skills", "eyesight", "hearing"],
          correctAnswer: "eyesight",
        },
        {
          question:
            "The inscription that they were supposed to read at the monastery read: 'Be Honest At All ________.'",
          options: ["Costs", "Moments", "Times"],
          correctAnswer: "Times",
        },
        {
          question:
            "The second brother claimed to see a ________ decoration around the inscription on the tablet when they arrived at the monastery.",
          options: ["plain", "floral", "golden"],
          correctAnswer: "floral",
        },
        {
          question:
            "The youngest brother, when they arrived at the monastery, pointed out that besides the inscription, there was also the name of the donor, ________, at the bottom of the tablet.",
          options: ["Wang Li", "Wang Lee", "Wang Lu"],
          correctAnswer: "Wang Lee",
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
            "The three elderly brothers lived in a large house on the outskirts of a town in China.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The three brothers had perfect eyesight and never claimed to have the best vision.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The eldest brother was in charge of the finances of a poultry farm.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The youngest brother suggested taking charge of the finances because he had a habit of stealing money.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The second brother paid twenty yuans for an item when he should have paid only two yuans.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The third brother claimed that he could make a sheep from a goat.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The brothers decided to settle their financial matter by testing their cooking skills.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The inscription they were supposed to read at the monastery read, 'Money Is the Root of All Evil.'",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The second brother claimed to see a plain decoration around the inscription on the tablet when they arrived at the monastery.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The youngest brother, when they arrived at the monastery, pointed out that besides the inscription, there was also the name of the donor, Wang Lee, at the top of the tablet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
