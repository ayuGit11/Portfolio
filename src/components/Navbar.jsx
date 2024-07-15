import logo from "../assets/ayushiLogo.jpeg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-40" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ayushi-yadav-0a6a30247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ayuGit11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ayushiyadav1258/?utm_source=qr&igsh=MWEybXlkcGg3cW53eQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
