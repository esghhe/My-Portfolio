import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Iryna Grom",
      title: "Instructor at UCB Bootcamp",
      img:
        "",
      icon: "assets/twitter.png",
      desc:
        "",
    },
    {
      id: 2,
      name: "John Baxtor",
      title: "A Teaching Assistat(TA) at Ucb bootcamp",
      img:
        "",
      icon: "assets/youtube.png",
      desc:
        "",
      featured: true,
    },
    {
      id: 3,
      name: "Brian Ford",
      title: "A Teaching Assistat(TA) at Ucb bootcamp",
      img:
        "",
      icon: "assets/linkedin.png",
      desc:
        "",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
