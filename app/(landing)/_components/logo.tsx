import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.png" width={100} height={100} alt="Logo" />
    </div>
  );
};

export default Logo;
