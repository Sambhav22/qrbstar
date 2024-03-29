export const chapter = "Chapter -12: Conduct in a Family";
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
          "question": "Why do people have different likes and dislikes?",
          "optionA": "Due to different perceptions, likes, and dislikes.",
          "optionB": "Due to similar perceptions, likes, and dislikes.",
          "optionC": "Due to similar sense organs.",
          "correctAnswer": "Due to different perceptions, likes, and dislikes."
        }),
      shuffleOptions({
          "question": "Which nerves carry messages from sensory organs to the brain?",
          "optionA": "Motor nerves",
          "optionB": "Sensory nerves",
          "optionC": "Muscular nerves",
          "correctAnswer": "Sensory nerves"
        }),
      shuffleOptions({
          "question": "Family plays a key role in determining our likes and dislikes because __________.",
          "optionA": "We share the same likes and dislikes as our friends.",
          "optionB": "We follow the ethics of our family.",
          "optionC": "We have different upbringing from our family.",
          "correctAnswer": "We follow the ethics of our family."
        }),
      shuffleOptions({
          "question": "If a person's family has been consuming non-vegetarian food for generations, the person is likely to develop a preference for __________.",
          "optionA": "Vegetarian dishes",
          "optionB": "Non-vegetarian dishes",
          "optionC": "Fast food",
          "correctAnswer": "Non-vegetarian dishes"
        }),
      shuffleOptions({
          "question": "A person's occupation can influence their likes and dislikes based on __________.",
          "optionA": "Income level",
          "optionB": "Physical fitness",
          "optionC": "Education level",
          "correctAnswer": "Income level"
        }),
      shuffleOptions({
          "question": "The mental state of an individual can be influenced by __________.",
          "optionA": "Family traits",
          "optionB": "Society or environment",
          "optionC": "Physical appearance",
          "correctAnswer": "Society or environment"
        }),
      shuffleOptions({
          "question": "Some members of a family may share common traits due to __________.",
          "optionA": "Heredity",
          "optionB": "Occupation",
          "optionC": "Cultural background",
          "correctAnswer": "Heredity"
        }),
      shuffleOptions({
          "question": "What is the term used to refer to people with disabilities?",
          "optionA": "Abled individuals",
          "optionB": "Differently abled individuals",
          "optionC": "Special individuals",
          "correctAnswer": "Differently abled individuals"
        }),
      shuffleOptions({
          "question": "What is the writing system used by blind and partially sighted people?",
          "optionA": "Braille Script",
          "optionB": "Alphabet Script",
          "optionC": "Cursive Script",
          "correctAnswer": "Braille Script"
        }),
      shuffleOptions({
          "question": "Who designed the Braille script?",
          "optionA": "Louis Braille",
          "optionB": "Alexander Graham Bell",
          "optionC": "Thomas Edison",
          "correctAnswer": "Louis Braille"
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
          "question": "Family plays a key role in determining our likes and dislikes. If we belong to a traditional family that follows ethics, our upbringing will be the same, we will have likes as per our family and will avoid the group of friends who have __________ behaviour.",
          "optionA": "Unethical",
          "optionB": "Friendly",
          "optionC": "Educated",
          "correctAnswer": "Unethical"
        }),
      shuffleOptions({
          "question": "If one's family takes non-veg since long, then the person automatically develops the craving for __________ dishes.",
          "optionA": "Vegetarian",
          "optionB": "Non-vegetarian",
          "optionC": "Fast food",
          "correctAnswer": "Non-vegetarian"
        }),
      shuffleOptions({
          "question": "It is a well-known fact that if a person has good income then he likes according to his status. On the other hand, if a person works in a factory and has a limited income, then his likes are only to satisfy his __________ needs.",
          "optionA": "Luxurious",
          "optionB": "Basic",
          "optionC": "Entertainment",
          "correctAnswer": "Basic"
        }),
      shuffleOptions({
          "question": "Society or environment are the key players in making the state of mind. If we reside in a high society or social environment, we derive our likes and dislikes according to that only.",
          "optionA": "High-income",
          "optionB": "Middle-income",
          "optionC": "Low-income",
          "correctAnswer": "High-income"
        }),
      shuffleOptions({
          "question": "Sometimes it is seen that some members of a family share common traits and beliefs. It is seen that their physical appearance, voice, tone, skin colour, etc. are similar to some members. It is because of __________ or passing of traits from one generation to the other.",
          "optionA": "Heredity",
          "optionB": "Environment",
          "optionC": "Education",
          "correctAnswer": "Heredity"
        }),
      shuffleOptions({
          "question": "Babies born with disabilities are treated as special children. Families provide them education platform using __________ and send them to special care giving schools.",
          "optionA": "Normal textbooks",
          "optionB": "Braille Script",
          "optionC": "Digital resources",
          "correctAnswer": "Braille Script"
        }),
      shuffleOptions({
          "question": "People who are blind read books written in a special script called __________.",
          "optionA": "Alphabet Script",
          "optionB": "Cursive Script",
          "optionC": "Braille Script",
          "correctAnswer": "Braille Script"
        }),
      shuffleOptions({
          "question": "The Braille script was designed by a French boy named __________.",
          "optionA": "Louis Braille",
          "optionB": "Alexander Graham Bell",
          "optionC": "Thomas Edison",
          "correctAnswer": "Louis Braille"
        }),
      shuffleOptions({
          "question": "Despite certain similarities, each member of a family is unique and special __________.",
          "optionA": "In his own way",
          "optionB": "According to society",
          "optionC": "Based on wealth",
          "correctAnswer": "In his own way"
        }),
      shuffleOptions({
          "question": "Our sense organs sense different things differently because of the way our __________ processes the information.",
          "optionA": "Skin",
          "optionB": "Brain",
          "optionC": "Heart",
          "correctAnswer": "Brain"
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
          "question": "Family upbringing has no influence on an individual's likes and dislikes.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "If a person's family has been vegetarian for generations, the person is likely to develop a preference for non-vegetarian dishes.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Income level does not affect an individual's preferences and likes.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "People's likes and dislikes are solely determined by their individual traits and not influenced by society.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Traits passed down through generations do not contribute to similarities among family members.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Special children in families receive the same education as non-disabled children.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Braille script is a writing system designed for people who are blind or partially sighted.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }),
      shuffleOptions({
          "question": "The Braille script was created by Alexander Graham Bell.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "Every member of a family shares identical characteristics.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "False"
        }),
      shuffleOptions({
          "question": "The brain plays a role in processing information from sense organs, leading to different perceptions and preferences.",
          "optionA": "True",
          "optionB": "False",
          "correctAnswer": "True"
        }
      ],
  };
}

export var activityData;
