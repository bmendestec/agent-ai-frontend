import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

function FacebookLoginButton() {
    const { handleLoginFb } = useAuth();
    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "783350540837817",
                cookie: true,
                xfbml: true,
                version: "v23.0"
            });
        };

        // Carrega o SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);


    return (
        <button onClick={handleLoginFb}>
            Login com Facebook
        </button>
    );
}

export default FacebookLoginButton;