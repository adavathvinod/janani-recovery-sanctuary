export const JANANI = {
  name: "Janani Alcohol & Drug Rehabilitation Centre",
  phone: "6302682285",
  phoneE164: "+916302682285",
  email: "jananirehabilition@gmail.com",
  addressLine:
    "No.4 Block, 2nd Floor, Plot No.2, Survey No.268, Word, Street No. 7, Hayathnagar_Khalsa, Hyderabad, Telangana 501505",
  domain: "jananideaddiction.com",
  instagram: "https://www.instagram.com/janani_rehab?igsh=NTF5N3Iyb3B3NnY=",
  serviceAreas: [
    "Hyderabad",
    "Hayathnagar",
    "LB Nagar",
    "Dilsukhnagar",
    "Miryalaguda",
    "Suryapet",
    "Khammam",
    "Nalgonda",
    "Telangana",
  ],
};

export const links = {
 tel: "tel:+916302682285",
  whatsapp: "https://wa.me/916302682285",
  maps: "https://maps.app.goo.gl/cx2M3wCL2MznQouH7",
  instagram: JANANI.instagram,
};

export function whatsappLink(text: string) {
  const phone = JANANI.phoneE164.replace(/\+/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
