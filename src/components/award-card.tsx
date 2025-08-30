import Image from "next/image";

interface AwardCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  result: string;
  additionalInfo?: string;
}

export default function AwardCard({
  imgSrc,
  imgAlt,
  title,
  result,
  additionalInfo,
}: AwardCardProps) {
  return (
    <div className="card bg-card hover:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] active:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] focus:shadow-[0_10px_20px_-10px_rgba(94,234,212,0.4)] transition-all duration-500 w-full rounded-xl border-1 border-border hover:border-primary active:border-primary focus:border-primary flex p-5 justify-start items-center">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={240}
        height={240}
        className="mb-4 object-contain"
      />
      <h4 className="text-lg font-semibold flex justify-center items-center text-foreground text-center mb-1">
        {title}
      </h4>
      <h3 className="text-2xl font-bold flex justify-center items-center text-primary">
        {result}
      </h3>
      {additionalInfo && additionalInfo.trim() !== "" && (
        <h4 className="text-lg font-semibold flex justify-center items-center text-fuchsia-400 text-center">
          {additionalInfo}
        </h4>
      )}
    </div>
  );
}
