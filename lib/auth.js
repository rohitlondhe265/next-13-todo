import { nanoid } from 'nanoid'
import { SignJWT, jwtVerify } from 'jose'
import { USER_TOKEN, getJwtSecretKey } from './constants'

export class AuthError extends Error { }

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 */
export async function verifyAuth(req) {
    const token = req.cookies.get(USER_TOKEN)?.value

    if (!token) throw new AuthError('Missing user token')

    try {
        const verified = await jwtVerify(
            token,
            new TextEncoder().encode(getJwtSecretKey())
        );
        console.log(verified.payload);
        return verified.payload;
    } catch (err) {
        throw new AuthError('Your token has expired.')
    }
}

/**
 * Adds the user token cookie to a response.
 */
export async function setUserCookie(res) {

    const token = await new SignJWT({ // object you pass to SignJWT is the payload of our
        id: "1",
        username: "john",
        password: "John0908",
        isAdmin: true,
      })
        .setProtectedHeader({ alg: 'HS256' })
        .setJti("nanoid()")
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(new TextEncoder().encode(getJwtSecretKey()));

    res.cookies.set(USER_TOKEN, token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 2 hours in seconds
    })

    return res;
}

/**
 * Expires the user token cookie
 */
export function expireUserCookie(res) {
    res.cookies.delete(USER_TOKEN)
    return res;
}