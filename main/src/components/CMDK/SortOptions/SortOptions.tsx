import React from 'react';

function SortOptions() {
	return (
		<div className="mt-5 fade-up">
			<h3 className="text-lg font-medium mb-3"> Sort By </h3>

			<div className="mb-3">
				<p className="text-xs font-medium opacity-50 mb-2">Number</p>

				<div className="flex flex-row flex-wrap gap-2">
					<button className="btn btn-primary btn-sm disabled">Lowest</button>
					<button className="btn btn-primary btn-sm disabled">Highest</button>
				</div>
			</div>
		</div>
	);
}

export default SortOptions;
