export const chapter = "Chapter - 18: Our Great Leaders ";
export const noOfActivities = 3;

if (localStorage.getItem("activityNumber") == 1) {
  activityData = {
    activity: "Tick the correct option:",
    questions: [
      {
        question:
          "Who is known for his dedication to the ideals of truth, non-violence, and love?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Sardar Vallabhbhai Patel",
        correctAnswer: "A",
      },
      {
        question:
          "What was Mahatma Gandhi's concept that he transmitted to the people of India during the freedom struggle?",
        optionA: "Satyagraha",
        optionB: "Non-alignment",
        optionC: "Civil disobedience",
        correctAnswer: "A",
      },
      {
        question:
          "Which Indian leader advised boycotting British schools, colleges, textiles, and other services during the freedom struggle?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Sardar Vallabhbhai Patel",
        correctAnswer: "A",
      },
      {
        question:
          "Which Indian leader is remembered as 'Chacha Nehru,' and his birthday is celebrated as Children's Day?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Dr. Sarvepalli Radhakrishnan",
        correctAnswer: "B",
      },
      {
        question:
          "Who was the first Prime Minister of India and played a crucial role in establishing parliamentary government?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Sardar Vallabhbhai Patel",
        correctAnswer: "B",
      },
      {
        question:
          "Which Indian leader is known as the 'Iron Man of India' for his role in uniting the country during the Indian Freedom movement?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Sardar Vallabhbhai Patel",
        correctAnswer: "C",
      },
      {
        question:
          "Who is celebrated as Teacher's Day in India, and whose request led to the observance of this day?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Dr. Sarvepalli Radhakrishnan",
        correctAnswer: "C",
      },
      {
        question:
          "Which Indian leader was awarded the Bharat Ratna in 1954 for his commendable service to mankind?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Dr. Sarvepalli Radhakrishnan",
        correctAnswer: "C",
      },
      {
        question:
          "Who played a prominent role in the integration of India after independence and is known for his leadership qualities?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Sardar Vallabhbhai Patel",
        correctAnswer: "C",
      },
      {
        question:
          "Who became the first Deputy Prime Minister of India and was among one of the three leaders who led India from 1947 to 1950?",
        optionA: "Mahatma Gandhi",
        optionB: "Jawaharlal Nehru",
        optionC: "Sardar Vallabhbhai Patel",
        correctAnswer: "C",
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
          "Mahatma Gandhi's full name was Mohandas Karamchand ________.",
        options: ["Patel", "Nehru", "Gandhi"],
        correctAnswer: "Gandhi",
      },
      {
        question:
          "Mahatma Gandhi's concept of non-violence and truth is known as ________.",
        options: ["Civil disobedience", "Non-alignment", "Satyagraha"],
        correctAnswer: "Satyagraha",
      },
      {
        question:
          "Mahatma Gandhi advised Indians to boycott British schools, colleges, textiles, and other services in support of ________.",
        options: ["Non-violence", "Civil disobedience", "Satyagraha"],
        correctAnswer: "Civil disobedience",
      },
      {
        question:
          "Pandit Jawaharlal Nehru was born on 14th November and is celebrated as ________.",
        options: ["Teacher's Day", "Republic Day", "Children's Day"],
        correctAnswer: "Children's Day",
      },
      {
        question:
          "Pandit Jawaharlal Nehru was India's first Prime Minister who established a ________ government.",
        options: ["Monarchical", "Parliamentary", "Dictatorial"],
        correctAnswer: "Parliamentary",
      },
      {
        question:
          "Dr. Sarvepalli Radhakrishnan's request led to the observance of ________ as Teacher's Day.",
        options: ["5th September", "14th November", "2nd October"],
        correctAnswer: "5th September",
      },
      {
        question:
          "Sardar Vallabhbhai Patel played a prominent role in uniting the people of India during the ________ movement.",
        options: ["Non-violence", "Civil disobedience", "Indian Freedom"],
        correctAnswer: "Indian Freedom",
      },
      {
        question:
          "Sardar Vallabhbhai Patel is known as the '______' of India due to his leadership qualities.",
        options: ["Leader", "Iron Man", "Freedom Fighter"],
        correctAnswer: "Iron Man",
      },
      {
        question:
          "Sardar Vallabhbhai Patel played a significant role in persuading the rulers of princely states to be part of ________.",
        options: [
          "British Empire",
          "One India-One Nation",
          "Indian Armed Forces",
        ],
        correctAnswer: "One India-One Nation",
      },
      {
        question:
          "After independence, Sardar Vallabhbhai Patel became the first Deputy Prime Minister of India and served as the Commander in Chief of the ________.",
        options: ["Indian Parliament", "Indian Army", "Indian Navy"],
        correctAnswer: "Indian Army",
      },
    ],
  };
}

if (localStorage.getItem("activityNumber") == 3) {
  activityData = {
    activity: "Write 'True' for True and 'False' for False statements:",
    questions: [
      {
        question: "Mahatma Gandhi's full name was Mohandas Karamchand Gandhi.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Mahatma Gandhi advised Indians to boycott British schools, colleges, textiles, and other services.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Pandit Jawaharlal Nehru was India's first Prime Minister who established a parliamentary government.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Dr. Sarvepalli Radhakrishnan was elected as the Vice President of India from 1952-1962.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Sardar Vallabhbhai Patel was born in Nadiad village, Gujarat.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Sardar Vallabhbhai Patel's mother, Lodba, was inclined towards spirituality.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "Sardar Vallabhbhai Patel played a significant role in persuading the rulers of princely states to be united.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "A plateau is a landform that is lower than the nearby land and has a flat top.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        question: "Valleys are often covered by thick forests.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        question:
          "The Earth's surface is divided into two major parts: land and water.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  };
}

export var activityData;
