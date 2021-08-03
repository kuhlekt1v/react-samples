import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backgroundColor: '#fdfdff',
		},
		pageHeader: {
			padding: theme.spacing(4),
			display: 'flex',
			marginBottom: theme.spacing(2),
		},
		pageIcon: {
			display: 'inline-block',
			padding: theme.spacing(2),
			color: '#3c44b1',
		},
		pageTitle: {
			paddingLeft: theme.spacing(4),
		},
	})
);
