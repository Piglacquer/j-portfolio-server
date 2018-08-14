const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('yo Im working')
})

app.listen(3000, () => console.log('im listening'))