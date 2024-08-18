import Button from './buttons/Button';
import { IoMdCheckmark } from 'react-icons/io';

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-[2.75rem] max-w-xl leading-[1.1] tracking-tighter font-semibold text-pretty">
        Automate as fast as you can type
      </h1>
      <h4 className="tracking-tight max-w-xl font-medium">
        AI gives you automation superpowers, and Zapier puts them to work.
        Pairing AI and Zapier helps you turn ideas into workflows and bots that
        work for you.
      </h4>
      <div className="flex gap-3 justify-center">
        <Button size="xl" text="Start with free email" primary={true} />
        <Button size="xl" text="Start free with Google" showIcon={true} />
      </div>
      <div className="flex mt-2 gap-3 justify-center text-xxs">
        <p className="flex gap-1 items-center">
          <IoMdCheckmark size={15} />
          <span className="font-bold">Free forever</span>{' '}
          <span>for core features</span>
        </p>
        <p className="flex gap-1 items-center">
          <IoMdCheckmark size={15} />
          <span className="font-bold">More apps</span>{' '}
          <span>than any other platform</span>
        </p>
        <p className="flex gap-1 items-center">
          <IoMdCheckmark size={15} />
          <span>Cutting-edge</span>{' '}
          <span className="font-bold">AI features</span>
        </p>
      </div>
      <div className="max-w-3xl">
        <video
          loop
          muted
          autoPlay
          preload="auto"
          src="https://res.cloudinary.com/zapier-media/video/upload/f_auto,q_auto/v1706042175/Homepage%20ZAP%20Jan%2024/012324_Homepage_Hero1_1920x1080_pwkvu4.mp4"
        ></video>
      </div>
    </div>
  );
}

export default Hero;
