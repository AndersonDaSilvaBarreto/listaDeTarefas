export const ramdomNumber = (): number => {
  const ano: number = new Date().getFullYear();
  const mes: string = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const randomNum: number = Math.floor(1000 + Math.random() * 9000);
  const id: string = `${ano}${mes}${randomNum}`;
  return +id;
};
