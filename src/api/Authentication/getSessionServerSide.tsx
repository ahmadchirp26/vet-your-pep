'use server';
import {cookies} from 'next/headers'
import { type UserSession } from './getSession';
import { jwtDecode } from 'jwt-decode';

export const getSessionServerSide = () => {
  const token = cookies().get("auth.sessionToken");
  if (!token) return null;
  const session = jwtDecode<UserSession>(token.value);
  return {
    ...session,
    accessToken: token.value,
  };
};
