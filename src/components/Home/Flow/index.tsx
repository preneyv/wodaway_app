
import "./style.scss"
import {useEffect, useState} from "react";
import {T_Event} from "../../../types/wod.ts";
import {events} from "../../../utils/populate/wod.ts";
import dateFormatToString from "../../../utils/other/dateFormatToString.ts";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Post({post} : {post:T_Event}){

    return (
        <div className="post">
            <span>{post.name}</span>
            <span>{`${post.score}/${post.max_athlete}`}</span>
            <span>{post.city}</span>
            <span>{post.date && dateFormatToString(post.date)}</span>
        </div>
    )

}

function Flow() {

    const [posts, setPosts] = useState<T_Event[]>([])
    const [nbPost, setNbPost] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [hasMore, setHasMore] = useState(true)

    const fetchPosts = async () => {
        setIsLoading(true)
        setTimeout(async () => {
            const lastPost = nbPost + 10
            const response = events.slice(nbPost, lastPost);
            console.log(response, nbPost);

            setPosts(prevPosts => [...prevPosts, ...response]);
            setNbPost(lastPost);
            if (response.length < 10) {
                setHasMore(false);
            }
            setIsLoading(false);
        }, 3000)

    }

    const handleScroll = async () => {
        console.log("dcroll")
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 5
        ) {
            if (!isLoading && hasMore) {
                fetchPosts(); // Charger plus de posts si on n'est pas déjà en train de charger
            }
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, hasMore]);

    useEffect(() => {
        fetchPosts()
    }, []);



    return (
        <div className="flow" onWheel={handleScroll}>
            <div className="add_post">
                <button className="add">Quoi de neuf champion ?</button>
            </div>
            <div className="content_flow">
                {
                    posts.map((post: T_Event, index: number) => <Post post={post} key={index} />)
                }
                {
                    isLoading &&
                    <div className="loader_flow">
                        <FontAwesomeIcon icon={faSpinner} spin style={{color: "red"}} /> Chargement
                    </div>
                }
            </div>
        </div>
    )
}

export default Flow