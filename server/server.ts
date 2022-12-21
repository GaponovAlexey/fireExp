var log4js = require("log4js")
var logger = log4js.getLogger()
logger.level = "debug"

import express, { Request, Response } from "express"
const app = express()
app.use(express.json()) // Для req.body.data
const port = 3001
import { db } from "../firebase"

app.get("/", (req: Request, res: Response) => {
  const docRef = db.collection("users").onSnapshot((sn) => {
    return sn.docs.forEach((el) => el.data())
  })

  logger.debug(JSON.stringify(docRef.toString))

  res.json({
    topic: "test-channel",
    messages: [{ value: docRef }],
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
