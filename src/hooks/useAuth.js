import { useState } from "react";

const useAuth = (url) => {
  const searchedValues = JSON.parse(localStorage.getItem("searchValues")) || [];
  const token = localStorage.getItem("token");

  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setisAuthorized] = useState(token ? true : false);
  const [Errors, setErrors] = useState([]);
  const [Token, setToken] = useState("");
  const [username, setusername] = useState("");
  const [searchValue, setSearchValue] = useState(searchedValues);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setusername("");
    setisAuthorized(false);
  };

  return {
    isAuthorized,
    setisAuthorized,
    isLoading,
    setIsLoading,
    Errors,
    setErrors,
    Token,
    setToken,
    username,
    setusername,
    logout,
    searchValue,
    setSearchValue,
  };
};

export default useAuth;
