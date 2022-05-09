"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
mongoose_1.default.connect("mongodb+srv://admin:Test123@festivalapp.oheeh.mongodb.net/FestivalDB?retryWrites=true&w=majority");
const connection = mongoose_1.default.connection;
app.get("/", [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Request!!!");
    const collection = connection.db.collection("Festival");
    const festivals = yield collection.find({}).toArray();
    // const festivals = await Festival.find({});
    return res.send(festivals);
}));
app.listen(process.env.PORT || 3000, () => {
    console.log("server running");
});
const festivalSchema = new mongoose_1.default.Schema({
    name: String,
    startDate: String,
    endDate: String,
    place: String,
    latitude: Number,
    longitude: Number,
    price: Number,
    ticketCountAvailable: Number
});
const Festival = mongoose_1.default.model("Festival", festivalSchema);
