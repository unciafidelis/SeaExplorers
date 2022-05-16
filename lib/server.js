const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const MemberController = require("./../lib/controllers/MemberController");
const OrganizerController = require("./../lib/controllers/OrganizerController");
const EventController = require("./../lib/controllers/EventController");

//CORS
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:8080"
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get("/members", async (req, res) => {
    const allMembers =  await MemberController.getAllMembers();
    res.json(allMembers);
    console.log("Se esta llamando")
});

app.get("/members/:id", async (req, res) => {
    const id = req.params.id;
    const member = await MemberController.getMember(id);
    res.json(member);
});

app.post("/members", async (req, res) => {
    const member = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    await MemberController.newMember(member);   
    const message = "Member creado.";
    return res.json({message});
});

app.put("/members/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const username = req.body.username;
    await MemberController.updateMember(id,username)
    return res.json({message: "Actualizado correctamente"});
});

app.delete("/members/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await MemberController.deleteMember(id);
    return res.json({message: "Eliminado correctamente"});
});

app.get("/organizers", async (req, res) => {
    const allOrganizers =  await  OrganizerController.getAllOrganizers(); 
    res.json(allOrganizers);
});

app.get("/organizers/:id", async (req, res) => {
    const id = req.params.id;
    const Organizer = await OrganizerController.getOrganizer(id)
    res.json(Organizer);
});

app.post("/organizers", async (req, res) => {
    const Organizer = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    await OrganizerController.newOrganizer(Organizer);
    const message = "Organizer creado.";
    return res.json({message});
});

app.put("/organizers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const username = req.body.username;
    await OrganizerController.updateOrganizer(id, username);
    return res.json({message: "Actualizado correctamente"});
});

app.delete("/organizers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await OrganizerController.deleteOrganizer(id); 
    return res.json({message: "Eliminado correctamente"});
});

app.get("/events", async (req, res) => {
    const allEvents =  await EventController.getAllEvents(); 
    res.json(allEvents);
});

app.get("/events/:id", async (req, res) => {
    const id = req.params.id;
    const Event = await EventController.getEvent(id); 
    res.json(Event);
});

app.post("/events", async (req, res) => {
    const Event = {
        name: req.body.name,
        activity: req.body.activity,
        location: req.body.location,
        type: req.body.type,
        personQuota: req.body.personQuota,
        organizer: req.body.organizer
    };
    await EventController.newEvent(Event);
    const message = "Event creado.";
    return res.json({message});
});

app.put("/events/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const activity = req.body.activity;
    await EventController.updateEvent(id, activity);
    return res.json({message: "Actualizado correctamente"});
});

app.delete("/events/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await EventController.deleteEvent(id)
    return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});