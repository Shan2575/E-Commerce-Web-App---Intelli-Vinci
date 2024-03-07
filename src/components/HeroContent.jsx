import InfiniteScrollingCarousel from "../components/InfiniteScrollingCarousel";

function HeroContent() {
  return (
    <>
      <div id="heroCard">
        <div id="heroText">
          <h1>
            <span>Created by AI,</span> Curated by Humans.
          </h1>
          <div>
            <p>
              Welcome to Intelli-Vinci, where AI and Humanity unite to redefine
              art. Explore a curated collection of cutting-edge, AI-generated
              masterpieces. Elevate your space with thought-provoking pieces
              that bridge technology and creativity.
            </p>
            <span>Welcome to the future of art.</span>
          </div>
        </div>
        <InfiniteScrollingCarousel></InfiniteScrollingCarousel>
      </div>
      <div id="lowerHeroSection">
        <div className="smallerHeroCard"></div>
        <div className="smallerHeroCard"></div>
      </div>
    </>
  );
}

export default HeroContent;
