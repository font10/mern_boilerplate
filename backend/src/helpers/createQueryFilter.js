export async function createQueryFilter(query) {
  if(query.age) {
    let queryStr = JSON.stringify(query)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)
    const queryObj = JSON.parse(queryStr)

    return queryObj
  }

  if(query.page && query.limit) {
    const { page, limit } = query
    const skip = (page - 1) * 10
    const queryObj = { skip, limit }
    return queryObj
  }

  return {}
}