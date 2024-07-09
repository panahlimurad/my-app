import LayoutHome from "@/components/LayoutHome/LayoutHome";
import Image from "next/image";

export default function Home() {
  return (
    <LayoutHome>
      <main>
        Home page
      <Image  width={200} height={200} loading="lazy" objectFit="cover" src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"/>
      </main>
    </LayoutHome>
  );
}
