import fs from "fs";
const FILE = "data.json";

const DATA =[];

function SalvarData (){
    const text = JSON.stringify(DATA);
    fs.writeFileSync("DATA.json", text, {encoding: "utf-8*"});
}

function readData(){
    if (!fs.existsSync(FILE)) return;
    const blob = fs.readFileSync(FILE, {encoding: "utf-8*"});
    const text = blob.toString();
    DATA = JSON.parse(text);
}


export function inserirData (registro){
    DATA.push();
    SalvarData(); 
}
