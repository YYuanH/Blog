import React from 'react';
import { Container, Avatar, Typography, TextField, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
    },
    form: {
        //width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(4),
    },
    button: {
        margin: theme.spacing(3, 0),
    },
}));

export default function Login(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PermIdentityIcon />
                </Avatar>
                <Typography variant="h5">
                    登录
                </Typography>
                {/* 建立表单输入框 */}
                <form className={classes.form}>
                    <TextField
                        autoComplete="username"
                        autoFocus
                        required
                        id="username"
                        label="用户名"
                        name="username"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        autoComplete="email"
                        required
                        id="email"
                        label="电子邮箱"
                        name="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        required
                        id="password"
                        label="密码"
                        name="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.button}>
                        登录
                    </Button>
                    <Link href="/signup" variant="body2" >
                        无账号？请先注册
                    </Link>
                </form>
                <Typography variant="body2" color="textSecondary">
                    兰州大学信息科学与工程学院DSLab
                    <Link color="inherit" href="home" underline="always">
                        网络安全小组
                    </Link>
                </Typography>
            </div>
        </Container>
    );
}