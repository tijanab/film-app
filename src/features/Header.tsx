import styled from "styled-components";

const Header = () => {
	return (
		<Container>
			<Title>THE FILM CATALOGUE</Title>
			<SubTitle>Search for movies using the OMDP API</SubTitle>
		</Container>
	);
};

const Container = styled.div`
  margin: 20px;
`


const Title = styled.div`
	color: #111;
	font-family: "Helvetica Neue", sans-serif;
	font-size: 40px;
	font-weight: bold;
	letter-spacing: -1px;
	line-height: 1;
	text-align: center;
`;

const SubTitle = styled.div`
	color: #111;
	font-family: "Open Sans", sans-serif;
	font-size: 20px;
	font-weight: 300;
	line-height: 32px;
	margin: 0 0 72px;
	text-align: center;
`;

export default Header;
