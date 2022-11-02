import React from 'react';
import PropTypes from 'prop-types';
import { LabelSearch, InputSearch, SearchContainer } from './SearchInput.styled';

const SearchInput = ({value, onChangeFilter}) => {
    return (
        <>
        <SearchContainer>
            <LabelSearch>Find contacts by name</LabelSearch>
            <InputSearch
            value={value}
            type="text"
            name="filter"
            placeholder="enter for search"
            onChange={onChangeFilter}
            ></InputSearch>
        </SearchContainer>
        </>
    )
}

export default SearchInput;

SearchInput.propTypes = {
    filterValue: PropTypes.string,
    onChangeByFilterValue: PropTypes.func
}