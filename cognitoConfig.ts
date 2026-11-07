import { Amplify } from 'aws-amplify';

export const configureCognito = (): boolean => {
  const region = import.meta.env.VITE_AWS_REGION;
  const userPoolId = import.meta.env.VITE_COGNITO_USER_POOL_ID;
  const userPoolClientId = import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID;

  if (!region || !userPoolId || !userPoolClientId) return false;

  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId,
        userPoolClientId,
        signUpVerificationMethod: 'code',
        loginWith: {
          username: true,
          email: true,
        },
      },
    },
  });
  return true;
};
