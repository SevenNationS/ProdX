const express = require('express');
const connectDB = require('./config/db')
const app = express();

// npm run server


// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API..' }))
// app.get('/', (req, res) => res.send('Hello World'))


app.get('/help', (req, res) => res.sendFile('D:/Dokumenty vol.2/Projekty/ReactUdemy/contact-keeper/help.html'))


app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'))


const PORT = process.env.PORT || 5007;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));