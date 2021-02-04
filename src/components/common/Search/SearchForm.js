import React from "react";

const SearchForm = () => {
	return (
		<div id="search-form" className="mb-5">
			<div id="search-form-top" className="p-4 has-border-radius">
				<div id="search-bar" className="mx-4">
					<div className="input-group">
						<input id="search" type="text" className="form-control" placeholder="Search your next property ..." aria-label="search" aria-describedby="search"/>
						<div className="input-group-append">
							<button className="btn btn-gradient" type="button">Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
					
	);
};

export default SearchForm;