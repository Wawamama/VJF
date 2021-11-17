// Configuration Expres Server

require('./config/connexion')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')
const ip = require('ip')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server running on port ' + PORT))
