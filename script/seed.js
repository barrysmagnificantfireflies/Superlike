'use strict'

const db = require('../server/db')
const {User, Item, Order, OrderItem} = require('../server/db/models')

const users = [
  {email: 'cody@email.com', password: '123', isAdmin: true},
  {email: 'murphy@email.com', password: '123', isAdmin: false}
]

const items = [
  {
    category: 'Romantic',
    name: 'Count Chocula',
    price: '1.0',
    quantity: 5,
    description: 'Likes chocolate'
  },
  {
    category: 'Funny',
    name: 'Count Chocula2',
    price: '2.0',
    quantity: 5,
    description: 'Likes chocolate'
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
