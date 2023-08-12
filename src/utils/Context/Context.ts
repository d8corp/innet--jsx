import { type Handler } from 'innet'

export class Context <D = any, Def = D> {
  readonly key: string

  constructor (public readonly defaultValue?: Def, name?: string) {
    this.key = Symbol(name) as unknown as string
  }

  get (handler: Handler): D | Def {
    return this.key in handler ? handler[this.key] : this.defaultValue
  }

  set (handler: Handler, value: D | Def) {
    handler[this.key] = value
  }
}
