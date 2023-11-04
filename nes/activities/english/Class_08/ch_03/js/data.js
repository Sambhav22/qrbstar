export const chapter = "Chapter - 3: The Oversight ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What does Lady Prowche compare the challenge of organizing her house party to?",
          optionA: "A chess game",
          optionB: "A Chinese puzzle",
          optionC: "A jigsaw puzzle",
          correctAnswer: "B) A Chinese puzzle",
        },
        {
          question:
            "What is one of Sir Richard's main expectations for Lady Prowche's house party?",
          optionA: "It should be a literary gathering.",
          optionB: "It should be a political discussion forum.",
          optionC: "It should be a peaceable party with no unpleasantness.",
          correctAnswer:
            "C) It should be a peaceable party with no unpleasantness.",
        },
        {
          question:
            "What caused the most significant argument at Lady Prowche's previous house party?",
          optionA: "Political differences",
          optionB: "Religious disagreements",
          optionC: "A dispute over the election date",
          correctAnswer: "C) A dispute over the election date",
        },
        {
          question:
            "According to Lady Prowche, what is the cause of most disputes at her house parties?",
          optionA: "Differences in political opinion",
          optionB: "Minor differences and side-issues",
          optionC: "Religious disagreements",
          correctAnswer: "B) Minor differences and side-issues",
        },
        {
          question:
            "What is the one thorny subject that Lady Prowche is concerned about regarding her upcoming guests?",
          optionA: "Their views on nationalism",
          optionB: "Their views on vivisection",
          optionC: "Their views on kite-flying",
          correctAnswer: "B) Their views on vivisection",
        },
        {
          question:
            "How does Lady Prowche suggest Lena find out the guests' opinions on vivisection?",
          optionA: "Engage in a direct argument with them at Milly's at-home",
          optionB: "Send a stamped typewritten reply postcard with a question",
          optionC:
            "Ask for their subscriptions to a charity supporting vivisection",
          correctAnswer:
            "B) Send a stamped typewritten reply postcard with a question",
        },
        {
          question:
            "What is the result of the postcard poll regarding vivisection?",
          optionA: "Unanimous support for vivisection",
          optionB: "Unanimous opposition to vivisection",
          optionC: "Indifference to the subject",
          correctAnswer: "B) Unanimous opposition to vivisection",
        },
        {
          question:
            "How did the two guests who had been selected to avoid conflict behave at the party?",
          optionA: "They engaged in civil discussions.",
          optionB: "They had heated arguments but no physical conflict.",
          optionC: "They quarreled and came to blows.",
          correctAnswer: "C) They quarreled and came to blows.",
        },
        {
          question:
            "What was the specific topic on which the two guests, Atkinson and Popham, disagreed?",
          optionA: "Politics",
          optionB: "Vivisection",
          optionC: "North Korea vs. South Korea",
          correctAnswer: "C) North Korea vs. South Korea",
        },
        {
          question:
            "How did Lady Prowche feel about the outcome of the house party?",
          optionA: "Delighted with its success",
          optionB: "Humiliated and disappointed",
          optionC: "Surprised by the guests' maturity",
          correctAnswer: "B) Humiliated and disappointed",
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
            "Lady Prowche compared organizing her house party to solving a _______________.",
          options: {
            a: "Maze",
            b: "Riddle",
            c: "Chinese puzzle",
          },
          correctAnswer: "c",
        },
        {
          question:
            "Sir Richard gives Lady Prowche a free hand in choosing the guests for the house party, with the condition that it should be a _______________ party.",
          options: {
            a: "Literary",
            b: "Extravagant",
            c: "Peaceable",
          },
          correctAnswer: "c",
        },
        {
          question:
            "According to Lady Prowche, the major lines of political or religious differences between guests don't lead to _______________.",
          options: {
            a: "Harmony",
            b: "Friction",
            c: "Laughter",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The most significant argument at Lady Prowche's previous house party was about the _______________.",
          options: {
            a: "Upcoming election date",
            b: "Vaccination debate",
            c: "Football match",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Lady Prowche believes that it's the minor differences and _______________ that lead to trouble during her house parties.",
          options: {
            a: "Side-issues",
            b: "Major conflicts",
            c: "Political debates",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The two guests Lady Prowche is worried about, Atkinson and Popham, might potentially disagree on the topic of _______________.",
          options: {
            a: "Nationalism",
            b: "Vivisection",
            c: "Football",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Lady Prowche suggests that Lena finds out the guests' opinions on vivisection by sending them a stamped _______________ postcard.",
          options: {
            a: "Handwritten",
            b: "Typewritten reply",
            c: "Blank",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The result of the postcard poll showed unanimous _______________ to experiments on living animals for scientific research.",
          options: {
            a: "Support",
            b: "Opposition",
            c: "Indifference",
          },
          correctAnswer: "b",
        },
        {
          question:
            "At the house party, Atkinson and Popham, who were supposed to avoid conflict, ended up _______________.",
          options: {
            a: "Engaging in civil discussions",
            b: "Having heated arguments",
            c: "Bonding over their love for football",
          },
          correctAnswer: "b",
        },
        {
          question:
            "The major disagreement between Atkinson and Popham at the house party was about _______________.",
          options: {
            a: "Politics",
            b: "Religion",
            c: "North Korea vs. South Korea",
          },
          correctAnswer: "c",
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
            "Marcella had dolls from various countries, each unique in itself.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Raggedy Ann's yarn hair covered one of her shoe-button eyes.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question: "Annabel-Lee and Thomas were beautifully dressed dolls.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Uncle Clem pulled at his yarn mustache when he saw the new dolls.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "The French dolly scolded Annabel-Lee and Thomas for making fun of Raggedy Ann.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Marcella did not undress Annabel-Lee and Thomas on the first night she received them.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question: "Raggedy Ann preferred the hard floor to a soft bed.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Annabel-Lee and Thomas expressed their regret by laughing at Raggedy Ann.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "b",
        },
        {
          question:
            "Annabel-Lee and Thomas praised Raggedy Ann for her beauty.",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
        {
          question:
            "Raggedy Ann had a candy heart with the words 'I LOVE YOU.'",
          options: {
            a: "True",
            b: "False",
          },
          correctAnswer: "a",
        },
      ],
    ],
  };
}

export var activityData;
