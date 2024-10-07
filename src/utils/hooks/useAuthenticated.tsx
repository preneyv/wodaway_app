import {useEffect, useState} from "react";
import {globalCallApi} from "../axios";
import { T_Check_Authentication} from "../../types/auth.ts";
import {useNavigate} from "react-router-dom";

const useAuthenticated = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                setLoading(true)
                const data = await globalCallApi<null, T_Check_Authentication>({method: 'auth/CHECK_AUTHENTICATION'})
                setIsAuthenticated(data?.is_authenticated as boolean)
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [navigate]);

    return { isAuthenticated, loading };
};

export default useAuthenticated