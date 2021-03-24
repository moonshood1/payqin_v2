const MPhysical = () => {
  return (
    <div className="sendmoney">
      <div className="first">
        <h1 style={{ fontSize: "26px" }}>Send Money to Friends</h1>
        <p style={{ color: "#888888", marginTop: "20px" }}>
          You Like It Virtual Or Physical ? We Got Both For You
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
          src="https://res.cloudinary.com/dhc0siki5/image/upload/v1615978185/payqin/website/hands-illustration_egcrdr.png"
          alt=""
          height="250"
        />
      </div>
    </div>
  );
};

export default MPhysical;
