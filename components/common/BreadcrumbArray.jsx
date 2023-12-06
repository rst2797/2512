import Link from "next/link";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Breadcrumb = ({ name, category }) => {
  return (
    <nav>
      <ul className="flex items-center pb-[1.56rem] pt-[6rem] font-lato-regular !font-extrabold !text-sm">
        <li>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </li>
        <LiaGreaterThanSolid className="mx-2 font-extrabold" />
        <li>
          <Link href="/home/delivery-return-exchange">
            <a>{category}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Breadcrumb;