import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col p-12 bg-[#f8f8f8]">
        <div className="flex flex-row gap-4 items-center">
      <Image
        src="/emailblack.jpg"
        alt="email"
        width={80}
        height={80}
        priority
      />
      <div>lilybaird1@gmail.com</div>
      </div>
      <div className="flex flex-row gap-4 p-4">
        <a href="https://linkedin.com/in/lilybaird123" target="blank">
          <Image
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="lilybaird"
            height={80}
            width={80}
          />
        </a>
        <a href="https://github.com/fatfroggo" target="blank">
          <Image
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            width={80}
            height={80}
            alt="fatfroggoGit"
          />
        </a>
      </div>
    </div>
  );
}
