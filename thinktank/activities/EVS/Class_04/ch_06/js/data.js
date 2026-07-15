export const chapter = "Chapter -6: Playing is Fun";
export const noOfActivities = 3

const shuffleQues = (ques) => {
  let arr = ques.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const shuffleOptions = (object) => {
  const { optionA, optionB, optionC } = object
  const optionsArray = [optionA, optionB, optionC]

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]]
  }

  object.optionA = optionsArray[0]
  object.optionB = optionsArray[1]
  object.optionC = optionsArray[2]

  return object
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "What benefits do sports and games provide to children?",
            "optionA": "Just enjoyment",
            "optionB": "Only good health",
            "optionC": "Enjoyment and good health",
            "correctAnswer": "Enjoyment and good health"
        }),
      shuffleOptions({
            "question": "Which of the following are examples of indoor games?",
            "optionA": "Cricket and basketball",
            "optionB": "Ludo and chess",
            "optionC": "Football and tennis",
            "correctAnswer": "Ludo and chess"
        }),
      shuffleOptions({
            "question": "Which category of games are played outside?",
            "optionA": "Cricket and basketball",
            "optionB": "Ludo and chess",
            "optionC": "Football and tennis",
            "correctAnswer": "Cricket and basketball"
        }),
      shuffleOptions({
            "question": "What are the materials required to play sports called?",
            "optionA": "Tools",
            "optionB": "Accessories",
            "optionC": "Sports equipment",
            "correctAnswer": "Sports equipment"
        }),
      shuffleOptions({
            "question": "What values do games help in developing among children?",
            "optionA": "Humility",
            "optionB": "Kindness",
            "optionC": "Competitiveness, sportsmanship, and discipline",
            "correctAnswer": "Competitiveness, sportsmanship, and discipline"
        }),
      shuffleOptions({
            "question": "In Kabaddi, how many players are there in each team?",
            "optionA": "5",
            "optionB": "6",
            "optionC": "7",
            "correctAnswer": "7"
        }),
      shuffleOptions({
            "question": "What is Gutte?",
            "optionA": "A traditional Indian game",
            "optionB": "A type of food",
            "optionC": "A musical instrument",
            "correctAnswer": "A traditional Indian game"
        }),
      shuffleOptions({
            "question": "Which game is considered an older version of modern cricket and baseball?",
            "optionA": "Gutte",
            "optionB": "Kite Flying",
            "optionC": "Gilli Danda",
            "correctAnswer": "Gilli Danda"
        }),
      shuffleOptions({
            "question": "Who are some examples of individuals who have broken gender stereotypes in sports?",
            "optionA": "Sania Mirza, Saina Nehwal",
            "optionB": "PT Usha, Karnam Malleshwari",
            "optionC": "Anju Bobby",
            "correctAnswer": "Sania Mirza, Saina Nehwal, PT Usha, Karnam Malleshwari, Anju Bobby"
        }),
      shuffleOptions({
            "question": "How should sports be played according to the text?",
            "optionA": "Dishonestly",
            "optionB": "With a spirit of true sportsmanship",
            "optionC": "Only by boys",
            "correctAnswer": "With a spirit of true sportsmanship"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Games and sports play a major role in keeping a person ________ and fine.",
            "optionA": "unhealthy",
            "optionB": "fit",
            "optionC": "tired",
            "correctAnswer": "fit"
        }),
      shuffleOptions({
            "question": "Both indoor and outdoor games are ________.",
            "optionA": "boring",
            "optionB": "enjoyable",
            "optionC": "stressful",
            "correctAnswer": "enjoyable"
        }),
      shuffleOptions({
            "question": "The materials required to play sports are called ________.",
            "optionA": "tools",
            "optionB": "accessories",
            "optionC": "sports equipment",
            "correctAnswer": "sports equipment"
        }),
      shuffleOptions({
            "question": "Games develop the spirit of competition, sportsmanship, and build the sense of ________ among children.",
            "optionA": "dishonesty",
            "optionB": "humility",
            "optionC": "discipline",
            "correctAnswer": "discipline"
        }),
      shuffleOptions({
            "question": "In Kabaddi, how many players are there in each ________?",
            "optionA": "basketball team",
            "optionB": "cricket team",
            "optionC": "kabaddi team",
            "correctAnswer": "kabaddi team"
        }),
      shuffleOptions({
            "question": "________ is a simple game played in many parts of our country.",
            "optionA": "Gutte",
            "optionB": "Kite Flying",
            "optionC": "Gilli Danda",
            "correctAnswer": "Gutte"
        }),
      shuffleOptions({
            "question": "________ is considered an older version of modern cricket and baseball.",
            "optionA": "Gutte",
            "optionB": "Kite Flying",
            "optionC": "Gilli Danda",
            "correctAnswer": "Gilli Danda"
        }),
      shuffleOptions({
            "question": "Games and sports are an integral part of Indian culture and heritage. Sadly, nowadays kids are deeply involved in playing video games, play stations, laptops, watching televisions, etc. They have completely forgotten the traditional Indian ________.",
            "optionA": "songs",
            "optionB": "games",
            "optionC": "dances",
            "correctAnswer": "games"
        }),
      shuffleOptions({
            "question": "It is believed that girls cannot play as good as boys and there are some games which can only be played by boys. But this believe is completely vanished and we have wonderful names like Sania Mirza, Saina Nehwal, PT Usha, Karnam Malleshwari, Anju Bobby etc. who have established their names in ________ history and have broken gender stereotype in games.",
            "optionA": "music",
            "optionB": "movie",
            "optionC": "games",
            "correctAnswer": "games"
        }),
      shuffleOptions({
            "question": "Sports bring the best out of the individuals. They must be played honestly and with a spirit of true ________ irrespective of caste, gender or religion.",
            "optionA": "disrespect",
            "optionB": "sportsmanship",
            "optionC": "competition",
            "correctAnswer": "sportsmanship"
        }
    ]
    
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "Games and sports have no role in keeping a person fit and fine.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Indoor games like ludo, snake and ladder, and chess are usually played outdoors.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Traditional Indian games include kite flying and gilli danda.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Modern fairs are primarily objective-based events focused on promoting books.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Sports equipment includes items like balls, nets, and tennis rackets.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Games and sports do not contribute to the development of discipline among children.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "In kabaddi, the objective is to tag as many defenders as possible without being tackled.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Gutte is a modern game popularly played among children.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Girls have not been able to break gender stereotypes in the field of sports.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Sports should be played without honesty and sportsmanship.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }
    ]
    
    ],
  };
}

export var activityData;
