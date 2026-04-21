import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLine, FaXTwitter } from "react-icons/fa6";

const ProfilePage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://i.pinimg.com/originals/1e/12/ae/1e12aea2b5bb03772ab4f622a2306c91.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: 360,
          backgroundColor: "#fff",
          borderRadius: 4,
          p: 2,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {/* Header Image */}
        <Box
          sx={{
            height: 140,
            backgroundImage: "url('/pic/bgProfile.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
          }}
        />

        {/* Profile Section */}
        <Box sx={{ textAlign: "center", mt: -6, px: 2 }}>
          <Avatar
            src="/pic/profile.jpg"
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              border: "3px solid white",
            }}
          />

          <Typography
            variant="h6"
            sx={{ mt: 1, fontWeight: "bold", color: "#826767" }}
          >
            chrisnastore
          </Typography>

          <Typography variant="body2" sx={{ color: "#826767" }}>
            ♡༚ᱹꛊ༷d𝒹e บี ฟอ d𝓂 ཾ 𓈒‎ׅ
          </Typography>
        </Box>

        {/* Buttons */}
        <Box sx={{ px: 2, mt: 2 }}>
          <Button
            fullWidth
            startIcon={<FaLine />}
            href="https://lin.ee/XVZPf1XN"
            target="_blank"
            sx={{
              backgroundColor: "#f8d7da",
              color: "#fff",
              borderRadius: 3,
              mb: 1,
              "&:hover": { backgroundColor: "#f5c2c7" },
              textTransform: "lowercase",
            }}
          >
            @941ooqwh
          </Button>

          <Button
            fullWidth
            startIcon={<FaFacebookSquare />}
            href="https://www.facebook.com/krungkao.97"
            target="_blank"
            sx={{
              backgroundColor: "#f8d7da",
              color: "#fff",
              borderRadius: 3,
              mb: 1,
              "&:hover": { backgroundColor: "#f5c2c7" },
              textTransform: "lowercase",
            }}
          >
            ᨳcྀིh̀isu꯭nཾᥲ ヾ
          </Button>
          <Button
            fullWidth
            startIcon={<FaXTwitter />}
            href="https://x.com/chrisnastore?s=21"
            target="_blank"
            sx={{
              backgroundColor: "#f8d7da",
              color: "#fff",
              borderRadius: 3,
              mb: 4,
              "&:hover": { backgroundColor: "#f5c2c7" },
              textTransform: "lowercase",
            }}
          >
            @chrisnastore
          </Button>
        </Box>

        {/* Highlight Section */}
        {/* <Box sx={{ p: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1, fontWeight: "bold", color: "#d63384" }}
          >
            กลุ่มลิต
          </Typography>

          <Card
            sx={{
              borderRadius: 3,
              backgroundColor: "#f8d7da",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box sx={{ flex: "0 0 33.333%" }}>
                  <img
                    src="https://i.pinimg.com/564x/aa/aa/aa/aaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg"
                    alt="thumb"
                    style={{
                      width: "100%",
                      borderRadius: 12,
                    }}
                  />
                </Box>
                <Box sx={{ flex: "0 0 66.667%" }}>
                  <Typography variant="body2">♡ ｡ JEN'S ♡</Typography>
                  <Typography variant="caption" color="text.secondary">
                    น่ารักๆ 🐰
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <FavoriteBorderIcon fontSize="small" />
                    <Typography variant="caption" sx={{ ml: 0.5 }}>
                      88
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ProfilePage;
