import styled from 'styled-components';

const List = styled.ol`
font-size: 18px;
text-align: start;
`;

const ListItem = styled.li`
padding: 2px 5px;
display: flex;
justify-content: space-between;
max-width: 350px;
margin-bottom: 5px;
&:last-child {
    margin-bottom: 0;
}
`;
const DeleteButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 20px;
padding: 10px;
background-color: teal;
border: none;
cursor: pointer;
transition: all 250ms;

&:hover, 
&:focus, 
&:active {
    box-shadow: 0 0 6px black;
}
`

export { List, ListItem, DeleteButton};