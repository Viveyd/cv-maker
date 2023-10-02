import Icon from "@mdi/react";
import { mdiPrinterEye, mdiNoteEdit } from "@mdi/js";

export default function Header({ previewMode, previewToggler }) {
  return (
    <header>
      <h1>Resume Maker</h1>
      <a onClick={() => togglePreview(previewMode, previewToggler)}>
        <Icon path={previewMode ? mdiNoteEdit : mdiPrinterEye} size={1.6} />
      </a>
    </header>
  );
}

function togglePreview(previewMode, previewToggler) {
  previewToggler(!previewMode);
}
