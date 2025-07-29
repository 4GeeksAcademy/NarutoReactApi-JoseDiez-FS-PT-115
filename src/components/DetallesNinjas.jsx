import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { bringNinjasId } from "../services/servicesAPI";
import { useParams } from "react-router-dom";


export const DetallesNinjas = () => {

    const { id } = useParams()
    console.log(id);



    const { store, dispatch } = useGlobalReducer();
    console.log(store.ninja)

    useEffect(() => {
        bringNinjasId(dispatch, id)
    }, [])


    if (!store.ninja) {
        return <p>cargarndo...</p>
    }

    const jutsus = store.ninja.jutsu; // filtro de tecnicas si no slaen demasiadas.

    let jutsusResumen = jutsus.slice(1,5).join(", ");

    console.log(jutsusResumen)



    return (
        <>

            <div className="card mb-3 mx-auto mt-4" style={{ maxWidth: '1200px' }}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img
                            src={store.ninja.images[0]}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.ninja.name}</h5>
                            <p className="card-text">
                                <b> Técnicas conocidas: </b>{jutsusResumen}
                            </p>
                            <p className="card-text">
                               <b>   Tipo Sanguíneo: </b>{store.ninja.personal.bloodType || "desconocido"}
                            </p>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="row justify-content-center text-center mb-3" style={{ gap: '20px' }}>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b>Cumpleaños: </b>{store.ninja.personal.birthdate || "Desconocido"}</div>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b>Debut Manga: </b>{store.ninja.debut.manga}</div>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b>Padre: </b>{store.ninja.family?.father || "Desconocido"}</div>
                </div>
            </div>

        </>

    )
}