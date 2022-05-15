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


app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});