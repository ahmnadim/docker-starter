const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    return res.status(200).json({status: 'success', msg: "done"})
})


app.listen(4000, () => {
    console.log("server running on port 4000")
})