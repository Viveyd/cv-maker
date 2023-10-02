import Icon from "@mdi/react";
import { mdilChevronDown } from "@mdi/js";

export default function DropdownAnchor({ label, toggle }) {
  return (
    <a href="" onClick={toggle}>
      <h1> {label} </h1>
      <Icon path={mdilChevronDown} size={1.2} />
    </a>
  );
}
