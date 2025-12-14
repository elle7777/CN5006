const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1/27017";
const db = mongoose.connection;
mongoose.connect(uri);

db.on("error", function (err) {
    console.log("An error occurred: " + err);
});

db.once("connected", function () {
    console.log("Connetterd to " + uri);
});

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    Gender: String,
    Salary: Number,
});

const person_doc = mongoose.model("Person", personSchema);

const doc1 = new person_doc({
    name: "Jacky",
    age: 30,
    Gender: "male",
    Salary: 3400,
});

/*const Save = new Promise((resolve, reject) => {
    try{
        doc1.save();
        resolve('The Document was saved');
    }
    catch(err)
    {
        reject('Error: ' + err.message);
    }
})*/

//Save.then((val) => console.log(val));
//Save.catch((val) => console.log(val));

manypersons = [
    { name: "Simon", age: 42, Gender: "Male", Salary: 3456 },
    { name: "Neesha", age: 23, Gender: "Female", Salary: 1000 },
    { name: "Mary", age: 27, Gender: "Female", Salary: 5402 },
    { name: "Mike", age: 40, Gender: "Male", Salary: 4519 },
];

/*person_doc
    .insertMany(manypersons)
    .then(() => {
        console.log("Many Documents were saved");
    })
    .catch((err) => {
        console.log("Error: " + err.message);
    });
*/

/*person_doc.find().limit(10).then((doc) => {
    console.log('Query 1: Successfull');
    doc.forEach((item, doc) => {
        console.log('name: ' + item.name + ' age: ' + item.age);
    })
}).catch((err) => {
    console.log('Query 1: Failed: ' + err.message);
})*/

/*person_doc.find().sort({Salary: 1}).select('name age Salary').limit(10).then((doc) => {
    console.log('Query 2: Successfull');
    doc.forEach((item) => {
        console.log('name: ' + item.name + ' age: ' + item.age + ' salary: ' + item.Salary);
    })
}).catch((err) => {
    console.log('Query 2: Failed: ' + err.message);
})*/

let givenAge = 20;

/*person_doc
    .find({ Gender: "Female", age: { $gte: givenAge } })
    .then((doc) => {
        console.log("Query 3: Successfull");
        doc.forEach((item) => {
            console.log(
                "name: " +
                    item.name +
                    " age: " +
                    item.age +
                    " gender " +
                    item.Gender
            );
        });
    })
    .catch((err) => {
        console.log("Query 3: Failed: " + err.message);
    });

console.log("test");*/

/*person_doc.countDocuments().then((count) => {
    console.log('Total Documents: ' + count);
}).catch((err) => {
    console.log('Error: ' + err.message);
})*/

/*person_doc.deleteMany({age: {$gte: 25}}).then(() => {
    console.log('Deleted Ages over 24');
}).catch((err) => {
    console.log('Error: ' + err.message);
})*/

person_doc
    .updateMany({ Gender: "Female" }, { Salary: 5555 })
    .then(() => {
        console.log("Update Successfull");
    })
    .catch((err) => {
        console.log("Update Failed: " + err.message);
    });

person_doc
    .find()
    .then((doc) => {
        console.log("Query 4: Successfull");
        doc.forEach((item) => {
            console.log(
                "name: " +
                    item.name +
                    " age: " +
                    item.age +
                    " salary: " +
                    item.Salary
            );
        });
    })
    .catch((err) => {
        console.log("Error: " + err.message);
    });
