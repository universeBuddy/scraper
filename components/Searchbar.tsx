"use client";

import React from "react";

const handleSubmit = () => {};
const Searchbar = () => {
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        className=" searchbar-input"
        placeholder="Enter the Product Link"
      />
      <button type="submit" className="searchbar-btn">
        search
      </button>
    </form>
  );
};

export default Searchbar;
