import { AwardItemBox } from './award.style'

interface Props {
  imgSrc: string
  imgAlt: string
  firstLine: string
  secondLine: string
}

const Award = ({ imgSrc, imgAlt, firstLine, secondLine }: Props) => {
  return (
    <AwardItemBox>
      <img src={imgSrc} alt={imgAlt} />
      <p>
        {firstLine}
        <br />
        {secondLine}
      </p>
    </AwardItemBox>
  )
}

export default Award
