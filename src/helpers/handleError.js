export const httpError = (res, err) => {
  res.status(500)
  res.send({ error: 'Something happens and goes wrong' })
}