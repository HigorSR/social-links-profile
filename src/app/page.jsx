import Image from "next/image";
import avatarJessica from "../../public/avatar-jessica.jpeg";
import Links from "@/components/buttons";
import CodedBy from "@/components/coded-by";
import NameLocation from "@/components/name-location";
import Description from "@/components/description";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-3 bg-Grey-900 h-screen text-White">
      <div className="flex flex-col items-center gap-6 w-11/12 sm:w-[375px] p-6 rounded-3xl bg-Grey-800">
        <Image
          src={avatarJessica}
          alt="avatar jessica"
          className="w-[110px] rounded-full"
        />
        <NameLocation />
        <Description />
        <Links />
      </div>

      <CodedBy />
    </main>
  );
}
