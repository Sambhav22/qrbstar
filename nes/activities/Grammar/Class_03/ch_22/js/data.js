export const chapter = "Chapter - 22: Essay Writing";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is the main topic of the first passage?",
          optionA: "A description of the author's friends",
          optionB: "Anjali, the author's best friend",
          optionC: "The author's school and class",
          correctAnswer: "Anjali, the author's best friend",
        },
        {
          question:
            "What qualities does Anjali possess according to the passage?",
          optionA: "Untidy appearance and poor grooming",
          optionB: "Punctuality, cleanliness, and helpfulness",
          optionC: "Laziness and lack of interest in studies",
          correctAnswer: "Punctuality, cleanliness, and helpfulness",
        },
        {
          question: "What games is Anjali good at playing?",
          optionA: "Soccer and basketball",
          optionB: "Badminton and chess",
          optionC: "Cricket and tennis",
          correctAnswer: "Badminton and chess",
        },
        {
          question: "What does Anjali watch on television daily?",
          optionA: "News and documentaries",
          optionB: "Cartoon Network and Discovery channel",
          optionC: "Sports and movies",
          correctAnswer: "Cartoon Network and Discovery channel",
        },
        {
          question: "What activity does Anjali engage in for one hour daily?",
          optionA: "Reading books",
          optionB: "Cooking",
          optionC: "Watching television",
          correctAnswer: "Watching television",
        },
        {
          question: "In the biography of a horse, what is the horse's color?",
          optionA: "White",
          optionB: "Brown",
          optionC: "Black",
          correctAnswer: "Black",
        },
        {
          question: "What does the horse eat?",
          optionA: "Meat and vegetables",
          optionB: "Grass and gram",
          optionC: "Fruits and nuts",
          correctAnswer: "Grass and gram",
        },
        {
          question: "What does Diwali celebrate according to the passage?",
          optionA: "New Year's Eve",
          optionB: "Lord Rama's return from exile",
          optionC: "Victory in a war",
          correctAnswer: "Lord Rama's return from exile",
        },
        {
          question: "What do people do on Diwali?",
          optionA: "Wear old clothes and stay indoors",
          optionB:
            "Worship Lord Ganesha and Goddess Lakshmi, exchange gifts, and light lamps",
          optionC: "Go on vacations and travel",
          correctAnswer:
            "Worship Lord Ganesha and Goddess Lakshmi, exchange gifts, and light lamps",
        },
        {
          question:
            "What is the downside mentioned about Diwali in the passage?",
          optionA: "Lack of celebrations",
          optionB: "Excessive pollution due to bursting crackers",
          optionC: "Boredom and dull atmosphere",
          correctAnswer: "Excessive pollution due to bursting crackers",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
        {
          question: "Anjali is admired for her ____________.",
          options: [
            "Cooking skills",
            "Good qualities",
            "Athletic achievements",
          ],
          correctAnswer: "Good qualities",
        },
        {
          question: "Anjali plays which two games well?",
          options: [
            "Cricket and basketball",
            "Badminton and chess",
            "Soccer and tennis",
          ],
          correctAnswer: "Badminton and chess",
        },
        {
          question:
            "Anjali watches the __________ and Discovery channel for one hour daily.",
          options: ["News", "Cartoon Network", "Sports"],
          correctAnswer: "Cartoon Network",
        },
        {
          question:
            "Anjali helps her friends and also assists her mother in __________ work.",
          options: ["Gardening", "Homework", "Household"],
          correctAnswer: "Household",
        },
        {
          question:
            "People celebrate Diwali to mark the return of __________ after fourteen years.",
          options: ["Lord Krishna", "Lord Rama", "Lord Shiva"],
          correctAnswer: "Lord Rama",
        },
        {
          question: "Diwali is also known as __________.",
          options: ["Holi", "Navratri", "Deepawali"],
          correctAnswer: "Deepawali",
        },
        {
          question:
            "Diwali is celebrated in the month of __________ or November.",
          options: ["September", "October", "December"],
          correctAnswer: "October",
        },
        {
          question: "Diwali marks the victory of __________ over evil.",
          options: ["Light", "Good", "God"],
          correctAnswer: "Good",
        },
        {
          question:
            "During Diwali, all buildings are lighted with earthen lamps and colourful electric __________.",
          options: ["Fans", "Bulbs", "Candles"],
          correctAnswer: "Bulbs",
        },
        {
          question: "Bursting crackers during Diwali causes __________.",
          options: ["Happiness", "Pollution", "Celebration"],
          correctAnswer: "Pollution",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "Anjali is the author's best friend.",
          options: ["True", "False"],
          correctAnswer: "True",
        },
        {
          question: "Anjali is not punctual in doing her work.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Anjali is a good player of soccer and tennis.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Anjali watches news on television for one hour daily.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question:
            "Diwali is celebrated to mark the return of Lord Shiva from exile.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Diwali is also known as Holi.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Diwali is celebrated in the month of December.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Diwali marks the victory of Light over evil.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "During Diwali, buildings are lighted with candles.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: "Bursting crackers during Diwali causes celebration.",
          options: ["True", "False"],
          correctAnswer: "False",
        },
      ],
  };
}

export var activityData;
