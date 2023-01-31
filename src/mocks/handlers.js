import { rest } from 'msw';
import { apiInfo, northFieldData } from './data';

export const handlers = [
  rest.get('/api/dynamic/:fieldName', (req, res, ctx) => {
    const { fieldName } = req.params;
    if (fieldName === 'North') {
      return res(ctx.status(200), ctx.json(northFieldData));
    }
    return res(
      ctx.status(404),
      ctx.json({ error: new Error('field not found') })
    );
  }),
];
