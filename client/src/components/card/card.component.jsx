import React from 'react';
import { ItemTypes } from '../../utils/items';
import { useDrag } from 'react-dnd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default ({ tweet }) => {
  console.log(tweet);
    const { screen_name, profile_image_url_https, text, created_at } = tweet;
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            tweet: tweet,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <List ref={drag} style={{ opacity: isDragging ? '0.5' : '1' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={screen_name} src={profile_image_url_https} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            {screen_name}
                            <Typography
                                component="span"
                                variant="body2"
                                style={{ display: 'inline', marginLeft: 20 }}
                                color="textPrimary"
                            >
                                {created_at}
                            </Typography>
                        </React.Fragment>
                    }
                    secondary={text}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};
