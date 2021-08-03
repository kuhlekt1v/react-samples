import React from 'react';
import { Paper } from '@material-ui/core';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { PeopleOutlineTwoTone } from '@material-ui/icons';
import { EmployeeForm } from './EmployeeForm';

export const Employees = () => {
	return (
		<>
			<PageHeader
				title='New Employee'
				subTitle='Add new employee from with validation.'
				icon={<PeopleOutlineTwoTone fontSize='large' />}
			/>
			<Paper>
				<EmployeeForm />
			</Paper>
		</>
	);
};
