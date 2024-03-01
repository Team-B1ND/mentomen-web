export const useClipboardPaste = () => {
  const handlePasteFromClipboard = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  };

  return { handlePasteFromClipboard };
};
