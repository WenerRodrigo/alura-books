import styled from 'styled-components';

const textOptions = ['Categories', 'Favorites', 'Bookshelf'];

const Option = styled.li`
  min-width: 120px;
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`
const Options = styled.ul`
  display: flex;
`

function OptionsHeader() {
  return (
    <Options>
      {textOptions.map((text) => (
        <Option>
          <p>{text}</p>
        </Option>
      ))}
    </Options>
  );
}

export default OptionsHeader;
