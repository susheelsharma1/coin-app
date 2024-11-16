import coinIcon from "./assets/coin-icon.png";
function Home() {
    return (
      <div className="home-app">
        <div className="app-logo">
          <img
            src={coinIcon}
            alt="Coin Logo"
            className="coin"
            style={{
              display: "flex",
              margin: "0 auto",
              maxWidth: "150px",
            }}
          />
        </div>
        <div className="app-title inline-block align-middle">
          <h3>Muzik Coin</h3>
        </div>
        <div className="card fixed">
          <button type="button">Tokens 0</button>
        </div>
        <div className="wrap">
          <div className="drop-outer">
            <img src={coinIcon} alt="Coin Drop" className="drop" />
          </div>
          <div className="drop-outer1">
            <img src={coinIcon} alt="Coin Drop" className="drop" />
          </div>
          <div className="drop-outer2">
            <img src={coinIcon} alt="Coin Drop" className="drop" />
          </div>
        </div>
      </div>
    );
  }

  export default Home