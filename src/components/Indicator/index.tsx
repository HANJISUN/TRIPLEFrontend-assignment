import { IndicatorItem } from './Indicator.style'

interface Props {
  number: number
  unit: string
  desc: string
}

const Indicator = ({ number, unit, desc }: Props) => {
  return (
    <IndicatorItem>
      <strong>
        {number}
        {unit}
      </strong>
      {desc}
    </IndicatorItem>
  )
}

export default Indicator
