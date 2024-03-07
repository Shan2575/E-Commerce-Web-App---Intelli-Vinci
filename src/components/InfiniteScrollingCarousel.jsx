import React, { useEffect } from "react";

const InfiniteScrollingCarousel = () => {
  useEffect(() => {
    const slideTrackContainers = document.querySelectorAll(
      ".slide-track-container"
    );

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      console.log("Adding animation...");
      addAnimation();
    }

    function addAnimation() {
      slideTrackContainers.forEach((slideTrackContainer) => {
        // add data-animated="true" to every `.scroller` on the page
        slideTrackContainer.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const slideTrack = slideTrackContainer.querySelector(".slide-track");
        const slideTrackContent = Array.from(slideTrack.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        slideTrackContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          slideTrack.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div id="sliders-container">
        <div className="slide-track-container" data-direction="down">
          <div className="slide-track">
            <div className="slide">
              <img src="\assets\images\jim-wack-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-2.webp" />
            </div>
          </div>
        </div>

        <div className="slide-track-container" data-direction="up">
          <div className="slide-track stagger-track">
            <div className="slide">
              <img src="\assets\images\abstract-art-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\lion-art.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\skeleton-art.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\lion-art.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\skeleton-art.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\lion-art.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\skeleton-art.webp" />
            </div>
          </div>
        </div>

        <div className="slide-track-container" data-direction="down">
          <div className="slide-track">
            <div className="slide">
              <img src="\assets\images\wasteland-art-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gritty-woman.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gritty-woman.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-3.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gritty-woman.webp" />
            </div>
          </div>
        </div>

        <div className="slide-track-container" data-direction="up">
          <div className="slide-track stagger-track">
            <div className="slide">
              <img src="\assets\images\abstract-art-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-4.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-4.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\abstract-art-4.webp" />
            </div>
          </div>
        </div>

        <div className="slide-track-container" data-direction="down">
          <div className="slide-track">
            <div className="slide">
              <img src="\assets\images\future-woman-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-5.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-4.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\zombie-astronaut.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-5.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-4.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\zombie-astronaut.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-5.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-4.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\zombie-astronaut.webp" />
            </div>
          </div>
        </div>

        <div className="slide-track-container" data-direction="up">
          <div className="slide-track stagger-track">
            <div className="slide">
              <img src="\assets\images\jim-wack-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\jim-wack-2.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\future-woman-1.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\gamer-advert-90s.webp" />
            </div>
            <div className="slide">
              <img src="\assets\images\wasteland-art-2.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScrollingCarousel;
