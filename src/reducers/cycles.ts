export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case 'ADD_NEW_CYCLE':
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case 'INTERRUPT_CURRENT_CYCLE':
      return {
        ...state,
        cycles: state.cycles.map((cycle) =>
          cycle.id === state.activeCycleId
            ? { ...cycle, interruptedDate: new Date() }
            : cycle,
        ),
        activeCycleId: null,
      }
    case 'MARK_CURRENT_CYCLE_AS_FINISHED':
      return {
        ...state,
        cycles: state.cycles.map((cycle) =>
          cycle.id === state.activeCycleId
            ? { ...cycle, finishedDate: new Date() }
            : cycle,
        ),
      }

    default:
      return state
  }
}
