export const JANANI = {
  name: "Janani Alcohol & Drug Rehabilitation Centre",
  phone: "8019577648",
  phoneE164: "+918019577648",
  email: "jananirehabilition@gmail.com",
  addressLine:
    "2nd Floor, Plot No 2, Survey No. 268, Bagh Hayathnagar Village, Hayathnagar Mandal, RR District, Telangana - 501505",
};

export const links = {
  tel: `tel:${JANANI.phone}`,
  whatsapp: `https://wa.me/918019577648?text=${encodeURIComponent(
    "Hello Janani Rehabilitation Centre. I would like to know more about admission and treatments.",
  )}`,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(JANANI.addressLine)}`,
  instagram: "https://www.instagram.com/janani_rehab?igsh=NTF5N3Iyb3B3NnY=",
};

export function whatsappLink(text: string) {
  const phone = JANANI.phoneE164.replace(/\+/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
