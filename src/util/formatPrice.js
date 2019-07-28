export default function formatPrice(value) {
  const formated = parseFloat(value).toFixed(2);
  const newValue = String(formated).replace('.', ',');
  return `R$ ${newValue} `;
}
