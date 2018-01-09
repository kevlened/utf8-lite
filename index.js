export function toUtf8(s) {
  return unescape(encodeURIComponent(s))
}
export function fromUtf8(s) {
  return decodeURIComponent(escape(s))
}
