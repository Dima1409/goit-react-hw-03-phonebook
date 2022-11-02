import styled from 'styled-components';

const SearchContainer = styled.div`
max-width: 400px;
margin: 0;
margin-bottom: 40px;
text-align: start;
`
const LabelSearch = styled.p`
font-size: 22px;
margin-bottom: 5px;
`
const InputSearch = styled.input`
border: none;
outline: none;
padding: 10px;
min-width: 200px;
`

export {LabelSearch, InputSearch, SearchContainer};