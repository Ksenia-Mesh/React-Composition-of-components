import './App.css';
import Cards from './components/Cards';

export default function App() {
  return (
    <div>
      <Cards image="https://mobimg.b-cdn.net/v3/fetch/da/daf8eb568fea522f6701fb9c66378cdc.jpeg?w=1470&r=0.5625">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#1" className="btn btn-primary">
          Go somewhere
        </a>
      </Cards>
      <Cards>
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#2" className="btn btn-primary">
          Go somewhere
        </a>
      </Cards>
    </div>
  );
}