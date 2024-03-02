export const chapter = "Chapter - 12: Conduct in a Family";
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
              "Why do individuals in a family have different likes and dislikes?",
            options: [
              "Due to different sense organs",
              "Because of similar upbringing",
              "Differences in brain perception",
            ],
            answer: "Differences in brain perception",
          },
          {
            question:
              "What is the role of sensory nerves in the process of developing likes and dislikes?",
            options: [
              "Carry information from brain to body",
              "Transmit information from sense organs to the brain",
              "Connect different family members",
            ],
            answer: "Transmit information from sense organs to the brain",
          },
          {
            question:
              "How does family influence likes and dislikes according to the passage?",
            options: [
              "Family members always have the same preferences",
              "Traditional upbringing shapes likes and dislikes",
              "Ethical behavior is irrelevant in family preferences",
            ],
            answer: "Traditional upbringing shapes likes and dislikes",
          },
          {
            question:
              "What factor can influence a person's liking for non-vegetarian dishes according to the text?",
            options: ["Cultural background", "Occupation", "Mental state"],
            answer: "Cultural background",
          },
          {
            question:
              "According to the passage, what is the impact of society or environment on a person's likes and dislikes?",
            options: [
              "No impact",
              "Influences mental state",
              "Determines occupation",
            ],
            answer: "Influences mental state",
          },
          {
            question:
              "Why do some family members share common traits and beliefs?",
            options: [
              "Due to heredity",
              "Random chance",
              "Environmental influence",
            ],
            answer: "Due to heredity",
          },
          {
            question:
              "How are special children in families treated according to the text?",
            options: [
              "Neglect and isolation",
              "Treated with love and care",
              "Sent to regular schools without special care",
            ],
            answer: "Treated with love and care",
          },
          {
            question:
              "What is the Braille script used for according to the passage?",
            options: [
              "Writing secret messages",
              "Communication in high society",
              "Reading for blind and partially sighted people",
            ],
            answer: "Reading for blind and partially sighted people",
          },
          {
            question:
              "Who designed the Braille script, as mentioned in the text?",
            options: ["Louis Armstrong", "Louis Braille", "Louis Vuitton"],
            answer: "Louis Braille",
          },
          {
            question:
              "How does the passage describe the uniqueness of each member in a family despite certain similarities?",
            options: [
              "They all look the same",
              "Despite similarities, each member is unique",
              "Similarities are rare in families",
            ],
            answer: "Despite similarities, each member is unique",
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
            question:
              "Family plays a key role in determining our likes and dislikes. If we belong to a traditional family that follows __________, our upbringing will be the same.",
            options: ["Modern practices", "Ethics", "Fashion trends"],
            answer: "Ethics",
          },
          {
            question:
              "People who are blind read books written in a special script called __________.",
            options: ["Hieroglyphics", "Morse code", "Braille script"],
            answer: "Braille script",
          },
          {
            question:
              "It is a well-known fact that if a person has a good income, then he likes according to his __________.",
            options: ["Hobbies", "Status", "Education"],
            answer: "Status",
          },
          {
            question:
              "Sometimes in families, babies are born with some disabilities. They are physically or mentally challenged and are treated as __________.",
            options: [
              "Ordinary children",
              "Special children",
              "Exceptional children",
            ],
            answer: "Special children",
          },
          {
            question:
              "If one's family takes non-veg since long, then the person automatically develops the craving for __________ dishes.",
            options: ["Vegetarian", "Non-vegetarian", "Spicy"],
            answer: "Non-vegetarian",
          },
          {
            question:
              "Despite certain similarities, each member of a family is unique and special in __________.",
            options: ["Their own way", "Appearance", "Personality"],
            answer: "Their own way",
          },
          {
            question:
              "The Braille script was designed by a French boy named __________, who went blind following a childhood accident.",
            options: ["Louis Armstrong", "Louis Braille", "Louis Vuitton"],
            answer: "Louis Braille",
          },
          {
            question:
              "Society or environment are the key players in making the __________.",
            options: [
              "Sense organs function",
              "State of mind",
              "Physical appearance",
            ],
            answer: "State of mind",
          },
          {
            question:
              "If we reside in high society or social environment, we derive our likes and dislikes according to __________ only.",
            options: [
              "Personal preferences",
              "Family traditions",
              "That environment",
            ],
            answer: "That environment",
          },
          {
            question:
              "Special children in families are provided an education platform using __________ and are sent to special care-giving schools.",
            options: ["Sign language", "Morse code", "Braille script"],
            answer: "Braille script",
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
        true_false_questions: [
          {
            question:
              "All family members have the same preferences based on their upbringing.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "The Braille script enables blind and partially sighted people to read and write through touch.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "A person's liking for non-vegetarian dishes is solely influenced by their occupation.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Special children born in families are often neglected and isolated.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Our sense organs sense things similarly, and differences in likes and dislikes are solely due to upbringing.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Being part of a high society or social environment has no impact on an individual's likes and dislikes.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "Members of a family sharing common traits is always due to heredity.",
            optionA: "True",
        optionB: "False",
            answer: "True",
          },
          {
            question:
              "Special children in families are provided education platforms using sign language.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question: "The Braille script was designed by Louis Armstrong.",
            optionA: "True",
        optionB: "False",
            answer: "False",
          },
          {
            question:
              "A person's mental state is not influenced by society or environment.",
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
