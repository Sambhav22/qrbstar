export const chapter = "Chapter - 23: Letters and Applications";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What does Ayush suggest for maintaining physical fitness?",
          optionA:
            "a) Eating fast food, avoiding exercise, and staying up late.",
          optionB:
            "b) Balanced diet, regular physical exercise, and sound sleep.",
          optionC:
            "c) Ignoring mental health, overworking, and irregular sleeping patterns.",
          correctAnswer:
            "b) Balanced diet, regular physical exercise, and sound sleep.",
        },
        {
          question:
            "According to Vaibhav, what is the benefit of reading books beyond textbooks?",
          optionA: "a) Entertainment and time-pass.",
          optionB: "b) Expanding knowledge and inculcating good qualities.",
          optionC: "c) Wasting time and avoiding studies.",
          correctAnswer:
            "b) Expanding knowledge and inculcating good qualities.",
        },
        {
          question:
            "What is Gauri's suggestion to tackle the issue of ticketless traveling?",
          optionA: "a) Increase passenger fares.",
          optionB: "b) Implement frequent ticket checking drives.",
          optionC: "c) Allow ticketless traveling for students.",
          correctAnswer: "b) Implement frequent ticket checking drives.",
        },
        {
          question:
            "When does Param plan to arrive in Nainital, and for how many days does he want accommodation?",
          optionA: "a) Arriving on 15 April, staying for 2 days.",
          optionB: "b) Arriving on 18 April, staying for 3 days.",
          optionC: "c) Arriving on 15 April, staying for 3 days.",
          correctAnswer: "c) Arriving on 15 April, staying for 3 days.",
        },
        {
          question: "What is the reason for Kashish's leave request?",
          optionA: "a) Attending a family function.",
          optionB:
            "b) Suffering from bronchitis and doctor's advice for two days' bed rest.",
          optionC: "c) Going on a vacation.",
          correctAnswer:
            "b) Suffering from bronchitis and doctor's advice for two days' bed rest.",
        },
        {
          question: "Why does Krish request the cricket kit?",
          optionA: "a) Just for casual playing.",
          optionB:
            "b) The college cricket team is about to play in the Inter-School Cricket Championship.",
          optionC: "c) To use it for non-cricket-related activities.",
          correctAnswer:
            "b) The college cricket team is about to play in the Inter-School Cricket Championship.",
        },
        {
          question:
            "What is the reason for Kartik's request for a duplicate identity card?",
          optionA: "a) To have a spare card.",
          optionB: "b) Lost the original identity card.",
          optionC: "c) Wants a new design for the card.",
          correctAnswer: "b) Lost the original identity card.",
        },
        {
          question: "What is the main issue mentioned in Jasmine's letter?",
          optionA: "a) Lack of streetlights.",
          optionB: "b) Potholes on the road.",
          optionC:
            "c) Lack of cleanliness with garbage piles and blocked drains.",
          correctAnswer:
            "c) Lack of cleanliness with garbage piles and blocked drains.",
        },
        {
          question: "Why is Teena writing the application?",
          optionA: "a) Applying for a passport.",
          optionB: "b) Requesting a library card.",
          optionC:
            "c) Requesting an electoral identity card for her sister who turned 18.",
          correctAnswer:
            "c) Requesting an electoral identity card for her sister who turned 18.",
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
            "I have just now received your sweet letter. I am happy to learn that you have recovered from your prolonged illness. I wish you ___________ for all times to come.",
          options: [
            "a) good health",
            "b) a speedy recovery",
            "c) a happy life",
          ],
          correctAnswer: "a) good health",
        },
        {
          question:
            "I have seen your performance in the unit tests, and I am not at all satisfied with it. You can do better. In examinations, there is every likelihood that there will be questions which cannot be answered from only textbooks. You need some additional knowledge for answering them; and here the habit of ___________ comes handy.",
          options: ["a) socializing", "b) reading", "c) gaming"],
          correctAnswer: "b) reading",
        },
        {
          question:
            "Ticketless travelling in the public transport system, especially the local buses, is alarmingly on the rise. No doubt steep rise in the passenger's fare is one of the causes. But this cannot justify ticketless travelling. On one hand, the ticketless travellers deprive the transport department of the rightful dues; and on the other, they cause much trouble to the genuine passengers. When exposed, they fight back in favour of ticketless travelling. A good number of the ticketless travellers are either students or daily commuters who travel in groups so as to face any checking drive. They often crowd at gates leading to blocking the passage. They are a ___________ to common honest travellers.",
          options: ["a) benefit", "b) danger", "c) nuisance"],
          correctAnswer: "c) nuisance",
        },
        {
          question:
            "We six people have planned to visit Nainital and stay there for three days. You are requested to book accommodation for us, which can be one big room or dormitory for all of us, or in the alternative, you can book three rooms. All of us are ___________ students.",
          options: ["a) female", "b) male", "c) senior"],
          correctAnswer: "b) male",
        },
        {
          question:
            "I beg to state that I have been suffering from bronchitis for several days, and the doctor has advised complete bed rest for two days; so I am unable to attend school. I request you to grant me two days' leave from ___________ to ___________.",
          options: [
            "a) 24th February, 25th February",
            "b) 23rd February, 24th February",
            "c) 25th February, 26th February",
          ],
          correctAnswer: "a) 24th February, 25th February",
        },
        {
          question:
            "I beg to bring it to your kind notice that our college cricket team is known for its capability. All our players do their best. As our team is about to play in the Inter-School Cricket Championship, it requires cricket kit for ___________.",
          options: ["a) training", "b) practice", "c) decoration"],
          correctAnswer: "b) practice",
        },
        {
          question:
            "Respectfully, I beg to inform that I have lost my school identity card somewhere while walking back home after school. I, therefore, request you to issue me a ___________ one.",
          options: ["a) new", "b) duplicate", "c) replacement"],
          correctAnswer: "b) duplicate",
        },
        {
          question:
            "I beg to bring it to your notice that the work of cleanliness is not being undertaken in the area near our colony, resulting in piles of garbage and blocked drains at several places. These have become breeding grounds for flies and mosquitoes. Outbreak of infectious diseases has become quite common in this area. Therefore, it is requested that proper cleanliness drive should be undertaken, and the people responsible for it should be taken to ___________.",
          options: ["a) court", "b) task", "c) hospital"],
          correctAnswer: "b) task",
        },
        {
          question:
            "I beg to bring it to your notice that my elder sister, Anjali Malhotra has come of age; she has attained the age of 18 years on 11 January this year. As the Constitution of India gives her the right to vote, it is requested that an electoral identity card may be made for her. We enclose herewith two ___________ and a photocopy of our ration card.",
          options: ["a) signatures", "b) photographs", "c) letters"],
          correctAnswer: "b) photographs",
        },
      ],
  };
}

