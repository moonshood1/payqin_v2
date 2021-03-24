const MNotABank = () => {
  return (
    <div className="notabank" style={{ height: "100%" }}>
      <div className="first">
        <h1 style={{ fontSize: "26px" }}>We’re not Bank, We’re better</h1>
        <p style={{ color: "#888888" }}>
          A safe and secure environment for your internet transactions anywhere
          in the world
        </p>
        <div
          className="buttons"
          style={{ marginTop: "3%", display: "flex", paddingLeft: "12%" }}
        >
          <div className="butt_ios">
            <a href="/appstore">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/iOS-CTA_2x_felwyr.png"
                alt="App store download"
                style={{ maxHeight: "45px", marginRight: "10px" }}
              />
            </a>
          </div>
          <div className="butt_google">
            <a href="/googleplay">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978186/payqin/website/Google-CTA_2x_iayzfn.png"
                alt="Google play download"
                style={{ maxHeight: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="second">
        <img
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978184/payqin/website/person-responsive-holdingphone_qiw6xf.png"
          alt=""
          height="250"
        />
      </div>
    </div>
  );
};

export default MNotABank;
