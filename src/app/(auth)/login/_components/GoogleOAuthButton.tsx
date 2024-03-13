"use client";
import { type SocialAuthProviders } from "@/__generated__/graphql";
import useSocialLoginMutation from "@/api/Authentication/useSocialLoginMutation";
import { SpinnerCircle } from "@/components/icons/SpinnerCircle";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleOAuthInner = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { mutateAsync: loginSocial } = useSocialLoginMutation();
  const login = useGoogleLogin({
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    onSuccess: async (codeResponse) => {
      // console.log("Code Response", codeResponse);
      try {
        await loginSocial([
          {
            input: {
              provider: "GOOGLE" as SocialAuthProviders,
              accessToken: codeResponse.access_token,
            },
          },
        ]);
        router.push("/");
      } catch (e) {}

      setLoading(false);
    },
    flow: "implicit",
  });
  return (
    <Button
      variant={"outline"}
      className="field-drop-shadow mt-3 flex h-10 px-10 items-center hover:bg-white justify-center gap-3 rounded-full bg-white text-black"
      onClick={() => {
        setLoading(true);
        login();
      }}
      disabled={loading}
    >
      {loading ? <SpinnerCircle /> : <FcGoogle size={25} />}
      Continue with Google
    </Button>
  );
};

const GoogleOAuthButton = () => {
  return (
    <GoogleOAuthProvider clientId={env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleOAuthInner />
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuthButton;
