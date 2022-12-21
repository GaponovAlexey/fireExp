console.log("start")
// import { db } from "./firebase"
// import  "dotenv"
require("dotenv").config({
  debug: true,
})

console.log("key", process.env.FIREBASE_API_KEY)

// const docRef = async () => {
//   const res = await db.collection("users").get()
//   console.log("res", res)

// }
// docRef()

console.log("end")
