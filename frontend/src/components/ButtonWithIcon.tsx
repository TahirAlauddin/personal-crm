import React from "react";
import { Button, DropdownMenu } from "@radix-ui/themes";

const ButtonWithIcon = ({ buttonText }: { buttonText: string }) => {
  return (
    <Button
      variant="outline"
      className="border-black font-medium flex items-center gap-2 border-[1.5px] rounded-sm px-2 py-1"
    >
      {buttonText}
      <DropdownMenu.TriggerIcon />
    </Button>
  );
};

export default ButtonWithIcon;
