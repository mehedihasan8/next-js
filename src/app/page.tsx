import dbConnect from "@/lib/dbConnect";
import React from "react";

const MainPage = () => {
  dbConnect();
  return <div>MainPage</div>;
};

export default MainPage;
