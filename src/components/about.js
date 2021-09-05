import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import DP from './Maaz.png';

console.log(DP)


function about() {
    return (
        <div id="About-Section">
            <h1 id="About-Me-2">Profile</h1>
            <br />
            <h3 id="first-text-2">Upcoming Associate Software Developer @ Eurofins IT Solutions India</h3>
            <br />
            <hr id="Hr-line-1" />

            <div class="container-fluid">

                <div class="row">

                    <div class="col-lg-2" ></div>

                    <div class="col-lg-3" >
                        <h3 id="About-Me-3">About me</h3>
                        <br />
                        <p id="first-text-1">I am an all round web developer. I am a senior programmer with good knowledge of front-end techniques.</p>
                        <p id="first-text-1"> I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps.</p>
                        <p id="first-text-1"> Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
                    </div>

                    <div class="col-lg-2" >
                        <br />
                        <br />
                        <div>
                            <img src={DP} id="DP-Image-2" />
                        </div>
                    </div>
                    
                    <div class="col-lg-3" >
                        <h3 id="About-Me-4">Details</h3>
                        <br />
                        <div id="Details">
                            <h5 id="About-Me-1">Name</h5>
                            <h6 id="first-text-1">Mohammed Maaz Ahmed Khan</h6>
                            <h5 id="About-Me-1">Age</h5>
                            <h6 id="first-text-1">20</h6>
                            <h5 id="About-Me-1">Location</h5>
                            <h6 id="first-text-1">Jayanagar 1st Block, Bangalore, Karnataka (India)</h6>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default about;
