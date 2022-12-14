import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchUserData from "../../API/services/fetchUserData";
import loginWithCredentials, {
	LoginCredentials,
} from "../../API/services/login";
import { setAccessToken, setRefreshToken } from "../../helpers/localStorage";
import { syncTokens } from "../slices/authSlice";

export const fetchUser = createAsyncThunk("fetch/user", async (_, ThunkApi) => {
    ThunkApi.dispatch(syncTokens());
    try {
        const res = await fetchUserData();
        return res.data;
    } catch (error) {
        throw error;
    }
});

export const loginAction = createAsyncThunk(
	"login/action",
	async (credentials: LoginCredentials, ThunkApi) => {
		try {
			const res = await loginWithCredentials(credentials);
            const accessToken = res.headers['auth-access-token'];
            const refreshToken = res.headers['auth-refresh-token'];
            if(!accessToken || !refreshToken) {
                throw new Error("No access token obtained");
            }
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
            ThunkApi.dispatch(fetchUser());
			return {
                accessToken,
                refreshToken,
            }
		} catch (error) {
			throw error;
		}
	}
);
