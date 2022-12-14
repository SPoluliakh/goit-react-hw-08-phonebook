import { Link } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home ' },
  { href: 'phoneBook', text: 'Phone book ' },
];

export const Navigation = () => {
  return (
    <>
      <nav>
        {navItems.map(({ href, text }) => (
          <Link key={text} to={href}>
            {text}
          </Link>
        ))}
      </nav>
    </>
  );
};
