export const chapter = "Chapter -12: The Great Feast";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What did the Play Angel do to solve the problem of the small cookie?",
          optionA: "Broke it into four pieces",
          optionB: "Gave it to the littlest child",
          optionC: "Ate it herself",
          correctAnswer: "Broke it into four pieces",
        },
        {
          question:
            "What did the Play Angel pretend the broken cookie pieces were?",
          optionA: "Roast beef",
          optionB: "Roast rusk with cranberry sauce and mashed potato",
          optionC: "Ice cream rabbits",
          correctAnswer: "Roast rusk with cranberry sauce and mashed potato",
        },
        {
          question: "What did the child who was a cousin say about the cookie?",
          optionA: '"It\'s big enough for me!"',
          optionB: '"It\'s very small!"',
          optionC: '"It\'s delicious!"',
          correctAnswer: '"It\'s very small!"',
        },
        {
          question:
            "What did the Play Angel give to the child who said the cookie wasn't big enough for them?",
          optionA: "A little pie",
          optionB: "A round cake",
          optionC: "An ice-cream rabbit",
          correctAnswer: "An ice-cream rabbit",
        },
        {
          question:
            "What was special about the little pie the Play Angel gave?",
          optionA: "It was filled with vegetables",
          optionB: "It had a wreath of pastry leaves around the edge",
          optionC: "It had a mountain of mashed potato inside",
          correctAnswer: "It had a wreath of pastry leaves around the edge",
        },
        {
          question: "What did the child say about the round cake?",
          optionA: '"It\'s ugly!"',
          optionB: '"It\'s the prettiest cake I ever saw!"',
          optionC: '"It\'s too big for me!"',
          correctAnswer: '"It\'s the prettiest cake I ever saw!"',
        },
        {
          question:
            "What was special about the round cake the Play Angel gave?",
          optionA: "It had chopped-up almonds and raisins inside",
          optionB: "It had a mountain of mashed potato inside",
          optionC: "It had red barley sugar eyes",
          correctAnswer: "It had chopped-up almonds and raisins inside",
        },
        {
          question: "What did the last child receive from the Play Angel?",
          optionA: "A little pie",
          optionB: "A round cake",
          optionC: "An ice-cream rabbit",
          correctAnswer: "An ice-cream rabbit",
        },
        {
          question:
            "What did the Play Angel say about the crumbs left over from the feast?",
          optionA: "They would be thrown away",
          optionB: "They would be given to the children",
          optionC: "They would be given to the birds",
          correctAnswer: "They would be given to the birds",
        },
        {
          question: "Who had the entire feast according to the Play Angel?",
          optionA: "The children",
          optionB: "The Play Angel herself",
          optionC: "The little birds",
          correctAnswer: "The Play Angel herself",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "The child whose nursery it was wanted to have a grand feast, but there was only _________ cookie.",
          optionA: "one small",
          optionB: "a large",
          optionC: "many big",
          correctAnswer: "one small",
        },
        {
          question:
            "The child who was a cousin said the cookie was very _________.",
          optionA: "tasty",
          optionB: "big",
          optionC: "small",
          correctAnswer: "small",
        },
        {
          question: "The Play Angel broke the cookie into ________ pieces.",
          optionA: "two",
          optionB: "three",
          optionC: "four",
          correctAnswer: "four",
        },
        {
          question:
            "The Play Angel gave the littlest child a piece that she pretended was a roast rusk with cranberry sauce and mashed ________.",
          optionA: "carrots",
          optionB: "potato",
          optionC: "rice",
          correctAnswer: "potato",
        },
        {
          question:
            "The child whose nursery it was received a piece that the Play Angel pretended was an ice-cream ________.",
          optionA: "lion",
          optionB: "tiger",
          optionC: "rabbit",
          correctAnswer: "rabbit",
        },
        {
          question:
            "The little pie given by the Play Angel had a wreath of pastry leaves around the ________.",
          optionA: "sides",
          optionB: "edges",
          optionC: "top",
          correctAnswer: "edges",
        },
        {
          question:
            "The round cake given by the Play Angel had frosting with candied rose-leaves and ________ laid on in true lovers' knots.",
          optionA: "chocolate chips",
          optionB: "angelica",
          optionC: "raisins",
          correctAnswer: "angelica",
        },
        {
          question:
            "The last child received an ice-cream rabbit with eyes made of red barley ________.",
          optionA: "milk",
          optionB: "sugar",
          optionC: "flour",
          correctAnswer: "sugar",
        },
        {
          question:
            "According to the Play Angel, the crumbs left over from the feast would be given to the ________.",
          optionA: "children",
          optionB: "birds",
          optionC: "dogs",
          correctAnswer: "birds",
        },
        {
          question: "According to the Play Angel, who had the entire feast?",
          optionA: "The children",
          optionB: "The Play Angel herself",
          optionC: "The little birds",
          correctAnswer: "The Play Angel herself",
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
            "The child whose nursery it was wanted to have a grand feast because there was only one small cookie.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The child who was a cousin felt it was a large cookie.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The Play Angel broke the cookie into three pieces.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The littlest child received a piece that the Play Angel pretended was a roast rusk with cranberry sauce and mashed potato.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The child whose nursery it was received a piece that the Play Angel pretended was an ice-cream tiger.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The little pie given by the Play Angel had a wreath of pastry leaves around the top.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The round cake given by the Play Angel had frosting with candied rose-leaves and chocolate chips laid on in true lovers' knots.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The last child received an ice-cream rabbit with eyes made of red barley flour.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "According to the Play Angel, the crumbs left over from the feast would be given to the children.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Play Angel stated that the children had the entire feast.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
