import { Box, Button, TextField } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";

type ChatroomFormProps = {
  value: string | number;
  onChange: () => void;
  onSubmit: () => Promise<void>;
};

const ChatroomForm = ({ value, onChange, onSubmit }: ChatroomFormProps) => {
  return (
    <Box
      component={"form"}
      pb={3}
      px={2.5}
      display={"flex"}
      justifyContent={"space-between"}
      bgcolor={"#1C1C1B"}
      onSubmit={(e) => onSubmit(e)}
    >
      <TextField
        variant="outlined"
        placeholder="Message"
        value={value}
        fullWidth
        size="medium"
        onChange={(e) => onChange(`${e.target.value}`)}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#FAFAF9",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            "& fieldset": {
              borderColor: "#5C5C59",
            },
            "&:hover fieldset": {
              borderColor: "#6B6B68",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#797974",
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
        sx={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
      >
        <Box sx={{ transform: "rotate(45deg)" }}>
          <RocketIcon />
        </Box>
      </Button>
    </Box>
  );
};

export default ChatroomForm;
