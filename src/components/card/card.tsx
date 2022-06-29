import { Paper, Title, Input } from "@mantine/core";
import style from "./card.module.scss";

function Card(props) {
  const { className, id, type, title, artist, artwork } = props;

  return (
    <Paper className={`${style.card} ${className}`} shadow="sm" p="0">
      {/* image */}
      <div
        className={style.image}
        style={{ backgroundImage: `url(${artwork})` }}
      />
      <div className={style.info}>
        {/* title */}
        <div title={title} className={style.title}>
          {title}
        </div>
        {/* artist */}
        {type !== "artist" && (
          <div className={style.artist}>{artist.toUpperCase()}</div>
        )}
        {/* type */}
        <div className={style.type}>{type.toUpperCase()}</div>
      </div>
    </Paper>
  );
}

export default Card;
