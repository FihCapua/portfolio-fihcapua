import styled from 'styled-components';
import { TextStylesVariantsMap } from '../../../../foundation/Text';

export const SectionTitle = styled.h1`
    text-align: center;
    color: ${function (props) {
        return props.theme.colors.primary.main.contrastText
    }};
    ${TextStylesVariantsMap.title}
    padding: 20px;
`;