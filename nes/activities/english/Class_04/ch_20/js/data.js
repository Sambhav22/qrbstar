export const chapter = "Chapter - 20: The Stance";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question: "Who was responsible for buying the parrot in the story?",
          optionA: "Grandfather",
          optionB: "Granny",
          optionC: "Aunt Ruby",
          correctAnswer: "Aunt Ruby",
        },
        {
          question: "What did Aunt Ruby try to teach the parrot to say?",
          optionA: "Religious chants",
          optionB: "Scoldings for the children",
          optionC: "Lovebird's name",
          correctAnswer: "Scoldings for the children",
        },
        {
          question:
            "What did the parrot do when Aunt Ruby attempted to kiss it?",
          optionA: "Accepted the kiss",
          optionB: "Flew away",
          optionC: "Knocked off her spectacles",
          correctAnswer: "Knocked off her spectacles",
        },
        {
          question:
            "How did the parrot react to Aunt Ruby's efforts to show love after the spectacle incident?",
          optionA: "It became friendly",
          optionB: "It ignored her",
          optionC: "It became unfriendly",
          correctAnswer: "It became unfriendly",
        },
        {
          question:
            "Who was responsible for feeding the parrot after Aunt Ruby's attempts failed?",
          optionA: "Grandfather",
          optionB: "Granny",
          optionC: "The narrator (a 10-year-old)",
          correctAnswer: "The narrator (a 10-year-old)",
        },
        {
          question: "How did the parrot manage to escape from the cage?",
          optionA: "The cage was left open by the narrator",
          optionB: "It broke the cage",
          optionC: "Aunt Ruby set it free",
          correctAnswer: "The cage was left open by the narrator",
        },
        {
          question: "What did the narrator give the parrot as a treat?",
          optionA: "Green chillies",
          optionB: "Ripe tomatoes",
          optionC: "Slices of mango",
          correctAnswer: "Slices of mango",
        },
        {
          question:
            "How did Aunt Ruby react when she saw the parrot again after its escape?",
          optionA: "She was happy and wanted it back",
          optionB: "She was indifferent and didn't care",
          optionC: "She was angry and wanted to replace it with a gramophone",
          correctAnswer: "She was happy and wanted it back",
        },
        {
          question:
            "What did the parrot say when it returned and saw Aunt Ruby?",
          optionA: "You're no beauty! Can't talk, can't sing, can't dance!",
          optionB: "I missed you!",
          optionC: "Thank you for the mango",
          correctAnswer:
            "You're no beauty! Can't talk, can't sing, can't dance!",
        },
        {
          question: "What did the parrot learn to say in the end?",
          optionA: "Scolding phrases for children",
          optionB: "Pleasant things",
          optionC: "Hurtful remarks about Aunt Ruby",
          correctAnswer: "Hurtful remarks about Aunt Ruby",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Aunt Ruby would often tease the unfortunate parrot, who couldn't __________, __________, or __________!",
          options: ["talk", "dance", "sing"],
          correctAnswer: "talk, dance, sing",
        },
        {
          question:
            "In the past, it was common for people in North India to keep pet parrots, parakeets, or lovebirds, and some of these birds became great __________.",
          options: ["dancers", "imitators", "swimmers"],
          correctAnswer: "imitators",
        },
        {
          question:
            "The parrot in the story learned to recite mantras and scoldings, such as 'Parho beta, parho,' which means 'Study child, study.' These expressions were picked up after __________.",
          options: [
            "one or two repetitions",
            "many repetitions",
            "a single attempt",
          ],
          correctAnswer: "many repetitions",
        },
        {
          question:
            "Aunt Ruby's parrot, purchased from a bird-catcher, initially __________ to talk.",
          options: ["refused", "enjoyed", "quickly learned"],
          correctAnswer: "refused",
        },
        {
          question:
            "When Aunt Ruby tried to kiss the parrot, the bird would back away, and on one occasion, it knocked her __________ off her nose.",
          options: ["hat", "glasses", "book"],
          correctAnswer: "glasses",
        },
        {
          question:
            "After the incident with the spectacles, Aunt Ruby gave up her efforts to show love to the parrot and started making __________ at the bird.",
          options: ["pleasant faces", "funny sounds", "nasty comments"],
          correctAnswer: "nasty comments",
        },
        {
          question:
            "The responsibility of feeding the parrot fell upon the __________, who also enjoyed some mangoes while feeding the bird.",
          options: ["granny", "grandfather", "narrator (a 10-year-old)"],
          correctAnswer: "narrator (a 10-year-old)",
        },
        {
          question:
            "Aunt Ruby was upset when the parrot escaped, but the narrator and others promised to buy her __________ to divert her attention.",
          options: ["a gramophone", "a new parrot", "a cage"],
          correctAnswer: "a gramophone",
        },
        {
          question:
            "The parrot later returned to the garden and verandah and, upon seeing Aunt Ruby, called out, 'You're no beauty! Can't talk, can't sing, can't __________!'",
          options: ["dance", "fly", "paint"],
          correctAnswer: "dance",
        },
        {
          question:
            "The parrot became a regular visitor to the garden and verandah and would mock Aunt Ruby by repeating, 'You're no beauty! Can't talk, can't sing, can't __________!'",
          options: ["laugh", "dance", "swim"],
          correctAnswer: "dance",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Parrots and lovebirds were commonly kept as pets in North India in the past.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The parrot in the story refused to talk despite Aunt Ruby's efforts.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Aunt Ruby gave up her efforts to show love to the parrot after it knocked off her spectacles.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The responsibility of feeding the parrot fell upon Aunt Ruby.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Aunt Ruby's tantrums were pleasant to watch.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The narrator was responsible for leaving the cage door open, allowing the parrot to escape.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "The parrot enjoyed green chillies and ripe tomatoes as treats.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question:
            "Aunt Ruby was upset when the parrot escaped but was easily distracted with the promise of a new parrot.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "The parrot never learned to talk.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "The parrot became a regular visitor to the garden and verandah, singing praises to Aunt Ruby.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
