import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FlexFunc, color_negative } from '../../styles/reusables';

const NavContainer = styled.div`
	${FlexFunc('column', 'center', 'center')};
	position: absolute;
	left: 1rem;
	top: 7rem;

	a {
		text-decoration: none;
		color: black;
		border: 1px solid black;
		border-radius: 1rem;
		width: 10rem;
		font-weight: bold;
		margin-bottom: 1rem;

		&.activeNavItem {
			background: ${color_negative};
			color: white;
		}
	}
`;

const NavBar = () => {
	return (
		<NavContainer>
			<NavLink exact to="/" activeClassName="activeNavItem">
				Active
			</NavLink>
			<NavLink to="/completed" activeClassName="activeNavItem">
				Completed
			</NavLink>
			<NavLink to="/deleted" activeClassName="activeNavItem">
				Deleted
			</NavLink>
		</NavContainer>
	);
};

export default NavBar;
