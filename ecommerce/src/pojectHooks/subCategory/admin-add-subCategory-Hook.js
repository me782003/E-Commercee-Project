import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import notify from './../../pojectHooks/useNotification';
import { createSubCategory } from '../../redux/actions/subCategoryAction';


const AdminAddSubCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!navigator.onLine){
      notify(" تحقق من الإتصال بالإنترنت " , "error");
      return ;
    }
    
  dispatch(getAllCategory());

  }, []);

  const [id, setId] = useState('0');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);


  const category = useSelector(state => state.allCategory.category);
  const subCategory = useSelector(state => state.subCategory.subCategory);


  //on change dropdown menu
  const handleChange = (e)=>{
      console.log(e.target.value);
      setId(e.target.value);

      
  }

  const onChangeName = (e)=>{
    e.persist();
    setName(e.target.value)
  }

  //on save data
  const handleSubmit = async(e)=>{
      e.preventDefault();

      //detect if the user is online or not
      if(!navigator.onLine){
          notify(" تحقق من الإتصال بالإنترنت " , "error");
          return ;
      }


      if(name === '' && id === '0'){
          notify(' أ كتب اسم التصنيف الفرعي و اختر تصنيفاً فرعياً' , 'error');
          return ;            
      }

      if(id === '0'){
          notify('إختر تصنيفاً رئيسياً' , 'warning');
          return ;
      }
      
      if(name === ''){
          notify('أكتب اسم التصنيف الفرعي' , 'warning');
          return ;

      }

      setIsPress(true)
      setLoading(true);
      await dispatch(createSubCategory({
          name: name,
          category: id,
       }));
      setLoading(false);
      setIsPress(false)
  }

  useEffect(()=>{
      if(loading === false){
          setName('');
          setId('0');
          if(subCategory){
              console.log(subCategory);
              if(subCategory.status === 201){
                  
                  notify('تم إرسال البيانات بنجاح' , 'success');
              }else if(subCategory === 'Error AxiosError: Request failed with status code 400'){
                  notify(" هذا الإسم مكرر . ادخل اسما آخر  " , 'error');
                  dispatch(getAllCategory());
                  
              }
              
              else{
                  notify(' هناك مشكلة في إرسال البيانات , حاول الإرسال مرة أخرى', 'error');
              }
          }
          setLoading(true);
      }

  }, [loading]);

  return [id, name, loading, category, subCategory, handleChange, handleSubmit , onChangeName, isPress ];
}

export default AdminAddSubCategoryHook
