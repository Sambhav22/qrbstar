export const chapter = "Chapter - 10: A Child's Biography  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What was Louisa May Alcott's troublesome habit as a child?",
        optionA: "Stealing",
        optionB: "Running away",
        optionC: "Telling lies",
        correctAnswer: "Running away",
      },
      {
        question:
          "Where did Louisa May Alcott go when she ran away on the April morning described in the text?",
        optionA: "To a friend's house",
        optionB: "To the market area",
        optionC: "To the park",
        correctAnswer: "To the market area",
      },
      {
        question:
          "How did Louisa May Alcott end up being tied to a sofa for a whole day?",
        optionA: "She misbehaved at school",
        optionB: "She refused to eat her vegetables",
        optionC: "She had a tendency to run away",
        correctAnswer: "She had a tendency to run away",
      },
      {
        question:
          "What did Louisa Alcott do to occupy herself and prevent running away?",
        optionA: "She played with her dolls",
        optionB: "She wrote stories and rhymes",
        optionC: "She painted pictures",
        correctAnswer: "She wrote stories and rhymes",
      },
      {
        question:
          "What did Louisa's mother advise her to do when she discovered her writings?",
        optionA: "Stop writing immediately",
        optionB: "Share her stories with friends",
        optionC: "Keep on writing",
        correctAnswer: "Keep on writing",
      },
      {
        question: "What did Louisa Alcott do to help during the Civil War?",
        optionA: "She worked as a nurse in a Union hospital",
        optionB: "She wrote letters to soldiers",
        optionC: "She served as a spy",
        correctAnswer: "She worked as a nurse in a Union hospital",
      },
      {
        question:
          "What happened to Louisa Alcott as a result of her work as a nurse during the Civil War?",
        optionA: "She became wealthy",
        optionB: "She contracted a serious illness",
        optionC: "She was promoted to a high rank",
        correctAnswer: "She contracted a serious illness",
      },
      {
        question: "How did Louisa May Alcott's books become popular?",
        optionA: "She advertised them on TV",
        optionB: "She gave them away for free",
        optionC: "They began to sell well",
        correctAnswer: "They began to sell well",
      },
      {
        question:
          "In which countries did Louisa May Alcott find children reading her books?",
        optionA: "England, France, and Germany",
        optionB: "United States, Canada, and Mexico",
        optionC: "Australia, New Zealand, and South Africa",
        correctAnswer: "England, France, and Germany",
      },
      {
        question:
          "What was Louisa May Alcott's reaction when she found out that children were reading her books in other countries?",
        optionA: "She was upset",
        optionB: "She was indifferent",
        optionC: "She was happy",
        correctAnswer: "She was happy",
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
          "As many as (one hundred and) ________ years ago, in the city of Boston, there lived a small girl who had the naughty habit of ________ away.",
        options: ["seventy, running", "fifty, hiding", "twenty, sleeping"],
        correctAnswer: "seventy, running",
      },
      {
        question:
          "Louisa May Alcott slipped out of the house and up the street as fast as her feet could carry her. Louisa crept through a narrow alley and crossed several streets. It was a beautiful day, and she did not care so very much just where she went so long as she was having an adventure, all by ________.",
        options: ["herself", "lonely", "alone"],
        correctAnswer: "herself",
      },
      {
        question:
          "Suddenly she came upon some children who said they were going to a nice, tall ash heap to ________. They asked her to join them.",
        options: ["study", "play", "eat"],
        correctAnswer: "play",
      },
      {
        question:
          "Louisa thought they were fine playmates, for when she grew hungry they shared some cold potatoes and ________ crusts with her. She would not have thought this much of a lunch in her mother's dining-room, but for an outdoor picnic it did very well.",
        options: ["cake", "bread", "fruit"],
        correctAnswer: "bread",
      },
      {
        question:
          "It frightened her when she could not find any street that looked ________. She was hungry and tired, too. She threw herself down on some doorsteps to rest and to watch the lamplighter, for you must remember this was long before there was any gas or electricity in Boston.",
        options: ["unusual", "natural", "colorful"],
        correctAnswer: "natural",
      },
      {
        question:
          "The dog kissed her face and hands and then sat down beside her with a sober look in his eyes, as if he were thinking: 'I guess, Little Girl, you need someone to take care of you!' The poor tired Louisa leaned against his neck and was fast asleep in no time. The dog kept very still. He did not want to ________ her.",
        options: ["scare", "wake", "feed"],
        correctAnswer: "wake",
      },
      {
        question:
          "The town crier went by. He was ringing a bell and reading in a loud voice, from a paper in his hand, the description of a ________ child.",
        options: ["happy", "lost", "found"],
        correctAnswer: "lost",
      },
      {
        question:
          "Louisa's father and mother had missed her early in the forenoon and had looked for her in every place they could think of. Each hour they grew more worried, and at dusk they decided to hire this man to search the city. When the runaway woke up and heard what the man was shouting: Lost Lost- A little girl, six years old, in a pink frock, white hat, and new, green ________.",
        options: ["shoes", "ribbon", "socks"],
        correctAnswer: "shoes",
      },
      {
        question:
          "The dog had taken care of Louisa when she was lost. What had convinced the town crier that he had found the lost child?",
        options: [
          "The dog's description",
          "Louisa's crying",
          "Louisa's answer",
        ],
        correctAnswer: "The dog's description",
      },
      {
        question:
          "Mr. and Mrs. Alcott, from first to last, had had a good many frights about this ________ Louisa.",
        options: ["lively", "obedient", "flyaway"],
        correctAnswer: "flyaway",
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
          "Little Boy Blue and his mother earned their living by gleaning in the fields.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Little Boy Blue's mother fell sick, and he decided to work for the Squire to earn money.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Little Boy Blue's mother's leg was broken in a boat accident.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Little Boy Blue was responsible for keeping the sheep out of the meadows and the cows away from the cornfield.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Squire's daughter, Madge, was angry with Little Boy Blue for falling asleep on the job.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Little Boy Blue's mother encouraged him to leave her alone while she rested during his absence.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Little Boy Blue deliberately allowed the cows and sheep to stray into the fields and meadows.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      },
      {
        question:
          "Little Boy Blue's mother was initially reluctant to let him go work for the Squire.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "The Squire and Madge walked to Little Boy Blue's home to assist his mother. The Squire had a long talk with the poor widow and provided her with money and services until she recovered.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
      {
        question:
          "Little Boy Blue always said his mother's accident had brought him good luck, but it was his own loving heart and devotion to his mother that truly brought him fortune.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
