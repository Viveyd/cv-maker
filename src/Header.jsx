export default function Header({ previewMode, previewToggler }) {
  return (
    <header>
      <h1>Resume Maker</h1>
      <a onClick={() => togglePreview(previewMode, previewToggler)}>Preview</a>
    </header>
  );
}

function togglePreview(previewMode, previewToggler) {
  previewToggler(!previewMode);
}
