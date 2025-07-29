import { useEffect } from "react"
import { bringAkatsukiId } from "../services/servicesAPI"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useParams } from "react-router-dom"

export const DetallesAkatsuki = () => {


    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()



    useEffect(() => {
        bringAkatsukiId(dispatch, id)
    }, [])

    if (!store.akat) {
        return <p>cargarndo...</p>
    }

    const jutsus = store.akat.jutsu;
    let jutsusResumen = Array.isArray(jutsus)
        ? jutsus.slice(1, 5).join(", ")
        : "Sin técnicas registradas";

    return (

        <>

            <div className="card mb-3 mx-auto mt-4" style={{ maxWidth: '1200px' }}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img
                            src={store.akat.images[0]}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.akat.name}</h5>
                            <p className="card-text">
                                <b> Técnicas conocidas:  </b>{jutsusResumen || "Sin datos"}
                            </p>
                            <p className="card-text">
                                <b>   Cumpleaños: </b>{store.akat.personal.birthdate || "Desconocido"}</p>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="row justify-content-center text-center mb-3" style={{ gap: '20px' }}>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b>Tipo: </b>{store.akat.natureType || "Desconocido"}</div>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b>Debut Manga: </b> {store.akat.debut.manga || "Desconocido"}</div>
                    <div className="col-md-3 p-3 rounded mb-4 d-flex flex-column"><b> Compañero: </b>{store.akat.personal.partner || "Desconocido"}</div>
                </div>
            </div>

        </>

    )
}