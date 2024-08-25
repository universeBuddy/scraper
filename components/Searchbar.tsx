"use client";

import React, { useState, FormEvent } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon") ||
      hostname.endsWith("amazon")
    )
      return true;
  } catch (error) {
    return false;
  }
  return false;
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");

  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    alert(isValidLink ? "Valid Link" : " Invaid link");
  };

  try {
    setIsLoading(true);
  } catch (error) {}
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        className=" searchbar-input"
        placeholder="Enter the Product Link"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button type="submit" className="searchbar-btn">
        search
      </button>
    </form>
  );
};

export default Searchbar;
