import styled from 'styled-components';

export const Container = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	max-width: 1140px;

	/* The magic centering code */
	margin: auto;
	position: absolute;
	top: 0;
	bottom: 0; /* Aligns Vertically - Remove for Horizontal Only */
	left: 0;
	right: 0; /* Aligns Horizontally - Remove for Vertical Only  */

	/* Prevent div from overflowing main window */
	max-width: 95%;
	max-height: 100%;
	overflow: auto;
`;
