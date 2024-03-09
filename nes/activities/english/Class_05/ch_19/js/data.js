export const chapter = "Chapter -19: Two Wheels";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
        {
          question:
            "What did the author use to ride on that never used to wobble like their bike?",
          optionA: "Stabilisers",
          optionB: "Three Wheels",
          optionC: "Four Wheels",
          correctAnswer: "Three Wheels",
        },
        {
          question: "How did stabilisers make the bike easier to ride?",
          optionA: "By making it wobble",
          optionB: "By preventing it from falling over",
          optionC: "By adding an extra wheel",
          correctAnswer: "By preventing it from falling over",
        },
        {
          question:
            "What did the author enjoy doing on their trike with three wheels?",
          optionA: "Tinkling on the bell",
          optionB: "Riding on two wheels",
          optionC: "Looking at photographs",
          correctAnswer: "Looking at photographs",
        },
        {
          question:
            "What is mentioned as not quite a bike, not quite a trike, with four wheels?",
          optionA: "Stabilisers",
          optionB: "The author's bike",
          optionC: "Something else",
          correctAnswer: "Something else",
        },
        {
          question: "What happened on the day the stabilisers were taken off?",
          optionA: "The bike fell over",
          optionB: "The author came off the bike",
          optionC: "The bike started wobbling",
          correctAnswer: "The author came off the bike",
        },
        {
          question:
            "What does the author enjoy doing now on the bike with two wheels?",
          optionA: "Riding on three wheels",
          optionB: "Tinkling on the bell",
          optionC: "Looking at old photographs",
          correctAnswer: "Tinkling on the bell",
        },
        {
          question:
            "What made the bike with two wheels different from the trike?",
          optionA: "It had stabilisers",
          optionB: "It had fewer wheels",
          optionC: "It wobbled less",
          correctAnswer: "It had fewer wheels",
        },
        {
          question: "What is the author's current preference for riding?",
          optionA: "On three wheels",
          optionB: "On four wheels",
          optionC: "On two wheels",
          correctAnswer: "On two wheels",
        },
        {
          question: "What used to make the bike wobble less?",
          optionA: "Three wheels",
          optionB: "Four wheels",
          optionC: "Stabilisers",
          correctAnswer: "Stabilisers",
        },
        {
          question:
            "What did the author experience when the stabilisers were taken off?",
          optionA: "The bike became stable",
          optionB: "The bike started wobbling",
          optionC: "The author came off the bike",
          correctAnswer: "The author came off the bike",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blanks:",
    questions: [
        {
          question: "I used to like riding my __________ with three wheels.",
          optionA: "Bike",
          optionB: "Scooter",
          optionC: "Trike",
          correctAnswer: "Trike",
        },
        {
          question: "Stabilisers made my bike easier to __________.",
          optionA: "Drive",
          optionB: "Ride",
          optionC: "Walk",
          correctAnswer: "Ride",
        },
        {
          question:
            "Not quite a bike, not quite a trike, with __________ wheels.",
          optionA: "Two",
          optionB: "Three",
          optionC: "Four",
          correctAnswer: "Four",
        },
        {
          question: "On the day we took them off, I __________ as well.",
          optionA: "Came off",
          optionB: "Fell off",
          optionC: "Stayed on",
          correctAnswer: "Came off",
        },
        {
          question:
            "But now it's great to ride around and __________ on my bell.",
          optionA: "Ring",
          optionB: "Sing",
          optionC: "Dance",
          correctAnswer: "Ring",
        },
        {
          question: "That's what I like riding my bike with __________ wheels.",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        },
        {
          question:
            "Stabilisers made my bike easier to ride by preventing it from __________ over.",
          optionA: "Tipping",
          optionB: "Rolling",
          optionC: "Sliding",
          correctAnswer: "Tipping",
        },
        {
          question: "Riding on __________ wheels!",
          optionA: "Three",
          optionB: "Four",
          optionC: "Five",
          correctAnswer: "Three",
        },
        {
          question: "I like to look at photographs of me on my old __________.",
          optionA: "Car",
          optionB: "Trike",
          optionC: "Skateboard",
          correctAnswer: "Trike",
        },
        {
          question: "That's what I like riding my bike with __________.",
          optionA: "One",
          optionB: "Two",
          optionC: "Three",
          correctAnswer: "Two",
        },
   ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
        {
          question: "The author's old trike had four wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Stabilisers made the author's bike wobble less.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "Riding on three wheels was the author's preference.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The bike, with four wheels, was exactly like a trike.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "On the day the stabilisers were removed, the author stayed on the bike.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The author enjoys tinkling on a horn while riding a bike with two wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Stabilisers made the bike wobble less by preventing it from tipping over.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The author currently prefers riding on three wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The stabilisers were removed on the day the author came off the bike.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question: "The author used to ride a scooter with three wheels.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
   ],
  };
}

export var activityData;
