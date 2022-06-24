import styled from 'styled-components'

const AwardItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 40px;

  img {
    width: 54px;
    height: 54px;
    margin-right: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray800};
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
  }
`

export { AwardItem }
