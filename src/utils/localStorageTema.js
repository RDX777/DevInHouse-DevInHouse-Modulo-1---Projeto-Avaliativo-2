const tema = "Tema";

export const coletaTema = () => {
  return localStorage.getItem(tema);
};

export const salvaTema = (theme) => {
  return localStorage.setItem(tema, theme);
};

export const limpaTema = () => {
  return localStorage.clear(tema);
};
