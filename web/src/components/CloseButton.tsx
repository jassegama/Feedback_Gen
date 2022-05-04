import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return (
        <Popover.Button className="top-5 right=5 absolut text-zinc-400 hover:text-zinc-100" title="Close Feedback Form">
            <X weight="bold" clasName="w-4 h-4" />
        </Popover.Button>
    )
}