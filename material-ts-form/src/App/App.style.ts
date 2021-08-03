import {
	makeStyles,
	createStyles,
	createTheme,
} from '@material-ui/core/styles';

export const theme = createTheme({
	palette: {
		primary: {
			light: '#33ab9f',
			main: '#009688',
			dark: '#006595f',
		},
		secondary: {
			light: '#ff8b66',
			main: '#ff6e40',
			dark: '#b24d2c',
		},
	},
	overrides: {
		MuiAppBar: {
			root: {
				transform: 'translateZ(0)',
			},
		},
	},
	props: {
		MuiIconButton: {
			disableRipple: true,
		},
	},
});

export const useStyles = makeStyles(() =>
	createStyles({
		appMain: {
			paddingLeft: '320px',
			width: '100%',
		},
	})
);
