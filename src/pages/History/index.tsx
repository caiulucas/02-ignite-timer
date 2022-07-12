import { formatDistanceToNow } from 'date-fns/esm'
import { ptBR } from 'date-fns/locale'
import { useCycles } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, StatusFlag } from './styles'

export function History() {
  const { cycles } = useCycles()

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <StatusFlag status="finished">Concluído</StatusFlag>
                  )}
                  {cycle.interruptedDate && (
                    <StatusFlag status="interrupted">Interrompido</StatusFlag>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <StatusFlag status="ongoing">Em andamento</StatusFlag>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
