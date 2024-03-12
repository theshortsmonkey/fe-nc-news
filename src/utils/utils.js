
export const formatDate = (string) => {
  const newDate = new Date(string)
  const options = {
    hourCycle: 'h24',
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }
  return newDate.toLocaleDateString('en-GB', options)
}

export const captiliseFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1)
}