import "bootstrap/dist/css/bootstrap.min.css";
import Lion from './batman.png';

console.log(Lion)

function navbar() {
  return (
    <nav>
      <div class="logo">
        <img id="Logo-Icons" src={Lion} alt="" />
      </div>
      <div class="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Experiences</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

  );
}

export default navbar;
