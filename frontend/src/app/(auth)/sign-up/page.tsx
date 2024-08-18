import { FaCheckCircle } from 'react-icons/fa';
import { Signup as SignupComponent } from '@/components/Signup';

const features = [
  { id: 1, feature: 'Easy setup, no coding required' },
  { id: 2, feature: 'Free forever for core features' },
  { id: 3, feature: '14-day trial of premium features & apps' },
];

const companies = [
  {
    id: 1,
    link: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/v1685631505/Company%20logos/dropbox_bfeqf0.svg',
  },
  {
    id: 2,
    link: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/v1685631782/Company%20logos/lyft_xb3vqy.svg',
  },
  {
    id: 3,
    link: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/v1685631507/Company%20logos/hello-fresh_spytbw.svg',
  },
  {
    id: 4,
    link: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/v1685631505/Company%20logos/asana_sgibbb.svg',
  },
  {
    id: 5,
    link: 'https://res.cloudinary.com/zapier-media/image/upload/q_auto/v1685631509/Company%20logos/zendesk_g4uhso.svg',
  },
];

function Signup() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="flex gap-4 justify-center items-center max-w-4xl">
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col gap-3 m-10">
            <h1 className="font-semibold text-3xl mb-4 font-sans">
              Join millions worldwide who automate their work using Zapier.
            </h1>
            {features.map((x) => (
              <div key={x.id} className="flex gap-3 items-center">
                <FaCheckCircle color="green" size={20} />
                <p>{x.feature}</p>
              </div>
            ))}
          </div>
          <SignupComponent />
        </div>
      </div>
      <p className="text-xxs text-gray-600">
        Trusted at companies large and small
      </p>
      <div className="flex gap-10 mt-4">
        {companies.map((x) => (
          <img key={x.id} src={x.link} className="w-15 h-4" />
        ))}
      </div>
    </div>
  );
}

export default Signup;
