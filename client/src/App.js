import Navbar from './Navbar';
import PostForm from './PostForm';
import Posts from './Posts';
import PostEditForm from './PostEdit';

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
      exact render={(props)=>
      <PostForm {...props} />}
      />
      <Route 
      path='/edit/:id'
      exact render={(props) =>
      <PostEditForm {...props}/>}/>
      </Router>
      
    </div>
  );
}
export default App;
