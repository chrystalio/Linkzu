import Image from "next/image";
import data from "../../data.json"

interface LinkCardProps {
  title: string;
  href: string;
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-24 px-8">
      <Image className="rounded-full shadow-lg" alt={data.profile.name} src={data.profile.avatar} width={96} height={96} />
      <h1 className="font-semibold mt-4 text-xl text-white">
        {data.profile.name}
      </h1>
      <p className="text-sm text-white-500 mt-3 mb-10 max-w-md text-center">
        {data.profile.bio}
      </p>
      {data.links.map((link) => (
          <LinkCard key={link.title} title={link.title} href={link.href} />
        ))}
    </div>
  );
}

function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a href={href} target="_blank"
    rel="noopener noreferrer" className="flex mt-3 text-sm items-center p-3 w-full rounded-md hover:scale-105 transition-all border mb-3 max-w-3xl shadow-md bg-gray-300 text-gray-800 duration-500">
      <div className="flex flex-col text-center w-full">
        <h2 className="font-semibold text-md">{title}</h2>
      </div>
    </a>
  );
}