import React from 'react';
import './HomePage.css';



const HomePage = () => {

    return(
        // Main information display
        <div className="parent">
            <div className="container">
                <h1>Omari Hopkins</h1>
                <h2>Computer Science Undergraduate</h2>
                <p>Hello. My name is Omari Hopkins and I am a student currently enrolled at the University of Central
                    Florida pursuing a Bachelor of Science degree in Computer Science. My passion for Computer Science
                    and programming, and problem solving as a whole stemmed from previous high school programming
                    courses that introduced problem solving techniques, projects, and other subjects with regard to
                    coding.</p>

                <p>
                    Outside of computer science I'm big on personal fitness, surfing, listening to music, and I have a passion for cars and all things that move!
                </p>


                <h3>Languages </h3>
                <div className="iconArea">
                    <a className="Icons" id="htmlIcon"></a>
                    <a className="Icons" id="cssIcon"></a>
                    <a className="Icons" id="javaIcon"></a>
                    <a className="Icons" id="javascriptIcon"></a>
                    <a className="Icons" id="pythonIcon"></a>
                    <a className="Icons" id="sqlIcon"></a>
                </div>

                <h3>Frameworks</h3>
                <div className="iconArea">
                    <a className="Icons" id="reactIcon"></a>
                    <a className="Icons" id="springIcon"></a>
                    <a className="Icons" id="awsIcon"></a>
                    <a className="Icons" id="postgresIcon"></a>

                </div>

                <h3>Socials</h3>


                <div className="socialMediaArea">
                    <a id="linkedinButton" href="https://www.linkedin.com/in/omari-hopkins-381a37263/"></a>
                    <a id="githubButton" href="https://github.com/OmariHop"></a>
                    <a id="spotifyButton" href="https://open.spotify.com/user/21rasao26f565i3aa7ao7ghbi"></a>
                </div>
                <a href="https://www.dropbox.com/scl/fi/45mamd9ms154jwfy60aqz/Hopkins_Omari_Resume.pdf?rlkey=rntn5oj9hd5m5nnx3kr6nhw7f&st=u5rsass1&dl=0">
                <button className="resumeButton">View my resume</button>
                </a>
            </div>


            <div className="pictureArea">
                <img className="picture" src="/src/images/output-onlinepngtools.png"></img>
            </div>
        </div>
    )

}
export default HomePage;
