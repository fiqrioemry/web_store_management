import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container h-screen mx-auto flex-center">{children}</div>
  );
};

export default Container;
