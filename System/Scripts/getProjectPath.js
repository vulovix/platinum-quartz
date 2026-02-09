module.exports = async (params) => {
  const activeFile = app.workspace.getActiveFile();

  if (!activeFile || !activeFile.path.startsWith("Projects/")) {
    new Notice("❌ Not in a project folder!");
    return;
  }

  const pathParts = activeFile.path.split("/");
  const projectPath = `${pathParts[0]}/${pathParts[1]}`;

  // Create the folder if it doesn't exist
  if (!(await app.vault.adapter.exists(projectPath))) {
    await app.vault.createFolder(projectPath);
  }

  // Save the path so QuickAdd can use it in the next step
  params.variables["projectPath"] = projectPath;
};
