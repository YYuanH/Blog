import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider, makeStyles, Paper, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
        display: "flex"
    },
    contentBox: {
        marginRight: theme.spacing(4),
    },
    markdown: {
        padding: theme.spacing(3, 0),
        ...theme.typography.body2,
    },
    siderbarBox: {
        backgroundColor: theme.palette.grey[200],
        padding: theme.spacing(2),
    },
    social: {
        marginTop: theme.spacing(3),
    },
}));

const social = ['GitHub', 'Twitter', 'Facebook' ];

export default function Home(props) {
    const classes = useStyles();

    return (
        <Grid contained className={classes.mainGrid}>
            <Grid item xs={12} md={8} className={classes.contentBox}>
                <Typography variant="h6" gutterBottom>
                    Paragraph Title
                </Typography>
                <Divider />
                <Typography className={classes.markdown}>
                    This part is reserved for content of home page.
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.siderbarBox}>
                    <Typography variant="h6" gutterBottom>
                        About
                    </Typography>
                    <Typography>
                        This part is reserved for the relative information.
                    </Typography>
                </Paper>
                <Typography variant="h6" gutterBottom className={classes.social}>
                    Social
                </Typography>
                {social.map(network => (
                    <Link color="textPrimary" display="block" href="#" key={network}>{network}</Link>
                ))}
            </Grid>
        </Grid>
    );
}