import { Icon } from "@iconify/react";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <ul className="flex gap-3">
      <li>
        <Link href="https://twitter.com/jayasurian123" target="_blank">
          <Icon
            icon="fa6-brands:x-twitter"
            className="cursor-pointer text-2xl hover:text-blue-300"
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/jayasurian123" target="_blank">
          <Icon
            icon="fa6-brands:github"
            className="cursor-pointer text-2xl hover:text-blue-300"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/jayasurianmakkoth/"
          target="_blank"
        >
          <Icon
            icon="fa6-brands:linkedin"
            className="cursor-pointer text-2xl hover:text-blue-300"
          />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
