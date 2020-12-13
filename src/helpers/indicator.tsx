import React from "react";

const indicator = (isLoading?: boolean, error?: string) => {
  if (!isLoading && !error) {
    return null;
  }
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default indicator;
