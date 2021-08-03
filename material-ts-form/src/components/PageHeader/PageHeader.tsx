import React from 'react';
import { Paper, Card, Typography } from '@material-ui/core';

import { useStyles } from './PageHeader.style';

type Props = {
	title: string;
	subTitle: string;
	// icon: (props: SvgIconProps) => JSX.Element;
	icon: any;
};

export const PageHeader = ({ title, subTitle, icon }: Props) => {
	const classes = useStyles();

	return (
		<Paper elevation={0} square className={classes.root}>
			<div className={classes.pageHeader}>
				<Card className={classes.pageIcon}>{icon}</Card>
				<div className={classes.pageTitle}>
					<Typography variant='h6' component='div'>
						{title}
					</Typography>
					<Typography variant='subtitle2' component='div'>
						{subTitle}
					</Typography>
				</div>
			</div>
		</Paper>
	);
};
