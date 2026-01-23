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
  // Update when you have the exact profile URL
  instagram: "https://instagram.com/",
};
