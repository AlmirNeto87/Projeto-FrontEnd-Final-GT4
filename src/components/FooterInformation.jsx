import {
  InformationContainer,
  InformationTitle,
  InformationList,
  InformationLink,
} from './FooterInformation.styles';

const FooterInformation = ({ title, informations = [] }) => {
  return (
    <InformationContainer>
      <InformationTitle>{title}</InformationTitle>

      <InformationList>
        {informations.map((information, index) => (
          <li key={`${information.text}-${index}`}>
            <InformationLink to={information.link}>
              {information.text}
            </InformationLink>
          </li>
        ))}
      </InformationList>
    </InformationContainer>
  );
};

export default FooterInformation;
