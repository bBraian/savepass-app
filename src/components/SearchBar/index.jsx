import React from 'react';

import {
  Container,
  Input,
  Button,
  Icon
} from './styles';

export function SearchBar({
  style,
  ...rest
}) {
  return (
    <Container>
      <Input
        {...rest}
        placeholderTextColor='#b9b9b9'
      />

      <Button testID="search-button">
        <Icon name="search" />
      </Button>
    </Container>
  )
}