export const chapter = "Chapter - 16: Games for All";
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
}


if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What is the primary purpose of playing games?",
            options: [
              "For earning money",
              "For physical and mental growth",
              "For social recognition",
            ],
            answer: "For physical and mental growth",
          },
          {
            question:
              "What is the key difference between individual games and team games?",
            options: [
              "Individual games are played indoors, while team games are played outdoors.",
              "In individual games, a player competes against another player, while in team games, teams compete against each other.",
              "Team games have a smaller number of players compared to individual games.",
            ],
            answer:
              "In individual games, a player competes against another player, while in team games, teams compete against each other.",
          },
          {
            question: "What defines a national team?",
            options: [
              "A team representing a specific region",
              "A team consisting of players from different parts of a country",
              "A team with players from the same city",
            ],
            answer:
              "A team consisting of players from different parts of a country",
          },
          {
            question: "What role does the captain of a team play?",
            options: [
              "Providing entertainment",
              "Encouraging team spirit and motivating players",
              "Keeping score during the game",
            ],
            answer: "Encouraging team spirit and motivating players",
          },
          {
            question:
              "Which of the following is an example of a mixed doubles category in sports?",
            options: ["Cricket", "Tennis", "Hockey"],
            answer: "Tennis",
          },
          {
            question:
              "Who are some eminent sportspersons mentioned in the text?",
            options: [
              "Major Dhyanchand, Geeta Phogat, Saina Nehwal",
              "Usain Bolt, Michael Phelps, Serena Williams",
              "Lionel Messi, Cristiano Ronaldo, LeBron James",
            ],
            answer: "Major Dhyanchand, Geeta Phogat, Saina Nehwal",
          },
          {
            question:
              "In which game is one team the chaser and the other is the runner?",
            options: ["Cricket", "Kho-kho", "Kabaddi"],
            answer: "Kho-kho",
          },
          {
            question: "How do sports contribute to eliminating mental stress?",
            options: [
              "By promoting unhealthy habits",
              "By providing financial rewards",
              "By offering a way to stay physically and mentally active",
            ],
            answer: "By offering a way to stay physically and mentally active",
          },
          {
            question: "What is the significance of local games?",
            options: [
              "They have no cultural or traditional importance.",
              "They reflect the tradition and culture of a particular area.",
              "They are only played by professional athletes.",
            ],
            answer:
              "They reflect the tradition and culture of a particular area.",
          },
          {
            question:
              "What is the importance of sports in understanding life skills?",
            options: [
              "They have no impact on life skills.",
              "Sports help in understanding the importance of goal setting, motivation, dedication, and teamwork.",
              "Sports only focus on physical fitness.",
            ],
            answer:
              "Sports help in understanding the importance of goal setting, motivation, dedication, and teamwork.",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
      {
        fill_in_the_blank_questions: [
          {
            question: "Sports can be played _______ or as a ________.",
            options: [
              "only individually, solely team",
              "individually, team",
              "solo, in a group",
            ],
            answer: "individually, team",
          },
          {
            question: "In cricket, each team has ______ players on a field.",
            options: ["10", "11", "12"],
            answer: "11",
          },
          {
            question: "The national team represents ________.",
            options: [
              "a specific city",
              "different regions",
              "international players",
            ],
            answer: "different regions",
          },
          {
            question:
              "The captain of a team plays a major role in ________ and ________ of a team.",
            options: [
              "promotion, marketing",
              "development, encouragement",
              "scoring, coaching",
            ],
            answer: "development, encouragement",
          },
          {
            question:
              "India is a sport-loving nation, and some eminent sportspersons include Major Dhyanchand, Geeta Phogat, Saina Nehwal, and ________.",
            options: ["Roger Federer", "Usain Bolt", "Sushil Kumar"],
            answer: "Sushil Kumar",
          },
          {
            question:
              "In the game Kho-kho, one team becomes the ________ and the other is the ________.",
            options: [
              "chaser, runner",
              "attacker, defender",
              "pitcher, catcher",
            ],
            answer: "chaser, runner",
          },
          {
            question:
              "Women can now actively participate in sports, and examples include Dipa Karmakar in gymnastics, Mithali Raj in cricket, and Sakshi Malik in ________.",
            options: ["tennis", "wrestling", "badminton"],
            answer: "wrestling",
          },
          {
            question:
              "Local games reflect the ________ and ________ of a particular area.",
            options: [
              "weather, climate",
              "tradition, culture",
              "population, demographics",
            ],
            answer: "tradition, culture",
          },
          {
            question:
              "Games and sports help in mental and physical growth, and they bring the spirit of ________ among children.",
            options: ["competition", "collaboration", "conflict"],
            answer: "competition",
          },
          {
            question:
              "Sports help in understanding the importance of goal setting, motivation, dedication, and ________.",
            options: ["individualism", "teamwork", "isolation"],
            answer: "teamwork",
          },
        ],
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        true_or_false_questions: [
          {
            question: "Cricket is an individual game.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Table tennis is played by 2 or 4 players.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question: "A national team consists of players from the same city.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The captain of a team plays a minor role in team development.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Dipa Karmakar is known for her achievements in wrestling.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Kho-kho is a game played with a ball on a table.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Women were historically treated unfit to participate in sports.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Local games reflect the weather and climate of a particular area.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "Sports help in eliminating mental stress.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Competition in sports does not contribute to strengthening dedication.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
