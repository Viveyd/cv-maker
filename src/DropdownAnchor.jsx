import Icon from "@mdi/react";
import { mdiChevronDown, mdiPlus } from "@mdi/js";

export default function DropdownAnchor({ label, toggle, add }) {
  function addFn(e) {
    e.preventDefault();
    e.stopPropagation();
    add(e);
  }
  return (
    <a href="" onClick={toggle}>
      <h1> {label} </h1>
      {add != null && (
        <button onClick={addFn}>
          <Icon path={mdiPlus} size={1.7} />
        </button>
      )}
      <Icon path={mdiChevronDown} size={1.7} />
    </a>
  );
}
