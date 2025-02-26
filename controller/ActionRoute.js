const express = require('express');
const app = express.Router();
const CurrentDir = `${__dirname}/src/`;
const Database = require(`../Connector/queries.js`)

// sending data titles to the client
app.post('/gettitles', (req, res)=>{
    var AccountID = req.body.AccountID;
    var Email = req.body.Email;
    Database.Query(AccountID, Email, res);
})

// saving the data title to the database
app.post('/savedata', (req, res)=>{
    var Name = req.body.Name;
    var AccountID = req.body.AccountID;
    var Email = req.body.Email;
    var Title = req.body.Title;
    var Data = req.body.Data;
    var Password = req.body.Password;
    var Date = req.body.Date;
    Database.SaveData(Name, AccountID, Email, Title, Data, Password, Date, res);
})

// sending specific data to the client
app.post('/getdatainfo', (req, res)=>{
    var Title = req.body.Title;
    var Email = req.body.Email;
    Database.GetData(Title, Email, res);
});

// deleting the data title from the database
app.post('/deletedata', (req, res)=>{
    var Title = req.body.Title;
    var Account_ID = req.body.Account_ID;
    Database.DeleteData(Title, Account_ID, res);
})

// sending the 404 page
app.get('*', (req, res)=>{
    res.status(404).render('404', {title: '404 : Page Not Found', exit:'Go To Home', routes:'/'});
})

// exporting the module
module.exports = app