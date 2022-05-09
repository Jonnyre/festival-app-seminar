import express, {Request, Response} from "express";
import { json } from "body-parser";
import mongoose from "mongoose"

const app = express()
app.use(json())

mongoose.connect("mongodb+srv://admin:Test123@festivalapp.oheeh.mongodb.net/FestivalDB?retryWrites=true&w=majority");
const connection = mongoose.connection

app.get("/", [], async (req: Request, res: Response) => {
    console.log("Request!!!");
    const collection = connection.db.collection("Festival");
    const festivals = await collection.find({}).toArray()
    // const festivals = await Festival.find({});
    return res.send(festivals)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
})

const festivalSchema = new mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    place: String,
    latitude: Number,
    longitude: Number,
    price: Number,
    ticketCountAvailable: Number
})

const Festival = mongoose.model("Festival", festivalSchema);
