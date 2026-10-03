import Image from "next/image";
import Card from "@/components/ui/card";

export default function ImageContainer({ src }: { src: string }) {
  return (
    <Card className="overflow-hidden p-0">
      <Image src={src} width={640} height={400} alt="Project image" className="aspect-[16/10] w-full object-cover" />
    </Card>
  );
}
