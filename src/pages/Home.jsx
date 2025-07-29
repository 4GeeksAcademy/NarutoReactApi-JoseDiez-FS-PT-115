import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Menu } from "../components/Menu.jsx";



export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		
		<Menu/>
		
	);
}; 