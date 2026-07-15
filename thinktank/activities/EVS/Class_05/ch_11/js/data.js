export const chapter = "Chapter -8: Let's See a Family in Transit";
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
          "question": "What is a family?",
          "optionA": "A group of unrelated people",
          "optionB": "A group of people related to one another",
          "optionC": "A group of friends living together",
          "correctAnswer": "A group of people related to one another"
        }),
      shuffleOptions({
          "question": "What does a family tree usually show?",
          "optionA": "Only the parents and children",
          "optionB": "All the people in a family over three generations and their relationships",
          "optionC": "Only the grandparents and grandchildren",
          "correctAnswer": "All the people in a family over three generations and their relationships"
        }),
      shuffleOptions({
          "question": "What are the primary social reasons for families to move from one place to another?",
          "optionA": "Economic stability",
          "optionB": "Abnormal changes in society",
          "optionC": "Environmental factors",
          "correctAnswer": "Abnormal changes in society"
        }),
      shuffleOptions({
          "question": "What is migration?",
          "optionA": "Permanent settlement in a new place",
          "optionB": "Temporary movement of people",
          "optionC": "Large scale movement of people in search of new beginning",
          "correctAnswer": "Large scale movement of people in search of new beginning"
        }),
      shuffleOptions({
          "question": "What distinguishes displacement from migration?",
          "optionA": "Displacement is voluntary, while migration is involuntary",
          "optionB": "Displacement is due to social reasons, while migration is due to economic reasons",
          "optionC": "Displacement is involuntary, while migration is due to government policy changes",
          "correctAnswer": "Displacement is involuntary, while migration is due to government policy changes"
        }),
      shuffleOptions({
          "question": "What changes occur in modern families compared to traditional families?",
          "optionA": "Females go out for work",
          "optionB": "Sons follow their father's occupation",
          "optionC": "Decisions are made without mutual understanding",
          "correctAnswer": "Females go out for work"
        }),
      shuffleOptions({
          "question": "What is the primary reason for economic migration?",
          "optionA": "To raise the standard of living",
          "optionB": "To escape environmental disasters",
          "optionC": "To find better social opportunities",
          "correctAnswer": "To raise the standard of living"
        }),
      shuffleOptions({
          "question": "What causes displacement?",
          "optionA": "Social advancements",
          "optionB": "Environmental factors",
          "optionC": "Government policy changes",
          "correctAnswer": "Government policy changes"
        }),
      shuffleOptions({
          "question": "In which type of migration do migrants come back after completing their tasks?",
          "optionA": "Permanent migration",
          "optionB": "Temporary migration",
          "optionC": "Forced migration",
          "correctAnswer": "Temporary migration"
        }),
      shuffleOptions({
          "question": "What term describes the movement of individuals forcibly to other countries or cities?",
          "optionA": "Migration",
          "optionB": "Displacement",
          "optionC": "Emigration",
          "correctAnswer": "Displacement"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "A family is a group of people related to one another. It is made up of parents and their __________.",
          "optionA": "Siblings",
          "optionB": "Children",
          "optionC": "Grandparents",
          "correctAnswer": "Children"
        }),
      shuffleOptions({
          "question": "A family tree usually shows all the people in a family over __________ generations and their relationships with one another.",
          "optionA": "Two",
          "optionB": "Three",
          "optionC": "Four",
          "correctAnswer": "Three"
        }),
      shuffleOptions({
          "question": "Migration is the large scale movement of people from one place to other in search of __________ beginning.",
          "optionA": "Old",
          "optionB": "Familiar",
          "optionC": "New",
          "correctAnswer": "New"
        }),
      shuffleOptions({
          "question": "In permanent migration, migrants do not __________ back.",
          "optionA": "Stay",
          "optionB": "Return",
          "optionC": "Leave",
          "correctAnswer": "Return"
        }),
      shuffleOptions({
          "question": "Migration is often confused with __________.",
          "optionA": "Emigration",
          "optionB": "Displacement",
          "optionC": "Immigration",
          "correctAnswer": "Displacement"
        }),
      shuffleOptions({
          "question": "With the advancement in culture, education and living standards, most traditional families change into __________ families.",
          "optionA": "Old-fashioned",
          "optionB": "Modern",
          "optionC": "Conservative",
          "correctAnswer": "Modern"
        }),
      shuffleOptions({
          "question": "Earlier, a son of a goldsmith became a goldsmith, a son of a farmer became a farmer, but now a son of a farmer may become an __________.",
          "optionA": "Engineer",
          "optionB": "IAS",
          "optionC": "Artist",
          "correctAnswer": "IAS"
        }),
      shuffleOptions({
          "question": "With the change in education and advancement, people now do work with their own __________.",
          "optionA": "Capability",
          "optionB": "Interest",
          "optionC": "Choice",
          "correctAnswer": "Interest"
        }),
      shuffleOptions({
          "question": "A family tree usually depicts the relationships among family members over __________ generations.",
          "optionA": "One",
          "optionB": "Two",
          "optionC": "Three",
          "correctAnswer": "Three"
        }),
      shuffleOptions({
          "question": "Migration can be both __________ or temporary.",
          "optionA": "Economic",
          "optionB": "Permanent",
          "optionC": "Seasonal",
          "correctAnswer": "Permanent"
        }
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions(
        {
          "question": "A family tree typically shows the relationships among family members over two generations.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Migration refers to the permanent movement of people from one place to another.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "In temporary migration, migrants do not return after completing their desired tasks.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Displacement and migration are interchangeable terms with the same meaning.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Modern families often adhere strictly to traditional customs and practices.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Advancements in education have led to people pursuing careers based solely on family tradition.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "People now have more autonomy in choosing their occupations due to educational progress.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "A family tree usually depicts relationships among family members over multiple generations.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "Migration can only occur for economic reasons.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Permanent migration involves migrants returning to their original location after a period of time.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }
      ],
  };
}

export var activityData;
