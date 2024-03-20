export const chapter = "Chapter -17: Games for All";
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
            "question": "Which type of games are played as competitions?",
            "optionA": "Individual",
            "optionB": "Team",
            "optionC": "Both",
            "correctAnswer": "Team"
        }),
      shuffleOptions({
            "question": "How many players typically play in a cricket team?",
            "optionA": "9",
            "optionB": "11",
            "optionC": "15",
            "correctAnswer": "11"
        }),
      shuffleOptions({
            "question": "Who represents a nation in sports?",
            "optionA": "State team",
            "optionB": "Local team",
            "optionC": "National team",
            "correctAnswer": "National team"
        }),
      shuffleOptions({
            "question": "The captain of a team plays a minor role in team development.",
            "optionA": "True",
            "optionB": "False",
            "optionC": "None",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Which of the following is not an Indian sportsperson?",
            "optionA": "Major Dhyanchand",
            "optionB": "Saina Nehwal",
            "optionC": "Usain Bolt",
            "correctAnswer": "Usain Bolt"
        }),
      shuffleOptions({
            "question": "Sports were traditionally considered unfit for women.",
            "optionA": "True",
            "optionB": "False",
            "optionC": "None",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Mixed doubles is a category in which sports?",
            "optionA": "Tennis",
            "optionB": "Football",
            "optionC": "Cricket",
            "correctAnswer": "Tennis"
        }),
      shuffleOptions({
            "question": "Kho-kho is primarily played in _______.",
            "optionA": "Maharashtra",
            "optionB": "Punjab",
            "optionC": "Kerala",
            "correctAnswer": "Maharashtra"
        }),
      shuffleOptions({
            "question": "Which of the following is not an importance of games and sports?",
            "optionA": "Improving mental health",
            "optionB": "Inducing bad habits",
            "optionC": "Enhancing discipline",
            "correctAnswer": "Inducing bad habits"
        }),
      shuffleOptions({
            "question": "Games like kho-kho reflect the _______ of a place.",
            "optionA": "Tradition and culture",
            "optionB": "Political situation",
            "optionC": "Economic status",
            "correctAnswer": "Tradition and culture"
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
            "question": "Kho-kho, a popular game, is typically played by _______ players in each team.",
            "optionA": "9",
            "optionB": "12",
            "optionC": "15",
            "correctAnswer": "12"
        }),
      shuffleOptions({
            "question": "In kabaddi, two teams take position in _______ halves of the ground.",
            "optionA": "Same",
            "optionB": "Opposite",
            "optionC": "Random",
            "correctAnswer": "Opposite"
        }),
      shuffleOptions({
            "question": "Games and sports help us in mental and _______ growth.",
            "optionA": "Emotional",
            "optionB": "Physical",
            "optionC": "Intellectual",
            "correctAnswer": "Physical"
        }),
      shuffleOptions({
            "question": "The spirit of competition and sense of discipline are instilled in children through _______.",
            "optionA": "Education",
            "optionB": "Sports",
            "optionC": "Music",
            "correctAnswer": "Sports"
        }),
      shuffleOptions({
            "question": "In sports, each team has a definite number of players depending on the _______ of the game.",
            "optionA": "Location",
            "optionB": "Type",
            "optionC": "Time",
            "correctAnswer": "Type"
        }),
      shuffleOptions({
            "question": "_______ was the first Indian woman to go into space.",
            "optionA": "Kalpana Chawla",
            "optionB": "Sunita Williams",
            "optionC": "Geeta Phogat",
            "correctAnswer": "Kalpana Chawla"
        }),
      shuffleOptions({
            "question": "The captain of a team plays a crucial role in encouraging and _______ other team members.",
            "optionA": "Rewarding",
            "optionB": "Motivating",
            "optionC": "Ignoring",
            "correctAnswer": "Motivating"
        }),
      shuffleOptions({
            "question": "Games that are played as competitions are known as _______.",
            "optionA": "Hobbies",
            "optionB": "Sports",
            "optionC": "Pastimes",
            "correctAnswer": "Sports"
        }),
      shuffleOptions({
            "question": "_______ helps us to understand how to tackle difficult situations.",
            "optionA": "Education",
            "optionB": "Music",
            "optionC": "Sports",
            "correctAnswer": "Sports"
        }),
      shuffleOptions({
            "question": "A national team consists of players from all parts of the _______.",
            "optionA": "World",
            "optionB": "Country",
            "optionC": "Continent",
            "correctAnswer": "Country"
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
            "question": "Kho-kho is primarily played in Maharashtra.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Mixed doubles is a category in cricket.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Games and sports help in mental and physical growth.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "The captain of a team plays a minor role in team development.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Each team in cricket has 10 players on the field.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Women were traditionally considered unfit for sports participation.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Mountaineering helps in understanding how to tackle difficult situations.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Sports bring a sense of discipline among children.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Local games do not reflect the tradition and culture of a place.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "The number of players in each team depends on the type of game played.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }
    ]
    
    ],
  };
}

export var activityData;
