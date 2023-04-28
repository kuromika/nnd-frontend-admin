import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        className="rounded-xl p-5 object-cover aspect-square md:aspect-auto"
        src="/saya.png"
        alt="Saya from 'A Sky Full Of Stars"
        width={1400}
        height={900}
      />
    </div>
  );
}
