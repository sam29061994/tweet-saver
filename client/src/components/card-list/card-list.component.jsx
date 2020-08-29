import React from 'react';
import Card from '../card/card.component';

export default ({ tweets }) => {
    console.log(tweets);
    return tweets
        ? tweets.map((tweet) => <Card key={tweet.id} tweet={tweet} />)
        : null;
};
