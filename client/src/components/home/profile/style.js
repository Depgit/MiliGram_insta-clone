import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        padding: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
}));