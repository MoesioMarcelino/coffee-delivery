export function checkFormValid(form: object) {
  return Object.values(form).every(
    (value: string) => (value && value.length) || typeof value !== 'undefined',
  )
}
