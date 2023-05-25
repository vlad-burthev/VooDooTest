import Container from "../UI/Container/Container";
import "./Footer.scss";
import footerLogo from "../../assets/img/footerLogo.svg";
import LinkItem from "../LinkItem/LinkItem";

const Footer = () => {
  return (
    <div className="md:p-20 p-12 bg-white ">
      <Container>
        <div className="flex justify-evenly md:flex-row flex-col-reverse text-start">
          <div className="flex justify-center">
            <img src={footerLogo} alt="footerLogo" />
          </div>

          <LinkItem>
            <a href="#">FAQ</a>
            <a href="#">RETURNS</a>
            <a href="#">CONTACT</a>
          </LinkItem>

          <LinkItem>
            <a href="#">TERMS & CONDITIONS</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">COOKIE POLICY</a>
            <a href="#">COOKIE SETTINGS</a>
          </LinkItem>

          <LinkItem>
            <a href="#">ABOUT SECOND CHANCE</a>
            <a href="#">CAREER</a>
            <a href="#">FACEBOOK</a>
            <a href="#">INSTAGRAM</a>
          </LinkItem>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
