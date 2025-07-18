const questions = [
  {
    question: "It’s Ilman’s Birthday! But when is it exactly?",
    options: ["21", "30", "28", "22"],
    answer: "28"
  },
  {
    question: "Ilman’s favourite person is…?",
    options: ["Bappy", "Putri", "SAYANGKUU", "Tiger"],
    answer: "SAYANGKUU"
  },
  {
    question: "Ilman, do you know that Putri loves you?",
    options: ["YEEE TAU", "YEYEJE", "GODEM SRS ARR", "SAYA SAYANG PUTRI BANYAKKK JUGAKKK"],
    answer: "SAYA SAYANG PUTRI BANYAKKK JUGAKKK"
  }
];

let currentQuestion = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const gameSection = document.getElementById("game");
const envelopeSection = document.getElementById("envelopeSection");
const letterSection = document.getElementById("letterSection");
const typedLetter = document.getElementById("typedLetter");

const clapSound = document.getElementById("clapSound");
const booSound = document.getElementById("booSound");
const birthdayMusic = document.getElementById("birthdayMusic");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    clapSound.play();
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(() => {
        loadQuestion();
      }, 1000);
    } else {
      setTimeout(() => {
        gameSection.style.display = "none";
        envelopeSection.style.display = "block";
      }, 800);
    }
  } else {
    booSound.play();
    feedbackEl.textContent = "Salah! Cuba lagi 🥺";
  }
}

document.getElementById("openEnvelope").onclick = () => {
  envelopeSection.style.display = "none";
  letterSection.style.display = "block";
  startTypewriter();
};

function startTypewriter() {
  birthdayMusic.volume = 0.3;
  birthdayMusic.play();
  const message = `
Dear Ilman,

I wish you nothing but the best in life — to win, to grow, to be happy in everything you do. Thank you for coming this far, for never giving up. I’m so, so proud of you, baby. I’ve never once gotten tired of telling you how proud I am of you — because I want you to really know it. You’re doing amazing, and I see all your effort.

Thank you for being such a good listener, a good advisor (my personal coach sksks 🤭), and thank you most of all for staying with me even at my lowest. (Saya sayang kamu banyak tau 🥺)

Thank you for being the best son to your parents — I just know they must be so proud to have someone like you. Your siblings are lucky to have an abang they can rely on. And your kakak & abang must be proud too, knowing their little brother can handle so much, so well.

Whatever happens, I’m here with you, baby. I can’t promise everything, but what I can say is… I’ll support you always, until you reach your dreams. I’ll always be cheering for you silently, always praying for you, even when I can’t be right next to you.

Whenever you’re sick or sad, I really wish I could be there to take care of you. I want to hug you, to wipe away all your tiredness. But for now, all I can do is send you my love from afar — and pray that Allah keeps you strong, blesses your steps with goodness, endless rezeki, and always protects your heart.

May one day, with all your effort and kindness, you make your parents proud — and always remember, I’m already proud of you.

Gosh… I love this man so much it hurts. But in the most beautiful way. 🥹

Baby, I know I’m the one you accidentally met. But I hope I can always be better — the kind of person you’ve always wished for. I’m still learning, in everything. And you are too. So let’s grow together, let’s be the best version of ourselves — for each other, okay sayang?

I can’t even describe how much I’m proud to have you — as my boyfriend, and my best friend. Thank you, sayang, for being you. Good luck for your intern. No matter what the outcome is, I’m already so proud of you.

I might not always know how to express it well, but deep down — I’m so, so proud of you, Ilman.

Love always,
Your Sayang 💙
  `.trim();

  let i = 0;
  function type() {
    if (i < message.length) {
      typedLetter.textContent += message.charAt(i);
      i++;
      setTimeout(type, 25);
    }
  }
  type();
}

loadQuestion();
