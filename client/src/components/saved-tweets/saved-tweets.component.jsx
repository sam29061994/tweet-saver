import React from 'react';
import TweetList from '../card-list/card-list.component';
import { useLocalState } from '../../utils/customHooks';
import { ItemTypes } from '../../utils/items';
import { useDrop } from 'react-dnd';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';

export default () => {
  const [tweets, setTweets] = useLocalState([], 'tweets');

  const onDrop = (data) => {
    const isAlreadyExist = tweets.some((e) => e.id === data[0].id);

    if (!isAlreadyExist) {
      setTweets(tweets.concat(data[0]));
    }
  };

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => onDrop([item.tweet]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div>
      <Grid item container justify="space-between" alignItems="flex-start">
        <Typography variant="h6">Saved Tweets</Typography>
        <Button
          onClick={() => {
            setTweets([]);
          }}
          variant="contained"
          color="secondary"
        >
          {' '}
          Clear{' '}
        </Button>
      </Grid>
      <Grid item ref={drop}>
        {tweets.length ? (
          <TweetList tweets={tweets}></TweetList>
        ) : (
          <Typography
            style={{ paddingTop: 300, paddingBottom: 300 }}
            variant="h4"
          >
            Nothing Saved !!!!!!!!!!<br></br> Please Drop Here
          </Typography>
        )}
      </Grid>
      <Grid item></Grid>
    </div>
  );
};
