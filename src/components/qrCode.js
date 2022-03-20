import QRCode from "react-qr-code";

// const QRURL = "https://codyde.github.io/ld-demo-app/";
const QRURL = "https://cody-ld-demo.netlify.app/"

const qrCodeHome = () => {  
  return (
    <div className="mx-auto pb-4 px-3 my-4 lg:px-7 shadow-2xl">
      <div className="mt-4 qr-wrapper">
        <QRCode size="225" value={QRURL} />
      </div>
    </div>
  )     
};

export default qrCodeHome;