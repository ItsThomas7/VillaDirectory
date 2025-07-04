import { notFound } from 'next/navigation';
import villas from '@/data/villas.json';
import Image from 'next/image';
import Link from 'next/link';
import InquiryForm from '@/components/InquiryForm';

interface PageProps {
  params: { id: string };
}

export default function VillaDetailPage({ params }: PageProps) {
  const villa = villas.find((v) => v.id.toString() === params.id);

  if (!villa) return notFound();

  const mainImage = villa.media.find((img) => img.isMain)?.url || villa.media[0]?.url;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-2">{villa.name}</h1>
      <p className="text-gray-600 mb-4">{villa.area}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {villa.media.map((img, idx) => (
          <Image
            key={idx}
            src={img.url}
            alt={`Photo ${idx + 1} of ${villa.name}`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-64"
          />
        ))}
      </div>

      <p className="mb-6 text-gray-700 leading-relaxed">{villa.description}</p>

      <p className="font-semibold mb-2 text-lg">Amenities:</p>
      <ul className="list-disc pl-5 mb-6 text-gray-700 grid grid-cols-2 sm:grid-cols-3 gap-y-1">
        {villa.amenities.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <p className="font-semibold text-lg mb-4">
        From €{villa.startingPricePerNight} per night
      </p>

      <p className="font-semibold mt-6 mb-2">Unavailable Dates:</p>
      <ul className="list-disc pl-5 mb-8 text-red-600">
        {villa.datesUnavailable?.map((date, idx) => (
          <li key={idx}>{date}</li>
        ))}
      </ul>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-2">Location</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps?q=${villa.geo.lat},${villa.geo.lng}&hl=es&z=14&output=embed`}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="mt-10">
        <InquiryForm />
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block text-blue-600 hover:underline"
        >
          ← Back to Villas
        </Link>
      </div>
    </main>
  );
}
