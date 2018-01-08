export function encode(s) {
  return unescape(encodeURIComponent(s))
}
export function decode(s) {
  return decodeURIComponent(escape(s))
}
