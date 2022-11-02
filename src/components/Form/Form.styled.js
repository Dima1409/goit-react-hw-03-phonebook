import styled from "styled-components";

const Form = styled.form`
background-color: teal;
display: flex;
flex-direction: column;
max-width: 630px;
margin: 0 auto;
padding: 10px 40px;
`;
const LabelForm = styled.label`
font-size: 22px;
text-align: start;
margin-bottom: 5px;
`;

const LabelInput = styled.input`
max-width: 40%;
padding: 10px;
color: teal;
`;

const ButtonSubmit = styled.button`
margin: 10px 0;
background-color: tomato;
max-width: 150px;
font-size: 24px;
border: none;
transition: all 250ms;
&:hover {
    cursor: pointer;
    box-shadow: 0 0 10px;
}
`;

export {Form, LabelForm, LabelInput, ButtonSubmit};