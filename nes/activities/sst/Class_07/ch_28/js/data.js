export const chapter = "Chapter - 28: Markets Around Us  ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question: "What is the main idea of the text?",
        optionA: "Describing different types of markets",
        optionB: "Discussing the chain of supply",
        optionC: "Exploring the impact of market operations on growers",
        correctAnswer: "A",
      },
      {
        question: "What is the purpose of a retail market?",
        optionA: "To sell goods in large quantities",
        optionB: "To sell goods at a low rate",
        optionC: "To cater to the needs of wholesalers",
        correctAnswer: "B",
      },
      {
        question:
          "Which of the following is NOT a type of retail market mentioned in the text?",
        optionA: "Weekly Markets",
        optionB: "Supermarkets",
        optionC: "Neighbourhood Markets",
        correctAnswer: "B",
      },
      {
        question:
          "What distinguishes neighbourhood markets from weekly markets?",
        optionA: "Neighbourhood markets have pucca shops",
        optionB: "Weekly markets are held online",
        optionC: "Neighbourhood markets only sell goods in bulk",
        correctAnswer: "A",
      },
      {
        question: "What is a characteristic of malls, according to the text?",
        optionA: "Goods are sold at a low rate",
        optionB: "Bargaining takes place in these markets",
        optionC: "Branded goods are mainly sold",
        correctAnswer: "C",
      },
      {
        question:
          "Which is an example of an online market mentioned in the text?",
        optionA: "Mangal Painth",
        optionB: "Oyo",
        optionC: "Budh Bazaar",
        correctAnswer: "B",
      },
      {
        question: "What does a wholesaler sell?",
        optionA: "Goods in small quantities",
        optionB: "Goods in bulk",
        optionC: "Branded goods only",
        correctAnswer: "B",
      },
      {
        question:
          "How do retailers and factory-owners obtain their goods in the market?",
        optionA: "Directly from consumers",
        optionB: "From wholesalers",
        optionC: "Through online orders only",
        correctAnswer: "B",
      },
      {
        question: "What is the chain of supply dependent on?",
        optionA: "Availability of a commodity or service",
        optionB: "Only the nearness of the market",
        optionC: "The number of intermediaries involved",
        correctAnswer: "A",
      },
      {
        question: "Why do some products have a long chain of supply?",
        optionA: "Due to the availability of loans",
        optionB: "Because of the need for large quantities",
        optionC: "To reduce the cost of transportation",
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
          "In a _____________ market, different sellers gather at one point and erect their stalls from morning to evening.",
        options: ["Wholesale", "Weekly", "Neighbourhood"],
        answer: "Weekly",
      },
      {
        question:
          "Malls provide facilities like parking space, air conditioning, and sell both branded and non-branded items, making them a type of _____________ market.",
        options: ["Online", "Retail", "Wholesale"],
        answer: "Retail",
      },
      {
        question:
          "Online markets like Amazon and Flipkart allow users to order goods online and pay by _____________.",
        options: ["Cash on delivery", "Cheque", "Barter"],
        answer: "Cash on delivery",
      },
      {
        question:
          "A _____________ sells goods of a particular kind in small quantities and is often found in neighbourhoods.",
        options: ["Wholesaler", "Retailer", "Manufacturer"],
        answer: "Retailer",
      },
      {
        question:
          "Transporters use various modes of transportation depending on factors such as distance, volume, and value, including trains, trucks, ships, and _____________.",
        options: ["Carts", "Bicycles", "Rockets"],
        answer: "Carts",
      },
      {
        question:
          "A farmer grows wheat, transports it to a market, and sells it to a wholesaler in a _____________ chain of supply.",
        options: ["Short", "Long", "Direct"],
        answer: "Long",
      },
      {
        question:
          "__________ is an emerging trend in purchasing things, allowing customers to order items from the comfort of their homes.",
        options: ["Weekly markets", "Malls", "Online"],
        answer: "Online",
      },
      {
        question:
          "A _____________ does not sell goods in small quantities; instead, they sell in bulk quantities to retailers.",
        options: ["Wholesaler", "Retailer", "Consumer"],
        answer: "Wholesaler",
      },
      {
        question:
          "Small growers and producers generally earn less than larger ones because they are often dependent on others for their _____________.",
        options: ["Resources", "Equipment", "Small produce"],
        answer: "Small produce",
      },
      {
        question:
          "When there is an urgent need for making a law and the Parliament is not in session, the government issues an _____________.",
        options: ["Amendment", "Ordinance", "Regulation"],
        answer: "Ordinance",
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
          "Retail markets can be of four types: weekly markets, neighbourhood markets, malls, and online markets.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "Neighbourhood markets are often held in temporary stalls and are popular with villagers and middle-income groups.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "Malls provide facilities like parking space, air conditioning, and mostly sell non-branded items.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "Online markets allow customers to order items from the comfort of their homes and often provide discounts.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "Wholesalers normally have shops in various parts of the town, selling a large variety of things.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "In a wholesale market, a shop owner typically sells a few items of the same type in bulk quantities.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "The chain of supply for a commodity can be either short or long, depending on factors like availability and need.",
        options: ["True", "False"],
        answer: "True",
      },
      {
        question:
          "Transportation is not a significant factor in market operations, and the type of transport used does not impact the cost of the product.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "The price of commodities is solely determined by demand, and supply has no impact on the market.",
        options: ["True", "False"],
        answer: "False",
      },
      {
        question:
          "Small growers and producers generally earn more than larger ones due to their close connections with consumers.",
        options: ["True", "False"],
        answer: "False",
      },
    ],
  };
}

export var activityData;
