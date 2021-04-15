// import React from 'react';
// import { Step, StepContent, StepLabel } from '@material-ui/core';

// Vigor Components
// import { useSelector } from 'react-redux';
// import VigorLinkButtonGrey from '../../../theme/custom-styles/greyLinkButtonStyles';
// import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';
// import VigorPrimaryProgressButton from '../../Miscellaneous/Buttons/VigorPrimaryProgressButton';
// import StepValidationCircle from './StepValidationCircle';

// TODO: Add steps prop back and refactor this to be simpler/cleaner
const FormStep = () =>
  // const { isLoading } = useSelector(({ loadingState }) => loadingState);
  // const { message } = useSelector(({ currentUser }) => currentUser);

  // const submitOrLoading = isLoading ? (
  //   <VigorPrimaryProgressButton />
  // ) : (
  //   <VigorPrimaryButton type="submit" disabled={!!message}>
  //     Submit
  //   </VigorPrimaryButton>
  // );

  null;
// return steps.map((label, index) => (
//   <Step key={label}>
//     <StepLabel
//       classes={{
//         root: stepLabel,
//       }}
//       error={!validation[index]}
//       StepIconComponent={StepValidationCircle}
//       StepIconProps={{
//         active: activeStep === index,
//         valid: credentials[index] && validation[index],
//         error: !validation[index],
//       }}
//     >
//       {label}
//     </StepLabel>
//     <StepContent
//       classes={{
//         root: stepContent,
//       }}
//     >
//       {fields[index]}
//       <div className={actionsContainer}>
//         {index > 0 && (
//           <VigorLinkButtonGrey onClick={handleBack}>Prev</VigorLinkButtonGrey>
//         )}
//         {index === steps.length - 1 ? (
//           submitOrLoading
//         ) : (
//           <VigorPrimaryButton
//             onClick={handleNext}
//             disabled={!Object.values(signUpCredentials)[index]}
//           >
//             Next
//           </VigorPrimaryButton>
//         )}
//       </div>
//     </StepContent>
//   </Step>
// ));
export default FormStep;
