import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const emails = useLoaderData();
  console.log(emails);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
