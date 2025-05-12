const mongoose = require("mongoose");
const app = require("express");

app.use(express.static(__dirname +"/public"));

app.use(express.json());

app.set("view engine","ejs");

app.use((req,res,next)=> {
    console.log(`${req.method}: ${req.path}`);
    next();
});
 
const stylesSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        image:{type:String,required:true},
        cost:{type:Number,required:true},
        timeLength:{type:Number,require:true},
    }
);
const Style = mongoose.model("Style", stylesSchema, "Styles");

app.get("/", async (req,res)=>{
    const styles = await Style.find({});
    res.json(styles)
})
app.delete("/delete/style/:_id",async(req,res)=>{
const response = await Style.findOneAndDelete({_id:req.params._id})
res.json(response)
})
app.patch("patch/styles/:_id/", async (req,res)=>{
const response = await Style.findOneAndUpdate({id:req.params._id},req.body)
res.json(response)
})

app.post("/style/save", async (req, res) => {
const styles = await new Style ({
name: req.body.username,
image:req.body.username,
cost:req.body.cost,
timeLength:req.body.timeLength
}).save()
res.json(styles);
});

const AppointmentsSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        location:{type:String,required:true},
        date:{type:Number,required:true},
        time:{type:Number,require:true},
        number:{type:Number,required:true}
    }
);
const Appointments = mongoose.model("Appointment", stylesSchema, "Appointments");

app.get("/", async (req,res)=>{
    const Appointment = await Appointments.find ({});
    res.json(Appointment)
})

app.delete("/delete/style/:_id",async(req,res)=>{
const response = await Appointments.findOneAndDelete({_id:req.params._id})
res.json(response)
})
app.patch("patch/styles/:_id/", async (req,res)=>{
const response = await Appointments.findOneAndUpdate({id:req.params._id},{time:time.body.time})
res.json(response)
})

app.post("/appointments/save", async (req, res) => {
const appointments = await new Appointments ({
name: req.body.name,
location:req.body.location,
time:req.body.time,
number:req.body.number,
date:req.body.date
}).save()
res.json(appointments);
});


async function startServer(){
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.15rhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    app.listen(3000,() =>{
        console.log(`Server running.`);
    });
}
startServer();