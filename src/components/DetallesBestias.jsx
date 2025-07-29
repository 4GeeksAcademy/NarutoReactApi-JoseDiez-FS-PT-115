import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { bringBestiasId } from "../services/servicesAPI";
import { useParams } from "react-router-dom";


export const DetallesBestias = () => {

    const { id } = useParams()
    console.log(id);



    const { store, dispatch } = useGlobalReducer();
    console.log(store.bestia)

    useEffect(() => {
        bringBestiasId(dispatch, id)
    }, [])


    if (!store.bestia) {
        return <p>cargarndo...</p>
    }

    const jutsus = store.bestia.jutsu; // filtro de tecnicas si no slaen demasiadas.

    let jutsusResumen = jutsus.slice(1,5).join(", ");

    //console.log(jutsusResumen)

    const jinchūrikiComas = store.bestia.personal.jinchūriki;

    let jinchūriki = jinchūrikiComas.slice(0,3).join(", ")



    return (
        <>

            <div className="card mb-3 mx-auto mt-4" style={{ maxWidth: '1200px' }}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img
                            src={store.bestia.images[0]}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.bestia.name}</h5>
                            <p className="card-text">
                                <b> Técnicas conocidas:  </b>{jutsusResumen || "Desconocido."}
                            </p>
                            <p className="card-text">
                               <b>   Jinchūriki: </b>{jinchūriki}</p>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="row justify-content-center text-center mb-3" style={{ gap: '20px' }}>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b>Tipo: </b>{store.bestia.natureType || "Desconocido"}</div>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b>Debut Manga: </b> {store.bestia.debut.manga}</div>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b> Creador: </b>{store.bestia.family.creator}</div>
                </div>
            </div>

        </>

    )
}