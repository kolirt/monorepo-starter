import { isRef, unref } from 'vue'

function unrefs(data: Record<string, any>) {
  let result: Record<string, any> = {}

  if (isRef(data)) {
    result = unref<{}>(data)
  } else {
    Object.keys(data).forEach((key) => {
      if (isRef(data[key])) {
        result[key] = unref(data[key])
      } else {
        result[key] = data[key]
      }
    })
  }

  return result
}

export { unrefs }
