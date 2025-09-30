import { registerAs } from '@nestjs/config';

export default registerAs('base', () => ({
    port: process.env.PORT,
    name: process.env.APP_NAME,
}));
