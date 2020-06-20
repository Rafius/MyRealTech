import * as Auth from "./auth"
import * as _Storage from "@shared/services/storage/storage"

describe("Auth", () => {
	it("'isAuthenticated' method should call 'exists' method from storage", () => {
		const exists = jest.spyOn(_Storage, "exists")
		Auth.isAuthenticated()
		expect(exists).toHaveBeenCalledWith("token")
	})

	it("'isAuthenticated' method should retrive true when 'exists' method from storage retrieves true", () => {
		const exists = jest.spyOn(_Storage, "exists")
		exists.mockReturnValue(true)
		const authenticated = Auth.isAuthenticated()
		expect(authenticated).toBeTruthy()
	})

	it("'isAuthenticated' method should retrive false when 'exists' method from storage retrieves false", () => {
		const exists = jest.spyOn(_Storage, "exists")
		exists.mockReturnValue(false)
		const authenticated = Auth.isAuthenticated()
		expect(authenticated).toBeFalsy()
	})

	it("'getToken' method should call 'get' method from storage and retrieve its returned value", () => {
		const get = jest.spyOn(_Storage, "get")
		const value = "::value::"
		get.mockReturnValue(value)
		const result = Auth.getToken()
		expect(get).toHaveBeenCalledWith("token")
		expect(result).toEqual(value)
	})

	it("'setToken' method should call 'set' method from storage", () => {
		const set = jest.spyOn(_Storage, "set")
		const tokenValue = "::token::"
		Auth.setToken(tokenValue)
		expect(set).toHaveBeenCalledWith("token", tokenValue)
	})

	it("'removeToken' method should call 'remove' method from storage", () => {
		const remove = jest.spyOn(_Storage, "remove")
		Auth.removeToken()
		expect(remove).toHaveBeenCalledWith("token")
	})
})
