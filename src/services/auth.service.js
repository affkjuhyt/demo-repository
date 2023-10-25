import User from '../models/user.model.js';

import { generateAuthTokens } from '../middlewares/token.js';

export const signin = async (email, password) => {
    if (!email || !password) {
        return {
            type: 'Error',
            statusCode: 400,
            message: 'Bad Request'
        }
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return {
            type: 'Error',
            statusCode: 401,
            message: 'Not Found'
        }
    }

    const tokens = await generateAuthTokens(user);

    return {
        type: 'Success',
        statusCode: 200,
        message: 'success',
        user,
        tokens
    }
}

export const signup = async (body) => {
    console.log('body is: ', body);
    const { name, username, email, password } = body;

    if (!name || !username || !email || !password) {
        return {
            type: 'Error',
            message: 'Bad request',
            statusCode: 400
        };
    }

    if (password.length < 8) {
        return {
            type: 'Error',
            message: 'passwordLength',
            statusCode: 400
        }
    }

    // const isEmailTaken = await User.isEmailTaken(email);

    // if (isEmailTaken) {
    //     return {
    //         type: 'Error',
    //         message: 'emailToken',
    //         statusCode: 409
    //     }
    // }

    const user = await User.create({
        name,
        username,
        email,
        password,
    });

    console.log('generateToken: ')
    const tokens = await generateAuthTokens(user);

    // user.password = undefined;

    return {
        type: 'Success',
        statusCode: 201,
        message: 'successSignUp',
        user,
        tokens
    }
}
