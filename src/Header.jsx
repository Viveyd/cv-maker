import Icon from "@mdi/react";
import { mdiPrinterEye, mdiNoteEdit, mdiPrinterSettings } from "@mdi/js";

export default function Header({ previewMode, previewToggler }) {
  return (
    <header>
      <h1>Resume Maker</h1>
      {previewMode && (
        <a onClick={print}>
          <Icon path={mdiPrinterSettings} size={1.6} />
        </a>
      )}
      <a onClick={() => previewToggler(!previewMode)}>
        <Icon path={previewMode ? mdiNoteEdit : mdiPrinterEye} size={1.6} />
      </a>
    </header>
  );
}
