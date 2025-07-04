import Image from 'next/image';
import Link from 'next/link';

interface Villa {
  id: string | number;
  name: string;
  area: string;
  description: string;
  startingPricePerNight: number;
  media: { url: string; isMain: boolean }[];
}

interface VillaCardProps {
  villa: Villa;
}

export default function VillaCard({ villa }: VillaCardProps) {
  const mainImage = villa.media.find((img) => img.isMain)?.url || villa.media[0]?.url;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
      <Link href={`/villa/${villa.id}`} className="block">
        <div className="relative w-full h-48">
          {mainImage && (
            <Image
              src={mainImage}
              alt={villa.name}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{villa.name}</h3>
          <p className="text-gray-500 text-sm">{villa.area}</p>
          <p className="text-gray-600 text-sm mt-1">{villa.description.slice(0, 60)}...</p>
          <p className="mt-3 text-gray-800 font-semibold">
            From €{villa.startingPricePerNight} <span className="text-sm text-gray-500">/ night</span>
          </p>
          <span className="inline-block mt-3 text-blue-600 text-sm font-semibold">View Details →</span>
        </div>
      </Link>
    </div>
  );
}
