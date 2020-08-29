import React from 'react';
import Header from '../../components/header/header.component';
import SearchTweets from '../../components/search-tweets/search-tweets.component';
import SavedTweets from '../../components/saved-tweets/saved-tweets.component';
import { Grid, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default () => (
    <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        style={{
            flexGrow: 0,
            flexShrink: 0,
        }}
    >
        <Grid item>
            <Header />
        </Grid>

        <Grid
            item
            container
            style={{ marginTop: 60, paddingLeft: 100, paddingRight: 50 }}
        >
            <Grid
                sm={4}
                item
                container
                direction="column"
                alignItems="flex-start"
            >
                <SearchTweets />
            </Grid>
            <Grid item container sm={2} direction="column" alignItems="center">
                <Grid
                    item
                    style={{ marginTop: 400, marginLeft: 20, marginRight: 20 }}
                >
                    <Typography variant="subtitle1">
                        Drag and Drop AT<br></br> Last Tweet To Save
                    </Typography>
                    <ArrowForwardIcon style={{ fontSize: 120 }} />
                </Grid>
            </Grid>
            <Grid sm={4} item container direction="column">
                <Grid item>
                    <SavedTweets />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);
