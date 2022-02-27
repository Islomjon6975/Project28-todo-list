
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';
import { Container } from './style.js';

function App() {
  return (
    <Container>
        <Navbar />
        <Main />
        <Footer />
    </Container>
    
  );
}

export default App;
