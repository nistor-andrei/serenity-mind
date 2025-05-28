import { Card } from "components/Card/Card";
import Image from "next/image";

type MindfulnessTipProp = {
  tip?: string;
};

export const MindfulnessTip = ({ tip }: MindfulnessTipProp) => {
  return (
    <Card className="flex items-center flex-col gap-3">
      <Image
        src="/lotus-flower.svg"
        alt="lotus"
        width={100}
        height={100}
        className="color-light-violet"
      />
      <h2 className="text-xl font-semibold">Today&apos;s mindfulness tip</h2>
      <p className="text-sm text-center text-light-gray">{tip || "Test"}</p>
    </Card>
  );
};
