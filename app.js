// getting-started.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your entry!']
    },

    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });

// schema for people


const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Missing one."
});

// fruit.save()


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema)

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

pineapple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});
person.save();


// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });


Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err)
    } else {
        // console.log(fruits)
        // mongoose.connection.close()

        setTimeout(function () {
            mongoose.disconnect();
        }, 1000);

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({
//     _id: "61c73ca0e75e0f13afb62890"
// }, {
//     name: "Peach"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document.");
//     }
// })

// Delete one

// Fruit.deleteOne({
//         name: "Peach"
//     },
//     function (err) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("Successfully deleted the document")
//         }
//     })
// Delete many

// Person.deleteMany({
//         name: "John"
//     },
//     function (err) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("Successfully deleted all the document")
//         }
//     })