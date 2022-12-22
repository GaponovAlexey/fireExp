import express, { Request, Response } from "express"
var log4js = require("log4js")
var logger = log4js.getLogger()
logger.level = "debug"

const app = express()

const admin = require("firebase-admin")
var serviceAccount = require("./key.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yoursuccess-e1c07-default-rtdb.firebaseio.com",
})
const db = admin.firestore()
app.use(express.json()) // Для req.body.data
const user = db.collection("users").get()
logger.debug("DEBUG2")

// app.use(express.urlencoded({ extended: true }))

const port = 3000

app.get("/", async (req: Request, res: Response) => {
  const getUsers = async () => {
    const res = await user
    return res.docs.map((e: any) => ({ ...e.data(), id: e.id }))
  }
  getUsers().then((e) => {
    res.json({
      topic: "test-channel",
      messages: [{ value: e[0].name }],
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
