import { Button } from "@mui/material";

export const ButtonExport = () => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "black",
          borderRadius: 4,
          paddingX: 4,
          border: 2,
          transition: "all 0.5s ease",

          "&:hover": {
            backgroundColor: "black",
            color: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            borderColor: "black",
          },
        }}
      >
        Export
      </Button>
    </>
  );
};
