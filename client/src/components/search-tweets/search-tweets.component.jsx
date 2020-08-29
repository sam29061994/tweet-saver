import React, { useState } from 'react';
import SearchBar from '../search-bar/search-bar.component';
import TweetList from '../card-list/card-list.component';
import axios from 'axios';
import { Grid } from '@material-ui/core';

export default () => {
  const [tweets, setTweets] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get('/recentTweets', {
        params: {
          query: searchQuery,
          count: 10,
        },
      });
      if (data) setTweets(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></SearchBar>
        </form>
      </Grid>

      <Grid item>
        <TweetList tweets={tweets} />
      </Grid>
    </div>
  );
};
