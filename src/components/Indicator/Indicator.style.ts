import styled, { keyframes } from 'styled-components'

interface NumberProp {
  number: number
}

const counter = (props: number) => keyframes`
 from {
   --num: 0
 }

 to {
   --num: ${props}
 }
`

const IndicatorItem = styled.li<NumberProp>`
  @property --num {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
  }

  margin-bottom: 20px;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: -1px;

  strong {
    font-weight: bold;

    span {
      animation: ${(props) => counter(props.number)} 2s
        cubic-bezier(0, 0.8, 0, 1);

      --num: ${(props) => props.number};

      counter-reset: num var(--num);

      ::after {
        content: counter(num);
      }
    }
  }

  :last-child {
    margin-bottom: 50px;
  }
`

export { IndicatorItem }
