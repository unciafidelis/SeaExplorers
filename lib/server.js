const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const MemberService = require("./../lib/services/MemberService");
const OrganizerService = require("./../lib/services/OrganizerService");
const EventService = require("./../lib/services/EventService");

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get("/members", async (req, res) => {
    const allMembers =  await MemberService.getAllMembers();
    res.json(allMembers);
});

app.get("/members/:id", async (req, res) => {
    const id = req.params.id;
    const member = await MemberService.getMember(id);
    res.json(member);
});

app.post("/members", async (req, res) => {
    const member = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    await MemberService.newMember(member);   
    const message = "Member creado.";
    return res.json({message});
});

app.put("/members/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const username = req.body.username;
    await MemberService.updateMember(id,username)
    return res.json({message: "Actualizado correctamente"});
});

app.delete("/members/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await MemberService.deleteMember(id);
    return res.json({message: "Eliminado correctamente"});
});

app.get("/organizers", async (req, res) => {
    const allOrganizers =  await  OrganizerService.getAllOrganizers(); 
    res.json(allOrganizers);
});

app.get("/organizers/:id", async (req, res) => {
    const id = req.params.id;
    const Organizer = await OrganizerService.getOrganizer(id)
    res.json(Organizer);
});

app.post("/organizers", async (req, res) => {
    const Organizer = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    await OrganizerService.newOrganizer(Organizer);
    const message = "Organizer creado.";
    return res.json({message});
});

app.put("/organizers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const username = req.body.username;
    await OrganizerService.updateOrganizer(id, username);
    return res.json({message: "Actualizado correctamente"});
});

app.delete("/organizers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    await OrganizerService.deleteOrganizer(id); 
    return res.json({message: "Eliminado correctamente"});
});

app.get("/events", async (req, res) => {
    const allEvents =  await EventService.getAllEvents(); 
    res.json(allEvents);
});


app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});