export const chapter = "Chapter -15: Games and Development";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What is mentioned as the first thing a baby does after learning to move hands and feet?",
          optionA: "a) Talk",
          optionB: "b) Sleep",
          optionC: "c) Play",
          correctAnswer: "c) Play",
        },
        {
          question:
            "According to the text, what are the three things a growing baby likes to do?",
          optionA: "a) Read, eat, and sleep",
          optionB: "b) Suck milk, sleep, and play",
          optionC: "c) Cry, crawl, and eat",
          correctAnswer: "b) Suck milk, sleep, and play",
        },
        {
          question:
            "What qualities does playing cultivate in a child, according to the text?",
          optionA: "a) Cooking skills, creativity, and patience",
          optionB: "b) Tolerance, teamwork, honesty, and fair play",
          optionC: "c) Singing ability, mathematical skills, and leadership",
          correctAnswer: "b) Tolerance, teamwork, honesty, and fair play",
        },
        {
          question:
            "How does playing contribute to a person's physical development?",
          optionA: "a) By making them taller",
          optionB:
            "b) By building muscles and bones, increasing strength, agility, and flexibility",
          optionC: "c) By improving eyesight",
          correctAnswer:
            "b) By building muscles and bones, increasing strength, agility, and flexibility",
        },
        {
          question:
            "According to the text, what is the most vitalizing and exciting activity in human life?",
          optionA: "a) Reading",
          optionB: "b) Playing",
          optionC: "c) Sleeping",
          correctAnswer: "b) Playing",
        },
        {
          question:
            "In the paragraph about ancient Indian sports, who won the hand of Draupadi in a skillful test of archery?",
          optionA: "a) Arjuna",
          optionB: "b) Rama",
          optionC: "c) Krishna",
          correctAnswer: "a) Arjuna",
        },
        {
          question:
            "What happened to sports during the medieval period in India?",
          optionA: "a) Sports flourished",
          optionB: "b) Sports continued as usual",
          optionC: "c) Sports events were disrupted due to Muslim invasions",
          correctAnswer:
            "c) Sports events were disrupted due to Muslim invasions",
        },
        {
          question:
            "What new games were introduced during English rule in India, according to the text?",
          optionA: "a) Badminton, cricket, and hockey",
          optionB: "b) Charioteering, wrestling, and rope-pulling",
          optionC: "c) Archery, fencing, and lance-throwing",
          correctAnswer: "a) Badminton, cricket, and hockey",
        },
        {
          question:
            "After independence, how does India fare in the international sports arena, according to the text?",
          optionA: "a) Dominating all sports",
          optionB: "b) Lagging behind in sports achievements",
          optionC: "c) Performing exceptionally well in the Olympics",
          correctAnswer: "b) Lagging behind in sports achievements",
        },
        {
          question:
            "According to the text, why is it mentioned that India needs to excel in sports for development?",
          optionA: "a) To increase entertainment options",
          optionB: "b) To attract more tourists",
          optionC: "c) Because sports and development are inextricably linked",
          correctAnswer:
            "c) Because sports and development are inextricably linked",
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
            "The first thing a baby does after learning how to move his hands and feet is to __________.",
          optionA: "a) Talk",
          optionB: "b) Sleep",
          optionC: "c) Play",
          correctAnswer: "c) Play",
        },
        {
          question:
            "As a child grows, childhood is the best time to play and learn new games, developing physical and mental qualities such as tolerance, team work, honesty, and fair play. Playing helps a person become mature and competent in __________.",
          optionA: "a) Cooking",
          optionB: "b) Relationships",
          optionC: "c) Life",
          correctAnswer: "c) Life",
        },
        {
          question:
            "In the ancient period, Raja Janak held a competition where the contestants had to lift and shoot from a massive __________.",
          optionA: "a) Mace",
          optionB: "b) Sword",
          optionC: "c) Bow",
          correctAnswer: "c) Bow",
        },
        {
          question:
            "Siddhartha, who later became the Buddha, mastered skills in archery, fencing, charioteering, wrestling, and __________.",
          optionA: "a) Javelin-throwing",
          optionB: "b) Lance-throwing",
          optionC: "c) Shot-put",
          correctAnswer: "b) Lance-throwing",
        },
        {
          question:
            "During the medieval period, sports events were disrupted due to __________.",
          optionA: "a) Peaceful negotiations",
          optionB: "b) Muslim invasions",
          optionC: "c) Lack of interest",
          correctAnswer: "b) Muslim invasions",
        },
        {
          question:
            "After independence, India has not performed well in the international sports arena, indicating a need to excel in sports for __________.",
          optionA: "a) National pride",
          optionB: "b) Economic growth",
          optionC: "c) Development",
          correctAnswer: "c) Development",
        },
        {
          question:
            "India is already doing well in regional international games like SAARC Games, Asian Games, and Commonwealth Games, but lags behind in sports events like the __________ and World Championships.",
          optionA: "a) National Championships",
          optionB: "b) Olympics",
          optionC: "c) Regional Championships",
          correctAnswer: "b) Olympics",
        },
        {
          question:
            "Despite the positive outcome in the number of medals, there is a negative side as many young people aspire to become professionals and play only for __________.",
          optionA: "a) Entertainment",
          optionB: "b) Skill development",
          optionC: "c) Monetary gains",
          correctAnswer: "c) Monetary gains",
        },
        {
          question:
            "To commemorate brave warriors and women, an annual event called __________ is held at the Jauhar site in Chittor Fort.",
          optionA: "a) Victory Parade",
          optionB: "b) Jauhar Mela",
          optionC: "c) Heritage Festival",
          correctAnswer: "b) Jauhar Mela",
        },
        {
          question:
            "The text suggests that India's performance in sports is linked to its __________.",
          optionA: "a) Entertainment industry",
          optionB: "b) Cultural heritage",
          optionC: "c) Overall development",
          correctAnswer: "c) Overall development",
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
            "Playing helps a person become mature and competent in life.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The first Jauhar at Chittor Fort occurred during the early 16th century when Alauddin Khalji attacked the capital of Mewar.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Queen Karnavati, during the second Jauhar, sent a Rakhi to Babur for help against the invasion by Bahadur Shah.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The ruler of Gujarat who attacked Mewar during the second Jauhar was Akbar Shah.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The third Jauhar at Chittor Fort occurred when Akbar, the Mughal ruler, attacked the fort during the reign of King Rana Sanga.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "India is already doing well in sports events like the Olympics and World Championships.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The historical stories at Chittor Fort carve their perennial place in regional history.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The second Jauhar at Chittor Fort took place approximately 200 years later during the reign of Rana Sanga.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The annual event held at the Jauhar site in Chittor Fort to commemorate the brave warriors and women is called Heritage Mela.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Despite the positive outcome in the number of medals, there is a negative side as many young people aspire to become professionals and play only for skill development.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
