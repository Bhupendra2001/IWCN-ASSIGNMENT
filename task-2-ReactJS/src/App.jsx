import styled from "styled-components"
import { Header } from "./pages/Header"
import { Notes } from "./pages/Notes"
const Container = styled.div`
background-color : pink;
height : 50rem;
`
function App() {
  

  return (
   
      <Container>
        <Header/>
        <Notes/>
      </Container>
   
  )
}

export default App
