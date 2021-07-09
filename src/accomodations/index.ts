import express, { response } from "express"
import Accomodations from "../schema/index"

const accomodationsRouter = express.Router()

accomodationsRouter.get('/', async (req, res) => {
    const accomodation = await Accomodations.find()
   
    res.status(200).send(accomodation)
})

accomodationsRouter.post("/", async (req, res) => {
    const accomodation = new Accomodations(req.body)
    await accomodation.save()

    res.status(201). send(accomodation)
})

accomodationsRouter.get("/:id", async (req, res) => {
    const accomodation = await Accomodations.findById(req.params.id)
    res.status(200).send(accomodation)
})


export default accomodationsRouter;