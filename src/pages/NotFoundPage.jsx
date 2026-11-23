import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  ErrorCode,
  NotFoundTitle,
  NotFoundMessage,
  BackHomeButton,
} from './NotFoundPage.styles';

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>

      <NotFoundTitle>Ops! Página não encontrada.</NotFoundTitle>

      <NotFoundMessage>
        Parece que essa página não existe ou foi movida.
        Mas não se preocupe, você pode voltar para a nossa loja!
      </NotFoundMessage>

      <BackHomeButton as={Link} to="/">
        Voltar para a Home
      </BackHomeButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;