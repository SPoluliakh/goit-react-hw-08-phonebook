import { Link } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home ' },
  { href: 'phoneBook', text: 'Phone book ' },
  { href: 'register', text: 'Register ' },
  { href: 'logIn', text: 'Login ' },
  { href: '/', text: 'Logout' },
];

export const AppBar = () => {
  return (
    <>
      <header>
        <nav>
          {navItems.map(({ href, text }) => (
            <Link key={text} to={href}>
              {text}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};
