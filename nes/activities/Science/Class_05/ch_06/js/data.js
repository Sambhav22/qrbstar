export const chapter = "Chapter - 6: Diseases ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What is a disease?",
          optionA: "A state of mental discomfort",
          optionB: "A disturbance in the normal functioning of the body",
          optionC: "Lack of exercise and rest",
          correctAnswer: "A disturbance in the normal functioning of the body",
        },
        {
          question: "What are communicable diseases?",
          optionA: "Diseases caused by lack of nutrients",
          optionB: "Diseases that cannot spread from one person to another",
          optionC: "Diseases that can spread from one person to another",
          correctAnswer: "Diseases that can spread from one person to another",
        },
        {
          question: "How do germs of communicable diseases spread through air?",
          optionA: "Through direct contact",
          optionB: "When a person coughs, sneezes, or spits",
          optionC: "Through insects",
          correctAnswer: "When a person coughs, sneezes, or spits",
        },
        {
          question:
            "Which diseases spread through contaminated food and water?",
          optionA: "Allergies",
          optionB: "Heart diseases",
          optionC: "Cholera and typhoid",
          correctAnswer: "Cholera and typhoid",
        },
        {
          question:
            "How can communicable diseases be prevented by vaccination?",
          optionA: "By isolating the infected person",
          optionB: "By keeping the surroundings clean",
          optionC: "By using special substances called vaccines",
          correctAnswer: "By using special substances called vaccines",
        },
        {
          question: "What is the main cause of deficiency diseases?",
          optionA: "Lack of exercise",
          optionB: "Lack of nutrients in food",
          optionC: "Poor hygiene",
          correctAnswer: "Lack of nutrients in food",
        },
        {
          question: "Which of the following is a non-communicable disease?",
          optionA: "Hepatitis",
          optionB: "Chickenpox",
          optionC: "Obesity",
          correctAnswer: "Obesity",
        },
        {
          question: "What is allergy?",
          optionA: "A state of mental discomfort",
          optionB: "A condition caused by lack of nutrients",
          optionC:
            "A condition that makes people sick after exposure to harmless substances",
          correctAnswer:
            "A condition that makes people sick after exposure to harmless substances",
        },
        {
          question:
            "How can non-communicable diseases be prevented and treated?",
          optionA: "Isolating the infected person",
          optionB: "Eating a balanced diet and exercising regularly",
          optionC: "Through vaccination",
          correctAnswer: "Eating a balanced diet and exercising regularly",
        },
        {
          question: "What is the main cause of obesity?",
          optionA: "Lack of nutrients",
          optionB: "Excessive accumulation of fat in the body",
          optionC: "Lack of exercise",
          correctAnswer: "Excessive accumulation of fat in the body",
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
            "Sometimes we do not feel comfortable in doing anything. Our body or the mind becomes inactive. We feel sad, depressed, and become irritated. These are the symptoms that show that some kind of ______________ has attacked us.",
          options: ["Happiness", "Stress", "Disease"],
          correctAnswer: "Disease",
        },
        {
          question:
            "A disease is a state in which the normal functioning of the body gets disturbed. Disease can be caused due to improper diet, lack of exercise and rest, and poor ______________.",
          options: ["Sleep", "Hygiene", "Entertainment"],
          correctAnswer: "Hygiene",
        },
        {
          question:
            "Diseases that can spread from one person to another are called ______________ diseases. Such diseases are caused by germs, which can be bacteria, viruses, fungi, or protozoa.",
          options: ["Infectious", "Non-infectious", "Chronic"],
          correctAnswer: "Infectious",
        },
        {
          question:
            "The germs of communicable diseases can spread through the following four main modes: Through infected food and water, through air, through direct contact, and through ______________.",
          options: ["Soil", "Insects", "Plants"],
          correctAnswer: "Insects",
        },
        {
          question:
            "Mosquitoes and some other insects can transmit germs through their bite. When a mosquito bites a person having malaria, it sucks the germs along with the blood. Another disease spread by mosquitoes is ______________.",
          options: ["Influenza", "Dengue", "Tuberculosis"],
          correctAnswer: "Dengue",
        },
        {
          question:
            "Communicable diseases can be prevented through steps such as isolating the infected person, keeping the surroundings clean, and ______________.",
          options: ["Wearing masks", "Vaccination", "Avoiding sunlight"],
          correctAnswer: "Vaccination",
        },
        {
          question:
            "Diseases that cannot be passed from one person to another are called non-communicable or non-infectious diseases. Some non-communicable diseases that are not deficiency diseases are allergies, obesity, heart diseases, and ______________.",
          options: ["Respiratory disorders", "Diabetes", "Infectious diseases"],
          correctAnswer: "Diabetes",
        },
        {
          question:
            "Allergy is a condition that makes people sick after eating, touching, or breathing something that is harmless to most people. Some people are allergic to dust, pollen from flowers, or certain ______________.",
          options: ["Animals", "Metals", "Food items"],
          correctAnswer: "Food items",
        },
        {
          question:
            "To prevent and treat non-communicable diseases, we must eat a balanced diet, exercise regularly, and take steps to prevent and cure ______________ diseases.",
          options: ["Infectious", "Degenerative", "Genetic"],
          correctAnswer: "Degenerative",
        },
        {
          question: "What is the main cause of obesity?",
          options: [
            "Lack of nutrients",
            "Excessive accumulation of fat in the body",
            "Lack of exercise",
          ],
          correctAnswer: "Excessive accumulation of fat in the body",
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
            "Vaccination uses special substances called vaccines that prevent specific diseases.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Non-communicable diseases can be passed from one person to another.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Allergies make people sick after exposure to harmful substances that affect most individuals positively.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Communicable diseases are primarily caused by germs such as bacteria, viruses, fungi, or protozoa.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Obesity is a condition caused by a deficiency of nutrients in the body.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Bedouins, the traditional nomadic people of Saudi Arabia, mainly inhabit coastal areas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Saudi Arabia is characterized by a climate with low temperatures and high precipitation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Direct contact is one of the modes through which germs of communicable diseases can spread.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The main industry contributing to Saudi Arabia's economic production is tourism.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Deficiency diseases are caused by a lack of nutrients in the body and can be cured by providing the deficient nutrient.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
