const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const shortMonths = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

export function formatDateShort(dateStr: string) {
  const [, month, day] = dateStr.split("-");
  const m = parseInt(month, 10) - 1;
  return `${shortMonths[m]} ${parseInt(day, 10)}`;
}

export function formatDateLong(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  const m = parseInt(month, 10) - 1;
  return `${parseInt(day, 10)} de ${months[m]}, ${year}`;
}
