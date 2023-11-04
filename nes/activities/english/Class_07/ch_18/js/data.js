export const chapter = "Chapter - 18: A Horse and Two Goats";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What material is the statue of the horse made of?",
            options: ["A) Stone", "B) Clay", "C) Wood"],
            answer: "B",
          },
          {
            question: "How did Muni find shade while sitting near the statue?",
            options: [
              "A) He used an umbrella",
              "B) He crouched under the horse",
              "C) He sat under a tree",
            ],
            answer: "B",
          },
          {
            question:
              "What does Muni do while watching his goats graze near the statue?",
            options: [
              "A) Reads a book",
              "B) Prays to the sun",
              "C) Waits for a bus",
            ],
            answer: "C",
          },
          {
            question:
              "What term does the foreigner use to describe the statue of the horse?",
            options: ["A) Extraordinary", "B) Beautiful", "C) Marvellous"],
            answer: "C",
          },
          {
            question:
              "What does Muni think the foreigner might do if he runs away?",
            options: ["A) Take his goats", "B) Shoot him", "C) Chase him"],
            answer: "B",
          },
          {
            question: "What does the foreigner do when he meets Muni?",
            options: [
              "A) Offers to buy his goats",
              "B) Asks for directions to a gas station",
              "C) Shows him a warrant",
            ],
            answer: "B",
          },
          {
            question:
              "How does Muni communicate with the foreigner when he runs out of English words?",
            options: ["A) In French", "B) In Tamil", "C) In Spanish"],
            answer: "B",
          },
          {
            question: "Why does the foreigner present a card to Muni?",
            options: [
              "A) To offer him a job",
              "B) To show his identity",
              "C) To challenge him to a game",
            ],
            answer: "B",
          },
          {
            question:
              "What is the foreigner interested in purchasing from Muni?",
            options: [
              "A) The goats",
              "B) The statue of the horse",
              "C) A tape recorder",
            ],
            answer: "B",
          },
          {
            question:
              "How does Muni react to the foreigner's offer for the statue?",
            options: [
              "A) He accepts the offer immediately",
              "B) He insists on keeping the statue",
              "C) He haggles for a higher price",
            ],
            answer: "B",
          },
        ],
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
          "Muni sat at the foot of the statue, watching his two goats graze in the arid soil among the ______________ and lantana bushes.",
        options: ["A) trees", "B) cactus", "C) flowers"],
        correctAnswer: "B) cactus",
      },
      {
        question:
          "The horse was nearly life-size, molded out of clay, baked, burnt, and brightly colored, and reared its head proudly, prancing its forelegs in the air and flourishing its tail in a ______________.",
        options: ["A) loop", "B) swirl", "C) twirl"],
        correctAnswer: "A) loop",
      },
      {
        question:
          "Muni felt he should get up and run away, and cursed his age. He could not readily put his limbs into ______________.",
        options: ["A) action", "B) motion", "C) movement"],
        correctAnswer: "A) action",
      },
      {
        question:
          "The foreigner wore khaki clothes—evidently a policeman or a ______________.",
        options: ["A) farmer", "B) soldier", "C) teacher"],
        correctAnswer: "B) soldier",
      },
      {
        question:
          "The foreigner suddenly pressed his palms together in a salute, smiled, and said, 'Namaste! How do you do?' At which Muni spoke the only English expressions he had learnt, 'Yes, ______________.'",
        options: ["A) please", "B) sir", "C) no"],
        correctAnswer: "C) no",
      },
      {
        question:
          "The foreigner implored, 'Please, please, I will speak slowly, please try to understand me. Can't you understand even a simple word of ______________?'",
        options: ["A) French", "B) English", "C) Spanish"],
        correctAnswer: "B) English",
      },
      {
        question:
          "Muni said, 'Before God, sir, Bhagwan, who sees everything, I tell you, sir, that we know nothing of the ______________. If the murder was committed, whoever did it will not escape.'",
        options: ["A) crime", "B) case", "C) incident"],
        correctAnswer: "B) case",
      },
      {
        question:
          "The foreigner watched his hands intently and said, 'I know what you mean. Chop something? Maybe I am holding you up and you want to ______________ wood?'",
        options: ["A) cut", "B) chop", "C) split"],
        correctAnswer: "B) chop",
      },
      {
        question:
          "Muni explained, 'This is our guardian, it means death to our adversaries. At the end of Kali Yuga, this world and all other worlds will be destroyed, and the Redeemer will come in the shape of a horse called ______________; this horse will come to life and gallop and trample down all bad men.'",
        options: ["A) Pegasus", "B) Kalki", "C) Mustang"],
        correctAnswer: "B) Kalki",
      },
      {
        question:
          "The foreigner said, 'I repeat I am not a millionaire. Ours is a modest business; after all, we can't afford to buy more than sixty minutes' TV time in a month, which works out to two minutes a day, that's all, although in the course of time we'll maybe sponsor a one-hour show regularly if our ______________ continues to go up.'",
        options: ["A) success", "B) growth", "C) sales graph"],
        correctAnswer: "C) sales graph",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The author's friends gave them a warm reception.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The author felt relaxed during dinner at the fort.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The author was not suspicious of their friends' intentions.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The king in the story loved perfectly round chapattis.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The author found something suspicious about the bed in the room.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The king refused to eat square chapattis.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The king enjoyed a chapatti that turned into a butterfly.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Meena's family could only afford to eat chapattis with ketchup.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The author's friends were spying on them outside their room.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The author's paranoia led to the practical joke in the end.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
