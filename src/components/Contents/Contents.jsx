import Alpha from "../Alpha/Alpha";
import Products from "../Products/Products";
import SignForm from "../SignForm/SignForm";
import Container from "../UI/Container/Container";
import "./Contents.scss";

const Contents = ({ windowSize }) => {
  return (
    <div className="contents-block">
      <Container>
        <div className="contents-content ">
          <Alpha windowSize={windowSize} />
          <Products windowSize={windowSize} />
          <SignForm />
        </div>
      </Container>
    </div>
  );
};

export default Contents;
