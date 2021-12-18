/* eslint-disable quotes */
import {
  Box,
  Button,
  Grid,
  Paper,
  Step,
  StepButton,
  Stepper,
  Typography,
} from '@mui/material'
import * as React from 'react'
import { GeneralInfo } from '../Character/elements/GeneralInfo'
import EditableSkills from './elements/EditableSkills'
import EditableStats from './elements/EditableStats'

const steps = [
  "Remplir formulaire d'accréditation 48-B",
  "tests physiques et neurologique d'aptitude",
  "Portfolio des capacités de l'agent",
]

const CreateCharacterStepper = (): React.ReactElement => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean
  }>({})

  const totalSteps = () => {
    return steps.length
  }

  const panels = [
    <Grid container key='grid-1' spacing={2}>
      <GeneralInfo key="1" />
      <GeneralInfo key="2" editable />
    </Grid>,
    EditableStats(),
    EditableSkills(),
  ]
  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    // It's the last step, but not all steps have been completed,
    // find the first step that has been completed
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        sx={{ padding: '16px', marginBottom: '16px' }}
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
            >
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {panels[activeStep]}
            <Box
              sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: 'inline-block' }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  )
}

const CreateCharacter = (): React.ReactElement => {
  return (
    <Paper>
      <CreateCharacterStepper />
    </Paper>
  )
}

export default CreateCharacter