import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	FlexFunc,
	color_negative,
	color_light,
	shadow,
	tablet,
	mobile
} from '../../styles';

const NavContainer = styled.div`
	${FlexFunc('column', 'center', 'center')};

	a {
		text-decoration: none;
		color: ${color_light};
		border: 1px solid ${color_light};
		border-radius: 1rem;
		width: 14rem;
		font-weight: bold;
		margin-bottom: 1rem;
		padding: 0.5rem;
		box-shadow: ${shadow};

		&.activeNavItem {
			background: ${color_negative};
			color: white;
		}
	}

	@media ${tablet} {
		${FlexFunc('row', 'center', 'center')};
		flex-wrap: wrap;
		a {
			width: 10em;
			margin: 1rem;
			font-size: 0.8rem;
		}
	}

	@media ${mobile} {
		${FlexFunc('column', 'center', 'center')};
		flex-wrap: wrap;
		a {
			width: 10rem;
			margin:0 0 1rem 0;
			font-size: 0.8rem;
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
