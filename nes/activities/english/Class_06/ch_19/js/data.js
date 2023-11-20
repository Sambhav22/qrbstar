export const chapter = "Chapter - 19: life Through,Old Age ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What kind of journey does the traveler embark on?",
        optionA: "A business trip",
        optionB: "A magical journey",
        optionC: "A scientific expedition",
        correctAnswer: "b) A magical journey",
      },
      {
        question:
          "How did the traveler feel about the length of his journey at the beginning?",
        optionA: "It seemed very short",
        optionB: "It seemed very long",
        optionC: "It was just right",
        correctAnswer: "b) It seemed very long",
      },
      {
        question: "Who did the traveler meet first on his journey?",
        optionA: "An old man",
        optionB: "A beautiful child",
        optionC: "A middle-aged gentleman",
        correctAnswer: "b) A beautiful child",
      },
      {
        question: "What did the child invite the traveler to do?",
        optionA: "Learn with him",
        optionB: "Play with him",
        optionC: "Work with him",
        correctAnswer: "b) Play with him",
      },
      {
        question:
          "What did the traveler and the child enjoy during fine weather?",
        optionA: "Playing in the rain",
        optionB: "Watching snowfall",
        optionC: "Enjoying the beauty of nature",
        correctAnswer: "c) Enjoying the beauty of nature",
      },
      {
        question: "What happened when it snowed?",
        optionA: "They stayed inside",
        optionB: "They watched the snowfall",
        optionC: "They went on a trip",
        correctAnswer: "b) They watched the snowfall",
      },
      {
        question: "Whom did the traveler meet after the child?",
        optionA: "An old man",
        optionB: "A handsome boy",
        optionC: "A middle-aged woman",
        correctAnswer: "b) A handsome boy",
      },
      {
        question: "What did the handsome boy and the traveler do together?",
        optionA: "Played games",
        optionB: "Learned together",
        optionC: "Worked on a farm",
        correctAnswer: "b) Learned together",
      },
      {
        question: "What happened when the traveler met the young man?",
        optionA: "They fell in love with each other",
        optionB: "They started a business",
        optionC: "They became good friends",
        correctAnswer: "a) They fell in love with each other",
      },
      {
        question: "Who did the traveler meet after the young man?",
        optionA: "An old man",
        optionB: "A middle-aged gentleman",
        optionC: "A little girl",
        correctAnswer: "b) A middle-aged gentleman",
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
          "Life passes through several stages, and a traveler wished to see all of these, so he set out upon a ________ journey. It seemed very long when he began it, and very short when he got halfway through.",
        options: ["magic", "mysterious", "difficult"],
        correctAnswer: "magic",
      },
      {
        question:
          "The traveler played with that child, the whole day long, and they were very ________. The sky was so blue, the sun was so bright, the water was so sparkling, the leaves were so green, and the flowers were so lovely.",
        options: ["bored", "merry", "tired"],
        correctAnswer: "merry",
      },
      {
        question:
          "When it rained, they loved to watch the falling drops, and to smell the fresh scents. When it blew, it was delightful to listen to the wind and fancy what it said, as it came rushing from its home, whistling and howling, driving the clouds before it, bending the trees, rumbling in the chimneys, shaking the house, and making the sea roar in ________.",
        options: ["calm", "laughter", "fury"],
        correctAnswer: "fury",
      },
      {
        question:
          "But, when it snowed, that was best of all; for, they liked nothing so well as to look up at the white flakes falling fast and thick, like down from the breasts of millions of white birds; and to see how smooth and deep the ________ was; and to listen to the hush upon the paths and roads.",
        options: ["rain", "sunshine", "drift"],
        correctAnswer: "drift",
      },
      {
        question:
          "They had plenty of the finest toys in the world and the most astonishing picture-books: all about scimitars and slippers and turbans, and dwarfs and giants and genii and fairies, and blue-beards and beanstalks and riches and caverns and ________.",
        options: ["forests", "deserts", "oceans"],
        correctAnswer: "forests",
      },
      {
        question:
          "One day, all of a sudden, the traveler lost the ________. He called to him over and over again, but got no answer.",
        options: ["way", "child", "forest"],
        correctAnswer: "child",
      },
      {
        question:
          "The traveler started to learn with that boy. He learnt about the Greeks and the Romans, maths and language, learnt more than what you can ________.",
        options: ["imagine", "remember", "list"],
        correctAnswer: "imagine",
      },
      {
        question:
          "As they enjoyed all these pleasures, one day, the traveler lost the boy as he had lost the child. He went calling to him in vain, and then went on upon his ________.",
        options: ["journey", "adventure", "quest"],
        correctAnswer: "journey",
      },
      {
        question:
          "So, he went on for a little while without seeing anything, until at last he came to a ________.",
        options: ["beautiful child", "handsome boy", "middle-aged gentleman"],
        correctAnswer: "handsome boy",
      },
      {
        question:
          "So, he said to the boy, 'What do you do here?' The boy said, 'I am always ________. Come and learn with me.'",
        options: ["traveling", "playing", "learning"],
        correctAnswer: "learning",
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
          "Life passes through several stages, and a traveler wished to see all of these.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The traveler met a beautiful child and played with them the whole day.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The traveler enjoyed watching the falling drops and smelling the fresh scents when it rained.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "When it snowed, the traveler enjoyed looking at the white flakes falling fast and thick.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The traveler and the child had plenty of toys in the world, including scimitars and slippers.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The traveler lost the child one day and called for them but got no answer.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The traveler met a handsome boy who was always playing.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The boy the traveler met was always learning.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The traveler and the boy enjoyed games like rowing and skating on the river.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The traveler eventually reached the end of the journey.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
