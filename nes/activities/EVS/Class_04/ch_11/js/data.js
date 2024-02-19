export const chapter = "Chapter - 11: Eating Food";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What are some examples of vegetables mentioned in the text?",
          optionA: "Apple, mango, cherry",
          optionB: "Bean, carrot, potato",
          optionC: "Rice, wheat, oats",
          correctAnswer: "B) Bean, carrot, potato",
        },
        {
          question: "Which of the following is considered a fleshy fruit?",
          optionA: "Almond",
          optionB: "Mango",
          optionC: "Raisins",
          correctAnswer: "B) Mango",
        },
        {
          question: "What do food grains provide us with?",
          optionA: "Vitamins and minerals",
          optionB: "Energy",
          optionC: "Proteins",
          correctAnswer: "B) Energy",
        },
        {
          question: "What is the purpose of a Langar in Gurdwaras?",
          optionA: "Selling food to visitors",
          optionB: "Cooking food for all visitors",
          optionC: "Hosting festivals",
          correctAnswer: "B) Cooking food for all visitors",
        },
        {
          question:
            "What is the journey of food from the field to our homes according to the text?",
          optionA: "Seeds are sown, harvested, stored, and then sold",
          optionB:
            "Field is watered, manure is added, harvested, and then stored",
          optionC:
            "Ploughing, sowing seeds, watering, harvesting, storing, and selling",
          correctAnswer:
            "C) Ploughing, sowing seeds, watering, harvesting, storing, and selling",
        },
        {
          question:
            "How does eating together as a family impact members according to the text?",
          optionA: "Creates disunity",
          optionB: "Establishes a bond of unity",
          optionC: "Encourages isolation",
          correctAnswer: "B) Establishes a bond of unity",
        },
        {
          question: "What is the purpose of a Bhandara?",
          optionA: "Cooking food for all visitors",
          optionB: "Serving free meals on festivals",
          optionC: "Eating together in schools",
          correctAnswer: "B) Serving free meals on festivals",
        },
        {
          question:
            "Where do students in a hostel or boarding school eat their meals together?",
          optionA: "Kitchen",
          optionB: "Dining hall or mess",
          optionC: "Classroom",
          correctAnswer: "B) Dining hall or mess",
        },
        {
          question:
            "What is the common feature of community eating as described in the text?",
          optionA: "Eating alone",
          optionB: "Sharing meals with friends",
          optionC: "Eating together on certain occasions",
          correctAnswer: "C) Eating together on certain occasions",
        },
        {
          question:
            "What is the role of spices in food, as mentioned in the text?",
          optionA: "Provide energy",
          optionB: "Make food tasty, colourful, and spicy",
          optionC: "Rich in proteins",
          correctAnswer: "B) Make food tasty, colourful, and spicy",
        },
      ],
   };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "To get food, the field is first ________.",
          optionA: "harvested",
          optionB: "ploughed",
          optionC: "watered",
          correctAnswer: "B) ploughed",
        },
        {
          question: "The ____________ is watered at regular intervals.",
          optionA: "harvested crop",
          optionB: "field",
          optionC: "none",
          correctAnswer: "B) field",
        },
        {
          question: "Langar is a community eating held in __________.",
          optionA: "temples",
          optionB: "gurdwaras",
          optionC: "churches",
          correctAnswer: "B) gurdwaras",
        },
        {
          question: "________ started the practice of langar.",
          optionA: "Mahatma Gandhi",
          optionB: "Guru Nanak Dev Ji",
          optionC: "Mother Teresa",
          correctAnswer: "B) Guru Nanak Dev Ji",
        },
        {
          question: "Mid-day meal is provided in _______.",
          optionA: "government schools",
          optionB: "private schools",
          optionC: "both",
          correctAnswer: "C) both",
        },
        {
          question: "Seeds are sown in the ________.",
          optionA: "kitchen",
          optionB: "classroom",
          optionC: "soil",
          correctAnswer: "C) soil",
        },
        {
          question: "We purchase the food we need from the ________.",
          optionA: "field",
          optionB: "retail shops",
          optionC: "mandi",
          correctAnswer: "B) retail shops",
        },
        {
          question:
            "Eating together as a family establishes a bond of unity among the members of the family and brings the family members closer to one another. We should eat at least one meal together with our ________.",
          optionA: "friends",
          optionB: "community",
          optionC: "family",
          correctAnswer: "C) family",
        },
        {
          question:
            "Community is a group of people living together in the same area. When the people of a community eat together on certain occasions, it is called ________ eating.",
          optionA: "family",
          optionB: "community",
          optionC: "school",
          correctAnswer: "B) community",
        },
        {
          question:
            "Eating together in schools encourages discipline, manners, and oneness in students. It helps them to understand the diversity and culture of our ________.",
          optionA: "country",
          optionB: "state",
          optionC: "city",
          correctAnswer: "A) country",
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
            "Vegetables such as bean, carrot, potato, and spinach are rich in vitamins and minerals.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Food grains like rice, wheat, oats, and corn are also known as cereals and provide us with proteins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Pulses, such as kidney bean, moth bean, and black gram, are dried seeds of certain plants and are rich in proteins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Oil is obtained by crushing the seeds of some plants, such as mustard, groundnut, linseed, and sunflower seeds.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Fruits can be classified into two types: fleshy fruits like apple, mango, cherry, and dry fruits like apricot, almond, and raisins.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Spices like pepper, chilli, clove, cardamom, turmeric, and bay leaf are obtained from leaves, seeds, flowers, or barks of many plants.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "The journey of food from the field to our homes involves ploughing, sowing seeds, watering, harvesting, storing, and selling.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Eating together as a family establishes a bond of disunity among the members of the family.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Community eating refers to people of a community eating alone on certain occasions.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Eating together in schools encourages discipline, manners, and oneness in students.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
      ],
   };
}

export var activityData;
