import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function MidJourneyNavbar() {
  return (
    <>
      <div className="bg-neutral-700 flex items-center gap-2 justify-between p-2 px-4 midjourney-navbar w-full">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-white text-sm select-none">MJ Prompt Tool</h1>
          <a
            href="https://github.com/claudfuen/prompt-tool"
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <div className="flex gap-2 items-center text-white hover:opacity-60 cursor-pointer">
              <p>Contribute</p>
              <FaGithub className="text-white text-xs h-6 w-6" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
