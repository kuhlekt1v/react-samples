import React, { useState } from 'react';
import { MyForm } from './MyForm';
import { MyTable } from './MyTable';
import { generate } from 'shortid';

// Following Dan Awad - stopped at 8:02
// https://www.youtube.com/watch?v=6VmVYi9yrAA

const App = () => {
	const [rows, setRows] = useState([
		{
			id: 'qPxLropOt',
			firstName: 'bob',
			lastName: 'smith',
			email: 'bsmith@gmail.com',
		},
	]);

	return (
		<div style={{ textAlign: 'center' }}>
			<MyForm
				onSubmit={data => {
					setRows(currentRows => [
						{
							id: generate(),
							...data,
						},
						...currentRows,
					]);
				}}
			/>
			<MyTable rows={rows} />
		</div>
	);
};

export default App;
