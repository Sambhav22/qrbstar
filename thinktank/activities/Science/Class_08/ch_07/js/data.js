export const chapter = "Chapter - 7: Reaching the Age of Adolescence";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question: "What does the word 'adolescence' mean?",
          optionA:
            "The period of growth during which a child develops into an adult.",
          optionB: "The onset of puberty.",
          optionC: "The stage of reproductive immaturity.",
          correctAnswer: "A",
        },
        {
          question: "At what age does adolescence typically begin?",
          optionA: "10 to 12 years",
          optionB: "13 to 18 or 19 years",
          optionC: "18 to 21 years",
          correctAnswer: "B",
        },
        {
          question:
            "What is the main difference between puberty and adolescence?",
          optionA:
            "Puberty deals with mental development, while adolescence deals with physical development.",
          optionB:
            "Puberty refers to the period of reproductive immaturity, while adolescence is the stage of full reproductive maturity.",
          optionC:
            "Puberty and adolescence are the same; there is no difference.",
          correctAnswer: "B",
        },
        {
          question:
            "What is the most noticeable change during puberty according to the text?",
          optionA: "Change in voice",
          optionB: "Development of sex organs",
          optionC: "Increase in height",
          correctAnswer: "C",
        },
        {
          question:
            "Which hormone regulates the body changes associated with sexual development in males?",
          optionA: "Estrogen",
          optionB: "Progesterone",
          optionC: "Testosterone",
          correctAnswer: "C",
        },
        {
          question:
            "What is the primary role of hormones in the life cycle of insects and frogs?",
          optionA: "Control metamorphosis",
          optionB: "Regulate body temperature",
          optionC: "Stimulate reproduction",
          correctAnswer: "A",
        },
        {
          question:
            "What is the role of the pituitary gland in the endocrine system?",
          optionA: "Regulates activity of other endocrine glands",
          optionB: "Produces sex hormones",
          optionC: "Controls metamorphosis in insects",
          correctAnswer: "A",
        },
        {
          question: "What is the reproductive phase in females called?",
          optionA: "Menopause",
          optionB: "Menstruation",
          optionC: "Menarche",
          correctAnswer: "C",
        },
        {
          question: "Why is personal hygiene emphasized during adolescence?",
          optionA: "To prevent bacterial infection",
          optionB: "To control body weight",
          optionC: "To enhance physical fitness",
          correctAnswer: "A",
        },
        {
          question: "How is the sex of an unborn child determined?",
          optionA: "By the mother's chromosomes",
          optionB: "By the father's chromosomes",
          optionC: "By a combination of both parents' chromosomes",
          correctAnswer: "B",
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
            "In girls, adolescence may begin a year or two earlier than in boys. Also, the period of adolescence varies from ________ to ________ person.",
          optionA: "11; 19",
          optionB: "12; 20",
          optionC: "13; 18",
          correctAnswer: "A",
        },
        {
          question:
            "During puberty, the sudden increase in height is primarily due to the elongation of ________ like the bones of the arms and legs.",
          optionA: "Muscles",
          optionB: "Long bones",
          optionC: "Joints",
          correctAnswer: "B",
        },
        {
          question:
            "In males, the voice box or larynx begins to grow. This growth is more prominent in boys, and it may be seen as a protruding part called ________ apple.",
          optionA: "Pear",
          optionB: "Adam's",
          optionC: "Throat",
          correctAnswer: "B",
        },
        {
          question:
            "Sweat glands and sebaceous glands are responsible for increased secretion during puberty. Sebaceous glands secrete an oily material called ________ to lubricate the skin and hair.",
          optionA: "Serum",
          optionB: "Sebum",
          optionC: "Saliva",
          correctAnswer: "B",
        },
        {
          question:
            "Adolescents often experience emotional stress due to significant adjustments to social changes, distinguishing childhood behavior from ________ behavior.",
          optionA: "Adolescent",
          optionB: "Teenager",
          optionC: "Adult",
          correctAnswer: "C",
        },
        {
          question:
            "The ________ gland is known as the master gland because it regulates the activity of other endocrine glands attached to the brain.",
          optionA: "Thyroid",
          optionB: "Pituitary",
          optionC: "Adrenal",
          correctAnswer: "B",
        },
        {
          question:
            "The reproductive phase in females begins at puberty and continues until the ovaries keep releasing ova, generally up to the age of ________ to ________ years.",
          optionA: "35; 40",
          optionB: "45; 50",
          optionC: "50; 55",
          correctAnswer: "B",
        },
        {
          question:
            "The sex of an unborn child is determined by the sex chromosomes: X and Y. If a sperm with an X chromosome fertilizes the egg, the zygote will develop into a ________ child.",
          optionA: "Male",
          optionB: "Female",
          optionC: "Both",
          correctAnswer: "B",
        },
        {
          question:
            "During adolescence, personal hygiene is emphasized due to increased hormonal activity, leading to more ________ secretion and the possibility of body odor.",
          optionA: "Sweat",
          optionB: "Sebum",
          optionC: "Saliva",
          correctAnswer: "A",
        },
        {
          question:
            "To maintain a balanced diet during adolescence, it is essential to have the right proportions of carbohydrates, proteins, fats, minerals, and vitamins. Milk is considered a complete food due to its richness in calcium and ________.",
          optionA: "Iron",
          optionB: "Phosphorus",
          optionC: "Proteins",
          correctAnswer: "B",
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
            "During puberty, the sudden increase in height is primarily due to the elongation of muscles.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The voice box or larynx begins to grow during puberty, and girls generally develop larger voice boxes than boys.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The secretion of sweat glands and sebaceous glands decreases during puberty, leading to dry skin.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The Hindu and Muslim education systems in ancient times emphasized rote learning over experimental learning.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The Charter Act of 1813 provided an annual grant for introducing Arabic as the medium of instruction in India.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Personal hygiene is emphasized during adolescence to prevent bacterial infection caused by increased hormonal activity.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The pituitary gland is known as the master gland because it regulates the activity of the digestive system.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The sex of an unborn child is determined by the mother's chromosomes.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Lord Wellesley's Fort William College was established to train company civil servants in European languages and customs.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The reproductive phase in females begins at puberty and continues until the ovaries stop releasing ova.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
  };
}

export var activityData;
