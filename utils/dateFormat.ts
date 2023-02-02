export const dateFormat = (date: Date) => {
  return date.toLocaleString('default', { month: 'short', day: '2-digit' })
}