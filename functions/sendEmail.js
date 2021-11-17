const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const sendEmail = async options => {
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: EMAIL_USERNAME,
			pass: EMAIL_PASSWORD,
		},
	})

	const mailOptions = {
		from: "Vite j'ai faim <0c0a73f715-5aadc8@inbox.mailtrap.io>",
		to: options.email,
		subject: options.subject,
		text: options.message,
		// html:
	}
	await transporter.sendMail(mailOptions)
}

module.exports = sendEmail
