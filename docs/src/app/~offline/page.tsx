import { Heading } from "@/components/Heading.js";

import { ReloadButton } from "./ReloadButton.js";

const Page = () => {
  return (
    <div className="flex w-full items-center justify-center self-stretch">
      <Heading type="h2">offline.</Heading>
      <ReloadButton />
    </div>
  );
};

export default Page;
