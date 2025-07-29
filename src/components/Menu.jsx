import { bringAkatsuki, bringBestias, bringNinjas, bringNinjasId } from "../services/servicesAPI"
import { useEffect, useState, useReducer } from "react"
import storeReducer from "../store"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom"





export const Menu = () => {



    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        bringNinjas(dispatch)
        bringBestias(dispatch)
        bringAkatsuki(dispatch)
    }, [])






    return (


        <div className="container">
            <div className="row g-0">
                <div className="col-12">
                    <div className="main">
                        <h1 className="mb-4">Personajes</h1>
                        <div className="scroll-container">
                            {store.ninjas.map((n, index) => (
                                <div className="card" key={index} style={{ width: "18rem" }}>
                                    <img src={n.images[0]} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{n.name}</h5>
                                        <p className="card-text">Altura: {n.personal.height?.["Part I"] || n.personal.height?.["Part II"] || n.personal.height?.["Gaiden"] || n.personal.height?.["Blank Period"] || "Dato desconocido"}</p>
                                        <p className="card-text">Edad: {n.personal.age?.["Part I"] || n.personal.age?.["Blank Period"] || "Dato desconocido"}</p>

                                        <Link to={`/DetallesNinjas/${n.id}`}>
                                            <button className="btn btn-primary"
                                            >Detalles</button>
                                        </Link>
                                        <button onClick={()=>dispatch({type:'set_favs', payload:n.name})} type="button" className="btn btn-sasuke btn-info mx-2" ><i className="bi bi-box2-heart"></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr />
                    <div className="main">


                        <h1 className="mb-4">Bestias</h1>
                        <div className="scroll-container">
                            {store.bestias.map((b, index) => (
                                <div className="card" key={index} style={{ width: "18rem" }}>
                                    <img src={b.images?.[0] || "https://i.pinimg.com/1200x/b3/95/66/b3956654f75fda3789ee01b7f8805c52.jpg"} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{b.name}</h5>
                                        <p className="card-text">Especie: {b.personal.species || "Origen desconocido"}</p>
                                        <Link to={`/DetallesBestias/${b.id}`}>
                                            <button className="btn btn-primary">Detalles</button>
                                        </Link>
                                        <button onClick={()=>dispatch({type:'set_favs', payload:b.name})} type="button" className="btn btn-sasuke btn-info mx-2" ><i className="bi bi-box2-heart"></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <hr />
                    <div className="main">


                        <h1 className="mb-4">Akatsuki</h1>
                        <div className="scroll-container">

                            {store.akatsuki.map((a, index) => (
                                <div className="card" key={index} style={{ width: "18rem" }}>
                                    <img src={a.images[0]} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{a.name}</h5>
                                        <p className="card-text">Genero: {a.personal.sex || "Desconocido"}</p>
                                        <Link to={`/DetallesAkatsuki/${a.id}`}>
                                            <button className="btn btn-primary">Detalles</button>
                                        </Link>
                                        <button onClick={()=>dispatch({type:'set_favs', payload:a.name})} type="button" className="btn btn-sasuke btn-info mx-2" ><i className="bi bi-box2-heart"></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}