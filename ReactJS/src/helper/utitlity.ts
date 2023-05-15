export const allowOnlyDigits: (e: React.KeyboardEvent) => boolean = (e) => {
  const digitOnlyRegex = /^[0-9\b]*$/
  const pressedKey = e.key
  if (digitOnlyRegex.test(pressedKey) || pressedKey === 'Backspace') {
    return true
  }
  e.preventDefault()
  return false
}
