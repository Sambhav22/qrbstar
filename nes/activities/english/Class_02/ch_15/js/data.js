export const chapter = "Chapter -15: Little Brown ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      [
        {
          question:
            "What does Brownie find on the shelf during his first adventure outside the hole?",
          optionA: "Cheese",
          optionB: "Cake",
          optionC: "Chocolate",
          correctAnswer: "Cake",
        },
        {
          question:
            "Why does Brownie have to scamper back to his hole during his first adventure?",
          optionA: "He heard footsteps",
          optionB: "His mother called him",
          optionC: "He was scared of the dark",
          correctAnswer: "He heard footsteps",
        },
        {
          question:
            "What does Brownie find in a little beautiful wooden house during his second adventure outside the hole?",
          optionA: "Cake",
          optionB: "Cheese",
          optionC: "Chocolate",
          correctAnswer: "Cheese",
        },
        {
          question:
            "What sound does Brownie hear when he nibbles at the cheese in the wooden house?",
          optionA: "Squeak",
          optionB: "Click",
          optionC: "Hiss",
          correctAnswer: "Click",
        },
        {
          question:
            "Why does Brownie's mother return to her hole helplessly after seeing him in the mousetrap?",
          optionA: "She is scared",
          optionB: "She has seen several mice being caught before",
          optionC: "She is hungry",
          correctAnswer: "She has seen several mice being caught before",
        },
        {
          question:
            "Who calls Madhuri when the mistress of the house sees the trapped mouse?",
          optionA: "Brownie's mother",
          optionB: "The mistress of the house",
          optionC: "Madhuri herself",
          correctAnswer: "The mistress of the house",
        },
        {
          question:
            "What does Madhuri say to Brownie before releasing him from the mousetrap?",
          optionA: "You're a good mouse.",
          optionB: "Stealing is bad, isn't it?",
          optionC: "I'll keep you as my pet.",
          correctAnswer: "Stealing is bad, isn't it?",
        },
        {
          question:
            "How does Madhuri react when the mistress suggests killing Brownie?",
          optionA: "She agrees",
          optionB: "She disagrees",
          optionC: "She laughs",
          correctAnswer: "She disagrees",
        },
        {
          question:
            "What is the mistress's reaction when she finds out Brownie stole the birthday cake?",
          optionA: "She laughs",
          optionB: "She scolds Madhuri",
          optionC: "She wants to kill Brownie",
          correctAnswer: "She wants to kill Brownie",
        },
        {
          question: "How does the story end for Brownie?",
          optionA: "He becomes Madhuri's pet",
          optionB: "He runs straight to his mother, who comforts him",
          optionC: "He continues stealing food",
          correctAnswer: "He runs straight to his mother, who comforts him",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 2) {
  activityData = {
    activity: "Fill in the blank with correct option:",
    questions: [
      [
        {
          question:
            "Brownie was a little _______. One day, he said to his ______, 'The people in the house seem so nice. I think I can go out and have a ______.'",
          optionA: "cat, friend, chat",
          optionB: "mouse, mother, stroll",
          optionC: "rabbit, neighbor, feast",
          correctAnswer: "mouse, mother, stroll",
        },
        {
          question:
            "'They may seem nice to you, but I don't think they are nice to us,' said his ______. 'You must not go out ______.'",
          optionA: "sister, alone",
          optionB: "mother, hungry",
          optionC: "father, happily",
          correctAnswer: "mother, alone",
        },
        {
          question:
            "Brownie did not obey his mother. When his mother was busy with the little mice, he slipped out of the ______. On the shelf, he found the tastiest ______ that he had ever seen-cake.",
          optionA: "hole, cheese",
          optionB: "house, bread",
          optionC: "den, cake",
          correctAnswer: "hole, cheese",
        },
        {
          question:
            "Brownie ate hurriedly and made a ______ in the cake; he wanted to eat more but he had to scamper back to his ______ when he heard ______.",
          optionA: "mess, nest, laughter",
          optionB: "hole, hole, footsteps",
          optionC: "jump, house, music",
          correctAnswer: "hole, hole, footsteps",
        },
        {
          question:
            "Next day at night, Brownie once again stepped out without his mother's permission. He saw a piece of ______ in a little beautiful wooden ______.",
          optionA: "chocolate, basket",
          optionB: "cheese, house",
          optionC: "cake, garden",
          correctAnswer: "cheese, house",
        },
        {
          question:
            "Without thinking much, Brownie entered the wooden house. As he nibbled at the ______, a harsh sound of '______' rent the air. It was, in fact, a ______.",
          optionA: "cake, click, surprise",
          optionB: "cheese, snap, mousetrap",
          optionC: "bread, pop, doorbell",
          correctAnswer: "cheese, snap, mousetrap",
        },
        {
          question:
            "Brownie tried to come out, but could not. His mother too had heard the vicious sound. She came out to see. Finding her dear son in the mousetrap, she returned to her ______ helplessly.",
          optionA: "hole",
          optionB: "nest",
          optionC: "garden",
          correctAnswer: "hole",
        },
        {
          question:
            "In the morning, the mistress of the house came. When she saw the trapped mouse, she called Madhuri and said to her, 'Look, this was the ______ who stole your cake.'",
          optionA: "hero",
          optionB: "thief",
          optionC: "artist",
          correctAnswer: "thief",
        },
        {
          question:
            "'What are you going to do of him?' asked the pretty girl. 'Why kill him,' said the woman. 'He is such a ______.'",
          optionA: "friend",
          optionB: "nuisance",
          optionC: "hero",
          correctAnswer: "nuisance",
        },
        {
          question:
            "'Don't do it again,' said Madhuri as she lifted the ______ of the mousetrap. Brownie ran straight to his mother, who comforted him until he was ______ again.",
          optionA: "lid, normal",
          optionB: "cover, happy",
          optionC: "door, brave",
          correctAnswer: "lid, normal",
        },
      ],
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      [
        {
          question:
            "Brownie found a piece of chocolate in the wooden house during his second adventure.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Brownie's mother encouraged him to go out alone and explore.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The mistress of the house called Madhuri to show her the trapped mouse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Madhuri agreed with the idea of killing Brownie because he stole the cake.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Brownie made a mess in the cake while eating and wanted to eat more.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "True",
        },
        {
          question:
            "Brownie's mother saw him in the mousetrap but couldn't do anything to help him.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The mistress of the house wanted to keep Brownie as her pet.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "Brownie's second adventure ended with him becoming Madhuri's favorite mouse.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question: "Madhuri scolded Brownie for stealing the birthday cake.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
        {
          question:
            "The mistress of the house suggested killing Brownie because he was a hero.",
          optionA: "True",
          optionB: "False",
          correctAnswer: "False",
        },
      ],
    ],
  };
}

export var activityData;
