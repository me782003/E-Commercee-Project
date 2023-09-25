import React, { useEffect, useLayoutEffect, useState } from "react";
import favoff from "../../images/transHeart.png";
import favon from "../../images/solidHeart.png";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishList, removeProductFromWishList } from "../../redux/actions/wishListAction";
import notify from "./../../pojectHooks/useNotification";

const ProductCardHook = (item , favProd) => {
  // item is the product details
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  let Fav = favProd.some(fitem => fitem === item._id); // true if one element or more is true
  const [loadingAdd, setLoadingAdd] = useState(true)//          ^
  const [loadingRemove, setLoadingRemove] = useState(true)//    |
  const [isFav, setIsFav] = useState(Fav)// true of false--------

  useEffect(() => {
      setIsFav(favProd.some(fitem => fitem === item._id));
  }, [favProd])

  
  let userData = [];
  if(localStorage.getItem('userData') != null){
    userData = JSON.parse(localStorage.getItem('userData'));
  }

  const handelFav = () => {
    if(userData.role === 'admin'){
        notify(`بما أنك الأدمن فلا يمكنك إضافة المنتجات إلى المفضلة`, "error")
        return;
    }
      if (isFav) {
          removeToWishListData();
      } else {
          addToWishListData();
      }
  }



  useEffect(() => {

      if (isFav === true) {
          setFavImg(favon)
      }
      else {
          setFavImg(favoff)
      }
  }, [isFav])

  const resAdd = useSelector(state => state.wishListReducer.addWishList)
  const resRemove = useSelector(state => state.wishListReducer.removeWishList)

  const addToWishListData = async () => {
      setIsFav(true)
      setFavImg(favon)
      setLoadingAdd(true)
      await dispatch(addProductToWishList({
          productId: item._id,
      }))
      setLoadingAdd(false)
  }

  const removeToWishListData = async () => {
      setIsFav(false)
      setFavImg(favoff)
      setLoadingRemove(true)
      await dispatch(removeProductFromWishList(item._id))
      setLoadingRemove(false)
  }

   useEffect(() => {
        if (loadingAdd === false) {
            console.log(resAdd)
            if (resAdd && resAdd.status === 200) {
                notify(`تم إضافة (${item.title}) إلى المفضلة بنجاح `, "success")
              } else if (resAdd && resAdd.status === 401) {
                notify("انتا غير مسجل", "error")
              }
        }
    }, [loadingAdd])

    useEffect(() => {
        if (loadingRemove === false) {
            if (resRemove && resRemove.status === "success") {
              notify(`تم حذف  (${item.title}) من المفضلة بنجاح `, "warning")
            } else if (resAdd && resAdd.status === 401) {
                notify("انتا غير مسجل", "error")
            }

        }
    }, [loadingRemove])

    return [favImg , handelFav];

}

export default ProductCardHook
