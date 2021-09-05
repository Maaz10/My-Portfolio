import "bootstrap/dist/css/bootstrap.min.css";
import Git from './Github.png';
import Linkedin from './LinkedIn.png';
import Instagram from './Instagram.png';
import Whatsapp from './Whatsapp.png';
import '../App.css';

console.log(Git);
console.log(Linkedin);

function logocard() {
  return (
    <div class="container-fluid-3" >
      <h5>Follow Me On:</h5>
      <br></br>
      <a href="https://github.com/Maaz10" target="blank"><img class="img-Icons" src={Git} alt="Github Icon" ></img></a>
      <a href="https://www.linkedin.com/in/maaz-khan-a44a85174" target="blank" ><img class="img-Icons" src={Linkedin} alt="Linkedin Icon" ></img></a>
      <a href="https://www.instagram.com/khan._.maaz/" target="blank" ><img class="img-Icons" src={Instagram} alt="Instagram Icon" ></img></a>
      <a href="https://wa.me/+918095147071" target="blank" ><img class="img-Icons" src={Whatsapp} alt="Instagram Icon" ></img></a>
    </div>
  );
}

export default logocard;
