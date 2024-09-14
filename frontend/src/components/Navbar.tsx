import Logo from './utils/Logo';
import Button from './utils/buttons/Button';
import LinkButton from './utils/buttons/LinkButton';

const navItems = [
  {
    id: 1,
    text: 'Product',
    link: 'product',
    showDropDownIcon: true,
  },
  {
    id: 2,
    text: 'Solutions',
    link: 'solutions',
    showDropDownIcon: true,
  },
  {
    id: 3,
    text: 'Resources',
    link: 'resources',
    showDropDownIcon: true,
  },
  {
    id: 4,
    text: 'Enterprise',
    link: 'enterprise',
    showDropDownIcon: false,
  },
  {
    id: 5,
    text: 'Pricing',
    link: 'pricing',
    showDropDownIcon: false,
  },
];

function Navbar() {
  return (
    <div className="flex sticky w-full bg-gray-90 top-0 overflow-y-auto justify-between px-4 border-b-[1px] py-2 border-gray-200">
      <div className="flex gap-1 items-center">
        {/* change to LOGO */}
        <Logo />
        {navItems.map((x) => (
          <LinkButton
            key={x.id}
            text={x.text}
            link={x.link}
            showDropDownIcon={x.showDropDownIcon}
          />
        ))}
      </div>
      <div className="flex gap-1 items-center">
        <LinkButton
          text="Explore integrations"
          link="explore-integrations"
          showGlobeIcon={true}
        />
        <LinkButton text="Contact Sales" link="contact-sales" />
        <LinkButton text="Log in" link="login" />
        <Button text="Sign up" link="sign-up" size="sm" primary={true} />
      </div>
    </div>
  );
}

export default Navbar;
