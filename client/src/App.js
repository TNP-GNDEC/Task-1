import Navbar from './Navbar';
import PostForm from './PostForm';
import Posts from './Posts';
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Route 
      path='/'
      exact render={()=>
      <Posts/>}
      />
      <Route 
      path='/add'
      exact render={()=>
      <PostForm/>}/>
      </Router>
      
    </div>
  );
}
export default App;
