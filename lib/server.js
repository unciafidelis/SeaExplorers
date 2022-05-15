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


app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});