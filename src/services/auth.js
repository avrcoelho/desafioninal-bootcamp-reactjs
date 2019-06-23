export const isAuthenticated = () => {
  const data = localStorage.getItem('@BootCamp');
  if (data) {
    const { token } = JSON.parse(data);

    if (token) {
      return token;
    }
  }
  return false;
};
