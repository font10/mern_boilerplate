export const checkOrigin = (req, res, next) => {
  //* Check if we have the token
  if(!req.headers.authorization) return res.status(403).json({ error: "Not authorized. No token" })

  const token = req.headers.authorization.split(' ').pop()
  if(token === '123456') next()
  else res.status(409).send({ error: 'Wrong or expired token '})
}