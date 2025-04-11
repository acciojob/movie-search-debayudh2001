import React, { createContext, useState } from "react";

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState("")
    const [error, setError] = useState("")

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`https://omdb-api4.p.rapidapi.com/?apikey=99eb9fd1&s=${input}`, {
            method: "GET",
            headers: {
                'x-rapidapi-key': 'cbf5ddf951msh9422edd536de84ap192a6djsn313ea21692f1',
                'x-rapidapi-host': 'omdb-api4.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.Response === "True"){
                    setError("")
                    setMovies(data.Search)
                    console.log(data)
                }
                if(data.Response === "False"){
                    setMovies([])
                    setError("Invalid movie name. Please try again.")
                    console.log(data)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <MovieContext.Provider value={{
            input,
            handleChange,
            handleSubmit,
            movies,
            error
        }}>
            {children}
        </MovieContext.Provider>
    )
}