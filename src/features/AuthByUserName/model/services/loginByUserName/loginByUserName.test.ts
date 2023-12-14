import { loginByUserName } from "./loginByUserName";
import { userActions } from "@entities/User";
import { testAsyncThunk } from "@shared/lib/tests/testAsyncThunk";
import { api } from "@shared/api/api";

jest.mock("@shared/api/api");
const mockedAxios = jest.mocked(api);

describe("loginByUserName", () => {
  test("success login", async () => {
    const userValue = {
      id: 1,
      username: "test_username",
    };
    mockedAxios.post.mockResolvedValue({
      data: userValue,
    });

    const { callThunk, dispatch } = testAsyncThunk(loginByUserName);
    const result = await callThunk({
      username: "test1",
      password: "test2",
    });

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const { callThunk } = testAsyncThunk(loginByUserName);
    const result = await callThunk({
      username: "test1",
      password: "test2",
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("loginError");
  });
});
