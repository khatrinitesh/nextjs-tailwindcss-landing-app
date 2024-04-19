import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <>
    
    <header className="top-0 w-full  z-30 bg-white-500 transition-all  p-4">
      <div className="container mx-auto">
        <div className="w-[100px]">
          <Link href="/">
            <Image src={Logo} width={80} />
          </Link>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
