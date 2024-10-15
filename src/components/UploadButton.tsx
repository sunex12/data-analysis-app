import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useAppDispatch } from "../hooks/hooks";
import { addFile } from "../store/uploadFile.slice";

export const UploadButton = () => {
  const appDispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      appDispatch(
        addFile({
          name: file.name,
          size: file.size,
          type: file.type,
        })
      );
    }
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{
          color: "black",
          background: "white",
          borderRadius: 20,
          fontSize: 32,
          paddingX: 16,
          paddingY: 4,

          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        endIcon={
          <DownloadIcon
            style={{
              fontSize: 32,
            }}
          />
        }
        component="label"
      >
        Upload File
        <input
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          hidden
          onChange={handleFileChange}
        />
      </Button>
    </>
  );
};
