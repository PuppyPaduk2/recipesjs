function sortDeps(dependencies) {
  const entries = Object.entries(dependencies).sort(([a], [b]) => {
    var textA = a.toUpperCase();
    var textB = b.toUpperCase();

    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return Object.fromEntries(entries);
}

module.exports = { sortDeps };
