import React from 'react';
import { Container, ButtonText} from './styles';

export function Button({title,...rest}) {
  return (
    <Container {...rest}>
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}