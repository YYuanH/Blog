import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Blog from '../blog';
import Create from '../create';
import Home from '../home';
import { Link, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        color: "inherit",
    },
    mainFeaturedPost: {
        position: 'relative',
        //backgroundPosition: 'center',
        backgroundColor: theme.palette.grey,
        backgroundSize: 'cover',
        //backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        // backgroundImage: `url(./base.jpg)`,
        marginBottom: theme.spacing(4),
        color: theme.palette.common.white,
        
      },
      mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(4),
          paddingRight: 0,
        },
      },
      
}));


export default function MainPage(props) {        
        const { history, match, user_key } = props;
        const classes = useStyles();
        const handleListItemClick = (url) => props.history.push(url);
        const handleSignUp = () => props.history.push("/signup");
        const handleLogin =() => props.history.push("/login");

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolbarTitle} component="h1" variant="h5" align="center">
                            Blog
                        </Typography>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <Button size="small" onClick={handleLogin}>
                            登录
                        </Button>
                        <Button size="small" onClick={handleSignUp}>
                            注册
                        </Button>
                    </Toolbar>
                    <Toolbar component="nav" className={classes.toolbarSecondary} >
                        <Grid container >
                            <Grid item md={0.5}>
                                <ListItem button onClick={() => handleListItemClick(`${match.url}`)}><ListItemText primary="首页" /></ListItem>
                            </Grid>
                            <Grid item md={0.5}>
                                <ListItem button onClick={() => handleListItemClick(`${match.url}/blog`)}><ListItemText primary="博客" /></ListItem>
                            </Grid>
                            <Grid item md={0.5}>
                                <ListItem button onClick={() => handleListItemClick(`${match.url}/create`)}><ListItemText primary="创建" /></ListItem>
                            </Grid>
                            {/* <Link href="home/blog" variant="body1" color="textPrimary" >博客</Link> */}
                        </Grid>

                    </Toolbar>
                    <div>
                        <Paper className={classes.mainFeaturedPost}>        
                            <Grid container>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturedPostContent}>
                                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                            Title of a longer featured blog post
                                        </Typography>
                                        <Typography variant="h5" color="inherit" paragraph>
                                            Short introduction.
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                        <div style={{height:"80vh"}}>
                        {/* <Router> */}
                            <Switch>
                                <Route exact path={`${match.url}`} render={() => <Home history={history} match={match} user_key={user_key} />} />
                                <Route path={`${match.url}/blog`} render={() => <Blog history={history} match={match} user_key={user_key} />} />
                                <Route path={`${match.url}/create`} render={() => <Create history={history} match={match} user_key={user_key} />} />
                            </Switch>
                        {/* </Router> */}
                        </div>                   
                    </div>
                    <footer style={{marginBottom:"20px"}}>
                        <Typography variant="body1" align="center">
                            Footer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom>
                            Something here to give the footer a purpose!
                        </Typography>
                    </footer>
                </Container>
            </React.Fragment>   
        );
    
}