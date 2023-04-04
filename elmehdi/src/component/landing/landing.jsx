import React from "react";
import "./landing.css";

const landing = () => {
  return (
    <section className="landing">
      <h1>Featured Projects</h1>
      <div className="row">
        <div class="card">
          <div class="image"></div>
          <div class="content">
            <a href="#">
              <span class="title">React Space</span>
            </a>

            <p class="desc">
              Handy tool belt to create amazing AR components in a React app,{" "}
              <br />
              with redux integration via midlleware
            </p>

            <a href="#" class="action">
              see more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="image"></div>
          <div class="content">
            <a href="#">
              <span class="title">React Infinite Scroll</span>
            </a>

            <p class="desc">
              A scrollable bottom sheet with vitualisation support, native{" "}
              <br />
              animation at 60 FPS and fully implemented in JS land 
            </p>

            <a href="#" class="action">
              see more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="image"></div>
          <div class="content">
            <a href="#">
              <span class="title">Photo Gallery </span>
            </a>

            <p class="desc">
              A One-stop shop for photographers to share and monetize their{" "}
              <br />
              photos, allowing them to have a second source of income
            </p>

            <a href="#" class="action">
              see more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="image"></div>
          <div class="content">
            <a href="#">
              <span class="title">Event planner</span>
            </a>

            <p class="desc">
              A mobile application for leisure seekers to discover unique events{" "}
              <br />
              and activities in their city with a few taps 
            </p>

            <a href="#" class="action">
              see more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default landing;
