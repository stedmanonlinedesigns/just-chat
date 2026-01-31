import { Button, TextField } from "@mui/material";

type ChatroomFormProps = {
  value: string | number;
  onChange: () => void;
  onSubmit: () => Promise<void>;
};

const ChatroomForm = ({ value, onChange, onSubmit }: ChatroomFormProps) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <TextField
        variant="outlined"
        label="Message"
        value={value}
        onChange={(e) => onChange(`${e.target.value}`)}
      />
      <Button variant="contained" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ChatroomForm;
