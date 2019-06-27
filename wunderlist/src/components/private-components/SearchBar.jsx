import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	Input,
	Button,
	color_subtle,
	color_light,
	color_negative
} from './../../styles/reusables';
import { connect } from 'react-redux';
import {
	filterAll,
	filterCatergory,
	filterDueDate,
	search,
	searchStart,
	searchEnd
} from './../../state/actions';

const SearchBarDiv = styled.div`
	${FlexFunc('column', 'center', 'center')};
	width: 70%;
	padding-top: 2rem;
`;

const FilterContainer = styled.div`
	width: 100%;
	${FlexFunc('row', 'center', 'center')};
`;

const SearchBarInput = styled.input`
	${Input('70%')};
`;

const SearchBarButton = styled.button`
	margin-top: 0.5rem;
	${Button('white', color_subtle)};
`;

const FilterAllButton = styled(SearchBarButton)`
	color: ${props => (props.isFiltering ? color_subtle : color_light)};
	background: ${props => (props.isFiltering ? color_light : color_negative)};
	border-color: ${props => (props.isFiltering ? color_subtle : color_negative)};
	&:hover {
		background: ${color_negative};
		border-color: ${color_negative};
	}
`;

const FilterButton = styled(SearchBarButton)`
	color: ${props =>
		props.isFiltering === props.id.toLowerCase() ? color_light : color_subtle};
	background: ${props =>
		props.isFiltering === props.id.toLowerCase()
			? color_negative
			: color_light};
	border-color: ${props =>
		props.isFiltering === props.id.toLowerCase()
			? color_negative
			: color_subtle};
	&:hover {
		background: ${color_negative};
		border-color: ${color_negative};
	}
`;

const SearchBar = props => {
	const searchRef = React.createRef();

	return (
		<SearchBarDiv>
			<SearchBarInput
				type="text"
				placeholder="Search..."
				ref={searchRef}
				onFocus={() => props.searchStart()}
				onChange={() => props.search(searchRef.current.value.toLowerCase())}
			/>

			<FilterContainer>
				<div>
					<FilterAllButton
						isFiltering={props.isFiltering}
						onClick={() => props.filterAll()}
					>
						All
					</FilterAllButton>
					<FilterButton
						id="day"
						isFiltering={props.isFiltering}
						onClick={() => props.filterDueDate('day')}
					>
						Today
					</FilterButton>
					<FilterButton
						id="week"
						isFiltering={props.isFiltering}
						onClick={() => props.filterDueDate('week')}
					>
						Week
					</FilterButton>
					<FilterButton
						id="month"
						isFiltering={props.isFiltering}
						onClick={() => props.filterDueDate('month')}
					>
						Month
					</FilterButton>
				</div>
				<div>
					{props.catergories.map(catergory => (
						<FilterButton
							onClick={() => props.filterCatergory(catergory)}
							key={catergory}
							id={catergory}
							isFiltering={props.isFiltering}
						>
							{catergory}
						</FilterButton>
					))}
				</div>
			</FilterContainer>
		</SearchBarDiv>
	);
};

const mapStateToProps = state => {
	return {
		isFiltering: state.isFiltering,
		catergories: state.catergories
	};
};

export default connect(
	mapStateToProps,
	{ filterAll, filterCatergory, filterDueDate, search, searchStart, searchEnd }
)(SearchBar);
