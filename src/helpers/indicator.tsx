import React from "react";

import Loading from "components/Loading";

const indicator = (isLoading?: boolean, error?: string) => {
  if (!isLoading && !error) {
    return null;
  }
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Loading />}
    </>
  );
};

export default indicator;
