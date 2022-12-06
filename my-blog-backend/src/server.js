import express, { response } from "express";
import { MongoClient } from 'mongodb'

const app = express();
app.use(express.json());

app.get('/api/articles/:name',async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient('mongodb://127.0.0.1:27017');
  await client.connect();

  const db = client.db('react-blog-db');

  const article = await db.collection('articles').findOne({ name });

  if(article) {
    res.json(article);
  } else {
    res.sendStatus(404).send('Article Not Found');
  };

});

// app.post('/hello', (req, res) => {
//   console.log(req.body);
//   res.send(`Hello, ${req.body.name}!`);
// });

// app.get('/hello/:name', (req, res) => {
//   const { name } = req.params; //const name = req.params.name
//   res.send(`Hello, ${name}!!`);
// })

// let articlesInfo = [{
//   name: 'Machu-Picchu',
//   upvotes: 0,
//   comments: [],
// }, {
//   name: 'Chichen-Itza',
//   upvotes: 0,
//   comments: [],
// }, {
//   name: 'The-Great-Wall',
//   upvotes: 0,
//   comments: [],
// }, {
//   name: 'Petra',
//   upvotes: 0,
//   comments: [],
// }, {
//   name: 'Christ-the-Redeemer',
//   upvotes: 0,
//   comments: [],
// }, {
//   name: 'Taj-Mahal',
//   upvotes: 0,
//   comments: [],
// }, {
//   name: 'Colosseum',
//   upvotes: 0,
//   comments: [],
// }]

app.put('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find(a => a.name === name);

  if(article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes`)
  } else  {
    req.send('The article doesn\'t exist');
  };
});

app.post('/api/articles/:name/comments', (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const article = articlesInfo.find(a => a.name === name);

  if(article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send('The article doesn\'t exist')
  }
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
