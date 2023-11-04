export const chapter = "Chapter - 16: Goldilocks and Three Bears ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What is the name of the little girl in the story?",
          optionA: "Little Red Riding Hood",
          optionB: "Goldilocks",
          optionC: "Cinderella",
          correctAnswer: "Goldilocks",
        },
        {
          question:
            "What did Goldilocks do every day in the garden near her house?",
          optionA: "Played with her toys",
          optionB: "Picked flowers",
          optionC: "Chased a red squirrel",
          correctAnswer: "Chased a red squirrel",
        },
        {
          question:
            "What did Goldilocks do when she entered the forest for the first time?",
          optionA: "She got lost",
          optionB: "She went home immediately",
          optionC: "She found her way back easily",
          correctAnswer: "She got lost",
        },
        {
          question:
            "How many bowls of porridge did Goldilocks find in the cottage?",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Three",
        },
        {
          question:
            "Which bowl of porridge did Goldilocks find to be just right?",
          optionA: "The biggest one",
          optionB: "The middle-sized one",
          optionC: "The smallest one",
          correctAnswer: "The smallest one",
        },
        {
          question: "What happened when Goldilocks sat on the smallest chair?",
          optionA: "It was too hard",
          optionB: "It was just right",
          optionC: "It broke into tiny pieces",
          correctAnswer: "It broke into tiny pieces",
        },
        {
          question: "What made Goldilocks fall asleep in the cottage?",
          optionA: "The comfortable chair",
          optionB: "The tasty porridge",
          optionC: "The smallest bed",
          correctAnswer: "The smallest bed",
        },
        {
          question: "Who were the members of the bear family?",
          optionA: "Mother Bear, Father Bear, and Baby Bear",
          optionB: "Goldilocks, Father Bear, and Mother Bear",
          optionC: "Daddy Bear, Mummy Bear, and Baby Bear",
          correctAnswer: "Mother Bear, Father Bear, and Baby Bear",
        },
        {
          question:
            "What did Baby Bear notice when he returned to the cottage?",
          optionA: "The open door",
          optionB: "The broken chair",
          optionC: "The window",
          correctAnswer: "The broken chair",
        },
        {
          question: "How did Goldilocks react when she saw the three bears?",
          optionA: "She asked them for more porridge",
          optionB: "She screamed and ran away",
          optionC: "She invited them to her house",
          correctAnswer: "She screamed and ran away",
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
          question: "In the story, the little girl is called _______________.",
          options: [
            "A) Little Red Riding Hood",
            "B) Goldilocks",
            "C) Cinderella",
          ],
          correctAnswer: "B) Goldilocks",
        },
        {
          question:
            "Goldilocks often stood on the edge of the forest and peered through the trees, and her mother would warn her not to go into the _______________.",
          options: ["A) garden", "B) house", "C) wood"],
          correctAnswer: "C) wood",
        },
        {
          question:
            "When Goldilocks entered the wood for the first time, she walked a little way and picked a bunch of _______________.",
          options: ["A) red roses", "B) bluebells", "C) daisies"],
          correctAnswer: "B) bluebells",
        },
        {
          question:
            "Goldilocks tasted the porridge in the _______________ bowl and found it too hot.",
          options: ["A) biggest", "B) middle-sized", "C) smallest"],
          correctAnswer: "A) biggest",
        },
        {
          question:
            "The chair Goldilocks found to be too hard was the _______________ chair.",
          options: ["A) biggest", "B) middle-sized", "C) smallest"],
          correctAnswer: "B) middle-sized",
        },
        {
          question:
            "Goldilocks found the _______________ bed to be just right.",
          options: ["A) biggest", "B) middle-sized", "C) smallest"],
          correctAnswer: "C) smallest",
        },
        {
          question:
            "The family that returned to the cottage was a bear family of three members - _______________.",
          options: [
            "A) Mother Bear, Father Bear, and Goldilocks",
            "B) Father Bear, Mother Bear, and Baby Bear",
            "C) Daddy Bear, Mummy Bear, and Baby Bear",
          ],
          correctAnswer: "B) Father Bear, Mother Bear, and Baby Bear",
        },
        {
          question:
            "The three bears noticed that their _______________ had all been dipped into the porridge bowls.",
          options: ["A) chairs", "B) spoons", "C) beds"],
          correctAnswer: "B) spoons",
        },
        {
          question:
            "When Goldilocks saw the three bears, she screamed and _______________.",
          options: [
            "A) leapt off the bed",
            "B) invited them to her house",
            "C) ran away",
          ],
          correctAnswer: "C) ran away",
        },
        {
          question:
            "Goldilocks returned to her own little house and her _______________ was anxiously calling her name.",
          options: ["A) father", "B) mother", "C) friend"],
          correctAnswer: "B) mother",
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
          question: "Goldilocks had shiny, golden, and curly hair.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Goldilocks entered the forest before breakfast.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Goldilocks found three chairs in the cottage.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Goldilocks found the middle-sized chair too comfortable.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Goldilocks found the biggest bowl of porridge just right.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Goldilocks found the smallest bed to be comfortable.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The family that returned to the cottage consisted of Father Bear, Mother Bear, and Baby Bear.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Goldilocks invited the three bears to her house.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Goldilocks returned to her own little house, and her mother was anxiously calling her name.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Goldilocks promised never to go into the wood again.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
