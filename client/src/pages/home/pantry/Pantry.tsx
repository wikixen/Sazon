import { BiTrash } from "react-icons/bi";
import { User } from "../../../data/models";
import { IconContext } from "react-icons";
import "./Pantry.css";

export default function Pantry({ userPantry }: { userPantry: User["pantry"] }) {
  if (userPantry) {
    return (
      <section className="pantry">
        <button className="addPantryBtn">Add Ingredient to Pantry</button>
        <ul className="pantryList">
          {userPantry.map((ingredient) => (
            <li className="pantryListItem">
              {ingredient}
              <IconContext.Provider value={{ color: "white" }}>
                <button>
                  <BiTrash />
                </button>
              </IconContext.Provider>
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="pantry">
        <p className="emptyPantry">Your pantry is empty</p>
      </section>
    );
  }
}
