import coinIcon from "./assets/coin-icon.png";

const Invite = () => {
  <>
    <div className="invite">
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
    </div>
  </>;
};
export default Invite;
