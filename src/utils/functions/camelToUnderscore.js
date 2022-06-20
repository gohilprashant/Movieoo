function camelToUnderscore(key) {
  var result = key.replace(/([A-Z])/g, ' $1');
  return result.split(' ').join('_').toLowerCase();
}
export default camelToUnderscore;
