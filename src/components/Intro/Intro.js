import "./Intro.css";
import SignUp from "../Sign-up/Sign-up";

const Intro = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <h1 className="intro__title">
          <p className="intro__title_part1">Форум Microsoft</p>
          <p className="intro__title_part2">
            «Finance industry trust in AI and IT-Security»
          </p>
        </h1>
        <p className="intro__subtitle1">
          Масштабная кибератака и устаревшее оборудование может привести к
          потере клиентов, ухудшить отношения с партнёрами и учредителями, а
          невыполнение требований законодательства может привести к существенным
          штрафам и даже к блокировке ресурсов
        </p>
        <p className="intro__subtitle2">
          Узнайте как этого избежать, регистрируйтесь на наш форум
        </p>
        <SignUp />
      </div>
    </div>
  );
};

export default Intro;
