import { useContext, useEffect, useState } from "react"
import { SelectedBookContext } from "../context/context"
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading"
import Error from "./Error"



function CommentArea({}) {
    const { selected: asin } = useContext(SelectedBookContext);

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        const fetchComment = async () => {
            setIsLoading(true)


            try {
                const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViY2Q4MDk2OGRlNTAwMTU1MmEzZWYiLCJpYXQiOjE3NTM4MTE0NjMsImV4cCI6MTc1NTAyMTA2M30.r7rDTsSGt-iUn5U91_kemslDggXMfD-HRXX_CozJkBs"
                    },
                })

                if (response.ok) {
                    let comments = await response.json()
                    setComments(comments)
                    setIsLoading(false)
                    setIsError(false)
                } else {
                    console.log('Cè un errore')
                    setIsLoading(false)
                    setIsError(true)
                }
            } catch (error) {
                console.log(error)
                setIsLoading(false)
                setIsError(true)
            }
        }
        if (asin) {
            fetchComment()
        }
    }, [asin])

    return (
        <div className="text-center">
            {isLoading && <Loading/>}
            {isError && <Error />}
            <AddComment asin={asin} />
            <CommentList commentsToShow={comments} />

        </div>
    )
}

export default CommentArea