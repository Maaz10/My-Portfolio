import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import Git from './Github.png';
import Linkedin from './LinkedIn.png';
import Instagram from './Instagram.png';
import Whatsapp from './Whatsapp.png';
import Mail from './emaillogo.png';


console.log(Git);
console.log(Linkedin);
console.log(Instagram);
console.log(Whatsapp);
console.log(Mail);

function contact() {
    return (
        <div id="Contact-Section">
            <h1 id="About-Me">Contact</h1>
            <br />
            <h5 id="first-text-2">“If I had asked people what they wanted, they would have said faster horses.”</h5>
            <h6 id="first-text-2">- Henry Ford</h6>
            <br />
            <hr id="Hr-line-2" />
            <h5 class="grow" id="first-text-4">
                
                <img id="Logo-Icons-1" src={Mail} alt="Mail Icon" />
                <a href="mailto:maazfor@gmail.com" target="blank" > maazfor@gmail.com</a>
            </h5>

            <br />
            <div class="container-fluid">

                <div class="row">
                    <div class="col-lg-4" ></div>
                    <div class="col-lg-1" >
                        <a href="https://www.linkedin.com/in/maaz-khan-a44a85174" target="blank" ><img class="grow" src={Linkedin} alt="LinkedIn Icon" id="Logo-Icons" /></a>
                    </div>
                    <div class="col-lg-1" >
                        <a href="https://wa.me/+918095147071" target="blank" ><img class="grow" src={Whatsapp} alt="Whatsapp Icon" id="Logo-Icons" /></a>
                    </div>
                    <div class="col-lg-1" >
                        <a href="https://www.instagram.com/khan._.maaz/" target="blank" ><img class="grow" src={Instagram} alt="Instagram Icon" id="Logo-Icons" /></a>
                    </div>
                    <div class="col-lg-1" >
                        <a href="https://github.com/Maaz10" target="blank"><img class="grow" src={Git} alt="Github Icon" id="Logo-Icons" /></a>
                    </div>
                    <div class="col-lg-4" ></div>
                </div>
            </div>
        </div>
    );
}

export default contact;
