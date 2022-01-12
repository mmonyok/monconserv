import React from 'react';
// let's get a banner image with an overlay text "Construction. Family-Style" or something

export default function Home() {
  return (
    <section>
      {/* I want a banner image that is like a brick wall */}
      <h1>Welcome to Monyok Construction Services</h1>
      <p>
        We are a family owned and operated Concrete and Masonry business. Take a look around to find out a little bit more about us and what we can do for you.
      </p>

      <div>
        <h2>WHAT WE DO</h2>
        {/* here will be the images for each of the 5 types of work that dad does. They will link to those pages. */}
      </div>
    </section>
  );
};