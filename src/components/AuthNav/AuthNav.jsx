import { Link } from 'react-router-dom';

const navItems = [
  { href: 'register', text: 'Register ' },
  { href: 'logIn', text: 'Login ' },
];

export const AuthNav = () => {
  return (
    <div>
      {navItems.map(({ href, text }) => (
        <Link key={text} to={href}>
          {text}
        </Link>
      ))}
    </div>
  );
};
