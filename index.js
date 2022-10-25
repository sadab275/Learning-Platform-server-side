const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


const categories = require('./data/categories.json');
const courses = require('./data/categories.json');



app.get('/', (req, res) => {
    res.send('Courses Api Running');
});
app.get('/courses-categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryCourses = courses.filter(c => c.id == id);
    res.send(categoryCourses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(course => course.id == id);
    res.send(selectedCourses);
    console.log(req.params.id);
})

app.listen(port, () => {
    console.log('Programming Courses Server running on port', port);
})