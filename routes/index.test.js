var app = require('../app')
var request = require('supertest')
require('../server')

beforeAll(() => jest.setTimeout(30000))

test('Test if App is up', async () => {
	await request(app)
		.get('/testapp')
		.expect(200)
		.then(response => {
			expect(response.body.version).toBe('0.1')
			expect(response.body.result).toBe('success')
			expect(response.body.appname).toBe('Vite Jai Faim!!')
		})
})

// test('Test recap orders for a customer', async () => {
// 	await request(app)
// 		.get('/users/me/123')
// 		.expect(200)
// 		.then(response => {
// 			expect(response.body.result).toBe('success')
// 		})
// })

describe('PUT /users/update-diet', function () {
	it('should send the updated diet', function (done) {
		request(app)
			.put('/users/update-diet')
			.send({ token: 'qLQsu82uPc73fg9mRyiNTOMUplZKLb5Q', diet: 'vegan' })
			.expect(200)
			.expect({ result: true, newDiet: 'vegan' })
			.end(function (err, res) {
				if (err) return done(err)
				return done()
			})
	})
})

test('GET users/myDonts/:token', async () => {
	await request(app)
		.get('/users/myDonts/qLQsu82uPc73fg9mRyiNTOMUplZKLb5Q')
		.expect(200)
		.then(response => {
			expect(Array.isArray(response.body.donts)).toBeTruthy()
		})
})
