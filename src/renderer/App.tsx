import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ItemContextProvider from "../contexts/itemContext";
import icon from '../../assets/icon.svg';
// import './App.css';
import styled from "styled-components";
import Wheel from '../components/Wheel';
import Sidebar from '../components/SideBar';

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const StyledMainWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  min-height: 100vh;
  padding: 4rem 2rem;
  @media (max-width: 919px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 419px) {
    padding: 1rem;
  }
`;


function MainApp() {
  return (
    <StyledContainer>
      <ItemContextProvider>
        <StyledMainWrapper>
          <Sidebar />
          <Wheel />
        </StyledMainWrapper>
      </ItemContextProvider>
   </StyledContainer>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}
