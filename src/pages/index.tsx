import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <Image className="rounded-xl" 
      src='/saya.png' alt="Saya from 'A Sky Full Of Stars" 
      width={1280} height={720}/>
    </div>)
}
