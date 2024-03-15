
export const formatDate = (string,length) => {
  const newDate = new Date(string)
  const options = {
    hourCycle: 'h24',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }
  if (length !== 'small') {
      options.hour = '2-digit'
      options.minute = '2-digit'
  }
  return newDate.toLocaleDateString('en-GB', options)
}

export const captiliseFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1)
}

export const singleOrPluralView = (num,str) => {
  if (num !== 1) str += 's'
  return `${num} ${str}`
}