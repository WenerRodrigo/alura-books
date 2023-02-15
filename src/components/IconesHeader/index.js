import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  display: flex;
  height: 50%;
  margin-right: 60px;
`
const Icones = styled.ul`
  display: flex;
  aligne-itness: center;
`

const icons = [ perfil, sacola ]

function IconesHeader() {
  return (
    <Icones>
      {icons.map((icon) => (
        <Icone className="icon">
          <img src={icon}></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
