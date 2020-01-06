import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    contentPadding: {
        marginTop: 20,
        padding: 10,
    },
    bullet: {
        color: '#33ffbc',
    },
    card: {
        minHeight: 690,

    },
    media: {
        height: 140,
    },
    marginFoot: {
        height: '100vh',
    }
}));

export default useStyles;