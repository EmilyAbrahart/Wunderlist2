import React from "react";
import styled from "styled-components";
import {
  FlexFunc,
  Input,
  Button,
  color_subtle
} from "./../../styles/reusables";

const SearchBarDiv = styled.div`
  ${FlexFunc("column", "center", "center")};
  width: 70%;
  padding-top: 2rem;
`;

const FilterContainer = styled.div`
  width: 100%;
  ${FlexFunc("row", "center", "center")};
`;

const SearchBarInput = styled.input`
  ${Input("70%")};
`;

const SearchBarButton = styled.button`
  margin-top: 0.5rem;
  ${Button("white", color_subtle)};
`;

const SearchBar = props => {
  return (
    <SearchBarDiv>
      <SearchBarInput type="text" />

      <FilterContainer>
        <div>
          <SearchBarButton>All</SearchBarButton>
          <SearchBarButton onClick={() => props.filterToday()}>
            Today
          </SearchBarButton>
          <SearchBarButton onClick={() => props.filterWeek()}>
            Week
          </SearchBarButton>
          <SearchBarButton>Month</SearchBarButton>
        </div>
        <div>
          {props.catergories.map(catergory => (
            <SearchBarButton key={catergory}>{catergory}</SearchBarButton>
          ))}
        </div>
      </FilterContainer>
    </SearchBarDiv>
  );
};

export default SearchBar;
