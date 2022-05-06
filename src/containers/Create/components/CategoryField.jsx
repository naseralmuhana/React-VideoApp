import { Typography } from "@mui/material"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { categories } from "../../../components/SideBar/data"

const CategoryField = ({ value, onChange }) => {
  return (
    <FormControl sx={{ flex: 1 }}>
      <InputLabel id="label">Category</InputLabel>
      <Select
        labelId="label"
        value={value}
        label="Category"
        onChange={(e) => onChange(e.target.value)}
        required
      >
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            value={category.name}
            sx={{ textAlign: "center" }}
          >
            <Typography component={"span"}>{category.iconSrc}</Typography>
            <Typography component={"span"} mx={2}>
              {category.name}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CategoryField
