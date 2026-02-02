import { Box, Button, TextField } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";

type ChatroomFormProps = {
  value: string | number;
  onChange: () => void;
  onSubmit: () => Promise<void>;
};

const ChatroomForm = ({ value, onChange, onSubmit }: ChatroomFormProps) => {
  // @ts-expect-error Parameter 'e' implicitly has an 'any' type.
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      console.log("empty - cant send");
    } else {
      onSubmit();
    }
  };

  return (
    <Box
      component={"form"}
      px={{ xs: 2.5, sm: 5, md: 10 }}
      sx={{
        pt: 3,
        pb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1C1C1B",
        flexShrink: 0,
        minHeight: "80px",
      }}
      //TODO: Fix this
      onSubmit={(e) => handleOnSubmit(e)}
    >
      <TextField
        variant="outlined"
        placeholder="Message"
        value={value}
        fullWidth
        size="medium"
        // TODO: Fix this
        // @ts-expect-error Expected 0 arguments, but got 1.
        onChange={(e) => onChange(`${e.target.value}`)}
        sx={{
          // border: '2px solid green',

          "& .MuiOutlinedInput-root": {
            color: "#FAFAF9",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            "& fieldset": {
              borderColor: "#5C5C59",
              borderRightWidth: "0px",
            },
            "&:hover fieldset": {
              borderColor: "#6B6B68",
              borderRightWidth: "0px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#797974",
              borderWidth: "1px",
              borderRightWidth: "0px",
            },
          },
          // "& .MuiInputLabel-root": {
          //   color: "red",
          // },
          // "& .MuiInputLabel-root.Mui-focused": {
          //   color: "#FAFAF9",
          // },
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          flexGrow: 1,
          height: "100%",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
      >
        <Box sx={{ transform: "rotate(45deg)" }}>
          <RocketIcon />
        </Box>
      </Button>
    </Box>
  );
};

export default ChatroomForm;
