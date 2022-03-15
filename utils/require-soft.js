function requireSoft(mdl) {
  return (id, def = undefined) => {
    try {
      return mdl.require(id);
    } catch {
      return def;
    }
  };
}

module.exports = { requireSoft };
