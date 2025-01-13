import Image from "next/image";
import data from "../../data.json"
import LinkCard from "./components/LinkCard";
import SocialIcon from "./components/SocialIcon";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-14 md:mt-36 px-8">
      <Image className="rounded-full shadow-lg" alt={data.profile.name} src={data.profile.avatar} width={96} height={96} />
      <h1 className="font-semibold mt-4 text-xl text-white">
        {data.profile.name}
      </h1>
      <p className="text-sm text-white-500 mt-3 mb-4 max-w-md text-center">
        {data.profile.bio}
      </p>
      
      <div className="flex items-center justify-center gap-1 md:gap-4 mb-4 text-white max-w-sm">
        {data.socials.map((social) => (
          <SocialIcon key={social.href} platform={social.platform} href={social.href} />
        ))}
      </div>

      {data.links.map((link) => (
          <LinkCard key={link.title} title={link.title} href={link.href} />
        )
      )}
    </div>
  );
}