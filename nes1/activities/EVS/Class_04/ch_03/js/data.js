export const chapter = "Chapter -3: Relationships";
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
            "question": "What is the definition of a family?",
            "optionA": "A group of unrelated people living together",
            "optionB": "A group of people related to each other living together",
            "optionC": "A group of friends living together",
            "correctAnswer": "A group of people related to each other living together"
        }),
      shuffleOptions({
            "question": "Which relationship is formed when a man and a woman get married?",
            "optionA": "Sibling",
            "optionB": "Husband and wife",
            "optionC": "Cousin",
            "correctAnswer": "Husband and wife"
        }),
      shuffleOptions({
            "question": "Who are considered immediate family members?",
            "optionA": "Uncle, aunt, cousins",
            "optionB": "Parents and children living together",
            "optionC": "Nephews and nieces",
            "correctAnswer": "Parents and children living together"
        }),
      shuffleOptions({
            "question": "What special bond is developed between a mother and her child?",
            "optionA": "Sibling bond",
            "optionB": "Parent-child bond",
            "optionC": "Friendship bond",
            "correctAnswer": "Parent-child bond"
        }),
      shuffleOptions({
            "question": "What do some couples do if they cannot have a child of their own?",
            "optionA": "Adopt or foster a child",
            "optionB": "Have a pet instead",
            "optionC": "Remain childless",
            "correctAnswer": "Adopt or foster a child"
        }),
      shuffleOptions({
            "question": "When couples adopt a child, what does it mean?",
            "optionA": "They temporarily take care of the child",
            "optionB": "They become legal parents of the child and care for them for a lifetime",
            "optionC": "They send money and clothes to orphan children",
            "correctAnswer": "They become legal parents of the child and care for them for a lifetime"
        }),
      shuffleOptions({
            "question": "In what kind of gatherings do relatives who do not live together usually meet?",
            "optionA": "School events",
            "optionB": "Family gatherings like weddings and birthday parties",
            "optionC": "Community picnics",
            "correctAnswer": "Family gatherings like weddings and birthday parties"
        }),
      shuffleOptions({
            "question": "What do family gatherings provide an opportunity for?",
            "optionA": "To discuss family problems",
            "optionB": "To meet with relatives and learn about family values",
            "optionC": "To gossip about other family members",
            "correctAnswer": "To meet with relatives and learn about family values"
        }),
      shuffleOptions({
            "question": "How do family values change over time?",
            "optionA": "They remain the same",
            "optionB": "They change based on the weather",
            "optionC": "They change with changes in society and mentality of family members",
            "correctAnswer": "They change with changes in society and mentality of family members"
        }),
      shuffleOptions({
            "question": "In the past, who used to make all the important decisions in the family?",
            "optionA": "The children",
            "optionB": "The head of the family",
            "optionC": "The extended family",
            "correctAnswer": "The head of the family"
        }
    ], 
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
            "question": "A family is a group of people who live together and are __________ to each other.",
            "optionA": "related",
            "optionB": "unrelated",
            "optionC": "neighbors",
            "correctAnswer": "related"
        }),
      shuffleOptions({
            "question": "When a man and a woman get married, they form a __________ relationship.",
            "optionA": "sibling",
            "optionB": "husband-wife",
            "optionC": "friendship",
            "correctAnswer": "husband-wife"
        }),
      shuffleOptions({
            "question": "Immediate family members consist of parents and children living together in the same __________.",
            "optionA": "house",
            "optionB": "neighborhood",
            "optionC": "city",
            "correctAnswer": "house"
        }),
      shuffleOptions({
            "question": "The special bond developed between a mother and her child is known as the __________ bond.",
            "optionA": "sibling",
            "optionB": "parent-child",
            "optionC": "friendship",
            "correctAnswer": "parent-child"
        }),
      shuffleOptions({
            "question": "Couples who cannot have a child of their own may choose to adopt or __________ a child.",
            "optionA": "babysit",
            "optionB": "abandon",
            "optionC": "foster",
            "correctAnswer": "foster"
        }),
      shuffleOptions({
            "question": "When couples adopt a child, they become the child's legal __________.",
            "optionA": "guardians",
            "optionB": "neighbors",
            "optionC": "friends",
            "correctAnswer": "guardians"
        }),
      shuffleOptions({
            "question": "Family gatherings provide an opportunity to meet with relatives and learn about family __________.",
            "optionA": "problems",
            "optionB": "values",
            "optionC": "traditions",
            "correctAnswer": "values"
        }),
      shuffleOptions({
            "question": "Family values change with changes in __________ and mentality of family members.",
            "optionA": "weather",
            "optionB": "society",
            "optionC": "location",
            "correctAnswer": "society"
        }),
      shuffleOptions({
            "question": "In the past, all the important decisions in the family were made by the __________ of the family.",
            "optionA": "children",
            "optionB": "grandparents",
            "optionC": "head",
            "correctAnswer": "head"
        }),
      shuffleOptions({
            "question": "In what kind of gatherings do relatives who do not live together usually meet?",
            "optionA": "school events",
            "optionB": "family gatherings like weddings and birthday parties",
            "optionC": "community picnics",
            "correctAnswer": "family gatherings like weddings and birthday parties"
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
            "question": "A family is a group of people who live together and are related to each other.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Immediate family members include parents and children living together in a house.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Extended family members live in the same house as immediate family members.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Mother takes all pains to look after the child and turn him into a responsible adult.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Adoption and fostering are two methods for couples without children to satisfy their parenting needs.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "Family gatherings provide an opportunity to meet with relatives but do not help in learning about family values and traditions.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Family values remain constant over time and do not change with societal changes.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "In olden times, daughters-in-law used to cover their faces in front of fathers-in-law.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }),
      shuffleOptions({
            "question": "All important decisions in a family are taken solely by the head of the family.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "False"
        }),
      shuffleOptions({
            "question": "Fathers-in-law treat their daughters-in-law as their own daughters in modern times.",
            "optionA": "True",
            "optionB": "False",
            "correctAnswer": "True"
        }
    ]
    
    ],
  };
}

export var activityData;
