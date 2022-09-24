import React, { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Purpose from "../components/Layout/Purpose";
import Properties from "../components/Layout/Properties";
import OurService from "../components/Layout/OurService";
import Blog from "../components/Layout/BlogSection";
import Testimonial from "../components/Layout/Testimonial";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Purpose />
      <Properties />
      <OurService />
      <Blog />
      <Testimonial />
    </Fragment>
  );
};

export default HomePage;
