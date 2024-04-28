import mainLogo from "@/public/main-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image
        alt="logo"
        src={mainLogo}
        unoptimized
        className="h-10 w-auto"
        priority
      />
      <div>
        <p className="text-primary text-xl font-bold leading-5">
          24시동탄시티 동물의료센터
        </p>
        <p className="text-golden-dream-600 text-sm">
          Dongtan City Animal Medical Center
        </p>
      </div>
    </Link>
  );
}
