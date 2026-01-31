import { Box, Button, TextField } from "@mui/material";

type ChatroomFormProps = {
  value: string | number;
  onChange: () => void;
  onSubmit: () => Promise<void>;
};

const ChatroomForm = ({ value, onChange, onSubmit }: ChatroomFormProps) => {
  return (
    <Box
      component={"form"}
      onSubmit={(e) => onSubmit(e)}
      sx={{ border: "2px solid hotpink" }}
    >
      <TextField
        variant="outlined"
        label="Message"
        value={value}
        onChange={(e) => onChange(`${e.target.value}`)}
      />
      <Button variant="contained" type="submit">
        🕊️
      </Button>
    </Box>
  );
};

export default ChatroomForm;
