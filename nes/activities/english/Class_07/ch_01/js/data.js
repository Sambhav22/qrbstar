export const chapter = "Chapter -6: Coming of the King";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What prompted the children to clean and beautify their playground?",
          optionA: "A passing herald",
          optionB: "The announcement of the King's arrival",
          optionC: "A kind, tired-faced man",
          correctAnswer: "The announcement of the King's arrival",
        },
        {
          question:
            "How did the children make their playground pretty for the King?",
          optionA: "Sweeping and mopping",
          optionB: "Strewing sweet rushes and creating garlands",
          optionC: "Painting the walls with vibrant colors",
          correctAnswer: "Strewing sweet rushes and creating garlands",
        },
        {
          question:
            "Why did the children decide to keep the playground pretty even after the King did not come?",
          optionA: "They wanted to impress other visitors.",
          optionB:
            "They realized pretty and clean is nicer than ugly and dirty.",
          optionC: "They hoped the King might still come later.",
          correctAnswer:
            "They realized pretty and clean is nicer than ugly and dirty.",
        },
        {
          question:
            "Who eventually visited the playground after the children had beautified it?",
          optionA: "The King",
          optionB: "A herald",
          optionC: "A tired man with a kind face",
          correctAnswer: "A tired man with a kind face",
        },
        {
          question:
            "How did the children welcome the man who visited their playground?",
          optionA: "They ignored him.",
          optionB: "They asked him to leave.",
          optionC: "They brought him in gladly and offered him a seat.",
          correctAnswer: "They brought him in gladly and offered him a seat.",
        },
        {
          question:
            "What did the children use to create a makeshift throne for the man who visited them?",
          optionA: "An old cask covered with a red cloak",
          optionB: "A wooden chair",
          optionC: "A pile of hay",
          correctAnswer: "An old cask covered with a red cloak",
        },
        {
          question: "Why did the man appreciate the children's playground?",
          optionA: "Because it was meant for the King",
          optionB: "Because it was clean and pretty",
          optionC: "Because it had many play structures",
          correctAnswer: "Because it was clean and pretty",
        },
        {
          question: "What did the man do before leaving the playground?",
          optionA: "Gave the children a lecture on cleanliness",
          optionB: "Laid his hand on their heads",
          optionC: "Bought something from them",
          correctAnswer: "Laid his hand on their heads",
        },
        {
          question:
            "What did the littlest child think the man's hair looked like?",
          optionA: "A crown of gold",
          optionB: "A messy tangle",
          optionC: "A bird's nest",
          correctAnswer: "A crown of gold",
        },
        {
          question: "How did the children feel about the man who visited them?",
          optionA: "They were frightened.",
          optionB: "They thought he was unfriendly.",
          optionC: "They found him kind, and his touch warmed their hearts.",
          correctAnswer:
            "They found him kind, and his touch warmed their hearts.",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question:
            "Some children were at play in their playground one day when a __________ rode through the town, blowing a trumpet and crying aloud, 'The King! The King passes by this road today. Make ready for the King!'",
          optionA: "Jester",
          optionB: "Herald",
          optionC: "Knight",
          correctAnswer: "Herald",
        },
        {
          question:
            "The children stopped their play and looked at one another, realizing that the __________ is coming.",
          optionA: "Queen",
          optionB: "King",
          optionC: "Prince",
          correctAnswer: "King",
        },
        {
          question:
            "The playground was sadly dirty, and in the corners were scraps of paper and broken toys, for these were __________ children.",
          optionA: "Careful",
          optionB: "Negligent",
          optionC: "Playful",
          correctAnswer: "Negligent",
        },
        {
          question:
            "The children labored hard, bringing a hoe, a rake, and a wheelbarrow to make the playground __________.",
          optionA: "Untidy",
          optionB: "Dirty",
          optionC: "Clean and tidy",
          correctAnswer: "Clean and tidy",
        },
        {
          question:
            "To make the playground pretty, the children brought sweet rushes and strewed them on the ground, and others made garlands of oak leaves and pine tassels and hung them on the __________.",
          optionA: "Ceilings",
          optionB: "Walls",
          optionC: "Ground",
          correctAnswer: "Walls",
        },
        {
          question:
            "The littlest one pulled marigold buds and threw them all about the playground 'to look like __________,' he said.",
          optionA: "Diamonds",
          optionB: "Gold",
          optionC: "Silver",
          correctAnswer: "Gold",
        },
        {
          question:
            "The man with travel-worn clothes and a kind, tired face passed along the road towards __________.",
          optionA: "Sunrise",
          optionB: "Sunset",
          optionC: "Noon",
          correctAnswer: "Sunset",
        },
        {
          question:
            "The children covered the seat made out of an old cask with an old red cloak to make it look like a __________.",
          optionA: "Throne",
          optionB: "Bed",
          optionC: "Chair",
          correctAnswer: "Throne",
        },
        {
          question:
            "The man appreciated the children's efforts, stating, 'Because we think pretty and clean is nicer than ugly and dirty!' said another. 'That is __________!' said the man.",
          optionA: "Great",
          optionB: "Better",
          optionC: "Best",
          correctAnswer: "Better",
        },
        {
          question:
            "The littlest one remarked, 'See! How the sun shines on his hair! It looks like a __________.'",
          optionA: "Crown of thorns",
          optionB: "Crown of jewels",
          optionC: "Crown of gold",
          correctAnswer: "Crown of gold",
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
            "The herald rode through the town, announcing the arrival of the King.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The children decided to clean and beautify their playground because they heard about the King's visit.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The playground was clean but not pretty after the children's efforts.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The man who visited the playground was wearing new clothes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The children offered the man a seat covered with an old red cloak to make it look like a throne.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The man appreciated the children's efforts to make the playground pretty and clean.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The man asked the children for money before leaving the playground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The sun was rising when the man passed by the playground.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The littlest child thought the man's hair looked like a crown of thorns.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The children decided to keep the playground beautiful even after the King didn't come.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
   ],
  };
}

export var activityData;
