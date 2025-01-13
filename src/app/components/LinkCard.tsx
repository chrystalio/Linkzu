interface LinkCardProps {
    title: string;
    href: string;
}

export default function LinkCard({ title, href }: LinkCardProps) {
    return (
        <a href={href} target="_blank"
        rel="noopener noreferrer" className="flex mt-3 text-sm items-center p-3 w-full rounded-md hover:scale-105 transition-all border mb-3 max-w-3xl shadow-md bg-gray-300 text-gray-800 duration-500">
          <div className="flex flex-col text-center w-full">
            <h2 className="font-semibold text-md">{title}</h2>
          </div>
        </a>
      );
}