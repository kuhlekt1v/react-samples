import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiFormControl-root': {
				width: '80%',
				margin: theme.spacing(1),
			},
		},
	})
);
