module.exports = async (params) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const yearPath = `Journal/${year}`;

  // Create the year folder if it doesn't exist
  if (!(await app.vault.adapter.exists(yearPath))) {
    await app.vault.createFolder(yearPath);
  }

  // Save the path so QuickAdd can use it in the next step
  params.variables["journalPath"] = yearPath;

  // Also set the journal file name in ISO format
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  params.variables["journalFileName"] = `${year}-${month}-${day}`;
};
