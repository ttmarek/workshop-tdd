function formatUsername(dep, username) {
  return dep.slugify(dep.trim(username));
}

module.exports = { formatUsername };
