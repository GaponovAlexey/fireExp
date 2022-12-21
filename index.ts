var log4js = require("log4js")
var logger = log4js.getLogger()
logger.level = "debug"

import express, { Request, Response } from "express"
const app = express()
app.use(express.json()) // Для req.body.data
const port = 3001
import { db } from "./firebase"

app.get("/", (req: Request, res: Response) => {
  const docRef = () => {
    const top = db.collection("users")
    top.onSnapshot((snap) => {
      const data = snap.docs.map((story) => {
        const data = story.data()
        data["id"] = story.id
        logger.debug(data)
        return data
      })
      return data
    })
  }
  logger.debug(docRef())

  res.json({
    topic: "test-channel",
    messages: [{ value: docRef() }],
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
