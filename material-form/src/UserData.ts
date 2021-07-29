export interface UserData {
	userId: number;
	userName: string;
	password: string;
	isLoggedIn: boolean;
}

const users: UserData[] = [
	{
		userId: 1,
		userName: 'Jill',
		password: 'jill123',
		isLoggedIn: true,
	},
	{
		userId: 2,
		userName: 'joe',
		password: 'joe123',
		isLoggedIn: false,
	},
];

const wait = (ms: number): Promise<void> => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export const getLoggedInUser = async (): Promise<UserData[]> => {
	await wait(500);
	return users.filter(u => u.isLoggedIn);
};
