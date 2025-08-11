export const formatToIDR = (value) => {
  if (!value) return "";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const unformatIDR = (value) => {
  return value.replace(/\./g, "");
};

export const parseNumber = (str) => {
  return Number(str.replace(/\D/g, '')) || 0;
}

export const formatNumber = (num) => {
  return new Intl.NumberFormat('id-ID').format(num);
}