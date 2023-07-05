// @ts-nocheck

export const createEffectsClass = () => {

  return {
    Effects: class Effects {
      constructor() {
        this.id = Symbol()
        this.effects = []
        this.add = (effect) => {
          this.effects = [...this.effects, effect]
        }
      }
    } 
  }
}
