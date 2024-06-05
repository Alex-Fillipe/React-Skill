import styled from 'styled-components'

export const BotaoCustomizado = styled.button`
 color: #fff;
 background-color: ${props => props.className === "primary" ? "#007bff" : props.className === "success" ? "#28a745" : props.className === "danger" ? "#dc3545": "#007bff"};
 border-color: #007bff;
 display: inline-block;
 font-weight: 400;
 text-align: center;
 white-space: nowrap;
 vertical-align: middle;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
 border: 1px solid transparent;
 padding: 0.375rem 0.75rem;
 margin:3px;
 font-size: 1rem;
 width: 100%;
 height: 50px;
 line-height: 1.5;
 border-radius: 0.25rem;
 transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

 ${props => props.disabled === false && `
 &:hover{
   background: linear-gradient(45deg, #8e44ad, #3498db);
     
 }
 `}

 ${props => props.disabled && `
 opacity: 0.7

 `}

 
 `

  