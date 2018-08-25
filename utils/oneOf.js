module.exports = (target, defaultValue) => (value) => target.indexOf(value) === -1 ? defaultValue : value
