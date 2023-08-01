export const tagFilter = (data, key) => {
  var result = [];
  data?.forEach((res) => {
    let tags = res.tags
    if (tags.includes(key)) {
      result.push(res)
    }
  })
  return result
}
