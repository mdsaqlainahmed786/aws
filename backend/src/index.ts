import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/find-sum", (req, res) => {
    const {a, b} = req?.query
    const sum = parseInt(a as string) + parseInt(b as string)
    res.send({ result: sum })
})

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000")
})