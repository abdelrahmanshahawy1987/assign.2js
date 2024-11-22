
var quotes = [
    {
      text: "“Be yourself; everyone else is already taken.”",
      author: "— Oscar Wilde",
    },
    {
      text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      author: "— Marilyn Monroe",
    },
    {
      text: "So many books, so little time.",
      author: "— Frank Zappa",
    },
    {
      text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      author: "— Albert Einstein",
    },
    {
      text: "“A room without books is like a body without a soul.”",
      author: "— Marcus Tullius Cicero",
    },
    {
      text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      author: "— Bernard M. Baruch",
    },
    {
      text: "“You only live once, but if you do it right, once is enough.”",
      author: "— Mae West",
    },
    {
      text: "“Be the change that you wish to see in the world.”",
      author: "— Mahatma Gandhi",
    },
    {
      text: "“The future belongs to those who believe in the beauty of their dreams.”",
      author: "— Eleanor Roosevelt",
    },
    {
      text: "“In three words I can sum up everything I've learned about life: it goes on.”",
      author: "— Mahatma Gandhi",
    },
    {
      text: "“If you tell the truth, you don't have to remember anything.”",
      author: "— Mark Twain",
    },
    {
      text: "“A friend is someone who knows all about you and still loves you.”",
      author: "— Elbert Hubbard",
    },
    {
      text: "“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”",
      author: "— Oscar Wilde",
    },
    {
      text: "“A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.”",
      author: "— Roy T. Bennett",
    },
    {
      text: "“Though nobody can go back and make a new beginning, Anyone can start over and make a new ending.”",
      author: "— Chico Xavier",
    },
    {
      text: "“You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?”",
      author: "— George Bernard Shaw",
    },
    {
      text: "“Happiness is only real when shared”",
      author: "— Jon Krakauer",
    },
    {
      text: "“You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.”",
      author: "— Roy T. Bennett",
    },
    {
      text: "“Stop comparing yourself to other people, just choose to be happy and live your own life.”",
      author: "— Roy T. Bennett",
    },
    {
      text: "“Wanting to be someone else is a waste of the person you are.”",
      author: "— Marilyn Monroe",
    },
    {
      text: "“Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.”",
      author: "— Steve Maraboli",
    },
    {
      text: "“Courage isn't having the strength to go on - it is going on when you don't have strength.”",
      author: "— Napoleon Bonaparte",
    },
    {
      text: "“The unhappiest people in this world, are those who care the most about what other people think.”",
      author: "— C. JoyBell C.",
    },
    {
      text: "“I am a part of all that I have met.”",
      author: "— Alfred Tennyson",
    },
    {
      text: "“Earth provides enough to satisfy every man's needs, but not every man's greed.”",
      author: "— Mahatma Gandhi",
    },
    {
      text: "“It’s your life; you don’t need someone’s permission to live the life you want. Be brave to live from your heart.”",
      author: "— Roy T. Bennett",
    },
    {
      text: "“My only advice is to stay aware, listen carefully, and yell for help if you need it.”",
      author: "— Judy Blume",
    },
    {
      text: "“It's hard to beat a person who never gives up.”",
      author: "— George Herman Ruth",
    },
    {
      text: "“Do what you love, love what you do, and with all your heart give yourself to it.”",
      author: "— Roy T. Bennett",
    },
    {
      text: "“Just because you can doesn't mean you should.”",
      author: "— Sherrilyn Kenyon",
    },
    {
      text: "“When someone tells me 'no' it doesn't mean I can't do it, it simply means I can't do it with them.”",
      author: "— Karen E. Quinones Miller",
    },
    {
      text: "“why trying so hard to fit in, when you're born to stand out?”",
      author: "— Oliver James",
    },
    {
      text: "“I must be willing to give up what I am in order to become what I will be.”",
      author: "— Albert Einstein",
    },
    {
      text: "“The only person who can pull me down is myself, and I'm not going to let myself pull me down anymore.”",
      author: "— C. JoyBell C.",
    },
    {
      text: "“You only live once, but if you do it right, once is enough.”",
      author: "— Mae West",
    },
    {
      text: "“It is better to be hated for what you are than to be loved for what you are not.”",
      author: "— Andre Gide",
    },
    {
      text: "“Life is what happens to us while we are making other plans.”",
      author: "— Allen Saunders",
    },
    {
      text: "“Sometimes the questions are complicated and the answers are simple.”",
      author: "— Dr. Seuss",
    },
    {
      text: "“But better to get hurt by the truth than comforted with a lie.”",
      author: "— Khaled Hosseini",
    },
    {
      text: "“If you don't know where you're going, any road'll take you there”",
      author: "— George Harrison",
    },
    {
      text: "“Where there is love there is life.”",
      author: "— Mahatma Gandhi",
    },
    {
      text: "“Life can only be understood backwards; but it must be lived forwards.”",
      author: "— Søren Kierkegaard",
    },
    {
      text: "“A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.”",
      author: "— George Bernard Shaw",
    },
    {
      text: "“Nobody realizes that some people expend tremendous energy merely to be normal.”",
      author: "— Albert Camus",
    },
    {
      text: "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",
      author: "— Roy T. Bennett",
    },
    {
      text: "“Success is not how high you have climbed, but how you make a positive difference to the world.”",
      author: "— Roy T. Bennett",
    },
  ];
  
  var lastCartona = "";
  
  function Quote() {
    var cartona = "";
    do {
        cartona = Math.floor(Math.random() * quotes.length);
    } while (lastCartona == cartona);
    lastCartona = cartona;
    document.getElementById("quotes").innerHTML = quotes[cartona].text;
    document.getElementById("author").innerHTML = quotes[cartona].author;
  }
  