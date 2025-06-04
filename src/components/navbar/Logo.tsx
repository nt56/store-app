import React from "react";
import { VscCode } from "react-icons/vsc";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <VscCode className="h-6 w-6" />
      </Link>
    </Button>
  );
};

export default Logo;
