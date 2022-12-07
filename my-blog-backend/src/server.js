import express, { response } from "express";
import { db, connectToDb } from './db.js'

const app = express();
app.use(express.json());

app.get('/api/articles/:name',async (req, res) => {
  const { name } = req.params;

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

app.put('/api/articles/:name/upvote', async (req, res) => {
  const { name } = req.params;
  
  await db.collection('articles').updateOne({ name }, { 
    $inc: { upvotes: 1 },
  });

  const article = await db.collection('articles').findOne({ name });

  if(article) {
    res.send(`The ${name} article now has ${article.upvotes} upvotes`)
  } else  {
    req.send('The article doesn\'t exist');
  };
});

app.post('/api/articles/:name/comments', async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  
  await db.collection('articles').updateOne({ name }, {
    $push: { comments: { postedBy, text } },
  });

  const article = await db.collection('articles').findOne({ name });

  if(article) {
    res.send(article.comments);
  } else {
    res.send('The article doesn\'t exist')
  }
});

connectToDb(() => {
  console.log("Successfully connected to database")
  app.listen(8000, () => {
    console.log('Server is listening on port 8000');
  });
});
