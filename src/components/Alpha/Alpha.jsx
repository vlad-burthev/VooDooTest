import "./Alpha.scss";
import alphaIcon from "../../assets/img/alphaIcon.svg";
import alphaDown from "../../assets/img/alphaDown.svg";

const Alpha = ({ windowSize }) => {
  const alphaTextSize = windowSize.width > 480;

  return (
    <div className="bg-black flex p-6 rounded text-white justify-between ">
      <div className="flex">
        <img src={alphaIcon} alt="" className="pr-1" />
        <span className="uppercase text-base font-bold mr-12">alpha</span>
        {alphaTextSize ? (
          <p>Important info regarding our service</p>
        ) : (
          <p>Important info </p>
        )}
      </div>

      <button>
        <img src={alphaDown} alt="" />
      </button>
    </div>
  );
};

export default Alpha;
