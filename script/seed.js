'use strict'

const db = require('../server/db')
const {User, Item, Order, OrderItem} = require('../server/db/models')

const users = [
  {email: 'cody@email.com', password: '123', isAdmin: true},
  {email: 'murphy@email.com', password: '123', isAdmin: false}
]

const items = [
  {
    category: 'Funny',
    name: 'Brad',
    imageUrl: 'https://i.imgur.com/BcGBevT.jpg',
    price: '1.00',
    quantity: 5,
    description: `When you say "Jump!", I'll say "How high?" and when you say "3 feet", I'll reply with "That's too high, I don't jump that high."`
  },
  {
    category: 'Romantic',
    name: 'Bob',
    imageUrl: 'https://i.imgur.com/U6Hundu.jpg',
    price: '300.00',
    quantity: 50,
    description: 'tbh I just want to get some free chipotle out of this'
  },
  {
    category: 'Romantic',
    name: 'Coolguy7657',
    imageUrl: 'https://i.imgur.com/1DU1fiC.png',
    price: '300.00',
    quantity: 50,
    description: 'let me entice you with my luscious locks'
  },
  {
    category: 'Romantic',
    name: 'DogLover3092',
    imageUrl:
      'https://cdn2.littlethings.com/app/uploads/2017/05/cute-dog-golden-retriever-600x600.jpg',
    price: '5.00',
    quantity: 50,
    description:
      'Recently single dog dad looking for someone to give all my doggos the pets'
  },
  {
    category: 'Romantic',
    name: 'LINDA',
    imageUrl: 'https://i.imgur.com/fVPQa7S.jpg',
    price: '5.00',
    quantity: 50,
    description: `I heard you like bad girls - well I'm bad at everything so you're in luck`
  },
  {
    category: 'Funny',
    name: 'FunLovin43890',
    imageUrl: 'https://i.imgur.com/pd37eEc.jpg',
    price: '5.00',
    quantity: 50,
    description:
      'Free spirit trapped in the golden handcuffs of my corporate job'
  },
  {
    category: 'Serious',
    name: 'Rocky',
    imageUrl: 'https://i.imgur.com/nuvXJy1.jpg',
    price: '5.00',
    quantity: 50,
    description: `I am taller than 6 foot`
  },
  {
    category: 'Funny',
    name: 'Starlight',
    imageUrl: 'https://i.imgur.com/7LWbTUV.jpg',
    price: '5.00',
    quantity: 50,
    description: `For our first date, I'll take you to this non-GMO, cage-free quinoa bar. Everything there is quinoa: the food, the drinks, the silverware, the staff. The place has those dimly lit Thomas Edison bulbs that make it so hard to even read the menu.`
  },
  {
    category: 'Romantic',
    name: 'Ron',
    imageUrl: 'https://i.imgur.com/hv3EzJt.jpg',
    price: '8.00',
    quantity: 5,
    description: `They say you are what you eat, but I don't remember eating a LEGEND`
  },
  {
    category: 'Funny',
    name: 'Daniel',
    imageUrl: 'https://i.imgur.com/lYinfrd.jpg',
    price: '5.00',
    quantity: 50,
    description: `"Five out of five stars - would totally reccomend" - girl who swiped right a few months ago`
  },
  {
    category: 'Serious',
    name: 'Ruby',
    imageUrl: 'https://i.imgur.com/rOoBCvM.jpg',
    price: '5.00',
    quantity: 50,
    description: 'I will [git] commit to you for the rest of my life!'
  },
  {
    category: 'Funny',
    name: 'Ginger',
    imageUrl: 'https://i.imgur.com/GqOLQkz.jpg',
    price: '5.00',
    quantity: 50,
    description: `Can't take me to the movies cuz they don't allow snacks`
  },
  {
    category: 'Funny',
    name: 'Greg',
    imageUrl: 'https://i.imgur.com/0M7xpLb.jpg',
    price: '5.00',
    quantity: 50,
    description: 'Just here in the NYC for a few days - only hook-ups plz'
  }
]

const orders = [
  {
    isPurchased: true,
    userId: 1
  },
  {
    isPurchased: false,
    userId: 1
  },
  {
    isPurchased: true,
    userId: 2
  },
  {
    isPurchased: false,
    userId: 2
  }
]

const orderItems = [
  {
    orderId: 1,
    itemId: 1,
    price: '10',
    quantity: 1
  },
  {
    orderId: 2,
    itemId: 1,
    price: '10',
    quantity: 1
  },
  {
    orderId: 3,
    itemId: 1,
    price: '10',
    quantity: 1
  },
  {
    orderId: 4,
    itemId: 1,
    price: '10',
    quantity: 1
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${users.length} users`)

  await Promise.all(items.map(item => Item.create(item)))
  console.log(`seeded ${items.length} items`)

  await Promise.all(orders.map(order => Order.create(order)))
  console.log(`seeded ${orders.length} orders`)

  await Promise.all(orderItems.map(orderItem => OrderItem.create(orderItem)))
  console.log(`seeded ${orderItems.length} orderItems`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
