import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

export default function DropdownAnchor({ label, toggle }) {
  return (
    <a href="" onClick={toggle}>
      <h1> {label} </h1>
      <Icon path={mdiChevronDown} size={1.7} />
    </a>
  );
}
