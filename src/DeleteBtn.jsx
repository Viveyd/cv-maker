import Icon from "@mdi/react";
import { mdiDeleteForever } from "@mdi/js";

export default function DeleteBtn({ target }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <Icon path={mdiDeleteForever} size={1} />
    </button>
  );
}
