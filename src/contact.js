// Single source of truth for business contact details
export const PHONE_DISPLAY = '+91 90969 00576'
export const PHONE_TEL     = 'tel:9096900576'
export const WHATSAPP_NUMBER = '919096900576'  // Kisan Erande – receives website enquiries
export const EMAIL = 'suncoregreen@gmail.com'
export const CAREERS_EMAIL = EMAIL  // receives job applications

export function whatsappLink(message, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
