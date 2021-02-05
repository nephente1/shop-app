import { rest, setupWorker } from 'msw';
import { setupServer } from 'msw/node';
import Cookies from 'js-cookie';

interface LoginBody {
	login: string,
	password: string
  }
  interface LoginResponse {
	token: string,

  }

export const handlers = [
  rest.post<LoginBody>('/login', (req, res, ctx) => {
    const { login, password } = req.body

    return res(
		ctx.status(200),
		ctx.json({
			token: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',

			login,
			password
		}),

	)

  }),
]

export const worker = setupWorker(...handlers);
export const server = setupServer(...handlers);