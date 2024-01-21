"use client";
import React from "react";
import Swiper from "./Swiper";
const Slider = () => {
  return (
    <section className="container mx-auto mt-16">
      <h1 className="text-3xl text-center mb-10">
        Meet Our <strong>Author&apos;s</strong>
      </h1>
      <p className="text-center text-lg font-medium">
      Dive into the literary world with our curated selection of renowned authors, each contributing their unique perspective to the tapestry of storytelling.Explore the profound works of celebrated authors who have left an indelible mark on literature, captivating readers with their eloquent prose and thought-provoking narratives.Join us in celebrating the literary legacy of these iconic authors, whose contributions have shaped the literary landscape and enriched the cultural heritage of storytelling.
      </p>
      <div>
        <Swiper></Swiper>
      </div>
    </section>
  );
};

export default Slider;
