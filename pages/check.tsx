import { Button, Typography, Box, CardContent, Card } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const CheckPage: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const handleSubmit = React.useCallback(async () => {
    try {
      setIsChecked(true);
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          // width: 600,/
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
              \ネガティブ度100%！！//
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
                  おめでとう, 有能, すごい, 賢い, 祝福, 貪欲, アップ,
                  インスピレーション
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
                <span
                  style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    textAlign: "center",
                    letterSpacing: 2,
                    borderBottom: "2px solid #fff",
                    color: "white",
                    marginRight: 10,
                  }}
                >
                  10,000
                </span>
                人がホメホメ性格診断！！
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
              <a style={{ color: "white" }} href="/">
                プライバシーポリシー
              </a>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default CheckPage;
