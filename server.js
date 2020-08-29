const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const Twit = require('twit');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const T = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Sever is running on port: ${port} `);
});

app.get('/recentTweets', async (req, res) => {
  const { query, count } = req.query;

  if (!query) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Query',
    });
  }

  const params = {
    q: query,
    count,
    result_type: 'recent',
    lang: 'en',
  };

  const {
    data: { statuses },
  } = await T.get('search/tweets', params);

  const tweets = statuses.map((status) => {
    const {
      id,
      created_at,
      text,
      user: { profile_image_url_https, screen_name },
    } = status;

    let time = created_at
      .split(' ')
      .filter((e, i) => i < 3)
      .join(' ');

    return { id, created_at: time, text, profile_image_url_https, screen_name };
  });

  res.status(200).send(tweets);
});
