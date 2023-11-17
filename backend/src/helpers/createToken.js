import jwt from 'jsonwebtoken'

export async function createToken(user) {
    try {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "5hr"
        })

        return token;
        } catch(error) {
        console.log(`Error creating token ${error}`, error.statusCode)
        }
}