import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import Nokia from './Projects/Nokia1.jpeg';
import Attendance from './Projects/Attendace Tracker.png';
import Arduino from './Projects/Arduino.jpg';
import Bezier from './Projects/Bezier-Curve-2.png';
import AutoCode from './Projects/Auto code.jpeg';
import Wipro from './Projects/UIUXdesign-logo.png';
import TOH from './Projects/toh-2.jpg';
import Library from './Projects/Digital Library.jpg'
import Blockchain from './Projects/Blockchain.jpg';
import Noteify from './Projects/Noteify.png';


console.log(Nokia);
console.log(Attendance);
console.log(Arduino);
console.log(Bezier);
console.log(AutoCode);
console.log(Wipro);
console.log(TOH);
console.log(Library)
console.log(Blockchain)
console.log(Noteify);

function projects() {
    return (
        <div id="Projects-Section">
            <div>
                <h1 id="About-Me-2">Projects</h1>
                <br />
                <hr id="Hr-line-1" />
            </div>

            <div class="row" id="Main">

                <div class="column">
                    <div class="container">
                        <img src={Nokia} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text-1">Digital Twin - Industry 4.0</div>
                        </div>
                    </div>

                    <div class="container">
                        <img src={Bezier} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">Web Based Quadratic and Cubic Bezier Curves</div>
                        </div>
                    </div>

                    <div class="container">
                        <img src={Arduino} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text-1">Embedded Systems</div>
                        </div>
                    </div>
                
                </div>

                <div class="column">
                <div class="container">
                        <img src={Wipro} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">UI and UX for R&D Hardware</div>
                        </div>
                    </div>
                    <div class="container">
                        <img src={TOH} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text-1">TOH using Recursion</div>
                        </div>
                    </div>
                    <div class="container">
                        <img src={Library} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text-1">Digital Library</div>
                        </div>
                    </div>
                </div>

                <div class="column">
                <div class="container">
                        <img src={AutoCode} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">Auto-C-Code Generation using Py</div>
                        </div>
                    </div>

                    <div class="container">
                        <img src={Blockchain} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text">Certificate Generation Using Blockchain</div>
                        </div>
                    </div> 

                    <div class="container">
                        <img src={Noteify} alt="Avatar" class="image" />
                        <div class="overlay">
                            <div class="text-1">Multi-Keyword Search using ML</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default projects;
