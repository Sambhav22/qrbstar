export const chapter = "Chapter - 22: The Clever Bat ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What does the bat primarily do at night?",
        optionA: "Sleep",
        optionB: "Fly and catch prey",
        optionC: "Roam in the daylight",
        correctAnswer: "Fly and catch prey",
      },
      {
        question: "How does the bat's body compare to a mouse?",
        optionA: "It is larger than a mouse",
        optionB: "It is smaller than a mouse",
        optionC: "It is similar to a mouse",
        correctAnswer: "It is similar to a mouse",
      },
      {
        question:
          "In some parts of the world, what is the bat's association with food?",
        optionA: "It is considered a delicacy",
        optionB: "It is a common pet",
        optionC: "It is never eaten",
        correctAnswer: "It is considered a delicacy",
      },
      {
        question:
          "According to the text, what is believed to have caused the spread of the Corona disease?",
        optionA: "Eating cats",
        optionB: "Eating bats",
        optionC: "Eating mice",
        correctAnswer: "Eating bats",
      },
      {
        question: "How did the bat convince the cat to spare his life?",
        optionA: "He offered the cat a reward",
        optionB: "He pretended to be a mouse",
        optionC: "He threatened the cat",
        correctAnswer: "He pretended to be a mouse",
      },
      {
        question:
          "What did the bat claim to be when trying to escape from the cat?",
        optionA: "A mouse",
        optionB: "A bird",
        optionC: "A weasel",
        correctAnswer: "A bird",
      },
      {
        question: "Why did the cat let the bat go after seeing his wings?",
        optionA: "The cat didn't like birds",
        optionB: "The bat offered a reward",
        optionC: "The cat believed the bat was a mouse",
        correctAnswer: "The cat didn't like birds",
      },
      {
        question: "What happened when the bat encountered the weasel?",
        optionA: "The weasel ate the bat",
        optionB: "The weasel believed the bat was a mouse and let him go",
        optionC: "The bat tricked the weasel into thinking he was a bird",
        correctAnswer: "The weasel believed the bat was a mouse and let him go",
      },
      {
        question: "What did the bat claim to be when facing the weasel?",
        optionA: "A mouse",
        optionB: "A bird",
        optionC: "A cat",
        correctAnswer: "A mouse",
      },
      {
        question: "How did the bat manage to save his life twice in the story?",
        optionA: "By offering a reward to his captors",
        optionB: "By pretending to be a bird",
        optionC: "By adopting tricks suitable to the situation",
        correctAnswer: "By adopting tricks suitable to the situation",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      {
        question:
          "Have you seen a bat? It flies and catches its prey at ________.",
        options: ["dawn", "night", "noon"],
        correctAnswer: "night",
      },
      {
        question:
          "The bat has a strange body. Its main body is like a ________.",
        options: ["cat", "mouse", "dog"],
        correctAnswer: "mouse",
      },
      {
        question:
          "In some parts of the world, bats are also eaten as ________.",
        options: ["pets", "food", "friends"],
        correctAnswer: "food",
      },
      {
        question:
          "According to the text, it is said that the Corona disease spread from eating ________.",
        options: ["birds", "bats", "fish"],
        correctAnswer: "bats",
      },
      {
        question:
          "One day, a cat caught a bat. She was about to eat him when he begged for his life, 'Please let me go, Miss. I have small brothers and sisters to look after.' The bat claimed, 'You are a _______, and I love to devour mice.'",
        options: ["cat", "dog", "mouse"],
        correctAnswer: "mouse",
      },
      {
        question:
          "The bat spread his wings and claimed, 'Look, I am no ________. I don't like mice. I am a bird. I can fly.'",
        options: ["bird", "mouse", "cat"],
        correctAnswer: "mouse",
      },
      {
        question:
          "The cat let the bat go when she saw his wings, as she didn't like ________.",
        options: ["mice", "bats", "birds"],
        correctAnswer: "birds",
      },
      {
        question:
          "The bat took a sigh of relief and flew away but landed into the hands of a ________.",
        options: ["snake", "rabbit", "weasel"],
        correctAnswer: "weasel",
      },
      {
        question:
          "The weasel caught the bat and said, 'How good the day is! I love to eat birds and one came flying right in my ________.'",
        options: ["hands", "cage", "nest"],
        correctAnswer: "hands",
      },
      {
        question:
          "The bat claimed, 'But I am not a bird, I don't have ________. I am a mouse. Look closely, Mr. Weasel.'",
        options: ["feathers", "fur", "scales"],
        correctAnswer: "feathers",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Kashmir became part of India in 1947.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Pakistan sent its soldiers dressed as tribal people to occupy Kashmir.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Major Somnath Sharma had a broken leg during the battle.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Major Somnath Sharma and his soldiers were stationed in a forest during the battle.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The Indian Army was present in Kashmir at the time of the attack.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The disguised Pakistani soldiers wore long loose coats called 'firan' to hide their identity.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Indian soldiers faced more than 200 attackers during the battle.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Major Somnath Sharma was awarded the Bharat Ratna for his bravery.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "Major Somnath Sharma died due to an injury caused by enemy gunfire.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The battle for Badgam was won by the Pakistani soldiers.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
