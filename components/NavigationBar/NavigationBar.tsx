import Image from "next/image";
import Link from "next/link";
import PokeNavBar from "./PokeNavBar";

const NavigationBar: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <PokeNavBar>
        <div>
          <Image
            src={"/pokemon-logo.svg"}
            alt="Pokemon Logo"
            width={140}
            height={50}
          />
        </div>
        <ul>
          <li>
            <Link href={"/"}>Future</Link>
          </li>
          <li>
            <Link href={"/"}>Future</Link>
          </li>
          <li>
            <Link href={"/"}>Future</Link>
          </li>
        </ul>
      </PokeNavBar>
    </>
  );
};

export default NavigationBar;
