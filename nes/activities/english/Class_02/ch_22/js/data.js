export const chapter = "Chapter -21: The Reflection  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What was located in one corner of the animal farm?",
        optionA: "a) Playground",
        optionB: "b) Water tank",
        optionC: "c) Food storage",
        correctAnswer: "b) Water tank",
      },
      {
        question: "Why were the animal babies not allowed to go to the tank?",
        optionA: "a) The tank was reserved for adult animals.",
        optionB: "b) It was a rule set by the farmer.",
        optionC: "c) The text does not provide a reason.",
        correctAnswer: "c) The text does not provide a reason.",
      },
      {
        question:
          "What did the mother dog tell her pup when it wanted to go to the tank?",
        optionA: 'a) "You can go anytime you want."',
        optionB:
          'b) "You have to grow a little more before I can take you to the tank."',
        optionC: 'c) "The tank is only for big dogs."',
        correctAnswer:
          'b) "You have to grow a little more before I can take you to the tank."',
      },
      {
        question:
          "What did the pup see in the water tank when he sneaked out to it?",
        optionA: "a) Other animals playing",
        optionB: "b) His reflection",
        optionC: "c) Hidden toys",
        correctAnswer: "b) His reflection",
      },
      {
        question: "Why did the pup think there was another pup in the water?",
        optionA: "a) His mother told him so.",
        optionB: "b) He saw another pup hiding in the tank.",
        optionC: "c) He misunderstood his own reflection.",
        correctAnswer: "c) He misunderstood his own reflection.",
      },
      {
        question: "What did the pup say to his reflection in the water?",
        optionA: 'a) "You\'re my sibling."',
        optionB: 'b) "Woof!"',
        optionC: 'c) "Stay away!"',
        correctAnswer: 'b) "Woof!"',
      },
      {
        question: "How did the reflection respond when the pup barked at it?",
        optionA: "a) It remained still.",
        optionB: "b) It imitated the pup.",
        optionC: "c) It disappeared.",
        correctAnswer: "b) It imitated the pup.",
      },
      {
        question: "What did the pup realize after jumping into the water?",
        optionA: "a) There were other pups hiding.",
        optionB: "b) His reflection was a magical creature.",
        optionC: "c) There was no other pup, and he was drowning.",
        correctAnswer: "c) There was no other pup, and he was drowning.",
      },
      {
        question: "Why did the pup bark for help?",
        optionA: "a) He wanted attention.",
        optionB: "b) He was stuck in the mud.",
        optionC: "c) He was drowning in water.",
        correctAnswer: "c) He was drowning in water.",
      },
      {
        question: "Who came to the pup's rescue when he barked for help?",
        optionA: "a) Another dog",
        optionB: "b) The farmer",
        optionC: "c) A friendly bird",
        correctAnswer: "b) The farmer",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question: "Many animals lived on the ____________.",
        optionA: "a) Mountain",
        optionB: "b) Animal Farm",
        optionC: "c) Meadow",
        correctAnswer: "b) Animal Farm",
      },
      {
        question:
          "In one corner of the farm, there was a ____________ in which animals drank water and bathed.",
        optionA: "a) Playground",
        optionB: "b) Water tank",
        optionC: "c) Pond",
        correctAnswer: "b) Water tank",
      },
      {
        question:
          "The animal babies were not allowed to go to the ____________.",
        optionA: "a) Playground",
        optionB: "b) Water tank",
        optionC: "c) Meadow",
        correctAnswer: "b) Water tank",
      },
      {
        question:
          'The mother dog told her pup, "You must not go to the tank; you have to grow a little more before I can take you to the ____________."',
        optionA: "a) Playground",
        optionB: "b) Water tank",
        optionC: "c) Pond",
        correctAnswer: "b) Water tank",
      },
      {
        question:
          "The pup wanted to go to the tank because he also wanted to ____________.",
        optionA: "a) Play with other pups",
        optionB: "b) Drink water",
        optionC: "c) Take a bath",
        correctAnswer: "c) Take a bath",
      },
      {
        question:
          "The pup thought there was another pup in the water because he saw his ____________ in it.",
        optionA: "a) Mother",
        optionB: "b) Reflection",
        optionC: "c) Sibling",
        correctAnswer: "b) Reflection",
      },
      {
        question:
          'The pup said to his reflection, "__________!" He saw it imitate him.',
        optionA: "a) Meow",
        optionB: "b) Bark",
        optionC: "c) Woof",
        correctAnswer: "c) Woof",
      },
      {
        question:
          "Growing very angry, the pup jumped into the ____________. Only then he knew that there was no other pup in the water.",
        optionA: "a) Pond",
        optionB: "b) Playground",
        optionC: "c) Water",
        correctAnswer: "c) Water",
      },
      {
        question:
          "The pup barked for help when he realized he was ____________ in water.",
        optionA: "a) Playing",
        optionB: "b) Drowning",
        optionC: "c) Floating",
        correctAnswer: "b) Drowning",
      },
      {
        question:
          "Who came running and rescued the pup when he barked for help?",
        optionA: "a) Another dog",
        optionB: "b) The farmer",
        optionC: "c) A friendly bird",
        correctAnswer: "b) The farmer",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "The water tank on the farm was only for adult animals.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The animal babies were allowed to go to the tank whenever they wanted.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The pup wanted to go to the tank because he wanted to play with other pups.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The pup thought there was another pup in the water because he saw his mother in it.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question: "The reflection in the water imitated the pup's actions.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question: "The pup realized there was another pup hiding in the water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The pup barked at his reflection because it was a magical creature.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The pup jumped into the water and found out there was no other pup.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The pup barked for help because he was happily playing in the water.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "The farmer came running and rescued the pup when he barked for help.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
