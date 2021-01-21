import './App.css';
import Quote from './Quote'

function App() {
  


  return (
    <main className='main'>
    <section className='row h-100'>
      <div className='col-sm-12 my-auto'>
      <h2 className="d-flex  justify-content-center font" >Quotes!</h2>
      <div className="underline mb-5"></div>
      <div >
        <Quote />
      </div>
        
      </div>
     
    </section>
  </main>
  );
}

export default App;
