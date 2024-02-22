export const chapter = "Chapter - 6: Playing is Fun ";
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
            question:
              "What is the primary benefit of playing games for children?",
            options: [
              "Improved academic performance",
              "Enjoyment and good health",
              "Enhanced cooking skills",
            ],
            answer: "Enjoyment and good health",
          },
          {
            question:
              "Why do schools adopt sports as an integral part of the curriculum?",
            options: [
              "To increase homework load",
              "To promote video games",
              "To recognize the importance of games and sports in physical and mental well-being",
            ],
            answer:
              "To recognize the importance of games and sports in physical and mental well-being",
          },
          {
            question: "What distinguishes indoor games from outdoor games?",
            options: [
              "The level of competitiveness",
              "The location of play",
              "The type of equipment used",
            ],
            answer: "The location of play",
          },
          {
            question:
              "What are examples of sports equipment mentioned in the text?",
            options: [
              "Cooking utensils",
              "Nets, bats, helmets",
              "Paintbrushes and canvases",
            ],
            answer: "Nets, bats, helmets",
          },
          {
            question:
              "In Kabaddi, what is the objective of the game for the raider?",
            options: [
              "To score goals",
              "To tag as many defenders as possible",
              "To avoid being tackled",
            ],
            answer: "To tag as many defenders as possible",
          },
          {
            question:
              "What is the primary message conveyed in the text about rules in games?",
            options: [
              "Rules are unnecessary in sports",
              "Fair play and adherence to rules are essential",
              "Breaking rules is acceptable to win",
            ],
            answer: "Fair play and adherence to rules are essential",
          },
          {
            question:
              "Why does the text mention the decrease in physical activity among kids?",
            options: [
              "Due to excessive homework",
              "In relation to the rise of traditional games",
              "Because of involvement in video games and electronic devices",
            ],
            answer:
              "Because of involvement in video games and electronic devices",
          },
          {
            question:
              "Which traditional game involves flying kites and is celebrated during 'Makar Sankranti'?",
            options: ["Gutte", "Gilli Danda", "Kite Flying"],
            answer: "Kite Flying",
          },
          {
            question: "What is 'Gilli Danda,' as mentioned in the text?",
            options: [
              "A cooking utensil",
              "A traditional game involving sticks",
              "A dance form",
            ],
            answer: "A traditional game involving sticks",
          },
          {
            question:
              "What stereotype does the text mention being broken in sports?",
            options: [
              "Age discrimination",
              "Ethnicity bias",
              "Gender stereotype",
            ],
            answer: "Gender stereotype",
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
        fillInTheBlankQuestions: [
          {
            question:
              "Children love to play games because these games provide them __________ on one hand and good health on the other.",
            options: ["academic knowledge", "enjoyment", "cultural exposure"],
            answer: "enjoyment",
          },
          {
            question:
              "Indoor games such as ludo, snake and ladder, cards, and chess are usually played ________.",
            options: ["at school", "in the neighborhood", "inside the door"],
            answer: "inside the door",
          },
          {
            question:
              "In school, students receive training in sports along with various facilities such as field, equipment, and ________.",
            options: ["television", "coach", "laptops"],
            answer: "coach",
          },
          {
            question:
              "Games like cricket, basketball, football, and tennis are classified as ________ games.",
            options: ["indoor", "complex", "outdoor"],
            answer: "outdoor",
          },
          {
            question:
              "Sports equipment includes items like balls, nets, bats, helmets, sticks, pads, and ________.",
            options: ["paintbrushes", "tennis rackets", "cooking utensils"],
            answer: "tennis rackets",
          },
          {
            question:
              "Kabaddi is a contact team sport played between two teams of ________ players each.",
            options: ["five", "ten", "seven"],
            answer: "seven",
          },
          {
            question:
              "Traditional Indian games like Gutte and Kite Flying are often played during leisure time and contribute to the ________ of kids.",
            options: [
              "decrease in physical activity",
              "rise of health issues",
              "revival of cultural heritage",
            ],
            answer: "revival of cultural heritage",
          },
          {
            question:
              "Breaking gender stereotype in games is exemplified by names like Sania Mirza, Saina Nehwal, and ________.",
            options: ["PT Usha", "Karnam Malleshwari", "Anju Bobby"],
            answer: "Anju Bobby",
          },
          {
            question:
              "It is believed that every sportsperson must play a fair game and ________ all rules and regulations.",
            options: ["ignore", "obey", "challenge"],
            answer: "obey",
          },
          {
            question:
              "Games and sports are an integral part of ________ culture and heritage.",
            options: ["global", "modern", "Indian"],
            answer: "Indian",
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
        trueFalseQuestions: [
          {
            question:
              "Children playing games only receive enjoyment and not any health benefits.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Indoor games like ludo and chess are considered outdoor games.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "In schools, students receive training in sports but lack facilities like coaches.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Cricket, basketball, football, and tennis are classified as indoor games.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Sports equipment includes items like paintbrushes and cooking utensils.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Kabaddi is a non-contact team sport played with five players on each team.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Traditional Indian games like Gutte and Kite Flying contribute to the decrease in physical activity among kids.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Breaking gender stereotypes in games is exemplified by names like Sania Mirza and Saina Nehwal.",
            options: ["True", "False"],
            answer: "True",
          },
          {
            question:
              "In games, it is believed that every sportsperson must play a fair game and challenge the rules.",
            options: ["True", "False"],
            answer: "False",
          },
          {
            question:
              "Games and sports are not considered integral parts of Indian culture and heritage.",
            options: ["True", "False"],
            answer: "False",
          },
        ],
      },
    ],
  };
}

export var activityData;
