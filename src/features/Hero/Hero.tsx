import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-header">
        <h1 className="logo">Isemin</h1>

        <nav className="hero-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </div>

      <div className="hero-content">
        <h1>Hello, I'm Ephraim</h1>
        <h3>Project Manager and Growth Marketer</h3>
        <p>
          I'm a passionate and results-driven <strong>Project Manager</strong>{" "}
          with over 5 years of experience leading cross-functional teams to
          deliver high-impact projects on time and within budget.
        </p>
      </div>
      <div className="hero-button">
        <a href="#projects">View My Work</a>
        <a href="#contact">Get In Touch</a>
      </div>
    </section>
  );
};

export default Hero;
