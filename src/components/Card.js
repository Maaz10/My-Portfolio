import "bootstrap/dist/css/bootstrap.min.css";
import DP from './Maaz.png';
import '../App.css';

console.log(DP);

function card() {
    return (
        <div>

            <div class="container-fluid-1">
                <div>
                    <h2 class="Sign" style={{ display: 'inline' }} >/:</h2>
                    <h1 style={{ display: 'inline' }} > $ Maaz Ahmed Khan</h1>
                </div>
            </div>

            <div class="container-fluid-2">
                <div class="row">
                        <div class="container-1 col-sm-8">
                            <h2>Upcoming Software Engineer at Eurofins IT Solutions India (EITSI)</h2>
                            <br></br>
                            <h5>3D Modelling and Design | Software Development and Testing | Algorithms </h5>
                            <h5>Nokia Bell Labs | Wipro Pvt. Ltd. | DSU Digital Library </h5>
                        </div>

                    <div class="img-1 col-sm-4">
                            <img class="img-2"src={DP} alt="Maaz Photo" width="200px"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default card;
