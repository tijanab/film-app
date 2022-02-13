import styled from "styled-components";

export const SearchBar = styled.input`
  width: 300px;
  height: 24px;
  font-size: 18px;
  border-radius: 3px;
  border: 2px solid #685206;
  color: #685206;
  &:focus{
    border: none;
  }
`;

export const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid #685206;
	color: #685206;
  font-size: 18px;
  height: 30px;
`;

export const Container = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
`;

export const Movie = styled.div`
	width: 200px;
	&:hover {
		opacity: 0.5;
	}
	margin: 5px;
`;

export const MovieImg = styled.img`
	margin-top: 5px;
	width: 150px;
`;

export const Description = styled.div`
	color: white;
	color: #685206;
	font-family: "Helvetica Neue", sans-serif;
	line-height: 24px;
	margin: 0 0 24px;
`;

export const Title = styled.p`
	font-size: 18px;
  font-weight: bold;
`;

export const Year = styled.p`
	font-size: 13px;
`;