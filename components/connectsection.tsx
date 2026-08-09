import Image from 'next/image';
import Link from 'next/link';

export default function ConnectSection() {
  const email = 'mansuriatif78@gmail.com';
  const whatsappNumber = '919146291001';
  const whatsappMessage = "Hey Atif, saw your portfolio and wanted to connect!";

  return (
    <div
      className="w-full font-[Helvetica] flex flex-col lg:flex-row items-center gap-8 lg:gap-4 py-16 px-3 lg:px-12 justify-center lg:justify-start lg:gap-[8vw] bg-white mix-blend-difference"
    >

      <div className="flex justify-center items-center shrink-0">
        <img
          src="/pfp.png"
          alt="Atif"
          className="h-[22vh] w-[22vh] lg:h-[30vh] lg:w-[30vh] border-1 hover:border-2 hover:border-[#00FF00]/50 hover:shadow-2xl hover:shadow-[#090270]/20 aspect-square rounded-full object-cover"
        />
      </div>

      
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 ">
        <div>
          <h1 className="text-[26px] lg:text-[60px] font-extrabold leading-tight">
            have some ideas?
          </h1>
          <h2 className="text-[14px] lg:text-[20px] font-semibold text-black/70">
            let&apos;s build some real things together
          </h2>
        </div>

        <div className="flex flex-col gap-3 w-full items-center lg:items-start">
          <Link
            href={`mailto:${email}`}
            className="flex items-center gap-3 group"
          >
            <Image src="/gmail.svg" alt="Email" width={28} height={28} />
            <span className="text-[15px] lg:text-[16px] font-medium group-hover:underline">
              {email}
            </span>
          </Link>

          <Link
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={28} height={28} />
            <span className="text-[15px] lg:text-[16px] font-medium group-hover:underline">
              +91 91462 91001
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}