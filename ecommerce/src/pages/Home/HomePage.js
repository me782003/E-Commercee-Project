import React, { useLayoutEffect } from 'react'
import Slider from '../../components/Home/Slider';
import HomeCategory from '../../components/Home/HomeCategory';
import DiscountSection from '../../components/Home/DiscountSection';
import BrandFeatured from '../../components/Brand/BrandFeatured';
import HomeCardProductContainer from '../../components/Products/HomeCardProductContainer';
import ViewLatestFashionHook from '../../pojectHooks/HomeHooks/ViewLatestFashionHook';
import ViewElectronicsHook from '../../pojectHooks/HomeHooks/ViewElectronicsHook';
import ViewTheMostSoldHook from '../../pojectHooks/HomeHooks/ViewTheMostSoldHook';
import ViewPhonesHook from '../../pojectHooks/HomeHooks/ViewPhonesHook';
import ViewHeadPhonesHook from '../../pojectHooks/HomeHooks/ViewHeadPhonesHook';
import HeadPhonesWallpaper from '../../components/Home/HeadPhonesWallpaper';
import ViewWatchesHook from '../../pojectHooks/HomeHooks/ViewWatchesHook';
import phonesWallPaper from '../../images/phonesWallpaper.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import ViewShoesHook from '../../pojectHooks/HomeHooks/ViewShoesHook';
import ViewElectricDevicesHook from '../../pojectHooks/HomeHooks/ViewElectricDevicesHook';
import ViewLaptopsHook from '../../pojectHooks/HomeHooks/ViewLaptopsHook';


const HomePage = () => {

  // [items] => products.data
const [latestFashion, loadingFashion] = ViewLatestFashionHook();
const [mostSold, loadingTheMostSold] = ViewTheMostSoldHook();
const [electors, loadingElectronics] = ViewElectronicsHook()
const [phones, loadingPhones] = ViewPhonesHook()
const [headphones, loadingHeadPhones] = ViewHeadPhonesHook()
const [watches, loadingWatchesHook] = ViewWatchesHook()
const [shoes, loadingShoes] = ViewShoesHook()
const [eDevices, loadingEDevices] = ViewElectricDevicesHook()
const [laptops, loadingLaptops] = ViewLaptopsHook()
useLayoutEffect(()=>{
  localStorage.setItem('catfromHome', '');
  localStorage.setItem('sortType', '');
},[])




  return (
    <div className='font' style={{minHeight: '670px'}}>
      <Slider/>
      <HomeCategory/>
      <HomeCardProductContainer products = {mostSold} loading={loadingTheMostSold}  title='الأكثر مبيعا' btntitle= 'المزيد' pathText='/products' catID='' sort='الاكثر مبيعا' />
      <DiscountSection/>
      <HomeCardProductContainer products = {laptops} loading={loadingLaptops} title='أجهزة اللابتوب فائقة الأداء' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=650f744578ff9b9c369ec3bd' sort='' />
      <HomeCardProductContainer products = {latestFashion} loading={loadingFashion}  title='أحدث الأزياء' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=65089f740435186f8bc26ae3' sort=''/>
      <HomeCardProductContainer products = {electors} loading={loadingElectronics}  title='الإليكترونيات' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=64ff927b9e016bd1b786af7b' sort=''/>
      <Container className='my-3 '>
        <Row>
          <Col>
            <img src={phonesWallPaper} className='w-100 rounded-4' alt="" />
          </Col>
        </Row>
      </Container>
      <HomeCardProductContainer products = {phones} loading = {loadingPhones}  title='الهواتف' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=650cf5957fcf30bac1a52ffe' sort=''/>
      <HeadPhonesWallpaper/>
      <HomeCardProductContainer products = {headphones} loading={loadingHeadPhones}  title='أحدث السماعات' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=650a2ee3c3d4660e2b2e3866' sort=''/>
      <HomeCardProductContainer products = {watches} loading={loadingWatchesHook}  title=' أحدث الساعات' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=650e1ed3470d7b9d47918173' sort=''/>
      <HomeCardProductContainer products = {shoes} loading={loadingShoes} title=' الأحذية العصرية ' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=64f905f92ea1130b7c4d8076' sort=''/>
      <HomeCardProductContainer products = {eDevices} loading={loadingEDevices}  title=' الأجهزة الكهربائية ' btntitle= 'المزيد' pathText= '/products' catID='category[in][]=6508b27d0435186f8bc26d8c' sort=''/>
      <BrandFeatured title="أشهر الماركات" btntitle='المزيد' pathText = '/allbrands' />
    </div>
  )
}

export default HomePage;
