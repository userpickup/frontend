import { Button, Typography, Box, CardContent, Card } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { auth, result } from "../src/api/result";
import { useRouter } from "next/router";

const CheckStatus = {
  positive100: {
    key: "ポシティブ度100%",
    label: "幸せ、最高、うれしい、大好き",
  },
  positive90: {
    key: "ポシティブ度90%",
    label: "わくわくする、心を開く、楽しい",
  },
  positive80: {
    key: "ポシティブ度80%",
    label: "愛する、幸運、 祝福、伝説の、さわやか",
  },
  positive70: {
    key: "ポシティブ度70%",
    label: "信頼、リラックス, 豊か,ありがとう",
  },
  positive60: { key: "ポシティブ度60%", label: "ポジティブ, 自己愛, 広大" },
  positive50: {
    key: "ポシティブ度50%",
    label: "やりがい, 爽快, 純粋, スマート",
  },
  positive40: {
    key: "ポシティブ度40%",
    label: "愛想がいい, 気分がいい, 熱心, 感謝, ハッピー",
  },
  positive30: {
    key: "ポシティブ度30%",
    label: "勇敢な、大切な、明るい, 魅惑, 晴れ, 直感, こころが若い, にこやか",
  },
  positive20: {
    key: "ポシティブ度20%",
    label: "クリエイティブ、上手、癒し, 穏やか, 革新, あふれんばかり",
  },
  positive10: {
    key: "ポシティブ度10%",
    label:
      "おめでとう, 有能, すごい, 賢い, 祝福, 貪欲, アップ, インスピレーション",
  },
  positive5: {
    key: "ポシティブ度5%",
    label: "おいしい、いいね、 陽気、繁栄, 歓喜,アクション, ぜいたく",
  },
  negative100: {
    key: "ネガティブ度100%",
    label: "死にたい、死ぬ、殺す、ファック",
  },
  negative90: {
    key: "ネガティブ度90%",
    label: "つらい、もう無理、なにもしたくない、人生おわった",
  },
  negative80: {
    key: "ネガティブ度80%",
    label: "しんどい、きつい、つかれた",
  },
  negative70: {
    key: "ネガティブ度70%",
    label: "もう無理、助けて、後悔",
  },
  negative60: {
    key: "ネガティブ度60%",
    label: "きもい、きしょい、泣いた",
  },
  negative50: {
    key: "ネガティブ度50%",
    label: "だるい、飽きた",
  },
  negative40: {
    key: "ネガティブ度40%",
    label: "うざい、クソ",
  },
  negative30: {
    key: "ネガティブ度30%",
    label: "童貞、ありえない、嫉妬",
  },
  negative20: {
    key: "ネガティブ度20%",
    label: "陰キャ、ゲス、デブ",
  },
  negative10: {
    key: "ネガティブ度10%",
    label: "バカ、あほ、まぬけ、ハゲ",
  },
  negative5: {
    key: "ネガティブ度5%",
    label: "ねむい、あせった",
  },
};

const TopPage: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const router = useRouter();
  const { oauth_token, oauth_verifier } = router.query;
  const [currentUserStatus, setCurrentUserStatus] = React.useState("");

  const handleSubmit = React.useCallback(async () => {
    try {
      const response = await auth();
      router.push(
        `https://api.twitter.com/oauth/authenticate?oauth_token=${response.data.token}`
      );
    } catch (error) {}
  }, [router]);

  const handleResult = React.useCallback(async () => {
    try {
      const params = {
        oauth_token: oauth_token as string,
        oauth_verifier: oauth_verifier as string,
      };
      const response = await result(params);
      setCurrentUserStatus(response.data);
      setIsChecked(true);
    } catch (error) {
      console.log(error, "error");
    }
  }, [oauth_token, oauth_verifier]);

  React.useEffect(() => {
    if (!oauth_token && !oauth_verifier) return;
    handleResult();
  }, [oauth_token, oauth_verifier, handleResult]);

  return (
    <>
      <Box
        sx={{
          mx: "auto",
          p: 5,
          background: "linear-gradient(#3232e0, #3cc0fd)",
          borderRadius: 4,
          height: 700,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            診断アプリ
          </Typography>
          <MenuIcon sx={{ fontSize: 40, color: "white" }} />
        </Box>
        {isChecked ? (
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{ color: "white", fontWeight: "bold", fontSize: 35, mb: 4 }}
            >
              ～～～診断結果～～～
            </Typography>
            <Typography sx={{ color: "white", fontSize: 25 }}>
              診断した結果あなたは
            </Typography>
            <Typography sx={{ color: "white", fontSize: 25 }}>
              \
              {CheckStatus[currentUserStatus as string]
                ? CheckStatus[currentUserStatus as string]["key"]
                : ""}
              ！！//
            </Typography>
            <Card
              elevation={10}
              sx={{
                borderRadius: 10,
                mt: 3,
                minWidth: 275,
                px: 4,
                py: 7,
                width: "80%",
                mx: "auto",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14, mb: 2 }}
                  color="text.secondary"
                  gutterBottom
                >
                  あなたの性格は...
                </Typography>
                <Typography sx={{ fontSize: 20 }} component="div">
                  {CheckStatus[currentUserStatus as string]
                    ? CheckStatus[currentUserStatus as string]["label"]
                    : ""}
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "50%",
                mt: 5,
                mx: "auto",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  mt: 5,
                  ml: 1,
                  background:
                    "linear-gradient(to bottom right,#ff4800, yellow)",
                  color: "white",
                  borderRadius: 7,
                  width: 200,
                  height: 50,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "white" },
                }}
                onClick={() => setIsChecked(false)}
              >
                診断TOPへ
              </Button>
              <Button
                variant="contained"
                sx={{
                  mt: 5,
                  bgcolor: "white",
                  color: "black",
                  borderRadius: 7,
                  width: 200,
                  height: 50,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "white" },
                }}
                onClick={() => setIsChecked(false)}
              >
                もう一度
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 50,
                  mt: 10,
                }}
              >
                ホメホメ性格診断
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                  mb: 10,
                }}
              >
                たくさんの人がホメホメ性格診断をしています！！
              </Typography>
              <Typography
                sx={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Twitterからあなたの隠れた性格を探ってみませんか？
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 10,
                  background:
                    "linear-gradient(to bottom right,#ff4800, yellow)",
                  color: "white",
                  borderRadius: 25,
                  width: 500,
                  height: 100,
                  size: 150,
                  fontSize: 30,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "white" },
                }}
                onClick={() => handleSubmit()}
              >
                診断する
              </Button>
            </Box>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Link href="/">
                <a style={{ color: "white" }}>プライバシーポリシー</a>
              </Link>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default TopPage;
