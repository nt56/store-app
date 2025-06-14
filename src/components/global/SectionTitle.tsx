import React from "react";
import { Separator } from "../ui/separator";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h1>
      <Separator />
    </div>
  );
};

export default SectionTitle;
