import React from "react";

const FilterBox = ({ filter, setFilter }) => {
  return (
    <div className="filter-box">
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterBox;
