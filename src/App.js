import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Homes/Home/Home';
import Register from './Components/Login/Register/Register';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import Checkout from './Components/Checkout/Checkout';
import ManageService from './Components/Dashboard/ManageService/ManageService';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Allproduct from './Components/Dashboard/AllProduct/Allproduct';
import Shop from './Components/Shop/Shop';
import MyOrder from './Components/Dashboard/MyOrder/MyOrder';
import Private from './Components/Private/Private';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Private path="/dashboard">
              <Dashboard></Dashboard>
            </Private>
            <Private path="/addProduct">
              <AddProduct></AddProduct>
            </Private>
            <Private path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Private>
            <Private path="/manageOrder">
              <ManageService></ManageService>
            </Private>
            <Private path="/productList">
              <Allproduct></Allproduct>
            </Private>
            <Private path="/myOrders">
              <MyOrder></MyOrder>
            </Private>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Private path="/addReview">
              <AddReview></AddReview>
            </Private>
            <Private path="/checkout/:id">
              <Checkout></Checkout>
            </Private>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
