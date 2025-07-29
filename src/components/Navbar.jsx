import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	console.log(store)


	return (
		<nav className="navbar navbar-light ">
			<div className="container">
				<Link to="/">
					<img className="Logo" src="src/assets/img/LogoUtil.png"
						style={{ height: "60px", width: "140px", background: "transparent", borderRadius: "50%" }}
						alt="Logo" />
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</button>
						<ul className="dropdown-menu">
							{store.favoritos.map(favorito => {
								return (
									<li className="d-flex align-items-center justify-content-between px-2"><a className="" href="#">{favorito}</a>
									<button type="button" className="btn btn-danger" onClick={() => dispatch({ type: 'set_deleteFav', payload:favorito})}><i class="bi bi-trash3"></i></button></li>
								)
							})}

						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};