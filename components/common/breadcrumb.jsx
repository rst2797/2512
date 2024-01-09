// components/Breadcrumb.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LiaGreaterThanSolid } from "react-icons/lia";

const Breadcrumb = ({name, category}) => {
  const router = useRouter();
  const { pathname } = router;

  const breadcrumbItems = pathname.split('/').filter((item) => item !== '');

  return (
    <nav>
      <ul className="flex items-center pb-2 font-bold text-xs lg:text-[.8rem]">
        <li>
          <Link href="/shop/tshirt">
            <a>Shop</a>
          </Link>
        </li>
          <LiaGreaterThanSolid className='mx-2'/>
        <li>
          <Link href="/shop/tshirt">
            <a>{category}</a>
          </Link>
        </li>
          <LiaGreaterThanSolid className='mx-2'/>
        <li>
          <Link href="/">
            <a>{name}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
