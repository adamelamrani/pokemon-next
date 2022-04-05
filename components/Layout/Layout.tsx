import Head from "next/head";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Pokémon App in Next.js</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Pokemon App with Next.js" />
      </Head>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
