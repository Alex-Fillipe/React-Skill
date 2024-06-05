import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 130px;
  border-radius: 2em;
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center; 
   box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4) inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  gap: 30px 0px;

  h1 {
    color: black;
    font-size: 20px;
    font-weight: light;
  }
  
  p {
    color: black;
    font-size: 16px;
    font-weight: bold;
  }
  
  a {
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;   
  margin-top: 20px;
`;


export const FormContainer = styled.div`
     
    align-items: center;
    width:100%;
`;

export const ToggleButton = styled.button`
background: none;
border: none;
cursor: pointer;
padding: 0 10px;
color: #007bff;
float: right;
margin-top: -25px;

    &:focus {
        outline: none;
    }
`;
export const OutlineUser = styled.button`
background: none;
border: none;
padding: 0 10px;
color: #007bff;
float: right;
margin-top: -25px;

    &:focus {
        outline: none;
    }
`;