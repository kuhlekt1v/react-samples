import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
	createStyles({
		sideMenu: {
			display: 'flex',
			flexDirection: 'column',
			position: 'absolute',
			left: '0px',
			width: '320px',
			height: '100%',
			backgroundColor: '#253053',
		},
	})
);
