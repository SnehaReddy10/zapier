import Banner from '@/components/Banner';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Navbar />
      <div className="mx-44 my-10 flex justify-center text-center">
        <Hero />
      </div>
    </div>
  );
}
