
import NavBarLogin from "./components/Utilities/NavBarLogin";
import LoginBage from "./pages/Auth/LoginBage";
import HomePage from "./pages/Home/HomePage";
import {BrowserRouter, Routes , Route, useLocation} from 'react-router-dom'
import Footer from './components/Utilities/Footer';
import RejesterBage from "./pages/Auth/RejesterBage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllBrand from "./pages/Brand/AllBrandBage";
import ShopProductsPage from "./pages/Products/ShopProductsPage";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import ChoosePayMethod from "./pages/Checkout/ChoosePayMethodPage";
import AdminAllProductPage from "./pages/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandBage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavProductsPage from "./pages/User/UserFavProductPage";
import UserAllAddresesPage from "./pages/User/UserAllAddressesPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminEditProductPage from "./pages/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./pages/Auth/verifyPasswordPage";
import ResetePasswordPage from "./pages/Auth/ResetePasswordPage";
import { ToastContainer } from "react-toastify";
import AddminAddCouponPage from "./pages/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./pages/Admin/AdminEditCouponPage";
import ProtectedRoute from "./components/Utilities/ProtectedRoute";
import ProtectedRouteHook from "./pojectHooks/Auth/protected-route-hook";
import ProductByCategoryPage from "./pages/Products/ProductByCategoryPage";
import ProductByBrandPage from "./pages/Products/productByBrandPage";
import { useEffect } from "react";
import ErrorPage from "./pages/Home/ErrorPage";



function App() {
  // localStorage.clear()

  const [isUser, isAdmin, userData] = ProtectedRouteHook();


  return (

    <div className='font'>
      <ToastContainer />
      <BrowserRouter>
        <NavBarLogin/>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/Login" element={<LoginBage/>}/>
          <Route path="/register" element={<RejesterBage/>}/>
          <Route path="/allcategory" element={<AllCategoryPage/>}/>
          <Route path="/allbrands" element={<AllBrand/>}/>
          <Route path="/products" element={<ShopProductsPage/>}/>
          <Route path="/products/:id" element={<ProductDetailsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/user/forget-password" element={<ForgetPasswordPage/>}/>
          <Route path="/user/verify-code" element={<VerifyPasswordPage/>}/>
          <Route path="/user/reset-password" element={<ResetePasswordPage/>}/>
          <Route path="/product/category/:id" element={<ProductByCategoryPage/>}/>
          <Route path="/product/brand/:id" element={<ProductByBrandPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="/admin/allproducts" element={<AdminAllProductPage/>}/>
            <Route path="/admin/allorders" element={<AdminAllOrdersPage/>}/>
            <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage/>}/>
            <Route path="/admin/addbrand" element={<AdminAddBrandPage/>}/>
            <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>}/>
            <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage/>}/>
            <Route path="/admin/addproduct" element={<AdminAddProductPage/>}/>
            <Route path="/admin/addcoupon" element={<AddminAddCouponPage/>}/>
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage/>}/>
            <Route path="/admin/editproduct/:id" element={<AdminEditProductPage/>}/>
          </Route>

          <Route element={<ProtectedRoute auth={isUser}/>}>
            {/* outlet */}
            <Route path="/user/allorders" element={<UserAllOrdersPage/>}/>
            <Route path="/user/favoriteproducts" element={<UserFavProductsPage/>}/>
            <Route path="/user/addresses" element={<UserAllAddresesPage/>}/>
            <Route path="/user/add-address" element={<UserAddAddressPage/>}/>
            <Route path="/user/edit-address/:id" element={<UserEditAddressPage/>}/>
            <Route path="/user/profile" element={<UserProfilePage/>}/>
            <Route path="/order/paymethoud" element={<ChoosePayMethod/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
      
    </div>
  );
}

export default App;
