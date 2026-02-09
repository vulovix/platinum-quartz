module.exports = async (params) => {
  const activeFile = app.workspace.getActiveFile();

  if (!activeFile || !activeFile.path.startsWith("Spaces/")) {
    new Notice("❌ Not in a space folder!");
    return;
  }

  const pathParts = activeFile.path.split("/");
  const spacePath = `${pathParts[0]}/${pathParts[1]}`;

  // Create the folder if it doesn't exist
  if (!(await app.vault.adapter.exists(spacePath))) {
    await app.vault.createFolder(spacePath);
  }

  // Save the path so QuickAdd can use it in the next step
  params.variables["spacePath"] = spacePath;
};
