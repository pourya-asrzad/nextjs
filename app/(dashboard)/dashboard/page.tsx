import Image from "next/image";
import Armanimg from "./../../_assets/images/arman.jpg";

export default function Home() {
  return (
    <div>
      <Image src={Armanimg} alt="arman" quality={10} />
    </div>
  );
}
