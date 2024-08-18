import Button from './buttons/Button';
import LinkButton from './buttons/LinkButton';

function Navbar() {
  return (
    <div className="flex sticky w-full bg-[#fffdf9] top-0 overflow-y-auto justify-between px-4 border-b-[1px] py-2 border-gray-200">
      <div className="flex gap-1 items-center">
        {/* change to LOGO */}
        <span className="font-bold px-4">_zapier</span>
        <LinkButton text="Product" link="product" showDropDownIcon={true} />
        <LinkButton text="Solutions" link="solutions" showDropDownIcon={true} />
        <LinkButton text="Resources" link="resources" showDropDownIcon={true} />
        <LinkButton text="Enterprise" link="enterprise" />
        <LinkButton text="Pricing" link="pricing" />
      </div>
      <div className="flex gap-1 items-center">
        <LinkButton
          text="Explore integrations"
          link="explore-integrations"
          showGlobeIcon={true}
        />
        <LinkButton text="Contact Sales" link="contact-sales" />
        <LinkButton text="Log in" link="login" />
        <Button text="Sign up" link="signup" size="sm" primary={true} />
      </div>
    </div>
  );
}

export default Navbar;
