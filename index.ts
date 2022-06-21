import express, {Request, Response} from "express";
import { json } from "body-parser";
import mongoose, { Mongoose } from "mongoose"
import cors from "cors";

const ObjectID = mongo.ObjectID;


const app = express();
app.use(json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:Test123@festivalapp.oheeh.mongodb.net/FestivalDB?retryWrites=true&w=majority");
const connection = mongoose.connection

app.get("/", [], async (req: Request, res: Response) => {
    console.log("Request!!!");
    const collection = connection.db.collection("Festival");
    
    const festivals = await collection.find({}).toArray()
    return res.send(festivals)
})

app.get("/:id", [], async (req: Request, res: Response) => {
    console.log("Request!!!");
    const collection = connection.db.collection("Festival");
    const festival = await collection.find({_id: req.params.id}).toArray();
    return res.send(festival[0])
})

app.post("/createFestival", [], async (req: Request, res: Response) => {
    console.log("Request!!!");
    const collection = connection.db.collection("Festival");
    console.log(req.body);
    const startDateMongo = new Date(req.body.startDate);
<<<<<<< HEAD
    const endDateMongo = new Date(req.body.endDate);
    const objectId = new ObjectID();
    await collection.insertOne({_id: objectId, name: req.body.name, startDate: startDateMongo, endDate: endDateMongo, place: req.body.place, latitude: req.body.latitude, longitude: req.body.longitude, price: req.body.price, ticketCountAvailable: req.body.ticketCountAvailable})
=======
    const endDateMongo = new Date(req.body.endDate)
    await collection.insertOne({name: req.body.name, startDate: startDateMongo, endDate: endDateMongo, place: req.body.place, latitude: req.body.latitude, longitude: req.body.longitude, price: req.body.price, ticketCountAvailable: req.body.ticketCountAvailable})
>>>>>>> parent of bbf44bf... objectid
    return res.send()
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
})

const festivalSchema = new mongoose.Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    place: String,
    latitude: Number,
    longitude: Number,
    price: Number,
    ticketCountAvailable: Number
})

const Festival = mongoose.model("Festival", festivalSchema);
