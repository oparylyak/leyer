let express = require('express');
let app = express();
let mongojs = require('mongojs');
let db = mongojs('todo',['todo']);
let bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/taskList', function(req, res) {
    console.log("I receive a GET request")

    db.todo.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
    // let task1 = {
    //     id: 'cnls1',
    //     definition: 'Create new log screen',
    //     endDate: 1434699111210,
    //     startDate: 1434599111210,
    //     resolved: true,
    //     explanation: 'you need to create ...log screen'
    // };
    // let task2 = {
    //     id: 'cnhp2',
    //     definition: 'Create new Home page',
    //     endDate: 1434499111210,
    //     startDate: 1433699111210,
    //     resolved: true,
    //     explanation: 'you need to create ...Home Page'
    // };
    // let todo = [task1, task2];
    // res.json(todo);
});

app.post('/createTask',function (req,res) {
    console.log(req.body);
    db.todo.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.delete('/taskList/:id', function (req, res) {
    let id = req.params.id;
    console.log(id);
    db.todo.remove({_id:mongojs.ObjectId(id)}, function (err,doc){
        res.json(doc);
    });
});

// app.get('/taskList/:id', function(req, res){
//     let id = req.params.id;
//     console.log(id);
//     db.todo.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
//         res.json(doc);
//     });
// });

app.put('/taskList/:id', function (req, res) {
    let id = req.params.id;
    console.log(req.body.definition);
    db.todo.findAndModify({query:{_id: mongojs.ObjectId(id)},
        update: {$set:{definition:req.body.definition, explanation:req.body.explanation, resolved:req.body.resolved}},
        new: true}, function (err,doc) {
        res.json(doc);
    });
});

    app.listen(3000);
    console.log("Server running on port 3000");
