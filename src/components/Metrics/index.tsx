import { MetricsItem } from './metrics.style'

interface Props {
  number: number
  unit: string
  desc: string
}

const Metrics = ({ number, unit, desc }: Props) => {
  return (
    <MetricsItem>
      <strong>
        {number}
        {unit}
      </strong>
      {desc}
    </MetricsItem>
  )
}

export default Metrics
