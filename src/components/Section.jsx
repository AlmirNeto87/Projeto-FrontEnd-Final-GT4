
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionLink,
  SectionContent,
} from './Section.styles';

const Section = ({
  title,
  titleAlign = 'left',
  link,
  children,
}) => {
  return (
    <SectionContainer>
      <SectionHeader $titleAlign={titleAlign}>
        <SectionTitle>{title}</SectionTitle>

        {link && (
          <SectionLink href={link.href}>
            {link.text}
          </SectionLink>
        )}
      </SectionHeader>

      <SectionContent>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
