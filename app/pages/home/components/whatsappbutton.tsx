import Image from "next/image";

const WhatsAppButton = () => (
  <div className="fixed bottom-4 right-4 w-[5rem] h-[5rem] rounded-full overflow-hidden z-50">
    <Image src='/vectors/whatsapp.svg' 
      objectFit="contain" 
      layout="fill"
      alt="Surfez Wall Services Logo"
      className="p-4"
    />
  </div>
);

export default WhatsAppButton;