import NavigationBar from "../NavigationBar/NavigationBar";

const Layout: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
