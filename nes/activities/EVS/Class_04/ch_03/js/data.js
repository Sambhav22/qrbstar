export const chapter = "Chapter - 3: Relationships";
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
            question: "What do you call your maternal grandfather?",
            options: ["Dadu", "Nanu", "Nani"],
            answer: "Nanu",
          },
          {
            question:
              "What is the term for a group of people who live together and are related to each other?",
            options: ["Community", "Clan", "Family"],
            answer: "Family",
          },
          {
            question:
              "What is the relationship between a man and a woman when they first get married?",
            options: ["Siblings", "Husband and wife", "Cousins"],
            answer: "Husband and wife",
          },
          {
            question: "Who is called Chachu in a family?",
            options: [
              "Father's brother",
              "Mother's brother",
              "Father's sister",
            ],
            answer: "Father's brother",
          },
          {
            question:
              "In a family, which members constitute the immediate family?",
            options: [
              "Parents and children",
              "Uncles and aunts",
              "Cousins and nephews",
            ],
            answer: "Parents and children",
          },
          {
            question:
              "What unique bond is highlighted between a mother and her child?",
            options: [
              "Sibling bond",
              "Father and child bond",
              "Mother and child bond",
            ],
            answer: "Mother and child bond",
          },
          {
            question:
              "During family gatherings, relatives meet for events such as:",
            options: [
              "Graduation ceremony",
              "Birthday party, wedding, housewarming ceremony",
              "Business conference",
            ],
            answer: "Birthday party, wedding, housewarming ceremony",
          },
          {
            question: "What is the significance of family gatherings?",
            options: [
              "Networking opportunities",
              "Learning about family values",
              "Job interviews",
            ],
            answer: "Learning about family values",
          },
          {
            question: "How have family values changed over time?",
            options: [
              "They have remained constant",
              "They are no longer important",
              "They change with society and mentality",
            ],
            answer: "They change with society and mentality",
          },
          {
            question:
              "In olden times, how did daughters-in-law behave in front of their fathers-in-law?",
            options: [
              "They covered their faces",
              "They were disrespectful",
              "They were treated as equals",
            ],
            answer: "They covered their faces",
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
        questions: [
          {
            question: "You call your paternal grandfather as __________.",
            options: ["Dadu", "Nanu", "Chachu"],
            answer: "Dadu",
          },
          {
            question: "You call your mother's brother as __________.",
            options: ["Chachu", "Mama", "Bua"],
            answer: "Mama",
          },
          {
            question:
              "A family is a group of people who live together and are __________ to each other.",
            options: ["Unrelated", "Neighbors", "Related"],
            answer: "Related",
          },
          {
            question:
              "Immediate family members comprise of parents and __________ living together in a house.",
            options: ["Cousins", "Children", "Uncles"],
            answer: "Children",
          },
          {
            question:
              "Out of all, the beauty lies in __________ and a child relation.",
            options: ["Father", "Mother", "Parent"],
            answer: "Mother",
          },
          {
            question:
              "Our relatives who do not live with us, meet during family gatherings such as birthday party, wedding, __________ ceremony, naming ceremony etc.",
            options: ["Graduation", "Housewarming", "Funeral"],
            answer: "Housewarming",
          },
          {
            question:
              "Each and every family has values which are related to their __________ and traditions.",
            options: ["Languages", "Cultures", "Beliefs"],
            answer: "Cultures",
          },
          {
            question:
              "Mother takes all pains to look after the child and turn him into a __________ adult.",
            options: ["Responsible", "Reckless", "Remote"],
            answer: "Responsible",
          },
          {
            question:
              "Family values change from time to time with the changes in __________ and mentality of family members.",
            options: ["Climate", "Society", "Technology"],
            answer: "Society",
          },
          {
            question:
              "In olden times, ladies covered their face in front of their __________.",
            options: ["Brothers", "Husbands", "Fathers-in-law"],
            answer: "Fathers-in-law",
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
        questions: [
          {
            question: "You call your paternal grandfather Dadu.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "A family is a group of people who live together and are unrelated to each other.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Immediate family members comprise of parents and children living together in a house.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "The first relation that starts when a man and woman marry is brother and sister.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The beauty lies in father and child relation.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Mother and child develop a special bond during the child's development.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Family gatherings provide an opportunity to learn about the values and traditions of the family.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Family values change with time and the mentality of family members.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "All important decisions in a family are still taken by the head of the family.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "In olden times, daughters-in-law covered their faces in front of their fathers-in-law.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
        ],
      },
    ],
  };
}

export var activityData;
