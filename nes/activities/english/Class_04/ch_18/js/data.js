export const chapter = "Chapter - 18:The Grand Chapatti Contest";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        questions: [
          {
            question: "What was the one thing that made the king angry?",
            options: [
              "A. When the queen used his silver hairbrush on the royal dog.",
              "B. When the servants forgot to line his shoes with feathers.",
              "C. When he wasn't served perfectly round chapattis.",
            ],
            answer: "C",
          },
          {
            question:
              "Why did the queen decide to hold a Grand Chapatti Contest?",
            options: [
              "A. To find a new king.",
              "B. To find a new queen.",
              "C. To find a new chief chapatti cook.",
            ],
            answer: "C",
          },
          {
            question: "What did the king love to eat for every meal?",
            options: [
              "A. Buttered chapattis.",
              "B. Chapattis with raisins.",
              "C. Perfectly round, soft, fluffy-puffy chapattis.",
            ],
            answer: "C",
          },
          {
            question: "What was Meena's family's main food?",
            options: [
              "A. Buttered chapattis.",
              "B. Plain chapattis with boiled peanuts.",
              "C. Spinach-flavored chapattis.",
            ],
            answer: "B",
          },
          {
            question:
              "What type of chapattis were the other cooks making for the contest?",
            options: [
              "A. Round chapattis.",
              "B. Square chapattis.",
              "C. A variety of unique and exotic chapattis.",
            ],
            answer: "C",
          },
          {
            question:
              "Why did the king refuse to taste some of the chapattis brought to him?",
            options: [
              "A. They were too spicy.",
              "B. They were not perfectly round.",
              "C. They were too cold and hard.",
            ],
            answer: "B",
          },
          {
            question:
              "What happened to the chapatti filled with nuts when the king tasted it?",
            options: [
              "A. It floated away.",
              "B. It turned into a butterfly.",
              "C. It remained perfectly intact.",
            ],
            answer: "C",
          },
          {
            question:
              "How did Meena's mother ensure that her chapattis stayed hot and soft for the king?",
            options: [
              "A. She used a special pump.",
              "B. She made them on a little clay stove.",
              "C. She served them on a silver plate.",
            ],
            answer: "B",
          },
          {
            question:
              "How many chapattis did the king eat, made by Meena's mother?",
            options: ["A. Five", "B. Ten", "C. Fifteen"],
            answer: "C",
          },
          {
            question:
              "What was the reward for winning the Grand Chapatti Contest?",
            options: [
              "A. A bag of gold coins and a job as the chief chapatti cook.",
              "B. A bag of peanuts and a royal title.",
              "C. A bag of silver coins and a holiday in the Himalayas.",
            ],
            answer: "A",
          },
        ],
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
          "There once ruled a king who hardly ever got angry. He did not get angry when the queen polished his golden crown with black polish or when she used his silver hairbrush to brush the royal ____________.",
        options: ["dog", "cat", "parrot"],
        correctAnswer: "dog",
      },
      {
        question:
          "There was only one thing that made the king angry. And that was when he was not served perfectly round, soft, ____________ chapattis for his meals.",
        options: ["crispy", "fluffy-puffy", "hard"],
        correctAnswer: "fluffy-puffy",
      },
      {
        question:
          "When the royal kitchen's chief chapatti cook left his job and went away to become a holy man, the queen decided to hold a Grand Chapatti Contest. She invited everyone in the kingdom to take part and announced that the winner would be given a bag of ____________ as a prize.",
        options: ["peanuts", "gold coins", "diamonds"],
        correctAnswer: "gold coins",
      },
      {
        question:
          "The king refused to taste the ____________ chapatti when it was brought to him, saying, 'I like only round chapattis!'",
        options: ["square", "butterfly-shaped", "colorful"],
        correctAnswer: "butterfly-shaped",
      },
      {
        question:
          "The cook who had made a chapatti so soft and fine that one could actually look through it carried it carefully to the king. As it neared the table, a petal from one of the flowers in the garden fell on the soft, fine chapatti and it ____________ into half.",
        options: ["floated", "tore", "expanded"],
        correctAnswer: "tore",
      },
      {
        question: "'I can't eat torn ____________,' said the king.",
        options: ["cake", "chapattis", "cookies"],
        correctAnswer: "chapattis",
      },
      {
        question:
          "How many chapattis did the king eat, made by Meena's mother?",
        options: ["Five", "Ten", "Fifteen"],
        correctAnswer: "Fifteen",
      },
      {
        question: "What was the reward for winning the Grand Chapatti Contest?",
        options: [
          "A bag of gold coins and a job as the chief chapatti cook.",
          "A bag of peanuts and a royal title.",
          "A bag of silver coins and a holiday in the Himalayas.",
        ],
        correctAnswer:
          "A bag of gold coins and a job as the chief chapatti cook.",
      },
      {
        question:
          "Meena's family could only afford to eat plain chapattis with ____________ or plain chapattis with peanut chutney, or sometimes just plain chapattis with a slice of raw onion.",
        options: ["raisins", "butter", "ketchup"],
        correctAnswer: "butter",
      },
      {
        question:
          "How did Meena's mother ensure that her chapattis stayed hot and soft for the king? She made them on a little clay stove kept on a ____________.",
        options: ["silver plate", "moonstone rolling board", "pushcart"],
        correctAnswer: "pushcart",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question:
          "The king got angry when the queen polished his golden crown with black polish.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The king wanted perfectly round, soft, fluffy-puffy chapattis for every meal.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Meena's family was able to afford a variety of luxurious foods.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question:
          "The king ate chapattis made by Meena's mother even when they were not perfectly round.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Grand Chapatti Contest involved preparing a variety of unique and exotic chapattis.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "The king enjoyed eating butterfly-shaped chapattis.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "The king ate fifteen chapattis made by Meena's mother.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The reward for winning the Grand Chapatti Contest was a holiday in the Himalayas.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Meena's family usually ate chapattis with peanut chutney.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question: "Meena's mother made chapattis on a silver plate.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
    ],
  };
}

export var activityData;
