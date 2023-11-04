export const chapter = "Chapter - 12: The Great Feast";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "What is the setting of the story when the Play Angel arrives?",
        optionA: "A bakery",
        optionB: "A playground",
        optionC: "A nursery",
        correctAnswer: "A nursery",
      },
      {
        question:
          "Why do the children in the nursery have sad and troubled faces?",
        optionA: "They don't like cookies.",
        optionB:
          "They wanted to have a grand feast, but there's only one small cookie.",
        optionC: "They are tired of playing.",
        correctAnswer:
          "They wanted to have a grand feast, but there's only one small cookie.",
      },
      {
        question: "Who breaks the cookie into four pieces?",
        optionA: "The littlest child",
        optionB: "The child whose nursery it is",
        optionC: "The Play Angel",
        correctAnswer: "The Play Angel",
      },
      {
        question:
          "What does the Play Angel call the first piece of the cookie she gives to the littlest child?",
        optionA: "A roast rusk",
        optionB: "A chocolate bar",
        optionC: "A cupcake",
        correctAnswer: "A roast rusk",
      },
      {
        question:
          "What does the child who receives the second piece of the cookie describe it as?",
        optionA: "A sandwich",
        optionB: "A little pie",
        optionC: "A muffin",
        correctAnswer: "A little pie",
      },
      {
        question:
          "How does the Play Angel describe the cake she gives to the third child?",
        optionA: "A chocolate cake",
        optionB: "A plain cake",
        optionC: "A round cake with frosting and decorations",
        correctAnswer: "A round cake with frosting and decorations",
      },
      {
        question:
          "What is the fourth piece of the cookie transformed into by the Play Angel?",
        optionA: "A piece of candy",
        optionB: "An ice-cream rabbit",
        optionC: "A brownie",
        correctAnswer: "An ice-cream rabbit",
      },
      {
        question:
          "What does the Play Angel ask the children to do after they eat the feast?",
        optionA: "Clap their hands",
        optionB: "Sing a song",
        optionC: "Share the crumbs with the birds",
        correctAnswer: "Share the crumbs with the birds",
      },
      {
        question:
          "Who originally raises a concern that the child whose nursery it is addresses?",
        optionA: "The littlest child",
        optionB: "The child whose nursery it is",
        optionC: "The Play Angel",
        correctAnswer: "The child whose nursery it is",
      },
      {
        question:
          "What does the Play Angel reveal about herself at the end of the story?",
        optionA: "She's a fairy",
        optionB: "She's an illusion",
        optionC: "She had the feast all along",
        correctAnswer: "She had the feast all along",
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
          "Once the Play Angel came into a ________ where four little children sat on the floor with sad and troubled faces.",
        options: ["bakery", "garden", "nursery"],
        correctAnswer: "nursery",
      },
      {
        question:
          '"What is the matter, dears?" asked the Play Angel. "We wanted to have a grand ________!" said the child whose nursery it was.',
        options: ["meal", "feast", "party"],
        correctAnswer: "feast",
      },
      {
        question:
          '"But there is only one ________!" said the child whose nursery it was.',
        options: ["toy", "cookie", "friend"],
        correctAnswer: "cookie",
      },
      {
        question:
          '"And it is a very small ________!" said the child who was a cousin, and therefore felt a right to speak.',
        options: ["cake", "cookie", "gift"],
        correctAnswer: "cookie",
      },
      {
        question: "She broke the cookie into four ________.",
        options: ["pieces", "crumbs", "slices"],
        correctAnswer: "pieces",
      },
      {
        question:
          '"See!" she said. "This is a roast rusk. It is just as brown and crispy as it can be, and there is cranberry sauce on one side, and on the other a little mountain of mashed ________; it must be a volcano, it smokes so. Do you see?"',
        options: ["potato", "bread", "cookie"],
        correctAnswer: "potato",
      },
      {
        question:
          '"Now here," said the Angel to the third child, "is a round cake. Look at it! The frosting is half an inch thick, with candied rose-leaves and ________ laid on in true-lovers\' knots; and inside there are chopped-up almonds and raisins and great slices of citron. It is the prettiest cake I ever saw, and the best."',
        options: ["candy canes", "chocolate chips", "angelica"],
        correctAnswer: "angelica",
      },
      {
        question:
          'So the children ate the feast all up. "There!" said the Angel. "Did ever you see such a grand ________?"',
        options: ["banquet", "meal", "feast"],
        correctAnswer: "feast",
      },
      {
        question:
          '"But you didn\'t have any!" said the child whose nursery it was. "Oh, yes!" said the Angel. "I had it all!" "And there are some ________ left over," said the Angel. "Come, and we will give them to the little birds who are our brothers and sisters!"',
        options: ["toys", "crumbs", "cookies"],
        correctAnswer: "crumbs",
      },
      {
        question:
          '"And there are some ________ left over," said the Angel. "Come, and we will give them to the little birds who are our brothers and sisters!"',
        options: ["toys", "crumbs", "cookies"],
        correctAnswer: "crumbs",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The Play Angel arrived at a bakery.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The children in the nursery wanted to have a grand feast.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The cookie was large enough to satisfy all the children.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Play Angel gave the littlest child a piece of cake.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The second child received a piece of a roast rusk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The cake given to the third child had candied rose-leaves and angelica.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Play Angel described the cake as plain and unattractive.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The Play Angel asked the children to leave some crumbs for the little birds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The children refused to share the feast with the little birds.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The Play Angel consumed most of the feast herself.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
