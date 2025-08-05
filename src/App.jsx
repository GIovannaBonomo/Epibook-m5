import { useState } from "react"
import CommentArea from "./components/CommentArea"
import AllTheBooks from "./components/AllTheBooks"
import MyFooter from "./components/MyFooter"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import horror from './data/horror.json'
import { Col, Container, Row } from "react-bootstrap"
import { Provider } from "./context/context"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./components/NotFound"
import BookDetails from "./components/BookDetails"

function App() {

  const [searchText, setSearchText] = useState(' ')
  const filteredBook = horror.filter(book =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <>
      <BrowserRouter>
        <MyNav setSearchText={setSearchText} />
        <Welcome />
        <Provider>
          <Routes>
            <Route path="/" element={
              <Container className="my-4">
                  <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    <AllTheBooks filteredBook={filteredBook} />
                  </Row>
              </Container>} />
            <Route path="/*" element={
              <NotFound />
            }>
            </Route>
            <Route path="/book/:asin" element={
              <BookDetails>

              </BookDetails>
            }>
          </Route>
          </Routes>
        </Provider>
        <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App
