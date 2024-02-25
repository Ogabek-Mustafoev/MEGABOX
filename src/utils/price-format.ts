export function priceFormat(price: number) {
  const formattedNumber = price.toFixed(2).replace(/\d(?=(\d{3})+\.)|(\.00$)/g, '$& ')
  return formattedNumber.split('.')[0]
}

export const UnFormatPhoneNumber = (phoneNumber: string): string => {
  const cleanNumber = phoneNumber.replace(/\D/g, '');

  const countryCode = cleanNumber.slice(0, 3);
  const areaCode = cleanNumber.slice(3, 6);
  const subscriberNumber = cleanNumber.slice(6);

  return `+${countryCode}${areaCode}${subscriberNumber}`;
};