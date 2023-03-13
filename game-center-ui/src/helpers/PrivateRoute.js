import { useKeycloak } from "@react-keycloak/web";
import Center from "../components/flex/Center";

const PrivateRoute = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return (
        isLoggedIn ? 
            children : 
            <Center>
                <h1 style={{textAlign: 'center'}}>Вы не вошли в аккаунт</h1>
            </Center>
    );
};

export default PrivateRoute;