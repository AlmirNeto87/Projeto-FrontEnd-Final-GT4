
import { Link } from 'react-router-dom';

import {
  InformationContainer,
  InformationTitle,
  InformationList,
  InformationItem,
} from './FooterInformation.styles';

const FooterInformation = ({ title, informations = [] }) => {
  return (
    <InformationContainer>
      <InformationTitle>{title}</InformationTitle>

      <InformationList>
        {informations.map((information, index) => (
          <InformationItem key={`${information.text}-${index}`}>
            <Link to={information.link}>
              {information.text}
            </Link>
          </InformationItem>
        ))}
      </InformationList>
    </InformationContainer>
  );
};

export default FooterInformation;
