
export const isEmptyString: (value?: any) => boolean = (value) => {
  return value === undefined || value === null || value.length === 0
}

export const isEmptyObject: (value?: Record<string, any>) => boolean = (value) => {
  return value === undefined || value === null || Object.keys(value).length === 0
}

export const isEmptyArray: (value?: any) => boolean = (value) => {
  return value === undefined || value === null || value.length === 0
}

export const isArray: (value?: any) => boolean = (value) => {
  return value !== undefined && value !== null && Array.isArray(value)
}
