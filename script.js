const dataUltimoAcesso = new Date("11/11/2020 17:00:00");
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;

if (hora < 6 || hora >= 18) {
  msg = "Boa noite\n";
} else if (hora >= 6 && hora < 12) {
  msg = "Bom dia\n";
} else {
  msg = "Boa tarde\n";
}
