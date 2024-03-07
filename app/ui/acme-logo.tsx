import { HomeModernIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  const icon = <HomeModernIcon className="h-11 w-11 " />;
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {icon}
      <p className="text-[44px]">Dashy</p>
    </div>
  );
}
