import "./css/App.css";
import portrait from "./img/sohib.jfif";
import behancer from "./img/bhnc.svg";
import instagram from "./img/inst.svg";
import facebook from "./img/fb.svg";
import telegram from "./img/telegram.svg";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="header__wrapper">
            <img src={portrait} alt="Photo1" className="header__image" />
          </div>
          <h1 className="header__heading">
            Сохиб
            <br /> Сайдазимов
          </h1>
          <div className="header__bio">
            <p className="header__paragraph">
              Digital-дизайнер и ведущий дизайн - специалист ООО МДО «Сарват».
            </p>
          </div>
          <div className="grid-container">
            <div className="cards">
              <div
                className="card card--behancer"
                onClick={() =>
                  window.open("https://www.behance.net/s_sohib", "_blank")
                }
              >
                <img src={behancer} alt="" className="icon" />
                <h1 className="card__heading">Мое портфолио</h1>
              </div>
              <div
                className="card card--instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/_saidazimov_/",
                    "_blank"
                  )
                }
              >
                <img src={instagram} alt="" className="icon" />
                <h1 className="card__heading">Мой Instagram</h1>
              </div>
              <div
                className="card card--facebook"
                onClick={() =>
                  window.open("https://www.facebook.com/ssaidazimov/", "_blank")
                }
              >
                <img src={facebook} alt="" className="icon" />
                <h1 className="card__heading">Мой Facebook</h1>
              </div>
              <div
                className="card card--telegram"
                onClick={() => window.open("https://t.me/s_sohib", "_blank")}
              >
                <img src={telegram} alt="" className="icon" />
                <h1 className="card__heading card__heading--tg">
                  Мой Telegram
                </h1>
              </div>
              <div
                className="card card--email"
                onClick={() => window.open("mailto:sohib.dsgn@gmail.com")}
              >
                <i className="bx bx-envelope"></i>
                <h1 className="card__heading card__heading--email">
                  Моя почта
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
