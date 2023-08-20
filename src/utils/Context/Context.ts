import { type Handler } from 'innet'

export class Context <D = any, Def = D | undefined> {
  readonly key: string
  readonly defaultValue: Def

  constructor (defaultValue?: Def, name?: string) {
    this.defaultValue = defaultValue as Def
    this.key = Symbol(name) as unknown as string
  }

  get (handler: Handler): D | Def {
    return this.key in handler ? handler[this.key] : this.defaultValue
  }

  set (handler: Handler, value: D | Def) {
    handler[this.key] = value
  }

  reset (handler: Handler) {
    this.set(handler, this.defaultValue)
  }
}
