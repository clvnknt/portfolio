import Image from "next/image";

export default function Intro() {
  return (
    <div className="mx-20 flex items-center justify-center" id="home">
      <Image className="h-40 w-40 rounded-full object-cover" src="/images/me-formal.jpg" width={160} height={160} alt="Profile photo" priority />
    </div>
  );
}
