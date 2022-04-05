import Image from "next/image";
import PokeNavBar from "./PokeNavBar";

const NavigationBar: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <PokeNavBar>
        <ul>
          <li>
            <Image
              src={"/pokemon-logo.svg"}
              alt="Pokemon Logo"
              width={140}
              height={50}
            />
          </li>
          <li>Future</li>
          <li>Future</li>
          <li>Future</li>
        </ul>
      </PokeNavBar>
    </>
  );
};

export default NavigationBar;
