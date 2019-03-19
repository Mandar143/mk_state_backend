//import express from 'express';
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Issue = require("./models/issue");
var State =require("./models/state");
var Country = require("./models/country");
var District = require("./models/district");
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
var db=mongoose.connect('mongodb://localhost:27017/issues');

const connection = mongoose.connection;
connection.once('open', () => {
console.log('MongoDB connection established successfully!!!');
});

app.get(
    '/states',
    (req, res) => {
// router.route('/states').get((req,res)=>{
    connection.collection('state').find().toArray(function (err, result) {
        if (err) throw err
        else {
            console.log(result);
            
            if (result) {
                res.json(result)
            }

        }
        //connection.close() 
    })

});


app.post(
    '/districts',
    (req, res) => {
        console.log(req.body);
        
// router.route('/states').get((req,res)=>{
    connection.collection('districts').find({'stateid':req.body.stateid}).toArray(function (err, result) {
        if (err) throw err
        else {
            console.log(result);
            
            if (result) {
                res.json(result)
            }

        }
        //connection.close() 
    })

});
// router.route('/districts').get((req,res)=>{
//     District.find((err,districts)=>{
//       //  District.findById(req.params.stateid, (err, district) => {
//     if(err)
//     console.log(err);
//     else
//     //console.log(districts);
//     res.json(districts);   
//     });

// });

// router.route('/districts/:stateid').get((req,res)=>{
//    // res.write(req.body.stateid);
//    //var id=event.target.value;
//     District.find(req.body.stateid, (err, district) => {
//     if(err)
//     console.log(err);
//     else
//    console.log(district);
//    // res.json(district);   
//     });
// });


// router.route('/issues/:id').get((req, res) => {

//     Issue.findById(req.params.id, (err, issue) => {
//         if(err)
//             console.log(err);
//            else
//             res.json(issue); 
//     });
// });
// router.route('/countries').post((req,res)=>{
//     Country.find((err,countries)=>{
//     if(err)
//     console.log(err);
//     else
//     //console.log(countries);
//     res.json(countries);   
//     });

// });

// router.route('/issues').get((req, res) => {

//     Issue.find((err, issues) => {

//         if(err)
//             console.log(err);
//         else
//             res.json(issues);    
//     });

// });



// router.route('/issues/add').post((req, res) => {
//     console.log(req.body);
    
//     let issue = new Issue(req.body);
//     issue.save()
//         .then(issue =>{
//             res.status(200).json({'issue': 'Added Successfully'});
//         })

//         .catch(err => {
//                 res.status(400).send('Failed to create new record');
//         });
// });
app.post(
    '/states/add',
    (req, res) => {
        console.log(req.body);

    connection.collection('state').insert(req.body ,function (err, result) {
        if (err) throw err
        else{
           // console.log(result)    
            if (result) {
                console.log(result)
                    custRes = {
                                sts: 200,
                                msg: 'Successful',
                                res: result
                        }                     
            }
            else{
                console.log(err)
                custRes = {
                            sts: 400,
                            msg: 'error',
                            res: 0
                        }                                       
            }

        }
        res.json(custRes)
    }) 
});

// router.route('/issues/update/:id').post((req, res) => {
//     Issue.findById(req.params.id, (err, issue) => {
//         if (!issue)
//             return next (new Error('Could not load document'));
//          else{
//             issue.title = req.body.title;
//             issue.responsible = req.body.responsible;
//             issue.description = req.body.description;
//             issue.severity = req.body.severity;
//             issue.status = req.body.status;

//             issue.save().then(issue => {
//                 res.json('Update Done');

//             }).catch(err => {
//                 res.status(400).send('Update Failed');
//             });
//         }    
//     });
// });

// router.route('/issues/delete/:id').get((req, res) => {

//     Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
//         if(err)
//         res.json(err);
//         else
//         res.json('Remove Successfully!!!');
//     })
// })

app.use('/', router);

//app.get('/', (req, res) => res.send("Hello world!!"));
app.listen(4000, () => console.log('Express Server running on 4000'));