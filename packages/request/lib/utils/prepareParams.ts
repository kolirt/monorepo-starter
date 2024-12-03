function prepareParams(data: Record<string, any>) {
  Object.keys(data).forEach((key) => {
    data[key] = typeof data[key] === 'boolean' ? Number(data[key]) : data[key]
  })
  return data
}

export { prepareParams }
