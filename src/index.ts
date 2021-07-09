import express from 'express'
import cors from "cors"
import accomodationRouter from "./accomodations/index"
import listEndpoints from 'express-list-endpoints'
import moongose from 'mongoose'

process.env.TS_NODE_DEV && require("dotenv").config()

const server =  express()

server.use(express.json())
server.use(cors())

const testRouter = express.Router()

testRouter.get('/', (req, res) => {
    res.status(200).send({ text: "Test success" })
})

server.use('/test', testRouter)
server.use("/accomodations", accomodationRouter)

console.table(listEndpoints(server))

import list from "express-list-endpoints"
import mongoose from "mongoose"


// import dotenv from "dotenv"
// dotenv.config()

process.env.TS_NODE_DEV && require("dotenv").config()

const port = process.env.PORT || 3030

// const { ATLAS_URL } = process.env

// if (!ATLAS_URL) throw new Error("No Atlas URL specified")

mongoose
    .connect(process.env.ATLAS_URL!, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to mongo")
        // Listen using the httpServer -
        // listening with the express instance will start a new one!!
        server.listen(port, () => {
            console.log(list(server))
            console.log("Server listening on port " + port)
        })
    })


export default server