import React from 'react';
import Card from '../card/card.component';

export default ({ tweets }) => {
    console.log(JSON.stringify(tweets));
    return tweets
        ? tweets.map((tweet) => {
              console.log(tweet);
              return <Card key={tweet.id} tweet={tweet} />;
          })
        : null;
};
