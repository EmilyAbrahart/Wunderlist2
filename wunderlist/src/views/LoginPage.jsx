import React from 'react';
import FormikRegistrationForm from '../components/public-components/Registration';
import FormikLoginForm from '../components/public-components/Login';
import { connect } from 'react-redux';
import { registerUser, loginUser } from './../state/actions';
import styled from 'styled-components';
import { FlexFunc, color_dark, title_font } from '../styles';
import img from './../imgs/Login.jpg';

const LoginPageDiv = styled.div`
	${FlexFunc('row', 'center', 'center')};
	height: 100vh;
	width: 100vw;
	position: relative;
`;

const LoginHeader = styled.h1`
	color: ${color_dark};
	font-size: 4rem;
	font-family: ${title_font};
	position: absolute;
	margin: 0 auto;
	top: 3rem;
	left: 50%;
	transform: translateX(-50%);

`;

const LoginContainer = styled.div`
	${FlexFunc('row', 'space-evenly', 'center')};
	flex-wrap: wrap;
	width: 100%;
	height: 80%;
	margin-top: 6rem;
`;

const LoginBanner = styled.div`
background-image: url(${img});
background-size: cover;
width: 100vw;
height: 60%;
position: fixed;
z-index: -1;
top: 50%;
border-top: 2px solid ${color_dark};
border-bottom: 2px solid ${color_dark};
transform: translateY(-50%);
`

const LoginPage = props => {
	return (
		<LoginPageDiv>
			<LoginBanner />
			<LoginHeader>Wunderlist</LoginHeader>
			<LoginContainer>
				<FormikRegistrationForm registerUser={props.registerUser} />
				<FormikLoginForm loginUser={props.loginUser} />
			</LoginContainer>
		</LoginPageDiv>
	);
};

const mapStateToProps = state => {
	return {
		isAuthenticating: state.isAuthenticating,
		error: state.error
	};
};
export default connect(
	mapStateToProps,
	{ loginUser, registerUser }
)(LoginPage);
