import * as _Storage from "./storage"

describe("storage", () => {
	beforeEach(() => {
		window.localStorage.clear()
	})

	it("'exists' method should return true if there is value with provided name on localStorage", () => {
		const getItem = jest.spyOn(Storage.prototype, "getItem")
		const name = "::name::"
		window.localStorage.setItem(name, "::value::")
		const result = _Storage.exists(name)
		expect(getItem).toHaveBeenCalledWith(name)
		expect(result).toBeTruthy()
	})

	it("'exists' method should return false if there is no value with provided name on localStorage", () => {
		const getItem = jest.spyOn(Storage.prototype, "getItem")
		const result = _Storage.exists()
		expect(getItem).toHaveBeenCalledWith("::name::")
		expect(result).toBeFalsy()
	})

	it("'get' method should return indicated value from localstorage", () => {
		const getItem = jest.spyOn(Storage.prototype, "getItem")
		const name = "::name::"
		const value = "::value::"
		window.localStorage.setItem(name, value)
		const result = _Storage.get(name)
		expect(getItem).toHaveBeenCalledWith(name)
		expect(result).toEqual(value)
	})

	it("'set' method should save value as provided name on window localstorage", () => {
		const setItem = jest.spyOn(Storage.prototype, "setItem")
		const name = "::name::"
		const value = "::value::"
		_Storage.set(name, value)
		expect(setItem).toHaveBeenCalledWith(name, value)
		expect(window.localStorage.getItem(name)).toEqual(value)
	})

	it("'remove' method should delete provided name object from local storage", () => {
		const removeItem = jest.spyOn(Storage.prototype, "removeItem")
		const name = "::name::"
		window.localStorage.setItem(name, "::value::")
		_Storage.remove(name)
		const result = window.localStorage.getItem(name)
		expect(removeItem).toHaveBeenCalledWith(name)
		expect(result).toBeNull()
	})

	it("clear' method should empty local storage", () => {
		const clear = jest.spyOn(Storage.prototype, "clear")
		const name1 = "::name1::"
		const name2 = "::name2::"
		window.localStorage.setItem(name1, "::value1::")
		window.localStorage.setItem(name2, "::value2::")
		_Storage.clear()
		const result1 = window.localStorage.getItem(name1)
		const result2 = window.localStorage.getItem(name1)
		expect(clear).toHaveBeenCalled()
		expect(result1).toBeNull()
		expect(result2).toBeNull()
	})
})
