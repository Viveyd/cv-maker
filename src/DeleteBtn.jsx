import Icon from "@mdi/react";
import { mdiDeleteForever } from "@mdi/js";

export default function DeleteBtn({ onClickHandler = () => 0 }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      <Icon path={mdiDeleteForever} size={1} />
    </button>
  );
}
