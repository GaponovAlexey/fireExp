import { initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
require('dotenv').config()

//deb
var log4js = require("log4js")
var logger = log4js.getLogger()
logger.level = "debug"

logger.debug("DEBUG")

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTHOR_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MES_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEAS_ID,
}
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
