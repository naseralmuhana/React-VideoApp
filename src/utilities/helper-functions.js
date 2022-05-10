export const format = (seconds) => {
  if (isNaN(seconds)) return "00:00"
  const date = new Date(seconds * 1000),
    hh = date.getUTCHours(),
    mm = date.getUTCMinutes().toString().padStart(2, "0"),
    ss = date.getUTCSeconds().toString().padStart(2, "0")

  if (hh) return `${hh}:${mm}:${ss}`

  return `${mm}:${ss}`
}
