const printEnv = () => {
    console.log('API URL:', import.meta.env.VITE_REACT_APP_API_URL);
    console.log( import.meta.env.REACT_APP_BASE_URL);
    // Add more variables as needed
  };
  
  printEnv();