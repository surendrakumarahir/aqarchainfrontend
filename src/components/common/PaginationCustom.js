import React, { Component } from "react";
import Pagination from "react-js-pagination";
// import "../../assets/css/bootstrap.min.css";
class PaginationCustom extends Component {
	// constructor(props) {
	// 	super(props);
	// 	// this.state = {
	// 	//   activePage: 15
	// 	// };
	// }
 
	handlePageChange(pageNumber) {
		console.log(`active page is ${pageNumber}`);
		this.props.handlePagination(pageNumber);
	}
	handleShowNumberOfRecords = (value) => {
		this.props.handleShowNumberOfRecords(value);
	}
 
	render() {
		const {activePage, itemCountPerpage, totalItemsCount} = this.props;
		return (
			<div className="d-flex justify-content-between align-items-center">
				<form className="show_entries form-inline">
					<label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Show </label>
					<select 
						onChange={(e) => this.handleShowNumberOfRecords(e.target.value)}
						className="custom-select mr-sm-2" id="">
						<option value="5">5</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="75">75</option>
					</select>
					<label>Entries</label>
				</form>	
				<Pagination
					activePage={activePage}
					itemsCountPerPage={itemCountPerpage}
					totalItemsCount={totalItemsCount}
					pageRangeDisplayed={5}
					onChange={this.handlePageChange.bind(this)}
				/>
			</div>		
		);
	}
}
export default PaginationCustom;