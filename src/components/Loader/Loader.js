import React from "react";

const Loader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <>
      {isLoading && (
        <div class="loader --global">
          <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
