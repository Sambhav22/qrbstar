export const chapter = "Chapter -1: Super Senses";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        [
            {
              "question": "Which of the following is not one of the five sense organs?",
              "optionA": "Nose",
              "optionB": "Heart",
              "optionC": "Skin",
              "correctAnswer": "Heart"
            },
            {
              "question": "Which sense organ is particularly important for animals like bats and cetaceans to determine orientation to other objects through interpretation of reflected sound?",
              "optionA": "Ears",
              "optionB": "Nose",
              "optionC": "Eyes",
              "correctAnswer": "Ears"
            },
            {
              "question": "What is the primary sense that allows animals to detect and identify dissolved chemicals?",
              "optionA": "Sense of Smell",
              "optionB": "Sense of Taste",
              "optionC": "Sense of Touch",
              "correctAnswer": "Sense of Taste"
            },
            {
              "question": "Which animal has exceptionally well-adapted night vision?",
              "optionA": "Deer",
              "optionB": "Tiger",
              "optionC": "Crocodile",
              "correctAnswer": "Tiger"
            },
            {
              "question": "What is the primary sense that allows animals like cats to feel around using their whiskers and stiffer hair?",
              "optionA": "Sense of Smell",
              "optionB": "Sense of Taste",
              "optionC": "Sense of Touch",
              "correctAnswer": "Sense of Touch"
            },
            {
              "question": "Which sense is mainly responsible for making food choices in birds?",
              "optionA": "Sense of Smell",
              "optionB": "Sense of Taste",
              "optionC": "Sense of Vision",
              "correctAnswer": "Sense of Touch"
            },
            {
              "question": "What sense allows predatory birds like eagle, owl, and hawk to see four times as far as humans can?",
              "optionA": "Sense of Smell",
              "optionB": "Sense of Taste",
              "optionC": "Sense of Vision",
              "correctAnswer": "Sense of Vision"
            },
            {
              "question": "Which of the following animals does not communicate through sound?",
              "optionA": "Dog",
              "optionB": "Ant",
              "optionC": "Crocodile",
              "correctAnswer": "Crocodile"
            },
            {
              "question": "Which sense is particularly important for animals like sharks to find their food?",
              "optionA": "Sense of Smell",
              "optionB": "Sense of Taste",
              "optionC": "Sense of Hearing",
              "correctAnswer": "Sense of Smell"
            },
            {
              "question": "What organ is mainly responsible for communicating through symbols like tail wagging in dogs?",
              "optionA": "Nose",
              "optionB": "Ears",
              "optionC": "Tail",
              "correctAnswer": "Tail"
            }
          ]
          
        ],
      };
    }
    

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the Blanks:",
    questions: [
        [
            {
              "question": "Sense organs are the windows from our body to the outside world. There are _____ sense organs-nose, ears, skin, tongue, and eyes.",
              "optionA": "four",
              "optionB": "five",
              "optionC": "six",
              "correctAnswer": "five"
            },
            {
              "question": "Most animals that are mammals have a much keener sense of _____ than humans.",
              "optionA": "taste",
              "optionB": "smell",
              "optionC": "touch",
              "correctAnswer": "smell"
            },
            {
              "question": "Deer and other grazing animals sense of hearing provide them warning of approaching _____.",
              "optionA": "predators",
              "optionB": "prey",
              "optionC": "food",
              "correctAnswer": "predators"
            },
            {
              "question": "Cat's whiskers and the stiffer hair along its body are great at feeling around. This sense of touch is also called _____.",
              "optionA": "visual sense",
              "optionB": "auditory sense",
              "optionC": "tactile sense",
              "correctAnswer": "tactile sense"
            },
            {
              "question": "The sense of taste allows animals to detect and identify dissolved _____.",
              "optionA": "chemicals",
              "optionB": "metals",
              "optionC": "gases",
              "correctAnswer": "chemicals"
            },
            {
              "question": "A tiger can see _____ times better at night than humans.",
              "optionA": "two",
              "optionB": "four",
              "optionC": "six",
              "correctAnswer": "six"
            },
            {
              "question": "Communication in animals like dogs can also be through _____.",
              "optionA": "sight",
              "optionB": "sound",
              "optionC": "touch",
              "correctAnswer": "sound"
            },
            {
              "question": "Certain animals including bats and cetaceans have the ability to determine orientation to other objects through interpretation of reflected _____.",
              "optionA": "light",
              "optionB": "sound",
              "optionC": "heat",
              "correctAnswer": "sound"
            },
            {
              "question": "Animals like cats often refuse to eat when their _____ is blocked.",
              "optionA": "nose",
              "optionB": "ears",
              "optionC": "mouth",
              "correctAnswer": "nose"
            },
            {
              "question": "Predatory birds such as eagle, owl, and hawk have keen _____.",
              "optionA": "sense of taste",
              "optionB": "sense of hearing",
              "optionC": "sense of vision",
              "correctAnswer": "sense of vision"
            }
          ]
          
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        [
            {
              "question": "Sense organs are the windows from our body to the outside world.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "True"
            },
            {
              "question": "Animals have sharper sense organs compared to humans.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "True"
            },
            {
              "question": "Deer and other grazing animals use their sense of hearing to locate their prey.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "False"
            },
            {
              "question": "Cats can sense changes in air currents with their whiskers and body hair.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "True"
            },
            {
              "question": "Taste is mainly dependent on the sense of smell.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "True"
            },
            {
              "question": "Tigers have better night vision compared to humans.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "True"
            },
            {
              "question": "Communication in animals is only through sounds.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "False"
            },
            {
              "question": "Certain animals, like bats and cetaceans, determine orientation through interpretation of reflected light.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "False"
            },
            {
              "question": "Cats rely solely on their sense of taste to identify food.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "False"
            },
            {
              "question": "Predatory birds such as eagle, owl, and hawk have poor sense of vision.",
              "optionA": "True",
              "optionB": "False",
              "correctAnswer": "False"
            }
          ]
  ],
  };
}
export var activityData;
