import React from 'react';
import { DescriptionListTerm, DescriptionListGroup, DescriptionListDescription } from '@patternfly/react-core';
export const MoreInformationInstallVariant = ({ os = '', content = null, children = null }) => (React.createElement(DescriptionListGroup, null,
    React.createElement(DescriptionListTerm, null, os),
    React.createElement(DescriptionListDescription, null, content || children)));
MoreInformationInstallVariant.displayName = 'MoreInformationInstallVariant';
//# sourceMappingURL=MoreInformationInstallVariant.js.map