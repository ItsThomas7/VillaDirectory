import villas from '@/data/villas.json';
import VillaCard from '@/components/VillaCard';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-black mb-8">Our Villas</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {villas.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </div>
    </main>
  );
}
