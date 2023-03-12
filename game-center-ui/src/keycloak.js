import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8080/",
    realm: "Realm_1",
    clientId: "lyceum_game_center",
});

export default keycloak;