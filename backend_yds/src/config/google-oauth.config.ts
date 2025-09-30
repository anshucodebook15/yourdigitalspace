import { registerAs } from "@nestjs/config";

export default registerAs("googleOAuth", () => ({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/v1/auth/google/callback',
  scope: ['email', 'profile'],
}));
