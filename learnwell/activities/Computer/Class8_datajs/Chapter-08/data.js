export const chapter = "Chapter - 8: E-commerce";
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
        question: "Which group of people are responsible for creating the goods sold in the market?",
        optionA: "Buyers",
        optionB: "Producers",
        optionC: "Sellers",
        correctAnswer: "Producers",
      }),
      shuffleOptions({
        question: "Which type of E-commerce allows individuals to sell used items directly to other individuals?",
        optionA: "C2C",
        optionB: "B2B",
        optionC: "B2C",
        correctAnswer: "C2C",
      }),
      shuffleOptions({
        question: "Which E-commerce category involves companies designing websites to sell products directly to customers?",
        optionA: "C2C",
        optionB: "Digital Middlemen",
        optionC: "B2C",
        correctAnswer: "B2C",
      }),
      shuffleOptions({
        question: "On an online shopping website, which button allows you to keep items for future purchase?",
        optionA: "Proceed to Checkout",
        optionB: "Save for Later",
        optionC: "Remove",
        correctAnswer: "Save for Later",
      }),
      shuffleOptions({
        question: "Which process ensures that the payment card used online is genuine?",
        optionA: "Shipping",
        optionB: "Credit card verification service",
        optionC: "Home page loading",
        correctAnswer: "Credit card verification service",
      }),
      shuffleOptions({
        question: "Social commerce depends mainly on which platforms to influence customer buying?",
        optionA: "Social media sites like Facebook and Pinterest",
        optionB: "Magazines",
        optionC: "School portals",
        correctAnswer: "Social media sites like Facebook and Pinterest",
      }),
      shuffleOptions({
        question: "What happens when you click “Add to Cart” on a product?",
        optionA: "You buy the product instantly",
        optionB: "The product is stored in your Shopping Cart list",
        optionC: "The product is removed",
        correctAnswer: "The product is stored in your Shopping Cart list",
      }),
      shuffleOptions({
        question: "Digital Middlemen usually earn money through which method?",
        optionA: "Commission on every sale or purchase made through their platform",
        optionB: "Donation",
        optionC: "Monthly subscription",
        correctAnswer: "Commission on every sale or purchase made through their platform",
      }),
      shuffleOptions({
        question: "Which step allows the website to know where the parcel must be delivered?",
        optionA: "Entering the home page",
        optionB: "Filling the shipping address form",
        optionC: "Clicking Save for Later",
        correctAnswer: "Filling the shipping address form",
      }),
      shuffleOptions({
        question: "What is the role of courier services in online shopping?",
        optionA: "Designing the website",
        optionB: "Delivering products ordered online to the customer’s address",
        optionC: "Verifying card details",
        correctAnswer: "Delivering products ordered online to the customer’s address",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: shuffleQues([
      shuffleOptions({
        question: "In online shopping, the first page of a website is called the ______.",
        optionA: "start screen",
        optionB: "home page",
        optionC: "address page",
        correctAnswer: "home page",
      }),
      shuffleOptions({
        question: "C2C E-commerce mainly works through ______-based selling.",
        optionA: "auction",
        optionB: "grocery",
        optionC: "textbook",
        correctAnswer: "auction",
      }),
      shuffleOptions({
        question: "Online purchasing requires a stable ______ connection.",
        optionA: "battery",
        optionB: "Internet",
        optionC: "cable TV",
        correctAnswer: "Internet",
      }),
      shuffleOptions({
        question: "“Monitor shopping” refers to ______ through online stores without buying.",
        optionA: "cooking",
        optionB: "browsing",
        optionC: "recording",
        correctAnswer: "browsing",
      }),
      shuffleOptions({
        question: "To complete an order, one must choose a suitable ______ method.",
        optionA: "entertainment",
        optionB: "payment",
        optionC: "reading",
        correctAnswer: "payment",
      }),
      shuffleOptions({
        question: "Websites like Flipkart provide detailed ______ about products.",
        optionA: "games",
        optionB: "information and price lists",
        optionC: "songs",
        correctAnswer: "information and price lists",
      }),
      shuffleOptions({
        question: "After adding items, they appear in the ______ section.",
        optionA: "Shipping list",
        optionB: "Shopping Cart",
        optionC: "Wish Box",
        correctAnswer: "Shopping Cart",
      }),
      shuffleOptions({
        question: "Digital Middlemen gather product ______ from various companies.",
        optionA: "holidays",
        optionB: "information",
        optionC: "cartoons",
        correctAnswer: "information",
      }),
      shuffleOptions({
        question: "The website verifies the credit card using a secure ______.",
        optionA: "server",
        optionB: "notebook",
        optionC: "calculator",
        correctAnswer: "server",
      }),
      shuffleOptions({
        question: "Products purchased online are delivered by ______ services.",
        optionA: "courier",
        optionB: "school",
        optionC: "cinema",
        correctAnswer: "courier",
      }),
    ]),
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: shuffleQues([
      shuffleOptions({
        question: "Producers make the goods that sellers offer to buyers.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Digital Middlemen show product details from several companies on one website.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Online shopping requires filling an electronic form with personal details.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "In C2C E-commerce, companies sell directly to large businesses.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "A Shopping Cart can be edited by adding or deleting items.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Social Commerce encourages buying through social media interaction.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Monitor shopping always leads to immediate purchasing.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "False",
      }),
      shuffleOptions({
        question: "Online shopping websites deliver items using courier services.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Credit card verification happens before finalising online payment.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
      shuffleOptions({
        question: "Digital Middlemen charge commission for providing a comparison platform.",
        optionA: "True",
        optionB: "False",
        correctAnswer: "True",
      }),
    ]),
  };
}
