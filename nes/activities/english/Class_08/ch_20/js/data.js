export const chapter = "Chapter -20: The Cartoon";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What was the author's purpose for being at the railway station in the text?",
          optionA: "To watch the monkeys perform tricks",
          optionB: "To catch a train for his pilgrimage",
          optionC: "To purchase fruits from a vendor",
          correctAnswer: "B. To catch a train for his pilgrimage",
        },
        {
          question:
            "What caught the author's attention at the railway station when he arrived half an hour before the train's departure?",
          optionA: "The intense heat in the compartment",
          optionB: "The hordes of monkeys frolicking on the platform",
          optionC: "The struggle of lower-middle-class passengers for seats",
          correctAnswer: "B. The hordes of monkeys frolicking on the platform",
        },
        {
          question: "What did the monkeys do as the train was announced?",
          optionA: "Started fighting with each other",
          optionB: "Frolicked on the trees and platform",
          optionC: "Ran away in fear",
          correctAnswer: "B. Frolicked on the trees and platform",
        },
        {
          question:
            "How did the businessman react when the monkey snatched his embroidered cap?",
          optionA: "He laughed out loud",
          optionB: "He shouted in utter confusion",
          optionC: "He thanked the monkey for the entertainment",
          correctAnswer: "B. He shouted in utter confusion",
        },
        {
          question:
            "What did the fruit vendor offer to do to help the businessman retrieve his cap from the monkey?",
          optionA: "Offered money to the monkey",
          optionB: "Offered two bananas to the monkey",
          optionC: "Climbed the neem tree to get the cap",
          correctAnswer: "B. Offered two bananas to the monkey",
        },
        {
          question:
            "How did the businessman react to the fruit vendor's request for payment after retrieving the cap?",
          optionA: "He paid without any objections",
          optionB: "He refused to pay and shouted angrily",
          optionC: "He negotiated a lower payment",
          correctAnswer: "B. He refused to pay and shouted angrily",
        },
        {
          question:
            "What did the author do in response to the businessman's behavior towards the fruit vendor?",
          optionA: "Drew a caricature of the businessman",
          optionB: "Laughed out loud",
          optionC: "Ignored the situation",
          correctAnswer: "A. Drew a caricature of the businessman",
        },
        {
          question:
            "Why did the fruit vendor hurl abuse at the businessman as the train left the station?",
          optionA: "The businessman refused to pay for the bananas",
          optionB: "The businessman made a caricature of him",
          optionC: "The businessman did not help him retrieve the cap",
          correctAnswer: "A. The businessman refused to pay for the bananas",
        },
        {
          question:
            "How did the other passengers react to the caricature of the businessman?",
          optionA: "They felt sympathy for him",
          optionB: "They laughed and smiled",
          optionC: "They confronted the businessman",
          correctAnswer: "B. They laughed and smiled",
        },
        {
          question: "What did the author's revenge on the businessman involve?",
          optionA: "Drawing a caricature",
          optionB: "Confronting him verbally",
          optionC: "Offering help to the fruit vendor",
          correctAnswer: "A. Drawing a caricature",
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
            "The author was on his way from the ancient city of Ayodhya to ___________ during the course of his pilgrimage to holy cities.",
          optionA: "Delhi",
          optionB: "Varanasi",
          optionC: "Jaipur",
          correctAnswer: "B. Varanasi",
        },
        {
          question:
            "At the railway station, the presence of ____________ is conspicuous, and one can see thousands of them performing tricks.",
          optionA: "dogs",
          optionB: "cows",
          optionC: "monkeys",
          correctAnswer: "C. monkeys",
        },
        {
          question:
            "The older monkeys sat enjoying a good old scratch, which is so soothing in the __________ weather.",
          optionA: "rainy",
          optionB: "cold",
          optionC: "hot",
          correctAnswer: "C. hot",
        },
        {
          question:
            'The businessman shouted at the coolie, "Here, hurry, the train might go!" when the coolie was still far away, and he referred to the coolie as a "__________ one."',
          optionA: "lazy",
          optionB: "blind",
          optionC: "careless",
          correctAnswer: "B. blind",
        },
        {
          question:
            "The businessman recognized his name on the reservation card and beckoned to the coolie, who was following with his luggage, including a big steel trunk, a hold-all, and several small baskets and a __________ jug.",
          optionA: "glass",
          optionB: "plastic",
          optionC: "brass",
          correctAnswer: "C. brass",
        },
        {
          question:
            "The monkey leapt down from the top of their compartment and snatched away the fine __________ cap of the businessman.",
          optionA: "silk",
          optionB: "embroidered",
          optionC: "woolen",
          correctAnswer: "B. embroidered",
        },
        {
          question:
            "The fruit vendor offered a couple of __________ to the monkey in exchange for the businessman's cap.",
          optionA: "apples",
          optionB: "bananas",
          optionC: "oranges",
          correctAnswer: "B. bananas",
        },
        {
          question:
            "The businessman felt embarrassed at being made the victim of the perverted sense of humour of the monkey and was eager to get into the compartment to escape the __________ situation.",
          optionA: "humiliating",
          optionB: "entertaining",
          optionC: "joyful",
          correctAnswer: "A. humiliating",
        },
        {
          question:
            'The businessman reluctantly gave an anna to the fruit vendor but refused to pay more, calling him a "__________ fellow."',
          optionA: "generous",
          optionB: "dirty",
          optionC: "helpful",
          correctAnswer: "B. dirty",
        },
        {
          question:
            "As the train left the station, the fruit vendor dropped off after hurling the spiciest abuse on the __________.",
          optionA: "passengers",
          optionB: "businessman",
          optionC: "monkeys",
          correctAnswer: "B. businessman",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The author was on a pilgrimage from Ayodhya to Varanasi.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Monkeys at the railway station were not performing any tricks.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The older monkeys were scratching themselves on the platform.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The businessman recognized the coolie from a distance.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The businessman's luggage included a plastic jug.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The monkey snatched a silk cap from the businessman.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The fruit vendor offered oranges to the monkey.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "The businessman felt entertained by the monkey's prank.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The businessman willingly paid the fruit vendor for the bananas.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The other passengers confronted the businessman about the situation.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
