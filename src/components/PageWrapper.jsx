import { Helmet } from "react-helmet-async";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Test Title - Fortune Garden</title>
      </Helmet>
      {children}
    </>
  );
};

export default PageWrapper;
