import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	Input,
	Button,
	color_subtle,
	color_light,
	color_negative,
	color_primary,
	color_dark, mobile
} from '../../styles';
import { connect } from 'react-redux';
import {
	filterAll,
	filterCatergory,
	filterDueDate,
	search,
	searchStart,
	searchEnd,
	toggleForm
} from './../../state/actions';

const SearchBarDiv = styled.div`
	${FlexFunc('column', 'center', 'center')};
	width: 70%;
	padding: 2rem 0 1rem 0;
	background: ${color_primary};
	width: 100%;
	border-bottom: 1px solid ${color_primary};
`;

const FilterContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	${FlexFunc('row', 'center', 'center')};

	@media ${mobile} {
		${FlexFunc('column', 'center', 'center')};
	}
`;

const SearchBarInput = styled.input`
	${Input('70%')};
	border: 1px solid ${color_primary};
	height: 2rem;
`;

const SearchBarButton = styled.button`
	margin-top: 0.5rem;
	${Button('white', color_subtle)};
	border: none;
`;

const FilterAllButton = styled(SearchBarButton)`
	color: ${color_light};
	background: ${props => (props.isFiltering ? color_primary : color_negative)};
	margin: 0.5rem 0.25rem;
	&:hover {
		background: ${color_negative};
	}
`;

const FilterButton = styled(SearchBarButton)`
	color: ${color_light};
	background: ${props =>
		props.isFiltering === props.id.toLowerCase()
			? color_negative
			: color_primary};
	margin: 0.5rem 0.25rem;
	&:hover {
		background: ${color_negative};
	}
`;
const AddTodoButton = styled.button`
	${Button(color_light, color_dark)};
	background: ${props => (props.isAdding ? color_dark : color_light)};
	color: ${props => (props.isAdding ? color_light : color_dark )};
	border: none;
	margin: 0.5rem 0.25rem;
	width: 10rem;
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
				<AddTodoButton
					isAdding={props.isAdding}
					onClick={() => props.toggleForm()}
				>
					{props.isAdding ? 'Close' : 'Add Todo'}
				</AddTodoButton>
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
		catergories: state.catergories,
		isAdding: state.isAdding
	};
};

export default connect(
	mapStateToProps,
	{
		filterAll,
		filterCatergory,
		filterDueDate,
		search,
		searchStart,
		searchEnd,
		toggleForm
	}
)(SearchBar);
