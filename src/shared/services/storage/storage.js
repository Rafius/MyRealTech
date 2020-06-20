export const exists = name => {
  const value = window.localStorage.getItem(name)
  return !!value
}

export const get = name => window.localStorage.getItem(name)

export const set = (name, value) => window.localStorage.setItem(name, value)

export const remove = name => window.localStorage.removeItem(name)

export const clear = () => window.localStorage.clear()
