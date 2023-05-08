import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body>{children}</body>
    </>
  );
}

export default layout;
