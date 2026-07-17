export const chapter = "Chapter - 27: Markets";
export const noOfActivities = 3;
export var activityData;

const shuffleQues = (ques) => {
  let arr = ques.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffleOptions = (object) => {
  const optionKeys = ["optionA", "optionB", "optionC", "optionD"];
  const optionsArray = optionKeys
    .map((key) => object[key])
    .filter((option) => option !== undefined);

  for (let i = optionsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsArray[i], optionsArray[j]] = [
      optionsArray[j],
      optionsArray[i],
    ];
  }

  optionKeys.forEach((key, index) => {
    if (index < optionsArray.length) {
      object[key] = optionsArray[index];
    } else {
      delete object[key];
    }
  });

  return object;
};

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Who acts as the link between the producers and the consumers in a market?",
        optionA: "Customers",
        optionB: "Traders",
        optionC: "Agents",
        correctAnswer: "Traders",
      }),
      shuffleOptions({
        question: "Which market is held on a fixed day every week in a particular area?",
        optionA: "Shopping mall",
        optionB: "Weekly market",
        optionC: "Wholesale market",
        correctAnswer: "Weekly market",
      }),
      shuffleOptions({
        question: "Who usually buys goods in very large quantities from producers?",
        optionA: "Retailers",
        optionB: "Wholesalers",
        optionC: "Travelling hawkers",
        correctAnswer: "Wholesalers",
      }),
      shuffleOptions({
        question: "Where can people purchase branded and non-branded goods in a clean environment?",
        optionA: "Mall",
        optionB: "Weekly market",
        optionC: "Ration shop",
        correctAnswer: "Mall",
      }),
      shuffleOptions({
        question: "Which factor encourages people to visit a market again and again?",
        optionA: "Very high prices",
        optionB: "Unclean surroundings",
        optionC: "Good availability of goods",
        correctAnswer: "Good availability of goods",
      }),
      shuffleOptions({
        question: "Who pays the final price of a product after all intermediaries?",
        optionA: "Retailer",
        optionB: "Wholesaler",
        optionC: "Customer",
        correctAnswer: "Customer",
      }),
      shuffleOptions({
        question: "What type of shopping allows a person to buy goods from home through the internet?",
        optionA: "Direct selling",
        optionB: "Online shopping",
        optionC: "Street vending",
        correctAnswer: "Online shopping",
      }),
      shuffleOptions({
        question: "Who supplies the retailer with customer feedback that is passed to the manufacturer?",
        optionA: "Customer",
        optionB: "Wholesaler",
        optionC: "Mall owner",
        correctAnswer: "Wholesaler",
      }),
      shuffleOptions({
        question: "Which trader goes from door to door to promote or sell goods?",
        optionA: "Manufacturer",
        optionB: "Ration dealer",
        optionC: "Travelling salesperson",
        correctAnswer: "Travelling salesperson",
      }),
      shuffleOptions({
        question: "What do retailers offer to attract buyers during festival seasons?",
        optionA: "Extra taxes",
        optionB: "Seasonal discounts",
        optionC: "High-priced goods",
        correctAnswer: "Seasonal discounts",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weekly markets usually sell goods needed for our ________.",
        optionA: "offices",
        optionB: "daily use",
        optionC: "factories",
        correctAnswer: "daily use",
      }),
      shuffleOptions({
        question: "A retailer keeps goods of high, medium and low ________.",
        optionA: "quality",
        optionB: "prices",
        optionC: "weight",
        correctAnswer: "prices",
      }),
      shuffleOptions({
        question: "Buying items through websites is known as ________ shopping.",
        optionA: "street",
        optionB: "online",
        optionC: "window",
        correctAnswer: "online",
      }),
      shuffleOptions({
        question: "Wholesalers store goods in large ________.",
        optionA: "godowns",
        optionB: "lockers",
        optionC: "vans",
        correctAnswer: "godowns",
      }),
      shuffleOptions({
        question: "Shopping malls are usually ________ buildings.",
        optionA: "ordinary",
        optionB: "multi-storeyed",
        optionC: "temporary",
        correctAnswer: "multi-storeyed",
      }),
      shuffleOptions({
        question: "The facility of paying later for the goods bought is called ________.",
        optionA: "debit",
        optionB: "billing",
        optionC: "credit",
        correctAnswer: "credit",
      }),
      shuffleOptions({
        question: "Retail traders sell goods in ________ quantities.",
        optionA: "bulk",
        optionB: "small",
        optionC: "giant",
        correctAnswer: "small",
      }),
      shuffleOptions({
        question: "A good market must offer ________ prices to the customers.",
        optionA: "unfair",
        optionB: "reasonable",
        optionC: "unlimited",
        correctAnswer: "reasonable",
      }),
      shuffleOptions({
        question: "A shop selling essential items at government-fixed rates is a ________ shop.",
        optionA: "general",
        optionB: "ration",
        optionC: "fancy",
        correctAnswer: "ration",
      }),
      shuffleOptions({
        question: "When a product is purchased directly from the company’s outlet, it is the ________ channel of distribution.",
        optionA: "indirect",
        optionB: "seasonal",
        optionC: "direct",
        correctAnswer: "direct",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Weekly market shopkeepers do not have permanent shops.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Wholesalers usually invest a large amount of money in buying goods.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Shopping malls cater only to rural customers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Retailers often offer after-sale services for items like watches and electronics.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Online shopping allows the customer to visit a shop physically.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "People avoid markets that are too far from residential areas.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A wholesaler sells goods directly to customers in small quantities.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Good quality products help a market gain popularity.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "A retailer always buys goods from the producer in bulk.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Availability of many types of goods attracts more customers to a market.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
