export const chapter = "Chapter - 9: Our Family ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What makes up a family, according to the given text?",
          optionA: "Cousins and grandparents",
          optionB: "Parents and children",
          optionC: "Uncles and aunts",
          correctAnswer: "B. Parents and children",
        },
        {
          question: "In Kaira's family, who are the members mentioned?",
          optionA: "Parents and cousins",
          optionB: "Parents, grandparents, uncle, aunt, and a cousin",
          optionC: "Brothers and sisters",
          correctAnswer: "B. Parents, grandparents, uncle, aunt, and a cousin",
        },
        {
          question: "What type of family does Kaira belong to?",
          optionA: "Small family",
          optionB: "Big family",
          optionC: "Joint family",
          correctAnswer: "C. Joint family",
        },
        {
          question:
            "What is the composition of a small family, as per the text?",
          optionA: "Parents and more than two children",
          optionB: "Parents and one or two children",
          optionC: "Grandparents and cousins",
          correctAnswer: "B. Parents and one or two children",
        },
        {
          question: "How is a big family defined in the given text?",
          optionA: "Parents and more than two children",
          optionB: "Parents and one or two children",
          optionC: "Parents and cousins",
          correctAnswer: "A. Parents and more than two children",
        },
        {
          question:
            "Which family type is described as having parents, grandparents, uncle, aunt, and a cousin?",
          optionA: "Small family",
          optionB: "Joint family",
          optionC: "Big family",
          correctAnswer: "B. Joint family",
        },
        {
          question: "What are the components of a big family?",
          optionA: "Parents and cousins",
          optionB: "Parents and one or two children",
          optionC: "Parents and more than two children",
          correctAnswer: "C. Parents and more than two children",
        },
        {
          question: "What is the family structure of Kaira's family?",
          optionA: "Small family",
          optionB: "Joint family",
          optionC: "Big family",
          correctAnswer: "B. Joint family",
        },
        {
          question:
            "According to the text, what members make up a family bond?",
          optionA: "Brothers and sisters",
          optionB: "Grandparents and cousins",
          optionC: "Papa-mummy, brother-sister, uncle-aunt, grandpa-grandma",
          correctAnswer:
            "C. Papa-mummy, brother-sister, uncle-aunt, grandpa-grandma",
        },
        {
          question: "How is a small family defined in the given text?",
          optionA: "Parents and more than two children",
          optionB: "Parents and cousins",
          optionC: "Parents and one or two children",
          correctAnswer: "C. Parents and one or two children",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "Parents and their children together make a _________.",
          optionA: "School",
          optionB: "Family",
          optionC: "Zoo",
          correctAnswer: "B. Family",
        },
        {
          question: "We all live in a _________.",
          optionA: "Village",
          optionB: "City",
          optionC: "Family",
          correctAnswer: "C. Family",
        },
        {
          question:
            "Kaira lives with her parents, grandparents, uncle, aunt, and a _________.",
          optionA: "Neighbor",
          optionB: "Friend",
          optionC: "Cousin",
          correctAnswer: "C. Cousin",
        },
        {
          question: "Kaira's family is a _________ family.",
          optionA: "Nuclear",
          optionB: "Joint",
          optionC: "Extended",
          correctAnswer: "B. Joint",
        },
        {
          question:
            "A small family consists of parents and their _________ children.",
          optionA: "Many",
          optionB: "One or two",
          optionC: "None",
          correctAnswer: "B. One or two",
        },
        {
          question: "A big family has parents and their _________ children.",
          optionA: "Cousins",
          optionB: "More than two",
          optionC: "Only one",
          correctAnswer: "B. More than two",
        },
        {
          question:
            "Apart from parents and children, other family members include uncle, aunt, _________, and _________.",
          optionA: "Friends, neighbors",
          optionB: "Siblings, pets",
          optionC: "Grandparents, cousins",
          correctAnswer: "C. Grandparents, cousins",
        },
        {
          question:
            "Kaira's family structure is described as a _________ family.",
          optionA: "Nuclear",
          optionB: "Joint",
          optionC: "Extended",
          correctAnswer: "B. Joint",
        },
        {
          question:
            "In a joint family, members may include parents, grandparents, uncle, aunt, and _________.",
          optionA: "Only children",
          optionB: "Cousins",
          optionC: "Siblings",
          correctAnswer: "B. Cousins",
        },
        {
          question:
            "A family is a bond between many members, such as papa-mummy, brother-sister, uncle-aunt, and _________.",
          optionA: "Friends",
          optionB: "Grandpa-grandma",
          optionC: "Pets",
          correctAnswer: "B. Grandpa-grandma",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Parents and children together make a family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Kaira's family is a nuclear family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A small family consists of parents and their one or two children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "In a joint family, members may include only parents and children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Grandparents and cousins are mentioned as family bond members.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A big family has parents and their more than two children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Kaira's family structure is described as a joint family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A small family consists of parents and their more than two children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Uncle, aunt, and a cousin are mentioned as Kaira's family members.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "A family is not considered a bond between various members.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
   };
}

export var activityData;
