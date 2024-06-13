import { useState, useEffect } from "react";
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";

const Post = ({ url }) => {

    const [post, setPost] = useState({})

    const { id } = useParams()

    const navigate = useNavigate() /*Esto nos ayuda a poder navegar en una ruta en especifico. */

    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => { /*catch = si no existe el post al que estamos tratando de ingresar, simplemente nos redirija a la página de no Existe, esa redireccion se hace con la siguiente función*/
            navigate("/not-found")

        })
    }, [id])

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post;