interface LinkCardProps {
    title: string;
    href: string;
}

export default function LinkCard({ title, href }: LinkCardProps) {
    return (
        <a href={href} target="_blank"
        rel="noopener noreferrer" className="flex mt-3 text-sm items-center p-3 w-full rounded-md border mb-3 max-w-3xl hover:shadow-md text-gray-800 h-12 border-black border-2 p-2.5 bg-[#FAC67A] hover:bg-[#FAC634] transition-all shadow-[4px_5px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]">
          <div className="flex flex-col text-center w-full">
            <h2 className="font-semibold text-md">{title}</h2>
          </div>
        </a>
      );
}