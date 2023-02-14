export function checkAndReturnAuthObject(){
    let authObject = window.localStorage.getItem("auth");
    try {
      authObject = JSON.parse(authObject);
      if (
        authObject?.user &&
        authObject?.accessToken &&
        authObject?.refreshToken
      ) {
        return authObject;
      } else
        return null;
    } catch (error) {
      console.log("[Home] Error parsing the JSON Object:", error);
      window.localStorage.removeItem("auth");
      return null;
    }
}
