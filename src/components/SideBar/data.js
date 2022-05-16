import { IoGameController, IoMusicalNote } from "react-icons/io5"
import { FaSmileWink, FaFilm, FaQq } from "react-icons/fa"
import { GiAngelOutfit } from "react-icons/gi"
import { MdEmojiNature } from "react-icons/md"

export const categories = [
  { id: 1, name: "Games", iconSrc: <IoGameController fontSize={25} /> },
  { id: 2, name: "Funny", iconSrc: <FaSmileWink fontSize={25} /> },
  { id: 3, name: "Stories", iconSrc: <FaQq fontSize={25} /> },
  { id: 4, name: "Movies", iconSrc: <FaFilm fontSize={25} /> },
  { id: 5, name: "Anime", iconSrc: <GiAngelOutfit fontSize={25} /> },
  { id: 6, name: "Music", iconSrc: <IoMusicalNote fontSize={25} /> },
  { id: 7, name: "Nature", iconSrc: <MdEmojiNature fontSize={25} /> },
]
