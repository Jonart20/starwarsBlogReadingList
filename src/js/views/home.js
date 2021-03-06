import React, { useContext } from "react";
import "../../styles/home.scss";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const changeIconColor = name => {
		const nameBelonging = store.favorites.findIndex(favorite => favorite == name);
		if (nameBelonging === -1) {
			return <i className="fas fa-heart" style={{ color: "yellow" }} />;
		} else {
			return <i className="fas fa-heart" style={{ color: "red" }} />;
		}
	};
	return (
		<div className="container mt-5">
			<div className="row">
				<h2>Characters</h2>
			</div>
			<CharactersCard icon={changeIconColor} />
			<div className="row mt-5">
				<h2>Planets</h2>
			</div>
			<PlanetsCard icon={changeIconColor} />
		</div>
	);
};
