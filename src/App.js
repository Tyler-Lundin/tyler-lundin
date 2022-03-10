import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <S.App>
      <Nav/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/aboutme'/>
      </Routes>
    </S.App>
  );
}

export default App;

const S = {}
S.App = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgb(30,30,30);
  overflow: hidden;
`