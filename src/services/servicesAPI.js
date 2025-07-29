export const bringNinjas = async (dispatch) => {
    const response = await fetch("https://dattebayo-api.onrender.com/characters", {
        method: "GET",
        //headers: { "Content-Type": "application/json" },

    })
    console.log(response)

    const data = await response.json()
    console.log(data)

    console.log(data);
    //console.log(data.characters.personal.birthdate);

    dispatch({
        type: 'set_ninjas',
        payload: data.characters
    })

}

export const bringNinjasId = async (dispatch, id) => {
    const response = await fetch(`https://dattebayo-api.onrender.com/characters/${id}`, {
        method: "GET",
    })
    const data = await response.json()
    //console.log(response)
    // console.log(data)

    dispatch({
        type: 'set_ninja',
        payload: data
    })



}

export const bringBestias = async (dispatch) => {
    const response = await fetch("https://dattebayo-api.onrender.com/tailed-beasts", {
        method: "GET",
    })
    console.log(response)
    const data = await response.json()
    console.log(data);


    dispatch({
        type: 'set_bestias',
        payload: data["tailed-beasts"]
    })
}

export const bringBestiasId = async (dispatch, id) => {
    const response = await fetch(`https://dattebayo-api.onrender.com/tailed-beasts/${id}`, {
        method: "GET",
    })
    const data = await response.json()
    //console.log(response)
    // console.log(data)

    dispatch({
        type: 'set_bestia',
        payload: data
    })
}
export const bringAkatsuki = async (dispatch) => {
    const response = await fetch("https://dattebayo-api.onrender.com/akatsuki", {
        method: "GET",

    })
    console.log(response)
    const data = await response.json()
    console.log(data)

    dispatch({
        type: 'set_akatsuki',
        payload: data.akatsuki
    })
}

export const bringAkatsukiId = async (dispatch, id) => {
    const response = await fetch(`https://dattebayo-api.onrender.com/akatsuki/${id}`, {
        method: "GET",
    }
    )
    console.log(response)
    const data = await response.json()
    console.log(data);

    dispatch({
        type: 'set_akat',
        payload: data
    })


}