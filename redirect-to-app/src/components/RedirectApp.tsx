import Modal from 'antd/lib/modal'
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'
import { isAndroid, isIOS, isMobile, isTablet } from 'react-device-detect'

export default function RedirectToApp() {
 const [isModalOpen, setIsModalOpen] = useState(false)
 const isFirstTimeLoad = useRef(true)
 const router = useLocation()
 let path = router?.pathname

 const vars = {
  ANDROID_HOST: 'qcoom.com',
  ANDROID_SCHEME: isAndroid ? 'https' : 'qcoom',
  APP_PACKAGE: 'com.qcoom.qcustomer',
 }
 const baseUrl = `https://${vars.ANDROID_HOST}`
 const urlForWeb = baseUrl + path

 // const urlForMobile = `intent://${vars.ANDROID_HOST}${path}#Intent;scheme=${vars.ANDROID_SCHEME};package=${vars.APP_PACKAGE};S.browser_fallback_url=${urlForWeb};end`
 const urlForMobile = isAndroid
  ? `intent://${vars.ANDROID_HOST}${path}#Intent;scheme=${vars.ANDROID_SCHEME};package=${vars.APP_PACKAGE};end`
  : isIOS
   ? `https://apps.apple.com/us/app/qcoom/id1629956104`
   : `qcoom://${vars.ANDROID_HOST}${path}#qcoom;scheme=${vars.ANDROID_SCHEME};package=${vars.APP_PACKAGE};end`
 //   const urlForMobile = isAndroid
 //     ? `intent://${vars.ANDROID_HOST}${path}#Intent;scheme=${vars.ANDROID_SCHEME};package=${vars.APP_PACKAGE};end`
 //     : isIOS ? `apps.apple.com/us/app/qfood-food-groceries/id6451477301` : `qfood://${vars.ANDROID_HOST}${path}#qfood;scheme=${vars.ANDROID_SCHEME};package=${vars.APP_PACKAGE};end`;

 function launchAppOnAndroidDeviceOur() {
  if (isAndroid || isIOS || isTablet || isMobile) {
   window.location.replace(urlForMobile)
  }
 }

 const handleOk = () => {
  setIsModalOpen(false)
  launchAppOnAndroidDeviceOur()
 }

 const handleCancel = () => {
  setIsModalOpen(false)
 }

 //   function appPath() {
 //     if (isAndroid) {
 //       window.location.href =
 //         "https://play.google.com/store/apps/details?id=com.qcoom.qcustomer";
 //     } else if (isIOS) {
 //       window.location.href = "https://apps.apple.com/us/app/qcoom/id1629956104";
 //     }
 //   }

 useEffect(() => {
  if (router && isFirstTimeLoad.current) {
   if (window.location.pathname != '/product-request' && window.location.pathname != '/product-request/searchedURL' && (isAndroid || isIOS || isTablet || isMobile)) {
    setIsModalOpen(true)
   }
   isFirstTimeLoad.current = false
  }
 }, [router])

 return (
  <Modal
   title="App Switch"
   visible={isModalOpen}
   onOk={handleOk}
   onCancel={handleCancel}
   width={'70%'}
   bodyStyle={{ height: 90 }}
  >
   <p style={{ paddingLeft: 20, paddingRight: 20 }}>
    Would you like to switch to our app for a better experience?
   </p>
  </Modal>
 )
 // return (
 //   // <Modal show={appOpenModal.value}>
 //   //   <div className="flex flex-col bg-white rounded">
 //   //     <div className="flex justify-between border-b px-5 py-3">
 //   //       <h1>App Switch</h1>
 //   //       <button
 //   //         onClick={() => appOpenModal.setFalse()}
 //   //         type="button"
 //   //         className="flex items-center justify-center p-0 m-0 text-primary-600 hover:text-red-500"
 //   //       >
 //   //         <Cancel />
 //   //       </button>
 //   //     </div>
 //   //     <div className=" px-5 py-3">
 //   //       <p>Would you like to switch to our app for a better experience</p>
 //   //     </div>
 //   //     <div className="flex gap-3 justify-end border-t px-5 py-3">
 //   //       <button
 //   //         className="px-3 py-1 bg-gray-100 border"
 //   //         type="button"
 //   //         onClick={() => appOpenModal.setFalse()}
 //   //       >
 //   //         Cancel
 //   //       </button>
 //   //       <button
 //   //         onClick={handleOk}
 //   //         className="px-3 py-1 bg-primary-500 text-white"
 //   //         type="button"
 //   //       >
 //   //         OK
 //   //       </button>
 //   //     </div>
 //   //   </div>
 //   // </Modal>
 // );
}
