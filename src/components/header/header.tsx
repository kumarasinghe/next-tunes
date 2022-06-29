import { useRef } from "react";
import { Paper, Title, Input } from "@mantine/core";
import style from "./header.module.scss";

function Header(props) {
  const { onKeywordsSubmit } = props;
  const keywordsInputRef = useRef();

  const keywordsInputKeyPressHandler = (event) => {
    if (onKeywordsSubmit && event.key === "Enter") {
      const keywords = keywordsInputRef.current?.value;
      onKeywordsSubmit(keywords);
    }
  };

  return (
    <Paper className={style.header} shadow="xs" p="md">
      <Title className={style.title} order={4}>
        NextTunes
      </Title>
      <Input
        ref={keywordsInputRef}
        className={style.keywords}
        placeholder="Song, Artist or Album..."
        onKeyPress={keywordsInputKeyPressHandler}
      />
    </Paper>
  );
}

export default Header;
