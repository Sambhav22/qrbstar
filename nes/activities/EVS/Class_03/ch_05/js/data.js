export const chapter = "Chapter - 5: Differently Abled ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What does Prabhav do when he sees the old woman crossing the road?",
          optionA: "Stands and watches",
          optionB: "Goes near and helps her",
          optionC: "Makes fun of her",
          correctAnswer: "b",
        },
        {
          question: "How does Avi react when Prabhav is helping the old woman?",
          optionA: "Joins Prabhav in helping",
          optionB: "Stands and makes fun of Prabhav",
          optionC: "Ignores the situation",
          correctAnswer: "b",
        },
        {
          question:
            "Why does Prabhav tell Avi not to make fun of the old woman?",
          optionA: "Old people are sensitive",
          optionB: "Old age causes disabilities",
          optionC: "Helping is a good deed",
          correctAnswer: "b",
        },
        {
          question:
            "What can be a reason for disabilities mentioned in the text?",
          optionA: "Eating unhealthy food",
          optionB: "Lack of exercise",
          optionC: "Meeting with an accident",
          correctAnswer: "c",
        },
        {
          question:
            "What system is introduced for blind people to read and write?",
          optionA: "Sign language",
          optionB: "Hearing aids",
          optionC: "Braille system",
          correctAnswer: "c",
        },
        {
          question: "How do deaf people communicate their messages?",
          optionA: "Using Braille",
          optionB: "Lip reading technique",
          optionC: "Sign language",
          correctAnswer: "b",
        },
        {
          question: "How do dumb people communicate their messages?",
          optionA: "Sign language",
          optionB: "Lip reading",
          optionC: "Using vocal cords",
          correctAnswer: "a",
        },
        {
          question:
            "What is the definition of a differently abled person in the text?",
          optionA: "Someone with a different appearance",
          optionB: "Someone with disorders affecting the nervous system",
          optionC: "Someone with temporary disabilities",
          correctAnswer: "b",
        },
        {
          question:
            "What is the suggested way to make differently abled people confident?",
          optionA: "Ignoring their challenges",
          optionB: "Providing special education",
          optionC: "Making them feel optimistic and positive",
          correctAnswer: "c",
        },
        {
          question:
            "How does the text suggest we should treat differently abled people?",
          optionA: "Being kind and polite",
          optionB: "Ignoring their needs",
          optionC: "Making fun of them",
          correctAnswer: "a",
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
            "Prabhav goes near the woman and helps her in ____________ the road.",
          optionA: "crossing",
          optionB: "crossing quickly",
          optionC: "walking on",
          correctAnswer: "a",
        },
        {
          question:
            "Prabhav tells Avi that helping old people is a __________ deed.",
          optionA: "bad",
          optionB: "good",
          optionC: "necessary",
          correctAnswer: "b",
        },
        {
          question:
            "During old age, one may develop certain disabilities like poor _________.",
          optionA: "hearing",
          optionB: "eyesight",
          optionC: "taste",
          correctAnswer: "b",
        },
        {
          question:
            "If a person meets with an accident, he may also lose his sight, permanent harms to legs, or severe damage to the ____________ system.",
          optionA: "digestive",
          optionB: "nervous",
          optionC: "respiratory",
          correctAnswer: "b",
        },
        {
          question:
            "Blind people use the __________ system for reading and writing.",
          optionA: "sign language",
          optionB: "Braille",
          optionC: "hearing aids",
          correctAnswer: "b",
        },
        {
          question:
            "Deaf people use __________ technique to communicate their messages.",
          optionA: "sign language",
          optionB: "lip reading",
          optionC: "vocal cords",
          correctAnswer: "b",
        },
        {
          question:
            "Dumb people use __________ language to communicate their messages.",
          optionA: "sign",
          optionB: "spoken",
          optionC: "written",
          correctAnswer: "a",
        },
        {
          question:
            "A differently abled person is defined as a person who has a disability in terms of disorders that affect the ____________ system.",
          optionA: "respiratory",
          optionB: "nervous",
          optionC: "circulatory",
          correctAnswer: "b",
        },
        {
          question:
            "Mentally Retarded individuals may not be able to communicate their ____________ and are not able to think or understand.",
          optionA: "thoughts",
          optionB: "emotions",
          optionC: "actions",
          correctAnswer: "b",
        },
        {
          question:
            "To make differently abled people stand in the crowd, we should help them and be kind and polite, supporting them in taking care of their ____________.",
          optionA: "belongings",
          optionB: "needs",
          optionC: "challenges",
          correctAnswer: "b",
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
            "Prabhav goes near the woman and helps her in crossing the road.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Avi joins Prabhav in helping the old woman.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Old age can result in certain disabilities like poor eyesight.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Disabilities can only occur due to old age.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Braille system was introduced for people who are deaf.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Deaf people use lip-reading technique to communicate their messages.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Dumb people use vocal cords to communicate their messages.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "A differently abled person is defined as someone with temporary disabilities.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Mentally Retarded individuals can always be treated with various therapies.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "To make differently abled people confident, the text suggests being kind and polite.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
      
    ],
  };
}

export var activityData;
