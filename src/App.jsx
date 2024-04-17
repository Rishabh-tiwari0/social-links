import "./App.css";

function App() {
  return (
    <div className="container">
      <img src="profile.png" alt="profile" />
      <div className="title-container">
        <h3>Rishabh tiwari</h3>
        <p className="location">U.P India</p>
        <p className="job-title">{`"Front end and back end developer"`}</p>
      </div>
      <div className="link-container">
        <a href="https://github.com/Rishabh-tiwari0" target="_blank">
          Github
        </a>
        <a
          href="https://www.frontendmentor.io/profile/Rishabh-tiwari0"
          target="_blank"
        >
          Frontend mentor
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-tiwari-2b5a55286/"
          target="_blank"
        >
          Linkedin
        </a>
        <a onClick={() => alert("sadly i dont use twitter")}>Twitter</a>
        <a href="https://www.instagram.com/mhrishabh_tiwari/" target="_blank">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default App;
