// config/configuration.ts
export default () => ({
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,

    database: {
        uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/devdb',
        name: process.env.DATABASE_NAME || 'myapp',
    },

    jwt: {
        secret: process.env.JWT_SECRET || 'dev_secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },

    google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        callbackUrl: process.env.GOOGLE_CALLBACK_URL || '',
    },
});
