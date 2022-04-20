import logo from './logo.svg';
import './App.css';
import Review from './Review';

function App() {
  return (
    <>
    <main>
    <div>
    <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
</div>
     </main>
    
    </>
  );
}

export default App;
