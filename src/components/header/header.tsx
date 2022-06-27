import { Paper, Title, Input } from "@mantine/core";
import style from './header.module.scss';

function Header() {
  return (
    <Paper className={style.header} shadow="xs" p="md">
      <Title className={style.title} order={4}>NextTunes</Title>
      <Input className={style.keywords} placeholder="Song, Artist or Album..." />
    </Paper>
  );
}

export default Header;
