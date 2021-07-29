import TextField from '@material-ui/core/TextField';

type Props = {
	label: string;
	placeholder: string;
};

export const InputField = ({ label, placeholder }: Props) => {
	return <TextField label={label} defaultValue={placeholder} />;
};
