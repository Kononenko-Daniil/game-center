import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "https://dankan-id.bsulyceum.org/",
    realm: "lyceum_game_center",
    clientId: "game_center",
});

export default keycloak;