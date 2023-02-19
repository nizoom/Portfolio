import ReactGA from "react-ga";

const myGa = () => {
  console.log(process.env.REACT_APP_GOOGLE_ID);
  const GA_ID = process.env.REACT_APP_GOOGLE_ID;
  ReactGA.initialize(GA_ID);
  ReactGA.pageview("/#"); //+ window.location.search)
};

export default myGa;
