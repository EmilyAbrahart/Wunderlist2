import React from "react";
import styled from "styled-components";
import {
  FlexFunc,
  Input,
  Button,
  color_subtle,
  color_light
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

const FilterAllButton = styled(SearchBarButton)`
  color: ${props => (props.isFiltering ? color_subtle : color_light)};
  background: ${props => (props.isFiltering ? color_light : color_subtle)};
`;

const FilterTodayButton = styled(SearchBarButton)`
  color: ${props =>
    props.isFiltering === "today" ? color_light : color_subtle};
  background: ${props =>
    props.isFiltering === "today" ? color_subtle : color_light};
`;

const FilterWeekButton = styled(SearchBarButton)`
  color: ${props =>
    props.isFiltering === "week" ? color_light : color_subtle};
  background: ${props =>
    props.isFiltering === "week" ? color_subtle : color_light};
`;

const FilterMonthButton = styled(SearchBarButton)`
  color: ${props =>
    props.isFiltering === "month" ? color_light : color_subtle};
  background: ${props =>
    props.isFiltering === "month" ? color_subtle : color_light};
`;
const SearchBar = props => {
  return (
    <SearchBarDiv>
      <SearchBarInput type="text" />

      <FilterContainer>
        <div>
          <FilterAllButton
            isFiltering={props.isFiltering}
            onClick={() => props.filterAll()}
          >
            All
          </FilterAllButton>
          <FilterTodayButton
            isFiltering={props.isFiltering}
            onClick={() => props.filterToday()}
          >
            Today
          </FilterTodayButton>
          <FilterWeekButton
            isFiltering={props.isFiltering}
            onClick={() => props.filterWeek()}
          >
            Week
          </FilterWeekButton>
          <FilterMonthButton
            isFiltering={props.isFiltering}
            onClick={() => props.filterMonth()}
          >
            Month
          </FilterMonthButton>
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
