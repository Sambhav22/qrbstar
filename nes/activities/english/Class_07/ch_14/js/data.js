export const chapter = "Chapter -14: The Choice";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "What name did Walt Irvine and Madge give to the dog?",
          optionA: "Brown",
          optionB: "Klondike",
          optionC: "Wolf",
          correctAnswer: "c) Wolf",
        },
        {
          question:
            "What was the dog's original name according to Skiff Miller?",
          optionA: "Klondike",
          optionB: "Wolf",
          optionC: "Brown",
          correctAnswer: "c) Brown",
        },
        {
          question:
            "What physical characteristic distinguished Wolf from other dogs?",
          optionA: "His floppy ears",
          optionB: "His tail shape",
          optionC: "He looked like a wolf",
          correctAnswer: "c) He looked like a wolf",
        },
        {
          question: "Why did Skiff Miller think the dog belonged with him?",
          optionA: "He had a metal plate collar with his name on it.",
          optionB: "He raised the dog from a puppy.",
          optionC: "The dog responded to his commands.",
          correctAnswer: "b) He raised the dog from a puppy.",
        },
        {
          question:
            "How did Madge and Irvine attempt to convince Skiff Miller to let Wolf stay?",
          optionA: "They offered to buy him.",
          optionB: "They threatened to report him to the authorities.",
          optionC: "They promised to take better care of him.",
          correctAnswer: "a) They offered to buy him.",
        },
        {
          question:
            "What did Skiff Miller propose as a way to let Wolf decide where to go?",
          optionA: "He would ask Wolf to choose between them.",
          optionB: "He would walk away, and Wolf could follow if he wanted.",
          optionC: "He would let Madge and Irvine decide for Wolf.",
          correctAnswer:
            "b) He would walk away, and Wolf could follow if he wanted.",
        },
        {
          question: "What was Wolf's reaction when Skiff Miller left?",
          optionA: "He stayed with Walt Irvine.",
          optionB: "He followed Skiff Miller.",
          optionC: "He remained indecisive.",
          correctAnswer: "b) He followed Skiff Miller.",
        },
        {
          question:
            "Why did Madge suggest that Wolf might prefer California to Alaska?",
          optionA: "Because the climate in California was better.",
          optionB: "Because he liked Madge and Irvine more.",
          optionC: "Because he had become accustomed to life there.",
          correctAnswer: "c) Because he had become accustomed to life there.",
        },
        {
          question: "What was the final decision made by Wolf?",
          optionA: "He stayed with Madge and Irvine.",
          optionB: "He followed Skiff Miller.",
          optionC: "He disappeared into the wilderness.",
          correctAnswer: "b) He followed Skiff Miller.",
        },
        {
          question:
            "What was the significance of Wolf's choice at the end of the story?",
          optionA: "It showed his loyalty to Skiff Miller.",
          optionB: "It demonstrated his independence and freedom.",
          optionC: "It proved his attachment to Madge and Irvine.",
          correctAnswer: "b) It demonstrated his independence and freedom.",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      [
        {
          question:
            "Walt Irvine and Madge called the dog __________ because he looked like a wolf.",
          optionA: "Brown",
          optionB: "Klondike",
          optionC: "Wolf",
          correctAnswer: "c) Wolf",
        },
        {
          question:
            "Wolf was initially __________ when he first arrived at the mountain cottage.",
          optionA: "Friendly",
          optionB: "Unsociable",
          optionC: "Playful",
          correctAnswer: "b) Unsociable",
        },
        {
          question:
            "Skiff Miller suggested that Wolf's real name was __________.",
          optionA: "Klondike",
          optionB: "Brown",
          optionC: "Wolf",
          correctAnswer: "b) Brown",
        },
        {
          question:
            "To win Wolf's affection, Walt Irvine had a metal plate made, stamped with his __________.",
          optionA: "Home address",
          optionB: "Phone number",
          optionC: "Return address",
          correctAnswer: "c) Return address",
        },
        {
          question: "Wolf had an obsession that drove him __________.",
          optionA: "East",
          optionB: "South",
          optionC: "North",
          correctAnswer: "c) North",
        },
        {
          question:
            "Skiff Miller made Wolf wear a collar with a metal plate, which had __________.",
          optionA: "Miller's address",
          optionB: "Wolf's name",
          optionC: "Irvine's address",
          correctAnswer: "a) Miller's address",
        },
        {
          question:
            "Skiff Miller suggested leaving it up to __________ to decide where he wanted to live.",
          optionA: "Walt Irvine",
          optionB: "Madge",
          optionC: "Wolf",
          correctAnswer: "c) Wolf",
        },
        {
          question:
            "Wolf followed Skiff Miller when he walked away after the decision, indicating his __________.",
          optionA: "Independence",
          optionB: "Loyalty",
          optionC: "Confusion",
          correctAnswer: "a) Independence",
        },
        {
          question:
            "Madge suggested that Wolf might prefer __________ to Alaska.",
          optionA: "Canada",
          optionB: "California",
          optionC: "Oregon",
          correctAnswer: "b) California",
        },
        {
          question:
            "Wolf's final choice demonstrated his __________ and freedom.",
          optionA: "Attachment",
          optionB: "Independence",
          optionC: "Loyalty",
          correctAnswer: "b) Independence",
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
            "Walt Irvine and Madge called the dog Wolf because he looked like a wolf.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Wolf was initially unsociable when he first arrived at the mountain cottage.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Skiff Miller suggested that Wolf's real name was Brown.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "To win Wolf's affection, Walt Irvine had a metal plate made, stamped with his return address.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Wolf had an obsession that drove him north.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Skiff Miller made Wolf wear a collar with a metal plate, which had Miller's address.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Skiff Miller suggested leaving it up to Wolf to decide where he wanted to live.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Wolf followed Skiff Miller when he walked away after the decision, indicating his independence.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Madge suggested that Wolf might prefer California to Alaska.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Wolf's final choice demonstrated his independence and freedom.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
    ],
  };
}

export var activityData;
