import React from 'react';
import { Link } from 'react-router-dom';
import { UserData } from '../../UserData';

// Material icons.
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Material dropdown menu
import MenuItem from '@material-ui/core/MenuItem';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material-UI styles
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	InputBase,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { alpha, makeStyles } from '@material-ui/core/styles';

interface Props {
	data: UserData[];
}

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	titleContainer: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'flex-end',
	},
	loginContainer: {
		display: 'flex',
		flexGrow: 1,
		alignItems: 'center',
	},
	pageTitle: {
		textDecoration: 'none',
		marginRight: theme.spacing(2),
	},
	loginField: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	loginFieldIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	loginBtn: {
		width: '150px',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	clearIcon: {
		'&:hover': {
			color: theme.palette.error.main,
		},
	},
}));

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
	},
})((props: MenuProps) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
));

export const Navbar = ({ data }: Props) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [loggedIn, setLoggedIn] = React.useState(false);
	const classes = useStyles();

	const handleLoggedInUser = () => setLoggedIn(!loggedIn);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const renderStyledMenu = (
		// Change to for each notification and make own component.
		<StyledMenu
			id='customized-menu'
			anchorEl={anchorEl}
			keepMounted
			open={Boolean(anchorEl)}
			onClose={handleClose}
		>
			<MenuItem>
				<ListItemIcon>
					<ClearIcon fontSize='small' className={classes.clearIcon} />
				</ListItemIcon>
				<ListItemText primary='Notification 1' />
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<ClearIcon fontSize='small' className={classes.clearIcon} />
				</ListItemIcon>
				<ListItemText primary='Notification 2' />
			</MenuItem>
		</StyledMenu>
	);

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					{loggedIn ? (
						<React.Fragment>
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='menu'
							>
								<MenuIcon />
							</IconButton>
							{/* Page title/company name. */}
							<div className={classes.titleContainer}>
								<Typography variant='h4' className={classes.pageTitle}>
									XYZPortal
								</Typography>
								{data.map(user => (
									<Typography variant='h5' key={user.userId}>
										Hi, {user.userName}!
									</Typography>
								))}
							</div>

							<div className={classes.sectionDesktop}>
								{/* Messages. */}
								<IconButton
									aria-label='show 4 new mails'
									component={Link}
									to='/account/messages'
									color='inherit'
								>
									<Badge badgeContent={4} color='secondary'>
										<MailIcon />
									</Badge>
								</IconButton>

								{/* Notifications. */}
								<IconButton
									aria-label='show 17 new notifications'
									aria-controls='customized-menu'
									aria-haspopup='true'
									color='inherit'
									onClick={handleClick}
								>
									<Badge badgeContent={17} color='secondary'>
										<NotificationsIcon />
									</Badge>
								</IconButton>
								{renderStyledMenu}

								{/* Account settings. */}
								<IconButton
									aria-label='account of current user'
									component={Link}
									to='/account/settings'
									color='inherit'
								>
									<AccountCircle />
								</IconButton>
							</div>
						</React.Fragment>
					) : (
						<React.Fragment>
							<div className={classes.loginContainer}>
								{/* Page title/company name. */}
								<Typography variant='h4' className={classes.pageTitle}>
									XYZPortal
								</Typography>

								{/* Input fields. */}
								<div className={classes.loginField}>
									<div className={classes.loginFieldIcon}>
										<PersonIcon />
									</div>
									<InputBase
										placeholder='Username…'
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										inputProps={{ 'aria-label': 'userName' }}
									/>
								</div>

								<div className={classes.loginField}>
									<div className={classes.loginFieldIcon}>
										<LockIcon />
									</div>
									<InputBase
										type='password'
										placeholder='Password...'
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										inputProps={{ 'aria-label': 'password' }}
									/>
								</div>
							</div>
							<Button
								component={Link}
								to='/auth/login'
								variant='contained'
								color='secondary'
								onClick={handleLoggedInUser}
								className={classes.loginBtn}
							>
								Login
							</Button>
						</React.Fragment>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};
