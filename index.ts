import * as Express from "express";

const app = Express();

app.get('/test', (req, res, next) => {
  console.log(process.env.TEST_KEY_FOR_PIPELINE);
  res.json({
      hello: 'world'
  });
});

const port = parseInt(process.env.PORT);

app.listen(port, () => {
  console.log('App started', port);
});