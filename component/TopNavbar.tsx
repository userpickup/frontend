import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { logout, useCurrentUser } from "../src/api/firebaseAuth";

const TopNavbar: React.FC = () => {
  const router = useRouter();
  const currentUser = useCurrentUser();
  return (
    <Box>
      {currentUser ? (
        <Button variant="outlined" onClick={() => logout()}>
          ログアウト
        </Button>
      ) : (
        <>
          <Button variant="outlined" onClick={() => router.push("/login")}>
            ログイン
          </Button>
          <Button variant="outlined" onClick={() => router.push("/sign_up")}>
            サインアップ
          </Button>
        </>
      )}
    </Box>
  );
};

export default TopNavbar;