if (localStorage.getItem("activityNumber") == 3)
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question:
            "Ayush Khurana suggests that physical fitness can be maintained through a balanced diet, regular physical exercise, and sound sleep.",
          options: [
            "Balanced diet, regular exercise, and sound sleep contribute to physical fitness.",
            "Balanced diet alone ensures physical fitness.",
          ],
          correctAnswer:
            "Balanced diet, regular exercise, and sound sleep contribute to physical fitness.",
        },
        {
          question:
            "Vaibhav Mehra advises Vibhu to spend regular time reading books beyond textbooks to improve his performance.",
          options: [
            "Reading books beyond textbooks is unnecessary for academic performance.",
            "Reading books beyond textbooks can help improve performance.",
          ],
          correctAnswer:
            "Reading books beyond textbooks can help improve performance.",
        },
        {
          question:
            "Gauri Mittal suggests that the rise in passenger fares justifies ticketless traveling in local buses.",
          options: [
            "The rise in passenger fares justifies ticketless traveling.",
            "The rise in passenger fares does not justify ticketless traveling.",
          ],
          correctAnswer:
            "The rise in passenger fares does not justify ticketless traveling.",
        },
        {
          question:
            "Param Singh plans to visit Nainital for three days with a six-person party, including male students.",
          options: [
            "Param plans to visit Nainital alone.",
            "Param plans to visit Nainital with a six-person party, including male students.",
          ],
          correctAnswer:
            "Param plans to visit Nainital with a six-person party, including male students.",
        },
        {
          question:
            "Kashish Arora requests a leave of absence due to bronchitis, and the doctor advised two days of bed rest.",
          options: [
            "Kashish requests leave for a family vacation.",
            "Kashish requests leave due to bronchitis and the doctor's advice for two days of bed rest.",
          ],
          correctAnswer:
            "Kashish requests leave due to bronchitis and the doctor's advice for two days of bed rest.",
        },
        {
          question:
            "Krish Sethi requests a cricket kit for casual playing, not for the upcoming Inter-School Cricket Championship.",
          options: [
            "Krish requests the cricket kit for casual playing.",
            "Krish requests the cricket kit for the Inter-School Cricket Championship.",
          ],
          correctAnswer:
            "Krish requests the cricket kit for the Inter-School Cricket Championship.",
        },
        {
          question:
            "Kartik Verma lost his school identity card and wants a new design rather than a duplicate card.",
          options: [
            "Kartik lost his school identity card and wants a new design.",
            "Kartik lost his school identity card and wants a duplicate card.",
          ],
          correctAnswer:
            "Kartik lost his school identity card and wants a duplicate card.",
        },
        {
          question:
            "Jasmine Kaur highlights the lack of streetlights in the area near her colony.",
          options: [
            "Jasmine highlights the abundance of streetlights.",
            "Jasmine highlights the lack of streetlights.",
          ],
          correctAnswer: "Jasmine highlights the lack of streetlights.",
        },
        {
          question:
            "Teena Malhotra requests an electoral identity card for her sister who has turned 18.",
          options: [
            "Teena requests a library card for her sister.",
            "Teena requests an electoral identity card for her sister who has turned 18.",
          ],
          correctAnswer:
            "Teena requests an electoral identity card for her sister who has turned 18.",
        },
        {
          question:
            "Both stories, 'A Proud Cock' and 'Look Before You Leap,' emphasize the consequences of being too cautious and not heeding warnings.",
          options: [
            "The stories emphasize the benefits of being impulsive.",
            "The stories emphasize the consequences of being too cautious and not heeding warnings.",
          ],
          correctAnswer:
            "The stories emphasize the consequences of being too cautious and not heeding warnings.",
        },
      ],
  };

export var activityData;
