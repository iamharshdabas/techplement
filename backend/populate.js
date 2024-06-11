const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB Atlas')
})

const quoteSchema = new mongoose.Schema({
  quote: String,
  author: String,
})

const Quote = mongoose.model('Quote', quoteSchema)

const quotes = [
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: 'In the midst of chaos, there is also opportunity.',
    author: 'Sun Tzu',
  },
  {
    quote: 'The only way to do great work is to do what you love.',
    author: 'Unknown',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'If you want to lift yourself up, lift up someone else.',
    author: 'Booker T. Washington',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: 'Sam Levenson',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote:
      'The only way to make sense out of change is to plunge into it, move with it, and join the dance.',
    author: 'Alan Watts',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote: 'You must be the change you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: 'Vince Lombardi',
  },
  {
    quote:
      'The only place where success comes before work is in the dictionary.',
    author: 'Vidal Sassoon',
  },
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Life is a succession of lessons which must be lived to be understood.',
    author: 'Helen Keller',
  },
  {
    quote:
      'Keep your face always toward the sunshine—and shadows will fall behind you.',
    author: 'Walt Whitman',
  },
  {
    quote:
      'The only thing necessary for the triumph of evil is for good men to do nothing.',
    author: 'Edmund Burke',
  },
  {
    quote: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: It goes on.",
    author: 'Robert Frost',
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: 'Wayne Gretzky',
  },
  {
    quote:
      'Success is not the key to happiness. Happiness is the key to success.',
    author: 'Albert Schweitzer',
  },
  {
    quote: 'The only true wisdom is in knowing you know nothing.',
    author: 'Socrates',
  },
  {
    quote: "It always seems impossible until it's done.",
    author: 'Nelson Mandela',
  },
  {
    quote: 'The best revenge is massive success.',
    author: 'Frank Sinatra',
  },
  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    author: 'Charles R. Swindoll',
  },
  {
    quote: 'You have to expect things of yourself before you can do them.',
    author: 'Michael Jordan',
  },
  {
    quote:
      'The only way to achieve the impossible is to believe it is possible.',
    author: 'Charles Kingsleigh',
  },
  {
    quote: 'Dream big and dare to fail.',
    author: 'Norman Vaughan',
  },
  {
    quote:
      'The only limit to our realization of tomorrow is our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    author: 'Albert Einstein',
  },
  {
    quote: 'Strive for greatness, not for perfection.',
    author: 'Unknown',
  },
  {
    quote: 'The harder I work, the luckier I get.',
    author: 'Gary Player',
  },
  {
    quote: 'You must do the things you think you cannot do.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'Every moment is a fresh beginning.',
    author: 'T.S. Eliot',
  },
  {
    quote:
      'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Zig Ziglar',
  },
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: 'Dr. Seuss',
  },
  {
    quote: 'Nothing in life is to be feared, it is only to be understood.',
    author: 'Marie Curie',
  },
  {
    quote:
      'The best way to find yourself is to lose yourself in the service of others.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The only time you fail is when you fall down and stay down.',
    author: 'Stephen Richards',
  },
  {
    quote: "Life is short, and it's up to you to make it sweet.",
    author: 'Sarah Louise Delany',
  },
  {
    quote: "Opportunities don't happen, you create them.",
    author: 'Chris Grosser',
  },
  {
    quote:
      'I am not a product of my circumstances. I am a product of my decisions.',
    author: 'Stephen R. Covey',
  },
  {
    quote: 'The best revenge is massive success.',
    author: 'Frank Sinatra',
  },
  {
    quote: 'We may encounter many defeats but we must not be defeated.',
    author: 'Maya Angelou',
  },
  {
    quote:
      "It's not the years in your life that count. It's the life in your years.",
    author: 'Abraham Lincoln',
  },
  {
    quote: "If you're going through hell, keep going.",
    author: 'Winston Churchill',
  },
]

Quote.deleteMany({})
  .then(() => {
    console.log('All existing quotes removed')
    return Quote.insertMany(quotes)
  })
  .then(() => {
    console.log('Database populated with new quotes')
    mongoose.connection.close()
  })
  .catch((err) => {
    console.error('Error populating database: ', err)
  })
